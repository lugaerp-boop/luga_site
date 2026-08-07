"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight, PlayCircle } from "lucide-react";

const SLIDES = [
  "/Imagem-Carrossel1.png",
  "/Imagem-Carrossel2.png",
  "/Imagem-Carrossel3.png",
  "/Imagem-Carrossel4.png",
];

export default function DemoModal() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!open) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => {
          setActive(0);
          setOpen(true);
        }}
        data-event="click_ver_demo"
        className="inline-flex items-center justify-center gap-2 text-base py-3.5 px-7 rounded-lg font-semibold text-white border border-white/30 hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
      >
        <PlayCircle size={18} />
        Ver demo
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setOpen(false)}
          >
            <div
              className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-luga-dark"
              onClick={(e) => e.stopPropagation()}
            >
              {SLIDES.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt="Tela do sistema Luga ERP"
                  fill
                  sizes="(min-width: 768px) 48rem, 100vw"
                  className={`object-contain blur-[3px] transition-opacity duration-1000 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Dark overlay for contrast */}
              <div className="absolute inset-0 bg-luga-dark/55" />

              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X size={18} />
              </button>

              {/* Center CTA */}
              <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                <div>
                  <p className="text-white/80 text-sm mb-4 max-w-xs mx-auto">
                    Veja o sistema completo em uma demonstração ao vivo com nossa equipe.
                  </p>
                  <Link
                    href="/demonstracao"
                    onClick={() => setOpen(false)}
                    data-event="click_demo"
                    className="inline-flex items-center justify-center gap-2 text-base py-3.5 px-7 rounded-lg font-semibold text-luga-dark bg-white hover:bg-luga-bg active:scale-[0.98] transition-all duration-200 shadow-lg"
                  >
                    Agendar demonstração
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? "bg-white w-6" : "bg-white/40 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
