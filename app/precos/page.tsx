import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import {
  CheckCircle2,
  XCircle,
  MinusCircle,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Preços — Luga ERP R$ 900/mês tudo incluso",
  description:
    "Luga ERP: R$ 900/mês com todos os módulos inclusos. Sem cobrança por usuário, sem módulos pagos separadamente, sem contrato de fidelidade.",
  alternates: { canonical: "https://lugaerp.com.br/precos" },
};

const included = [
  "Dashboard com visão geral da empresa",
  "Central de Cadastros completa",
  "Movimentação operacional",
  "Controle de estoque com custo médio automático",
  "Contas a receber e a pagar",
  "Fluxo de caixa projetado vs realizado",
  "Cheques pré-datados e emitidos",
  "Empréstimos e adiantamentos",
  "Emissão de NF-e com DANFE e XML",
  "Cancelamento e carta de correção de NF-e",
  "Boletos integrados — BB, Itaú e Bradesco",
  "Remessa e retorno CNAB 240/400",
  "Baixa automática por retorno bancário",
  "SPED Fiscal e EFD Contribuições",
  "DRE e Balanço Patrimonial",
  "Mais de 200 relatórios em PDF e Excel",
  "Tabelas de preço por cliente",
  "Controle de usuários e perfis de acesso",
  "Importação de dados via Excel",
  "Multi-empresa e multi-usuário",
  "Suporte técnico incluso",
  "Treinamento na implementação",
];

type CellValue = "check" | "cross" | "partial";

const comparison: {
  label: string;
  luga: CellValue;
  erp: CellValue;
  planilha: CellValue;
}[] = [
  { label: "Específico para hortifruti/atacado", luga: "check", erp: "cross", planilha: "cross" },
  { label: "Preço acessível", luga: "check", erp: "cross", planilha: "check" },
  { label: "NF-e incluso no plano", luga: "check", erp: "partial", planilha: "cross" },
  { label: "Boletos bancários integrados", luga: "check", erp: "partial", planilha: "cross" },
  { label: "100% web sem instalação", luga: "check", erp: "cross", planilha: "check" },
  { label: "Suporte incluso", luga: "check", erp: "partial", planilha: "cross" },
  { label: "Implementação rápida (< 1 semana)", luga: "check", erp: "cross", planilha: "check" },
  { label: "Multi-usuário sem custo extra", luga: "check", erp: "partial", planilha: "cross" },
];

const faq = [
  {
    q: "Tem contrato de fidelidade?",
    a: "Não. Você pode cancelar a qualquer momento, sem multa e sem burocracia. Acreditamos que a melhor forma de manter nossos clientes é entregando valor todos os meses.",
  },
  {
    q: "Quantos usuários posso cadastrar?",
    a: "Usuários ilimitados, sem cobrança adicional por pessoa. Você pode dar acesso para toda a sua equipe sem se preocupar com custo por usuário.",
  },
  {
    q: "A taxa de implementação é cobrada todo mês?",
    a: "Não. O valor de R$ 600 de implementação é cobrado apenas uma vez, na contratação. A partir daí, você paga somente a mensalidade de R$ 900.",
  },
  {
    q: "Tem período de teste grátis?",
    a: "Oferecemos uma demonstração guiada gratuita do sistema. Entre em contato pelo e-mail lugaerp@gmail.com para agendar sua demo personalizada.",
  },
  {
    q: "Como funciona o suporte?",
    a: "O suporte técnico está incluso na mensalidade. Você pode entrar em contato por e-mail. Nossa meta é responder em até 1 dia útil para solicitações gerais e com prioridade para problemas críticos.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim. Não há fidelidade. Basta nos avisar com antecedência e o acesso ao sistema será encerrado ao fim do período já pago. Seus dados ficam disponíveis para exportação.",
  },
];

function Cell({ value, highlight }: { value: CellValue; highlight?: boolean }) {
  if (value === "check")
    return <CheckCircle2 size={20} className={highlight ? "text-luga-accent" : "text-emerald-500"} />;
  if (value === "cross")
    return <XCircle size={20} className="text-red-400" />;
  return (
    <span className="flex items-center gap-1 text-amber-600 text-xs font-medium">
      <MinusCircle size={14} className="text-amber-400" />
      Extra
    </span>
  );
}

export default function PrecosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-luga-hero pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Um plano. Tudo incluso.{" "}
              <span className="text-luga-light">Sem surpresas.</span>
            </h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Preço justo para quem está crescendo — sem módulos bloqueados,
              sem cobrança por usuário, sem contrato.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing card */}
      <section className="bg-luga-bg py-16">
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="bg-white rounded-3xl shadow-xl border-2 border-luga-accent overflow-hidden">
              {/* Badge */}
              <div className="bg-luga-gradient px-6 py-3 text-center">
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  Plano único — Tudo incluso
                </span>
              </div>

              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-luga-dark mb-2">Luga ERP Completo</h2>
                  <div className="flex items-end justify-center gap-1 mb-1">
                    <span className="text-5xl font-extrabold text-luga-dark">R$ 900</span>
                    <span className="text-luga-text-secondary mb-2">/mês</span>
                  </div>
                  <p className="text-sm text-luga-text-secondary">
                    + R$ 600 de implementação (pagamento único)
                  </p>
                </div>

                <ul className="grid grid-cols-1 gap-2.5 mb-8">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-luga-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href="/contato" className="btn-primary w-full text-center text-base py-4 justify-center">
                  Solicitar demonstração gratuita
                  <ArrowRight size={18} />
                </Link>

                <p className="text-center text-xs text-luga-text-secondary mt-4">
                  Sem contrato de fidelidade. Cancele quando quiser.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="section-title">Compare e decida</h2>
            <p className="section-subtitle mt-3 max-w-xl mx-auto">
              Veja como a Luga se compara com ERPs tradicionais e planilhas.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-luga-dark">
                    <th className="text-left px-6 py-4 text-white font-semibold">Funcionalidade</th>
                    <th className="px-6 py-4 text-center">
                      <span className="text-white font-bold">Luga ERP</span>
                      <br />
                      <span className="text-luga-accent text-xs">R$ 900/mês</span>
                    </th>
                    <th className="px-6 py-4 text-center text-luga-text-tertiary font-semibold">
                      ERP Tradicional
                      <br />
                      <span className="text-xs font-normal">R$ 2.000–10.000/mês</span>
                    </th>
                    <th className="px-6 py-4 text-center text-luga-text-tertiary font-semibold">
                      Planilhas
                      <br />
                      <span className="text-xs font-normal">Grátis (por enquanto)</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.label} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-luga-bg"}`}>
                      <td className="px-6 py-4 text-gray-700">{row.label}</td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          <Cell value={row.luga} highlight />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          <Cell value={row.erp} />
                        </div>
                      </td>
                      <td className="px-6 py-4">
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
              <span className="flex items-center gap-1">
                <MinusCircle size={12} className="text-amber-400" /> Custo extra / módulo separado
              </span>
              <span className="flex items-center gap-1">
                <XCircle size={12} className="text-red-400" /> Não disponível
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-luga-bg py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10">
            <h2 className="section-title">Perguntas frequentes</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <AnimatedSection key={item.q} delay={i * 60}>
                <details className="bg-white rounded-xl border border-gray-200 shadow-sm group">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-luga-dark hover:text-luga-royal transition-colors">
                    {item.q}
                    <ChevronDown
                      size={18}
                      className="flex-shrink-0 text-luga-text-secondary group-open:rotate-180 transition-transform duration-200"
                    />
                  </summary>
                  <div className="px-6 pb-5 text-sm text-luga-text-secondary leading-relaxed border-t border-gray-100 pt-4">
                    {item.a}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-luga-hero py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Pronto para começar?
            </h2>
            <p className="text-white/80 mb-8">
              Entre em contato e receba uma demonstração personalizada do sistema.
              Sem compromisso.
            </p>
            <Link href="/contato" className="btn-primary text-base py-4 px-8 inline-flex">
              Começar agora
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
