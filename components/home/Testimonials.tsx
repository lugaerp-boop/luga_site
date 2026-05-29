import AnimatedSection from "@/components/shared/AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Roberto Alves",
    role: "Permissionário — CEASA São Gonçalo",
    text: "Antes eu controlava tudo em caderno e planilha. Hoje o financeiro fecha sozinho, emito boleto direto pelo sistema e sei o que tenho em estoque sem precisar contar. Não tem como voltar atrás.",
    rating: 5,
    initials: "RA",
  },
  {
    name: "Maria Santos",
    role: "Proprietária — Distribuidora Verde Hortifruti, Niterói RJ",
    text: "A importação do XML da nota do fornecedor mudou minha vida. Chega o arquivo, eu importo, o estoque atualiza e a conta a pagar já aparece no sistema. Economizo horas todo dia.",
    rating: 5,
    initials: "MS",
  },
  {
    name: "Marcos Pereira",
    role: "Atacadista de bebidas — Rio de Janeiro, RJ",
    text: "Já usei outros sistemas. Nenhum entendia tabela de preço por cliente de verdade, nem vasilhame retornável. A Luga entende. E o suporte atende de verdade — não some depois que você assina.",
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
          <h2 className="section-title">O que dizem quem já usa</h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Distribuidoras e permissionários do setor hortifruti que trocaram
            o improviso por um sistema que entende o negócio deles.
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
