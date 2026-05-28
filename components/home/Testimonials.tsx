import AnimatedSection from "@/components/shared/AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Roberto Alves",
    role: "Permissionário — CEASA São Gonçalo",
    text: "Antes eu usava planilha e um sistema desktop dos anos 90. Com a Luga, consegui organizar as contas a receber, emitir boleto direto pelo sistema e ainda saber quanto produto eu tenho em estoque em tempo real. Não tem como voltar atrás.",
    rating: 5,
    initials: "RA",
  },
  {
    name: "Fernanda Costa",
    role: "Distribuidora de hortifruti — Niterói, RJ",
    text: "O que mais me impressionou foi a importação pelo XML da NF-e. Chega o XML do fornecedor, eu importo, o estoque já atualiza e o financeiro já lança a conta a pagar. Economizo umas duas horas por dia com isso.",
    rating: 5,
    initials: "FC",
  },
  {
    name: "Marcos Pereira",
    role: "Atacadista de bebidas — Rio de Janeiro, RJ",
    text: "Tentei outros sistemas antes. Ou eram caros demais, ou não entendiam o setor. A Luga foi a única que tinha tabela de preço por cliente de verdade, com vasilhame retornável e integração bancária que funciona. E o suporte responde rápido.",
    rating: 5,
    initials: "MP",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-luga-bg py-20" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
            Depoimentos
          </p>
          <h2 className="section-title">Quem já usa a Luga</h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Clientes reais do setor hortifruti e atacadista que modernizaram
            sua gestão com a Luga ERP.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 120}>
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full card-hover flex flex-col">
                <div className="mb-4">
                  <Stars count={t.rating} />
                </div>
                <p className="text-gray-700 leading-relaxed text-sm flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-luga-gradient flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-white">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-luga-dark">{t.name}</p>
                    <p className="text-xs text-luga-text-secondary">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
