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
          title="Frontera · vista del cruce"
          tone="navy"
          aspect="21/9"
        />
        <Areas />
        <PullQuote cite="Cómo entendemos nuestra labor">
          Los plazos del procedimiento corren desde la notificación. La defensa
          empieza con la lectura cuidadosa del expediente, no con un escrito
          apurado.
        </PullQuote>
        <Pillars />
        <Resultados />
        <EditorialBand
          numeral="IV·b"
          title="Balanza"
          tone="olive"
          aspect="21/9"
        />
        <Metodo />
        <LeadMagnet />
        <Notas />
        <EditorialBand
          numeral="VII·b"
          title="Edificio institucional"
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
