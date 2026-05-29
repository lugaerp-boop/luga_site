import type { Metadata } from "next";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ContactForm from "@/components/contact/ContactForm";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Solicitar demonstração — Luga ERP",
  description:
    "Agende uma demonstração gratuita da Luga ERP. Mostramos o sistema funcionando com os dados da sua empresa, sem compromisso.",
  alternates: { canonical: "https://lugaerp.com.br/demonstracao" },
};

const included = [
  "Dashboard com visão geral da operação",
  "Central de Cadastros completa",
  "Movimentação operacional",
  "Controle de estoque com custo médio automático",
  "Contas a receber e a pagar",
  "Fluxo de caixa projetado vs realizado",
  "Cheques pré-datados e emitidos",
  "Empréstimos e adiantamentos",
  "Emissão de NF-e com DANFE e XML",
  "Boletos integrados — BB, Itaú e Bradesco",
  "Remessa e retorno CNAB 240/400",
  "Baixa automática por retorno bancário",
  "SPED Fiscal e EFD Contribuições",
  "DRE e Balanço Patrimonial",
  "Mais de 200 relatórios em PDF e Excel",
  "Tabelas de preço por cliente",
  "Importação de dados via Excel",
  "Multi-usuário com perfis de acesso",
  "Treinamento incluso na implantação",
];

export default function DemonstracaoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-luga-hero pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
              Demonstração gratuita
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Veja o sistema funcionando com os dados da sua empresa
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Sem compromisso. Sem instalação. Nossa equipe mostra tudo ao vivo,
              focado no seu tipo de negócio.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-luga-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left — what's included */}
            <AnimatedSection direction="left">
              <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-4">
                O que está incluso
              </p>
              <h2 className="text-2xl font-extrabold text-luga-dark mb-3">
                Tudo que sua operação precisa, em um só lugar
              </h2>
              <p className="text-luga-text-secondary mb-7 leading-relaxed">
                Nenhum módulo bloqueado. Nenhuma funcionalidade vendida separado.
                Você contrata e já tem acesso a tudo isso:
              </p>
              <ul className="grid grid-cols-1 gap-2.5">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-luga-accent mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Right — form */}
            <AnimatedSection direction="right">
              <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-4">
                Fale com a gente
              </p>
              <h2 className="text-2xl font-extrabold text-luga-dark mb-3">
                Agende sua demonstração
              </h2>
              <p className="text-luga-text-secondary mb-7 leading-relaxed">
                Preencha o formulário e nossa equipe entra em contato em até
                1 dia útil para agendar uma demo personalizada.
              </p>
              <ContactForm buttonLabel="Enviar solicitação" />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
