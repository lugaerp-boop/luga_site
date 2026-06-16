import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Target, Eye, Heart, MapPin, ArrowRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre — Luga ERP, feito para quem distribui alimentos",
  description:
    "Conheça a história da Luga ERP e por que desenvolvemos um sistema especializado para distribuidoras e atacadistas de hortifrutigranjeiros no Rio de Janeiro.",
  alternates: { canonical: "https://lugaerp.com.br/sobre" },
};

const mvv = [
  {
    icon: Target,
    title: "Missão",
    text: "Simplificar a gestão de distribuidoras e atacadistas de alimentos por meio de tecnologia moderna, acessível e especializada no setor.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser o ERP de referência para o setor hortifruti e atacadista do Brasil, começando pelas CEASAs do Rio de Janeiro.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Proximidade com o cliente, simplicidade na operação, transparência total, suporte humano e evolução contínua baseada no uso real.",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-luga-hero pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Feitos para quem{" "}
              <span className="text-luga-light">distribui o alimento do Brasil</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              A Luga ERP nasceu da frustração de distribuidoras que não encontravam
              um sistema que realmente entendesse o setor. Construímos do zero,
              com quem usa na prática.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* História */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
                Nossa história
              </p>
              <h2 className="section-title mb-5">Por que a Luga existe</h2>
              <div className="space-y-4 text-luga-text-secondary leading-relaxed">
                <p>
                  A Luga nasceu da necessidade real de distribuidoras e atacadistas que ainda
                  operavam com sistemas desktop desatualizados ou tentavam gerenciar o negócio
                  em planilhas. O resultado era óbvio: erros, retrabalho e informações
                  descentralizadas.
                </p>
                <p>
                  Percebemos que os ERPs disponíveis no mercado eram genéricos demais ou caros
                  demais — nenhum entendia o dia a dia de quem vende produto perecível, trabalha
                  com tabela de preço por cliente e precisa emitir NF-e e boleto sem depender de
                  um contador para cada operação.
                </p>
                <p>
                  Desenvolvemos a Luga ERP especificamente para esse público. Cada funcionalidade
                  foi construída com base no que distribuidoras e permissionários de CEASA
                  realmente precisam no dia a dia — não em requisitos genéricos de mercado.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-luga-bg rounded-2xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "12+", label: "Módulos inclusos" },
                    { number: "100%", label: "Web, sem instalação" },
                    { number: "3+", label: "CEASAs atendidas" },
                    { number: "< 1 sem.", label: "Para estar operando" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-3xl font-extrabold text-luga-dark">{stat.number}</p>
                      <p className="text-sm text-luga-text-secondary mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-luga-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title">Missão, Visão e Valores</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {mvv.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full card-hover">
                  <div className="gradient-icon mb-4">
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-luga-dark mb-3">{item.title}</h3>
                  <p className="text-sm text-luga-text-secondary leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Por que hortifruti */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right" className="lg:order-2">
              <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
                O setor
              </p>
              <h2 className="section-title mb-5">Por que o hortifruti?</h2>
              <div className="space-y-4 text-luga-text-secondary leading-relaxed">
                <p>
                  O Brasil possui mais de 70 CEASAs distribuídas por todo o país,
                  movimentando bilhões de reais por ano em produtos hortifrutigranjeiros.
                  Apesar do volume, a maioria das empresas do setor ainda opera com
                  tecnologia precária ou totalmente manual.
                </p>
                <p>
                  O hortifruti tem particularidades que ERPs genéricos ignoram: produto
                  perecível, tabela de preço que muda diariamente, controle de
                  embalagens retornáveis, rotas de entrega específicas e integração
                  com os movimentos do mercado atacadista.
                </p>
                <p>
                  A Luga foi desenvolvida para resolver exatamente esse gap — tecnologia
                  moderna, acessível e que fala a língua de quem trabalha no setor.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" className="lg:order-1">
              <div className="space-y-4">
                {[
                  { label: "CEASAs no Brasil", value: "70+" },
                  { label: "Volume anual movimentado", value: "R$ bilhões" },
                  { label: "Empresas sem ERP especializado", value: "> 90%" },
                  { label: "Foco inicial da Luga", value: "CEASA São Gonçalo, RJ" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between bg-luga-bg rounded-xl px-5 py-4 border border-gray-100"
                  >
                    <span className="text-sm text-luga-text-secondary">{item.label}</span>
                    <span className="font-bold text-luga-dark">{item.value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="bg-luga-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="section-title">Nossa cobertura</h2>
            <p className="section-subtitle mt-3 max-w-xl mx-auto">
              Atuamos hoje no CEASA São Gonçalo e região de Niterói/RJ, com expansão
              planejada para demais CEASAs do estado.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: MapPin,
                label: "CEASA São Gonçalo",
                detail: "Mercado inicial — permissionários ativos",
              },
              {
                icon: MapPin,
                label: "Região Niterói / RJ",
                detail: "Distribuidoras independentes",
              },
              {
                icon: MapPin,
                label: "Estado do Rio de Janeiro",
                detail: "Expansão planejada para 2025–2026",
              },
            ].map((loc, i) => (
              <AnimatedSection key={loc.label} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center card-hover">
                  <div className="gradient-icon mx-auto mb-3">
                    <loc.icon size={20} />
                  </div>
                  <p className="font-bold text-luga-dark text-sm">{loc.label}</p>
                  <p className="text-xs text-luga-text-secondary mt-1">{loc.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-luga-dark mb-3">Fale conosco</h2>
            <p className="text-luga-text-secondary mb-8">
              Dúvidas, sugestões ou quer conhecer o produto? Nossa equipe está
              disponível por e-mail.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:lugaerp@gmail.com"
                className="btn-outline-blue inline-flex text-sm"
              >
                <Mail size={16} />
                lugaerp@gmail.com
              </a>
              <Link href="/demonstracao" className="btn-primary inline-flex text-sm">
                Falar com a equipe
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
