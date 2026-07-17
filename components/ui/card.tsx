import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <article
      className={cn(
        "group rounded-[1.5rem] border border-border bg-white p-6 shadow-[0_18px_55px_rgba(8,17,31,0.08)] backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-primary/15 hover:shadow-[0_28px_75px_rgba(8,17,31,0.12)] motion-reduce:transition-none sm:p-7",
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