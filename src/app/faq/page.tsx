import type { Metadata } from "next";
import Link from "next/link";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { ChapterMark } from "@/components/site/ChapterMark";
import { PageHero } from "@/components/page/PageHero";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Preguntas frecuentes · Despacho ADAF",
  description:
    "Respuestas concretas sobre el despacho, los procedimientos administrativos, honorarios y logística de la representación.",
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "website",
    url: `${siteUrl}/faq`,
    title: "Preguntas frecuentes · ADAF",
    description:
      "Respuestas a las preguntas que recibimos con mayor frecuencia sobre defensa fiscal, aduanera y administrativa.",
  },
};

type FAQ = { q: string; a: string };

const grupoDespacho: FAQ[] = [
  {
    q: "¿Cuánto cobran por una valoración inicial?",
    a: "La valoración inicial es sin costo. Revisamos la notificación, el oficio o la resolución que recibiste, te decimos qué tipo de procedimiento es y cuántos días tenemos para actuar. Si decides avanzar, formalizamos los honorarios en una propuesta escrita.",
  },
  {
    q: "¿Atienden casos fuera de Tijuana?",
    a: "Sí. La oficina está en Tijuana y trabajamos principalmente con clientes de Tijuana, Tecate, Rosarito y Baja California, pero la representación procesal puede llevarse a nivel federal ante el TFJA, juzgados de distrito y tribunales colegiados.",
  },
  {
    q: "¿La consulta es confidencial?",
    a: "Sí. Toda la información que nos compartes se maneja bajo el secreto profesional que exige la práctica jurídica. No discutimos casos fuera del equipo que los atiende y no usamos la información para ningún fin distinto a la valoración y eventual representación de tu asunto.",
  },
  {
    q: "¿Atienden de manera presencial o virtual?",
    a: "Ambas modalidades. Recibimos en la oficina de Nueva Tijuana en horario hábil y también atendemos por videollamada y WhatsApp cuando el cliente está fuera de la ciudad o necesita coordinar con sus contadores u otros asesores.",
  },
];

const grupoProcedimientos: FAQ[] = [
  {
    q: "¿Qué hago si llega una visita domiciliaria del SAT?",
    a: "Atender la diligencia, identificar a los visitadores con su orden de visita y credenciales, no firmar conformidad con hechos que no entiendas o no te consten, conservar copia del acta y contactarnos en el momento. Las primeras horas determinan en buena medida la posición de defensa.",
  },
  {
    q: "¿Qué pasa si me bloquearon los sellos digitales?",
    a: "El Código Fiscal de la Federación prevé un procedimiento de aclaración (artículo 17-H Bis) con plazo corto. Hay que iniciarlo de inmediato, aportando la documentación que demuestra la regularidad de las operaciones, antes de que la restricción se vuelva definitiva.",
  },
  {
    q: "¿Cuánto tiempo tengo para impugnar un crédito fiscal?",
    a: "El plazo general es de 30 días hábiles a partir de la notificación de la resolución, ya sea por la vía de recurso de revocación o de juicio contencioso administrativo (juicio de nulidad). El plazo se computa con días hábiles fiscales y corre aunque no hayas decidido todavía qué vía seguir.",
  },
  {
    q: "¿Qué es un PAMA?",
    a: "El Procedimiento Administrativo en Materia Aduanera (PAMA) es el procedimiento mediante el cual la autoridad aduanera embarga mercancía de manera precautoria cuando detecta o presume una irregularidad: clasificación arancelaria incorrecta, valor en aduana inexacto, omisión de regulaciones no arancelarias, entre otras. El plazo para ofrecer pruebas y alegatos es de 10 días hábiles desde el levantamiento del acta.",
  },
  {
    q: "¿Cuánto tarda un juicio de nulidad?",
    a: "En promedio entre 12 y 24 meses en primera instancia ante el Tribunal Federal de Justicia Administrativa. Si la sentencia es desfavorable, todavía es posible promover amparo directo, lo que extiende los plazos.",
  },
  {
    q: "¿Puedo pagar una multa o un crédito fiscal a plazos?",
    a: "Sí. Tanto el Código Fiscal de la Federación como la Ley del Seguro Social prevén pagos a plazos —hasta 36 mensualidades en el SAT y hasta 48 mensualidades en el IMSS, según el caso— pero solicitar el pago a plazos no suspende el plazo para impugnar. Conviene evaluar ambas vías en paralelo.",
  },
  {
    q: "¿En qué se diferencia un recurso de revocación de un juicio de nulidad?",
    a: "El recurso de revocación se interpone ante la propia autoridad que emitió el acto y suele ser más rápido y menos costoso. El juicio de nulidad se promueve ante un tribunal independiente —el TFJA o el Tribunal de Justicia Administrativa local— y permite un análisis más profundo y una suspensión más amplia. Sólo se puede elegir una vía, no ambas simultáneamente.",
  },
  {
    q: "¿Pueden embargarme las cuentas bancarias por adeudos fiscales?",
    a: "Sí, una vez que el crédito queda firme se inicia el procedimiento administrativo de ejecución (PAE) y la autoridad puede ordenar el embargo de cuentas bancarias y otros bienes. Por eso es crítico actuar dentro de los plazos para impugnar antes de que la resolución cause estado.",
  },
];

const grupoHonorarios: FAQ[] = [
  {
    q: "¿Cómo cobran sus servicios?",
    a: "Los honorarios se definen por iguala mensual, por etapa procesal o por proyecto, según la naturaleza del asunto. Después del diagnóstico inicial te entregamos una propuesta escrita con el alcance, los entregables y los honorarios, para que decidas si avanzamos.",
  },
  {
    q: "¿Existe un esquema de honorarios por éxito?",
    a: "Sólo en casos específicos donde sea procedente conforme a la práctica profesional. Cuando aplica, se documenta por escrito junto con los honorarios fijos correspondientes a la preparación y seguimiento del expediente.",
  },
  {
    q: "¿Cuánto cuesta el diagnóstico inicial?",
    a: "El diagnóstico inicial de la notificación o resolución que recibiste no tiene costo. Si el caso requiere una revisión documental más amplia —por ejemplo, una auditoría preventiva o un compliance— te lo proponemos por separado con honorarios definidos antes de empezar.",
  },
];

const grupoLogistica: FAQ[] = [
  {
    q: "¿Atienden en sus oficinas o también virtual?",
    a: "Las dos modalidades. La oficina está en Nueva Tijuana, Lunes a viernes de 09:00 a 17:00. También atendemos por videollamada y mantenemos comunicación por WhatsApp y correo durante el procedimiento.",
  },
  {
    q: "¿Trabajan con contadores externos?",
    a: "Sí. Coordinamos con el contador interno o externo del cliente cuando el caso lo requiere, especialmente en defensa fiscal y en revisiones del SAT o del IMSS. La estrategia jurídica y la información contable tienen que dialogar.",
  },
  {
    q: "¿Llevan asuntos en otros estados de la República?",
    a: "Sí, cuando hay representación procesal a nivel federal. La práctica está anclada en Baja California pero hemos llevado expedientes ante autoridades federales y tribunales en otras entidades cuando el caso del cliente lo requiere.",
  },
];

const allFaqs: FAQ[] = [
  ...grupoDespacho,
  ...grupoProcedimientos,
  ...grupoHonorarios,
  ...grupoLogistica,
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

function romanize(n: number): string {
  const r = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
  ];
  return r[n - 1] ?? String(n);
}

function FaqGroup({
  numeral,
  label,
  titulo,
  preguntas,
  startIndex,
}: {
  numeral: string;
  label: string;
  titulo: string;
  preguntas: FAQ[];
  startIndex: number;
}) {
  return (
    <section className="bg-background pt-20 pb-20 border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-12">
        <ChapterMark numeral={numeral} label={label} />
        <div className="grid grid-cols-12 gap-12 mt-10">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-serif text-[34px] leading-[1.12] font-semibold text-navy tracking-[-0.012em] sticky top-32">
              {titulo}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="border-t border-foreground/15">
              {preguntas.map((faq, i) => (
                <details
                  key={faq.q}
                  className="group border-b border-rule py-6 px-1 [&[open]]:bg-background-warm/40 transition-colors"
                >
                  <summary className="flex items-baseline gap-4 cursor-pointer list-none">
                    <span aria-hidden="true" className="font-serif italic text-[14px] text-olive shrink-0 w-7">
                      {romanize(startIndex + i + 1)}
                    </span>
                    <span className="font-serif text-[20px] leading-[1.3] font-medium text-navy tracking-[-0.005em] flex-1 group-hover:text-burgundy transition-colors">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-serif italic text-[20px] text-olive group-open:rotate-45 transition-transform duration-200 select-none"
                    >
                      +
                    </span>
                  </summary>
                  <div className="ml-11 mt-4 max-w-[640px]">
                    <p className="text-[15.5px] leading-[1.7] text-foreground/85">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FaqPage() {
  return (
    <>
      <Masthead />
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Inicio", href: "/" }, { label: "FAQ" }]}
          numeral="III"
          label="Preguntas frecuentes"
          h1="Preguntas frecuentes."
          lede="Respuestas concretas a lo que nos consultan con mayor frecuencia sobre el despacho, los procedimientos administrativos y la representación."
        />

        <FaqGroup
          numeral="I"
          label="Sobre el despacho"
          titulo="Sobre el despacho."
          preguntas={grupoDespacho}
          startIndex={0}
        />

        <FaqGroup
          numeral="II"
          label="Sobre los procedimientos"
          titulo="Sobre los procedimientos administrativos."
          preguntas={grupoProcedimientos}
          startIndex={grupoDespacho.length}
        />

        <FaqGroup
          numeral="III"
          label="Sobre honorarios"
          titulo="Sobre honorarios."
          preguntas={grupoHonorarios}
          startIndex={grupoDespacho.length + grupoProcedimientos.length}
        />

        <FaqGroup
          numeral="IV"
          label="Sobre logística"
          titulo="Sobre logística y modalidad."
          preguntas={grupoLogistica}
          startIndex={
            grupoDespacho.length +
            grupoProcedimientos.length +
            grupoHonorarios.length
          }
        />

        {/* CTA final navy */}
        <section className="bg-navy text-background relative overflow-hidden">
          <span className="absolute top-8 left-8 w-3 h-3 border-t border-l border-olive/60" />
          <span className="absolute top-8 right-8 w-3 h-3 border-t border-r border-olive/60" />
          <span className="absolute bottom-8 left-8 w-3 h-3 border-b border-l border-olive/60" />
          <span className="absolute bottom-8 right-8 w-3 h-3 border-b border-r border-olive/60" />

          <div className="max-w-[1280px] mx-auto px-12 py-20">
            <div className="flex items-baseline gap-4 mb-8 justify-center">
              <span aria-hidden="true" className="font-serif italic text-[14px] text-olive">V</span>
              <span className="w-[80px] h-[1px] bg-background/30" />
              <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-background/60">
                Atención
              </span>
            </div>
            <div className="max-w-[760px] mx-auto text-center">
              <h2 className="font-serif text-[36px] leading-[1.12] font-semibold tracking-[-0.012em]">
                ¿Tu pregunta no está aquí?
              </h2>
              <p className="text-[16px] text-background/80 mt-5 leading-[1.55] max-w-[600px] mx-auto">
                Escríbenos los detalles de tu asunto. Te respondemos en
                horario hábil con una valoración inicial sin costo.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
                <a
                  href="https://wa.me/526646475018"
                  className="inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
                >
                  Hablar por WhatsApp
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center bg-transparent text-background text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-background/40 hover:bg-background hover:text-navy transition-colors duration-200"
                >
                  Enviar mensaje
                </Link>
                <Link
                  href="https://wa.me/526646475018"
                  className="inline-flex items-center justify-center bg-transparent text-background text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-background/40 hover:bg-background hover:text-navy transition-colors duration-200"
                >
                  Agendar 20 min
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
