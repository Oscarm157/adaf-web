import type { Metadata } from "next";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageHero } from "@/components/page/PageHero";
import { Prose, P, H2, UL, LI, Note } from "@/components/page/Prose";
import { siteConfig, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Cómo utiliza cookies y almacenamiento local el sitio web del despacho ADAF.",
  alternates: { canonical: "/politica-de-cookies" },
  openGraph: {
    title: "Política de cookies · ADAF",
    description:
      "Cómo utiliza cookies y almacenamiento local el sitio web del despacho ADAF.",
    url: `${siteUrl}/politica-de-cookies`,
    type: "article",
  },
};

export default function PoliticaCookiesPage() {
  return (
    <>
      <Masthead />
      <Header />
      <main>
        <PageHero
          numeral="III"
          label="Política de cookies"
          h1="Política de cookies."
          lede="Explicación de las cookies y del almacenamiento local que emplea el sitio, y de cómo puedes gestionarlos desde tu navegador."
          crumbs={[
            { label: "Inicio", href: "/" },
            { label: "Política de cookies" },
          ]}
        />

        <section className="bg-background pt-16 pb-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <Prose>
              <H2>I. Qué son las cookies</H2>
              <P>
                Una cookie es un archivo de texto que un sitio web guarda en
                tu dispositivo cuando lo visitas. Sirve para recordar
                información entre páginas o entre visitas: por ejemplo, para
                mantener abierta una sesión o conservar una preferencia.
                Junto a las cookies, los navegadores ofrecen otros
                mecanismos de almacenamiento local, como
                &ldquo;localStorage&rdquo; y &ldquo;sessionStorage&rdquo;,
                que guardan datos en el propio navegador sin enviarlos al
                servidor en cada solicitud.
              </P>

              <H2>II. Postura del despacho</H2>
              <P>
                Este sitio no utiliza cookies de análisis, de publicidad ni
                de rastreo de terceros. No hay herramientas de medición de
                audiencia, píxeles publicitarios ni perfiles de navegación
                sobre los visitantes. El almacenamiento que se describe a
                continuación es estrictamente el necesario para el
                funcionamiento del sitio.
              </P>

              <Note title="En resumen">
                No rastreamos tu navegación. La única cookie que emplea el
                sitio es funcional y opera solo dentro del área
                administrativa privada, a la que los visitantes no acceden.
              </Note>

              <H2>III. Cookies estrictamente necesarias</H2>
              <P>
                Son las que resultan indispensables para prestar un servicio
                que has solicitado. No requieren consentimiento y no pueden
                desactivarse sin afectar el funcionamiento del sitio.
              </P>
              <UL>
                <LI>
                  <strong>Cookie de sesión (&ldquo;session&rdquo;).</strong>{" "}
                  Cookie propia (first-party) que identifica la sesión de las
                  personas autorizadas para acceder al panel administrativo
                  del despacho. Se genera únicamente al iniciar sesión en esa
                  área privada y no se instala durante la navegación pública
                  del sitio.
                </LI>
              </UL>

              <H2>IV. Almacenamiento local del sitio</H2>
              <P>
                Además de la cookie anterior, el sitio puede usar
                almacenamiento local del navegador para dos fines técnicos.
                Estos datos permanecen en tu dispositivo y no constituyen
                rastreo:
              </P>
              <UL>
                <LI>
                  <strong>Preferencia de aviso de cookies.</strong>{" "}
                  Cuando cierras el aviso de cookies del sitio, se guarda esa
                  decisión en &ldquo;localStorage&rdquo; para no volver a
                  mostrártelo en cada visita.
                </LI>
                <LI>
                  <strong>Herramienta interna de revisión.</strong>{" "}
                  El sitio incluye un mecanismo de comentarios de uso interno del
                  despacho que se activa solo con un enlace específico. Ese
                  mecanismo guarda un identificador temporal en
                  &ldquo;sessionStorage&rdquo;, no en una cookie, y se borra
                  al cerrar la pestaña. No opera durante la navegación normal
                  de los visitantes.
                </LI>
              </UL>

              <H2>V. Servicios de terceros enlazados</H2>
              <P>
                El sitio ofrece enlaces a plataformas externas que abren en
                una pestaña o aplicación distinta. Al no estar incrustadas en
                estas páginas, no instalan cookies mientras navegas el sitio;
                si decides abrirlas, se rigen por sus propias políticas:
              </P>
              <UL>
                <LI>
                  <strong>Agenda en línea (Calendly).</strong> Los botones
                  para agendar una valoración te llevan al sitio de Calendly,
                  que gestiona sus propias cookies conforme a su política de
                  privacidad.
                </LI>
                <LI>
                  <strong>WhatsApp.</strong> El botón de contacto abre una
                  conversación en WhatsApp. Es un enlace directo y no coloca
                  cookies en este sitio.
                </LI>
              </UL>

              <H2>VI. Cómo desactivar o eliminar las cookies</H2>
              <P>
                Puedes bloquear, limitar o borrar las cookies y el
                almacenamiento local desde la configuración de tu navegador.
                El procedimiento varía según el programa que utilices, por lo
                general dentro del apartado de privacidad o de datos de
                navegación:
              </P>
              <UL>
                <LI>Google Chrome: Configuración · Privacidad y seguridad · Cookies y otros datos de sitios.</LI>
                <LI>Mozilla Firefox: Ajustes · Privacidad y seguridad · Cookies y datos del sitio.</LI>
                <LI>Safari: Preferencias · Privacidad · Gestionar datos de sitios web.</LI>
                <LI>Microsoft Edge: Configuración · Cookies y permisos del sitio.</LI>
              </UL>
              <P>
                Ten presente que bloquear la cookie de sesión impedirá el
                acceso al panel administrativo. Para la navegación pública
                del sitio no se requiere aceptar ninguna cookie.
              </P>

              <H2>VII. Dudas y contacto</H2>
              <P>
                Si tienes preguntas sobre esta política o sobre el
                tratamiento de tus datos, puedes escribirnos al correo{" "}
                {siteConfig.email}. Para el tratamiento de datos personales,
                consulta también nuestro aviso de privacidad.
              </P>

              <H2>VIII. Cambios a esta política</H2>
              <P>
                Si en el futuro el sitio incorpora herramientas que empleen
                nuevas cookies, esta política se actualizará antes de
                activarlas y la fecha de la parte inferior reflejará el
                cambio.
              </P>

              <P>
                <em>Última actualización: 1 de julio de 2026.</em>
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
