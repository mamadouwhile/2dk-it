import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Badge, Tag } from "@/components/ui/badge";
import { Callout } from "@/components/ui/callout";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "@/components/contact-form";
import { StructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = createPageMetadata(
  "Contact",
  "Contactez 2DK IT avec un formulaire simple, fiable et crédible.",
  "/contact",
);

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact 2DK IT",
  url: "https://www.2dk-it.fr/contact",
  description:
    "Contactez 2DK IT avec un formulaire simple, fiable et crédible.",
  mainEntity: {
    "@type": "Organization",
    name: "2DK IT",
    url: "https://www.2dk-it.fr/",
    email: "contact@2dk-it.fr",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@2dk-it.fr",
      availableLanguage: ["fr"],
    },
  },
  inLanguage: "fr-FR",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Parlons de votre projet web ou de vos besoins IT"
      description="Expliquez votre besoin en quelques lignes. Nous revenons vers vous rapidement avec une réponse claire et adaptée."
    >
      <StructuredData data={contactStructuredData} />

      <div className="flex flex-col gap-14 lg:gap-18">
        <Reveal className="flex flex-wrap items-center gap-3">
          <Badge tone="accent">Lead qualifié</Badge>
          <Tag>Réponse rapide</Tag>
          <Tag>Contact B2B</Tag>
        </Reveal>

        <Reveal as="section" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-4">
            <p className="ds-eyebrow">Coordonnées</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Un contact direct, avec une réponse claire et rapide.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              {siteConfig.tagline}
            </p>

            <Callout tone="accent" className="space-y-3">
              <p className="ds-kicker">Délai de réponse</p>
              <p className="text-sm leading-6 text-slate-700">
                {siteConfig.contactDetails.responseTime}
              </p>
              <p className="text-sm leading-6 text-slate-700">{siteConfig.contactDetails.availability}</p>
            </Callout>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {siteConfig.contactLines.map((line, index) => (
              <Reveal key={line.label} delay={index * 80}>
                <Card>
                <CardHeader>
                  <Tag>{line.label}</Tag>
                  <h3 className="ds-subheading text-xl">{line.label}</h3>
                </CardHeader>
                <CardBody>
                  <p className="text-sm leading-6 text-slate-600">{line.value}</p>
                </CardBody>
                </Card>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Separator />

        <Reveal as="section" className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]" delay={120}>
          <Card>
            <CardHeader>
              <Tag>Formulaire</Tag>
              <h2 className="ds-subheading text-xl">Demande de contact</h2>
            </CardHeader>
            <CardBody>
              <ContactForm />

              <Callout tone="neutral" className="mt-6">
                <p className="text-sm leading-6 text-slate-700">
                  Vos données sont utilisées uniquement pour traiter votre demande, sont conservées 3 ans maximum et ne sont
                  jamais cédées à des tiers. Voir la{" "}
                  <Link href="/politique-de-confidentialite" className="font-medium text-primary underline underline-offset-4">
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </Callout>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <Tag>Coordonnées</Tag>
              <h2 className="ds-subheading text-xl">Informations utiles</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="space-y-3 rounded-3xl border border-border bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Email professionnel
                </p>
                <p className="text-base font-medium text-slate-950">{siteConfig.contactDetails.email}</p>
                <Separator className="my-4" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Téléphone
                </p>
                <p className="text-base font-medium text-slate-950">{siteConfig.contactDetails.phone}</p>
              </div>

              <Callout>
                <p className="text-sm leading-6 text-slate-700">
                  Le formulaire est protégé par un champ anti-spam discret et une validation côté navigateur et serveur.
                </p>
              </Callout>
            </CardBody>
          </Card>
        </Reveal>
      </div>
    </PageShell>
  );
}