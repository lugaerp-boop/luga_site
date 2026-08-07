"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
import WaveDivider from "@/components/shared/WaveDivider";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-luga-hero pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden">
      {/* Full-bleed photo background */}
      <div className="absolute inset-0">
        <Image
          src="/Imagem-Hero.png"
          alt="Gestor usando o Luga ERP em um notebook, com indicadores do sistema em destaque"
          fill
          sizes="100vw"
          priority
          className="object-cover object-[65%_18%] lg:object-[72%_12%]"
        />
        {/* Brand-color gradient so the photo blends into the hero instead of sitting as a separate block */}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(13,27,75,0.97)_0%,rgba(13,27,75,0.92)_28%,rgba(13,27,75,0.68)_50%,rgba(21,101,192,0.42)_72%,rgba(21,101,192,0.22)_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Text side */}
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-luga-accent animate-pulse" />
              <span className="text-sm font-medium text-white">
                Do mercado para o mercado
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Gestão completa para{" "}
              <span className="text-luga-light">distribuidoras, hortifruti e atacadistas.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-xl">
              Nascido no dia a dia do mercado: controle pedidos, estoque,
              financeiro, NF-e e boletos em um só sistema —{" "}
              <span className="text-white font-semibold">no ar em menos de 1 semana.</span>
            </p>

            {/* Trust strip */}
            <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 mb-8">
              <span className="text-sm text-white/90">multi-filial</span>
              <span className="text-white/40">·</span>
              <span className="text-sm text-white/90">tudo incluso</span>
              <span className="text-white/40">·</span>
              <span className="text-sm text-white/90">preço sob consulta</span>
            </div>

            {/* Quick wins */}
            <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
              {[
                "Usuários ilimitados",
                "100% web — sem instalação",
                "Suporte e treinamento inclusos",
              ].map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-sm text-white/80">
                  <CheckCircle2 size={14} className="text-luga-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/demonstracao"
                data-event="click_demo"
                className="inline-flex items-center justify-center gap-2 text-base py-3.5 px-7 rounded-lg font-semibold text-luga-dark bg-white hover:bg-luga-bg active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Agendar demonstração gratuita
                <ArrowRight size={18} />
              </Link>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-event="click_whatsapp"
                className="inline-flex items-center justify-center gap-2 text-base py-3.5 px-7 rounded-lg font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5b] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat badge — sits directly on the photo, not boxed away from it */}
      <div
        className="hidden lg:flex absolute right-12 xl:right-24 bottom-16 items-center gap-3 bg-white rounded-xl shadow-xl px-4 py-3 animate-fade-in"
        style={{ animationDelay: "300ms" }}
      >
        <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
          <TrendingUp size={18} className="text-emerald-500" />
        </div>
        <div>
          <p className="text-[11px] text-luga-text-secondary leading-none mb-1">Receber hoje</p>
          <p className="text-sm font-bold text-luga-dark leading-none">R$ 12.450</p>
        </div>
      </div>

      <WaveDivider />
    </section>
  );
}
