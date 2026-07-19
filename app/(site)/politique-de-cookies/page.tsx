import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { Reveal } from "@/components/reveal";
import { CookieConsentPreferencesLink } from "@/components/cookie-consent-banner";
import { createPageMetadata } from "@/lib/seo";
import { dpoEmail } from "@/lib/site";

export const metadata: Metadata = createPageMetadata(
  "Politique de cookies",
  "Quels cookies utilise 2DK IT et comment gérer vos préférences.",
  "/politique-de-cookies",
);

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Cookies et traceurs"
      title="Politique de cookies"
      description="Voici ce qu'est un cookie, pourquoi nous en utilisons certains, et comment vous pouvez faire vos choix à tout moment."
      lastUpdated="21 juin 2026"
    >
      <Reveal as="section" className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          Un cookie est un petit fichier déposé sur votre appareil lors de votre visite sur notre site. Il permet
          de mémoriser certaines informations, comme vos préférences de navigation ou des statistiques de
          fréquentation.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={80}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">2. Quels cookies utilisons-nous ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          Nous utilisons des cookies strictement nécessaires au fonctionnement du site, des cookies de mesure
          d&apos;audience pour comprendre comment le site est utilisé, des cookies de fonctionnalité, et
          éventuellement des cookies liés à des services tiers intégrés au site.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={160}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">3. Avons-nous besoin de votre accord ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          Les cookies strictement nécessaires au fonctionnement du site ne demandent pas votre accord. Tous les
          autres cookies ne sont déposés qu&apos;après que vous avez donné votre consentement via le bandeau
          affiché sur le site.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={240}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">4. Comment changer d&apos;avis ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          Vous pouvez modifier vos choix à tout moment directement depuis ce site.
        </p>
        <p className="text-sm leading-7 text-slate-600">
          <CookieConsentPreferencesLink />
        </p>
        <p className="text-sm leading-7 text-slate-600">
          Vous pouvez également configurer votre navigateur pour refuser tout ou partie des cookies, sachant que
          cela peut affecter certaines fonctionnalités du site.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={320}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">5. Combien de temps votre choix est-il conservé ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          Votre choix est conservé pendant une durée conforme aux recommandations de la CNIL. Passé ce délai,
          votre consentement pourra vous être redemandé.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={400}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">6. Une question ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          Écrivez-nous à <strong className="text-slate-950">{dpoEmail}</strong>. Retrouvez aussi notre{" "}
          <Link
            className="text-primary underline decoration-primary/25 underline-offset-4"
            href="/politique-de-confidentialite"
          >
            politique de confidentialité
          </Link>
          .
        </p>
      </Reveal>
    </LegalPage>
  );
}