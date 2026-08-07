import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import DemoModal from "@/components/funcionalidades/DemoModal";
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
  ShieldCheck,
  Download,
  MessageCircle,
  QrCode,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Funcionalidades — Módulos do Luga ERP",
  description:
    "Conheça os módulos do Luga ERP: cadastros, vendas, compras, estoque, financeiro, cobrança, boletos, fiscal e 14 categorias de relatórios. Feito para distribuidoras e atacadistas de hortifrutigranjeiros.",
  alternates: { canonical: "https://lugaerp.com.br/funcionalidades" },
};

type Plan = "Ambos" | "Completo";

type VisualType =
  | "dashboard"
  | "cadastros"
  | "vendas"
  | "compras"
  | "estoque"
  | "financeiro"
  | "caixa"
  | "fluxo"
  | "boletos"
  | "duplicatas"
  | "map"
  | "reports"
  | "fiscal"
  | "permissions";

const modules: {
  icon: React.ElementType;
  title: string;
  plan: Plan;
  description: string;
  features: string[];
  visual: VisualType;
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
    ],
    visual: "dashboard",
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
    visual: "cadastros",
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
    visual: "vendas",
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
    visual: "compras",
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
    visual: "estoque",
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
    visual: "financeiro",
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
    visual: "caixa",
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
    visual: "fluxo",
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
    visual: "boletos",
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
    visual: "duplicatas",
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
    visual: "map",
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
    visual: "reports",
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
    visual: "fiscal",
  },
  {
    icon: Settings,
    title: "Permissões e Usuários",
    plan: "Ambos",
    description:
      "Controle por papel — operador, financeiro, vendedor, comprador — com granularidade por módulo.",
    features: [
      "Controle de acesso por papel (perfil de usuário)",
      "Granularidade de permissão por módulo",
      "Usuários ilimitados, sem cobrança por pessoa",
    ],
    visual: "permissions",
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
                +14 módulos financeiros
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Tudo que você precisa para gerir sua empresa
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Módulos integrados, pensados para o dia a dia de distribuidoras e
              atacadistas. Planos Essencial e Completo — o Completo com módulo
              Fiscal e Contábil integrado.
            </p>
            <DemoModal />
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
                    visual={mod.visual}
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

const CARD_COLORS = [
  "from-blue-600 to-blue-400",
  "from-indigo-600 to-blue-400",
  "from-sky-600 to-cyan-400",
  "from-blue-700 to-indigo-400",
  "from-teal-600 to-blue-400",
  "from-blue-500 to-sky-400",
  "from-indigo-500 to-blue-300",
  "from-blue-800 to-blue-500",
];

function ModuleMockup({
  icon: Icon,
  title,
  index,
  visual,
}: {
  icon: React.ElementType;
  title: string;
  index: number;
  visual: VisualType;
}) {
  const color = CARD_COLORS[index % CARD_COLORS.length];

  return (
    <div className={`rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-xl`}>
      <div className="bg-white rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
            <Icon size={18} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-luga-dark">{title}</p>
            <p className="text-xs text-luga-text-secondary">Luga ERP</p>
          </div>
          <div className="ml-auto flex gap-1 items-center">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-xs text-green-600 font-medium">Ativo</span>
          </div>
        </div>

        {visual === "dashboard" && <DashboardMockup color={color} />}
        {visual === "cadastros" && <CadastrosMockup color={color} />}
        {visual === "vendas" && <VendasMockup color={color} />}
        {visual === "compras" && <ComprasMockup color={color} />}
        {visual === "estoque" && <EstoqueMockup color={color} />}
        {visual === "financeiro" && <FinanceiroMockup />}
        {visual === "caixa" && <CaixaMockup color={color} />}
        {visual === "fluxo" && <FluxoMockup />}
        {visual === "boletos" && <BoletosMockup color={color} />}
        {visual === "duplicatas" && <DuplicatasMockup color={color} />}
        {visual === "map" && <MapMockup color={color} />}
        {visual === "reports" && <ReportsMockup color={color} />}
        {visual === "fiscal" && <FiscalMockup color={color} />}
        {visual === "permissions" && <PermissionsMockup color={color} />}
      </div>
    </div>
  );
}

function DashboardMockup({ color }: { color: string }) {
  const stats = [
    { label: "Saldo bancário", value: "R$ 42.180" },
    { label: "A receber hoje", value: "R$ 6.240" },
    { label: "A pagar hoje", value: "R$ 3.150" },
    { label: "Previsão de sobra", value: "R$ 39.030" },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 mb-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-luga-bg rounded-lg p-3 border border-gray-100">
            <p className="text-[11px] text-luga-text-secondary mb-1">{s.label}</p>
            <p className="text-sm font-bold text-luga-dark">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-luga-bg rounded-lg p-3 border border-gray-100">
        <p className="text-[11px] text-luga-text-secondary mb-2">Fluxo de caixa — 7 dias</p>
        <div className="flex items-end gap-1.5 h-16">
          {[40, 70, 55, 90, 65, 80, 50].map((h, i) => (
            <div key={i} className={`flex-1 rounded-sm bg-gradient-to-t ${color}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CadastrosMockup({ color }: { color: string }) {
  const stats = [
    { label: "Ativos", value: "909" },
    { label: "Completude", value: "83%" },
    { label: "Duplicidades", value: "20" },
  ];
  const cats = [
    { label: "Clientes", count: 331 },
    { label: "Fornecedores", count: 302 },
    { label: "Produtos", count: 276 },
    { label: "Motoristas", count: 48 },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-luga-bg rounded-lg p-2.5 border border-gray-100 text-center">
            <p className="text-sm font-bold text-luga-dark">{s.value}</p>
            <p className="text-[10px] text-luga-text-secondary">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {cats.map((c) => (
          <div key={c.label} className="flex items-center justify-between bg-luga-bg rounded-lg px-3 py-2 border border-gray-100">
            <span className="text-sm text-luga-dark">{c.label}</span>
            <span className={`text-xs font-bold text-white rounded-full px-2 py-0.5 bg-gradient-to-br ${color}`}>
              {c.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VendasMockup({ color }: { color: string }) {
  const pedidos = [
    { cliente: "Mercado Bom Preço", valor: "R$ 1.240", status: "Faturado" },
    { cliente: "Distribuidora Verde", valor: "R$ 890", status: "Pendente" },
    { cliente: "Mercado São João", valor: "R$ 2.100", status: "Faturado" },
  ];
  return (
    <div className="space-y-2.5">
      {pedidos.map((p) => (
        <div key={p.cliente} className="flex items-center gap-3 bg-luga-bg rounded-lg px-3 py-2.5 border border-gray-100">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
            <ShoppingCart size={14} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-luga-dark truncate">{p.cliente}</p>
            <p className="text-xs text-luga-text-secondary">{p.valor}</p>
          </div>
          <span
            className={`text-[10px] font-semibold rounded-full px-2 py-1 ${
              p.status === "Faturado" ? "text-emerald-600 bg-emerald-50" : "text-amber-600 bg-amber-50"
            }`}
          >
            {p.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function ComprasMockup({ color }: { color: string }) {
  const entradas = [
    { fornecedor: "Hortifruti Central", valor: "R$ 3.480" },
    { fornecedor: "Distribuidora Sul", valor: "R$ 1.920" },
  ];
  return (
    <div className="space-y-2.5">
      {entradas.map((e) => (
        <div key={e.fornecedor} className="flex items-center gap-3 bg-luga-bg rounded-lg px-3 py-2.5 border border-gray-100">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
            <Truck size={14} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-luga-dark truncate">{e.fornecedor}</p>
            <p className="text-xs text-luga-text-secondary">Nota de entrada</p>
          </div>
          <span className="text-sm font-bold text-luga-dark">{e.valor}</span>
        </div>
      ))}
      <div className="flex items-center justify-between bg-luga-bg rounded-lg px-3 py-2.5 border border-gray-100">
        <span className="flex items-center gap-2 text-sm text-luga-dark">
          <Truck size={14} className="text-luga-text-secondary" /> Frete CTe 4521
        </span>
        <span className="text-xs text-luga-text-secondary">Rateado</span>
      </div>
    </div>
  );
}

function EstoqueMockup({ color }: { color: string }) {
  const items = [
    { nome: "Tomate", pct: 85 },
    { nome: "Alface", pct: 45 },
    { nome: "Cebola", pct: 70 },
    { nome: "Batata", pct: 20 },
  ];
  return (
    <div className="space-y-3.5">
      {items.map((it) => (
        <div key={it.nome}>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-luga-dark font-medium">{it.nome}</span>
            <span className="text-luga-text-secondary">{it.pct}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full rounded-full bg-gradient-to-r ${color}`} style={{ width: `${it.pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function FinanceiroMockup() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div>
        <p className="text-xs font-semibold text-emerald-600 mb-2">A receber</p>
        <div className="space-y-2">
          {["R$ 1.240", "R$ 890"].map((v) => (
            <div key={v} className="bg-emerald-50 rounded-lg px-2.5 py-2 text-xs text-luga-dark font-medium">
              {v}
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-red-500 mb-2">A pagar</p>
        <div className="space-y-2">
          {["R$ 640", "R$ 2.100"].map((v) => (
            <div key={v} className="bg-red-50 rounded-lg px-2.5 py-2 text-xs text-luga-dark font-medium">
              {v}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CaixaMockup({ color }: { color: string }) {
  return (
    <div>
      <div className="bg-luga-bg rounded-lg p-3 border border-gray-100 mb-3 flex items-center justify-between">
        <span className="text-xs text-luga-text-secondary">Saldo em caixa</span>
        <span className="text-sm font-bold text-luga-dark">R$ 1.850,00</span>
      </div>
      <div className="bg-[#DCF8C6] rounded-2xl rounded-tl-sm p-3 text-xs text-luga-dark max-w-[85%]">
        Olá! Seu boleto de R$ 340,00 vence hoje. Evite juros, pague agora 🙂
      </div>
      <div className="flex items-center gap-1.5 mt-2 text-[11px] text-luga-text-secondary">
        <MessageCircle size={12} className="text-emerald-500" /> Enviado via WhatsApp
      </div>
      <div className={`mt-3 h-1.5 rounded-full bg-gradient-to-r ${color}`} />
    </div>
  );
}

function FluxoMockup() {
  const bars = [
    { r: 40, p: 25 },
    { r: 65, p: 45 },
    { r: 35, p: 55 },
    { r: 80, p: 30 },
    { r: 55, p: 60 },
    { r: 90, p: 40 },
    { r: 45, p: 20 },
  ];
  return (
    <div>
      <div className="flex items-end gap-1.5 h-28 mb-3">
        {bars.map((b, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end gap-0.5 h-full">
            <div className="flex-1" />
            <div className="rounded-sm bg-emerald-400" style={{ height: `${b.r}%` }} />
            <div className="rounded-sm bg-red-300" style={{ height: `${b.p}%` }} />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 text-[11px] text-luga-text-secondary">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400" /> Receber
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-red-300" /> Pagar
        </span>
      </div>
    </div>
  );
}

function BoletosMockup({ color }: { color: string }) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-3 bg-luga-bg rounded-lg px-3 py-2.5 border border-gray-100">
        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
          <QrCode size={14} className="text-white" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-luga-dark">Pix recebido</p>
          <p className="text-xs text-luga-text-secondary">Mercado Bom Preço</p>
        </div>
        <span className="text-sm font-bold text-emerald-600">+R$ 1.240</span>
      </div>
      {["Boleto 00234", "Boleto 00235"].map((b, i) => (
        <div key={b} className="flex items-center justify-between bg-luga-bg rounded-lg px-3 py-2.5 border border-gray-100">
          <span className="text-sm text-luga-dark">{b}</span>
          <span
            className={`text-[10px] font-semibold rounded-full px-2 py-1 ${
              i === 0 ? "text-emerald-600 bg-emerald-50" : "text-amber-600 bg-amber-50"
            }`}
          >
            {i === 0 ? "Conciliado" : "Pendente"}
          </span>
        </div>
      ))}
    </div>
  );
}

function DuplicatasMockup({ color }: { color: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between bg-luga-bg rounded-lg px-3 py-2.5 border border-gray-100">
        <span className="text-sm text-luga-dark">Cheque 004521</span>
        <span className="text-xs font-semibold text-luga-text-secondary">R$ 980,00</span>
      </div>
      <div className="flex items-center justify-between bg-luga-bg rounded-lg px-3 py-2.5 border border-gray-100">
        <span className="text-sm text-luga-dark">Duplicata 1187</span>
        <span className="text-xs font-semibold text-luga-text-secondary">R$ 1.520,00</span>
      </div>
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="text-luga-dark font-medium">Empréstimo — parcela 8/24</span>
          <span className="text-luga-text-secondary">33%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className={`h-full rounded-full bg-gradient-to-r ${color}`} style={{ width: "33%" }} />
        </div>
      </div>
    </div>
  );
}

function MapMockup({ color }: { color: string }) {
  const pins = [
    { x: "18%", y: "70%", delivered: true },
    { x: "48%", y: "28%", delivered: false },
    { x: "72%", y: "58%", delivered: true },
    { x: "85%", y: "22%", delivered: false },
  ];

  return (
    <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden border border-gray-100 bg-luga-bg">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="M18 70 C 30 40, 40 55, 48 28 C 58 45, 62 50, 72 58 C 78 48, 80 35, 85 22"
          stroke="#2196F3"
          strokeWidth="1.2"
          strokeDasharray="3 2"
          fill="none"
          opacity="0.7"
        />
      </svg>
      {pins.map((p, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-full flex flex-col items-center"
          style={{ left: p.x, top: p.y }}
        >
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center shadow-md ${
              p.delivered ? "bg-emerald-500" : `bg-gradient-to-br ${color}`
            }`}
          >
            <MapPin size={14} className="text-white" />
          </div>
        </div>
      ))}
      <div className="absolute bottom-3 left-3 bg-white rounded-lg px-3 py-1.5 shadow-sm text-xs text-luga-text-secondary flex items-center gap-3">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500" /> Entregue
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-luga-royal" /> Pendente
        </span>
      </div>
    </div>
  );
}

function ReportsMockup({ color }: { color: string }) {
  const reports = [
    { icon: DollarSign, label: "A Receber", tag: "PDF" },
    { icon: Landmark, label: "A Pagar", tag: "Excel" },
    { icon: ShoppingCart, label: "Vendas", tag: "PDF" },
    { icon: Boxes, label: "Estoque", tag: "Excel" },
  ];

  return (
    <div className="space-y-2.5">
      {reports.map((r) => (
        <div
          key={r.label}
          className="flex items-center gap-3 bg-luga-bg rounded-lg px-3 py-2.5 border border-gray-100"
        >
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
            <r.icon size={14} className="text-white" />
          </div>
          <span className="text-sm font-medium text-luga-dark flex-1">{r.label}</span>
          <span className="text-[10px] font-semibold text-luga-text-secondary bg-white rounded px-2 py-1 border border-gray-100">
            {r.tag}
          </span>
          <Download size={14} className="text-luga-text-secondary" />
        </div>
      ))}
      <div className="flex items-center justify-between pt-2 text-xs text-luga-text-secondary">
        <span>14 categorias disponíveis</span>
        <span className="font-semibold text-luga-royal">Ver todos →</span>
      </div>
    </div>
  );
}

function FiscalMockup({ color }: { color: string }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-luga-bg p-4">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-bold text-luga-dark">NF-e Nº 001.847</p>
          <p className="text-xs text-luga-text-secondary">Distribuidora Verde LTDA</p>
        </div>
        <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 rounded-full px-2.5 py-1">
          <ShieldCheck size={12} />
          Autorizada
        </span>
      </div>

      <div className="flex gap-4">
        <div className="w-16 h-16 rounded-lg bg-white border border-gray-200 grid grid-cols-4 grid-rows-4 gap-0.5 p-1.5 flex-shrink-0">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className={`rounded-sm ${[1, 2, 4, 7, 9, 11, 13, 14].includes(i) ? "bg-luga-dark" : "bg-transparent"}`} />
          ))}
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-luga-text-secondary">Valor total</span>
            <span className="font-bold text-luga-dark">R$ 2.340,00</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-luga-text-secondary">ICMS</span>
            <span className="font-semibold text-luga-dark">R$ 187,20</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-luga-text-secondary">Chave de acesso</span>
            <span className="font-mono text-[10px] text-luga-text-secondary">3526...9021</span>
          </div>
        </div>
      </div>

      <div className={`mt-4 h-1.5 rounded-full bg-gradient-to-r ${color}`} />
    </div>
  );
}

function PermissionsMockup({ color }: { color: string }) {
  const users = [
    { name: "Ana Souza", role: "Financeiro", initials: "AS" },
    { name: "Carlos Lima", role: "Vendedor", initials: "CL" },
    { name: "Rafael Dias", role: "Comprador", initials: "RD" },
  ];

  return (
    <div className="space-y-2.5">
      {users.map((u) => (
        <div
          key={u.name}
          className="flex items-center gap-3 bg-luga-bg rounded-lg px-3 py-2.5 border border-gray-100"
        >
          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
            <span className="text-[10px] font-bold text-white">{u.initials}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-luga-dark truncate">{u.name}</p>
            <p className="text-[11px] text-luga-text-secondary">{u.role}</p>
          </div>
          <div className="w-9 h-5 rounded-full bg-emerald-400 flex items-center px-0.5">
            <div className="w-4 h-4 rounded-full bg-white ml-auto" />
          </div>
        </div>
      ))}
      <div className="flex items-center gap-2 pt-1 text-xs text-luga-text-secondary">
        <Settings size={14} />
        Permissão por módulo, sem limite de usuários
      </div>
    </div>
  );
}
