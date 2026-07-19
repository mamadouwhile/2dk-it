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
  "Découvrez nos réalisations et le résultat concret obtenu pour chaque client de 2DK IT.",
  "/portfolio",
);

const portfolioStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portfolio 2DK IT",
  url: "https://www.2dk-it.fr/portfolio",
  description: "Découvrez nos réalisations et le résultat concret obtenu pour chaque client de 2DK IT.",
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

function getGallery(project: (typeof portfolioProjects)[number]) {
  if (project.gallery && project.gallery.length > 0) {
    return project.gallery;
  }

  return [project.imageSrc, project.imageSrcDetail].filter(
    (image): image is string => typeof image === "string" && image.length > 0,
  );
}

export default function PortfolioPage() {
  const featuredProject = portfolioProjects[0];
  const featuredGallery = getGallery(featuredProject);

  return (
    <PageShell
      eyebrow="Réalisations"
      title="Des projets clairs, avec un avant et un après visible"
      description="Chaque projet montre d'où on est parti, ce qu'on a changé et ce que ça a apporté concrètement."
    >
      <StructuredData data={portfolioStructuredData} />

      <div className="flex flex-col gap-14 lg:gap-18">
        <Reveal as="section" className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="accent">Nos réalisations</Badge>
            <Tag>Sites web</Tag>
            <Tag>Avant / après</Tag>
            <Tag>Support IT</Tag>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div className="space-y-4">
              <p className="ds-eyebrow">Ce que vous allez voir</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Des exemples concrets, pas juste de belles images.
              </h2>
              <p className="text-base leading-7 text-slate-600">
                Pour chaque projet, on vous montre le problème de départ, ce qu&apos;on a mis en place et le résultat
                obtenu. De quoi vous projeter facilement sur votre propre besoin.
              </p>
            </div>

            <Callout tone="neutral" className="space-y-3">
              <p className="ds-kicker">En un coup d&apos;œil</p>
              <p className="text-sm leading-6 text-slate-700">
                Chaque projet répond à 3 questions simples : quel était le problème, comment on l&apos;a résolu, et
                qu&apos;est-ce que ça a changé pour l&apos;entreprise.
              </p>
            </Callout>
          </div>

          <div className="grid items-stretch gap-5 lg:grid-cols-[1.12fr_0.88fr]">
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
                      Notre projet phare
                    </span>
                  </div>

                  <div className="mt-8 rounded-[1.75rem] border border-white/20 bg-slate-950/70 p-4 backdrop-blur-md">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/60 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                          Situation de départ
                        </p>
                        <p className="mt-2 text-sm font-medium leading-6 text-white">{featuredProject.context}</p>
                      </div>
                      <div className="rounded-2xl border border-white/15 bg-slate-950/60 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                          Le problème
                        </p>
                        <p className="mt-2 text-sm font-medium leading-6 text-white">{featuredProject.problem}</p>
                      </div>
                      <div className="rounded-2xl border border-white/15 bg-slate-950/60 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                          Ce qu&apos;on a fait
                        </p>
                        <p className="mt-2 text-sm font-medium leading-6 text-white">{featuredProject.solution}</p>
                      </div>
                      <div className="rounded-2xl border border-white/15 bg-slate-950/60 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                          Le résultat
                        </p>
                        <p className="mt-2 text-sm font-medium leading-6 text-white">{featuredProject.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <CardBody className="space-y-4 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Notre exemple préféré
                    </p>
                    <p className="text-sm leading-6 text-slate-600">
                      On a choisi ce projet en premier parce qu&apos;il résume bien notre façon de travailler.
                    </p>
                  </div>
                  <ProjectPreview
                    name={featuredProject.name}
                    gallery={featuredGallery}
                    href={featuredProject.href}
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Facilité à comprendre", value: "Élevée" },
                    { label: "Confiance inspirée", value: "Renforcée" },
                    { label: "Présentation", value: "Soignée" },
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
              <p className="ds-kicker">Notre engagement</p>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                On préfère vous convaincre avec des preuves, pas des promesses.
              </h3>
              <p className="text-sm leading-6 text-slate-700">
                Pas de jargon, pas de superlatifs inutiles. On vous montre simplement ce qu&apos;on a livré et ce que
                ça a changé pour nos clients.
              </p>
              <div className="grid gap-3">
                {[
                  "Un message clair dès la première seconde.",
                  "Des visuels honnêtes, sans mise en scène excessive.",
                  "Une lecture rapide pour vous aider à décider.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-primary/10 bg-white px-4 py-3 text-sm leading-6 text-slate-700 shadow-[0_10px_30px_rgba(8,17,31,0.04)]"
                  >
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
            <p className="ds-eyebrow">Tous nos projets</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Chaque projet est présenté de la même façon.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Pour vous permettre de comparer facilement, on suit toujours le même déroulé : le problème, la
              solution, et ce que ça a apporté.
            </p>
          </div>

          <div className="grid items-stretch gap-5 xl:grid-cols-3">
            {portfolioProjects.map((project, index) => {
              const gallery = getGallery(project);

              return (
                <Reveal key={project.name} delay={index * 90}>
                  <Card className="flex h-full flex-col overflow-hidden p-0">
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

                    <CardBody className="flex flex-1 flex-col space-y-5 p-6 sm:p-7">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{project.name}</h3>
                          <Badge tone="subtle">{project.type}</Badge>
                        </div>
                        <p className="text-sm leading-6 text-slate-600">{project.context}</p>
                      </div>

                      <div className="flex-1 space-y-3 text-sm leading-6 text-slate-600">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                            Le problème
                          </p>
                          <p className="mt-2">{project.problem}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                            Ce qu&apos;on a fait
                          </p>
                          <p className="mt-2">{project.solution}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                            Le résultat
                          </p>
                          <p className="mt-2">{project.result}</p>
                        </div>
                      </div>

                      <ProjectPreview name={project.name} gallery={gallery} href={project.href} />
                    </CardBody>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Reveal>

        <Reveal as="section" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start" delay={160}>
          <div className="space-y-4">
            <p className="ds-eyebrow">Pourquoi nous faire confiance</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Un projet réussi commence toujours par une bonne écoute.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Avant de construire quoi que ce soit, on prend le temps de comprendre votre activité, vos clients et ce
              qui vous différencie vraiment.
            </p>
          </div>

          <Callout tone="accent" className="space-y-3">
            <p className="ds-kicker">Et après la livraison ?</p>
            <p className="text-sm leading-6 text-slate-700">
              Votre site continue d&apos;évoluer avec vous : nouveaux contenus, nouvelles pages, nouvelles
              fonctionnalités, sans jamais repartir de zéro.
            </p>
          </Callout>
        </Reveal>

        <Reveal as="section" delay={240}>
          <Card className="bg-slate-950 text-white">
            <CardBody className="grid gap-6 p-6 sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-3">
                <p className="ds-kicker text-slate-300">Notre différence</p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Un site qui inspire confiance dès les premières secondes.
                </h2>
                <p className="text-sm leading-6 text-slate-200">
                  Un bon site web ne se contente pas d&apos;être joli : il doit rassurer votre visiteur et le pousser
                  à passer à l&apos;action.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { title: "Preuves concrètes", text: "On montre des résultats réels, pas des promesses vagues." },
                  { title: "Message clair", text: "Votre visiteur comprend votre offre en quelques secondes." },
                  { title: "Finition soignée", text: "Chaque détail est pensé pour donner une image professionnelle." },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </Reveal>

        <Reveal as="section" delay={320}>
          <Callout tone="accent" className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-3">
              <p className="ds-kicker">Et si c'était votre projet ?</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Racontez-nous votre projet, on vous dira comment on peut vous aider.
              </h2>
              <p className="text-sm leading-6 text-slate-700">
                Quelques minutes suffisent pour nous expliquer votre besoin. On revient vers vous rapidement avec des
                pistes concrètes.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <ButtonLink href="/contact" variant="primary">
                Demander un devis
              </ButtonLink>
              <ButtonLink href="/services" variant="ghost">
                Voir nos offres
              </ButtonLink>
            </div>
          </Callout>
        </Reveal>
      </div>
    </PageShell>
  );
}