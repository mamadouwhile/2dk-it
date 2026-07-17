import type { ReactNode } from "react";
import { cookies } from "next/headers";

import {
  CookieConsentBanner,
  CookieConsentProvider,
} from "@/components/cookie-consent-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  COOKIE_CONSENT_COOKIE_NAME,
  parseCookieConsent,
} from "@/lib/cookie-consent";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialConsent = parseCookieConsent(cookieStore.get(COOKIE_CONSENT_COOKIE_NAME)?.value ?? null);

  return (
    <CookieConsentProvider initialConsent={initialConsent}>
      <div className="relative flex min-h-screen flex-col overflow-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-full focus:border focus:border-primary/40 focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-slate-950 focus:shadow-[0_12px_30px_rgba(8,17,31,0.12)]"
        >
          Aller au contenu principal
        </a>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-128 bg-[radial-gradient(circle_at_top,rgba(var(--primary-rgb),0.12),transparent_55%)]"
        />

        <SiteHeader />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <SiteFooter />
        <CookieConsentBanner />
      </div>
    </CookieConsentProvider>
  );
}