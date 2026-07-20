import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-3xl border border-border bg-surface/80 p-6 shadow-card backdrop-blur-sm sm:p-7",
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
}

export function CardHeader({ children, className, ...props }: CardProps) {
  return (
    <header className={cn("space-y-3", className)} {...props}>
      {children}
    </header>
  );
}

export function CardBody({ children, className, ...props }: CardProps) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      {children}
    </div>
  );
}