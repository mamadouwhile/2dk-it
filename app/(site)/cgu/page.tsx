import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/seo";
import { companyName } from "@/lib/site";

export const metadata: Metadata = createPageMetadata(
  "Conditions générales d'utilisation",
  "Les règles simples qui encadrent l'accès et l'utilisation du site 2DK IT.",
  "/cgu",
);

export default function TermsOfUsePage() {
  return (
    <LegalPage
      eyebrow="Règles d'utilisation"
      title="Conditions générales d'utilisation"
      description="Ces règles expliquent simplement comment vous pouvez utiliser ce site et ce que nous nous engageons à respecter de notre côté."
      lastUpdated="21 juin 2026"
    >
      <Reveal as="section" className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">1. Le but de ce site</h2>
        <p className="text-sm leading-7 text-slate-600">
          Ce site présente les activités de <strong className="text-slate-950">{companyName}</strong>, en
          particulier nos services de développement web et de services informatiques, et vous permet de nous
          contacter facilement.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={80}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">2. L&apos;accès au site</h2>
        <p className="text-sm leading-7 text-slate-600">
          Le site est accessible gratuitement à toute personne disposant d&apos;une connexion internet. Les frais
          liés à votre connexion (matériel, logiciel, accès internet) restent à votre charge.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={160}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">3. Ce que nous vous demandons</h2>
        <p className="text-sm leading-7 text-slate-600">
          En utilisant ce site, vous vous engagez à le faire de manière loyale et respectueuse de la loi. Il est
          notamment interdit de tenter de perturber son fonctionnement, d&apos;y introduire des éléments
          malveillants, ou de l&apos;utiliser à des fins frauduleuses.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={240}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">4. Le contenu du site</h2>
        <p className="text-sm leading-7 text-slate-600">
          Les informations publiées sur ce site sont données à titre indicatif. Nous pouvons les modifier à tout
          moment, sans préavis, et malgré tout le soin apporté à leur rédaction, elles peuvent parfois contenir
          des erreurs ou des oublis.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={320}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">5. La propriété du contenu</h2>
        <p className="text-sm leading-7 text-slate-600">
          L&apos;ensemble du contenu de ce site est protégé par le droit de la propriété intellectuelle. Toute
          reproduction ou diffusion non autorisée est interdite.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={400}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">6. Le formulaire de contact</h2>
        <p className="text-sm leading-7 text-slate-600">
          Lorsque vous remplissez notre formulaire de contact, vous vous engagez à nous transmettre des
          informations exactes et à jour. Nous nous réservons le droit de ne pas répondre à une demande
          incomplète, inexacte ou manifestement abusive.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={480}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">7. Notre responsabilité</h2>
        <p className="text-sm leading-7 text-slate-600">
          Nous ne pouvons pas être tenus responsables des dommages, directs ou indirects, liés à
          l&apos;utilisation de ce site, à son indisponibilité éventuelle, ou aux informations qu&apos;il
          contient, sauf faute grave de notre part.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={560}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">8. Les liens vers d&apos;autres sites</h2>
        <p className="text-sm leading-7 text-slate-600">
          Ce site peut contenir des liens vers des sites tiers. Nous n&apos;avons aucun contrôle sur ces sites et
          ne sommes pas responsables de leur contenu ni de leurs pratiques.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={640}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">9. Vos données et les cookies</h2>
        <p className="text-sm leading-7 text-slate-600">
          En utilisant ce site, vous reconnaissez avoir pris connaissance de notre{" "}
          <Link
            className="text-primary underline decoration-primary/25 underline-offset-4"
            href="/politique-de-confidentialite"
          >
            politique de confidentialité
          </Link>{" "}
          et de notre{" "}
          <Link className="text-primary underline decoration-primary/25 underline-offset-4" href="/politique-de-cookies">
            politique de cookies
          </Link>
          .
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-4" delay={720}>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">10. Mise à jour de ces règles</h2>
        <p className="text-sm leading-7 text-slate-600">
          Nous pouvons modifier ces conditions à tout moment. La version applicable est celle en vigueur au
          moment de votre visite. Ces conditions sont soumises au droit français ; en cas de litige non résolu à
          l&apos;amiable, les tribunaux français compétents seront saisis.
        </p>
      </Reveal>
    </LegalPage>
  );
}