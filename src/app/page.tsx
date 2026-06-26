import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { HeroImmersive } from "@/components/site/HeroImmersive";
import { TwoSegments } from "@/components/site/TwoSegments";
import { AreasFilmstrip } from "@/components/site/AreasFilmstrip";
import { CoverageBand } from "@/components/site/CoverageBand";
import { PlazosSection } from "@/components/site/PlazosSection";
import { CinematicQuoteBand } from "@/components/site/CinematicQuoteBand";
import { MetodoSticky } from "@/components/site/MetodoSticky";
import { Principios } from "@/components/site/Principios";
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
        {/* Ritmo de superficies: D → L → W → D → L → D → W → L → W → L → D */}
        <HeroImmersive />        {/* I · dark */}
        <TwoSegments />          {/* — · light · 2 segmentos (urgencia / estratégico) */}
        <AreasFilmstrip />       {/* II · warm */}
        <CoverageBand />         {/* III · dark */}
        <PlazosSection />        {/* IV · light */}
        <CinematicQuoteBand />   {/* V · dark */}
        <MetodoSticky />         {/* VI · warm */}
        <Principios />           {/* VII · light */}
        <LeadMagnet />           {/* VIII · warm */}
        <Notas />                {/* IX · light */}
        <CTAFinal />             {/* X · dark */}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
