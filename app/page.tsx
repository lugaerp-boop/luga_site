import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ForWho from "@/components/home/ForWho";
import Modules from "@/components/home/Modules";
import HowItWorks from "@/components/home/HowItWorks";
import WhyLuga from "@/components/home/WhyLuga";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Luga ERP — O ERP feito para distribuidoras e atacadistas de hortifrutigranjeiros",
  description:
    "Sistema ERP especializado em distribuidoras e atacadistas de hortifruti. Financeiro, NF-e, boletos e estoque integrados. R$ 900/mês tudo incluso, sem contrato.",
  alternates: { canonical: "https://lugaerp.com.br" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ForWho />
      <Modules />
      <HowItWorks />
      <WhyLuga />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
