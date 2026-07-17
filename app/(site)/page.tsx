import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Badge, Tag } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Sites web et services IT pour entreprises B2B",
  "2DK IT conçoit des sites web et accompagne les équipes sur des besoins IT avec une approche claire, réactive et B2B.",
  "/",
);

const servicesSnapshot = [
  {
    title: "Sites vitrines",
    description:
      "Des sites sobres, crédibles et orientés conversion pour présenter l’offre et générer des demandes qualifiées.",
  },
  {
    title: "Support IT",
    description:
      "Un accompagnement fiable pour stabiliser, maintenir ou faire évoluer un environnement web ou technique.",
  },
  {
    title: "Évolution produit",
    description:
      "Des ajustements structurés pour faire monter un site ou une plateforme en qualité, en vitesse et en clarté.",
    },
  {
    title: "Cadrage technique",
    description:
      "Une lecture simple des besoins pour aller vite, éviter les ambiguïtés et poser un plan d’action concret.",
  },
];

const trustSignals = [
  "Réponse claire et rapide",
  "Intervention structurée",
  "Dialogue direct avec un interlocuteur humain",
  "Niveau de finition élevé",
];

const why2DkIt = [
  "Expertise web et IT",
  "Réactivité dans les échanges",
  "Clarté sur le périmètre",
  "Accompagnement humain",
  "Qualité perçue à chaque étape",
];

const webOffers = [
  {
    name: "Essentiel",
    tone: "subtle" as const,
    points: ["Base solide", "Présentation claire", "CTA visibles"],
  },
  {
    name: "Performance",
    tone: "accent" as const,
    points: ["Structure plus riche", "Réassurance renforcée", "Parcours de conversion"],
  },
  {
    name: "Signature",
    tone: "subtle" as const,
    points: ["Finition premium", "Image de marque forte", "Version la plus complète"],
  },
];

const portfolioItems = [
  "Site vitrine corporate",
  "Refonte de présence web",
  "Support et évolution IT",
];

const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sites web et services IT pour entreprises B2B",
  url: "https://www.2dk-it.fr/",
  description:
    "2DK IT aide à présenter une offre avec sérieux, à rassurer vite et à transformer l’intérêt en prise de contact.",
  isPartOf: {
    "@type": "WebSite",
    name: "2DK IT",
    url: "https://www.2dk-it.fr/",
  },
  about: {
    "@type": "Organization",
    name: "2DK IT",
    url: "https://www.2dk-it.fr/",
  },
  inLanguage: "fr-FR",
};

export default function HomePage() {
  return (
    <PageShell
      eyebrow="Accueil"
      title="Sites web et services IT pour entreprises B2B"
      description="2DK IT aide à présenter une offre avec sérieux, à rassurer vite et à transformer l’intérêt en prise de contact."
    >
      <StructuredData data={homeStructuredData} />

      <div className="flex flex-col gap-14 lg:gap-18">
        <Reveal as="section" className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge tone="accent">B2B</Badge>
              <Tag>Web</Tag>
              <Tag>IT</Tag>
              <Tag>Support</Tag>
            </div>

            <div className="space-y-5">
              <p className="ds-kicker">Présence digitale premium</p>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Une présence web claire. Un support IT fiable. Une image qui inspire confiance.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                2DK IT structure votre présence digitale avec le niveau de lisibilité, de finition et de
                sérieux attendu par une cible B2B exigeante.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="primary">
                Demander un devis
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Découvrir les services
              </ButtonLink>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Lisibilité", value: "Immédiate" },
                { label: "Réponse", value: "Claire et rapide" },
                { label: "Finition", value: "Premium" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-white px-4 py-3 shadow-[0_10px_30px_rgba(8,17,31,0.05)]">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-950">{item.value}</p>
                </div>
              ))}
            </div>

            <Callout tone="accent" className="max-w-2xl">
              <div className="grid gap-3 sm:grid-cols-2">
                {trustSignals.map((signal) => (
                  <div key={signal} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    <p className="text-sm leading-6 text-slate-700">{signal}</p>
                  </div>
                ))}
              </div>
            </Callout>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(var(--primary-rgb),0.18),_transparent_52%)] blur-xl" />
            <Card className="overflow-hidden p-0">
              <div className="border-b border-border bg-slate-950 px-6 py-5 text-white sm:px-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                      Vue d’ensemble
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Une composition claire, éditoriale et rassurante
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                  </div>
                </div>
              </div>

              <CardBody className="space-y-5 p-6 sm:p-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-white p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Structure</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Un cadre éditorial propre pour donner une lecture immédiate.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-white p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Rassurance</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Des repères visuels nets pour renforcer la confiance.
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-border bg-slate-50 p-5">
                  <div className="flex items-center justify-between gap-4 text-sm text-slate-500">
                    <span>Clarté du besoin</span>
                    <span>Très élevée</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[86%] rounded-full bg-gradient-to-r from-blue-500 to-blue-300" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-border bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Lecture</p>
                    <p className="mt-2 text-sm text-slate-950">Compris en quelques secondes</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Ton</p>
                    <p className="mt-2 text-sm text-slate-950">Sobre et crédible</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">CTA</p>
                    <p className="mt-2 text-sm text-slate-950">Visible immédiatement</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Reveal>

        <Separator />

        <Reveal as="section" className="space-y-6" delay={80}>
          <div className="space-y-3 max-w-2xl">
            <p className="ds-eyebrow">Ce que nous faisons</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Des services simples à comprendre, utiles à vendre.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              L’essentiel du web et du support IT, présenté sans surcharge et avec un bénéfice clair.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {servicesSnapshot.map((item, index) => (
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

        <Reveal as="section" className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start" delay={140}>
          <div className="space-y-4">
            <p className="ds-eyebrow">Pourquoi 2DK IT</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Une posture rassurante, sans surpromesse.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Le site doit renvoyer une impression de maîtrise, de sérieux et de proximité.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {why2DkIt.map((item, index) => (
              <Callout key={item} tone={index === 0 ? "accent" : "default"}>
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </Callout>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="space-y-6" delay={200}>
          <div className="space-y-3 max-w-2xl">
            <p className="ds-eyebrow">Offres principales</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Trois niveaux pour faire monter la valeur progressivement.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Une structure simple pour guider la lecture et aider le prospect à se situer rapidement.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {webOffers.map((offer, index) => (
              <Reveal key={offer.name} delay={index * 90}>
                <Card className={offer.tone === "accent" ? "border-primary/35" : ""}>
                <CardHeader>
                  <Tag>{offer.name}</Tag>
                  <h3 className="ds-subheading text-xl">{offer.name}</h3>
                </CardHeader>
                <CardBody>
                  <ul className="space-y-3 text-sm text-slate-600">
                    {offer.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <span className="leading-6">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
                </Card>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" delay={300}>
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <Callout tone="neutral" className="space-y-3">
              <p className="ds-kicker">Méthode</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Une méthode claire, comme un produit bien cadré.
              </h2>
              <p className="text-sm leading-6 text-slate-700">
                Le site doit donner le sentiment d’un service maîtrisé dès les premières secondes: information
                hiérarchisée, surfaces aérées et repères visuels cohérents.
              </p>
            </Callout>

            <Card className="bg-slate-950 text-white">
              <CardBody className="space-y-4 p-6 sm:p-7">
                <p className="ds-kicker text-slate-300">Ce que cela change</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Lecture plus rapide",
                    "Hiérarchie plus nette",
                    "Confiance immédiate",
                    "Signal premium renforcé",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm leading-6 text-slate-100">{item}</p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </Reveal>

        <Reveal as="section" className="space-y-6" delay={260}>
          <div className="space-y-3 max-w-2xl">
            <p className="ds-eyebrow">Portfolio</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Quelques repères concrets, sans surcharger.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Le portfolio sert à montrer le niveau de finition et la variété des contextes traités.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <CardHeader>
                <Tag>Réalisations</Tag>
                <h3 className="ds-subheading text-xl">Exemples de projets</h3>
              </CardHeader>
              <CardBody>
                <div className="grid gap-3 sm:grid-cols-3">
                  {portfolioItems.map((item) => (
                    <div key={item} className="rounded-2xl border border-border bg-white p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Projet</p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Callout tone="neutral" className="flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <p className="ds-kicker">Voir plus</p>
                <p className="text-base leading-7 text-slate-700">
                  Les cas détaillés, les visuels et les résultats seront regroupés dans la page portfolio.
                </p>
              </div>
              <ButtonLink href="/portfolio" variant="secondary">
                Découvrir le portfolio
              </ButtonLink>
            </Callout>
          </div>
        </Reveal>

        <Reveal as="section" delay={320}>
          <Callout tone="accent" className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-3">
              <p className="ds-kicker">Contact</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Un besoin web ou IT à cadrer ? Parlons-en simplement.
              </h2>
              <p className="text-sm leading-6 text-slate-700 sm:text-base">
                2DK IT répond vite, clarifie le besoin et propose un cadre de travail lisible.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <ButtonLink href="/contact" variant="primary">
                Demander un devis
              </ButtonLink>
              <ButtonLink href="/services" variant="ghost">
                Découvrir les services
              </ButtonLink>
            </div>
          </Callout>
        </Reveal>
      </div>
    </PageShell>
  );
}