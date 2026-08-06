import type { Metadata } from "next";
import {
  DollarSign,
  BarChart3,
  FileText,
  Download,
  Users,
  Landmark,
  TrendingDown,
  Clock,
  AlertTriangle,
  PackageX,
  Zap,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import LandingHero from "@/components/landing/LandingHero";
import ModulesSection, { type Module } from "@/components/landing/ModulesSection";
import CTASection from "@/components/landing/CTASection";
import LeadForm from "@/components/landing/LeadForm";
import FAQSection, { type FAQ } from "@/components/landing/FAQSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export const metadata: Metadata = {
  title: "ERP para Empresas do CEASA | Luga ERP",
  description:
    "Sistema de gestão criado a partir da realidade do CEASA para empresas que precisam controlar pedidos, estoque, financeiro, cobranças, NF-e e relatórios.",
  alternates: { canonical: "https://lugaerp.com.br/erp-para-ceasa" },
  openGraph: {
    title: "ERP para Empresas do CEASA | Luga ERP",
    description:
      "Sistema de gestão criado a partir da realidade do CEASA para empresas que precisam controlar pedidos, estoque, financeiro, cobranças, NF-e e relatórios.",
  },
};

const pains = [
  {
    icon: TrendingDown,
    title: "Preço mudando o tempo todo",
    description:
      "O preço de compra oscila toda manhã. Sem sistema atualizado, você trabalha no chute — e a margem some sem você perceber.",
  },
  {
    icon: AlertTriangle,
    title: "Pedido urgente sem registro formal",
    description:
      "O cliente liga, pede por áudio, você anota no papel. Na hora de faturar, o que foi combinado ficou perdido.",
  },
  {
    icon: PackageX,
    title: "Estoque girando sem visibilidade",
    description:
      "Produto saiu sem baixa, entrada chegou sem registro. Você não sabe o que tem até ir contar na mão.",
  },
  {
    icon: Clock,
    title: "Fornecedor cobrando, cliente esperando",
    description:
      "Conta a pagar no prazo, boleto a receber atrasado. Sem controle centralizado, o caixa vira surpresa todo mês.",
  },
  {
    icon: DollarSign,
    title: "Financeiro no improviso",
    description:
      "Sem fluxo de caixa confiável, você decide no feeling. Não sabe se sobra dinheiro para a próxima compra.",
  },
  {
    icon: Download,
    title: "Sem relatórios para decidir",
    description:
      "Você tem os dados espalhados em papel e planilha. Mas não tem como cruzar para enxergar o que está dando certo.",
  },
];

const howLugaHelps = [
  {
    icon: Zap,
    title: "Pedidos registrados em segundos",
    description: "Do recebimento ao faturamento, tudo dentro do sistema. Sem perder pedido, sem retrabalho.",
  },
  {
    icon: BarChart3,
    title: "Estoque atualizado a cada movimento",
    description: "Entrada de fornecedor, saída de pedido — o custo médio se atualiza automaticamente.",
  },
  {
    icon: DollarSign,
    title: "Financeiro centralizado",
    description: "Contas a pagar e receber num só lugar. Fluxo de caixa projetado e realizado sempre atualizado.",
  },
  {
    icon: FileText,
    title: "NF-e em segundos",
    description: "Emissão de nota fiscal integrada, com DANFE e XML. Sem sair do sistema.",
  },
  {
    icon: Landmark,
    title: "Boletos integrados ao banco",
    description: "Multi-banco, com Pix e remessa/retorno CNAB. Baixa automática por retorno bancário.",
  },
  {
    icon: ShieldCheck,
    title: "Relatórios para cada momento",
    description: "14 categorias de relatórios, centenas de modelos: inadimplência, vendas, estoque, fluxo de caixa e mais.",
  },
];

const modules: Module[] = [
  {
    icon: DollarSign,
    title: "Financeiro",
    description: "Contas a pagar, receber, fluxo de caixa, cheques, adiantamentos e empréstimos.",
  },
  {
    icon: BarChart3,
    title: "Estoque",
    description: "Movimentação em tempo real, custo médio automático e importação de XML de fornecedor.",
  },
  {
    icon: FileText,
    title: "NF-e",
    description: "Emissão com DANFE e XML. SPED Fiscal e EFD Contribuições inclusos.",
  },
  {
    icon: Landmark,
    title: "Boletos",
    description: "Geração multi-banco com Pix. Remessa e retorno CNAB 240/400.",
  },
  {
    icon: Download,
    title: "Relatórios",
    description: "14 categorias de relatórios, centenas de modelos em PDF e Excel. DRE e Fluxo de Caixa inclusos.",
  },
  {
    icon: Users,
    title: "Cadastros e pedidos",
    description: "Clientes, fornecedores, produtos e tabelas de preço. Multi-usuário com perfis de acesso.",
  },
];

const faqs: FAQ[] = [
  {
    question: "O Luga ERP é feito especificamente para o CEASA?",
    answer:
      "O Luga nasceu a partir da realidade operacional do CEASA — criado para empresas que vivem a rotina do mercado. Não é um ERP genérico adaptado, mas um sistema pensado para quem compra, vende, entrega e cobra no setor alimentício.",
  },
  {
    question: "O sistema funciona para permissionários?",
    answer:
      "Sim. Permissionários, atacadistas, distribuidoras e empresas que operam dentro ou a partir do CEASA encontram no Luga os módulos que precisam para controlar a operação do dia a dia.",
  },
  {
    question: "Como o Luga ajuda no controle de estoque de produtos perecíveis?",
    answer:
      "O estoque é atualizado a cada entrada e saída, com custo médio automático. Você importa o XML da nota do fornecedor e o sistema já dá baixa na conta a pagar e atualiza o estoque.",
  },
  {
    question: "O sistema emite NF-e e boleto?",
    answer:
      "Sim. NF-e com DANFE e XML integrado no plano Completo, e boletos multi-banco com Pix nos dois planos. Remessa e retorno CNAB 240/400 e baixa automática por retorno bancário inclusos.",
  },
  {
    question: "Em quanto tempo começo a operar?",
    answer:
      "Em menos de 1 semana. Importamos seus dados via Excel, configuramos e treinamos sua equipe. Você começa a operar no mesmo dia.",
  },
  {
    question: "Qual é o preço?",
    answer:
      "A Luga tem dois planos: Essencial (sem fiscal) e Completo (com NF-e, ICMS e SPED). Nos dois, usuários ilimitados, suporte e treinamento inclusos. Consulte nosso valor.",
  },
];

export default function ErpParaCeasaPage() {
  return (
    <>
      <LandingHero
        badge="ERP para empresas do CEASA"
        headline="O ERP criado a partir da realidade do CEASA."
        subheadline="Feito para empresas que vivem a rotina do mercado: comprar, vender, entregar, cobrar e controlar tudo com agilidade."
        primaryHref="#formulario"
        trustItems={["Do mercado para o mercado", "No ar em menos de 1 semana", "Preço sob consulta"]}
      />

      {/* Narrative: Do mercado para o mercado */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-4">
              Do mercado para o mercado
            </p>
            <h2 className="section-title mb-6">
              Não é um ERP genérico adaptado.
            </h2>
            <p className="text-xl text-luga-text-secondary leading-relaxed mb-6">
              É um sistema pensado a partir das dores reais de quem trabalha com preço mudando,
              pedido urgente, estoque girando, fornecedor cobrando e cliente esperando entrega.
            </p>
            <p className="text-lg text-luga-dark font-medium">
              Quem criou o Luga conhece o dia a dia do mercado —{" "}
              <span className="text-luga-royal">e isso faz toda a diferença.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pain points */}
      <section className="bg-luga-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
              Problemas comuns
            </p>
            <h2 className="section-title">
              O dia a dia do CEASA é assim.
            </h2>
            <p className="section-subtitle mt-4 max-w-2xl mx-auto">
              Você reconhece esses problemas? O Luga foi construído para resolvê-los.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pains.map((pain, i) => (
              <AnimatedSection key={pain.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full card-hover">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                    <pain.icon size={22} className="text-red-500" />
                  </div>
                  <h3 className="text-base font-bold text-luga-dark mb-2">{pain.title}</h3>
                  <p className="text-sm text-luga-text-secondary leading-relaxed">{pain.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How Luga organizes */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
              Como o Luga organiza
            </p>
            <h2 className="section-title">
              Um sistema que entende sua operação.
            </h2>
            <p className="section-subtitle mt-4 max-w-2xl mx-auto">
              Cada problema do dia a dia tem uma solução direta dentro do sistema.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {howLugaHelps.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 80}>
                <div className="bg-luga-bg rounded-2xl p-6 border border-gray-100 h-full card-hover">
                  <div className="gradient-icon mb-4">
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-luga-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-luga-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ModulesSection
        eyebrow="Módulos"
        title="Tudo que sua empresa do CEASA precisa"
        subtitle="Financeiro, estoque, NF-e, boletos, relatórios e cadastros — tudo integrado num só sistema."
        modules={modules}
      />

      {/* Lead form */}
      <section className="bg-luga-bg py-20" id="formulario">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-4">
                Demonstração gratuita
              </p>
              <h2 className="text-3xl font-extrabold text-luga-dark mb-4 leading-tight">
                Veja o sistema funcionando para a sua operação.
              </h2>
              <p className="text-luga-text-secondary leading-relaxed mb-6">
                Nossa equipe mostra tudo ao vivo, focado na realidade do CEASA e da
                distribuição. Sem compromisso. Sem pressão.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Demonstração ao vivo com sistema real",
                  "Focada no seu tipo de operação",
                  "Atendimento em até 1 dia útil",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-luga-accent flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-white rounded-xl border border-gray-200">
                <p className="text-sm text-luga-text-secondary mb-3">
                  Prefere falar direto?
                </p>
                <WhatsAppButton label="Falar no WhatsApp" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <LeadForm defaultSegment="Permissionário CEASA" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Dúvidas frequentes" />

      <CTASection
        title="Feito para quem vive a rotina do mercado."
        subtitle="Demonstração gratuita. Sem compromisso. Nossa equipe mostra tudo ao vivo."
        primaryHref="#formulario"
      />
    </>
  );
}
