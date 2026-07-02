import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import AnimatedSection from "@/components/shared/AnimatedSection";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  whatsappMessage?: string;
  dark?: boolean;
}

export default function CTASection({
  eyebrow = "Pronto para começar?",
  title,
  subtitle,
  primaryLabel = "Agendar demonstração gratuita",
  primaryHref = "/demonstracao",
  whatsappMessage,
  dark = true,
}: CTASectionProps) {
  if (dark) {
    return (
      <section className="bg-luga-hero py-20 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-luga-light/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-luga-royal/20 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            {eyebrow && (
              <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-4">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-white/80 mb-10 leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={primaryHref}
                data-event="click_demo"
                className="inline-flex items-center justify-center gap-2 text-base py-4 px-8 rounded-lg font-semibold text-luga-dark bg-white hover:bg-luga-bg active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {primaryLabel}
                <ArrowRight size={18} />
              </Link>
              <WhatsAppButton
                label="Falar no WhatsApp"
                message={whatsappMessage}
                size="lg"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-luga-bg py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          {eyebrow && (
            <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-4">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-luga-dark leading-tight mb-5">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-luga-text-secondary mb-10 leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={primaryHref}
              data-event="click_demo"
              className="btn-primary text-base py-4 px-8"
            >
              {primaryLabel}
              <ArrowRight size={18} />
            </Link>
            <WhatsAppButton
              label="Falar no WhatsApp"
              message={whatsappMessage}
              size="lg"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
