import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { whatsappUrl } from "@/lib/whatsapp";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    tagline: "Sem módulo fiscal",
    description:
      "Para quem emite NF-e por outro sistema ou não precisa de apuração fiscal integrada.",
    highlighted: false,
    included: [
      "Dashboard com visão geral em tempo real",
      "Central de Cadastros — 26 cadastros em 4 categorias",
      "Vendas, Compras, Estoque e Precificação",
      "Logística — frete, CTe e controle de entregas",
      "Contas a Receber e a Pagar, Caixa, Cofre e Cheques",
      "Fluxo de Caixa, DRE e Capital de Giro",
      "Cobrança automática via WhatsApp",
      "Boletos multi-banco, Pix e CNAB 240/400",
      "Conciliação Bancária + Open Finance",
      "Duplicatas, Empréstimos e Mapa de Entregas",
      "Relatórios — 14 categorias, centenas de modelos",
      "Usuários ilimitados",
    ],
  },
  {
    name: "Completo",
    tagline: "Com módulo Fiscal e Contábil",
    description:
      "Tudo do Essencial, mais NF-e, apuração de ICMS e SPED integrados ao ERP.",
    highlighted: true,
    included: [
      "Tudo do plano Essencial",
      "Emissão de NF-e integrada (Focus NFe)",
      "Apuração de ICMS — crédito, débito e GNRE",
      "Livros Fiscais — entradas, saídas e apuração",
      "SPED Fiscal — EFD ICMS/IPI e EFD Contribuições",
      "Estoque Fiscal para o bloco H do SPED",
      "Exportação contábil — AlterData, CSV, TXT e XML",
      "Cadastros fiscais — NCM, CFOP, CST e alíquotas",
    ],
  },
];

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section className="bg-luga-bg py-20" id="preco">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
            Investimento
          </p>
          <h2 className="section-title">Dois planos. Sem cobrança por usuário.</h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Escolha o plano Essencial ou o Completo (com módulo Fiscal e
            Contábil). Usuários ilimitados nos dois. Consulte nosso valor.
          </p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 100}>
              <div
                className={`relative h-full flex flex-col rounded-3xl p-8 lg:p-10 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-luga-hero text-white shadow-xl border-2 border-luga-accent"
                    : "bg-white text-luga-dark border border-gray-200 shadow-sm hover:shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider bg-luga-accent text-white px-4 py-1 rounded-full shadow-md">
                    Recomendado
                  </span>
                )}

                <p
                  className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                    plan.highlighted ? "text-luga-accent" : "text-luga-royal"
                  }`}
                >
                  Plano {plan.name}
                </p>
                <h3
                  className={`text-2xl font-extrabold mb-1 ${
                    plan.highlighted ? "text-white" : "text-luga-dark"
                  }`}
                >
                  {plan.tagline}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-white/80" : "text-luga-text-secondary"}`}>
                  {plan.description}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.included.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2.5 text-sm ${
                        plan.highlighted ? "text-white/90" : "text-gray-700"
                      }`}
                    >
                      <Check
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? "text-luga-accent" : "text-emerald-500"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl(
                    `Olá! Vim pelo site da Luga ERP e quero saber mais sobre o plano ${plan.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="click_whatsapp"
                  className={`inline-flex items-center justify-center gap-2 w-full text-base py-3.5 px-7 rounded-lg font-semibold transition-all duration-200 active:scale-[0.98] shadow-md hover:shadow-lg ${
                    plan.highlighted
                      ? "text-white bg-[#25D366] hover:bg-[#1ebe5b]"
                      : "text-white bg-luga-royal hover:bg-luga-dark"
                  }`}
                >
                  <WhatsAppIcon />
                  Consultar valor
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-8">
          <p className="text-sm text-luga-text-secondary">
            Quer ver funcionando antes de decidir?{" "}
            <Link
              href="/demonstracao"
              data-event="click_demo"
              className="text-luga-royal font-semibold hover:text-luga-accent underline transition-colors inline-flex items-center gap-1"
            >
              Peça uma demonstração gratuita
              <ArrowRight size={14} />
            </Link>
            .
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
