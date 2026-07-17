import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/seo";
import { companyName, dpoEmail } from "@/lib/site";

export const metadata: Metadata = createPageMetadata(
  "Politique de confidentialité",
  "Politique de confidentialité de 2DK IT, prête à compléter avec les informations de traitement.",
  "/politique-de-confidentialite",
);

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Politique de confidentialité"
      title="Politique de confidentialité"
      description="Cette politique explique comment 2DK IT collecte, utilise et protège les données personnelles."
      lastUpdated="21 juin 2026"
    >
      <Reveal as="section" className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">1. Responsable du traitement</h2>
        <p className="text-sm leading-7 text-slate-600">
          Le responsable du traitement est <strong className="text-slate-950">{companyName}</strong>, contactable à
          <strong className="text-slate-950"> {dpoEmail}</strong>.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={80}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">2. Données collectées</h2>
        <p className="text-sm leading-7 text-slate-600">
          Nous pouvons collecter les données transmises via le formulaire de contact: nom, entreprise, email,
          téléphone, besoin et message.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={160}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">3. Finalités et base légale</h2>
        <p className="text-sm leading-7 text-slate-600">
          Les données sont utilisées pour répondre aux demandes, préparer des échanges commerciaux et assurer
          le suivi des échanges. La base légale est l’intérêt légitime ou l’exécution de mesures précontractuelles,
          selon le contexte.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={240}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">4. Durée de conservation</h2>
        <p className="text-sm leading-7 text-slate-600">
          Les données sont conservées pendant une durée à définir selon la finalité, puis supprimées ou archivées
          conformément aux obligations applicables.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={320}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">5. Vos droits</h2>
        <p className="text-sm leading-7 text-slate-600">
          Vous disposez des droits d’accès, de rectification, d’effacement, d’opposition, de limitation et de
          portabilité lorsque cela s’applique. Pour exercer vos droits, écrivez à
          <strong className="text-slate-950"> {dpoEmail}</strong>.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={400}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">6. Liens utiles</h2>
        <p className="text-sm leading-7 text-slate-600">
          Consultez aussi les <Link className="text-primary underline decoration-primary/25 underline-offset-4" href="/mentions-legales">mentions légales</Link>, la <Link className="text-primary underline decoration-primary/25 underline-offset-4" href="/politique-de-cookies">politique de cookies</Link> et les <Link className="text-primary underline decoration-primary/25 underline-offset-4" href="/cgu">CGU</Link>.
        </p>
      </Reveal>
    </LegalPage>
  );
}