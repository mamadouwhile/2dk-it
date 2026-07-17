import servicesJson from "@/content/services.json";

import { contentJson } from "@/lib/content-json";

export type OfferTone = "subtle" | "accent";

export type WebOffer = {
  name: string;
  tone: OfferTone;
  summary: string;
  who: string;
  goals: string[];
  deliverables: string[];
  benefits: string[];
  personalization: string;
};

export type SupportItem = {
  title: string;
  description: string;
};

export type ChooseStep = {
  title: string;
  description: string;
};

export type ServicesContent = {
  webOffers: WebOffer[];
  supportItems: SupportItem[];
  chooseSteps: ChooseStep[];
};

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string" && item.length > 0);
}

function isWebOffer(value: unknown): value is WebOffer {
  if (!contentJson.isRecord(value)) {
    return false;
  }

  return (
    (value.tone === "subtle" || value.tone === "accent") &&
    typeof value.name === "string" &&
    typeof value.summary === "string" &&
    typeof value.who === "string" &&
    typeof value.personalization === "string" &&
    isStringArray(value.goals) &&
    isStringArray(value.deliverables) &&
    isStringArray(value.benefits)
  );
}

function isSupportItem(value: unknown): value is SupportItem {
  return contentJson.isRecord(value) && typeof value.title === "string" && typeof value.description === "string";
}

function isChooseStep(value: unknown): value is ChooseStep {
  return contentJson.isRecord(value) && typeof value.title === "string" && typeof value.description === "string";
}

function isServicesContent(value: unknown): value is ServicesContent {
  if (!contentJson.isRecord(value)) {
    return false;
  }

  return (
    Array.isArray(value.webOffers) && value.webOffers.every(isWebOffer) &&
    Array.isArray(value.supportItems) && value.supportItems.every(isSupportItem) &&
    Array.isArray(value.chooseSteps) && value.chooseSteps.every(isChooseStep)
  );
}

export function loadServicesContent(): ServicesContent {
  return contentJson.parseTypedJson(servicesJson, isServicesContent, "services");
}

const servicesContentValue = loadServicesContent();
export { servicesContentValue as servicesContent };


