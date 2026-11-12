"use client";

import { useState, useRef } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { EMAILJS_CONFIG } from "@/lib/emailjs";
import { whatsappUrl } from "@/lib/whatsapp";
import { attributionFields } from "@/lib/attribution";
import { validateContactForm, clearFieldError, markInvalidField, formText } from "@/lib/form-validation";

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
  const submitting = useRef(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting.current || !validateContactForm(e.currentTarget)) return;
    submitting.current = true;
    setState("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      from_name: formText(formData, "from_name"),
      company: formText(formData, "company"),
      phone: formText(formData, "phone"),
      segment: formText(formData, "segment"),
      main_pain: formText(formData, "main_pain"),
      current_system: formText(formData, "current_system"),
      ...attributionFields(),
    };

    try {
      if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
        throw new Error("Contact integration is not configured");
      }
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
    } finally {
      submitting.current = false;
    }
  }

  if (state === "success") {
    return (
      <div role="status" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 text-center">
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
      onInput={clearFieldError}
      onInvalidCapture={markInvalidField}
      aria-busy={state === "loading"}
    >
      <div>
        <label
          htmlFor="lead_name"
          className="block text-sm font-semibold text-luga-dark mb-1.5"
        >
          Nome <span className="text-red-500">*</span>
        </label>
        <input
          id="lead_name"
          name="from_name" autoComplete="name" maxLength={120}
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
          name="company" autoComplete="organization" maxLength={160}
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
          name="phone" autoComplete="tel" inputMode="tel" maxLength={24}
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

      <details className="rounded-lg border border-gray-200 p-4">
        <summary className="cursor-pointer text-sm font-semibold text-luga-royal">Conte um pouco mais (opcional)</summary>
        <div className="mt-4 space-y-5">
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
          name="current_system" maxLength={160}
          type="text"
          placeholder="Ex: planilha, caderno, outro sistema..."
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-luga-accent focus:border-transparent transition-all"
        />
      </div>

        </div>
      </details>

      {state === "error" && (
        <div role="alert" className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          <div>{errorMsg}{" "}<a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="font-semibold underline">Falar no WhatsApp</a></div>
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
            Solicitar demonstração gratuita
          </>
        )}
      </button>
      <p className="text-xs text-luga-text-secondary text-center">
        Sem compromisso. Nossa equipe entra em contato em até 1 dia útil.
      </p>
    </form>
  );
}
