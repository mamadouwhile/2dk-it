import Link from "next/link";

import { CookieConsentPreferencesLink } from "@/components/cookie-consent-banner";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xs font-semibold tracking-[0.3em] text-white">
                2DK
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-slate-400">B2B development & IT services</span>
              </span>
            </Link>

            <p className="max-w-md text-sm leading-6 text-slate-300">
              {siteConfig.tagline}
            </p>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {siteConfig.contactLines.map((line) => (
                <div
                  key={line.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    {line.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">{line.value}</p>
                </div>
              ))}
            </div>
          </div>

          <nav aria-label="Pages principales" className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
              Pages principales
            </p>
            <ul className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-1">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="inline-flex rounded-full px-0 py-1 transition duration-200 ease-out hover:translate-x-0.5 hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Liens légaux" className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
              Liens légaux
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              {siteConfig.legalNavigation.map((item) => (
                <li key={item.href}>
                  <Link className="transition duration-200 ease-out hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
                Besoin d’un cadre clair ?
              </p>
              <p className="max-w-2xl text-sm leading-6 text-slate-300">
                Un besoin web, support IT ou refonte de présence digitale peut être cadré rapidement avec un échange direct.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="primary">
                Demander un devis
              </ButtonLink>
              <ButtonLink href="/portfolio" variant="secondary">
                Voir le portfolio
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p>
              © {new Date().getFullYear()} {siteConfig.legalName}. Tous droits réservés.
            </p>
            <CookieConsentPreferencesLink className="inline-flex items-center gap-1 text-xs text-slate-400 transition hover:text-white" />
          </div>
          <p>Navigation courte, contrastes forts, base prête pour la version finale.</p>
        </div>
      </div>
    </footer>
  );
}