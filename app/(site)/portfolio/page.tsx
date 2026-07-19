import type { Metadata } from "next";
import Image from "next/image";

import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Badge, Tag } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { StructuredData } from "@/components/structured-data";
import { portfolioProjects } from "@/lib/portfolio";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Portfolio",
  "Découvrez les réalisations web de 2DK IT : sites vitrines, plateformes personnalisées et expériences digitales modernes.",
  "/portfolio",
);

const portfolioStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portfolio 2DK IT",
  url: "https://www.2dk-it.fr/portfolio",
  description:
    "Découvrez les réalisations web de 2DK IT : sites vitrines, plateformes personnalisées et expériences digitales modernes.",
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
        url: project.href
          ? `https://www.2dk-it.fr${project.href}`
          : "https://www.2dk-it.fr/portfolio",
      },
    })),
  },
  inLanguage: "fr-FR",
};

const expertiseItems = [
  "Développement web",
  "Design responsive",
  "Expérience utilisateur",
  "Optimisation SEO",
  "Performance",
  "Maintenance",
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "MySQL",
  "GitHub",
];

const strengths = [
  {
    number: "01",
    title: "Design moderne",
    description:
      "Des interfaces professionnelles qui valorisent votre activité dès les premières secondes.",
  },
  {
    number: "02",
    title: "Performance",
    description:
      "Des sites rapides, fluides et optimisés pour fonctionner correctement sur tous les écrans.",
  },
  {
    number: "03",
    title: "Code maintenable",
    description:
      "Une base technique structurée pour faciliter les évolutions futures de votre projet.",
  },
  {
    number: "04",
    title: "Accompagnement",
    description:
      "Un suivi clair avant, pendant et après la mise en ligne de votre site internet.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Analyse",
    description:
      "Nous échangeons sur votre activité, votre cible et les objectifs de votre projet.",
  },
  {
    number: "02",
    title: "Conception",
    description:
      "Nous définissons la structure, l'identité visuelle et le parcours utilisateur.",
  },
  {
    number: "03",
    title: "Développement",
    description:
      "Nous développons une solution responsive, performante et adaptée à vos besoins.",
  },
  {
    number: "04",
    title: "Livraison",
    description:
      "Nous vérifions le projet, réalisons les derniers ajustements et assurons sa mise en ligne.",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="h-3.5 w-3.5"
      >
        <path
          d="M4.5 10.25 8 13.75 15.5 6.25"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function PortfolioPage() {
  const featuredProject = portfolioProjects[0];
  const otherProjects = portfolioProjects.slice(1);

  return (
    <PageShell
      eyebrow="Portfolio"
      title="Des réalisations conçues pour valoriser chaque entreprise"
      description="Découvrez une sélection de sites internet modernes, performants et adaptés aux besoins de nos clients."
    >
      <StructuredData data={portfolioStructuredData} />

      <div className="flex flex-col gap-20 lg:gap-28">
        {/* Introduction */}
        <Reveal
          as="section"
          className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"
        >
          <div className="space-y-7">
            <div className="flex flex-wrap gap-3">
              <Badge tone="accent">Nos réalisations</Badge>
              <Tag>Web</Tag>
              <Tag>UI / UX</Tag>
              <Tag>Responsive</Tag>
            </div>

            <div className="max-w-3xl space-y-5">
              <p className="ds-eyebrow">L'expertise 2DK IT</p>

              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
                Des projets qui parlent d'eux-mêmes.
              </h2>

              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Nous concevons des expériences digitales modernes qui renforcent
                l'image de marque, facilitent la navigation et donnent envie de
                passer à l'action.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
  <a
    href="#realisations"
    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
  >
    Voir les réalisations
    <ArrowIcon />
  </a>

  <ButtonLink href="/contact" variant="ghost">
    Parler de mon projet
  </ButtonLink>
</div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 shadow-2xl sm:p-8">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Nos domaines d'intervention
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight !text-white sm:text-3xl">
                Une maîtrise complète, de la conception à la mise en ligne.
              </h3>

              <div className="mt-8 grid gap-3">
                {expertiseItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                  >
                    <CheckIcon />

                    <span className="text-sm font-medium text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Projet phare */}
        {featuredProject ? (
          <Reveal as="section" className="space-y-8" delay={80}>
            <div className="max-w-3xl space-y-4">
              <p className="ds-eyebrow">Projet à la une</p>

              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Une réalisation sélectionnée pour son niveau de finition.
              </h2>
            </div>

            <article className="group relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-950 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.2),transparent_35%)]" />

              <div className="relative grid lg:min-h-[560px] lg:grid-cols-[0.82fr_1.18fr]">
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                      Projet phare
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                      {featuredProject.type}
                    </span>
                  </div>

                  <h3 className="mt-7 text-4xl font-semibold tracking-[-0.05em] !text-white sm:text-5xl">
                    {featuredProject.name}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-slate-300">
                    {featuredProject.context}
                  </p>

                  <div className="mt-8 space-y-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                        Notre solution
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {featuredProject.solution}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                        Résultat
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {featuredProject.result}
                      </p>
                    </div>
                  </div>

                  {featuredProject.href ? (
                    <div className="mt-10">
                      <ButtonLink href={featuredProject.href} variant="secondary">
                        Voir le projet
                      </ButtonLink>
                    </div>
                  ) : null}
                </div>

                <div className="relative min-h-[360px] overflow-hidden bg-slate-900 lg:min-h-full">
                  {featuredProject.imageSrc ? (
                    <Image
                      src={featuredProject.imageSrc}
                      alt={`Aperçu du projet ${featuredProject.name}`}
                      fill
                      priority
                      className="object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                      sizes="(min-width: 1024px) 58vw, 100vw"
                    />
                  ) : (
                    <div
                      className={`h-full w-full bg-linear-to-br ${featuredProject.imageAccent}`}
                    />
                  )}

                  <div className="absolute inset-0 bg-linear-to-r from-slate-950/40 via-transparent to-transparent lg:from-slate-950/20" />

                  <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-slate-950/70 p-4 backdrop-blur-xl sm:inset-x-8 sm:bottom-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                          Expérience digitale
                        </p>

                        <p className="mt-1 text-sm font-medium text-white">
                          Moderne, responsive et évolutive
                        </p>
                      </div>

                      <span className="text-sm font-semibold text-blue-300">
                        2DK IT
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ) : null}

        {/* Galerie */}
        <Reveal
          as="section"
          id="realisations"
          className="space-y-10 scroll-mt-28"
          delay={120}
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div className="max-w-3xl space-y-4">
              <p className="ds-eyebrow">Toutes les réalisations</p>

              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Une sélection de projets réalisés avec exigence.
              </h2>
            </div>

            <p className="text-base leading-7 text-slate-600 lg:text-right">
              Chaque projet possède sa propre identité tout en conservant une
              structure claire, moderne et professionnelle.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {otherProjects.map((project, index) => (
              <Reveal key={project.name} delay={index * 70}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_70px_-35px_rgba(37,99,235,0.35)]">
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    {project.imageSrc ? (
                      <Image
                        src={project.imageSrc}
                        alt={`Aperçu du projet ${project.name}`}
                        fill
                        className="object-cover object-top transition duration-700 group-hover:scale-105"
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                    ) : (
                      <div
                        className={`h-full w-full bg-linear-to-br ${project.imageAccent}`}
                      />
                    )}

                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/35 via-transparent to-transparent opacity-70" />

                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/20 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {project.name}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                        {project.context}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        Responsive
                      </span>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        Performance
                      </span>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        UI / UX
                      </span>
                    </div>

                    {project.href ? (
                      <div className="mt-auto pt-7">
                        <ButtonLink href={project.href} variant="secondary" className="w-full">
                          Voir le projet
                        </ButtonLink>
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Technologies */}
        <Reveal
          as="section"
          className="overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-12 sm:px-10 lg:px-14 lg:py-16"
          delay={170}
        >
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Technologies
              </p>

              <h2 className="text-3xl font-semibold tracking-tight !text-white sm:text-4xl">
                Des outils modernes pour créer des projets solides.
              </h2>

              <p className="text-base leading-7 text-slate-300">
                Nous choisissons les technologies en fonction des besoins du
                projet, de ses performances et de ses futures évolutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Points forts */}
        <Reveal as="section" className="space-y-10" delay={210}>
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <p className="ds-eyebrow">Notre exigence</p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Des réalisations pensées pour inspirer confiance.
            </h2>

            <p className="text-base leading-7 text-slate-600">
              Derrière chaque projet, nous recherchons le bon équilibre entre
              esthétique, clarté, performance et simplicité d'utilisation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {strengths.map((strength, index) => (
              <Reveal key={strength.number} delay={index * 70}>
                <article className="h-full rounded-[2rem] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-sm font-semibold text-primary">
                    {strength.number}
                  </div>

                  <h3 className="mt-7 text-xl font-semibold tracking-tight text-slate-950">
                    {strength.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {strength.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Méthode */}
        <Reveal as="section" className="space-y-10" delay={250}>
          <div className="max-w-3xl space-y-4">
            <p className="ds-eyebrow">Notre méthode</p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Un processus clair, du premier échange à la livraison.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 70}>
                <article className="relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-7">
                  <span className="absolute right-5 top-3 text-6xl font-semibold tracking-tighter text-slate-200/80">
                    {step.number}
                  </span>

                  <div className="relative pt-14">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                      Étape {step.number}
                    </p>

                    <h3 className="mt-4 text-xl font-semibold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal as="section" delay={290}>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-blue-950/20 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                  Votre projet
                </p>

                <h2 className="text-3xl font-semibold tracking-tight !text-white sm:text-4xl lg:text-5xl">
                  Prêt à créer votre prochaine réalisation ?
                </h2>

                <p className="max-w-2xl text-base leading-7 text-blue-100">
                  Présentez-nous votre activité et vos objectifs. Nous vous
                  proposerons une solution claire, moderne et adaptée à votre
                  entreprise.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <ButtonLink
                  href="/contact"
                  variant="ghost"
                  className="justify-center bg-white text-primary hover:bg-blue-50"
                >
                  Demander un devis
                </ButtonLink>

                <ButtonLink
                  href="/services"
                  variant="ghost"
                  className="justify-center border-white/25 !text-white hover:bg-white/10"
                >
                  Voir les services
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}