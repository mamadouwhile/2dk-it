import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { StructuredData } from "@/components/structured-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.2dk-it.fr";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "2DK IT",
    template: "%s | 2DK IT",
  },
  description:
    "2DK IT conçoit des sites web sobres et accompagne les besoins IT avec une approche claire, fiable et B2B.",
  applicationName: "2DK IT",
  creator: "2DK IT",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "2DK IT",
    title: "2DK IT",
    description:
      "2DK IT conçoit des sites web sobres et accompagne les besoins IT avec une approche claire, fiable et B2B.",
    url: siteUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "2DK IT - Sites web et services IT pour entreprises B2B",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2DK IT",
    description:
      "2DK IT conçoit des sites web sobres et accompagne les besoins IT avec une approche claire, fiable et B2B.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "2DK IT",
      url: siteUrl,
      logo: `${siteUrl}/opengraph-image`,
      email: "contact@2dk-it.fr",
      sameAs: [],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "2DK IT",
      url: siteUrl,
      description:
        "2DK IT conçoit des sites web sobres et accompagne les besoins IT avec une approche claire, fiable et B2B.",
      inLanguage: "fr-FR",
    },
  ];

  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData data={structuredData} />
        {children}
      </body>
    </html>
  );
}
