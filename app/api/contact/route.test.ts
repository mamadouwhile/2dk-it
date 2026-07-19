import { beforeEach, describe, expect, it, vi } from "vitest";

import type { ContactFormValues } from "@/lib/contact";

const contactMailerMock = vi.hoisted(() => ({
  getContactMailerConfigurationMessage: vi.fn(),
  isContactMailerConfigured: vi.fn(),
  sendContactEmails: vi.fn(),
}));

vi.mock("@/lib/contact-mailer", () => contactMailerMock);

import { POST } from "@/app/api/contact/route";

function createValidPayload(overrides: Partial<ContactFormValues> = {}): ContactFormValues {
  return {
    name: "  Alice Martin  ",
    company: "  2DK Conseil  ",
    email: "  alice@example.com  ",
    phone: "  +33 6 12 34 56 78  ",
    need: "  Création de site vitrine  ",
    message:
      "  Nous souhaitons un accompagnement pour refondre notre site vitrine B2B avec une approche claire.  ",
    consent: true,
    honeypot: "",
    startedAt: String(Date.now() - 3000),
    ...overrides,
  };
}

function createRequest(payload: Partial<ContactFormValues>, ip = "203.0.113.10") {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(payload),
  });
}

beforeEach(() => {
  contactMailerMock.isContactMailerConfigured.mockReturnValue(true);
  contactMailerMock.getContactMailerConfigurationMessage.mockReturnValue(
    "Configuration email incomplète.",
  );
  contactMailerMock.sendContactEmails.mockResolvedValue({ confirmationSent: true });
});

describe("POST /api/contact", () => {
  it("envoie un formulaire valide avec les valeurs normalisées", async () => {
    const response = await POST(createRequest(createValidPayload()));
    const body = (await response.json()) as {
      ok: boolean;
      message: string;
      confirmationSent: boolean;
      rateLimitRemaining: number;
    };

    expect(response.status).toBe(200);
    expect(body.ok).toBe(true);
    expect(body.confirmationSent).toBe(true);
    expect(body.rateLimitRemaining).toBe(4);
    expect(body.message).toContain("accusé de réception");
    expect(contactMailerMock.sendContactEmails).toHaveBeenCalledTimes(1);
    expect(contactMailerMock.sendContactEmails).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Alice Martin",
        company: "2DK Conseil",
        email: "alice@example.com",
        phone: "+33 6 12 34 56 78",
        need: "Création de site vitrine",
        consent: true,
      }),
    );
  });

  it("rejette une requête avec des champs manquants", async () => {
    const response = await POST(
      createRequest(
        {
          name: "",
          company: "",
          email: "",
          phone: "",
          need: "",
          message: "",
          consent: false,
          honeypot: "",
          startedAt: String(Date.now() - 3000),
        },
        "203.0.113.11",
      ),
    );
    const body = (await response.json()) as {
      ok: boolean;
      message: string;
      errors?: Record<string, string>;
    };

    expect(response.status).toBe(400);
    expect(body.ok).toBe(false);
    expect(body.errors).toMatchObject({
      name: "Indiquez un nom valide.",
      company: "Indiquez votre entreprise.",
      email: "Indiquez une adresse email valide.",
      need: "Précisez brièvement votre besoin.",
      message: "Le message doit contenir au moins 20 caractères.",
      consent: "Veuillez accepter le traitement de vos données pour continuer.",
    });
    expect(contactMailerMock.sendContactEmails).not.toHaveBeenCalled();
  });

  it("rejette une soumission quand le honeypot est rempli", async () => {
    const response = await POST(
      createRequest(
        {
          ...createValidPayload({ honeypot: "robot" }),
        },
        "203.0.113.12",
      ),
    );
    const body = (await response.json()) as {
      ok: boolean;
      message: string;
      errors?: Record<string, string>;
    };

    expect(response.status).toBe(400);
    expect(body.message).toBe("Soumission bloquée.");
    expect(body.errors).toMatchObject({ form: "Soumission bloquée." });
    expect(contactMailerMock.sendContactEmails).not.toHaveBeenCalled();
  });

  it("rejette une soumission trop rapide", async () => {
    const response = await POST(
      createRequest(
        {
          ...createValidPayload({ startedAt: String(Date.now() - 1000) }),
        },
        "203.0.113.13",
      ),
    );
    const body = (await response.json()) as {
      ok: boolean;
      message: string;
      errors?: Record<string, string>;
    };

    expect(response.status).toBe(400);
    expect(body.message).toBe("Veuillez patienter quelques secondes avant d’envoyer.");
    expect(body.errors).toMatchObject({
      form: "Veuillez patienter quelques secondes avant d’envoyer.",
    });
    expect(contactMailerMock.sendContactEmails).not.toHaveBeenCalled();
  });

  it("signale un échec de configuration SMTP", async () => {
    contactMailerMock.isContactMailerConfigured.mockReturnValue(false);
    contactMailerMock.getContactMailerConfigurationMessage.mockReturnValue(
      "Configuration email incomplète. Variables manquantes: SMTP_HOST, SMTP_USER.",
    );

    const response = await POST(createRequest(createValidPayload(), "203.0.113.14"));
    const body = (await response.json()) as {
      ok: boolean;
      message: string;
    };

    expect(response.status).toBe(503);
    expect(body.ok).toBe(false);
    expect(body.message).toContain("Configuration email incomplète");
    expect(contactMailerMock.sendContactEmails).not.toHaveBeenCalled();
  });
});