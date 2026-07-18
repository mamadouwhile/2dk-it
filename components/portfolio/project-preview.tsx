"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ButtonLink } from "@/components/ui/button";

type ProjectPreviewProps = {
  name: string;
  gallery: string[];
  href?: string;
};

export function ProjectPreview({ name, gallery, href }: ProjectPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const hasMultiple = gallery.length > 1;

  const goPrev = () => {
    setActiveIndex((current) => (current === 0 ? gallery.length - 1 : current - 1));
  };

  const goNext = () => {
    setActiveIndex((current) => (current === gallery.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
      if (event.key === "ArrowLeft") {
        goPrev();
      }
      if (event.key === "ArrowRight") {
        goNext();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function handleTouchStart(event: React.TouchEvent) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event: React.TouchEvent) {
    if (touchStartX.current === null) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        goPrev();
      } else {
        goNext();
      }
    }

    touchStartX.current = null;
  }

  if (gallery.length === 0) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setActiveIndex(0);
          setIsOpen(true);
        }}
        className="inline-flex w-full items-center justify-center rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5"
      >
        Voir le projet
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-3 backdrop-blur-sm animate-in fade-in duration-200 sm:p-6"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => setIsOpen(false)}
            className="fixed right-4 top-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20 sm:right-6 sm:top-6"
          >
            ✕
          </button>

          <div
            className="flex max-h-[95vh] w-full max-w-7xl flex-col overflow-y-auto rounded-[1.5rem] bg-slate-950 shadow-2xl ring-1 ring-white/10"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4 sm:px-7">
              <p className="text-sm font-semibold text-white sm:text-base">{name}</p>
              {hasMultiple ? (
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/60">
                  {activeIndex + 1} / {gallery.length}
                </span>
              ) : null}
            </div>

            <div
              className="p-3 sm:p-6"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-900 sm:aspect-[16/8]">
                {gallery.map((image, index) => (
                  <div
                    key={image + index}
                    className="absolute inset-0 transition-opacity duration-300 ease-out"
                    style={{ opacity: index === activeIndex ? 1 : 0, pointerEvents: index === activeIndex ? "auto" : "none" }}
                  >
                    <Image
                      src={image}
                      alt={`Capture d'écran ${index + 1} du site ${name}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 90vw, 100vw"
                      priority={index === 0}
                    />
                  </div>
                ))}

                {hasMultiple ? (
                  <>
                    <button
                      type="button"
                      aria-label="Image précédente"
                      onClick={goPrev}
                      className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-sm transition hover:scale-105 hover:bg-white/20 sm:left-5"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      aria-label="Image suivante"
                      onClick={goNext}
                      className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-sm transition hover:scale-105 hover:bg-white/20 sm:right-5"
                    >
                      ›
                    </button>
                  </>
                ) : null}

                {hasMultiple ? (
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white/10">
                    <div
                      className="h-full bg-white transition-all duration-300 ease-out"
                      style={{ width: `${((activeIndex + 1) / gallery.length) * 100}%` }}
                    />
                  </div>
                ) : null}
              </div>
            </div>

            {hasMultiple ? (
              <div className="flex justify-center gap-2 overflow-x-auto border-t border-white/10 px-5 py-4 sm:px-7">
                {gallery.map((image, index) => (
                  <button
                    key={image + index}
                    type="button"
                    aria-label={`Aller à l'image ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`relative h-16 w-28 shrink-0 overflow-hidden rounded-lg ring-2 transition ${
                      index === activeIndex ? "ring-white" : "ring-transparent opacity-50 hover:opacity-80"
                    }`}
                  >
                    <Image src={image} alt="" fill className="object-cover" sizes="112px" />
                  </button>
                ))}
              </div>
            ) : null}

            {href ? (
              <div className="flex justify-center border-t border-white/10 px-5 py-4 sm:justify-end sm:px-7">
                <ButtonLink href={href} variant="secondary">
                  Visiter le site
                </ButtonLink>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}