export type LegalPageLink = {
  label: string;
  href: string;
};

export type LegalPlaceholder = {
  label: string;
  value: string;
  hint?: string;
};

export const legalPageLinks: LegalPageLink[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/politique-de-confidentialite" },
  { label: "Cookies", href: "/politique-de-cookies" },
  { label: "CGU", href: "/cgu" },
];

export const legalPlaceholders = {
  company: "À compléter",
  address: "À compléter",
  siren: "À compléter",
  siret: "À compléter",
  email: "contact@2dk-it.fr",
  phone: "À compléter",
  host: "À compléter",
  publicationDirector: "À compléter",
};
