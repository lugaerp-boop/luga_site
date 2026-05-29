import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";

const productLinks = [
  { href: "/funcionalidades", label: "Funcionalidades" },
  { href: "/contato", label: "Solicitar proposta" },
  { href: "/#modulos", label: "Módulos" },
];

const companyLinks = [
  { href: "/sobre", label: "Sobre nós" },
  { href: "/contato", label: "Fale conosco" },
];

const supportLinks = [
  { href: "/contato", label: "Suporte técnico" },
  { href: "/demonstracao", label: "Solicitar demonstração" },
  { href: "/contato", label: "Parceria comercial" },
];

export default function Footer() {
  return (
    <footer className="bg-luga-dark text-white" aria-label="Rodapé">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo-footer.png"
                alt="Luga ERP"
                width={200}
                height={67}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-luga-text-tertiary leading-relaxed mb-5">
              <span className="text-white">Gestão completa.</span>{" "}
              <span className="text-luga-accent">Resultados reais.</span>
            </p>
            <p className="text-xs text-luga-text-tertiary leading-relaxed">
              Especializado em distribuidoras e atacadistas de
              hortifrutigranjeiros. Desenvolvido para CEASAs do Rio de Janeiro.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Produto
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-luga-text-tertiary hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-luga-text-tertiary hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 mt-8">
              Suporte
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-luga-text-tertiary hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contato
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:lugaerp@gmail.com"
                className="flex items-center gap-3 text-sm text-luga-text-tertiary hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-luga-accent transition-colors">
                  <Mail size={14} />
                </div>
                lugaerp@gmail.com
              </a>
            </div>

            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-luga-text-tertiary mb-3">
                Ficou com dúvidas? Fale com nossa equipe comercial.
              </p>
              <Link
                href="/contato"
                className="text-xs font-semibold text-luga-accent hover:text-luga-light transition-colors flex items-center gap-1"
              >
                Entrar em contato
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-luga-text-tertiary">
            © {new Date().getFullYear()} Luga ERP. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/sobre" className="text-xs text-luga-text-tertiary hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/sobre" className="text-xs text-luga-text-tertiary hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
