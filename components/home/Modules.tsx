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
    title: "Financeiro completo",
    description: "Contas a receber e a pagar, fluxo de caixa, cheques e empréstimos integrados.",
  },
  {
    icon: BarChart3,
    title: "Controle de estoque",
    description: "Custo médio ponderado calculado automaticamente a cada entrada de mercadoria.",
  },
  {
    icon: FileText,
    title: "Emissão de NF-e",
    description: "DANFE, XML e cancelamento integrados. Importação de XML de entrada direto do fornecedor.",
  },
  {
    icon: Download,
    title: "Relatórios em PDF e Excel",
    description: "Mais de 200 relatórios com filtros por período, cliente e vendedor. Exportação com um clique.",
  },
  {
    icon: Users,
    title: "Cadastros com completude",
    description: "Clientes, fornecedores e produtos com indicador de completude e detecção de duplicidades.",
  },
  {
    icon: Landmark,
    title: "Boletos integrados ao banco",
    description: "Emissão direta no BB, Itaú e Bradesco. Remessa, retorno CNAB e baixa automática.",
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
          <h2 className="section-title">Tudo que sua empresa precisa em um só lugar</h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            12 módulos integrados, sem custo adicional, acessíveis pelo navegador
            a qualquer hora do dia.
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
