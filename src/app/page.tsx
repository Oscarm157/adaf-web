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
import { PullQuote } from "@/components/visual/PullQuote";
import { EditorialBand } from "@/components/visual/EditorialBand";

export default function Home() {
  return (
    <>
      <Masthead />
      <Header />
      <main>
        <Hero />
        <EditorialBand
          numeral="I·b"
          title="Frontera Tijuana — garita y vista cenital"
          tone="navy"
          aspect="21/9"
        />
        <Areas />
        <PullQuote cite="Principio de la práctica">
          La defensa empieza con la lectura del expediente. Los plazos legales
          corren desde la notificación, no desde el momento en que decides
          actuar.
        </PullQuote>
        <Pillars />
        <Resultados />
        <EditorialBand
          numeral="IV·b"
          title="Baja California — silueta y frontera norte"
          tone="olive"
          aspect="21/9"
        />
        <Metodo />
        <LeadMagnet />
        <Notas />
        <EditorialBand
          numeral="VII·b"
          title="Edificio institucional — fachada moderna frontal"
          tone="navy"
          aspect="21/9"
        />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
