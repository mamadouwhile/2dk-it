import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type SharedProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonAsLink = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-primary/35 bg-primary text-white shadow-[0_14px_40px_rgba(var(--primary-rgb),0.18)] hover:-translate-y-0.5 hover:border-primary/55 hover:bg-primary-strong hover:shadow-[0_18px_50px_rgba(var(--primary-rgb),0.24)]",
  secondary:
    "border border-border-strong bg-white text-slate-950 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-primary/5 hover:shadow-[0_18px_45px_rgba(8,17,31,0.08)]",
  ghost:
    "border border-transparent bg-transparent text-slate-700 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/5 hover:text-slate-950",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/15 disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none";

function buttonClassName(variant: ButtonVariant, className?: string) {
  return cn(baseStyles, variantStyles[variant], className);
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonAsButton) {
  return (
    <button className={buttonClassName(variant, className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: ButtonAsLink) {
  return (
    <a href={href} className={buttonClassName(variant, className)} {...props}>
      {children}
    </a>
  );
}