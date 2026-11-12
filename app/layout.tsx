import type { Metadata } from "next";
import { Suspense } from 'react';
import { pageMetadata } from '@/lib/metadata';
import { SITE_URL, SITE_EMAIL, SITE_DESCRIPTION, siteUrl } from '@/lib/site';
import { INSTAGRAM_URL } from '@/lib/instagram';
import AttributionTracker from '@/components/shared/AttributionTracker';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  ...pageMetadata('Luga ERP — Sistema de Gestão para Distribuidoras e Atacadistas', SITE_DESCRIPTION, '/'),
  metadataBase: new URL(SITE_URL),
  authors: [{ name: 'Luga ERP' }],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              '@graph': [
                { '@type': 'Organization', '@id': siteUrl('/#organization'),
                  name: 'Luga ERP', url: SITE_URL, email: SITE_EMAIL,
                  logo: siteUrl('/logo-header.webp'), sameAs: [INSTAGRAM_URL] },
                { '@type': 'SoftwareApplication', name: 'Luga ERP',
                  applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
                  description: SITE_DESCRIPTION, url: SITE_URL,
                  publisher: { '@id': siteUrl('/#organization') } },
              ],
            }).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
        <Suspense fallback={null}><AttributionTracker /></Suspense>
        <Header />
        <main id="conteudo" tabIndex={-1} className="flex-1 min-w-0">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
