import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Badge, Tag } from "@/components/ui/badge";
import { Callout } from "@/components/ui/callout";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Services",
  "Découvrez les offres de création de sites internet et de support informatique proposées par 2DK IT.",
  "/services",
);

const webOffers = [
  {
    name: "Site vitrine",
    label: "Idéal pour démarrer",
    offerType: "Offre essentielle",
    description:
      "Une présence professionnelle claire pour présenter votre entreprise et recevoir des demandes.",
    audience:
      "Indépendants, commerçants, artisans, associations et petites entreprises.",
    features: [
      "Jusqu’à 5 pages",
      "Design responsive",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Intégration Google Maps",
      "Liens vers vos réseaux sociaux",
    ],
    duration: "5 à 10 jours",
    featured: false,
  },
  {
    name: "Site intermédiaire",
    label: "Le plus choisi",
    offerType: "Offre croissance",
    description:
      "Un site plus complet pour développer votre visibilité et présenter plusieurs activités.",
    audience:
      "Entreprises souhaitant renforcer leur image et générer davantage de contacts.",
    features: [
      "Jusqu’à 12 pages",
      "Design personnalisé",
      "SEO avancé",
      "Animations modernes",
      "Portfolio ou catalogue",
      "Blog ou espace actualités",
      "Formulaires avancés",
      "Optimisation des performances",
    ],
    duration: "2 à 3 semaines",
    featured: true,
  },
  {
    name: "Site premium",
    label: "Solution sur mesure",
    offerType: "Projet personnalisé",
    description:
      "Une solution digitale avancée conçue autour des besoins précis de votre entreprise.",
    audience:
      "Entreprises ayant des besoins stratégiques, évolutifs ou spécifiques.",
    features: [
      "Design entièrement sur mesure",
      "Architecture UX personnalisée",
      "Nombre de pages selon le projet",
      "Animations premium",
      "SEO approfondi",
      "Fonctionnalités personnalisées",
      "Espace d’administration",
      "Support prioritaire",
    ],
    duration: "3 à 6 semaines",
    featured: false,
  },
];

const comparisonRows = [
  {
    feature: "Design responsive",
    vitrine: "Inclus",
    intermediate: "Inclus",
    premium: "Inclus",
  },
  {
    feature: "Design personnalisé",
    vitrine: "Standard",
    intermediate: "Avancé",
    premium: "Sur mesure",
  },
  {
    feature: "Optimisation SEO",
    vitrine: "Essentielle",
    intermediate: "Avancée",
    premium: "Approfondie",
  },
  {
    feature: "Animations",
    vitrine: "Simples",
    intermediate: "Avancées",
    premium: "Premium",
  },
  {
    feature: "Blog ou actualités",
    vitrine: "En option",
    intermediate: "Inclus",
    premium: "Inclus",
  },
  {
    feature: "Espace d’administration",
    vitrine: "Non inclus",
    intermediate: "En option",
    premium: "Inclus",
  },
  {
    feature: "Fonctionnalités sur mesure",
    vitrine: "Non incluses",
    intermediate: "En option",
    premium: "Incluses",
  },
  {
    feature: "Accompagnement",
    vitrine: "Standard",
    intermediate: "Renforcé",
    premium: "Prioritaire",
  },
];

const itOffers = [
  {
    name: "Maintenance informatique",
    offerType: "Accompagnement régulier",
    description:
      "Un accompagnement régulier pour maintenir votre matériel et limiter les interruptions.",
    features: [
      "Assistance informatique",
      "Mises à jour essentielles",
      "Diagnostic des incidents",
      "Conseils et accompagnement",
    ],
  },
  {
    name: "Intervention informatique",
    offerType: "Intervention personnalisée",
    description:
      "Une intervention ponctuelle pour installer, réparer ou configurer votre matériel.",
    features: [
      "Installation de postes",
      "Configuration d’imprimantes",
      "Dépannage informatique",
      "Configuration Wi-Fi et réseau",
    ],
  },
  {
    name: "Audit et conseil IT",
    offerType: "Étude personnalisée",
    description:
      "Une analyse de votre environnement informatique pour identifier les améliorations utiles.",
    features: [
      "Analyse de l’existant",
      "Recommandations adaptées",
      "Organisation du matériel",
      "Accompagnement à l’évolution",
    ],
  },
];

const strengths = [
  {
    number: "01",
    title: "Un interlocuteur dédié",
    description:
      "Vous échangez avec une personne qui suit votre demande du début jusqu’à la livraison.",
  },
  {
    number: "02",
    title: "Des offres compréhensibles",
    description:
      "Nous expliquons clairement les prestations, les délais et les éléments inclus.",
  },
  {
    number: "03",
    title: "Une solution adaptée",
    description:
      "La prestation est ajustée à votre activité, à vos besoins et à votre budget.",
  },
  {
    number: "04",
    title: "Un suivi après livraison",
    description:
      "Nous restons disponibles pour vous accompagner après la mise en ligne ou l’intervention.",
  },
];

const projectSteps = [
  {
    number: "01",
    title: "Prise de contact",
    description:
      "Vous nous présentez votre activité, votre situation et votre besoin.",
  },
  {
    number: "02",
    title: "Analyse",
    description:
      "Nous identifions la solution la plus pertinente pour votre entreprise.",
  },
  {
    number: "03",
    title: "Proposition",
    description:
      "Vous recevez un cadre clair avec le tarif, les étapes et les délais estimés.",
  },
  {
    number: "04",
    title: "Réalisation",
    description:
      "Notre équipe développe votre site ou intervient sur votre environnement informatique.",
  },
  {
    number: "05",
    title: "Livraison",
    description:
      "Nous vérifions les éléments réalisés avant leur validation et leur mise en service.",
  },
  {
    number: "06",
    title: "Suivi",
    description:
      "Nous restons disponibles pour la maintenance et les prochaines évolutions.",
  },
];

const faqItems = [
  {
    question: "Le tarif définitif peut-il être différent du prix affiché ?",
    answer:
      "Oui. Les prix affichés correspondent à des tarifs de départ. Le tarif définitif dépend notamment du nombre de pages, des fonctionnalités et du niveau de personnalisation demandé.",
  },
  {
    question: "Puis-je payer mon site en plusieurs fois ?",
    answer:
      "Un échéancier peut être étudié selon le montant du projet et les conditions définies dans le devis.",
  },
  {
    question: "L’hébergement et le nom de domaine sont-ils inclus ?",
    answer:
      "Ils peuvent être intégrés à la proposition. Leur prise en charge est précisée clairement dans le devis avant le lancement du projet.",
  },
  {
    question: "Pourrai-je modifier mon site après sa livraison ?",
    answer:
      "Cela dépend de la formule et des fonctionnalités choisies. Une interface d’administration ou une prestation de maintenance peut être proposée.",
  },
  {
    question: "Intervenez-vous uniquement pour les professionnels ?",
    answer:
      "Nos services s’adressent principalement aux indépendants, associations, commerçants, TPE et PME.",
  },
];

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Services 2DK IT",
  url: "https://www.2dk-it.fr/services",
  description:
    "Découvrez les offres de création de sites internet et de support informatique proposées par 2DK IT.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: webOffers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: offer.name,
      item: {
        "@type": "Service",
        name: offer.name,
        description: offer.description,
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

function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-3.5 w-3.5"
        xmlns="http://www.w3.org/2000/svg"
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

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Des solutions web et informatiques adaptées à votre entreprise"
      description="Comparez nos offres, identifiez la solution qui correspond à votre besoin et recevez une proposition claire."
    >
      <StructuredData data={servicesStructuredData} />

      <div className="flex flex-col gap-20 lg:gap-28">
        {/* Introduction */}
        <Reveal
          as="section"
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
        >
          <div className="max-w-3xl space-y-5">
            <div className="flex flex-wrap gap-3">
              <Badge tone="accent">Solutions professionnelles</Badge>
              <Tag>Développement web</Tag>
              <Tag>Support IT</Tag>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Une offre claire pour chaque niveau de besoin.
            </h2>

            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Que vous lanciez votre activité, souhaitiez renforcer votre
              présence en ligne ou améliorer votre environnement informatique,
              2DK IT vous accompagne avec une solution adaptée.
            </p>
          </div>

          <Callout tone="neutral" className="space-y-3">
            <p className="ds-kicker">Bon à savoir</p>

            <p className="text-sm leading-6 text-slate-700">
              Les tarifs affichés sont des prix de départ. Un devis précis est
              réalisé selon les fonctionnalités et le niveau de personnalisation
              demandé.
            </p>
          </Callout>
        </Reveal>

        <Separator />

        {/* Offres web */}
        <Reveal as="section" className="space-y-10" delay={80}>
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <p className="ds-eyebrow">Création de sites internet</p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Choisissez la formule adaptée à votre ambition.
            </h2>

            <p className="text-base leading-7 text-slate-600">
              Chaque formule vous offre un niveau différent de contenu, de
              personnalisation et de fonctionnalités.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-3 xl:items-stretch">
            {webOffers.map((offer, index) => (
              <Reveal key={offer.name} delay={index * 90}>
                <article
                  className={[
                    "relative flex h-full flex-col overflow-hidden rounded-[2rem] border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8",
                    offer.featured
                      ? "border-primary/40 shadow-[0_24px_80px_-40px_rgba(37,99,235,0.55)] ring-1 ring-primary/10"
                      : "border-slate-200",
                  ].join(" ")}
                >
                  {offer.featured ? (
                    <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
                  ) : null}

                  <div className="flex items-start justify-between gap-4">
                    <Tag>{offer.name}</Tag>

                    {offer.featured ? (
                      <Badge tone="accent">{offer.label}</Badge>
                    ) : (
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {offer.label}
                      </span>
                    )}
                  </div>

                  <div className="mt-8 space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      {offer.offerType}
                    </p>

                    <p className="text-sm leading-7 text-slate-600">
                      {offer.description}
                    </p>
                  </div>

                  <div className="my-7 h-px bg-slate-200" />

                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Cette offre comprend
                    </p>

                    <ul className="space-y-3">
                      {offer.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                        >
                          <CheckIcon />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="mb-5 rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Délai estimé
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-950">
                        {offer.duration}
                      </p>
                    </div>

                    <ButtonLink
                      href={`/contact?service=${encodeURIComponent(offer.name)}`}
                      variant={offer.featured ? "primary" : "ghost"}
                      className="w-full justify-center"
                    >
                      Demander un devis
                    </ButtonLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Comparatif */}
        <Reveal as="section" className="space-y-8" delay={130}>
          <div className="max-w-2xl space-y-3">
            <p className="ds-eyebrow">Comparatif</p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Comparez les formules en un coup d'œil.
            </h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-950">
                    <th className="px-6 py-5 text-left text-sm font-semibold !text-white">
                      Fonctionnalités
                    </th>

                    <th className="px-6 py-5 text-left text-sm font-semibold !text-white">
                      Vitrine
                    </th>

                    <th className="px-6 py-5 text-left text-sm font-semibold !text-white">
                      Intermédiaire
                    </th>

                    <th className="px-6 py-5 text-left text-sm font-semibold !text-white">
                      Premium
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={
                        index !== comparisonRows.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }
                    >
                      <td className="px-6 py-5 text-sm font-semibold text-slate-950">
                        {row.feature}
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-600">
                        {row.vitrine}
                      </td>

                      <td className="bg-primary/[0.03] px-6 py-5 text-sm font-medium text-slate-800">
                        {row.intermediate}
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-600">
                        {row.premium}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Support IT */}
        <Reveal as="section" className="space-y-10" delay={170}>
          <div className="max-w-3xl space-y-4">
            <p className="ds-eyebrow">Support informatique</p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Un accompagnement informatique simple et professionnel.
            </h2>

            <p className="text-base leading-7 text-slate-600">
              2DK IT intervient pour l’installation, la maintenance, le
              dépannage et l’amélioration de votre environnement informatique.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {itOffers.map((offer, index) => (
              <Reveal key={offer.name} delay={index * 80}>
                <Card className="h-full border-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader className="space-y-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-sm font-semibold text-primary">
                      0{index + 1}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {offer.name}
                      </h3>

                      <p className="text-base font-semibold text-primary">
                        {offer.offerType}
                      </p>
                    </div>

                    <p className="text-sm leading-6 text-slate-600">
                      {offer.description}
                    </p>
                  </CardHeader>

                  <CardBody className="flex h-full flex-col">
                    <ul className="space-y-3">
                      {offer.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                        >
                          <CheckIcon />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-8">
                      <ButtonLink
                        href={`/contact?service=${encodeURIComponent(offer.name)}`}
                        variant="ghost"
                        className="w-full justify-center"
                      >
                        Nous contacter
                      </ButtonLink>
                    </div>
                  </CardBody>
                </Card>
              </Reveal>
            ))}
          </div>

        </Reveal>

        {/* Pourquoi 2DK IT */}
        <Reveal
          as="section"
          className="overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-12 sm:px-10 lg:px-14 lg:py-16"
          delay={210}
        >
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Pourquoi 2DK IT
              </p>

              <h2 className="text-3xl font-semibold tracking-tight !text-white sm:text-4xl">
                Un accompagnement pensé pour les professionnels.
              </h2>

              <p className="text-base leading-7 text-slate-300">
                Nous privilégions une communication claire, des solutions
                adaptées et un suivi sérieux à chaque étape.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div
                  key={strength.number}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <p className="text-sm font-semibold text-primary">
                    {strength.number}
                  </p>

                  <h3 className="mt-5 text-xl font-semibold !text-white">
                    {strength.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Étapes */}
        <Reveal as="section" className="space-y-10" delay={240}>
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <p className="ds-eyebrow">Notre méthode</p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Un processus simple, du premier échange jusqu’au suivi.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projectSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 60}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-primary">
                      {step.number}
                    </span>

                    <span className="h-px flex-1 bg-slate-200" />
                  </div>

                  <h3 className="mt-8 text-xl font-semibold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* FAQ */}
        <Reveal as="section" className="space-y-10" delay={270}>
          <div className="max-w-2xl space-y-4">
            <p className="ds-eyebrow">Questions fréquentes</p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Les réponses aux questions les plus courantes.
            </h2>
          </div>

          <div className="grid gap-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-3xl border border-slate-200 bg-white p-6 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="text-base font-semibold text-slate-950 sm:text-lg">
                    {item.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-700 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="max-w-3xl pt-5 text-sm leading-7 text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>

        {/* CTA final */}
        <Reveal as="section" delay={300}>
          <Callout
            tone="accent"
            className="overflow-hidden rounded-[2.5rem] px-6 py-10 sm:px-10 lg:px-14 lg:py-14"
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-4">
                <p className="ds-kicker">Votre projet commence ici</p>

                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  Parlons de votre besoin et trouvons la bonne solution.
                </h2>

                <p className="max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
                  Présentez-nous votre activité et votre objectif. Nous vous
                  orienterons vers l’offre la plus adaptée, sans vous faire
                  parcourir une longue liste de projets.
                </p>
              </div>

              <div className="flex lg:justify-end">
                <ButtonLink
                  href="/contact"
                  variant="primary"
                  className="w-full justify-center sm:w-auto"
                >
                  Demander un devis
                </ButtonLink>
              </div>
            </div>
          </Callout>
        </Reveal>
      </div>
    </PageShell>
  );
}