export type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  need: string;
  message: string;
  consent: boolean;
  honeypot: string;
  startedAt: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactFormValues, string>> & {
  form?: string;
};

const MAX_LENGTHS = {
  name: 120,
  company: 160,
  email: 254,
  phone: 32,
  need: 120,
  message: 4000,
};

export const contactNeedOptions = [
  "Start Digital — site vitrine simple",
  "Grow Business — site intermédiaire avec intégrations",
  "Scale Enterprise — site premium sur mesure",
  "Support IT / maintenance",
  "Autre demande",
];

export function createEmptyContactValues(): ContactFormValues {
  return {
    name: "",
    company: "",
    email: "",
    phone: "",
    need: "",
    message: "",
    consent: false,
    honeypot: "",
    startedAt: String(Date.now()),
  };
}

export function normalizeContactValues(values: ContactFormValues): ContactFormValues {
  return {
    name: values.name.trim().slice(0, MAX_LENGTHS.name),
    company: values.company.trim().slice(0, MAX_LENGTHS.company),
    email: values.email.trim().slice(0, MAX_LENGTHS.email),
    phone: values.phone.trim().slice(0, MAX_LENGTHS.phone),
    need: values.need.trim().slice(0, MAX_LENGTHS.need),
    message: values.message.trim().slice(0, MAX_LENGTHS.message),
    consent: values.consent,
    honeypot: values.honeypot.trim(),
    startedAt: values.startedAt,
  };
}

export function validateContactForm(values: ContactFormValues): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  const normalized = normalizeContactValues(values);

  if (normalized.honeypot) {
    errors.form = "Soumission bloquée.";
    return errors;
  }

  const elapsed = Date.now() - Number(normalized.startedAt || 0);
  if (!Number.isFinite(elapsed) || elapsed < 2000) {
    errors.form = "Veuillez patienter quelques secondes avant d’envoyer.";
    return errors;
  }

  if (normalized.name.length < 2) {
    errors.name = "Indiquez un nom valide.";
  }

  if (normalized.name.length > MAX_LENGTHS.name) {
    errors.name = "Le nom est trop long.";
  }

  if (normalized.company.length < 2) {
    errors.company = "Indiquez votre entreprise.";
  }

  if (normalized.company.length > MAX_LENGTHS.company) {
    errors.company = "Le nom de l'entreprise est trop long.";
  }

  if (!isValidEmail(normalized.email)) {
    errors.email = "Indiquez une adresse email valide.";
  }

  if (normalized.email.length > MAX_LENGTHS.email) {
    errors.email = "L'adresse email est trop longue.";
  }

  if (normalized.phone && !isValidPhone(normalized.phone)) {
    errors.phone = "Indiquez un numéro valide ou laissez vide.";
  }

  if (normalized.phone.length > MAX_LENGTHS.phone) {
    errors.phone = "Le numéro est trop long.";
  }

  if (normalized.need.length < 3) {
    errors.need = "Précisez brièvement votre besoin.";
  }

  if (normalized.need.length > MAX_LENGTHS.need) {
    errors.need = "Le besoin est trop long.";
  }

  if (normalized.message.length < 20) {
    errors.message = "Le message doit contenir au moins 20 caractères.";
  }

  if (normalized.message.length > MAX_LENGTHS.message) {
    errors.message = "Le message est trop long.";
  }

  if (!normalized.consent) {
    errors.consent = "Veuillez accepter le traitement de vos données pour continuer.";
  }

  return errors;
}

export function hasContactErrors(errors: ContactFieldErrors) {
  return Object.keys(errors).length > 0;
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function isValidPhone(phone: string) {
  const compact = phone.replace(/[\s().-]/g, "");
  return /^[+]?\d{8,15}$/.test(compact);
}