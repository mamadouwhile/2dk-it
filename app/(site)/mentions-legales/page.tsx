import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/seo";
import { companyAddress, companyName, companySiren, dpoEmail, hostingProvider, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata(
  "Mentions légales",
  "Mentions légales de 2DK IT, présentées dans un format clair et facile à compléter.",
  "/mentions-legales",
);

export default function LegalNoticePage() {
  return (
    <LegalPage
      eyebrow="Mentions légales"
      title="Mentions légales"
      description="Ce document rassemble les informations juridiques essentielles du site 2DK IT."
      lastUpdated="21 juin 2026"
    >
      <Reveal as="section" className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">1. Éditeur du site</h2>
        <p className="text-sm leading-7 text-slate-600">
          Le site est édité par <strong className="text-slate-950">{companyName}</strong>, dont le siège social est situé à
          <strong className="text-slate-950"> {companyAddress}</strong>.
        </p>
        <p className="text-sm leading-7 text-slate-600">
          SIREN : <strong className="text-slate-950">{companySiren}</strong>. Pour toute demande, vous pouvez écrire à
          <strong className="text-slate-950"> {dpoEmail}</strong> ou appeler le
          <strong className="text-slate-950"> {siteConfig.contactDetails.phone}</strong>.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={80}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">2. Directeur de la publication</h2>
        <p className="text-sm leading-7 text-slate-600">
          La direction de la publication est assurée par <strong className="text-slate-950">{companyName}</strong>.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={160}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">3. Hébergement</h2>
        <p className="text-sm leading-7 text-slate-600">
          Le site est hébergé par <strong className="text-slate-950">{hostingProvider}</strong>. Les coordonnées complètes de
          l’hébergeur sont à compléter ici.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={240}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">4. Propriété intellectuelle</h2>
        <p className="text-sm leading-7 text-slate-600">
          L’ensemble des contenus présents sur ce site est protégé par le droit de la propriété intellectuelle.
          Toute reproduction ou diffusion doit faire l’objet d’une autorisation préalable.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={320}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">5. Liens utiles</h2>
        <p className="text-sm leading-7 text-slate-600">
          Voir aussi la <Link className="text-primary underline decoration-primary/25 underline-offset-4" href="/politique-de-confidentialite">politique de confidentialité</Link>, la <Link className="text-primary underline decoration-primary/25 underline-offset-4" href="/politique-de-cookies">politique de cookies</Link> et les <Link className="text-primary underline decoration-primary/25 underline-offset-4" href="/cgu">CGU</Link>.
        </p>
      </Reveal>
    </LegalPage>
  );
}