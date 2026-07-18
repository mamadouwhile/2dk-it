import portfolioJson from "@/content/portfolio.json";

import { contentJson } from "@/lib/content-json";

export type PortfolioProject = {
  name: string;
  type: string;
  context: string;
  problem: string;
  solution: string;
  result: string;
  imageLabel: string;
  imageAccent: string;
  href?: string;
  imageSrc?: string;
  imageSrcMobile?: string;
  imageSrcDetail?: string;
  gallery?: string[];
};

function isPortfolioProject(value: unknown): value is PortfolioProject {
  if (!contentJson.isRecord(value)) {
    return false;
  }

  const requiredStringKeys: Array<keyof PortfolioProject> = [
    "name",
    "type",
    "context",
    "problem",
    "solution",
    "result",
    "imageLabel",
    "imageAccent",
  ];

  const hasRequiredStrings = requiredStringKeys.every(
    (key) => typeof value[key] === "string" && value[key].length > 0,
  );

  if (!hasRequiredStrings) {
    return false;
  }

  const optionalStringKeys: Array<keyof PortfolioProject> = [
    "href",
    "imageSrc",
    "imageSrcMobile",
    "imageSrcDetail",
  ];

  const optionalStringsValid = optionalStringKeys.every(
    (key) => value[key] === undefined || typeof value[key] === "string",
  );

  if (!optionalStringsValid) {
    return false;
  }

  const gallery = value.gallery;
  const galleryValid =
    gallery === undefined ||
    (Array.isArray(gallery) && gallery.every((item) => typeof item === "string"));

  return galleryValid;
}

function isPortfolioProjects(value: unknown): value is PortfolioProject[] {
  return Array.isArray(value) && value.every(isPortfolioProject);
}

export function loadPortfolioProjects(): PortfolioProject[] {
  return contentJson.parseTypedJson(portfolioJson, isPortfolioProjects, "portfolio");
}

export const portfolioProjects = loadPortfolioProjects();