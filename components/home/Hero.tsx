"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-luga-hero pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-luga-royal/20 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-luga-light/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-luga-accent animate-pulse" />
              <span className="text-sm font-medium text-white">
                Feito para o setor hortifruti e CEASA
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Do CEASA ao cliente final,{" "}
              <span className="text-luga-light">
                tudo sob controle.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              Financeiro, estoque, NF-e e boletos integrados — em um só sistema,
              acessível de qualquer lugar,{" "}
              <span className="text-white font-semibold">sem instalação.</span>
            </p>

            {/* Quick wins */}
            <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
              {[
                "Acesso de qualquer dispositivo",
                "100% web — sem instalação",
                "Suporte incluso",
              ].map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-sm text-white/80">
                  <CheckCircle2 size={14} className="text-luga-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/demonstracao" className="btn-primary text-base py-3.5 px-7">
                Quero uma demonstração
                <ArrowRight size={18} />
              </Link>
              <Link href="/funcionalidades" className="btn-outline-white text-base py-3.5 px-7">
                Conhecer o sistema
              </Link>
            </div>
          </div>

          {/* Dashboard mockup side */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="w-full max-w-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 shadow-2xl">
      {/* Top bar */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-3 h-3 rounded-full bg-red-400/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <div className="w-3 h-3 rounded-full bg-green-400/80" />
        <div className="flex-1 bg-white/10 rounded h-5 ml-3" />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: "Receber hoje", value: "R$ 12.450", color: "text-emerald-300" },
          { label: "Pagar hoje", value: "R$ 4.200", color: "text-red-300" },
          { label: "Saldo", value: "R$ 8.250", color: "text-white" },
        ].map((s) => (
          <div key={s.label} className="bg-white/10 rounded-xl p-3">
            <p className="text-[10px] text-white/60 mb-1">{s.label}</p>
            <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Chart placeholder */}
      <div className="bg-white/10 rounded-xl p-4 mb-4">
        <p className="text-[10px] text-white/60 mb-3">Fluxo de Caixa — Junho</p>
        <div className="flex items-end gap-1 h-16">
          {[40, 70, 55, 90, 65, 80, 50, 75, 95, 60, 85, 45].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-luga-gradient rounded-sm opacity-70"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Recent items */}
      <div className="space-y-2">
        <p className="text-[10px] text-white/60 mb-2">Últimas NF-e emitidas</p>
        {[
          { nf: "NF-e 001.847", cliente: "Supermercado Bom Preço", valor: "R$ 1.240,00" },
          { nf: "NF-e 001.846", cliente: "Distribuidora Verde", valor: "R$ 890,00" },
          { nf: "NF-e 001.845", cliente: "Mercado São João", valor: "R$ 2.100,00" },
        ].map((item) => (
          <div
            key={item.nf}
            className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2"
          >
            <div>
              <p className="text-[10px] font-semibold text-white">{item.nf}</p>
              <p className="text-[9px] text-white/50">{item.cliente}</p>
            </div>
            <span className="text-[10px] font-semibold text-emerald-300">{item.valor}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
