import type { Metadata } from "next";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageHero } from "@/components/page/PageHero";
import { Prose, P, H2 } from "@/components/page/Prose";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos y condiciones de uso del sitio web del despacho ADAF.",
  alternates: { canonical: "/terminos-y-condiciones" },
  openGraph: {
    title: "Términos y condiciones · ADAF",
    description:
      "Términos y condiciones de uso del sitio web del despacho ADAF.",
    url: `${siteUrl}/terminos-y-condiciones`,
    type: "article",
  },
};

export default function TerminosPage() {
  return (
    <>
      <Masthead />
      <Header />
      <main>
        <PageHero
          numeral="II"
          label="Términos y condiciones"
          h1="Términos y condiciones de uso del sitio."
          lede="Documento que rige el acceso y uso del sitio web del despacho."
          crumbs={[
            { label: "Inicio", href: "/" },
            { label: "Términos y condiciones" },
          ]}
        />

        <section className="bg-background pt-16 pb-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <Prose>
              <H2>I. Aceptación de los términos</H2>
              <P>
                El acceso y uso del sitio web del despacho ADAF · Asesoría
                y Defensa Aduanera Fiscal implica la aceptación plena de
                estos términos y condiciones. Si no estás de acuerdo con
                alguno de los términos aquí descritos, abstente de utilizar
                el sitio.
              </P>

              <H2>II. Naturaleza informativa del sitio</H2>
              <P>
                Los contenidos del sitio (notas técnicas, descripciones de
                servicios, recursos descargables y respuestas a preguntas
                frecuentes) tienen carácter exclusivamente informativo. No
                constituyen asesoría jurídica sobre un caso particular ni
                generan, por sí mismos, una relación abogado-cliente entre
                el visitante y el despacho.
              </P>
              <P>
                La relación profesional con el despacho se formaliza
                únicamente mediante la suscripción de un contrato escrito
                de prestación de servicios o de una carta de aceptación de
                encargo, previa entrevista, valoración del expediente y
                aceptación expresa por ambas partes.
              </P>

              <H2>III. Propiedad intelectual</H2>
              <P>
                Los textos, marcas, logotipos, diseños, fotografías,
                materiales descargables y demás contenidos del sitio son
                propiedad del despacho o se utilizan con licencia. Su
                reproducción total o parcial, distribución, modificación o
                uso comercial sin autorización previa por escrito está
                prohibida y puede dar lugar a las acciones legales que
                correspondan.
              </P>
              <P>
                Se permite la cita de fragmentos breves para fines
                académicos, periodísticos o de comentario crítico, siempre
                que se atribuya correctamente la fuente al despacho ADAF.
              </P>

              <H2>IV. Limitación de responsabilidad</H2>
              <P>
                El despacho elabora los contenidos del sitio con base en la
                legislación vigente y en los criterios de práctica
                profesional al momento de su publicación. No se garantiza
                que la información permanezca actualizada en todo momento
                ni que sea aplicable a un caso específico, ya que cada
                expediente requiere análisis propio.
              </P>
              <P>
                El despacho no será responsable por daños o perjuicios
                derivados de decisiones tomadas con base exclusiva en el
                contenido informativo del sitio o de los recursos
                descargables, sin la valoración profesional previa del
                asunto concreto.
              </P>

              <H2>V. Enlaces externos</H2>
              <P>
                El sitio puede contener enlaces a páginas, recursos o
                publicaciones de terceros (autoridades, tribunales,
                medios). Estos enlaces se incluyen como referencia y
                conveniencia del usuario. El despacho no controla ni se
                responsabiliza por el contenido, las prácticas de
                privacidad ni la disponibilidad de los sitios externos.
              </P>

              <H2>VI. Jurisdicción y legislación aplicable</H2>
              <P>
                Estos términos y condiciones se rigen por las leyes de los
                Estados Unidos Mexicanos. Para la interpretación,
                ejecución y cumplimiento de los mismos, las partes se
                someten a la jurisdicción de los tribunales competentes
                con sede en Tijuana, Baja California, México, renunciando
                a cualquier otro fuero que pudiera corresponderles por
                razón de domicilio presente o futuro.
              </P>

              <P>
                <em>Última actualización: 27 de abril de 2026.</em>
              </P>
            </Prose>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
