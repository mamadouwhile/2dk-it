import { NextResponse } from "next/server";

import { normalizeContactValues, validateContactForm, type ContactFormValues } from "@/lib/contact";
import {
  getContactMailerConfigurationMessage,
  isContactMailerConfigured,
  sendContactEmails,
} from "@/lib/contact-mailer";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type RateLimitState = {
  count: number;
  resetAt: number;
};

type ContactRateLimitStore = Map<string, RateLimitState>;

type GlobalWithContactRateLimitStore = typeof globalThis & {
  __contactRateLimitStore?: ContactRateLimitStore;
};

// Limite simple: 5 requêtes par IP sur une fenêtre glissante de 10 minutes.
// Stockage en mémoire best-effort pour Vercel/serverless: partagé uniquement sur une instance chaude.
const globalWithContactRateLimitStore = globalThis as GlobalWithContactRateLimitStore;
const rateLimitStore = globalWithContactRateLimitStore.__contactRateLimitStore ??= new Map<
  string,
  RateLimitState
>();

type ContactPayload = ContactFormValues & {
  source?: string;
};

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const cfConnectingIp = request.headers.get("cf-connecting-ip");

  const candidate = forwardedFor?.split(",")[0]?.trim() || realIp?.trim() || cfConnectingIp?.trim();

  return candidate || "unknown";
}

function applyContactRateLimit(clientIp: string) {
  const now = Date.now();
  for (const [ip, state] of rateLimitStore.entries()) {
    if (state.resetAt <= now) {
      rateLimitStore.delete(ip);
    }
  }
  const currentEntry = rateLimitStore.get(clientIp);

  if (!currentEntry || currentEntry.resetAt <= now) {
    rateLimitStore.set(clientIp, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return {
      limited: false,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    };
  }

  if (currentEntry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      limited: true,
      remaining: 0,
      resetAt: currentEntry.resetAt,
    };
  }

  const nextEntry = {
    count: currentEntry.count + 1,
    resetAt: currentEntry.resetAt,
  };

  rateLimitStore.set(clientIp, nextEntry);

  return {
    limited: false,
    remaining: RATE_LIMIT_MAX_REQUESTS - nextEntry.count,
    resetAt: nextEntry.resetAt,
  };
}

function getRateLimitResponse(rateLimit: ReturnType<typeof applyContactRateLimit>) {
  if (!rateLimit.limited) {
    return null;
  }

  const retryAfterSeconds = Math.max(1, Math.ceil((rateLimit.resetAt - Date.now()) / 1000));

  return NextResponse.json(
    {
      ok: false,
      message: "Trop de requêtes sur le formulaire de contact. Réessayez dans quelques minutes.",
    },
    {
      status: 429,
      headers: {
        "Retry-After": String(retryAfterSeconds),
      },
    },
  );
}

export async function POST(request: Request) {
  if (!isContactMailerConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        message: getContactMailerConfigurationMessage(),
      },
      { status: 503 },
    );
  }

  const clientIp = getClientIp(request);
  const rateLimit = applyContactRateLimit(clientIp);

  const rateLimitResponse = getRateLimitResponse(rateLimit);
  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Requête invalide." },
      { status: 400 },
    );
  }

  const normalizedPayload = normalizeContactValues(payload);
  const errors = validateContactForm(normalizedPayload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: errors.form ?? "Merci de corriger les champs indiqués.", errors },
      { status: 400 },
    );
  }

  try {
    const result = await sendContactEmails(normalizedPayload);

    return NextResponse.json({
      ok: true,
      message: result.confirmationSent
        ? "Votre demande a bien été envoyée. Un accusé de réception vous a également été transmis."
        : "Votre demande a bien été envoyée. Nous revenons vers vous rapidement.",
      confirmationSent: result.confirmationSent,
      rateLimitRemaining: rateLimit.remaining,
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message:
          "L'envoi email n'est pas disponible pour le moment. Vérifiez la configuration SMTP ou réessayez plus tard.",
      },
      { status: 503 },
    );
  }
}