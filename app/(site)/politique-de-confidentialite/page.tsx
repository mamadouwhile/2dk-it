import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/seo";
import { companyAddress, companyName, dpoEmail } from "@/lib/site";

export const metadata: Metadata = createPageMetadata(
  "Politique de confidentialité",
  "Comment 2DK IT collecte, utilise et protège vos données personnelles.",
  "/politique-de-confidentialite",
);

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Vos données personnelles"
      title="Politique de confidentialité"
      description="Cette page explique simplement quelles données nous collectons, pourquoi, et comment vous pouvez garder le contrôle."
      lastUpdated="21 juin 2026"
    >
      <Reveal as="section" className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">1. Qui est responsable de vos données ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          <strong className="text-slate-950">{companyName}</strong>, dont le siège est situé à{" "}
          <strong className="text-slate-950">{companyAddress}</strong>, est responsable du traitement de vos
          données. Pour toute question, contactez-nous à{" "}
          <strong className="text-slate-950">{dpoEmail}</strong>.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={80}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">2. Quelles données collectons-nous ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          Lorsque vous utilisez notre formulaire de contact ou naviguez sur le site, nous pouvons collecter :
          votre nom et prénom, votre adresse e-mail, votre numéro de téléphone, le nom de votre société et votre
          fonction, le message que vous nous envoyez, ainsi que des données de navigation si vous avez accepté
          les cookies concernés.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={160}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">3. Pourquoi utilisons-nous ces données ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          Nous utilisons vos informations pour répondre à vos demandes envoyées via le formulaire de contact,
          gérer nos échanges commerciaux et vos demandes de devis, assurer le bon fonctionnement et la sécurité
          du site, mesurer l&apos;audience si vous avez donné votre accord, et respecter nos obligations légales.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={240}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">4. Qui a accès à vos données ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          Seules les personnes de notre équipe qui en ont besoin, ainsi que nos prestataires techniques
          strictement nécessaires au fonctionnement du site, peuvent accéder à vos informations. Nous ne
          revendons jamais vos données à des tiers.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={320}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">5. Combien de temps gardons-nous vos données ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          Une demande de contact sans suite commerciale est conservée 3 ans à compter de notre dernier échange.
          Si une relation contractuelle est engagée, vos données sont conservées le temps de cette relation, puis
          archivées selon nos obligations légales. Les données de facturation suivent les durées légales
          applicables, et vos choix sur les cookies sont conservés selon les recommandations de la CNIL.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={400}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">6. Comment protégeons-nous vos données ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          Nous mettons en place des mesures de sécurité techniques et organisationnelles adaptées pour éviter
          toute perte, altération, divulgation ou accès non autorisé à vos données.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={480}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">7. Quels sont vos droits ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          Vous pouvez à tout moment demander à consulter, corriger, supprimer ou limiter l&apos;utilisation de
          vos données, vous opposer à leur traitement, ou récupérer les données que vous nous avez fournies.
          Vous pouvez aussi retirer votre consentement à tout moment pour les traitements qui en dépendent.
        </p>
        <p className="text-sm leading-7 text-slate-600">
          Pour exercer ces droits, écrivez-nous à <strong className="text-slate-950">{dpoEmail}</strong> ou par
          courrier à <strong className="text-slate-950">{companyAddress}</strong>. Une preuve d&apos;identité
          pourra vous être demandée en cas de doute raisonnable.
        </p>
        <p className="text-sm leading-7 text-slate-600">
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez également déposer une réclamation
          auprès de la CNIL.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={560}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">8. Vos données quittent-elles l&apos;Europe ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          En principe, non. Si un transfert hors de l&apos;Union européenne devait un jour être nécessaire, nous
          mettrions en place les garanties appropriées prévues par la réglementation.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={640}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">9. Pour aller plus loin</h2>
        <p className="text-sm leading-7 text-slate-600">
          Consultez aussi notre{" "}
          <Link className="text-primary underline decoration-primary/25 underline-offset-4" href="/politique-de-cookies">
            politique de cookies
          </Link>{" "}
          et nos{" "}
          <Link className="text-primary underline decoration-primary/25 underline-offset-4" href="/mentions-legales">
            mentions légales
          </Link>
          .
        </p>
      </Reveal>
    </LegalPage>
  );
}