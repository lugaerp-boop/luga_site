import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lugaerp.com.br"),
  title: {
    default: "Luga ERP — Sistema de Gestão para Distribuidoras e Atacadistas",
    template: "%s | Luga ERP",
  },
  description:
    "ERP especializado em distribuidoras e atacadistas de hortifrutigranjeiros. Financeiro, NF-e, boletos e estoque integrados. Tudo incluso.",
  keywords: [
    "ERP hortifruti",
    "sistema gestão CEASA",
    "ERP distribuidora",
    "atacadista software",
    "NF-e boletos integrados",
  ],
  authors: [{ name: "Luga ERP" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lugaerp.com.br",
    siteName: "Luga ERP",
    title: "Luga ERP — Gestão completa para distribuidoras e atacadistas",
    description:
      "Sistema ERP especializado em hortifruti e CEASA. Financeiro, NF-e, boletos e estoque integrados. Tudo incluso.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luga ERP — Gestão completa. Resultados reais.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luga ERP — Gestão completa para distribuidoras",
    description:
      "ERP especializado em hortifruti e CEASA. Tudo incluso.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
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
              "@type": "SoftwareApplication",
              name: "Luga ERP",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "ERP especializado em distribuidoras e atacadistas de hortifrutigranjeiros",
              url: "https://lugaerp.com.br",
              email: "lugaerp@gmail.com",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
