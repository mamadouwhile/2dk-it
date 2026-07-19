import { describe, expect, it } from "vitest";

import {
  createEmptyContactValues,
  hasContactErrors,
  isValidEmail,
  isValidPhone,
  normalizeContactValues,
  validateContactForm,
  type ContactFormValues,
} from "@/lib/contact";

function createValidContactValues(overrides: Partial<ContactFormValues> = {}): ContactFormValues {
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

describe("contact validation helpers", () => {
  it("creates empty values with an initialized timestamp", () => {
    const values = createEmptyContactValues();

    expect(values).toMatchObject({
      name: "",
      company: "",
      email: "",
      phone: "",
      need: "",
      message: "",
      consent: false,
      honeypot: "",
    });
    expect(values.startedAt).toMatch(/^\d+$/);
  });

  it("normalizes whitespace and truncates fields", () => {
    const values = normalizeContactValues(
      createValidContactValues({
        name: ` ${"A".repeat(200)} `,
        company: ` ${"B".repeat(200)} `,
        email: " alice@example.com ",
        phone: " +33 6 12 34 56 78 ",
        need: ` ${"C".repeat(200)} `,
        message: ` ${"D".repeat(5000)} `,
        honeypot: "  hidden  ",
      }),
    );

    expect(values.name).toHaveLength(120);
    expect(values.company).toHaveLength(160);
    expect(values.email).toBe("alice@example.com");
    expect(values.phone).toBe("+33 6 12 34 56 78".slice(0, 32));
    expect(values.need).toHaveLength(120);
    expect(values.message).toHaveLength(4000);
    expect(values.honeypot).toBe("hidden");
  });

  it("accepts valid email and phone formats", () => {
    expect(isValidEmail("contact@2dk-it.fr")).toBe(true);
    expect(isValidEmail("invalid-email")).toBe(false);

    expect(isValidPhone("06 12 34 56 78")).toBe(true);
    expect(isValidPhone("+33612345678")).toBe(true);
    expect(isValidPhone("12-34")).toBe(false);
  });

  it("validates a complete contact form", () => {
    const errors = validateContactForm(createValidContactValues());

    expect(errors).toEqual({});
    expect(hasContactErrors(errors)).toBe(false);
  });

  it("returns form errors for honeypot and anti-spam timing", () => {
    const honeypotErrors = validateContactForm(
      createValidContactValues({ honeypot: "robot" }),
    );
    const timingErrors = validateContactForm(
      createValidContactValues({ startedAt: String(Date.now() - 1000) }),
    );

    expect(honeypotErrors.form).toBe("Soumission bloquée.");
    expect(timingErrors.form).toBe("Veuillez patienter quelques secondes avant d’envoyer.");
  });

  it("reports field errors for invalid required values", () => {
    const errors = validateContactForm(
      createValidContactValues({
        name: "A",
        company: "",
        email: "not-an-email",
        phone: "123",
        need: "no",
        message: "trop court",
      }),
    );

    expect(errors).toMatchObject({
      name: "Indiquez un nom valide.",
      company: "Indiquez votre entreprise.",
      email: "Indiquez une adresse email valide.",
      phone: "Indiquez un numéro valide ou laissez vide.",
      need: "Précisez brièvement votre besoin.",
      message: "Le message doit contenir au moins 20 caractères.",
    });
  });

  it("requires consent before submission", () => {
    const errors = validateContactForm(createValidContactValues({ consent: false }));

    expect(errors.consent).toBe("Veuillez accepter le traitement de vos données pour continuer.");
  });
});