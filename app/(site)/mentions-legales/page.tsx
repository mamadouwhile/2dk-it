import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/seo";
import {
  companyAddress,
  companyName,
  companySiren,
  dpoEmail,
  hostingProvider,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = createPageMetadata(
  "Mentions légales",
  "Mentions légales de 2DK IT : qui édite ce site, qui l'héberge et comment nous contacter.",
  "/mentions-legales",
);

export default function LegalNoticePage() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Mentions légales"
      description="Voici qui se cache derrière ce site, comment nous contacter et les règles qui encadrent son utilisation."
      lastUpdated="21 juin 2026"
    >
      <Reveal as="section" className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">1. Qui édite ce site ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          Ce site est édité par <strong className="text-slate-950">{companyName}</strong>, dont le siège social
          se situe à <strong className="text-slate-950">{companyAddress}</strong>.
        </p>
        <p className="text-sm leading-7 text-slate-600">
          Numéro SIREN : <strong className="text-slate-950">{companySiren}</strong>. Pour toute question,
          vous pouvez nous écrire à <strong className="text-slate-950">{dpoEmail}</strong> ou nous appeler au{" "}
          <strong className="text-slate-950">{siteConfig.contactDetails.phone}</strong>.
        </p>
        <p className="text-sm leading-7 text-slate-600">
          Forme juridique, capital social, numéro SIRET et numéro de TVA intracommunautaire : informations à
          compléter dès leur disponibilité.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={80}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">2. Qui est responsable des publications ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          La direction de la publication de ce site est assurée par <strong className="text-slate-950">{companyName}</strong>.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={160}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">3. Qui héberge le site ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          Ce site est hébergé par <strong className="text-slate-950">{hostingProvider}</strong>. Les coordonnées
          complètes de l&apos;hébergeur (adresse, téléphone, e-mail) seront ajoutées ici dès leur confirmation.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={240}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">4. À qui appartient le contenu du site ?</h2>
        <p className="text-sm leading-7 text-slate-600">
          Tous les éléments visibles sur ce site — textes, images, logos, icônes, vidéos, structure et code —
          appartiennent à {companyName} ou à ses partenaires, et sont protégés par le droit de la propriété
          intellectuelle.
        </p>
        <p className="text-sm leading-7 text-slate-600">
          Toute reprise, copie ou réutilisation, même partielle, doit faire l&apos;objet d&apos;une autorisation
          écrite préalable de notre part.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={320}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">5. Fiabilité des informations</h2>
        <p className="text-sm leading-7 text-slate-600">
          Nous faisons notre maximum pour que les informations publiées sur ce site soient à jour et exactes.
          Nous ne pouvons toutefois pas être tenus responsables d&apos;éventuelles erreurs, omissions ou retards
          de mise à jour, y compris lorsqu&apos;ils proviennent d&apos;informations transmises par des
          partenaires.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={400}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">6. Vos données et les cookies</h2>
        <p className="text-sm leading-7 text-slate-600">
          Le détail de la façon dont nous traitons vos données personnelles est expliqué dans notre{" "}
          <Link
            className="text-primary underline decoration-primary/25 underline-offset-4"
            href="/politique-de-confidentialite"
          >
            politique de confidentialité
          </Link>
          . Les traceurs et cookies utilisés sur ce site sont détaillés dans notre{" "}
          <Link
            className="text-primary underline decoration-primary/25 underline-offset-4"
            href="/politique-de-cookies"
          >
            politique de cookies
          </Link>
          . Certains d&apos;entre eux ne sont déposés qu&apos;avec votre accord.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={480}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">7. Pour aller plus loin</h2>
        <p className="text-sm leading-7 text-slate-600">
          Retrouvez également nos{" "}
          <Link className="text-primary underline decoration-primary/25 underline-offset-4" href="/cgu">
            conditions générales d&apos;utilisation
          </Link>{" "}
          qui expliquent les règles d&apos;accès et d&apos;usage du site.
        </p>
      </Reveal>
    </LegalPage>
  );
}