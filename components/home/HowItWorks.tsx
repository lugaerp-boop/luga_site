import AnimatedSection from "@/components/shared/AnimatedSection";
import { Building2, FileSpreadsheet, Rocket } from "lucide-react";

const steps = [
  {
    icon: Building2,
    number: "01",
    title: "Cadastre sua empresa",
    description:
      "Configure os dados, usuários e parâmetros iniciais. Sem servidor, sem instalação — só o navegador.",
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
    title: "Sua operação no ar em até 1 semana",
    description:
      "Nossa equipe configura o sistema com você e treina sua equipe. Ao final da implantação, é só emitir NF-e, controlar o financeiro e gerar relatórios.",
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
            Sem migração complicada. Com treinamento incluso. Sua operação no ar em até 1 semana.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-luga-royal to-luga-light mx-16" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 150} className="h-full">
                <div className="relative h-full flex flex-col bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center card-hover">
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
