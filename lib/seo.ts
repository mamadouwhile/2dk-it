import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.2dk-it.fr";

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = new URL(path, siteUrl).toString();
  const ogImage = new URL("/opengraph-image", siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: "2DK IT",
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `2DK IT - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}