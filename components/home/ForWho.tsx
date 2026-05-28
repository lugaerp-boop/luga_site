import AnimatedSection from "@/components/shared/AnimatedSection";
import { Store, Truck, Apple, Package } from "lucide-react";

const segments = [
  {
    icon: Store,
    title: "Permissionários de CEASA",
    description:
      "Controle total das suas operações dentro e fora do mercado. Cadastros, estoque e financeiro integrados ao dia a dia do CEASA.",
  },
  {
    icon: Truck,
    title: "Distribuidoras de alimentos",
    description:
      "Do pedido à entrega, tudo registrado e integrado ao financeiro. Rotas, tabelas de preço por cliente e NF-e em um só lugar.",
  },
  {
    icon: Apple,
    title: "Atacadistas de hortifruti",
    description:
      "Gestão de estoque com custo médio automático e rastreabilidade completa. Entrada por XML de NF-e e confirmação atômica.",
  },
  {
    icon: Package,
    title: "Distribuidoras de bebidas",
    description:
      "Controle de vasilhames retornáveis, rotas e tabelas de preço personalizadas por cliente e segmento.",
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
          <h2 className="section-title">Feito para o seu segmento</h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            A Luga ERP não é um ERP genérico adaptado. Cada módulo foi construído
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
