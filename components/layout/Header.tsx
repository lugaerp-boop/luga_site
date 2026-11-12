"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useModalDialog } from "@/lib/use-modal-dialog";

const navLinks = [
  { href: "/funcionalidades", label: "Funcionalidades" },
  { href: "/#segmentos", label: "Segmentos" },
  { href: "/#planos", label: "Planos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useModalDialog(menuOpen, dialog);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => { window.removeEventListener("scroll", handleScroll); desktop.removeEventListener("change", closeOnDesktop); };
  }, []);

  return <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow ${scrolled ? "shadow-md" : "shadow-none"}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 lg:h-20 gap-6">
        <Link href="/" className="flex-shrink-0" aria-label="Luga ERP — página inicial"><LugaLogo /></Link>
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navegação principal">
          {navLinks.map(link => <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-700 hover:text-luga-royal">{link.label}</Link>)}
        </nav>
        <Link href="/demonstracao" data-event="click_demo" className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5">Agendar demonstração</Link>
        <button type="button" className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          onClick={() => setMenuOpen(true)} aria-label="Abrir menu" aria-haspopup="dialog" aria-controls="mobile-menu" aria-expanded={menuOpen}>
          <Menu size={24} />
        </button>
      </div>
    </div>
    <dialog ref={dialog} id="mobile-menu" role="dialog" aria-modal="true" aria-labelledby="menu-title"
      onCancel={event => { event.preventDefault(); setMenuOpen(false); }}
      className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-white p-6 text-luga-dark">
      <div className="flex items-center justify-between mb-6">
        <h2 id="menu-title" className="font-bold text-xl">Menu</h2>
        <button type="button" data-initial-focus onClick={() => setMenuOpen(false)} aria-label="Fechar menu" className="p-2 rounded-lg hover:bg-gray-100"><X size={24} /></button>
      </div>
      <nav className="flex flex-col gap-2" aria-label="Menu mobile">
        {navLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-lg font-semibold py-3 border-b border-gray-100">{link.label}</Link>)}
      </nav>
      <Link href="/demonstracao" onClick={() => setMenuOpen(false)} data-event="click_demo" className="btn-primary w-full text-center mt-6">Agendar demonstração gratuita</Link>
    </dialog>
  </header>;
}

function LugaLogo() {
  return <Image src="/logo-header.webp" alt="Luga ERP" width={980} height={430}
    sizes="(min-width: 1024px) 150px, 128px" className="w-32 lg:w-[150px] h-auto" priority />;
}
