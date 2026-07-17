import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Badge, Tag } from "@/components/ui/badge";
import { Callout } from "@/components/ui/callout";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StructuredData } from "@/components/structured-data";
import { servicesContent } from "@/lib/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Services",
  "Découvrez les offres web et support IT de 2DK IT, présentées de façon claire et comparable.",
  "/services",
);

const { webOffers, supportItems, chooseSteps } = servicesContent;

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Services 2DK IT",
  url: "https://www.2dk-it.fr/services",
  description:
    "Découvrez les offres web et support IT de 2DK IT, présentées de façon claire et comparable.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: webOffers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: offer.name,
      item: {
        "@type": "Service",
        name: offer.name,
        description: offer.summary,
        provider: {
          "@type": "Organization",
          name: "2DK IT",
          url: "https://www.2dk-it.fr/",
        },
      },
    })),
  },
  inLanguage: "fr-FR",
};

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Des offres web et IT lisibles, comparables et pensées pour décider vite"
      description="2DK IT présente ses formules avec une logique simple: comprendre, comparer et choisir sans friction."
    >
      <StructuredData data={servicesStructuredData} />

      <div className="flex flex-col gap-14 lg:gap-18">
        <Reveal as="section" className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="accent">Offres</Badge>
            <Tag>Web</Tag>
            <Tag>Support IT</Tag>
            <Tag>Décision rapide</Tag>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="space-y-4">
              <p className="ds-eyebrow">Intro</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Trois offres web. Une même exigence de clarté et de qualité.
              </h2>
              <p className="text-base leading-7 text-slate-600">
                Les formules sont structurées pour faire ressortir les différences sans créer de confusion.
                L’objectif est simple: choisir la bonne option plus vite.
              </p>
            </div>

            <Callout tone="neutral" className="space-y-3">
              <p className="ds-kicker">Lecture rapide</p>
              <p className="text-sm leading-6 text-slate-700">
                La grille compare le niveau de personnalisation, les livrables et la valeur ajoutée de chaque offre.
              </p>
            </Callout>
          </div>
        </Reveal>

        <Separator />

        <Reveal as="section" className="space-y-6" delay={80}>
          <div className="space-y-3 max-w-2xl">
            <p className="ds-eyebrow">Comparatif des offres web</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Comparez les formules en un coup d’œil.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Chaque offre est construite pour répondre à un niveau d’ambition différent.
            </p>
          </div>

          <div className="grid gap-5 xl:grid-cols-3">
            {webOffers.map((offer, index) => (
              <Reveal key={offer.name} delay={index * 90}>
                <Card className={offer.tone === "accent" ? "border-primary/20 bg-primary/5" : ""}>
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <Tag>{offer.name}</Tag>
                    {offer.tone === "accent" ? <Badge tone="accent">Recommandée</Badge> : null}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{offer.name}</h3>
                  <p className="text-sm leading-6 text-slate-600">{offer.summary}</p>
                </CardHeader>

                <CardBody className="space-y-5">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Pour qui</p>
                    <p className="text-sm leading-6 text-slate-600">{offer.who}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Objectifs</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {offer.goals.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                          <span className="leading-6">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Livrables</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {offer.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
                          <span className="leading-6">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Bénéfices</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {offer.benefits.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                          <span className="leading-6">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Callout tone={offer.tone === "accent" ? "accent" : "default"} className="p-4 sm:p-4">
                    <p className="text-sm leading-6 text-slate-700">
                      <span className="font-semibold text-slate-950">Personnalisation :</span> {offer.personalization}
                    </p>
                  </Callout>
                </CardBody>
                </Card>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="space-y-6" delay={160}>
          <div className="space-y-3 max-w-2xl">
            <p className="ds-eyebrow">Support IT</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Un appui simple pour sécuriser et faire évoluer.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Le support IT complète les offres web quand il faut stabiliser, maintenir ou cadrer une évolution.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {supportItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <Card>
                <CardHeader>
                  <Tag>{item.title}</Tag>
                  <h3 className="ds-subheading text-xl">{item.title}</h3>
                </CardHeader>
                <CardBody>
                  <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                </CardBody>
                </Card>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start" delay={220}>
          <div className="space-y-4">
            <p className="ds-eyebrow">Comment choisir votre formule</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Le bon choix dépend du niveau d’exigence et de la place du site dans votre acquisition.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Plus l’enjeu est stratégique, plus la structure doit être riche et personnalisée.
            </p>
          </div>

          <div className="grid gap-4">
            {chooseSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <Callout className="space-y-2">
                <p className="ds-kicker">Choix</p>
                <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{step.description}</p>
                </Callout>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" delay={300}>
          <Callout tone="accent" className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-3">
              <p className="ds-kicker">Prêt à avancer</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Parlez-nous de votre besoin. On vous aide à choisir la bonne formule.
              </h2>
              <p className="text-sm leading-6 text-slate-700">
                Une demande claire, une réponse rapide, un cadre simple.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <ButtonLink href="/contact" variant="primary">
                Demander un devis
              </ButtonLink>
              <ButtonLink href="/portfolio" variant="ghost">
                Voir le portfolio
              </ButtonLink>
            </div>
          </Callout>
        </Reveal>
      </div>
    </PageShell>
  );
}