"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { createContext, useContext, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import {
  buildCookieConsentHeader,
  createAcceptedConsent,
  createCustomConsent,
  createRejectedConsent,
  isNonEssentialScriptAllowed,
  type CookieConsentCategory,
  type CookieConsentPreferences,
  type CookieConsentState,
} from "@/lib/cookie-consent";

type CookieConsentContextValue = {
  consent: CookieConsentState | null;
  isBannerVisible: boolean;
  isPreferencesOpen: boolean;
  draftPreferences: CookieConsentPreferences;
  acceptAll: () => void;
  rejectAll: () => void;
  openPreferences: () => void;
  closePreferences: () => void;
  updateDraftPreferences: (nextPreferences: CookieConsentPreferences) => void;
  saveDraftPreferences: () => void;
  canLoadCategory: (category: CookieConsentCategory) => boolean;
};

type CookieConsentProviderProps = {
  initialConsent: CookieConsentState | null;
  children: ReactNode;
};

const emptyPreferences: CookieConsentPreferences = {
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

function persistConsent(consent: CookieConsentState) {
  document.cookie = buildCookieConsentHeader(consent);
}

function toggleAllPreferences(value: boolean): CookieConsentPreferences {
  return {
    analytics: value,
    marketing: value,
  };
}

export function CookieConsentProvider({ initialConsent, children }: CookieConsentProviderProps) {
  const [consent, setConsent] = useState<CookieConsentState | null>(initialConsent);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [draftPreferences, setDraftPreferences] = useState<CookieConsentPreferences>(
    initialConsent?.preferences ?? emptyPreferences,
  );

  const value = useMemo<CookieConsentContextValue>(() => {
    const commitConsent = (nextConsent: CookieConsentState) => {
      setConsent(nextConsent);
      persistConsent(nextConsent);
      setIsPreferencesOpen(false);
    };

    return {
      consent,
      isBannerVisible: consent === null,
      isPreferencesOpen,
      draftPreferences,
      acceptAll: () => commitConsent(createAcceptedConsent()),
      rejectAll: () => commitConsent(createRejectedConsent()),
      openPreferences: () => {
        setDraftPreferences(consent?.preferences ?? emptyPreferences);
        setIsPreferencesOpen(true);
      },
      closePreferences: () => setIsPreferencesOpen(false),
      updateDraftPreferences: (nextPreferences) => setDraftPreferences(nextPreferences),
      saveDraftPreferences: () => {
        const nextConsent = createCustomConsent(draftPreferences);
        commitConsent(nextConsent);
      },
      canLoadCategory: (category) => isNonEssentialScriptAllowed(consent, category),
    };
  }, [consent, draftPreferences, isPreferencesOpen]);

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider.");
  }

  return context;
}

export function CookieConsentBanner() {
  const {
    isBannerVisible,
    isPreferencesOpen,
    acceptAll,
    rejectAll,
    openPreferences,
    closePreferences,
    draftPreferences,
    updateDraftPreferences,
    saveDraftPreferences,
    consent,
  } = useCookieConsent();

  if (!isBannerVisible && !isPreferencesOpen) {
    return null;
  }

  return (
    <>
      {isBannerVisible ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-70 p-4 sm:p-6">
          <div className="mx-auto w-full max-w-5xl pointer-events-auto">
            <Card className="border-border-strong bg-white/98 shadow-[0_24px_80px_rgba(8,17,31,0.12)] backdrop-blur-xl">
              <CardHeader className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="ds-badge">Cookies</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Consentement CNIL
                  </span>
                </div>
                <h2 className="ds-subheading text-xl sm:text-2xl">Gérez votre choix de cookies</h2>
              </CardHeader>

              <CardBody className="space-y-5">
                <p className="max-w-3xl text-sm leading-6 text-slate-700 sm:text-base">
                  Nous utilisons uniquement les cookies strictement nécessaires au fonctionnement du site. Avec votre
                  accord, nous pouvons activer des cookies de mesure d’audience ou de marketing. Vous pouvez accepter,
                  refuser ou personnaliser votre choix à tout moment.
                </p>

                <p className="text-sm leading-6 text-slate-600">
                  Pour plus de détails, consultez la{" "}
                  <Link
                    href="/politique-de-cookies"
                    className="font-medium text-primary underline decoration-primary/25 underline-offset-4 transition hover:text-primary-strong"
                  >
                    politique de cookies
                  </Link>
                  .
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button type="button" variant="primary" onClick={acceptAll}>
                    Accepter
                  </Button>
                  <Button type="button" variant="secondary" onClick={rejectAll}>
                    Refuser
                  </Button>
                  <Button type="button" variant="ghost" onClick={openPreferences}>
                    Personnaliser
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      ) : null}

      {isPreferencesOpen ? (
        <div
          className="fixed inset-0 z-80 flex items-end justify-center bg-slate-950/30 p-4 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
        >
          <div className="w-full max-w-2xl">
            <Card className="border-border-strong bg-white/98 shadow-[0_28px_90px_rgba(8,17,31,0.14)] backdrop-blur-xl">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-2">
                    <span className="ds-badge">Préférences cookies</span>
                    <h2 id="cookie-consent-title" className="ds-subheading text-xl sm:text-2xl">
                      Personnaliser vos choix
                    </h2>
                  </div>
                  <button
                    type="button"
                    className="rounded-full border border-border bg-white px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-primary/25 hover:bg-primary/5 hover:text-slate-950"
                    onClick={closePreferences}
                  >
                    Fermer
                  </button>
                </div>
              </CardHeader>

              <CardBody className="space-y-6">
                <p className="text-sm leading-6 text-slate-700">
                  Les cookies nécessaires restent actifs pour assurer le fonctionnement du site. Vous pouvez activer
                  ou désactiver les catégories optionnelles ci-dessous.
                </p>

                <div className="space-y-4">
                  <label className="flex items-start gap-3 rounded-2xl border border-border bg-slate-50 p-4">
                    <input
                      type="checkbox"
                      checked
                      disabled
                      className="mt-1 h-4 w-4 rounded border-border bg-white text-primary focus:ring-primary/20"
                    />
                    <span className="space-y-1">
                      <span className="block text-sm font-semibold text-slate-950">Cookies nécessaires</span>
                      <span className="block text-sm leading-6 text-slate-600">
                        Indispensables au fonctionnement du site et toujours activés.
                      </span>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 rounded-2xl border border-border bg-slate-50 p-4">
                    <input
                      type="checkbox"
                      checked={draftPreferences.analytics}
                      onChange={(event) =>
                        updateDraftPreferences({
                          ...draftPreferences,
                          analytics: event.target.checked,
                        })
                      }
                      className="mt-1 h-4 w-4 rounded border-border bg-white text-primary focus:ring-primary/20"
                    />
                    <span className="space-y-1">
                      <span className="block text-sm font-semibold text-slate-950">Mesure d’audience</span>
                      <span className="block text-sm leading-6 text-slate-600">
                        Permet d’améliorer les contenus et la navigation à partir de statistiques anonymisées.
                      </span>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 rounded-2xl border border-border bg-slate-50 p-4">
                    <input
                      type="checkbox"
                      checked={draftPreferences.marketing}
                      onChange={(event) =>
                        updateDraftPreferences({
                          ...draftPreferences,
                          marketing: event.target.checked,
                        })
                      }
                      className="mt-1 h-4 w-4 rounded border-border bg-white text-primary focus:ring-primary/20"
                    />
                    <span className="space-y-1">
                      <span className="block text-sm font-semibold text-slate-950">Marketing</span>
                      <span className="block text-sm leading-6 text-slate-600">
                        Utilisé pour mesurer et optimiser les campagnes ou les interactions promotionnelles.
                      </span>
                    </span>
                  </label>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Button type="button" variant="primary" onClick={saveDraftPreferences}>
                    Enregistrer mes choix
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {
                      updateDraftPreferences(toggleAllPreferences(true));
                    }}
                  >
                    Tout accepter
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      updateDraftPreferences(toggleAllPreferences(false));
                    }}
                  >
                    Tout refuser
                  </Button>
                </div>

                <p className="text-sm leading-6 text-slate-600">
                  Votre choix actuel est :{" "}
                  <strong className="text-slate-950">
                    {consent ? consent.choice : "aucun consentement enregistré"}
                  </strong>
                  .
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      ) : null}
    </>
  );
}

type CookieConsentPreferencesLinkProps = {
  className?: string;
};

export function CookieConsentPreferencesLink({ className }: CookieConsentPreferencesLinkProps) {
  const { openPreferences } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={openPreferences}
      className={className ?? "inline-flex items-center gap-1 text-xs text-slate-500 transition hover:text-slate-950"}
    >
      Gérer les cookies
    </button>
  );
}

