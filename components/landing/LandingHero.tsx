import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import WaveDivider from "@/components/shared/WaveDivider";

interface LandingHeroProps {
  badge?: string;
  headline: string;
  subheadline: string;
  primaryLabel?: string;
  primaryHref?: string;
  whatsappMessage?: string;
  trustItems?: string[];
}

export default function LandingHero({
  badge,
  headline,
  subheadline,
  primaryLabel = "Agendar demonstração gratuita",
  primaryHref = "#formulario",
  whatsappMessage,
  trustItems,
}: LandingHeroProps) {
  return (
    <section className="relative bg-luga-hero pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-luga-royal/20 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-luga-light/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-luga-accent animate-pulse" />
            <span className="text-sm font-medium text-white">{badge}</span>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
          {headline}
        </h1>

        <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-3xl mx-auto">
          {subheadline}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
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

        {trustItems && trustItems.length > 0 && (
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {trustItems.map((item) => (
              <span key={item} className="text-sm text-white/70">
                ✓ {item}
              </span>
            ))}
          </div>
        )}
      </div>

      <WaveDivider />
    </section>
  );
}
