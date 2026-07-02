import AnimatedSection from "@/components/shared/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

// TODO: Substituir por depoimentos reais validados com clientes.
// Os textos abaixo são placeholders — não devem ir para produção como se fossem reais.

const differentiators = [
  {
    title: "Especializado no setor",
    description:
      "Não é um ERP genérico adaptado. Cada detalhe foi construído pensando em quem distribui, vende e cobra no mercado alimentício.",
  },
  {
    title: "NF-e e boleto no mesmo sistema",
    description:
      "Emissão de nota fiscal e geração de boleto integrados ao BB, Itaú e Bradesco — sem precisar de sistemas separados.",
  },
  {
    title: "No ar em menos de 1 semana",
    description:
      "Implantação rápida com migração dos seus dados via Excel e treinamento da equipe inclusos no contrato.",
  },
  {
    title: "Suporte real, sem sumiço",
    description:
      "Nossa equipe acompanha a sua operação. Você não fica sozinho depois que assina — suporte incluso sem custo adicional.",
  },
  {
    title: "Preço único, sem surpresa",
    description:
      "Um único valor mensal com tudo incluso: usuários ilimitados, todos os módulos, suporte e treinamento. Consulte nosso valor.",
  },
  {
    title: "100% web, sem instalação",
    description:
      "Acesse de qualquer navegador, de qualquer lugar. Sem servidor próprio, sem manutenção de software, sem atualização manual.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-luga-bg py-20" id="diferenciais">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
            Por que o Luga ERP
          </p>
          <h2 className="section-title">Feito para quem vive a rotina do mercado</h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Criado a partir da realidade operacional do CEASA e de empresas de
            distribuição, hortifruti, atacado e alimentos.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 100}>
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full card-hover flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-luga-gradient flex items-center justify-center mb-4 flex-shrink-0">
                  <CheckCircle2 size={20} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-luga-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-luga-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
