import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <section className="ds-section px-4 sm:px-6 lg:px-8">
      <div className="ds-container flex w-full flex-col gap-10">
        <Reveal as="header" className={cn("space-y-5", "max-w-3xl")}>
          <p className="ds-eyebrow">{eyebrow}</p>
          <div className="space-y-4">
            <h1 className="ds-heading">{title}</h1>
            <p className="ds-lead">{description}</p>
          </div>
        </Reveal>

        {children}
      </div>
    </section>
  );
}