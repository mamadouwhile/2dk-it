"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "@/lib/site";

function isCurrentPath(pathname: string | null, href: string) {
  if (!pathname) {
    return false;
  }

  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/88 backdrop-blur-xl supports-backdrop-filter:bg-white/80">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-4">
          <Link href="/" className="group flex min-w-0 items-center gap-3 transition duration-200 ease-out hover:-translate-y-0.5" onClick={closeMobileMenu}>
          <Image
  src="/logo.jpg"
  alt="Logo 2DK IT"
  width={56}
  height={56}
  className="h-14 w-14 rounded-2xl object-contain"
  priority
/>
    
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate text-sm font-semibold uppercase tracking-[0.28em] text-slate-950">
                {siteConfig.name}
              </span>
              <span className="truncate text-xs text-slate-500">B2B development & IT services</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-border bg-slate-50 p-1 lg:flex">
            {siteConfig.navigation.map((item) => {
              const active = isCurrentPath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={closeMobileMenu}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition duration-200 ease-out ${
                    active
                      ? "bg-white text-primary shadow-[0_8px_24px_rgba(8,17,31,0.08)]"
                      : "text-slate-600 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(var(--primary-rgb),0.22)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-strong hover:shadow-[0_16px_48px_rgba(var(--primary-rgb),0.26)] sm:px-5 sm:py-2.5"
            >
              <span className="hidden sm:inline">Demander un devis</span>
              <span className="sm:hidden">Devis</span>
            </Link>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white text-slate-900 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5 lg:hidden"
              onClick={() => setMobileMenuOpen((value) => !value)}
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              </span>
              <span className="flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-5 rounded-full bg-current transition duration-200 ease-out ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`h-0.5 w-5 rounded-full bg-current transition duration-200 ease-out ${mobileMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`h-0.5 w-5 rounded-full bg-current transition duration-200 ease-out ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-border bg-white/96 transition-[max-height,opacity,transform] duration-300 ease-out lg:hidden ${mobileMenuOpen ? "max-h-96 translate-y-0 opacity-100" : "pointer-events-none max-h-0 -translate-y-2 opacity-0"}`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
          <div className="grid gap-2">
            {siteConfig.navigation.map((item) => {
              const active = isCurrentPath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={closeMobileMenu}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition duration-200 ease-out ${
                    active
                      ? "bg-primary/5 text-primary"
                      : "bg-white text-slate-600 hover:-translate-y-0.5 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="mt-2 inline-flex items-center justify-center rounded-2xl border border-primary/30 bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(var(--primary-rgb),0.2)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-strong hover:shadow-[0_16px_42px_rgba(var(--primary-rgb),0.24)]"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}