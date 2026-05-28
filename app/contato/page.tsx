import type { Metadata } from "next";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Clock, Monitor, Headphones, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato — Fale com a equipe Luga ERP",
  description:
    "Entre em contato com a Luga ERP para solicitar uma demonstração, tirar dúvidas ou falar sobre parceria. Respondemos em até 1 dia útil.",
  alternates: { canonical: "https://lugaerp.com.br/contato" },
};

const cards = [
  {
    icon: Monitor,
    title: "Solicitar demonstração",
    description: "Veja o sistema funcionando ao vivo, com foco no seu tipo de negócio.",
  },
  {
    icon: Headphones,
    title: "Suporte técnico",
    description: "Já é cliente e precisa de ajuda? Fale com nossa equipe técnica.",
  },
  {
    icon: Handshake,
    title: "Parceria comercial",
    description: "Quer indicar a Luga ou propor uma parceria? Adoramos conversar.",
  },
];

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-luga-hero pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Fale com a gente
            </h1>
            <p className="text-lg text-white/80">
              Responderemos em até 1 dia útil. Sem chatbot, sem fila — você fala
              diretamente com quem conhece o sistema.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-luga-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — info */}
            <div>
              <AnimatedSection direction="left">
                <h2 className="text-2xl font-bold text-luga-dark mb-6">
                  Informações de contato
                </h2>

                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:lugaerp@gmail.com"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-luga-accent transition-colors group"
                  >
                    <div className="gradient-icon flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-luga-text-secondary uppercase tracking-wide font-medium">
                        E-mail
                      </p>
                      <p className="font-semibold text-luga-dark">lugaerp@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="gradient-icon flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-luga-text-secondary uppercase tracking-wide font-medium">
                        Horário de atendimento
                      </p>
                      <p className="font-semibold text-luga-dark">Seg–Sex, 8h às 18h</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm font-semibold text-luga-dark uppercase tracking-wider mb-4">
                  Como posso ajudar?
                </p>
                <div className="space-y-3">
                  {cards.map((card) => (
                    <div
                      key={card.title}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-xl bg-luga-gradient flex items-center justify-center flex-shrink-0">
                        <card.icon size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-luga-dark">{card.title}</p>
                        <p className="text-xs text-luga-text-secondary mt-0.5 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right — form */}
            <AnimatedSection direction="right">
              <h2 className="text-2xl font-bold text-luga-dark mb-6">
                Envie uma mensagem
              </h2>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
