import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";
import {
  DollarSign,
  BarChart3,
  FileText,
  Users,
  Landmark,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const modules = [
  {
    icon: DollarSign,
    title: "Financeiro sem surpresas",
    description: "Contas a receber, a pagar, caixa, cofre e fluxo de caixa — sem susto no fechamento do mês.",
  },
  {
    icon: BarChart3,
    title: "Estoque em tempo real",
    description: "Custo médio sempre atualizado, movimentação registrada a cada entrada e saída.",
  },
  {
    icon: FileText,
    title: "Fiscal integrado (plano Completo)",
    description: "NF-e, apuração de ICMS e SPED Fiscal dentro do próprio ERP, sem sistema separado.",
  },
  {
    icon: MessageCircle,
    title: "Cobrança automática",
    description: "Régua de cobrança via WhatsApp e 14 categorias de relatórios, com centenas de modelos prontos.",
  },
  {
    icon: Users,
    title: "26 cadastros integrados",
    description: "Clientes e produtos com alertas de cadastro incompleto e detecção de duplicidades.",
  },
  {
    icon: Landmark,
    title: "Boletos, Pix e conciliação",
    description: "Boletos multi-banco, Pix e conciliação bancária automática via Open Finance.",
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
