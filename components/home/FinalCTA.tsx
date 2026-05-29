import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-luga-hero py-20 overflow-hidden relative">
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-luga-light/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-luga-royal/20 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-4">
            Pronto para começar?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            Pronto para modernizar sua operação?
          </h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            Agende uma demonstração gratuita e veja o sistema funcionando{" "}
            <span className="text-white font-semibold">com os dados da sua empresa.</span>{" "}
            Sem compromisso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/demonstracao" className="btn-primary text-base py-4 px-8">
              <MessageCircle size={18} />
              Agendar demonstração gratuita
            </Link>
            <Link href="/funcionalidades" className="btn-outline-white text-base py-4 px-8">
              Conhecer o sistema
              <ArrowRight size={18} />
            </Link>
          </div>

          <p className="mt-8 text-sm text-white/50">
            Ou envie um e-mail direto para{" "}
            <a
              href="mailto:lugaerp@gmail.com"
              className="text-luga-accent hover:text-luga-light underline transition-colors"
            >
              lugaerp@gmail.com
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
