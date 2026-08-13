import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const productLinks = [
  { href: "/funcionalidades", label: "Funcionalidades" },
  { href: "/demonstracao", label: "Agendar demonstração" },
  { href: "/#modulos", label: "Módulos" },
];

const segmentLinks = [
  { href: "/erp-para-distribuidoras", label: "ERP para Distribuidoras" },
  { href: "/erp-para-ceasa", label: "ERP para CEASA" },
  { href: "/erp-para-hortifruti", label: "ERP para Hortifruti" },
];

const companyLinks = [
  { href: "/sobre", label: "Sobre nós" },
  { href: "/contato", label: "Fale conosco" },
  { href: "/contato", label: "Suporte técnico" },
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
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-luga-text-tertiary leading-relaxed mb-5">
              <span className="text-white">Do mercado para o mercado.</span>
            </p>
            <p className="text-xs text-luga-text-tertiary leading-relaxed">
              Nascido no dia a dia do mercado. Feito para empresas de
              distribuição, hortifruti, atacado e alimentos.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Produto
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href + link.label}>
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

          {/* Segmentos */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Segmentos
            </h3>
            <ul className="space-y-3">
              {segmentLinks.map((link) => (
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
              Empresa
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
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
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-event="click_whatsapp"
                className="flex items-center gap-3 text-sm text-luga-text-tertiary hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors">
                  <WhatsAppIcon />
                </div>
                (21) 99645-2396
              </a>
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
                Quer ver o sistema antes de decidir?
              </p>
              <Link
                href="/demonstracao"
                data-event="click_demo"
                className="text-xs font-semibold text-luga-accent hover:text-luga-light transition-colors flex items-center gap-1"
              >
                Agendar demonstração gratuita
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
