import Link from "next/link";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export default function NotFound() {
  return (
    <>
      <Masthead />
      <Header />
      <main className="bg-background">
        <section className="max-w-[1280px] mx-auto px-12 py-32 md:py-40">
          <div className="flex items-baseline gap-4 mb-12 justify-center">
            <span className="font-serif italic text-[14px] text-olive">
              IV
            </span>
            <span className="w-[80px] h-[1px] bg-rule" />
            <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-muted">
              Página no encontrada
            </span>
          </div>

          <div className="text-center max-w-[720px] mx-auto">
            <p className="font-serif text-navy font-semibold text-[96px] md:text-[144px] leading-[0.95] tracking-[-0.02em]">
              IV<span className="text-olive">·</span>O
              <span className="text-olive">·</span>IV
            </p>

            <div className="w-[60px] h-[1px] bg-rule mx-auto my-12" />

            <h1 className="font-serif text-[40px] md:text-[48px] leading-[1.08] font-semibold text-navy tracking-[-0.014em]">
              Esta página no existe.
            </h1>
            <p className="font-serif italic text-[20px] leading-[1.55] text-foreground/80 mt-6 max-w-[520px] mx-auto">
              Verifica el enlace o vuelve al inicio.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
              >
                Volver al inicio
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center bg-transparent text-navy text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-navy/30 hover:bg-navy hover:text-background transition-colors duration-200"
              >
                Ver áreas de práctica
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
