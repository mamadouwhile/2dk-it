export type NavigationItem = {
  label: string;
  href: string;
};

export type ContactLine = {
  label: string;
  value: string;
};

export const companyName = "2DK IT";
export const companyAddress = "À compléter par 2DK IT";
export const companySiren = "SIREN non communiqué — à renseigner";
export const hostingProvider = "Hébergeur non communiqué — à renseigner";
export const companyEmail = "À compléter par 2DK IT";
export const companyPhone = "À compléter par 2DK IT";
export const dpoEmail = "À compléter par 2DK IT";

export const siteConfig = {
  name: companyName,
  legalName: companyName,
  tagline:
    "Sites web et services IT pour entreprises qui veulent une image claire, crédible et premium.",
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/a-propos" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavigationItem[],
  legalNavigation: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
    { label: "Politique de cookies", href: "/politique-de-cookies" },
    { label: "CGU", href: "/cgu" },
  ] satisfies NavigationItem[],
  contactLines: [
    { label: "Email", value: companyEmail },
    { label: "Téléphone", value: companyPhone },
    { label: "Adresse", value: companyAddress },
  ] satisfies ContactLine[],
  contactDetails: {
    email: companyEmail,
    phone: companyPhone,
    address: companyAddress,
    responseTime: "Réponse sous 1 jour ouvré",
    availability: "Du lundi au vendredi",
  } satisfies Record<string, string>,
};