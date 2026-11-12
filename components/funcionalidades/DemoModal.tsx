"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { X, ArrowRight, MonitorPlay } from "lucide-react";
import { useModalDialog } from "@/lib/use-modal-dialog";

export default function DemoModal() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useModalDialog(open, dialog);
  return <>
    <button type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-controls="demo-dialog"
      data-event="click_demo_info"
      className="inline-flex items-center justify-center gap-2 text-base py-3.5 px-7 rounded-lg font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors">
      <MonitorPlay size={18} /> Como é a demonstração
    </button>
    <dialog ref={dialog} id="demo-dialog" role="dialog" aria-modal="true" aria-labelledby="demo-title"
      aria-describedby="demo-description" onCancel={event => { event.preventDefault(); setOpen(false); }}
      onClick={event => { if (event.target === event.currentTarget) setOpen(false); }}
      className="w-[calc(100%-2rem)] max-w-xl max-h-[85dvh] rounded-2xl bg-white p-0 text-luga-dark shadow-2xl">
      <div className="relative p-6 sm:p-10">
        <button type="button" data-initial-focus onClick={() => setOpen(false)} aria-label="Fechar demonstração"
          className="absolute right-3 top-3 rounded-full p-2 hover:bg-gray-100"><X size={22} /></button>
        <MonitorPlay size={32} className="text-luga-royal mb-5" aria-hidden="true" />
        <h2 id="demo-title" className="text-2xl font-bold mb-4 pr-6">Conheça o Luga ao vivo</h2>
        <p id="demo-description" className="text-luga-text-secondary leading-relaxed mb-5">
          Na demonstração, nossa equipe apresenta o sistema e responde às dúvidas sobre a rotina da sua empresa.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-7">
          <li>Veja vendas, estoque e financeiro no sistema.</li>
          <li>Converse sobre os módulos e o plano para sua operação.</li>
          <li>Entenda os próximos passos de implantação e treinamento.</li>
        </ul>
        <Link href="/demonstracao" onClick={() => setOpen(false)} data-event="click_demo" className="btn-primary w-full">
          Solicitar demonstração <ArrowRight size={18} />
        </Link>
        <p className="text-xs text-luga-text-secondary mt-4 text-center">Gratuita e sem compromisso. Nossa equipe confirma o horário com você.</p>
      </div>
    </dialog>
  </>;
}
