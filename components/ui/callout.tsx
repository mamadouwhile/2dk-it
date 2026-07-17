import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type CalloutTone = "default" | "accent" | "neutral";

type CalloutProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: CalloutTone;
};

const toneStyles: Record<CalloutTone, string> = {
  default: "border-border bg-white text-slate-700",
  accent: "border-primary/20 bg-primary-soft text-slate-900",
  neutral: "border-border-strong bg-slate-50 text-slate-700",
};

export function Callout({ children, tone = "default", className, ...props }: CalloutProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border p-5 shadow-subtle transition duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/15 hover:shadow-[0_22px_55px_rgba(8,17,31,0.1)] motion-reduce:transition-none sm:p-6",
        toneStyles[tone],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}