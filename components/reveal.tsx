"use client";

import type { ElementType, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

type RevealProps<TTag extends ElementType = "div"> = {
  as?: TTag;
  delay?: number;
  className?: string;
  children: ReactNode;
};

export function Reveal<TTag extends ElementType = "div">({
  as,
  delay = 0,
  className,
  children,
}: RevealProps<TTag>) {
  const Component = (as ?? "div") as ElementType;
  const elementRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Component
      ref={elementRef as never}
      data-visible={visible ? "true" : "false"}
      className={cn("ds-reveal", className)}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}