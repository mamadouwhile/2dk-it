import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/seo";
import { companyName } from "@/lib/site";

export const metadata: Metadata = createPageMetadata(
  "Politique de cookies",
  "Politique de cookies de 2DK IT, claire et prête à compléter selon les outils utilisés.",
  "/politique-de-cookies",
);

export default function CookiesPolicyPage() {
  return (
    <LegalPage
      eyebrow="Politique de cookies"
      title="Politique de cookies"
      description="Cette politique détaille les cookies susceptibles d’être déposés et leur gestion."
      lastUpdated="21 juin 2026"
    >
      <Reveal as="section" className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">1. Qu’est-ce qu’un cookie ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          Un cookie est un petit fichier enregistré sur votre appareil lors de la consultation du site édité par
          <strong className="text-slate-950"> {companyName}</strong>. Il peut
          servir au fonctionnement du site, aux mesures d’audience ou à l’amélioration de l’expérience utilisateur.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={80}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">2. Cookies utilisés</h2>
        <p className="text-sm leading-7 text-slate-600">
          Les catégories de cookies utilisées sur ce site sont à compléter selon les outils réellement déployés:
          cookies strictement nécessaires, cookies de mesure d’audience, cookies de préférences et éventuels cookies
          tiers.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={160}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">3. Gestion du consentement</h2>
        <p className="text-sm leading-7 text-slate-600">
          Si des cookies non essentiels sont utilisés, un bandeau de consentement devra permettre d’accepter,
          de refuser ou de paramétrer les choix.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={240}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">4. Durée de conservation</h2>
        <p className="text-sm leading-7 text-slate-600">
          La durée de conservation de chaque cookie doit être précisée ici selon l’outil concerné et la politique
          de paramétrage retenue.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={320}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">5. Pages associées</h2>
        <p className="text-sm leading-7 text-slate-600">
          Consultez aussi les <Link className="text-primary underline decoration-primary/25 underline-offset-4" href="/mentions-legales">mentions légales</Link>, la <Link className="text-primary underline decoration-primary/25 underline-offset-4" href="/politique-de-confidentialite">politique de confidentialité</Link> et les <Link className="text-primary underline decoration-primary/25 underline-offset-4" href="/cgu">CGU</Link>.
        </p>
      </Reveal>
    </LegalPage>
  );
}