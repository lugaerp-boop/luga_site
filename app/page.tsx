import { pageMetadata } from "@/lib/metadata";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Problem from "@/components/home/Problem";
import ForWho from "@/components/home/ForWho";
import Modules from "@/components/home/Modules";
import HowItWorks from "@/components/home/HowItWorks";
import WhyLuga from "@/components/home/WhyLuga";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = pageMetadata(
  "Luga ERP — O ERP feito para distribuidoras e atacadistas de hortifrutigranjeiros",
  "Sistema ERP especializado em distribuidoras e atacadistas de hortifruti. Financeiro, NF-e, boletos e estoque integrados. Módulo fiscal no plano Completo.",
  "/"
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Problem />
      <ForWho />
      <Modules />
      <HowItWorks />
      <WhyLuga />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </>
  );
}
