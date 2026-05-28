import AnimatedSection from "@/components/shared/AnimatedSection";
import { Building2, FileSpreadsheet, Rocket } from "lucide-react";

const steps = [
  {
    icon: Building2,
    number: "01",
    title: "Cadastre sua empresa",
    description:
      "Configure os dados da empresa, usuários e parâmetros do sistema em minutos. Sem servidor local, sem instalação.",
  },
  {
    icon: FileSpreadsheet,
    number: "02",
    title: "Importe seus dados",
    description:
      "Suba sua base de clientes e produtos via Excel. O sistema valida, detecta duplicidades e mantém histórico completo.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Comece a usar",
    description:
      "Emita NF-e, controle financeiro e gere relatórios no dia seguinte. Treinamento incluso no processo de implementação.",
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
          <h2 className="section-title">Comece a usar em 3 passos</h2>
          <p className="section-subtitle mt-4 max-w-xl mx-auto">
            Implementação rápida, sem complicação. Da contratação ao sistema funcionando em menos de uma semana.
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
