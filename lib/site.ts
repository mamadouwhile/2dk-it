import type { NavigationItem } from "@/types/navigation";

export const siteConfig = {
  name: "2DK IT",
  legalName: "2DK IT",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.2dk-it.fr",
  tagline:
    "Création de sites web professionnels et accompagnement informatique pour les entreprises.",
  description:
    "2DK IT conçoit des sites web clairs, rapides et crédibles, et accompagne les entreprises dans leurs besoins informatiques du quotidien.",

  contactLines: [
    {
      label: "Email",
      value: "contact@2dk-it.fr",
    },
    {
      label: "Zone d’intervention",
      value: "France",
    },
    {
      label: "Réponse",
      value: "Sous 24 à 48 h",
    },
  ],

  contactDetails: {
    email: "contact@2dk-it.fr",
    phone: "À compléter",
    address: "À compléter",
    city: "À compléter",
    postalCode: "À compléter",
    country: "France",
  },

  companyDetails: {
    companyName: "2DK IT",
    legalName: "2DK IT",
    siren: "À compléter",
    siret: "À compléter",
    vatNumber: "À compléter",
    publicationDirector: "À compléter",
    host: "À compléter",
    hostAddress: "À compléter",
  },

  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavigationItem[],

  legalNavigation: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
    { label: "Politique de cookies", href: "/politique-de-cookies" },
    { label: "CGU", href: "/cgu" },
  ] satisfies NavigationItem[],
};

export const companyName = siteConfig.companyDetails.companyName;
export const companyAddress = [
  siteConfig.contactDetails.address,
  siteConfig.contactDetails.postalCode,
  siteConfig.contactDetails.city,
  siteConfig.contactDetails.country,
]
  .filter(Boolean)
  .join(", ");

export const companySiren = siteConfig.companyDetails.siren;
export const companySiret = siteConfig.companyDetails.siret;
export const dpoEmail = siteConfig.contactDetails.email;
export const hostingProvider = siteConfig.companyDetails.host;

