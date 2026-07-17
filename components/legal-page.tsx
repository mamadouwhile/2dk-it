import Link from "next/link";
import type { ReactNode } from "react";

import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Badge, Tag } from "@/components/ui/badge";
import { Callout } from "@/components/ui/callout";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { legalPageLinks, type LegalPlaceholder } from "@/lib/legal";
import {
  companyAddress,
  companyName,
  companySiren,
  dpoEmail,
  hostingProvider,
  siteConfig,
} from "@/lib/site";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  children: ReactNode;
  placeholders?: LegalPlaceholder[];
};

function LegalPlaceholderGrid({ placeholders = [] }: { placeholders?: LegalPlaceholder[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {placeholders.map((item) => (
        <div key={item.label} className="rounded-2xl border border-border bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
          <p className="mt-2 text-sm font-medium text-slate-950">{item.value}</p>
          {item.hint ? <p className="mt-2 text-sm leading-6 text-slate-600">{item.hint}</p> : null}
        </div>
      ))}
    </div>
  );
}

function LegalRelatedLinks() {
  return (
    <Card>
      <CardHeader>
        <Tag>Pages légales</Tag>
        <h2 className="ds-subheading text-xl">Accès rapide</h2>
      </CardHeader>
      <CardBody>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {legalPageLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-border bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-primary/25 hover:bg-primary/5 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

export function LegalPage({
  eyebrow,
  title,
  description,
  lastUpdated,
  children,
  placeholders,
}: LegalPageProps) {
  const defaultPlaceholders: LegalPlaceholder[] = [
    { label: "Raison sociale", value: companyName, hint: "Nom légal de l’entreprise centralisé dans `lib/site.ts`." },
    { label: "Adresse", value: companyAddress, hint: "Adresse postale complète centralisée dans `lib/site.ts`." },
    { label: "SIREN / SIRET", value: `${companySiren} / SIRET à compléter`, hint: "Identifiants légaux à renseigner depuis `lib/site.ts`." },
    { label: "Email", value: dpoEmail, hint: "Adresse de contact RGPD ou DPO centralisée dans `lib/site.ts`." },
    { label: "Téléphone", value: siteConfig.contactDetails.phone, hint: "Numéro joignable si applicable." },
    { label: "Directeur de publication", value: companyName, hint: "Valeur partagée et facilement remplaçable depuis `lib/site.ts`." },
    { label: "Hébergeur", value: hostingProvider, hint: "Nom, adresse et contact de l’hébergeur centralisés dans `lib/site.ts`." },
  ];

  return (
    <PageShell eyebrow={eyebrow} title={title} description={description}>
      <div className="flex flex-col gap-14 lg:gap-18">
        <Reveal className="flex flex-wrap items-center gap-3" delay={40}>
          <Badge tone="accent">Dernière mise à jour</Badge>
          <Tag>{lastUpdated}</Tag>
        </Reveal>

        <Reveal delay={100}>
          <Callout tone="neutral" className="space-y-2">
            <p className="text-sm leading-6 text-slate-700">
              Cette page est rédigée pour être modifiée facilement. Les éléments juridiques essentiels sont
              déjà visibles et peuvent être complétés sans revoir la structure.
            </p>
          </Callout>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal as="section" className="space-y-6" delay={160}>
            {children}

            <Separator />

            <Card>
              <CardHeader>
                <Tag>Informations à compléter</Tag>
                <h2 className="ds-subheading text-xl">Champs légaux principaux</h2>
              </CardHeader>
              <CardBody>
                <LegalPlaceholderGrid placeholders={placeholders ?? defaultPlaceholders} />
              </CardBody>
            </Card>
          </Reveal>

          <Reveal as="aside" className="space-y-6 lg:sticky lg:top-28" delay={240}>
            <LegalRelatedLinks />

            <Callout>
              <p className="text-sm leading-6 text-slate-700">
                Les quatre pages se renvoient entre elles pour faciliter la lecture et la mise à jour du
                contenu juridique.
              </p>
            </Callout>
          </Reveal>
        </div>
      </div>
    </PageShell>
  );
}
