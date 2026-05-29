import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";
import {
  DollarSign,
  BarChart3,
  FileText,
  Download,
  Users,
  Landmark,
  ArrowRight,
} from "lucide-react";

const modules = [
  {
    icon: DollarSign,
    title: "Financeiro sem surpresas",
    description: "Saiba exatamente o que tem a receber e a pagar — sem susto no fechamento do mês.",
  },
  {
    icon: BarChart3,
    title: "Estoque em tempo real",
    description: "Custo médio sempre atualizado, movimentação registrada a cada entrada.",
  },
  {
    icon: FileText,
    title: "NF-e em segundos",
    description: "Emita nota fiscal em segundos, sem sair do sistema. DANFE e XML inclusos.",
  },
  {
    icon: Download,
    title: "Relatórios prontos para usar",
    description: "Mais de 200 relatórios — exporte em PDF ou Excel com um clique.",
  },
  {
    icon: Users,
    title: "Cadastros organizados",
    description: "Clientes e produtos com alertas de cadastro incompleto e detecção de duplicidades.",
  },
  {
    icon: Landmark,
    title: "Boletos pelo sistema",
    description: "Gere e envie boletos direto pelo sistema, integrado ao BB, Itaú e Bradesco.",
  },
];

export default function Modules() {
  return (
    <section className="bg-white py-20" id="modulos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
            Módulos
          </p>
          <h2 className="section-title">Tudo que sua operação precisa, integrado</h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Cada módulo conversa com os outros. O que entra no estoque já reflete
            no financeiro. O que o cliente deve já vira boleto.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {modules.map((mod, i) => (
            <AnimatedSection key={mod.title} delay={i * 80}>
              <div className="bg-luga-bg rounded-2xl p-6 border border-gray-100 h-full card-hover">
                <div className="gradient-icon mb-4">
                  <mod.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-luga-dark mb-2">{mod.title}</h3>
                <p className="text-sm text-luga-text-secondary leading-relaxed">{mod.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Link href="/funcionalidades" className="btn-outline-blue inline-flex">
            Ver todos os módulos em detalhe
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
