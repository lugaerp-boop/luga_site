import { pageMetadata } from "@/lib/metadata";
import { CheckCircle2, AlertTriangle, PackageX, Receipt, MessageCircle, BarChart2, RefreshCw } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import LeadForm from "@/components/landing/LeadForm";
import FAQSection, { type FAQ } from "@/components/landing/FAQSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export const metadata = pageMetadata(
  "Agendar Demonstração Gratuita",
  "Veja como controlar pedidos, estoque, financeiro, NF-e e cobrança em um só sistema. Demonstração gratuita do Luga ERP para distribuidoras, hortifruti, CEASA e atacadistas.",
  "/demonstracao"
);

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
      <section className="relative bg-luga-hero pt-24 pb-12 md:pt-28 md:pb-16" id="formulario">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="lg:pt-10">
            <p className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Demonstração gratuita</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              Conheça o Luga ERP na prática.
            </h1>
            <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-6">
              Veja vendas, estoque e financeiro no mesmo sistema. Preencha seus dados e nossa equipe entra em contato para combinar o melhor horário.
            </p>
            <ul className="space-y-3 mb-7 text-sm text-white/90">
              {["Apresentação ao vivo, focada na sua operação", "Espaço para tirar dúvidas sobre o sistema", "Gratuita e sem compromisso"].map(item => (
                <li key={item} className="flex items-center gap-2"><CheckCircle2 size={18} className="shrink-0" />{item}</li>
              ))}
            </ul>
            <WhatsAppButton label="Prefiro falar pelo WhatsApp" />
          </div>
          <div className="min-w-0">
            <h2 className="sr-only">Solicitar uma demonstração</h2>
            <LeadForm />
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

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Perguntas frequentes sobre o Luga ERP" />
    </>
  );
}
