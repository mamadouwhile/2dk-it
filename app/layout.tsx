import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.2dk-it.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "2DK IT",
    template: "%s | 2DK IT",
  },
  description:
    "Création de sites web et accompagnement IT pour les entreprises qui veulent une présence en ligne claire, crédible et efficace.",
  applicationName: "2DK IT",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "2DK IT",
    url: siteUrl,
    title: "2DK IT",
    description:
      "Création de sites web et accompagnement IT pour les entreprises qui veulent une présence en ligne claire, crédible et efficace.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "2DK IT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2DK IT",
    description:
      "Création de sites web et accompagnement IT pour les entreprises qui veulent une présence en ligne claire, crédible et efficace.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020817",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}