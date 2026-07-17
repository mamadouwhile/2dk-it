import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Badge, Tag } from "@/components/ui/badge";
import { Callout } from "@/components/ui/callout";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "À propos",
  "Découvrez 2DK IT, son approche, ses valeurs et sa méthode de travail.",
  "/a-propos",
);

const values = [
  {
    title: "Clarté",
    description:
      "Des échanges simples. Un périmètre lisible. Des décisions faciles à partager côté client.",
  },
  {
    title: "Rigueur",
    description:
      "Une exécution propre, des points de contrôle et une attention constante à la qualité perçue.",
  },
  {
    title: "Réactivité",
    description:
      "Des retours rapides et un cadrage net pour avancer sans friction inutile.",
  },
];

const methodSteps = [
  {
    step: "01",
    title: "Comprendre le besoin",
    description:
      "On commence par clarifier l’objectif, le contexte et les contraintes. Le but est d’aller vite sans approximation.",
  },
  {
    step: "02",
    title: "Cadrer la solution",
    description:
      "La proposition reste simple à lire: priorités, livrables, jalons et niveau d’accompagnement.",
  },
  {
    step: "03",
    title: "Livrer proprement",
    description:
      "L’exécution est suivie avec un souci de fiabilité, de lisibilité et de cohérence dans les détails.",
  },
];

const differentiators = [
  "Un interlocuteur direct, sans complexité inutile.",
  "Une posture B2B qui reste concrète et mesurable.",
  "Un niveau d’exigence visible dans chaque détail.",
  "Une approche adaptée aux sites web comme aux besoins IT.",
];

const qualityCommitments = [
  "Documentation claire des points clés.",
  "Suivi simple des demandes et des priorités.",
  "Communication sobre, régulière et utile.",
  "Accompagnement après livraison si nécessaire.",
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="À propos"
      title="Une entreprise simple à comprendre, sérieuse à engager"
      description="2DK IT accompagne les entreprises qui veulent une présence web claire et un support IT fiable, avec une relation directe et un niveau d’exigence constant."
    >
      <div className="flex flex-col gap-14 lg:gap-18">
        <Reveal className="flex flex-wrap items-center gap-3">
          <Badge tone="accent">B2B</Badge>
          <Tag>Web</Tag>
          <Tag>IT</Tag>
          <Tag>Accompagnement</Tag>
        </Reveal>

        <Reveal as="section" className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="space-y-4">
            <p className="ds-eyebrow">Introduction</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Une structure à taille humaine, pensée pour les besoins pro.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              2DK IT parle aux décideurs qui attendent de la clarté, de la fiabilité et une exécution propre.
              Le site et la relation client suivent la même logique: aller à l’essentiel, sans perdre en qualité.
            </p>
          </div>

          <Card>
            <CardHeader>
              <Tag>Qui nous sommes</Tag>
              <h3 className="ds-subheading text-xl">Une offre web et IT lisible</h3>
            </CardHeader>
            <CardBody>
              <p className="text-sm leading-6 text-slate-600">
                L’entreprise se positionne sur deux terrains complémentaires: la création ou l’évolution de
                présence web, et l’appui sur des sujets IT qui demandent méthode, réactivité et sens du service.
              </p>
            </CardBody>
          </Card>
        </Reveal>

        <Separator />

        <Reveal as="section" className="space-y-6" delay={80}>
          <div className="space-y-3 max-w-2xl">
            <p className="ds-eyebrow">Mission</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Aider les entreprises à avancer avec un cadre net et fiable.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              La mission de 2DK IT est simple: concevoir des supports web utiles, puis les faire évoluer avec une
              logique de qualité, de vitesse et de confiance.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <Card>
                <CardHeader>
                  <Tag>{value.title}</Tag>
                  <h3 className="ds-subheading text-xl">{value.title}</h3>
                </CardHeader>
                <CardBody>
                  <p className="text-sm leading-6 text-slate-600">{value.description}</p>
                </CardBody>
                </Card>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="space-y-6" delay={160}>
          <div className="space-y-3 max-w-2xl">
            <p className="ds-eyebrow">Méthode de travail</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Une méthode courte, lisible et orientée résultat.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Le cadre de travail est volontairement simple pour réduire les ambiguïtés et sécuriser la collaboration.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {methodSteps.map((item, index) => (
              <Reveal key={item.step} delay={index * 80}>
                <Card>
                <CardHeader>
                  <Badge tone="accent">{item.step}</Badge>
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

        <Reveal as="section" className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start" delay={220}>
          <div className="space-y-4">
            <p className="ds-eyebrow">Différenciants</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Ce qui rend l’expérience plus rassurante.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              La différence se joue dans la clarté des échanges, la cohérence de l’exécution et le soin apporté au rendu.
            </p>
          </div>

          <Callout tone="neutral" className="space-y-4">
            {differentiators.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </Callout>
        </Reveal>

        <Reveal as="section" className="space-y-6" delay={300}>
          <div className="space-y-3 max-w-2xl">
            <p className="ds-eyebrow">Qualité et accompagnement</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Une attention constante aux détails utiles.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              L’objectif n’est pas seulement de livrer. Il faut aussi rendre le suivi simple et maintenir un niveau de service stable.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <Card>
              <CardHeader>
                <Tag>Engagement qualité</Tag>
                <h3 className="ds-subheading text-xl">Ce que 2DK IT s’engage à tenir</h3>
              </CardHeader>
              <CardBody>
                <ul className="space-y-3 text-sm text-slate-600">
                  {qualityCommitments.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>

            <Callout tone="accent" className="space-y-3">
              <p className="ds-kicker">Accompagnement</p>
              <p className="text-sm leading-6 text-slate-700">
                Le suivi reste humain, direct et utile. Le prospect sait à qui parler, quoi attendre et comment avancer.
              </p>
            </Callout>
          </div>
        </Reveal>

        <Reveal as="section" delay={380}>
          <Callout className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-2">
              <p className="ds-kicker">Pourquoi nous choisir</p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Parce qu’on privilégie la confiance, la rigueur et la réactivité.
              </h2>
              <p className="text-sm leading-6 text-slate-700">
                2DK IT convient aux décideurs qui veulent une relation simple, un cadre sérieux et un rendu propre.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Tag>Confiance</Tag>
              <Tag>Rigueur</Tag>
              <Tag>Réactivité</Tag>
            </div>
          </Callout>
        </Reveal>
      </div>
    </PageShell>
  );
}