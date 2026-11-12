"use client";

import { useState, useRef } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { EMAILJS_CONFIG } from "@/lib/emailjs";
import { validateContactForm, clearFieldError, markInvalidField, formText } from "@/lib/form-validation";
import { attributionFields } from "@/lib/attribution";

type FormState = "idle" | "loading" | "success" | "error";

const segments = [
  "Permissionário CEASA",
  "Distribuidora de alimentos",
  "Distribuidora de bebidas",
  "Atacadista",
  "Outro",
];

export default function ContactForm({ buttonLabel = "Enviar mensagem" }: { buttonLabel?: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "loading" || !validateContactForm(e.currentTarget)) return;
    setState("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      from_name: formText(formData, "from_name"),
      from_email: formText(formData, "from_email"),
      phone: formText(formData, "phone"),
      company: formText(formData, "company"),
      segment: formText(formData, "segment"),
      message: formText(formData, "message"),
    };

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          ...data,
          ...attributionFields(),
          to_email: "lugaerp@gmail.com",
        },
        EMAILJS_CONFIG.publicKey
      );
      setState("success");
      formRef.current?.reset();
    } catch {
      setState("error");
      setErrorMsg(
        "Não foi possível enviar a mensagem. Por favor, tente novamente ou envie um e-mail diretamente para lugaerp@gmail.com"
      );
    }
  }

  if (state === "success") {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} className="text-emerald-500" />
        </div>
        <h3 className="text-xl font-bold text-luga-dark mb-2">Mensagem enviada!</h3>
        <p className="text-luga-text-secondary text-sm mb-6">
          Recebemos seu contato e responderemos em até 1 dia útil no e-mail informado.
        </p>
        <button
          onClick={() => setState("idle")}
          className="text-sm text-luga-accent hover:text-luga-royal underline transition-colors"
        >
          Enviar outra mensagem
        </button>
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
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="from_name" className="block text-sm font-semibold text-luga-dark mb-1.5">
            Nome completo <span className="text-red-500">*</span>
          </label>
          <input
            id="from_name"
            name="from_name"
            type="text"
            required
            placeholder="Seu nome completo"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-luga-accent focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label htmlFor="from_email" className="block text-sm font-semibold text-luga-dark mb-1.5">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            id="from_email"
            name="from_email"
            type="email"
            required
            placeholder="seu@email.com.br"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-luga-accent focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-luga-dark mb-1.5">
            Telefone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(21) 9 9999-9999"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-luga-accent focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-luga-dark mb-1.5">
            Nome da empresa
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Nome da empresa"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-luga-accent focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="segment" className="block text-sm font-semibold text-luga-dark mb-1.5">
          Segmento
        </label>
        <select
          id="segment"
          name="segment"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-luga-accent focus:border-transparent transition-all bg-white"
        >
          <option value="">Selecione seu segmento</option>
          {segments.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-luga-dark mb-1.5">
          Mensagem <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Descreva o que você precisa ou o que gostaria de saber sobre a Luga ERP..."
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-luga-accent focus:border-transparent transition-all resize-none"
        />
      </div>

      {state === "error" && (
        <div role="alert" className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="btn-primary w-full justify-center text-sm py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={16} />
            {buttonLabel}
          </>
        )}
      </button>
    </form>
  );
}
