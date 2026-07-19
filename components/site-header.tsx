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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#020817]/90 backdrop-blur-xl. text-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[78px] items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex min-w-0 items-center gap-3"
          >
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_12px_35px_-18px_rgba(37,99,235,0.9)] transition duration-300 group-hover:-translate-y-0.5 group-hover:border-blue-500/40">
              <Image
                src="/logo.jpg"
                alt="Logo 2DK IT"
                width={48}
                height={48}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-sm font-semibold uppercase tracking-[0.24em] text-white">
                {siteConfig.name}
              </p>

              <p className="mt-1 truncate text-xs text-slate-500">
                Web development & IT services
              </p>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden items-center gap-1 lg:flex">
            {siteConfig.navigation.map((item) => {
              const active = isCurrentPath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={closeMobileMenu}
                  className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition duration-300 ${
                    active
                      ? "bg-white/[0.06] text-white"
                      : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {item.label}

                  {active && (
                    <span className="absolute inset-x-4 -bottom-[17px] h-0.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.95)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-blue-400/20 bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_38px_-18px_rgba(37,99,235,0.95)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 sm:px-5"
            >
              <span className="hidden sm:inline">Demander un devis</span>
              <span className="sm:hidden">Devis</span>

              <span
                aria-hidden="true"
                className="transition duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            {/* Menu mobile */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition duration-300 hover:border-blue-500/30 hover:bg-white/[0.07] lg:hidden"
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              </span>

              <span className="flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                    mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />

                <span
                  className={`h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />

                <span
                  className={`h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                    mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation mobile */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/[0.07] bg-[#020817]/95 transition-[max-height,opacity,transform] duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[520px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 py-4 sm:px-6">
          <div className="grid gap-2">
            {siteConfig.navigation.map((item) => {
              const active = isCurrentPath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={closeMobileMenu}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition duration-300 ${
                    active
                      ? "border border-blue-500/20 bg-blue-600/10 text-blue-300"
                      : "border border-transparent text-slate-400 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-500"
            >
              Demander un devis
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}