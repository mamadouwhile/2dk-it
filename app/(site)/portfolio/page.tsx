import type { Metadata } from "next";
import Image from "next/image";

import { PageShell } from "@/components/page-shell";
import { ProjectPreview } from "@/components/portfolio/project-preview";
import { Reveal } from "@/components/reveal";
import { Badge, Tag } from "@/components/ui/badge";
import { Callout } from "@/components/ui/callout";
import { Card, CardBody } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ButtonLink } from "@/components/ui/button";
import { portfolioProjects } from "@/lib/portfolio";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Portfolio",
  "Découvrez des exemples de projets qui montrent la qualité de production et la finesse d’exécution de 2DK IT.",
  "/portfolio",
);

const portfolioStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portfolio 2DK IT",
  url: "https://www.2dk-it.fr/portfolio",
  description:
    "Découvrez des exemples de projets qui montrent la qualité de production et la finesse d’exécution de 2DK IT.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: portfolioProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        additionalType: project.type,
        description: project.context,
        url: project.href ? `https://www.2dk-it.fr${project.href}` : "https://www.2dk-it.fr/portfolio",
      },
    })),
  },
  inLanguage: "fr-FR",
};

export default function PortfolioPage() {
  const featuredProject = portfolioProjects[0];

  return (
    <PageShell
      eyebrow="Portfolio"
      title="Des projets sobres, lisibles et pensés pour rassurer rapidement"
      description="Chaque projet montre le niveau de finition, la logique de production et la capacité à faire évoluer une base propre."
    >
      <StructuredData data={portfolioStructuredData} />

      <div className="flex flex-col gap-14 lg:gap-18">
        <Reveal as="section" className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="accent">Réalisations</Badge>
            <Tag>Cas client</Tag>
            <Tag>Mockups</Tag>
            <Tag>Support IT</Tag>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div className="space-y-4">
              <p className="ds-eyebrow">Intro</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Un portfolio pensé pour montrer le niveau de finition, pas pour faire du bruit.
              </h2>
              <p className="text-base leading-7 text-slate-600">
                Les projets sont présentés avec un langage clair: contexte, problème, solution et bénéfice.
                L’objectif est de rendre la qualité visible immédiatement.
              </p>
            </div>

            <Callout tone="neutral" className="space-y-3">
              <p className="ds-kicker">Architecture de contenu</p>
              <p className="text-sm leading-6 text-slate-700">
                La source de données est centralisée dans un tableau TypeScript pour ajouter facilement de nouveaux projets.
              </p>
            </Callout>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
            <Card className="overflow-hidden p-0">
              <div className="relative h-96 overflow-hidden sm:h-[26rem] lg:h-[30rem]">
                {featuredProject.imageSrc ? (
                  <Image
                    src={featuredProject.imageSrc}
                    alt={`Capture d'écran du site ${featuredProject.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    priority
                  />
                ) : null}

                <div
                  className={`absolute inset-0 ${
                    featuredProject.imageSrc
                      ? "bg-linear-to-b from-slate-950/10 via-slate-950/50 to-slate-950/95"
                      : `bg-linear-to-br ${featuredProject.imageAccent}`
                  }`}
                />

                <div className="relative flex h-full flex-col justify-end p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <div className="space-y-2">
                      <Tag>{featuredProject.type}</Tag>
                      <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {featuredProject.name}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/90">
                      Projet phare
                    </span>
                  </div>

                  <div className="mt-8 rounded-[1.75rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-slate-200">
                          Contexte
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/90">{featuredProject.context}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-slate-200">
                          Solution
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/90">{featuredProject.solution}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-slate-200">
                          Résultat
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/90">{featuredProject.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <CardBody className="space-y-4 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Lecture rapide</p>
                    <p className="text-sm leading-6 text-slate-600">
                      Un projet sélectionné pour donner immédiatement le ton du portfolio.
                    </p>
                  </div>
                  <ProjectPreview
                    name={featuredProject.name}
                    gallery={featuredProject.gallery ?? (featuredProject.imageSrc ? [featuredProject.imageSrc] : [])}
                    href={featuredProject.href}
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Lisibilité", value: "Élevée" },
                    { label: "Confiance", value: "Renforcée" },
                    { label: "Structure", value: "Éditoriale" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-border bg-slate-50 p-4">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-950">{item.value}</p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Callout tone="accent" className="space-y-4">
              <p className="ds-kicker">Ce que l’on veut montrer</p>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                Un portfolio lisible, crédible et sans surcharge.
              </h3>
              <p className="text-sm leading-6 text-slate-700">
                Les blocs suivent une logique de preuve, de hiérarchie et de respiration. C’est le même type de
                clarté que l’on attend d’un grand site digital mature.
              </p>
              <div className="grid gap-3">
                {[
                  "Un message principal net dès l’entrée.",
                  "Des preuves visuelles sobres et utiles.",
                  "Une lecture rapide, orientée décision.",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-primary/10 bg-white px-4 py-3 text-sm leading-6 text-slate-700 shadow-[0_10px_30px_rgba(8,17,31,0.04)]">
                    {item}
                  </div>
                ))}
              </div>
            </Callout>
          </div>
        </Reveal>

        <Separator />

        <Reveal as="section" className="space-y-6" delay={80}>
          <div className="space-y-3 max-w-2xl">
            <p className="ds-eyebrow">Grille de projets</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Des cartes élégantes, avec l’essentiel de l’information.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Chaque projet suit la même structure pour faciliter la lecture et la comparaison.
            </p>
          </div>

          <div className="grid gap-5 xl:grid-cols-3">
            {portfolioProjects.map((project, index) => (
              <Reveal key={project.name} delay={index * 90}>
                <Card className="overflow-hidden p-0">
                  <div className="relative h-48 w-full overflow-hidden sm:h-52">
                    {project.imageSrc ? (
                      <Image
                        src={project.imageSrc}
                        alt={`Capture d'écran du site ${project.name}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1280px) 33vw, 100vw"
                      />
                    ) : (
                      <div className={`h-full w-full bg-linear-to-br ${project.imageAccent}`} />
                    )}
                    <div className="absolute left-4 top-4">
                      <Tag>{project.type}</Tag>
                    </div>
                  </div>

                  <CardBody className="space-y-5 p-6 sm:p-7">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{project.name}</h3>
                        <Badge tone="subtle">{project.type}</Badge>
                      </div>
                      <p className="text-sm leading-6 text-slate-600">{project.context}</p>
                    </div>

                    <div className="space-y-3 text-sm leading-6 text-slate-600">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Problème</p>
                        <p className="mt-2">{project.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Solution</p>
                        <p className="mt-2">{project.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Résultat</p>
                        <p className="mt-2">{project.result}</p>
                      </div>
                    </div>

                    <ProjectPreview
                      name={project.name}
                      gallery={project.gallery ?? (project.imageSrc ? [project.imageSrc] : [])}
                      href={project.href}
                    />
                  </CardBody>
                </Card>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" delay={200}>
          <Card className="bg-slate-950 text-white">
            <CardBody className="grid gap-6 p-6 sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-3">
                <p className="ds-kicker text-slate-300">Lecture de fond</p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Une base visuelle plus mature, pour rassurer vite.
                </h2>
                <p className="text-sm leading-6 text-slate-200">
                  Le portfolio combine contraste, lisibilité et preuves concrètes pour donner une impression de
                  maîtrise immédiate.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  "Preuve",
                  "Clarté",
                  "Finition",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-sm font-medium text-white">{item}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Un repère visuel sobre pour structurer la décision.
                    </p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </Reveal>

        <Reveal as="section" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start" delay={160}>
          <div className="space-y-4">
            <p className="ds-eyebrow">Pourquoi ce format</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Une structure simple à enrichir sans casser la cohérence.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Le tableau TypeScript permet d’ajouter un projet, un mockup ou une capture plus tard sans refondre la page.
            </p>
          </div>

          <Callout tone="accent" className="space-y-3">
            <p className="ds-kicker">Ajout futur</p>
            <p className="text-sm leading-6 text-slate-700">
              Vous pourrez migrer cette source vers un CMS headless sans changer la logique d’affichage.
            </p>
          </Callout>
        </Reveal>

        <Reveal as="section" delay={240}>
          <Callout tone="accent" className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-3">
              <p className="ds-kicker">Contact</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Vous avez un projet à présenter ? On peut en parler.
              </h2>
              <p className="text-sm leading-6 text-slate-700">
                Une présentation claire du contexte et du besoin suffit pour démarrer.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <ButtonLink href="/contact" variant="primary">
                Demander un devis
              </ButtonLink>
              <ButtonLink href="/services" variant="ghost">
                Voir les services
              </ButtonLink>
            </div>
          </Callout>
        </Reveal>
      </div>
    </PageShell>
  );
}