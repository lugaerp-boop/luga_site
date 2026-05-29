import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import {
  Users,
  ShoppingCart,
  DollarSign,
  Landmark,
  FileText,
  BarChart3,
  Tag,
  Settings,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Funcionalidades — Módulos do Luga ERP",
  description:
    "Conheça os 12 módulos do Luga ERP: cadastros, financeiro, NF-e, boletos, relatórios e muito mais. Feito para distribuidoras e atacadistas de hortifrutigranjeiros.",
  alternates: { canonical: "https://lugaerp.com.br/funcionalidades" },
};

const modules = [
  {
    icon: Users,
    title: "Central de Cadastros",
    description:
      "Gerencie clientes, fornecedores, produtos e serviços com controle de completude e rastreabilidade total. Importação facilitada via Excel com validação automática.",
    features: [
      "Clientes e fornecedores com % de completude",
      "Importação via Excel com validação em tempo real",
      "Detecção automática de duplicidades",
      "Produtos com dados fiscais (NCM, CFOP, CST)",
      "Histórico completo de todas as importações",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Movimentação Operacional",
    description:
      "Entradas e saídas integradas ao estoque e financeiro. Importação de NF-e por XML, tabelas de preço personalizadas e controle de rotas e entregas.",
    features: [
      "Entrada de NF-e com importação de XML direto",
      "Estoque e financeiro atualizados em um clique",
      "Tabelas de preço por cliente",
      "Controle de rotas e motoristas",
      "Movimentação de saída com emissão de NF-e integrada",
    ],
  },
  {
    icon: DollarSign,
    title: "Financeiro",
    description:
      "Controle completo das finanças com contas a receber, a pagar, fluxo de caixa projetado vs realizado e conciliação bancária.",
    features: [
      "Contas a receber e a pagar integradas",
      "Fluxo de caixa projetado vs realizado",
      "Conciliação bancária simplificada",
      "Cheques pré-datados e emitidos",
      "Empréstimos e adiantamentos com parcelas",
    ],
  },
  {
    icon: Landmark,
    title: "Boletos e Banco",
    description:
      "Emissão direta de boletos integrada aos principais bancos do Brasil. Remessa, retorno CNAB e baixa automática por arquivo bancário.",
    features: [
      "Emissão direta integrada ao BB, Itaú e Bradesco",
      "Remessa e retorno CNAB 240 e 400",
      "Baixa automática por retorno bancário",
      "Duplicatas e carnês parcelados",
      "Histórico e logs de todas as operações",
    ],
  },
  {
    icon: FileText,
    title: "Fiscal e Contábil",
    description:
      "Emita NF-e com DANFE e XML inclusos. Apuração fiscal simplificada com SPED, DRE e Balanço Patrimonial — tudo integrado, sem módulos adicionais.",
    features: [
      "Emissão de NF-e com DANFE e XML",
      "SPED Fiscal e EFD Contribuições",
      "DRE e Balanço Patrimonial",
      "Mais de 200 relatórios fiscais em PDF e Excel",
    ],
  },
  {
    icon: BarChart3,
    title: "Relatórios Gerenciais",
    description:
      "Mais de 200 relatórios em PDF e Excel com filtros por período, cliente e vendedor. Exportação com um clique e bobina para impressoras térmicas.",
    features: [
      "Mais de 200 relatórios em PDF e Excel",
      "Filtros por período, cliente e vendedor",
      "Exportação com um clique",
      "Relatórios de boletas, estoque, caixa e empréstimos",
      "Bobina para impressoras térmicas",
    ],
  },
  {
    icon: Tag,
    title: "Tabelas de Preço",
    description:
      "Uma tabela de preços por cliente ou segmento, com produtos selecionáveis individualmente. Importação e exportação via Excel e PDF.",
    features: [
      "Uma tabela por cliente ou segmento de mercado",
      "Produtos selecionáveis individualmente",
      "Importação e exportação via Excel e PDF",
      "Visualização em tela cheia para vendas",
      "Preço diferenciado por unidade de venda",
    ],
  },
  {
    icon: Settings,
    title: "Sistema e Administração",
    description:
      "Controle quem acessa o quê, importe dados com rastreabilidade total e mantenha sua equipe operando com segurança desde o primeiro dia.",
    features: [
      "Multi-usuário com perfis de acesso",
      "Importação de dados via Excel com histórico completo",
      "Logs de auditoria de todas as operações",
      "Treinamento incluso na implantação",
    ],
  },
];

export default function FuncionalidadesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-luga-hero pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-luga-accent" />
              <span className="text-sm font-medium text-white">12 módulos integrados</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Tudo que você precisa para gerir sua empresa
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              12 módulos integrados, pensados para o dia a dia de distribuidoras e
              atacadistas. Sem custo extra, sem módulo bloqueado.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Modules — alternating layout */}
      <div className="bg-white">
        {modules.map((mod, i) => (
          <section
            key={mod.title}
            className={`py-16 lg:py-20 ${i % 2 === 1 ? "bg-luga-bg" : "bg-white"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text block */}
                <AnimatedSection
                  direction={i % 2 === 0 ? "left" : "right"}
                  className={i % 2 === 1 ? "lg:col-start-2" : ""}
                >
                  <div className="gradient-icon w-14 h-14 mb-5">
                    <mod.icon size={26} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-luga-dark mb-4">
                    {mod.title}
                  </h2>
                  <p className="text-luga-text-secondary leading-relaxed mb-6">
                    {mod.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle2
                          size={16}
                          className="text-luga-accent mt-0.5 flex-shrink-0"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/demonstracao" className="btn-primary inline-flex text-sm">
                    Solicitar demonstração
                    <ArrowRight size={16} />
                  </Link>
                </AnimatedSection>

                {/* Visual block */}
                <AnimatedSection
                  direction={i % 2 === 0 ? "right" : "left"}
                  className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}
                >
                  <ModuleMockup
                    icon={mod.icon}
                    title={mod.title}
                    index={i}
                  />
                </AnimatedSection>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="bg-luga-hero py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Quer ver tudo isso na prática?
            </h2>
            <p className="text-white/80 mb-8">
              Agende uma demonstração gratuita e veja o sistema funcionando
              para o seu tipo de negócio.
            </p>
            <Link href="/demonstracao" className="btn-primary text-base py-4 px-8 inline-flex">
              Solicitar demonstração gratuita
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

function ModuleMockup({
  icon: Icon,
  title,
  index,
}: {
  icon: React.ElementType;
  title: string;
  index: number;
}) {
  const colors = [
    "from-blue-600 to-blue-400",
    "from-indigo-600 to-blue-400",
    "from-sky-600 to-cyan-400",
    "from-blue-700 to-indigo-400",
    "from-teal-600 to-blue-400",
    "from-blue-500 to-sky-400",
    "from-indigo-500 to-blue-300",
    "from-blue-800 to-blue-500",
  ];

  return (
    <div
      className={`rounded-2xl bg-gradient-to-br ${colors[index % colors.length]} p-0.5 shadow-xl`}
    >
      <div className="bg-white rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center`}>
            <Icon size={18} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-luga-dark">{title}</p>
            <p className="text-xs text-luga-text-secondary">Luga ERP</p>
          </div>
          <div className="ml-auto flex gap-1">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-xs text-green-600 font-medium">Ativo</span>
          </div>
        </div>

        {/* Generic content rows */}
        <div className="space-y-3">
          {[85, 60, 100, 45].map((w, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-luga-bg flex items-center justify-center flex-shrink-0">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${colors[index % colors.length]}`} />
              </div>
              <div className="flex-1">
                <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${colors[index % colors.length]} rounded-full`}
                    style={{ width: `${w}%` }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <div className="h-2 w-20 bg-gray-100 rounded" />
                  <span className="text-xs text-luga-text-secondary">{w}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-xs text-luga-text-secondary">Atualizado agora</span>
          <div className="flex gap-2">
            <div className="h-7 w-16 rounded-md bg-luga-bg" />
            <div className={`h-7 w-16 rounded-md bg-gradient-to-r ${colors[index % colors.length]}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
