import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import WaveDivider from "@/components/shared/WaveDivider";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Truck,
  Boxes,
  DollarSign,
  Wallet,
  TrendingUp,
  Landmark,
  Receipt,
  MapPin,
  BarChart3,
  FileText,
  Settings,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Funcionalidades — Módulos do Luga ERP",
  description:
    "Conheça os módulos do Luga ERP: cadastros, vendas, compras, estoque, financeiro, cobrança, boletos, fiscal e 14 categorias de relatórios. Feito para distribuidoras e atacadistas de hortifrutigranjeiros.",
  alternates: { canonical: "https://lugaerp.com.br/funcionalidades" },
};

type Plan = "Ambos" | "Completo";

const modules: {
  icon: React.ElementType;
  title: string;
  plan: Plan;
  description: string;
  features: string[];
}[] = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    plan: "Ambos",
    description:
      "Visão geral da operação assim que você entra no sistema: indicadores em tempo real, acesso rápido às telas mais usadas e alertas do que precisa de atenção hoje.",
    features: [
      "Indicadores financeiros e operacionais em tempo real",
      "Acesso rápido aos módulos mais usados",
      "Alertas de pendências e vencimentos",
      "Visão consolidada entre filiais",
    ],
  },
  {
    icon: Users,
    title: "Central de Cadastros",
    plan: "Ambos",
    description:
      "Um hub único com 26 cadastros organizados em 4 categorias, com KPIs e alertas de duplicidade para você nunca operar com dado errado ou repetido.",
    features: [
      "26 cadastros organizados em 4 categorias",
      "KPIs de completude e qualidade do cadastro",
      "Detecção automática de duplicidades",
      "Importação via Excel com validação em tempo real",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Vendas e Precificação",
    plan: "Ambos",
    description:
      "Pedidos, notas de saída e tabelas de preço por cliente ou canal, com baixa em lote e natureza de operação configurável.",
    features: [
      "Pedidos, NF de saída e condição de pagamento",
      "Tabelas de preço por cliente e por canal",
      "Baixa em lote e natureza de operação",
      "Importação e exportação de tabelas via planilha",
    ],
  },
  {
    icon: Truck,
    title: "Compras e Logística",
    plan: "Ambos",
    description:
      "Notas de entrada, devoluções e baixa em lote de um lado; controle de frete, CTe e rateio entre entregas do outro — tudo integrado ao estoque.",
    features: [
      "Notas fiscais de entrada e devolução de compra",
      "Baixa em lote de despesas e compras",
      "Controle de frete, CTe e faltas na entrega",
      "Rateio de custo de frete entre entregas",
    ],
  },
  {
    icon: Boxes,
    title: "Controle de Estoque",
    plan: "Ambos",
    description:
      "Saldo em tempo real, movimentações, inventário e ajuste de custo — com registro de perdas e quebras para o número sempre bater com o galpão.",
    features: [
      "Saldo e movimentações em tempo real",
      "Inventário e ajuste automático de custo médio",
      "Registro de perdas e quebras",
      "Integração automática com compras e vendas",
    ],
  },
  {
    icon: DollarSign,
    title: "Contas a Receber e a Pagar",
    plan: "Ambos",
    description:
      "Cadastro e baixa de títulos com status claro — aberto, parcialmente pago, liquidado ou vencido — individualmente ou em lote.",
    features: [
      "Contas a receber e a pagar integradas",
      "Status por título: aberto, parc. pago, liquidado, vencido",
      "Baixa individual ou em lote",
      "Histórico completo por cliente e fornecedor",
    ],
  },
  {
    icon: Wallet,
    title: "Caixa, Cofre e Cobrança WhatsApp",
    plan: "Ambos",
    description:
      "Abertura, movimentação e fechamento de caixa com PDF de sessão, sangrias e controle do dinheiro físico — mais uma régua automática de cobrança por WhatsApp para boletos vencidos ou a vencer.",
    features: [
      "Abertura, movimentações e fechamento com PDF de sessão",
      "Sangrias e controle de dinheiro físico no cofre",
      "Régua de cobrança automática via WhatsApp",
      "Envio para clientes com boleto vencido ou a vencer",
    ],
  },
  {
    icon: TrendingUp,
    title: "Fluxo de Caixa, DRE e Capital de Giro",
    plan: "Ambos",
    description:
      "Projeção e realização de entradas e saídas, DRE, capital de giro e comparativo entre prazo médio de recebimento e de pagamento.",
    features: [
      "Fluxo de caixa projetado vs. realizado",
      "DRE e Capital de Giro",
      "Comparativo PMR x PMP",
      "Visão consolidada por período e por filial",
    ],
  },
  {
    icon: Landmark,
    title: "Boletos, Pix e Conciliação Bancária",
    plan: "Ambos",
    description:
      "Emissão multi-banco, Pix com QR Code estático e dinâmico, remessa e retorno CNAB 240/400 — com conciliação automática via Open Finance.",
    features: [
      "Emissão de boletos multi-banco",
      "Pix — QR Code estático e dinâmico",
      "CNAB 240 e 400 (remessa e retorno)",
      "Conciliação bancária automática com Open Finance",
    ],
  },
  {
    icon: Receipt,
    title: "Duplicatas, Cheques e Empréstimos",
    plan: "Ambos",
    description:
      "Emissão, protesto e liquidação de duplicatas mercantis, controle de cheques emitidos e recebidos, e gestão de contratos de empréstimo com tabela de parcelas.",
    features: [
      "Duplicatas mercantis — emissão, protesto e liquidação",
      "Cheques emitidos e recebidos",
      "Contratos de empréstimo e tabela de parcelas",
      "Controle de saldo devedor",
    ],
  },
  {
    icon: MapPin,
    title: "Mapa de Entregas",
    plan: "Ambos",
    description:
      "Visualização geográfica de clientes e entregas pendentes ou realizadas, com cobertura de rotas para organizar a logística do dia.",
    features: [
      "Visualização geográfica de clientes",
      "Entregas pendentes e realizadas no mapa",
      "Cobertura e organização de rotas",
    ],
  },
  {
    icon: BarChart3,
    title: "Relatórios Gerenciais",
    plan: "Ambos",
    description:
      "14 categorias e centenas de modelos prontos — a receber, a pagar, vendas, compras, estoque, caixa, estratégico e mais — com modo configurável pelo usuário.",
    features: [
      "14 categorias de relatórios, centenas de modelos",
      "A Receber, A Pagar, Vendas, Compras, Estoque, Caixa e Estratégico",
      "Modo configurável pelo usuário",
      "Exportação em PDF e Excel com um clique",
    ],
  },
  {
    icon: FileText,
    title: "Fiscal e Contábil",
    plan: "Completo",
    description:
      "Emissão de NF-e integrada via Focus NFe, apuração de ICMS, livros fiscais e SPED — tudo dentro do próprio ERP, sem exportar dados para outro sistema.",
    features: [
      "Emissão de NF-e — geração, cancelamento e consulta",
      "Apuração de ICMS: crédito vs. débito, saldo e GNRE",
      "Livros Fiscais e SPED Fiscal (EFD ICMS/IPI e Contribuições)",
      "Estoque Fiscal para o bloco H do SPED",
      "Exportação contábil: AlterData, CSV, TXT e XML",
      "Cadastros fiscais: NCM, CFOP, CST e alíquotas",
    ],
  },
  {
    icon: Settings,
    title: "Permissões, Usuários e Multi-filial",
    plan: "Ambos",
    description:
      "Controle por papel — operador, financeiro, vendedor, comprador — com granularidade por módulo, e gestão de múltiplas filiais no mesmo sistema.",
    features: [
      "Controle de acesso por papel (perfil de usuário)",
      "Granularidade de permissão por módulo",
      "Multi-filial e multi-usuário",
      "Usuários ilimitados, sem cobrança por pessoa",
    ],
  },
];

export default function FuncionalidadesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-luga-hero pt-28 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-luga-accent" />
              <span className="text-sm font-medium text-white">
                +14 módulos financeiros · multi-filial
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Tudo que você precisa para gerir sua empresa
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Módulos integrados, pensados para o dia a dia de distribuidoras e
              atacadistas. Planos Essencial e Completo — o Completo com módulo
              Fiscal e Contábil integrado.
            </p>
          </AnimatedSection>
        </div>

        <WaveDivider />
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
                  <div className="flex items-center gap-3 mb-5">
                    <div className="gradient-icon w-14 h-14">
                      <mod.icon size={26} />
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        mod.plan === "Completo"
                          ? "bg-luga-accent/10 text-luga-accent"
                          : "bg-emerald-50 text-emerald-600"
                      }`}
                    >
                      {mod.plan === "Completo" ? "Plano Completo" : "Essencial e Completo"}
                    </span>
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
