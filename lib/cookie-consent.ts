export const COOKIE_CONSENT_COOKIE_NAME = "2dk_cookie_consent";

// Recommandation CNIL: conservation du consentement limitée à 6 mois maximum.
export const COOKIE_CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;

export type CookieConsentChoice = "accepted" | "rejected" | "custom";
export type CookieConsentCategory = "analytics" | "marketing";

export type CookieConsentPreferences = {
  analytics: boolean;
  marketing: boolean;
};

export type CookieConsentState = {
  choice: CookieConsentChoice;
  preferences: CookieConsentPreferences;
  updatedAt: string;
};

const defaultPreferences: CookieConsentPreferences = {
  analytics: false,
  marketing: false,
};

function nowIsoString() {
  return new Date().toISOString();
}

function normalizePreferences(preferences?: Partial<CookieConsentPreferences>): CookieConsentPreferences {
  return {
    analytics: Boolean(preferences?.analytics),
    marketing: Boolean(preferences?.marketing),
  };
}

function buildConsentState(
  choice: CookieConsentChoice,
  preferences: Partial<CookieConsentPreferences>,
): CookieConsentState {
  return {
    choice,
    preferences: normalizePreferences(preferences),
    updatedAt: nowIsoString(),
  };
}

export function createAcceptedConsent(): CookieConsentState {
  return buildConsentState("accepted", { analytics: true, marketing: true });
}

export function createRejectedConsent(): CookieConsentState {
  return buildConsentState("rejected", defaultPreferences);
}

export function createCustomConsent(preferences: Partial<CookieConsentPreferences>): CookieConsentState {
  return buildConsentState("custom", preferences);
}

export function serializeCookieConsent(state: CookieConsentState) {
  return encodeURIComponent(JSON.stringify(state));
}

export function parseCookieConsent(value?: string | null): CookieConsentState | null {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(decodeURIComponent(value)) as Partial<CookieConsentState>;
    if (!parsed || typeof parsed !== "object") {
      return null;
    }

    if (parsed.choice !== "accepted" && parsed.choice !== "rejected" && parsed.choice !== "custom") {
      return null;
    }

    return {
      choice: parsed.choice,
      preferences: normalizePreferences(parsed.preferences),
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : nowIsoString(),
    };
  } catch {
    return null;
  }
}

export function buildCookieConsentHeader(state: CookieConsentState) {
  const attributes = [
    `${COOKIE_CONSENT_COOKIE_NAME}=${serializeCookieConsent(state)}`,
    "Path=/",
    `Max-Age=${COOKIE_CONSENT_MAX_AGE_SECONDS}`,
    "SameSite=Lax",
  ];

  if (process.env.NODE_ENV === "production") {
    attributes.push("Secure");
  }

  return attributes.join("; ");
}

export function isNonEssentialScriptAllowed(
  consent: CookieConsentState | null,
  category: CookieConsentCategory,
) {
  if (!consent) {
    return false;
  }

  if (consent.choice === "accepted") {
    return true;
  }

  if (consent.choice === "rejected") {
    return false;
  }

  return consent.preferences[category];
}

