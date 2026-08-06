import type { Metadata } from "next";
import {
  DollarSign,
  BarChart3,
  FileText,
  Download,
  Users,
  Landmark,
  AlertTriangle,
  PackageX,
  Receipt,
  MessageCircle,
  TrendingDown,
  Clock,
  CheckCircle2,
  Truck,
} from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import LandingHero from "@/components/landing/LandingHero";
import PainPointsSection, { type PainPoint } from "@/components/landing/PainPointsSection";
import ModulesSection, { type Module } from "@/components/landing/ModulesSection";
import CTASection from "@/components/landing/CTASection";
import LeadForm from "@/components/landing/LeadForm";
import FAQSection, { type FAQ } from "@/components/landing/FAQSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export const metadata: Metadata = {
  title: "ERP para Distribuidoras | Luga ERP",
  description:
    "Sistema de gestão para distribuidoras controlarem pedidos, estoque, financeiro, cobranças, NF-e, boletos e relatórios em um só lugar.",
  alternates: { canonical: "https://lugaerp.com.br/erp-para-distribuidoras" },
  openGraph: {
    title: "ERP para Distribuidoras | Luga ERP",
    description:
      "Sistema de gestão para distribuidoras controlarem pedidos, estoque, financeiro, cobranças, NF-e, boletos e relatórios em um só lugar.",
  },
};

const pains: PainPoint[] = [
  {
    icon: MessageCircle,
    title: "Pedidos recebidos no WhatsApp sem registro",
    description:
      "Pedido chegou por áudio. Você anotou no papel. Na hora de faturar, não sabe o que combinou. Pedido errado, cliente insatisfeito.",
  },
  {
    icon: AlertTriangle,
    title: "Inadimplência sem controle",
    description:
      "Você não sabe ao certo quem deve, há quanto tempo e quanto ao total. O dinheiro está na rua e você não sabe quando volta.",
  },
  {
    icon: Receipt,
    title: "NF-e e boletos feitos na mão",
    description:
      "Digitar nota em sistema separado, ir ao banco gerar boleto, enviar por e-mail. Retrabalho que toma horas do seu dia.",
  },
  {
    icon: PackageX,
    title: "Estoque que não bate com a realidade",
    description:
      "Mercadoria saindo sem baixa, entrada de fornecedor sem registro. No fim, o sistema diz uma coisa e o galpão diz outra.",
  },
  {
    icon: TrendingDown,
    title: "Financeiro confuso no fechamento do mês",
    description:
      "Sem um fluxo de caixa confiável, o fechamento mensal é uma estimativa. Você não sabe se lucrou ou perdeu de verdade.",
  },
  {
    icon: Clock,
    title: "Sem visão clara de lucratividade",
    description:
      "Você sabe quanto faturou. Mas não sabe qual cliente dá mais margem, qual produto consome mais custo ou onde está perdendo.",
  },
];

const modules: Module[] = [
  {
    icon: DollarSign,
    title: "Financeiro completo",
    description: "Contas a pagar, receber, fluxo de caixa projetado e realizado. Fechamento sem surpresa.",
  },
  {
    icon: BarChart3,
    title: "Estoque em tempo real",
    description: "Custo médio sempre atualizado. Toda entrada e saída registrada, com importação de XML de fornecedor.",
  },
  {
    icon: FileText,
    title: "NF-e em segundos",
    description: "Emita nota fiscal direto pelo sistema, com DANFE e XML. Sem sair para outro software.",
  },
  {
    icon: Landmark,
    title: "Boletos integrados",
    description: "Gere e envie boletos multi-banco, com Pix e remessa/retorno CNAB 240/400.",
  },
  {
    icon: Download,
    title: "Relatórios para decisão",
    description: "14 categorias de relatórios, centenas de modelos em PDF e Excel. Inadimplência, vendas, estoque, fluxo — tudo à mão.",
  },
  {
    icon: Users,
    title: "Pedidos e clientes organizados",
    description: "Tabelas de preço por cliente, histórico completo, alertas de cadastro e detecção de duplicidades.",
  },
];

const benefits = [
  "Pedidos registrados e rastreados do recebimento ao faturamento",
  "Cobrança automatizada com boleto integrado ao banco",
  "NF-e emitida direto no sistema, sem retrabalho",
  "Estoque em tempo real com custo médio automático",
  "Relatórios prontos para tomar decisão com dados reais",
  "Usuários ilimitados — toda a equipe no mesmo sistema",
];

const forWho = [
  "Distribuidoras de alimentos e bebidas",
  "Atacadistas que vendem para revendas e supermercados",
  "Empresas que entregam por rota com tabela de preço por cliente",
  "Operações que precisam de NF-e, boleto e controle integrado",
];

const faqs: FAQ[] = [
  {
    question: "O sistema funciona para distribuidoras de qualquer porte?",
    answer:
      "Sim. O Luga foi desenvolvido para empresas que estão crescendo e precisam sair do improviso — desde distribuidoras menores até operações com grandes volumes de pedidos diários.",
  },
  {
    question: "Posso emitir NF-e diretamente pelo Luga?",
    answer:
      "Sim, no plano Completo. A emissão de NF-e com DANFE e XML está integrada ao sistema, junto com apuração de ICMS e SPED. Você não precisa sair para outro software.",
  },
  {
    question: "O boleto é gerado e enviado direto pelo sistema?",
    answer:
      "Sim, nos dois planos. Os boletos são gerados com integração multi-banco e Pix. O sistema faz remessa e retorno CNAB 240/400, conciliação bancária via Open Finance e baixa automática por retorno bancário.",
  },
  {
    question: "Como o Luga ajuda no controle de inadimplência?",
    answer:
      "Você tem visão completa de contas a receber por cliente, com alertas de vencimento, histórico de pagamentos e relatórios de inadimplência por período. Sabe exatamente quem deve e há quanto tempo.",
  },
  {
    question: "Em quanto tempo minha distribuidora começa a operar?",
    answer:
      "Em menos de 1 semana. Importamos seus dados (clientes, produtos, fornecedores) via Excel, configuramos os parâmetros e treinamos sua equipe. Você começa a operar no mesmo dia.",
  },
  {
    question: "Tem suporte e treinamento inclusos?",
    answer:
      "Sim. O treinamento da equipe faz parte da implantação e o suporte técnico está incluso no contrato mensal, sem custo adicional.",
  },
];

export default function ErpParaDistribuidorasPage() {
  return (
    <>
      <LandingHero
        badge="ERP para Distribuidoras"
        headline="ERP para distribuidoras que precisam controlar pedidos, estoque, financeiro e cobrança."
        subheadline="O Luga ERP centraliza a operação de empresas que vendem, entregam, compram e cobram todos os dias."
        primaryHref="#formulario"
        trustItems={["Preço sob consulta", "No ar em menos de 1 semana", "Tudo incluso"]}
      />

      <PainPointsSection
        title="Os problemas que travam distribuidoras todos os dias"
        subtitle="Cada um desses problemas representa dinheiro e tempo perdidos. O Luga resolve todos num só sistema."
        pains={pains}
        closing="O Luga ERP foi criado para acabar com isso — e sua equipe opera no mesmo dia."
      />

      <ModulesSection
        eyebrow="Módulos"
        title="Tudo integrado para a operação da sua distribuidora"
        subtitle="Cada módulo conversa com os outros. O pedido vira NF-e, a NF-e vira boleto, e tudo reflete no financeiro."
        modules={modules}
      />

      {/* Benefícios */}
      <section className="bg-luga-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
                Resultados diretos
              </p>
              <h2 className="section-title mb-8">
                O que muda na prática com o Luga
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-luga-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
                Para quem é
              </p>
              <h2 className="section-title mb-8">
                Sua distribuidora se encaixa aqui?
              </h2>
              <div className="space-y-4">
                {forWho.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <Truck size={20} className="text-luga-royal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className="bg-white py-20" id="formulario">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-4">
                Agende uma demonstração
              </p>
              <h2 className="text-3xl font-extrabold text-luga-dark mb-4 leading-tight">
                Veja o Luga funcionando com a realidade da sua distribuidora.
              </h2>
              <p className="text-luga-text-secondary leading-relaxed mb-6">
                Preencha o formulário e nossa equipe entra em contato em até 1 dia útil
                para agendar uma demo personalizada. Sem compromisso.
              </p>
              <div className="p-5 bg-luga-bg rounded-xl border border-gray-200">
                <p className="text-sm text-luga-text-secondary mb-3">
                  Prefere falar direto?
                </p>
                <WhatsAppButton label="Falar no WhatsApp" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <LeadForm defaultSegment="Distribuidora de alimentos" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Dúvidas frequentes sobre o ERP para distribuidoras" />

      <CTASection
        title="Sua distribuidora merece um sistema que entende sua operação."
        subtitle="Demonstração gratuita, sem compromisso. Nossa equipe mostra tudo ao vivo."
        primaryHref="#formulario"
      />
    </>
  );
}
