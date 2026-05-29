import AnimatedSection from "@/components/shared/AnimatedSection";
import { Store, Truck, Apple, Package } from "lucide-react";

const segments = [
  {
    icon: Store,
    title: "Permissionários de CEASA",
    description:
      "Controle o que entra, o que sai e o que tem a receber — sem depender de caderno ou planilha.",
  },
  {
    icon: Truck,
    title: "Distribuidoras de alimentos",
    description:
      "Do pedido à entrega: financeiro, NF-e e cobrança integrados em um lugar só.",
  },
  {
    icon: Apple,
    title: "Atacadistas de hortifruti",
    description:
      "Estoque atualizado em tempo real, custo médio automático, sem erro de digitação.",
  },
  {
    icon: Package,
    title: "Distribuidoras de bebidas",
    description:
      "Gerencie vasilhames, rotas e tabelas de preço por cliente — tudo dentro do sistema.",
  },
];

export default function ForWho() {
  return (
    <section className="bg-luga-bg py-20" id="segmentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
            Segmentos atendidos
          </p>
          <h2 className="section-title">Você vai se reconhecer aqui</h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            A Luga não é um ERP genérico adaptado. Cada detalhe foi construído
            pensando no dia a dia de quem distribui alimentos.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((seg, i) => (
            <AnimatedSection key={seg.title} delay={i * 100}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full card-hover">
                <div className="gradient-icon mb-4">
                  <seg.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-luga-dark mb-2">{seg.title}</h3>
                <p className="text-sm text-luga-text-secondary leading-relaxed">{seg.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
