import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { Badge, Tag } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "À propos",
  "Découvrez 2DK IT, son approche, ses valeurs et sa méthode de travail.",
  "/a-propos",
);

const heroStrengths = [
  {
    icon: "⚡",
    title: "Réactif",
    description: "Des réponses rapides",
  },
  {
    icon: "◇",
    title: "Fiable",
    description: "Un cadre clair et sécurisé",
  },
  {
    icon: "◎",
    title: "Proche",
    description: "Une relation humaine",
  },
];

const services = [
  {
    icon: "◎",
    title: "Sites web sur mesure",
    description:
      "Sites vitrines, plateformes intermédiaires et solutions adaptées aux objectifs de votre entreprise.",
  },
  {
    icon: "▣",
    title: "Support et maintenance IT",
    description:
      "Interventions, suivi des équipements et accompagnement sur vos besoins informatiques.",
  },
  {
    icon: "◇",
    title: "Fiabilité et bonnes pratiques",
    description:
      "Une exécution structurée, des données mieux protégées et un environnement de travail maîtrisé.",
  },
  {
    icon: "⌘",
    title: "Accompagnement humain",
    description:
      "Écoute, conseil et suivi personnalisé tout au long de votre projet.",
  },
];

const missionPoints = [
  {
    icon: "↗",
    title: "Web",
    description: "Création de sites clairs et performants.",
  },
  {
    icon: "◎",
    title: "IT",
    description: "Support et accompagnement informatique.",
  },
  {
    icon: "◇",
    title: "Méthode",
    description: "Un cadre simple, lisible et structuré.",
  },
  {
    icon: "⚡",
    title: "Réactivité",
    description: "Des échanges directs et efficaces.",
  },
];

const values = [
  {
    number: "01",
    title: "Clarté",
    description:
      "Des échanges simples, un périmètre lisible et des décisions faciles à partager.",
  },
  {
    number: "02",
    title: "Rigueur",
    description:
      "Une exécution propre, des points de contrôle et une attention constante à la qualité.",
  },
  {
    number: "03",
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
      "Nous clarifions l’objectif, le contexte et les contraintes pour partir sur des bases solides.",
  },
  {
    step: "02",
    title: "Cadrer la solution",
    description:
      "Nous définissons les priorités, les livrables, les étapes et le niveau d’accompagnement.",
  },
  {
    step: "03",
    title: "Livrer proprement",
    description:
      "Nous suivons l’exécution avec un souci de fiabilité, de lisibilité et de cohérence.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#020817] text-white">
        {/* Halo bleu */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle 720px at 76% 42%, rgba(0, 92, 255, 0.3), transparent 66%)",
          }}
        />

        {/* Halo secondaire */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle 420px at 92% 70%, rgba(65, 32, 255, 0.17), transparent 70%)",
          }}
        />

        {/* Grille */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-24">
          {/* Texte */}
          <Reveal>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.95)]" />

                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-300 sm:text-xs">
                  À propos de 2DK IT
                </span>
              </div>

              <h1 className="mt-7 max-w-[650px] text-4xl font-semibold leading-[1.08] tracking-[-0.045em] !text-white sm:text-5xl lg:text-[3.7rem] xl:text-[4.15rem]">
                Une entreprise simple à comprendre, sérieuse à{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  engager.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                2DK IT accompagne les entreprises qui veulent une présence web
                claire et un support IT fiable, avec une relation directe et un
                niveau d’exigence constant.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                {heroStrengths.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/15 text-blue-300">
                      {item.icon}
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Mockup */}
          <Reveal delay={140}>
            <div className="relative mx-auto w-full max-w-[780px]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/25 blur-[100px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-blue-400/15 bg-[#071226]/75 p-2 shadow-[0_35px_90px_-35px_rgba(0,52,180,0.8)] backdrop-blur-sm sm:p-3">
                <Image
                  src="/mockups/hero-device.png"
                  alt="Présentation du site 2DK IT sur ordinateur et téléphone"
                  width={1536}
                  height={1024}
                  priority
                  className="h-auto w-full rounded-[1.6rem] object-cover"
                  sizes="(min-width: 1024px) 52vw, 100vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUI NOUS SOMMES */}
      <section className="bg-white py-16 text-slate-950 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:px-8">
          <Reveal>
            <div className="max-w-xl">
              <div className="inline-flex rounded-full bg-blue-50 px-4 py-2">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Qui nous sommes
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">
                Une offre web et IT lisible
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                2DK IT se positionne sur deux terrains complémentaires : la
                création ou l’évolution d’une présence web, et l’appui sur des
                sujets informatiques qui demandent méthode, réactivité et sens
                du service.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Nous parlons simplement, nous cadrons précisément et nous allons
                à l’essentiel sans sacrifier la qualité.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 70}>
                <article className="group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_25px_60px_-34px_rgba(37,99,235,0.3)]">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      {service.icon}
                    </span>

                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-950">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="border-y border-slate-200 bg-slate-50 py-14 text-slate-950 sm:py-16">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:px-8">
          <Reveal>
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Notre mission
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">
                Aider les entreprises à avancer avec un cadre net et fiable.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Concevoir des supports web utiles, accompagner les besoins IT et
                faire évoluer chaque solution avec une logique de qualité, de
                vitesse et de confiance.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {missionPoints.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="h-full border-l border-slate-200 pl-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-lg text-blue-600">
                    {item.icon}
                  </span>

                  <h3 className="mt-4 text-lg font-semibold text-blue-600">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="bg-white py-16 text-slate-950 sm:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Nos valeurs
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">
                Une manière de travailler simple et rassurante.
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <article className="group relative min-h-[235px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_55px_-38px_rgba(15,23,42,0.4)] transition duration-300 hover:-translate-y-1.5 hover:border-blue-200">
                  <span className="absolute bottom-2 right-5 text-7xl font-semibold tracking-[-0.08em] text-slate-100 transition duration-300 group-hover:text-blue-50">
                    {value.number}
                  </span>

                  <div className="relative z-10">
                    <span className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.75)]" />

                    <h3 className="mt-5 text-xl font-semibold text-slate-950">
                      {value.title}
                    </h3>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="relative overflow-hidden bg-[#020817] py-16 text-white sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.18),transparent_55%)]"
        />

        <div className="relative mx-auto grid w-full max-w-[1440px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.68fr_1.32fr] lg:items-start lg:px-8">
          <Reveal>
            <div className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Notre méthode
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] !text-white sm:text-4xl">
                Une méthode courte, lisible et orientée résultat.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Un cadre volontairement simple pour réduire les ambiguïtés,
                sécuriser la collaboration et avancer efficacement.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {methodSteps.map((item, index) => (
              <Reveal key={item.step} delay={index * 80}>
                <article className="relative">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-500/45 bg-blue-600/10 text-xs font-semibold text-blue-300">
                      {item.step}
                    </span>

                    {index < methodSteps.length - 1 && (
                      <span className="hidden h-px flex-1 border-t border-dashed border-white/15 md:block" />
                    )}
                  </div>

                  <h3 className="mt-6 text-lg font-semibold !text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 text-slate-950 sm:py-16">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-blue-50 p-7 shadow-[0_24px_65px_-45px_rgba(37,99,235,0.4)] sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[70px]"
              />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                    Votre projet
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-950">
                    Prêt à démarrer votre projet ?
                  </h2>

                  <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                    Présentez-nous vos objectifs. Nous vous répondrons rapidement
                    avec une proposition claire et adaptée à votre besoin.
                  </p>
                </div>

                <ButtonLink
                  href="/contact"
                  variant="primary"
                  className="shrink-0 justify-center rounded-xl bg-blue-600 px-7 py-4 text-white shadow-[0_18px_45px_-18px_rgba(37,99,235,0.95)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  Demander un devis
                  <span aria-hidden="true">→</span>
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}