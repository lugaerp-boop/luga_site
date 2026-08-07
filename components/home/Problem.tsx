import AnimatedSection from "@/components/shared/AnimatedSection";
import { NotebookPen, AlertTriangle, PackageX, Receipt } from "lucide-react";

const pains = [
  {
    icon: NotebookPen,
    title: "Controle no caderno e na planilha",
    description:
      "Anotação manual, planilha que ninguém atualiza e informação espalhada. No fim do mês, ninguém sabe o número certo.",
  },
  {
    icon: AlertTriangle,
    title: "Calote e inadimplência no escuro",
    description:
      "Você não sabe ao certo quem te deve, há quanto tempo, nem quanto tem pra receber hoje. O dinheiro fica perdido na rua.",
  },
  {
    icon: Receipt,
    title: "Boleto e NF-e feitos na mão",
    description:
      "Toda nota e todo boleto viram retrabalho: digitação, ida ao banco, erro de digitação e tempo que você não tem.",
  },
  {
    icon: PackageX,
    title: "Estoque que não bate",
    description:
      "Mercadoria perecível parada, custo médio no chute e diferença entre o que o sistema diz e o que tem no galpão.",
  },
];

export default function Problem() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
            Você se reconhece?
          </p>
          <h2 className="section-title">
            Tocar uma distribuidora no improviso custa caro
          </h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Cada erro de estoque, cada calote esquecido e cada nota digitada na
            mão é dinheiro e tempo saindo do seu bolso — todo dia.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, i) => (
            <AnimatedSection key={pain.title} delay={i * 100}>
              <div className="bg-luga-bg rounded-2xl p-6 border border-gray-100 h-full card-hover">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  <pain.icon size={22} className="text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-luga-dark mb-2">{pain.title}</h3>
                <p className="text-sm text-luga-text-secondary leading-relaxed">
                  {pain.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <p className="text-lg text-luga-dark font-semibold">
            A Luga foi feita pra acabar com isso —{" "}
            <span className="text-luga-royal">e trazer resultados reais.</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
