import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type BadgeTone = "default" | "accent" | "subtle";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: BadgeTone;
};

const toneStyles: Record<BadgeTone, string> = {
  default: "border-border bg-white text-slate-700",
  accent: "border-primary/20 bg-primary-soft text-primary",
  subtle: "border-border bg-slate-50 text-slate-600",
};

export function Badge({ children, tone = "default", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]",
        toneStyles[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function Tag({ children, className, ...props }: BadgeProps) {
  return (
    <Badge
      tone="subtle"
      className={cn("px-2.5 py-1 text-[0.7rem] uppercase tracking-[0.22em]", className)}
      {...props}
    >
      {children}
    </Badge>
  );
}