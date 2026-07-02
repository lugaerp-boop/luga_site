"use client";

import { useState, useRef, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { EMAILJS_CONFIG } from "@/lib/emailjs";
import { whatsappUrl } from "@/lib/whatsapp";

// TODO: Quando houver backend disponível, substituir EmailJS por Server Action
// que persista os leads em banco de dados com rastreamento completo de UTM.

type FormState = "idle" | "loading" | "success" | "error";

const segments = [
  "Distribuidora de alimentos",
  "Distribuidora de bebidas",
  "Atacadista de hortifruti",
  "Permissionário CEASA",
  "Empresa de alimentos",
  "Outro",
];

const pains = [
  "Pedidos perdidos no WhatsApp",
  "Estoque sem controle",
  "Cobrança atrasada / inadimplência",
  "Financeiro confuso",
  "Falta de relatórios",
  "Retrabalho entre setores",
  "Emissão manual de NF-e e boletos",
  "Outro",
];

interface LeadFormProps {
  defaultSegment?: string;
}

export default function LeadForm({ defaultSegment }: LeadFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [utms, setUtms] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtms({
      utm_source: params.get("utm_source") ?? "",
      utm_medium: params.get("utm_medium") ?? "",
      utm_campaign: params.get("utm_campaign") ?? "",
      utm_content: params.get("utm_content") ?? "",
      utm_term: params.get("utm_term") ?? "",
    });
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      from_name: formData.get("from_name") as string,
      company: formData.get("company") as string,
      phone: formData.get("phone") as string,
      segment: formData.get("segment") as string,
      main_pain: formData.get("main_pain") as string,
      current_system: formData.get("current_system") as string,
      ...utms,
    };

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        { ...data, to_email: "lugaerp@gmail.com" },
        EMAILJS_CONFIG.publicKey
      );
      setState("success");
      formRef.current?.reset();
    } catch {
      setState("error");
      setErrorMsg(
        "Não foi possível enviar. Tente novamente ou fale pelo WhatsApp."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} className="text-emerald-500" />
        </div>
        <h3 className="text-xl font-bold text-luga-dark mb-2">
          Solicitação enviada!
        </h3>
        <p className="text-luga-text-secondary text-sm mb-6">
          Nossa equipe entrará em contato em até 1 dia útil para confirmar sua
          demonstração.
        </p>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          data-event="click_whatsapp"
          className="btn-primary inline-flex"
        >
          Ou falar agora no WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 space-y-5"
      noValidate
    >
      {/* Campos ocultos para rastreamento UTM */}
      <input type="hidden" name="utm_source" value={utms.utm_source} />
      <input type="hidden" name="utm_medium" value={utms.utm_medium} />
      <input type="hidden" name="utm_campaign" value={utms.utm_campaign} />
      <input type="hidden" name="utm_content" value={utms.utm_content} />
      <input type="hidden" name="utm_term" value={utms.utm_term} />

      <div>
        <label
          htmlFor="lead_name"
          className="block text-sm font-semibold text-luga-dark mb-1.5"
        >
          Nome <span className="text-red-500">*</span>
        </label>
        <input
          id="lead_name"
          name="from_name"
          type="text"
          required
          placeholder="Seu nome"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-luga-accent focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="lead_company"
          className="block text-sm font-semibold text-luga-dark mb-1.5"
        >
          Empresa <span className="text-red-500">*</span>
        </label>
        <input
          id="lead_company"
          name="company"
          type="text"
          required
          placeholder="Nome da empresa"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-luga-accent focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="lead_phone"
          className="block text-sm font-semibold text-luga-dark mb-1.5"
        >
          WhatsApp <span className="text-red-500">*</span>
        </label>
        <input
          id="lead_phone"
          name="phone"
          type="tel"
          required
          placeholder="(21) 9 9999-9999"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-luga-accent focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="lead_segment"
          className="block text-sm font-semibold text-luga-dark mb-1.5"
        >
          Segmento
        </label>
        <select
          id="lead_segment"
          name="segment"
          defaultValue={defaultSegment ?? ""}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-luga-accent focus:border-transparent transition-all bg-white"
        >
          <option value="">Selecione seu segmento</option>
          {segments.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="lead_pain"
          className="block text-sm font-semibold text-luga-dark mb-1.5"
        >
          Principal dor hoje
        </label>
        <select
          id="lead_pain"
          name="main_pain"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-luga-accent focus:border-transparent transition-all bg-white"
        >
          <option value="">Selecione sua principal dificuldade</option>
          {pains.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="lead_current"
          className="block text-sm font-semibold text-luga-dark mb-1.5"
        >
          Sistema atual
        </label>
        <input
          id="lead_current"
          name="current_system"
          type="text"
          placeholder="Ex: planilha, caderno, outro sistema..."
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-luga-accent focus:border-transparent transition-all"
        />
      </div>

      {state === "error" && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        data-event="submit_lead_form"
        className="btn-primary w-full justify-center text-sm py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={16} />
            Agendar demonstração gratuita
          </>
        )}
      </button>
      <p className="text-xs text-luga-text-secondary text-center">
        Sem compromisso. Nossa equipe entra em contato em até 1 dia útil.
      </p>
    </form>
  );
}
