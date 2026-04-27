import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Areas } from "@/components/site/Areas";
import { Pillars } from "@/components/site/Pillars";
import { Resultados } from "@/components/site/Resultados";
import { Metodo } from "@/components/site/Metodo";
import { LeadMagnet } from "@/components/site/LeadMagnet";
import { Notas } from "@/components/site/Notas";
import { CTAFinal } from "@/components/site/CTAFinal";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Masthead />
      <Header />
      <main>
        <Hero />
        <Areas />
        <Pillars />
        <Resultados />
        <Metodo />
        <LeadMagnet />
        <Notas />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
