"use client";

import type { ReactNode } from "react";

import { useCookieConsent } from "@/components/cookie-consent-banner";
import type { CookieConsentCategory } from "@/lib/cookie-consent";

type ConsentScriptProps = {
  category: CookieConsentCategory;
  children: ReactNode;
  fallback?: ReactNode;
};

// Utiliser ce garde autour de tout script non essentiel (analytics, marketing, widgets tiers).
export function ConsentScript({ category, children, fallback = null }: ConsentScriptProps) {
  const { canLoadCategory } = useCookieConsent();

  return canLoadCategory(category) ? <>{children}</> : <>{fallback}</>;
}

