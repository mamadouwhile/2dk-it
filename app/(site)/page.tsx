import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { Tag } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/seo";
import { portfolioProjects } from "@/lib/portfolio";

export const metadata: Metadata = createPageMetadata(
  "Sites web et services IT pour entreprises B2B",
  "2DK IT conçoit des sites web performants et accompagne les entreprises dans leurs besoins informatiques.",
  "/",
);

const strengths = [
  {
    icon: "◉",
    title: "Sites web modernes",
    description: "Rapides et optimisés",
  },
  {
    icon: "⌁",
    title: "Support IT fiable",
    description: "Réactif et proche de vous",
  },
  {
    icon: "↗",
    title: "Accompagnement",
    description: "À chaque étape du projet",
  },
];

const floatingBadges = [
  {
    icon: "⚡",
    title: "Sites rapides",
    subtitle: "Navigation fluide",
  },
  {
    icon: "▣",
    title: "Responsive",
    subtitle: "Parfait sur tous les écrans",
  },
  {
    icon: "♢",
    title: "Sécurisé",
    subtitle: "Données protégées",
  },
];

const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sites web et services IT pour entreprises B2B",
  url: "https://www.2dk-it.fr/",
  description:
    "2DK IT conçoit des sites web performants et propose des services informatiques adaptés aux entreprises.",
  isPartOf: {
    "@type": "WebSite",
    name: "2DK IT",
    url: "https://www.2dk-it.fr/",
  },
  inLanguage: "fr-FR",
};

export default function HomePage() {
  const displayedProjects = portfolioProjects.slice(0, 4);

  return (
    <>
      <StructuredData data={homeStructuredData} />

      <main>
        <section className="relative isolate overflow-hidden bg-[#020817]">
          {/* Halo bleu principal */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle 720px at 72% 38%, rgba(0, 86, 255, 0.32), transparent 68%)",
            }}
          />

          {/* Halo violet secondaire */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle 420px at 86% 58%, rgba(91, 33, 255, 0.18), transparent 72%)",
            }}
          />

          {/* Grille décorative */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.65) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.65) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />

          <div className="relative mx-auto w-full max-w-[1440px] px-4 pb-14 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-12 text-white">
            <div className="grid items-center gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-4">
              {/* Colonne gauche */}
              <Reveal>
                <div className="relative z-20">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.95)]" />

                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.23em] text-slate-300 sm:text-[0.7rem]">
                      Agence web & IT pour entreprises B2B
                    </span>
                  </div>

                  <h1 className="mt-7 max-w-[660px] text-4xl font-semibold leading-[1.08] tracking-[-0.04em] !text-white sm:text-5xl lg:text-[3.55rem] xl:text-[4rem] text-white">
                    Des solutions web et IT qui{" "}
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      propulsent
                    </span>{" "}
                    votre entreprise.
                  </h1>

                  <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                    2DK IT conçoit des sites performants et des services IT
                    fiables pour vous faire gagner en visibilité, en efficacité
                    et en sérénité.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <ButtonLink
                      href="/contact"
                      variant="primary"
                      className="justify-center rounded-xl bg-blue-600 px-7 py-4 text-white shadow-[0_18px_45px_-18px_rgba(37,99,235,0.95)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
                    >
                      Demander un devis
                      <span aria-hidden="true">→</span>
                    </ButtonLink>

                    <ButtonLink
                      href="/portfolio"
                      variant="ghost"
                      className="justify-center px-5 py-4 text-white hover:bg-white/5 hover:text-white"
                    >
                      Voir nos réalisations
                      <span aria-hidden="true">→</span>
                    </ButtonLink>
                  </div>

                  <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    {strengths.map((strength) => (
                      <div
                        key={strength.title}
                        className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/15 font-semibold text-blue-400">
                          {strength.icon}
                        </span>

                        <p className="mt-4 text-sm font-semibold text-white">
                          {strength.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-400">
                          {strength.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Colonne droite */}
              <Reveal delay={140}>
                <div className="relative mx-auto flex min-h-[470px] w-full max-w-[880px] items-center justify-center lg:min-h-[620px] lg:justify-end">
                  {/* Grande lumière circulaire */}
                  <div className="pointer-events-none absolute left-[28%] top-[10%] h-[390px] w-[390px] rounded-full bg-gradient-to-br from-blue-600/50 via-blue-700/20 to-transparent blur-[1px] sm:h-[470px] sm:w-[470px]" />

                  {/* Halo derrière le mockup */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[90px]" />

                  {/* Traînée lumineuse */}
                  <div className="pointer-events-none absolute left-[8%] top-[58%] hidden h-[2px] w-[88%] -rotate-[10deg] bg-gradient-to-r from-transparent via-blue-500 to-violet-500 shadow-[0_0_20px_rgba(59,130,246,0.9)] md:block" />

                  {/* Image ordinateur + téléphone */}
                  <div className="relative z-10 w-full max-w-[860px] lg:-mr-3">
                    <Image
                      src="/mockups/hero-device.png"
                      alt="Ordinateur et téléphone présentant le site 2DK IT"
                      width={1536}
                      height={1024}
                      priority
                      className="h-auto w-full rounded-[2rem] object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.58)]"
                      sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 55vw, 100vw"
                    />
                  </div>

                  {/* Badges flottants sur grand écran */}
                  <div className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-5 xl:flex">
                    {floatingBadges.map((badge, index) => (
                      <div
                        key={badge.title}
                        className="flex min-w-[225px] items-center gap-4 rounded-2xl border border-blue-400/15 bg-[#071226]/95 px-4 py-4 backdrop-blur-xl"
                        style={{
                          boxShadow:
                            "0 24px 60px -25px rgba(0, 64, 255, 0.75)",
                          transform:
                            index === 1
                              ? "translateX(18px)"
                              : "translateX(0)",
                        }}
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600/20 text-xl text-blue-300">
                          {badge.icon}
                        </span>

                        <div>
                          <p className="text-sm font-semibold text-white">
                            {badge.title}
                          </p>

                          <p className="mt-1 max-w-[145px] text-xs leading-5 text-slate-400">
                            {badge.subtitle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Badges responsive */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3 xl:hidden">
              {floatingBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/15 text-blue-300">
                    {badge.icon}
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {badge.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {badge.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Entreprises */}
            {/* Entreprises */}
<Reveal delay={220}>
  <section className="relative mt-10 overflow-hidden border-t border-white/[0.06] py-12 sm:py-14 lg:py-16">
    {/* Halo central */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.16),transparent_58%)]"
    />

    {/* Lueur basse */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-[70%] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[90px]"
    />

    <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
      {/* Titre */}
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400/60 sm:w-24" />

          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.36em] text-blue-300/70 sm:text-xs">
            Ils nous font confiance
          </span>

          <span className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400/60 sm:w-24" />
        </div>

        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base !text-white">
          Des entreprises qui nous ont confié leur présence digitale et leurs
          besoins informatiques.
        </p>
      </div>

      {/* Entreprises */}
      <div className="mt-10 grid overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm sm:grid-cols-3">
        {/* Westafine */}
        <div className="group relative flex min-h-[150px] flex-col justify-between p-6 transition duration-300 hover:bg-white/[0.045] sm:border-r sm:border-white/[0.08] lg:p-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-[0.2em] text-blue-400/70">
              01
            </span>

            <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_16px_rgba(252,211,77,0.75)]" />
          </div>

          <div className="mt-8">
            <p className="text-xl font-semibold tracking-[-0.02em] text-white transition duration-300 group-hover:text-amber-200 sm:text-2xl">
              Westafine Drinks
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Site vitrine & présence digitale
            </p>
          </div>

          <div className="mt-6 h-px w-0 bg-gradient-to-r from-amber-300 to-transparent transition-all duration-500 group-hover:w-full" />
        </div>

        {/* Enerchoice */}
        <div className="group relative flex min-h-[150px] flex-col justify-between border-t border-white/[0.08] p-6 transition duration-300 hover:bg-white/[0.045] sm:border-r sm:border-t-0 sm:border-white/[0.08] lg:p-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-[0.2em] text-blue-400/70">
              02
            </span>

            <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_16px_rgba(251,146,60,0.75)]" />
          </div>

          <div className="mt-8">
            <p className="text-xl font-semibold tracking-[-0.02em] text-white transition duration-300 group-hover:text-orange-300 sm:text-2xl">
              Enerchoice
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Plateforme web & gestion de candidatures
            </p>
          </div>

          <div className="mt-6 h-px w-0 bg-gradient-to-r from-orange-400 to-transparent transition-all duration-500 group-hover:w-full" />
        </div>

        {/* Re-Commencer */}
        <div className="group relative flex min-h-[150px] flex-col justify-between border-t border-white/[0.08] p-6 transition duration-300 hover:bg-white/[0.045] sm:border-t-0 lg:p-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-[0.2em] text-blue-400/70">
              03
            </span>

            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.75)]" />
          </div>

          <div className="mt-8">
            <p className="text-xl font-semibold tracking-[-0.02em] text-white transition duration-300 group-hover:text-cyan-200 sm:text-2xl">
              Re-Commencer
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Site associatif & accompagnement digital
            </p>
          </div>

          <div className="mt-6 h-px w-0 bg-gradient-to-r from-cyan-300 to-transparent transition-all duration-500 group-hover:w-full" />
        </div>
      </div>
    </div>
  </section>
</Reveal>
           

          </div>
        </section>

        {/* Nos réalisations */}
        <section className="bg-white py-14 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-blue-600">
                      Nos réalisations
                    </span>
                  </div>

                  <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl">
                    Des projets sobres, lisibles et pensés pour performer.
                  </h2>
                </div>

                <ButtonLink
                  href="/portfolio"
                  variant="ghost"
                  className="w-fit text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                >
                  Voir tous les projets
                  <span aria-hidden="true">→</span>
                </ButtonLink>
              </div>
            </Reveal>

            <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {displayedProjects.map((project, index) => (
                <Reveal key={project.name} delay={index * 80}>
                  <Card className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-0 shadow-[0_14px_40px_-30px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1.5">
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      {project.imageSrc ? (
                        <Image
                          src={project.imageSrc}
                          alt={`Capture d’écran du projet ${project.name}`}
                          fill
                          className="object-cover object-top transition duration-500 group-hover:scale-[1.035]"
                          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                        />
                      ) : (
                        <div
                          className={`h-full w-full bg-gradient-to-br ${project.imageAccent}`}
                        />
                      )}
                    </div>

                    <CardBody className="flex items-end justify-between gap-4 p-5">
                      <div className="min-w-0">
                        <Tag>{project.type}</Tag>

                        <h3 className="mt-2 truncate text-lg font-semibold text-slate-950">
                          {project.name}
                        </h3>
                      </div>

                      <ButtonLink
                        href="/portfolio"
                        variant="ghost"
                        aria-label={`Découvrir le projet ${project.name}`}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 p-0 text-slate-900 transition group-hover:bg-slate-950 group-hover:text-white"
                      >
                        →
                      </ButtonLink>
                    </CardBody>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}