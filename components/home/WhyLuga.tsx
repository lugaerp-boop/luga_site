import AnimatedSection from "@/components/shared/AnimatedSection";
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";

type CellValue = "check" | "cross" | "partial";

const comparison: { label: string; luga: CellValue; erp: CellValue; planilha: CellValue }[] = [
  { label: "Especializado em hortifruti/atacado", luga: "check", erp: "cross", planilha: "cross" },
  { label: "Implantação em menos de 1 semana", luga: "check", erp: "cross", planilha: "check" },
  { label: "NF-e integrada (plano Completo)", luga: "check", erp: "partial", planilha: "cross" },
  { label: "Boletos multi-banco e Pix", luga: "check", erp: "partial", planilha: "cross" },
  { label: "Cobrança automática via WhatsApp", luga: "check", erp: "cross", planilha: "cross" },
  { label: "100% web — sem instalação", luga: "check", erp: "cross", planilha: "check" },
  { label: "Suporte incluso", luga: "check", erp: "partial", planilha: "cross" },
  { label: "Importação de dados via Excel", luga: "check", erp: "cross", planilha: "check" },
  { label: "Usuários ilimitados no mesmo contrato", luga: "check", erp: "partial", planilha: "cross" },
];

function Cell({ value, highlight }: { value: CellValue; highlight?: boolean }) {
  if (value === "check")
    return (
      <CheckCircle2
        size={20}
        className={highlight ? "text-luga-accent" : "text-emerald-500"}
        aria-label="Sim"
      />
    );
  if (value === "cross")
    return <XCircle size={20} className="text-red-400" aria-label="Não" />;
  return <MinusCircle size={20} className="text-amber-400" aria-label="Custo extra" />;
}

export default function WhyLuga() {
  return (
    <section className="bg-white py-20" id="por-que-luga">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold text-luga-accent uppercase tracking-wider mb-3">
            Comparativo
          </p>
          <h2 className="section-title">Por que a Luga e não os outros?</h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            ERPs genéricos não foram feitos para quem trabalha com hortifruti.
            Planilhas não escalam. A Luga foi criada para o seu setor.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-luga-dark">
                  <th className="text-left px-6 py-4 text-white font-semibold">Funcionalidade</th>
                  <th className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-xs bg-luga-accent text-white px-2 py-0.5 rounded-full mb-1">Recomendado</span>
                      <span className="text-white font-bold">Luga ERP</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-luga-text-tertiary font-semibold">
                    ERP Tradicional
                  </th>
                  <th className="px-6 py-4 text-center text-luga-text-tertiary font-semibold">
                    Planilhas
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-luga-bg"}`}
                  >
                    <td className="px-6 py-4 text-gray-700">{row.label}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        <Cell value={row.luga} highlight />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        <Cell value={row.erp} />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        <Cell value={row.planilha} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 flex items-center gap-4 text-xs text-luga-text-secondary px-1">
            <span className="flex items-center gap-1"><MinusCircle size={12} className="text-amber-400" /> Módulo separado</span>
            <span className="flex items-center gap-1"><XCircle size={12} className="text-red-400" /> Não disponível</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
