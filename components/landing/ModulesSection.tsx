import AnimatedSection from "@/components/shared/AnimatedSection";
import type { LucideIcon } from "lucide-react";

export interface Module {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ModulesSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  modules: Module[];
}

export default function ModulesSection({
  eyebrow = "Módulos",
  title = "Tudo que sua operação precisa, integrado",
  subtitle = "Cada módulo conversa com os outros. O que entra no estoque já reflete no financeiro. O que o cliente deve já vira boleto.",
  modules,
}: ModulesSectionProps) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
            {eyebrow}
          </p>
          <h2 className="section-title">{title}</h2>
          {subtitle && (
            <p className="section-subtitle mt-4 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <AnimatedSection key={mod.title} delay={i * 80}>
              <div className="bg-luga-bg rounded-2xl p-6 border border-gray-100 h-full card-hover">
                <div className="gradient-icon mb-4">
                  <mod.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-luga-dark mb-2">
                  {mod.title}
                </h3>
                <p className="text-sm text-luga-text-secondary leading-relaxed">
                  {mod.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
