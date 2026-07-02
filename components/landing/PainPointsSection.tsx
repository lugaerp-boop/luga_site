import AnimatedSection from "@/components/shared/AnimatedSection";
import type { LucideIcon } from "lucide-react";

export interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface PainPointsSectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  pains: PainPoint[];
  closing?: string;
}

export default function PainPointsSection({
  eyebrow = "Você se reconhece?",
  title,
  subtitle,
  pains,
  closing,
}: PainPointsSectionProps) {
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
          {pains.map((pain, i) => (
            <AnimatedSection key={pain.title} delay={i * 80}>
              <div className="bg-luga-bg rounded-2xl p-6 border border-gray-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  <pain.icon size={22} className="text-red-500" />
                </div>
                <h3 className="text-base font-bold text-luga-dark mb-2">
                  {pain.title}
                </h3>
                <p className="text-sm text-luga-text-secondary leading-relaxed">
                  {pain.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {closing && (
          <AnimatedSection className="text-center mt-12">
            <p className="text-lg text-luga-dark font-semibold">{closing}</p>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
