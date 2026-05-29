import AnimatedSection from "@/components/shared/AnimatedSection";
import { Building2, FileSpreadsheet, Rocket } from "lucide-react";

const steps = [
  {
    icon: Building2,
    number: "01",
    title: "Cadastre sua empresa em minutos",
    description:
      "Configure os dados, usuários e parâmetros. Sem servidor, sem instalação — só o navegador.",
  },
  {
    icon: FileSpreadsheet,
    number: "02",
    title: "Importe seus dados via Excel",
    description:
      "Clientes, fornecedores, produtos e mais — o sistema valida os dados, detecta duplicidades e mantém histórico completo de tudo que foi importado.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Comece a operar no mesmo dia",
    description:
      "Emita NF-e, controle o financeiro e gere relatórios. Treinamento feito junto com a nossa equipe.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-luga-bg py-20" id="como-funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
            Onboarding
          </p>
          <h2 className="section-title">Três passos para parar de improvisar</h2>
          <p className="section-subtitle mt-4 max-w-xl mx-auto">
            Sem migração complicada. Sem meses de treinamento. Você opera no mesmo dia.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-luga-royal to-luga-light mx-16" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 150}>
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center card-hover">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="w-8 h-8 rounded-full bg-luga-gradient flex items-center justify-center">
                      <span className="text-xs font-extrabold text-white">{step.number}</span>
                    </div>
                  </div>

                  <div className="mt-4 mb-5 flex justify-center">
                    <div className="gradient-icon w-14 h-14">
                      <step.icon size={26} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-luga-dark mb-3">{step.title}</h3>
                  <p className="text-sm text-luga-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
