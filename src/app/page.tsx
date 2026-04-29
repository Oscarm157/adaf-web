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
import { AuthoritiesBand } from "@/components/visual/AuthoritiesBand";
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
          src="/editorial/editorial-i-frontera-customs.png"
          alt="Filas de tráileres bajo el cobertizo de aduanas al atardecer"
        />
        <Areas />
        <AuthoritiesBand />
        <Pillars />
        <Resultados />
        <EditorialBand
          numeral="IV·b"
          title="Balanza"
          tone="olive"
          aspect="3/2"
          src="/editorial/editorial-iii-balanza.png"
          alt="Balanza de dos platos sobre superficie sage-olive"
        />
        <Metodo />
        <LeadMagnet />
        <Notas />
        <EditorialBand
          numeral="VII·b"
          title="Edificio institucional"
          tone="navy"
          aspect="3/2"
          src="/editorial/editorial-viii-edificio.png"
          alt="Edificio federal modernista mexicano, fachada simétrica"
        />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
