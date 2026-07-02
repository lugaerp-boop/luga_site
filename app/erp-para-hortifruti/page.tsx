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
  Thermometer,
  RefreshCw,
  ShoppingCart,
  AlertTriangle,
  CheckCircle2,
  Apple,
} from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import LandingHero from "@/components/landing/LandingHero";
import ModulesSection, { type Module } from "@/components/landing/ModulesSection";
import CTASection from "@/components/landing/CTASection";
import LeadForm from "@/components/landing/LeadForm";
import FAQSection, { type FAQ } from "@/components/landing/FAQSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export const metadata: Metadata = {
  title: "ERP para Hortifruti e Alimentos | Luga ERP",
  description:
    "ERP para hortifruti, atacado e distribuição de alimentos. Controle pedidos, estoque, financeiro, cobrança, NF-e, boletos e relatórios em um só sistema.",
  alternates: { canonical: "https://lugaerp.com.br/erp-para-hortifruti" },
  openGraph: {
    title: "ERP para Hortifruti e Alimentos | Luga ERP",
    description:
      "ERP para hortifruti, atacado e distribuição de alimentos. Controle pedidos, estoque, financeiro, cobrança, NF-e, boletos e relatórios em um só sistema.",
  },
};

const pains = [
  {
    icon: TrendingDown,
    title: "Preço muda rápido e difícil manter atualizado",
    description:
      "O preço de compra oscila toda manhã. Sem tabela atualizada, você vende pelo preço errado ou perde margem sem perceber.",
  },
  {
    icon: Thermometer,
    title: "Produto perecível exige controle rigoroso",
    description:
      "Mercadoria com prazo curto parada no estoque é prejuízo certo. Sem visibilidade do giro, você descobre tarde demais.",
  },
  {
    icon: ShoppingCart,
    title: "Compra sob demanda sem controle de custo",
    description:
      "Você compra todo dia conforme o pedido. Sem registro do custo de cada entrada, a margem real é uma estimativa.",
  },
  {
    icon: RefreshCw,
    title: "Pedidos recorrentes sem registro",
    description:
      "O cliente de sempre faz o pedido por áudio. Você anota no papel. Na entrega, o que foi combinado ficou perdido.",
  },
  {
    icon: AlertTriangle,
    title: "Margem apertada sem clareza de lucratividade",
    description:
      "Você sabe quanto faturou, mas não sabe qual produto ou cliente dá mais margem. As decisões ficam no feeling.",
  },
  {
    icon: Clock,
    title: "Cobrança atrasada com cliente que paga no prazo",
    description:
      "Você perde o prazo de enviar o boleto e o cliente atrasa por isso. Sem controle, o fluxo de caixa fica imprevisível.",
  },
];

const howLugaHelps = [
  "Tabelas de preço por cliente atualizadas em segundos",
  "Estoque com custo médio automático e movimentação em tempo real",
  "Importação de XML de fornecedor para atualizar estoque e contas a pagar",
  "Pedidos registrados do recebimento ao faturamento, sem retrabalho",
  "Boletos e NF-e gerados dentro do sistema, integrado ao banco",
  "Relatórios de inadimplência, vendas e fluxo de caixa prontos para usar",
  "Dashboard financeiro com o que tem a receber e a pagar hoje",
  "Multi-usuário: equipe comercial, financeiro e operacional no mesmo sistema",
];

const modules: Module[] = [
  {
    icon: DollarSign,
    title: "Financeiro",
    description: "Contas a pagar, receber, fluxo de caixa e cheques. Fechamento sem surpresa.",
  },
  {
    icon: BarChart3,
    title: "Estoque",
    description: "Custo médio automático, movimentação em tempo real e importação de XML de fornecedor.",
  },
  {
    icon: FileText,
    title: "NF-e",
    description: "Emissão com DANFE e XML integrado. SPED Fiscal incluso.",
  },
  {
    icon: Landmark,
    title: "Boletos",
    description: "Geração integrada ao BB, Itaú e Bradesco com remessa e retorno CNAB.",
  },
  {
    icon: Download,
    title: "Relatórios",
    description: "Mais de 200 relatórios em PDF e Excel: vendas, estoque, inadimplência e mais.",
  },
  {
    icon: Users,
    title: "Cadastros e pedidos",
    description: "Tabelas de preço por cliente, histórico completo e multi-usuário.",
  },
];

const benefits = [
  { title: "Tabela de preço atualizada", description: "Por cliente, por produto, sem retrabalho." },
  { title: "Estoque que bate com a realidade", description: "Custo médio, movimentação e importação de XML." },
  { title: "Cobrança no prazo certo", description: "Boleto gerado e enviado dentro do sistema." },
  { title: "NF-e em segundos", description: "Emissão integrada, sem sair do sistema." },
  { title: "Financeiro transparente", description: "Fluxo de caixa projetado e realizado todo dia." },
  { title: "Decisão com dados reais", description: "Relatórios prontos para usar, a qualquer hora." },
];

const faqs: FAQ[] = [
  {
    question: "O sistema serve para quem trabalha com hortifruti?",
    answer:
      "Sim. O Luga foi criado a partir da realidade operacional de empresas que trabalham com hortifruti, CEASA, distribuição de alimentos e atacado. Não é um ERP genérico adaptado.",
  },
  {
    question: "Consegue controlar estoque de produtos perecíveis?",
    answer:
      "Sim. O estoque é atualizado a cada entrada e saída, com custo médio automático. Você importa o XML da nota do fornecedor e o sistema já registra a entrada e atualiza o custo.",
  },
  {
    question: "Tem tabela de preço por cliente?",
    answer:
      "Sim. Você cria tabelas de preço por cliente ou grupo de clientes e o sistema aplica automaticamente no pedido. Sem precisar consultar planilha ou calcular na hora.",
  },
  {
    question: "Emite NF-e para pessoa jurídica e física?",
    answer:
      "Sim. O Luga emite NF-e para PJ e PF, com DANFE e XML. O sistema está integrado à SEFAZ para transmissão e autorização em tempo real.",
  },
  {
    question: "Como funciona a implantação?",
    answer:
      "Em menos de 1 semana. Importamos seus dados via Excel (clientes, produtos, fornecedores), configuramos os parâmetros da sua empresa e treinamos sua equipe. Você começa a operar no mesmo dia.",
  },
  {
    question: "Qual o custo mensal?",
    answer:
      "Valor mensal com tudo incluso: todos os módulos, usuários ilimitados, suporte e treinamento. Sem cobrança por usuário, sem módulo bloqueado. Consulte nosso valor.",
  },
];

export default function ErpParaHortifrutiPage() {
  return (
    <>
      <LandingHero
        badge="ERP para Hortifruti e Alimentos"
        headline="Sistema de gestão para hortifruti, atacado e distribuição de alimentos."
        subheadline="Controle pedidos, produtos, tabelas de preço, estoque, financeiro, NF-e e cobrança em um só ERP."
        primaryHref="#formulario"
        trustItems={["Do mercado para o mercado", "Preço sob consulta", "No ar em menos de 1 semana"]}
      />

      {/* Pain points */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
              Você se reconhece?
            </p>
            <h2 className="section-title">
              As dores do hortifruti que travam o crescimento
            </h2>
            <p className="section-subtitle mt-4 max-w-2xl mx-auto">
              Produto perecível, margem apertada e operação rápida exigem um sistema que acompanha o ritmo.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pains.map((pain, i) => (
              <AnimatedSection key={pain.title} delay={i * 80}>
                <div className="bg-luga-bg rounded-2xl p-6 border border-gray-100 h-full">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                    <pain.icon size={22} className="text-red-500" />
                  </div>
                  <h3 className="text-base font-bold text-luga-dark mb-2">{pain.title}</h3>
                  <p className="text-sm text-luga-text-secondary leading-relaxed">{pain.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <p className="text-lg text-luga-dark font-semibold">
              O Luga ERP foi feito para resolver isso —{" "}
              <span className="text-luga-royal">sem complexidade, sem meses de implantação.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Como o Luga ajuda */}
      <section className="bg-luga-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-4">
                Como o Luga ajuda
              </p>
              <h2 className="section-title mb-6">
                Um sistema que respeita o ritmo do hortifruti.
              </h2>
              <p className="text-luga-text-secondary leading-relaxed mb-8">
                Criado a partir da realidade operacional de quem trabalha com produto perecível,
                margem apertada e operação que não para.
              </p>
              <ul className="space-y-3">
                {howLugaHelps.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-luga-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={benefit.title} className={`bg-white rounded-2xl p-5 border border-gray-100 shadow-sm ${i === 0 ? "col-span-2 sm:col-span-1" : ""}`}>
                    <div className="w-10 h-10 rounded-xl bg-luga-gradient flex items-center justify-center mb-3">
                      <Apple size={18} className="text-white" />
                    </div>
                    <h3 className="font-bold text-luga-dark text-sm mb-1">{benefit.title}</h3>
                    <p className="text-xs text-luga-text-secondary">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ModulesSection
        eyebrow="Módulos"
        title="Tudo integrado para hortifruti e distribuição de alimentos"
        subtitle="Do pedido ao boleto, do estoque ao relatório — tudo num só sistema, sem precisar de integrações externas."
        modules={modules}
      />

      {/* Lead form */}
      <section className="bg-white py-20" id="formulario">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-4">
                Demonstração gratuita
              </p>
              <h2 className="text-3xl font-extrabold text-luga-dark mb-4 leading-tight">
                Veja o Luga funcionando para a realidade do seu negócio.
              </h2>
              <p className="text-luga-text-secondary leading-relaxed mb-6">
                Preencha o formulário e nossa equipe entra em contato em até 1 dia
                útil. Demonstração ao vivo, focada no seu tipo de operação.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Sistema real — sem slides",
                  "Focado em hortifruti, atacado e alimentos",
                  "Sem compromisso",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-luga-accent flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-luga-bg rounded-xl border border-gray-200">
                <p className="text-sm text-luga-text-secondary mb-3">
                  Prefere falar direto?
                </p>
                <WhatsAppButton label="Falar no WhatsApp" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <LeadForm defaultSegment="Atacadista de hortifruti" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Dúvidas frequentes sobre o ERP para hortifruti" />

      <CTASection
        title="Seu negócio de hortifruti merece um ERP feito para ele."
        subtitle="Demonstração gratuita. Veja o sistema funcionando com a sua realidade."
        primaryHref="#formulario"
      />
    </>
  );
}
