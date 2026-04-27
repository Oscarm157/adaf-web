import type { Metadata } from "next";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageHero } from "@/components/page/PageHero";
import { Prose, P, H2, UL, LI, Note } from "@/components/page/Prose";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad integral del despacho ADAF en cumplimiento de la LFPDPPP. Plantilla pendiente de validación legal del despacho.",
  alternates: { canonical: "/aviso-de-privacidad" },
  openGraph: {
    title: "Aviso de privacidad · ADAF",
    description:
      "Aviso de privacidad integral del despacho en cumplimiento de la LFPDPPP.",
    url: `${siteUrl}/aviso-de-privacidad`,
    type: "article",
  },
};

export default function AvisoPrivacidadPage() {
  return (
    <>
      <Masthead />
      <Header />
      <main>
        <PageHero
          numeral="I"
          label="Aviso de privacidad"
          h1="Aviso de privacidad integral."
          lede="Documento elaborado en cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento. Pendiente de validación legal del despacho."
          crumbs={[
            { label: "Inicio", href: "/" },
            { label: "Aviso de privacidad" },
          ]}
        />

        <section className="bg-background pt-16 pb-24">
          <div className="max-w-[1280px] mx-auto px-12">
            <Prose>
              <Note title="Plantilla pendiente de validación">
                Esta es una plantilla orientativa. La versión final debe ser
                revisada y firmada por el despacho antes de su publicación
                pública.
              </Note>

              <H2>I. Identidad y domicilio del responsable</H2>
              <P>
                ADAF — Asesoría y Defensa Aduanera Fiscal (en adelante,
                &ldquo;el responsable&rdquo;), con domicilio en Blvd. de las
                Bellas Artes 19213, Local 15, Nueva Tijuana, 22435 Tijuana,
                Baja California, México, y correo electrónico
                juridicoadaf@gmail.com, es responsable del tratamiento de
                tus datos personales conforme al presente aviso.
              </P>

              <H2>II. Datos personales que se recaban</H2>
              <P>
                El responsable recaba datos personales de identificación y
                contacto cuando solicitas una valoración, descargas un
                recurso, te suscribes al boletín o nos escribes a través
                del sitio:
              </P>
              <UL>
                <LI>Nombre completo.</LI>
                <LI>Correo electrónico.</LI>
                <LI>Teléfono de contacto.</LI>
                <LI>
                  Razón social, RFC y datos generales del asunto, cuando los
                  proporcionas para una valoración.
                </LI>
                <LI>
                  Información adicional que voluntariamente compartas en el
                  formulario de contacto o por canales electrónicos
                  (descripción del caso, documentación adjunta).
                </LI>
              </UL>
              <P>
                No se recaban datos personales sensibles a través del sitio
                web. Cuando un asunto profesional requiera tratar datos
                sensibles, se firmará el aviso correspondiente con el
                consentimiento expreso del titular.
              </P>

              <H2>III. Finalidades del tratamiento</H2>
              <P>
                <strong>Primarias.</strong> Las siguientes finalidades son
                necesarias para la relación con el titular y no requieren
                consentimiento adicional:
              </P>
              <UL>
                <LI>
                  Atender solicitudes de valoración y dar seguimiento a las
                  consultas recibidas.
                </LI>
                <LI>
                  Integrar y dar seguimiento al expediente del cliente
                  cuando se contraten servicios profesionales.
                </LI>
                <LI>
                  Cumplir con obligaciones legales y contractuales del
                  responsable.
                </LI>
                <LI>
                  Entregar materiales descargables solicitados (guías,
                  notas técnicas).
                </LI>
              </UL>
              <P>
                <strong>Secundarias.</strong> Las siguientes finalidades no
                son necesarias para la relación primaria; el titular puede
                oponerse a ellas en cualquier momento:
              </P>
              <UL>
                <LI>
                  Envío del boletín del despacho con notas técnicas,
                  reformas y comentarios sobre criterios de autoridad.
                </LI>
                <LI>
                  Envío de invitaciones a eventos o publicaciones del
                  despacho.
                </LI>
              </UL>

              <H2>IV. Transferencias</H2>
              <P>
                Los datos personales no se transfieren a terceros sin tu
                consentimiento, salvo en los supuestos previstos en el
                artículo 37 de la LFPDPPP (autoridades competentes,
                cumplimiento de obligaciones legales del responsable,
                procedimientos jurisdiccionales). Cuando se contraten
                proveedores tecnológicos (alojamiento, correo, agenda) que
                actúen como encargados, se les obliga contractualmente a
                tratar los datos conforme al presente aviso.
              </P>

              <H2>V. Derechos ARCO y procedimiento</H2>
              <P>
                Como titular, tienes derecho a acceder, rectificar y
                cancelar tus datos personales, así como a oponerte al
                tratamiento o revocar el consentimiento que hubieras
                otorgado. Para ejercer cualquiera de estos derechos puedes
                enviar tu solicitud al correo electrónico
                juridicoadaf@gmail.com con la siguiente información:
              </P>
              <UL>
                <LI>Nombre completo y medio para recibir respuesta.</LI>
                <LI>
                  Documento que acredite tu identidad (o representación
                  legal del titular).
                </LI>
                <LI>
                  Descripción clara y precisa de los datos respecto de los
                  que ejerces el derecho.
                </LI>
                <LI>
                  Cualquier elemento o documento que facilite la
                  localización de los datos.
                </LI>
              </UL>
              <P>
                El responsable comunicará la determinación adoptada en el
                plazo previsto en la LFPDPPP a partir de la recepción de la
                solicitud completa.
              </P>

              <H2>VI. Medios para revocar el consentimiento</H2>
              <P>
                Puedes revocar el consentimiento que nos hayas otorgado
                para el tratamiento de tus datos personales enviando un
                correo a juridicoadaf@gmail.com con tu nombre completo y la
                indicación expresa de revocación. La revocación surtirá
                efectos respecto de tratamientos posteriores y no afectará
                las operaciones realizadas antes de su recepción.
              </P>

              <H2>VII. Cambios al aviso</H2>
              <P>
                El presente aviso podrá ser modificado para reflejar
                cambios en la operación del despacho, en la legislación
                aplicable o en las prácticas de privacidad. Las
                modificaciones se publicarán en esta misma página con la
                fecha de actualización correspondiente; el uso continuado
                del sitio implica el conocimiento de la versión vigente.
              </P>

              <H2>VIII. Fecha de última actualización</H2>
              <P>Última actualización: 27 de abril de 2026.</P>
              <P>
                <em>[Pendiente de validación legal por ADAF]</em>
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
