import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, PackageX, Receipt, MessageCircle, BarChart2, RefreshCw } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import LeadForm from "@/components/landing/LeadForm";
import FAQSection, { type FAQ } from "@/components/landing/FAQSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export const metadata: Metadata = {
  title: "Agendar Demonstração Gratuita — Luga ERP",
  description:
    "Veja como controlar pedidos, estoque, financeiro, NF-e e cobrança em um só sistema. Demonstração gratuita do Luga ERP para distribuidoras, hortifruti, CEASA e atacadistas.",
  alternates: { canonical: "https://lugaerp.com.br/demonstracao" },
};

const pains = [
  {
    icon: MessageCircle,
    title: "Pedidos perdidos no WhatsApp",
    description: "Pedido recebido em áudio ou texto, sem registro. O cliente reclama, você não lembra, a venda some.",
  },
  {
    icon: PackageX,
    title: "Estoque sem controle",
    description: "Produto acabou sem você saber. Ou tem mercadoria parada que ninguém registrou. O número nunca bate.",
  },
  {
    icon: AlertTriangle,
    title: "Cobrança atrasada",
    description: "Você não sabe ao certo quem te deve, há quanto tempo, nem quanto tem pra receber hoje.",
  },
  {
    icon: BarChart2,
    title: "Financeiro confuso",
    description: "Não sobra tempo pra fechar o mês com precisão. O fluxo de caixa é uma estimativa, não um número real.",
  },
  {
    icon: Receipt,
    title: "Falta de relatórios",
    description: "Você toma decisão no feeling. Sem dados sobre o que vendeu, quem comprou mais e onde perdeu margem.",
  },
  {
    icon: RefreshCw,
    title: "Retrabalho entre setores",
    description: "A mesma informação digitada em três lugares. Comercial não sabe o que estoque tem. Financeiro depende do caderno.",
  },
];

const demoItems = [
  { label: "Pedidos", description: "Registro, acompanhamento e faturamento" },
  { label: "Clientes", description: "Cadastro com histórico e alertas" },
  { label: "Produtos", description: "Tabelas de preço por cliente" },
  { label: "Estoque", description: "Movimentação e custo médio em tempo real" },
  { label: "Financeiro", description: "Contas a pagar, receber e fluxo de caixa" },
  { label: "Boletos", description: "Multi-banco, Pix e conciliação via Open Finance" },
  { label: "NF-e", description: "Emissão com DANFE e XML (plano Completo)" },
  { label: "Relatórios", description: "14 categorias, centenas de modelos em PDF e Excel" },
  { label: "Permissões", description: "Multi-usuário com perfis de acesso" },
];

const faqs: FAQ[] = [
  {
    question: "Para quem é o Luga ERP?",
    answer:
      "Para distribuidoras, atacadistas, permissionários de CEASA e empresas do setor de hortifruti e alimentos que precisam controlar pedidos, estoque, financeiro, NF-e e cobrança em um só lugar.",
  },
  {
    question: "Precisa instalar alguma coisa?",
    answer:
      "Não. O Luga ERP é 100% web. Você acessa pelo navegador, de qualquer computador ou dispositivo, sem instalação e sem precisar de servidor próprio.",
  },
  {
    question: "Tem suporte e treinamento?",
    answer:
      "Sim. Treinamento da equipe está incluso na implantação e o suporte técnico faz parte do contrato — sem custo adicional.",
  },
  {
    question: "Serve para empresa pequena?",
    answer:
      "Sim. O sistema foi criado para a realidade de quem está crescendo e precisa sair do improviso, sem pagar caro por isso. Usuários ilimitados no mesmo contrato.",
  },
  {
    question: "O sistema emite NF-e e boleto?",
    answer:
      "Sim. NF-e com DANFE e XML integrado no plano Completo, e boletos multi-banco com Pix diretamente pelo sistema nos dois planos. Remessa e retorno CNAB 240/400 inclusos.",
  },
  {
    question: "Como funciona a implantação?",
    answer:
      "Em menos de 1 semana. Importamos seus dados via Excel (clientes, produtos, fornecedores), configuramos os parâmetros da sua empresa e fazemos o treinamento da equipe.",
  },
];

export default function DemonstracaoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-luga-hero pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-luga-royal/20 blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-luga-light/10 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-luga-accent animate-pulse" />
            <span className="text-sm font-medium text-white">Demonstração gratuita</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Veja como controlar pedidos, estoque, financeiro, NF-e e cobrança em um só sistema.
          </h1>

          <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-3xl mx-auto">
            Uma demonstração rápida do Luga ERP, criado para empresas que vivem a
            rotina do CEASA, distribuição, hortifruti e alimentos.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="#formulario"
              data-event="click_demo"
              className="inline-flex items-center justify-center gap-2 text-base py-4 px-8 rounded-lg font-semibold text-luga-dark bg-white hover:bg-luga-bg active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Agendar demonstração gratuita
              <ArrowRight size={18} />
            </Link>
            <WhatsAppButton label="Falar no WhatsApp" size="lg" />
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {["Sem compromisso", "100% web — sem instalação", "Atendimento em poucos minutos"].map((item) => (
              <span key={item} className="text-sm text-white/70">
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
              Você se reconhece?
            </p>
            <h2 className="section-title">
              Problemas que o Luga ERP resolve
            </h2>
            <p className="section-subtitle mt-4 max-w-2xl mx-auto">
              Cada um desses problemas custa dinheiro, tempo e energia todo dia.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pains.map((pain, i) => (
              <AnimatedSection key={pain.title} delay={i * 80}>
                <div className="bg-luga-bg rounded-2xl p-6 border border-gray-100 h-full card-hover">
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

      {/* O que você vai ver */}
      <section className="bg-luga-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
              Na demonstração
            </p>
            <h2 className="section-title">
              O que você vai ver funcionando
            </h2>
            <p className="section-subtitle mt-4 max-w-2xl mx-auto">
              Mostramos tudo ao vivo, focado no tipo de operação da sua empresa. Sem slides — sistema real.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {demoItems.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 60}>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-start gap-4 card-hover">
                  <div className="w-8 h-8 rounded-lg bg-luga-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-luga-dark text-sm">{item.label}</p>
                    <p className="text-xs text-luga-text-secondary mt-0.5">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className="bg-white py-20" id="formulario">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — context */}
            <AnimatedSection direction="left">
              <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-4">
                Agende agora
              </p>
              <h2 className="text-3xl font-extrabold text-luga-dark mb-4 leading-tight">
                Preencha o formulário e nossa equipe entra em contato.
              </h2>
              <p className="text-luga-text-secondary leading-relaxed mb-8">
                Em até 1 dia útil agendamos uma demonstração personalizada,
                focada na realidade da sua empresa. Sem compromisso, sem pressão.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Demonstração ao vivo com o sistema real",
                  "Focada no seu tipo de operação",
                  "Sem slides — você vê tudo funcionando",
                  "Tirar dúvidas com quem conhece o setor",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-luga-accent flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-luga-bg rounded-xl border border-gray-200">
                <p className="text-sm text-luga-text-secondary mb-3">
                  Prefere falar direto agora?
                </p>
                <WhatsAppButton label="Falar no WhatsApp" />
              </div>
            </AnimatedSection>

            {/* Right — form */}
            <AnimatedSection direction="right">
              <LeadForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Perguntas frequentes sobre o Luga ERP" />
    </>
  );
}
