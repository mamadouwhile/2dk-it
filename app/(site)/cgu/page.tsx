import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/seo";
import { companyName } from "@/lib/site";

export const metadata: Metadata = createPageMetadata(
  "CGU",
  "Conditions générales d’utilisation de 2DK IT, structurées pour être complétées facilement.",
  "/cgu",
);

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="CGU"
      title="Conditions générales d’utilisation"
      description="Ces CGU encadrent l’utilisation du site et des formulaires de 2DK IT."
      lastUpdated="21 juin 2026"
    >
      <Reveal as="section" className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">1. Objet</h2>
        <p className="text-sm leading-7 text-slate-600">
          Les présentes conditions définissent les règles d’accès et d’utilisation du site exploité par
          <strong className="text-slate-950"> {companyName}</strong>, ainsi que les
          responsabilités applicables lors de la navigation ou de l’envoi d’une demande.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={80}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">2. Utilisation du site</h2>
        <p className="text-sm leading-7 text-slate-600">
          L’utilisateur s’engage à fournir des informations exactes et à utiliser le site dans le respect de la loi
          et des présentes conditions.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={160}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">3. Disponibilité et responsabilité</h2>
        <p className="text-sm leading-7 text-slate-600">
          2DK IT s’efforce d’assurer un accès stable au site, sans garantie absolue de disponibilité continue.
          Les informations sont fournies à titre indicatif et peuvent évoluer.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={240}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">4. Modification des CGU</h2>
        <p className="text-sm leading-7 text-slate-600">
          Les présentes CGU peuvent être modifiées à tout moment. La date de mise à jour devra être ajustée en
          conséquence.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={320}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">5. Documents associés</h2>
        <p className="text-sm leading-7 text-slate-600">
          Voir aussi les <Link className="text-primary underline decoration-primary/25 underline-offset-4" href="/mentions-legales">mentions légales</Link>, la <Link className="text-primary underline decoration-primary/25 underline-offset-4" href="/politique-de-confidentialite">politique de confidentialité</Link> et la <Link className="text-primary underline decoration-primary/25 underline-offset-4" href="/politique-de-cookies">politique de cookies</Link>.
        </p>
      </Reveal>
    </LegalPage>
  );
}