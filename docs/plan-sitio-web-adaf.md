# Plan — Sitio Web ADAF (estructura + copy completo + ejecución)

## Contexto

ADAF (Asesoría y Defensa Aduanera Fiscal) es un despacho jurídico en Tijuana con 25 años defendiendo casos en materia aduanera, fiscal, IMSS, COEPRIS, SCT y administrativa. Hoy no tienen sitio web funcional (`adafsolucionesfiscales.com` está caído), su presencia en Facebook está fragmentada en dos páginas con datos inconsistentes y sin reseñas, y el público objetivo (PYME importadora, transportistas, empresarios fronterizos) los busca por Google.

**Objetivo del proyecto:** lanzar un sitio web informativo, formal y corporativo (no publicitario, no vendehumos), que (1) consolide la marca digital, (2) capture casos calificados a través de WhatsApp, formulario y agenda, y (3) construya autoridad técnica con contenido propio. Tono: profesional, claro, explicativo. Público: PYME y empresarios fronterizos en mentalidad de urgencia o estratégica.

**Workflow acordado:**
1. Diseñar Home + 1 página interna en Stitch para validar estilo visual (esta entrega).
2. Iterar con `/premium-frontend` hasta aprobación.
3. Generar las páginas restantes con el sistema aprobado.
4. Build en Next.js + Tailwind + Vercel.

---

## Decisiones tomadas (resumen ejecutivo)

| Tema | Decisión |
|---|---|
| Alcance v1 | 10 sub-páginas completas de servicios |
| Equipo | Sin sección en v1 (agregar cuando haya fotos profesionales) |
| Casos de éxito | Sección "Resultados" en términos generales (años, áreas, rangos) |
| CTAs | WhatsApp + Formulario + Agendar llamada al mismo nivel |
| Idioma | Español únicamente |
| Tel/email oficial | 664 647 5018 / juridicoadaf@gmail.com |
| Lead magnet | PDF "Las primeras 72 horas" redactado completo en v1 |
| Blog | 3 entradas redactadas al lanzamiento |
| Posicionamiento | Defensa integral neutra (fiscal + aduanera + administrativa) |
| Tratamiento | Tú (formal pero cercano) |
| Dominio | Recuperar `adafsolucionesfiscales.com` |
| Aviso legal | Plantilla redactada, despacho valida |
| Estilo visual | Claro/corporativo con paleta del logo |

---

## Identidad visual

### Paleta (extraída del logo)

| Rol | Color | Hex aprox. | Uso |
|---|---|---|---|
| Primario corporativo | Azul marino profundo | `#0F2A47` | Header, títulos, links |
| Acento institucional | Vino / burgundy | `#7A1F38` | CTAs primarios, hover, detalles |
| Acento sutil | Verde olivo / mostaza | `#9B8F2E` | Highlights, viñetas, separadores |
| Texto principal | Negro suave | `#111418` | Body |
| Fondo principal | Blanco hueso | `#FAFAF7` | Páginas |
| Fondo secundario | Gris muy claro | `#F1EFEA` | Bloques alternados |
| Borde / divisores | Gris cálido | `#E2DED5` | |

**Reglas:** sitio claro/luminoso. Sin dark mode. Vino y olivo como acentos institucionales, no decoración. Generosos espacios en blanco, ritmo editorial.

### Tipografía

- **Display / títulos:** serif corporativa con peso (sugerencia: `Source Serif 4`, `Cormorant Garamond` o `Libre Caslon`). Hereda el carácter del wordmark del logo.
- **Body / UI:** sans-serif neutra y legible (`Inter`, `Söhne` o `IBM Plex Sans`).
- **Tamaños:** H1 56–64 px desktop / 36 px mobile. Body 17 px / 1.6 línea.

### Iconografía

- Iconos line-art finos (Phosphor, Lucide). Stroke 1.5 px. Sin colores planos sólidos saturados.
- Sin ilustraciones cartoonish. Si hay imagen, fotografía documental sobria (frontera, despacho, papelería oficial) — placeholder hasta que el cliente entregue fotos profesionales.

### Componentes base

- Cards con borde sutil, no sombras pesadas.
- Botones: vino sólido (primario) / borde azul marino (secundario) / texto subrayado (terciario).
- Tablas de plazos y datos con cabecera vino o azul marino.
- Citas legales / referencias en panel olivo claro.

---

## Arquitectura completa del sitio

```
/ (Home)
/nosotros
/servicios
  /servicios/defensa-aduanera
  /servicios/defensa-fiscal-sat
  /servicios/defensa-imss-infonavit
  /servicios/defensa-coepris
  /servicios/defensa-sct-transporte
  /servicios/amparos-fiscales
  /servicios/multas-comercio-exterior
  /servicios/recurso-revocacion-juicio-nulidad
  /servicios/defensa-penal-fiscal
  /servicios/asesoria-preventiva-compliance
/resultados              ← reemplaza "casos de éxito" con datos generales
/blog
  /blog/[slug]            ← 3 entradas iniciales
/faq
/contacto
/recursos/72-horas        ← landing de lead magnet
/aviso-de-privacidad
/terminos-y-condiciones
/404
```

**Footer global:** logo · datos de contacto · mapa mini · enlaces a servicios principales · suscripción al boletín · aviso de privacidad y términos · año.

**Header global:** logo izquierda · navegación (Nosotros, Servicios ↓, Resultados, Blog, FAQ) · CTA "Agenda tu valoración" derecha · botón WhatsApp flotante en todas las páginas.

---

## Copy maestro por página

### Home

**Hero**
- **Eyebrow:** Despacho jurídico en Tijuana · Frontera norte
- **H1:** Defensa fiscal, aduanera y administrativa con criterio técnico.
- **Subtítulo:** 25 años representando a empresarios, importadores y transportistas ante SAT, Aduana, IMSS, COEPRIS, SCT y tribunales federales.
- **CTA primario:** Agenda tu valoración (botón vino)
- **CTA secundario:** Hablar por WhatsApp
- **CTA terciario:** Conocer servicios (link)
- **Imagen / lado derecho:** placeholder de fachada del despacho o documental sobria.

**Bloque 1 — Áreas de práctica (grid 2x5 o carrusel)**
Tarjeta por servicio, cada una con un encabezado-pregunta + 1 línea + link.
- ¿Te embargaron mercancía en aduana? → Defensa aduanera
- ¿El SAT te notificó un crédito fiscal? → Defensa fiscal SAT
- ¿IMSS te liquidó capitales constitutivos? → Defensa IMSS / INFONAVIT
- ¿COEPRIS te impuso una sanción sanitaria? → Defensa COEPRIS
- ¿Recibiste una multa de SCT en autotransporte? → Defensa SCT
- ¿Necesitas amparar un acto de autoridad? → Amparos fiscales
- ¿Te aplicaron una multa de comercio exterior? → Multas de comercio exterior
- ¿Quieres impugnar una resolución administrativa? → Recurso de revocación / Juicio de nulidad
- ¿Estás siendo investigado por delitos fiscales? → Defensa penal-fiscal
- ¿Quieres prevenir contingencias antes de que ocurran? → Asesoría preventiva y compliance

**Bloque 2 — Por qué ADAF (3 columnas)**
- **Trayectoria comprobada.** 25 años representando casos en materia aduanera, fiscal y administrativa en la frontera norte. Conocemos los criterios de las autoridades locales y los tiempos reales de cada procedimiento.
- **Trato directo y confidencial.** Cada caso lo lleva un abogado responsable de principio a fin. La información que nos compartes se maneja con la reserva que exige el secreto profesional.
- **Estrategia técnica, no plantillas.** Antes de actuar, revisamos el expediente, los plazos y las pruebas. Te explicamos qué procede, qué riesgos hay y qué resultado realista podemos esperar.

**Bloque 3 — Resultados (datos generales)**
- 25 años de práctica continua
- Casos representados ante SAT, ANAM (antes SAT-AGA), IMSS, INFONAVIT, COEPRIS, SCT, TFJA y juzgados de distrito
- Cobertura: Tijuana, Tecate, Rosarito y zona fronteriza norte
- Especialización combinada en derecho fiscal, aduanero, administrativo y penal-fiscal

**Bloque 4 — Cómo trabajamos (4 pasos numerados)**
1. **Valoración inicial.** Revisamos la notificación, el oficio o la resolución que recibiste. Te decimos qué tipo de procedimiento es y cuántos días tenemos para actuar.
2. **Diagnóstico técnico.** Analizamos expediente, fundamento legal de la autoridad y posibles vías de defensa (recurso administrativo, juicio de nulidad, amparo).
3. **Estrategia y propuesta.** Te presentamos por escrito el plan de defensa, los honorarios y los tiempos estimados. Tú decides si avanzamos.
4. **Representación.** Llevamos el caso ante la autoridad o tribunal correspondiente. Te informamos del avance en cada etapa procesal.

**Bloque 5 — Recurso descargable (lead magnet)**
- **Título:** Guía gratuita: Las primeras 72 horas
- **Descripción:** Si recibiste una visita domiciliaria, un crédito fiscal o un embargo precautorio, las primeras 72 horas son críticas. Esta guía te explica qué hacer, qué no firmar y cuáles son tus derechos antes de contratar a un abogado.
- **CTA:** Descargar la guía (formulario inline: nombre, email, teléfono opcional)

**Bloque 6 — Blog destacado**
3 últimas entradas como cards.

**Bloque 7 — Bloque de contacto final**
- **H2:** ¿Tienes un asunto que requiere atención inmediata?
- Subtítulo: Cuéntanos brevemente tu caso. Te respondemos en horario hábil con una valoración inicial sin costo.
- 3 botones lado a lado: WhatsApp · Formulario · Agendar llamada (Calendly)

---

### Nosotros (`/nosotros`)

**Hero**
- **H1:** Un despacho construido caso por caso.
- **Subtítulo:** ADAF Asesoría y Defensa Aduanera Fiscal nació para dar a empresarios e importadores de la frontera norte una representación técnica sólida frente a las autoridades fiscales y aduaneras.

**Sección 1 — La firma**
> Llevamos 25 años representando casos ante la Secretaría de Hacienda, la Administración Nacional de Aduanas, el IMSS, COEPRIS, la SCT, el Tribunal Federal de Justicia Administrativa y los juzgados de distrito. En ese tiempo hemos visto cómo las reglas, los criterios y la presión recaudatoria cambian; lo que no cambia es lo que el contribuyente necesita: claridad sobre lo que está pasando, una estrategia honesta y representación rigurosa en cada etapa del procedimiento.
>
> Trabajamos principalmente con empresarios, importadores, transportistas y profesionistas con actividad empresarial en Tijuana, Tecate, Rosarito y la zona fronteriza. La mayoría de los casos que atendemos llegan en momentos de presión —una visita domiciliaria, un embargo precautorio en frontera, una notificación de crédito fiscal— y la primera tarea es siempre la misma: ordenar la información, identificar los plazos y proponer un curso de acción realista.

**Sección 2 — Cómo entendemos nuestra labor (3 valores)**
- **Confidencialidad.** Lo que nos compartes pertenece al expediente y al secreto profesional. No discutimos casos fuera del equipo que los atiende.
- **Transparencia.** Te decimos qué procede, qué no procede y por qué. Si la mejor recomendación es no litigar, también te lo decimos.
- **Compromiso técnico.** Cada caso se construye sobre el expediente, no sobre supuestos. Antes de presentar un escrito, lo revisamos.

**Sección 3 — Áreas de especialización**
Lista de áreas con link a cada servicio.

**Sección 4 — Equipo**
> *(Placeholder)* La sección de equipo se incorporará en una siguiente fase, una vez completada la sesión de fotografía profesional. Si necesitas saber con quién hablarías, contáctanos directamente.

**CTA final:** Agenda tu valoración + WhatsApp.

---

### Servicios — Hub (`/servicios`)

**Hero**
- **H1:** Áreas de práctica.
- **Subtítulo:** Diez áreas de defensa especializada. Elige la que corresponde al asunto que tienes en proceso, o cuéntanos tu caso y te orientamos.

**Listado** — 10 cards con: ícono, título, pregunta-gancho, 2 líneas de descripción, link. Mismas tarjetas que en el Home pero en formato hub completo con descripción extendida.

---

### Estructura común para cada sub-página de servicio

Cada `/servicios/[slug]` sigue esta plantilla idéntica para mantener consistencia y facilitar SEO:

1. **Hero:** H1 con la pregunta del prospecto + subtítulo con el "qué" del servicio + 2 CTAs.
2. **¿Qué es y cuándo aplica?** 2-3 párrafos en lenguaje claro.
3. **¿Cómo te ayudamos?** Pasos del proceso (4-6 pasos).
4. **Plazos y consecuencias.** Tabla o lista. Crítico — el cliente lee primero esta sección.
5. **Documentos que necesitamos.** Bullet list para que el prospecto llegue preparado.
6. **Resultado esperado.** Realista, sin promesas absolutas.
7. **FAQ específico (3-5 preguntas).**
8. **CTA final** con WhatsApp + Formulario.

A continuación el copy completo de las 10 sub-páginas.

---

#### `/servicios/defensa-aduanera`

**H1:** Defensa aduanera ante embargo precautorio, PAMA y multas de comercio exterior.
**Subtítulo:** Si la autoridad aduanera retuvo tu mercancía, inició un Procedimiento Administrativo en Materia Aduanera (PAMA) o te notificó una multa, hay plazos cortos para responder. Te representamos ante ANAM y los tribunales federales.

**¿Qué es y cuándo aplica?**
> Cuando ingresas mercancía a territorio nacional, la autoridad aduanera puede iniciar un procedimiento si detecta —o presume— una irregularidad: clasificación arancelaria incorrecta, valor en aduana inexacto, falta de regulaciones no arancelarias, omisión de impuestos al comercio exterior, o documentación inconsistente. El PAMA es el procedimiento mediante el cual la autoridad embarga la mercancía de manera precautoria mientras determina si hubo infracción.
>
> Necesitas defensa aduanera si: (1) te embargaron mercancía en frontera o en recinto fiscalizado, (2) recibiste una resolución que determina créditos fiscales por contribuciones al comercio exterior, (3) te impusieron una multa por una norma oficial mexicana o por incumplimiento de regulaciones no arancelarias, (4) tu importación temporal IMMEX está siendo cuestionada.

**¿Cómo te ayudamos?**
1. Revisamos el acta de inicio del PAMA y el sustento de la autoridad.
2. Identificamos los plazos legales (10 días hábiles para ofrecer pruebas y alegatos).
3. Preparamos el escrito de pruebas y alegatos con la documentación que corresponde (pedimentos, facturas, certificados de origen, documentos técnicos).
4. Si la resolución es desfavorable, promovemos recurso de revocación o juicio de nulidad ante el TFJA.
5. Si procede, solicitamos la liberación de la mercancía bajo garantía mientras se resuelve el fondo.

**Plazos y consecuencias**
| Etapa | Plazo |
|---|---|
| Ofrecimiento de pruebas y alegatos en PAMA | 10 días hábiles desde el levantamiento del acta |
| Recurso de revocación contra resolución de PAMA | 30 días hábiles |
| Juicio contencioso administrativo (Nulidad) | 30 días hábiles desde notificación de la resolución |
| Amparo directo contra sentencia del TFJA | 15 días hábiles |

**Si no actúas dentro del plazo:** la resolución queda firme, se ejecutan las contribuciones omitidas, las multas (que pueden alcanzar el 130% del valor en aduana de la mercancía) y la mercancía pasa a propiedad del Fisco Federal por abandono.

**Documentos que necesitamos**
- Acta circunstanciada del inicio del PAMA
- Pedimento(s) de importación y anexos
- Factura comercial y lista de empaque
- Certificado de origen (si aplica T-MEC u otro tratado)
- Documentos técnicos del producto (NOMs, fichas, etiquetado)
- Comunicaciones previas con el agente aduanal

**Resultado esperado**
Una defensa correctamente preparada puede lograr: (1) la liberación de la mercancía, (2) la nulidad o reducción del crédito fiscal, (3) la cancelación o disminución de la multa. La probabilidad real depende del expediente; te la decimos después del diagnóstico, no antes.

**FAQ**
- **¿Cuánto tiempo tengo para responder un PAMA?** 10 días hábiles a partir del levantamiento del acta.
- **¿Puedo recuperar la mercancía mientras se resuelve?** En muchos casos sí, mediante depósito o garantía.
- **¿Necesito un abogado o me basta con el agente aduanal?** El agente aduanal te asesora en el cumplimiento operativo, pero la defensa jurídica del PAMA y los recursos posteriores requieren representación legal.
- **¿Qué pasa si la mercancía ya pasó a abandono?** Hay vías para impugnar la declaratoria de abandono, pero los plazos son muy cortos.

---

#### `/servicios/defensa-fiscal-sat`

**H1:** Defensa fiscal frente a créditos, auditorías y visitas domiciliarias del SAT.
**Subtítulo:** Si recibiste una notificación del SAT —invitación, requerimiento, orden de visita o resolución de crédito fiscal— hay vías legales para responder y evitar que el monto quede firme.

**¿Qué es y cuándo aplica?**
> El SAT puede ejercer sus facultades de comprobación de varias maneras: cartas invitación, revisiones de gabinete, visitas domiciliarias, revisiones electrónicas y compulsas con terceros. Cada una tiene reglas, plazos y derechos del contribuyente distintos. La diferencia entre responder bien una visita domiciliaria y responder mal puede ser de cientos de miles o millones de pesos en créditos fiscales determinados.
>
> Necesitas defensa fiscal si: te llegó una orden de visita, te están requiriendo información en revisión de gabinete, te notificaron un oficio de observaciones, te resolvieron un crédito fiscal, recibiste una invitación de aclaración, o estás listado en el artículo 69-B del Código Fiscal de la Federación.

**¿Cómo te ayudamos?**
1. Analizamos la notificación: tipo de procedimiento, autoridad emisora, plazo de respuesta.
2. Acompañamos durante la auditoría o visita: revisamos cada acta parcial, pruebas y conclusiones.
3. Preparamos pruebas y alegatos antes de que se emita el oficio de observaciones.
4. Si se determina crédito fiscal, evaluamos si conviene acuerdo conclusivo (ante PRODECON), recurso de revocación o juicio de nulidad.
5. Tramitamos amparo si el acto contiene vicios constitucionales.

**Plazos y consecuencias**
| Etapa | Plazo |
|---|---|
| Aportar pruebas en auditoría (oficio de observaciones) | 20 días hábiles |
| Acuerdo conclusivo ante PRODECON | Antes de notificación de la resolución |
| Recurso de revocación | 30 días hábiles |
| Juicio de nulidad ante TFJA | 30 días hábiles |
| Amparo indirecto | 15 días hábiles |

**Si no actúas:** el crédito fiscal queda firme, se inicia el procedimiento administrativo de ejecución (PAE), se embargan cuentas bancarias y bienes, y se restringen sellos digitales.

**Documentos que necesitamos**
- Orden de visita / oficio de requerimiento / resolución
- Última declaración anual y declaraciones del periodo revisado
- Contabilidad del ejercicio (si aplica)
- Comunicaciones previas con el SAT

**Resultado esperado**
Bien defendida, una auditoría puede cerrarse sin crédito fiscal, con un crédito reducido sustancialmente, o con un acuerdo conclusivo que evite el litigio. Si el caso ya está en tribunales, la nulidad de la resolución es un resultado posible cuando hay vicios formales o de fondo.

**FAQ**
- **¿Qué hago si tocan a mi puerta con una orden de visita?** Atender la diligencia, identificar a los visitadores, no firmar nada que no entiendas, y contactarnos en el momento.
- **¿Qué pasa si me bloquearon los sellos digitales?** Hay un procedimiento de aclaración (artículo 17-H Bis CFF) con plazo corto; lo iniciamos de inmediato.
- **¿Conviene un acuerdo conclusivo o ir a juicio?** Depende del expediente, del monto, y de la fortaleza de las pruebas. Te lo decimos después del diagnóstico.
- **¿Cuánto tarda un juicio de nulidad?** En promedio entre 12 y 24 meses en primera instancia.

---

#### `/servicios/defensa-imss-infonavit`

**H1:** Defensa IMSS e INFONAVIT: capitales constitutivos, multas patronales y créditos fiscales.
**Subtítulo:** Si el IMSS o el INFONAVIT te liquidaron capitales constitutivos, multas o diferencias de cuotas, hay procedimientos para impugnarlos antes de que se conviertan en créditos firmes.

**¿Qué es y cuándo aplica?**
> El IMSS y el INFONAVIT actúan como autoridades fiscales en lo que toca a las cuotas obrero-patronales y aportaciones de vivienda. Pueden determinar diferencias por dictamen, por revisión, por aviso patronal omitido o por accidente de trabajo no reportado. Los capitales constitutivos —que se aplican cuando un trabajador se accidenta o enferma sin estar inscrito— son particularmente costosos.
>
> Necesitas esta defensa si recibiste: cédula de liquidación de cuotas, capital constitutivo, multa por SUA, requerimiento de dictamen, o resolución de inconformidad desfavorable.

**¿Cómo te ayudamos?**
1. Revisamos la cédula de liquidación, el sustento del IMSS y los registros patronales.
2. Promovemos recurso de inconformidad ante el Consejo Consultivo Delegacional del IMSS.
3. Si se confirma la liquidación, planteamos juicio de nulidad ante el TFJA.
4. Acompañamos en visitas domiciliarias y revisiones del IMSS.
5. Asesoramos en planes de regularización y convenios de pago a plazos.

**Plazos y consecuencias**
| Etapa | Plazo |
|---|---|
| Recurso de inconformidad ante IMSS | 15 días hábiles |
| Juicio de nulidad ante TFJA | 30 días hábiles |
| Amparo | 15 días hábiles |

**Si no actúas:** el crédito queda firme, el IMSS lo cobra mediante PAE, se embargan cuentas patronales y, en casos graves, se puede generar responsabilidad solidaria de socios y administradores.

**Documentos que necesitamos**
- Cédula(s) de liquidación
- Avisos al IMSS (alta, baja, modificación de salario)
- SUA del periodo revisado
- Dictamen IMSS si aplica

**Resultado esperado**
Defensa correcta puede lograr nulidad de la liquidación, reducción del monto o reclasificación del concepto. En capitales constitutivos, demostrar la inscripción oportuna o la procedencia del riesgo de trabajo cambia el resultado.

**FAQ**
- **¿Cuánto tiempo tengo para impugnar una liquidación del IMSS?** 15 días hábiles para recurso de inconformidad.
- **¿Puedo solicitar pago a plazos?** Sí, hasta 48 mensualidades, pero esto no suspende el plazo para impugnar.
- **¿Y si el trabajador ya cobró el capital constitutivo?** Aún se puede impugnar el monto y la procedencia de la liquidación.

---

#### `/servicios/defensa-coepris`

**H1:** Defensa contra sanciones y multas de COEPRIS.
**Subtítulo:** Si la Comisión Estatal de Protección contra Riesgos Sanitarios te impuso una multa, suspendió tu actividad o aseguró producto, te representamos en el procedimiento administrativo y en juicio.

**¿Qué es y cuándo aplica?**
> COEPRIS regula la operación sanitaria de farmacias, consultorios, laboratorios, restaurantes, fabricantes de alimentos y suplementos, importadores de productos sanitarios, y otros establecimientos. Cuando detecta incumplimientos —en aviso de funcionamiento, etiquetado, registro sanitario, condiciones de operación—, puede imponer multas, ordenar suspensión de actividad o asegurar mercancía.
>
> Necesitas esta defensa si recibiste un acta de verificación con observaciones, una resolución de multa o aseguramiento, o una orden de suspensión.

**¿Cómo te ayudamos?**
1. Revisamos el acta de verificación y la resolución sancionatoria.
2. Identificamos los vicios formales y de fondo (competencia, fundamentación, motivación, debida diligencia).
3. Preparamos recurso administrativo de revisión.
4. Si procede, juicio de nulidad ante el Tribunal de Justicia Administrativa local o federal según corresponda.
5. Solicitamos la liberación del producto asegurado o la levantada de la suspensión cuando los hechos lo permiten.

**Plazos y consecuencias**
| Etapa | Plazo |
|---|---|
| Recurso de revisión | 15 días hábiles |
| Juicio de nulidad | 30 días hábiles |

**Si no actúas:** la multa queda firme y se cobra coactivamente. La suspensión puede prolongarse y afectar la operación del negocio de manera severa.

**Documentos que necesitamos**
- Acta de verificación
- Resolución sancionatoria
- Aviso de funcionamiento y registros sanitarios
- Documentación del producto asegurado (si aplica)

**Resultado esperado**
Es frecuente lograr nulidad parcial o total cuando hay vicios formales (notificación, motivación, competencia). En casos sustantivos, mostrar el cumplimiento real del establecimiento puede reducir el monto.

**FAQ**
- **¿Puedo seguir operando si me suspendieron?** No, pero podemos solicitar medida cautelar mientras se resuelve la impugnación.
- **¿Pierdo la mercancía asegurada?** No necesariamente; se puede solicitar liberación bajo garantía o demostrando origen y registro.
- **¿Qué multas son las más comunes?** Falta de aviso de funcionamiento, etiquetado deficiente, productos sin registro sanitario, condiciones higiénicas.

---

#### `/servicios/defensa-sct-transporte`

**H1:** Defensa SCT / SICT en autotransporte federal y multas a transportistas.
**Subtítulo:** Si la Secretaría de Infraestructura, Comunicaciones y Transportes te impuso una multa, retuvo unidades o canceló placas, hay vías de impugnación con plazos cortos.

**¿Qué es y cuándo aplica?**
> La SICT (antes SCT) supervisa el autotransporte federal de carga y pasaje. Aplica multas por exceso de peso y dimensiones, falta de licencia federal, fallas en condiciones físico-mecánicas, ausencia de pólizas de seguro y otras infracciones reguladas en el Reglamento de Tránsito en Carreteras y Puentes Federales.
>
> Necesitas esta defensa si recibiste boleta de infracción, retención de unidad, suspensión de operación o resolución de cancelación de placas o licencia.

**¿Cómo te ayudamos?**
1. Revisamos la boleta y la actuación del verificador.
2. Identificamos vicios en la calibración del equipo, en la cadena de custodia o en la fundamentación.
3. Preparamos recurso administrativo o juicio de nulidad.
4. Solicitamos la liberación de la unidad y, si procede, la suspensión de la sanción.

**Plazos y consecuencias**
| Etapa | Plazo |
|---|---|
| Recurso de revisión | 15 días hábiles |
| Juicio de nulidad | 30 días hábiles |

**Si no actúas:** la multa queda firme, las unidades pueden permanecer retenidas, y reincidencias pueden generar cancelación de permisos.

**Documentos que necesitamos**
- Boleta de infracción
- Permiso federal y tarjeta de circulación
- Pólizas de seguro
- Carta porte y documentación del viaje

**FAQ**
- **¿Puedo recuperar la unidad rápido?** En muchos casos sí, mediante el procedimiento de liberación correspondiente.
- **¿Qué pasa si reincido?** Las sanciones escalan y pueden afectar el permiso federal.

---

#### `/servicios/amparos-fiscales`

**H1:** Amparos en materia fiscal y administrativa.
**Subtítulo:** Cuando un acto de autoridad fiscal o administrativa viola tus derechos constitucionales, el amparo es la vía para combatirlo.

**¿Qué es y cuándo aplica?**
> El juicio de amparo procede contra normas, actos u omisiones de las autoridades que violen derechos humanos. En materia fiscal y administrativa lo usamos contra: leyes inconstitucionales, actos sin fundamentación, resoluciones que afectan sellos digitales, embargos sin motivación adecuada, y procedimientos donde la autoridad rebasa su competencia.

**¿Cómo te ayudamos?**
1. Identificamos si el acto admite amparo indirecto o directo.
2. Calculamos plazos (15 días hábiles desde notificación o ejecución del acto).
3. Preparamos demanda con conceptos de violación constitucional y, en su caso, suspensión.
4. Damos seguimiento al juicio en juzgado de distrito o tribunal colegiado.

**Plazos y consecuencias**
| Tipo de amparo | Plazo |
|---|---|
| Amparo indirecto contra acto | 15 días hábiles |
| Amparo directo contra sentencia | 15 días hábiles |
| Amparo contra leyes con motivo de su primer acto de aplicación | 15 días hábiles |

**Documentos que necesitamos**
- Acto reclamado completo (resolución, oficio, ley aplicable)
- Constancia de notificación
- Antecedentes del procedimiento

**Resultado esperado**
La concesión del amparo puede dejar sin efectos el acto reclamado, ordenar su reposición, o desincorporar al quejoso de la aplicación de una norma inconstitucional.

**FAQ**
- **¿El amparo suspende el cobro?** Puede otorgarse suspensión bajo garantía.
- **¿Cuánto tarda?** Amparo indirecto: 6-12 meses en primera instancia. Directo: 6-9 meses.

---

#### `/servicios/multas-comercio-exterior`

**H1:** Multas de comercio exterior: clasificación, valor, regulaciones no arancelarias.
**Subtítulo:** Cuando la autoridad detecta una irregularidad en la operación aduanera, la sanción puede llegar al 130% del valor de la mercancía. Te ayudamos a impugnarla.

**¿Qué es y cuándo aplica?**
> Las multas más comunes en comercio exterior derivan de: clasificación arancelaria incorrecta, declaración inexacta del valor en aduana, omisión de regulaciones no arancelarias (NOMs, permisos previos, avisos automáticos), datos falsos en pedimento, y omisión de impuestos al comercio exterior.

**¿Cómo te ayudamos?**
1. Revisamos pedimento, factura, certificado de origen y documentación técnica.
2. Verificamos la clasificación con base en Reglas Generales de Interpretación.
3. Preparamos defensa con documentación que demuestre el cumplimiento.
4. Promovemos recurso de revocación o juicio de nulidad.

**Plazos y consecuencias**
| Etapa | Plazo |
|---|---|
| Recurso de revocación | 30 días hábiles |
| Juicio de nulidad | 30 días hábiles |

**Documentos que necesitamos**
- Pedimento(s) y anexos
- Factura comercial y lista de empaque
- Certificado de origen
- Documentos técnicos (NOMs, registros, avisos)
- Resolución de la autoridad

**FAQ**
- **¿Puedo seguir importando mientras se resuelve?** Sí, pero hay que monitorear que no se generen sanciones acumuladas.
- **¿La multa puede ser reducida?** En muchos casos, demostrando buena fe y corrección espontánea.

---

#### `/servicios/recurso-revocacion-juicio-nulidad`

**H1:** Recurso de revocación y juicio contencioso administrativo.
**Subtítulo:** Las dos vías formales para impugnar resoluciones de autoridades fiscales y administrativas. Cuándo conviene cada una.

**¿Qué es y cuándo aplica?**
> El recurso de revocación se interpone ante la propia autoridad que emitió el acto. El juicio de nulidad (contencioso administrativo) se promueve ante el Tribunal Federal de Justicia Administrativa o el tribunal local correspondiente. Cada vía tiene ventajas, plazos y costos distintos.

**¿Cómo te ayudamos?**
1. Diagnóstico: te decimos cuál vía conviene a tu caso.
2. Preparamos el escrito con agravios, pruebas y suspensión si procede.
3. Damos seguimiento procesal hasta la resolución.
4. Si la resolución es desfavorable, valoramos amparo.

**Plazos y consecuencias**
| Vía | Plazo |
|---|---|
| Recurso de revocación | 30 días hábiles desde notificación |
| Juicio de nulidad | 30 días hábiles desde notificación |
| Amparo directo (contra sentencia) | 15 días hábiles |

**FAQ**
- **¿Qué conviene, recurso o juicio?** Recurso es más rápido y barato; juicio puede ser más profundo y permite suspensión más amplia.
- **¿Puedo combinar ambos?** No simultáneamente — se elige una vía.

---

#### `/servicios/defensa-penal-fiscal`

**H1:** Defensa penal-fiscal: defraudación, contrabando, 69-B, lavado.
**Subtítulo:** Cuando el procedimiento administrativo escala a investigación penal, la representación cambia. Te asistimos en denuncias, querellas y procesos penales fiscales.

**¿Qué es y cuándo aplica?**
> El Código Fiscal de la Federación tipifica varios delitos: defraudación fiscal y equiparada, contrabando y equiparado, simulación de operaciones (artículo 113 Bis), uso de comprobantes apócrifos. Cuando hay denuncia, la causa puede llegar a juzgado penal federal, con consecuencias de prisión preventiva oficiosa en ciertos supuestos.
>
> Necesitas esta defensa si: te citaron como imputado en una carpeta de investigación, te llegó orden de aprehensión, estás listado en el 69-B definitivo, o hay denuncia del SAT por defraudación.

**¿Cómo te ayudamos?**
1. Revisamos la carpeta de investigación y el sustento de la denuncia.
2. Coordinamos defensa penal con la defensa fiscal-administrativa que corre en paralelo.
3. Promovemos audiencias iniciales, salidas alternas y, cuando procede, no ejercicio de la acción penal.
4. Si hay vinculación a proceso, llevamos el juicio oral con estrategia técnica.

**Plazos y consecuencias**
- La defensa penal corre con plazos procesales del Código Nacional de Procedimientos Penales (audiencias en horas o días).
- Algunos delitos fiscales son de prisión preventiva oficiosa: la libertad durante el proceso depende de la estrategia desde la audiencia inicial.

**Documentos que necesitamos**
- Citatorio o copia de carpeta de investigación
- Antecedentes fiscales (auditorías, créditos, oficios)
- Resoluciones administrativas relacionadas

**FAQ**
- **¿Voy a la cárcel?** No necesariamente. Hay salidas alternas, suspensión condicional, criterios de oportunidad y absoluciones; depende del expediente.
- **¿Puedo defender penal y fiscal con el mismo despacho?** Sí, y conviene que las dos estrategias dialoguen.

---

#### `/servicios/asesoria-preventiva-compliance`

**H1:** Asesoría preventiva y compliance fiscal-aduanero.
**Subtítulo:** La mejor defensa empieza antes del problema. Revisamos tu operación, identificamos riesgos y diseñamos controles para reducir la probabilidad de contingencias.

**¿Qué es y cuándo aplica?**
> Un programa de cumplimiento bien diseñado puede prevenir multas, créditos fiscales, capitales constitutivos y procedimientos penales. Esto incluye: revisión periódica de pedimentos, validación de procesos IMMEX, auditoría preventiva de cuotas IMSS, revisión del cumplimiento sanitario de COEPRIS, diagnóstico de riesgos por operaciones inexistentes (69-B), y políticas internas de antilavado para sujetos obligados.

**¿Cómo te ayudamos?**
1. Diagnóstico inicial de la operación y cruce con áreas de riesgo.
2. Revisión documental por área (fiscal, aduanera, IMSS, COEPRIS según aplique).
3. Reporte con hallazgos, riesgos y plan de remediación.
4. Implementación de controles y, si procede, regularización ante la autoridad.
5. Acompañamiento continuo o por proyecto.

**Modalidades de servicio**
- **Diagnóstico puntual.** Una entrega con hallazgos y plan de remediación.
- **Iguala mensual.** Asesoría continua sobre operación corriente.
- **Proyecto de regularización.** Cuando hay incumplimiento histórico que conviene corregir antes de que la autoridad lo detecte.

**FAQ**
- **¿Conviene corregir errores espontáneamente?** En muchos casos sí — la corrección espontánea puede eliminar o reducir multas significativamente.
- **¿Cuánto cuesta?** Depende del tamaño y complejidad. Después del diagnóstico inicial te entregamos propuesta.

---

### Resultados (`/resultados`)

**Hero**
- **H1:** Resultados.
- **Subtítulo:** Estos son los datos generales de nuestra práctica. Los expedientes específicos están protegidos por el secreto profesional.

**Bloques**
- **25 años** de práctica continua en la frontera norte.
- **Áreas representadas:** SAT, ANAM, IMSS, INFONAVIT, COEPRIS, SICT, TFJA, Tribunal de Justicia Administrativa local, juzgados de distrito y tribunales colegiados.
- **Cobertura geográfica:** Tijuana, Tecate, Rosarito, zona fronteriza norte; representación procesal a nivel federal.
- **Tipos de cliente atendidos:** importadores, exportadores, transportistas, maquiladoras, comerciantes, profesionistas con actividad empresarial, fabricantes regulados por COEPRIS.
- **Especialización combinada:** fiscal, aduanera, administrativa y penal-fiscal — un mismo expediente puede correr en varias materias y nuestra práctica las integra.

**Bloque sobre testimoniales**
> *(Placeholder)* Cuando reactivemos Google Business Profile y obtengamos reseñas verificadas, las integraremos en esta sección.

**CTA final:** Cuéntanos tu caso · Agenda tu valoración.

---

### Blog (`/blog`)

**Hero**
- **H1:** Notas y análisis.
- **Subtítulo:** Comentarios técnicos sobre reformas, criterios de autoridad y casos relevantes en materia fiscal, aduanera y administrativa.

**Categorías iniciales:**
- Reformas y actualización
- Criterios de autoridad
- Casos y jurisprudencia
- Guías prácticas

**3 entradas iniciales (outlines completos para redacción):**

#### Entrada 1 — "Reforma al CFF 2026: lo que cambia para empresarios e importadores"
- Qué reforma el Código Fiscal de la Federación
- Cambios principales (sellos digitales, restricciones, RFC, comprobantes)
- Impacto práctico en importadores y empresarios PYME
- Acciones recomendadas antes del cierre del ejercicio
- Referencias y artículos modificados
- Longitud: 1,200–1,500 palabras

#### Entrada 2 — "Visita domiciliaria del SAT: qué hacer en las primeras horas"
- Qué es una visita domiciliaria y en qué se diferencia de una revisión de gabinete
- Derechos del contribuyente al inicio de la diligencia
- Qué firmar y qué no firmar
- Documentación que pueden requerir y plazos
- Cuándo conviene contactar a un abogado
- Errores comunes que escalan el procedimiento
- Longitud: 1,000–1,200 palabras

#### Entrada 3 — "Embargo precautorio en aduana: pasos para responder un PAMA"
- Qué es el PAMA y por qué se inicia
- Plazo de 10 días para pruebas y alegatos
- Documentación que demuestra la legalidad de la importación
- Vías de defensa: PAMA, recurso, juicio de nulidad
- Cómo recuperar la mercancía con garantía
- Casos en los que conviene transigir vs litigar
- Longitud: 1,200–1,400 palabras

Cada entrada cierra con: autor (placeholder), fecha, categoría, y CTA al servicio relacionado.

---

### Recursos / Lead Magnet (`/recursos/72-horas`)

**Landing page**

**Hero**
- **Eyebrow:** Guía descargable
- **H1:** Las primeras 72 horas: qué hacer si recibes una visita del SAT, un embargo en aduana o un crédito fiscal.
- **Subtítulo:** Una guía práctica de [X] páginas. Sin promesas vacías. Te explicamos qué hacer, qué evitar y cuáles son tus derechos antes de contratar a un abogado.
- **Imagen:** mockup del PDF.

**Qué encontrarás (lista)**
- Cómo identificar el tipo de procedimiento desde la primera notificación
- Qué documentos preparar de inmediato
- Qué firmar y qué no firmar
- Plazos legales clave (recurso, juicio, amparo)
- Errores comunes que cierran vías de defensa
- Cuándo es urgente contactar a un abogado

**Formulario inline**
Campos: Nombre · Email · Teléfono (opcional) · Cómo nos encontraste (opcional) · Checkbox: "He leído el aviso de privacidad"
CTA: Descargar la guía gratuita

**Email de entrega (autoresponder)**
- **Asunto:** Tu guía está lista — Las primeras 72 horas (ADAF)
- **Cuerpo:**
> Hola [nombre],
>
> Aquí tienes la guía que solicitaste: [enlace al PDF].
>
> Esta guía cubre los pasos generales de respuesta ante una visita del SAT, un embargo en aduana o un crédito fiscal. Es una herramienta de orientación, no un consejo legal específico para tu caso.
>
> Si necesitas orientación concreta sobre lo que estás enfrentando, agenda una valoración inicial sin costo: [enlace] o escríbenos por WhatsApp al 664 647 5018.
>
> ADAF — Asesoría y Defensa Aduanera Fiscal
> Blvd. de las Bellas Artes 19213, Local 15, Nueva Tijuana, BC

---

### PDF "Las primeras 72 horas" — Outline + copy maestro

**Estructura del PDF (8–12 páginas):**

1. **Portada.** Logo ADAF + título + subtítulo + "Edición 2026".
2. **Introducción (½ página).** Por qué las primeras 72 horas son críticas: porque los plazos legales para responder corren desde la notificación, y muchos derechos se pierden si se firma o se contesta mal.
3. **Capítulo 1 — Cómo identificar qué te llegó (1 página).**
   - Visita domiciliaria del SAT
   - Carta invitación
   - Oficio de requerimiento
   - Resolución de crédito fiscal
   - Acta de inicio de PAMA (Aduana)
   - Cédula de liquidación IMSS / INFONAVIT
   - Acta de verificación COEPRIS / SICT
   - Citatorio penal
   *Para cada uno: qué es, quién la emite, plazo de respuesta inicial.*
4. **Capítulo 2 — Lo que tienes que hacer en las primeras horas (1 página).**
   - Identificar al notificador y conservar la constancia
   - Anotar fecha y hora exacta
   - No firmar más allá del acuse
   - Resguardar copia del acto y todos sus anexos
5. **Capítulo 3 — Lo que NO debes hacer (1 página).**
   - No firmar conformidad con hechos sin asesoría
   - No entregar documentación que no esté requerida
   - No declarar verbalmente situaciones que afectan tu posición
   - No dejar pasar los plazos esperando "que se aclare solo"
6. **Capítulo 4 — Plazos legales clave (1 página, tabla).**
   - PAMA: 10 días hábiles
   - Recurso de revocación: 30 días hábiles
   - Recurso de inconformidad IMSS: 15 días hábiles
   - Juicio de nulidad: 30 días hábiles
   - Amparo: 15 días hábiles
   - Procedimiento penal: horas / días según etapa
7. **Capítulo 5 — Documentos que necesitarás reunir (1 página).**
   Listas de chequeo por tipo de procedimiento.
8. **Capítulo 6 — Errores comunes que cierran tus vías de defensa (1 página).**
   - Firmar el acta final sin observaciones
   - Aceptar capital constitutivo en visita IMSS
   - Pagar la multa antes de impugnar (renuncia tácita)
   - Confundir notificación por estrados con falta de notificación
9. **Capítulo 7 — Cuándo es urgente contactar a un abogado (½ página).**
   Criterios objetivos: monto, plazo restante, tipo de autoridad, escalación a penal.
10. **Cierre.** Datos de ADAF + invitación a valoración + WhatsApp + sitio web.
11. **Aviso legal del documento.** "Este documento es una guía de orientación general. No sustituye la asesoría profesional sobre un caso concreto."

---

### FAQ (`/faq`)

15-20 preguntas agrupadas por tema:

**Sobre el despacho**
- ¿Cuánto cobran por una valoración inicial? *Sin costo.*
- ¿Atienden casos fuera de Tijuana? *Sí, representación procesal a nivel federal.*
- ¿La consulta es confidencial? *Sí, sujeta al secreto profesional.*

**Sobre los procedimientos**
- ¿Qué hago si llega una visita domiciliaria del SAT?
- ¿Qué pasa si me bloquearon los sellos digitales?
- ¿Cuánto tiempo tengo para impugnar un crédito fiscal?
- ¿Qué es un PAMA?
- ¿Cuánto tarda un juicio de nulidad?
- ¿Puedo pagar una multa a plazos?
- ¿En qué se diferencia un recurso de revocación de un juicio de nulidad?
- ¿Qué pasa si no atiendo una notificación del IMSS?
- ¿Pueden embargarme cuentas bancarias por adeudos fiscales?

**Sobre honorarios**
- ¿Cómo cobran sus servicios? *Iguala, por etapa procesal o por proyecto. Definimos en propuesta escrita.*
- ¿Existe un esquema de éxito? *Solo en casos específicos donde sea procedente.*

**Sobre logística**
- ¿Atienden en sus oficinas o también virtual? *Ambos.*
- ¿Trabajan con contadores externos? *Sí, coordinamos cuando aplica.*

---

### Contacto (`/contacto`)

**Hero**
- **H1:** Cuéntanos tu caso.
- **Subtítulo:** Te respondemos en horario hábil con una valoración inicial sin costo.

**Bloque principal — 3 columnas:**

**Columna 1: Formulario**
Campos:
- Nombre completo
- Teléfono
- Email
- Tipo de asunto (select: SAT / Aduana / IMSS / COEPRIS / SCT / Otro)
- Describe brevemente tu caso (textarea)
- Checkbox aviso de privacidad
CTA: Enviar mensaje

**Columna 2: WhatsApp**
- Botón directo a `wa.me/526646475018`
- Mensaje pre-llenado: *"Hola, vi su sitio web y necesito información sobre [...]"*

**Columna 3: Agendar llamada**
- Calendly embebido (o link)
- Bloques de 20 minutos para valoración inicial

**Bloque secundario — Datos de oficina:**
- Dirección: Blvd. de las Bellas Artes 19213, Local 15, Nueva Tijuana, 22435 Tijuana, B.C.
- Teléfono: 664 647 5018
- Email: juridicoadaf@gmail.com
- Horario: Lunes a viernes, 09:00 – 17:00
- Mapa Google embebido
- Aviso de confidencialidad: *"La información que compartas con nosotros se maneja bajo secreto profesional. No la usaremos para ningún fin distinto a la valoración y eventual representación de tu asunto."*

---

### Aviso de privacidad (`/aviso-de-privacidad`)

Plantilla LFPDPPP a redactar (estructura):
1. Identidad y domicilio del responsable
2. Datos personales que se recaban
3. Finalidades del tratamiento (primarias y secundarias)
4. Transferencias
5. Derechos ARCO y procedimiento para ejercerlos
6. Medios para revocar consentimiento
7. Cambios al aviso
8. Fecha de última actualización

### Términos y condiciones (`/terminos-y-condiciones`)

Plantilla a redactar:
1. Aceptación de términos
2. Naturaleza informativa del sitio (no constituye relación abogado-cliente)
3. Propiedad intelectual
4. Limitación de responsabilidad
5. Enlaces externos
6. Jurisdicción y legislación aplicable

### 404 (`/404`)

- **H1:** Esta página no existe.
- Subtítulo: Verifica el enlace o vuelve al inicio.
- CTA: Ir al inicio · Ver servicios

---

## Componentes globales

**Header**
- Logo + navegación + CTA "Agenda tu valoración"
- Mobile: menú hamburguesa con Servicios desplegable

**Footer**
- Columna 1: logo + tagline corto
- Columna 2: enlaces rápidos a servicios principales (5)
- Columna 3: contacto (dirección, teléfono, email, horario)
- Columna 4: suscripción al boletín
- Línea inferior: aviso de privacidad · términos · año · "Despacho jurídico autorizado en México"

**WhatsApp flotante**
- Bottom-right en todas las páginas
- Mensaje pre-llenado por contexto (ej. en página de Defensa Aduanera el mensaje arranca: *"Hola, tengo un caso de defensa aduanera y quisiera valoración..."*).

**Pop-up de salida (solo en blog)**
- Aparece al detectar intención de salida
- Ofrece la guía 72 horas
- Una sola vez por sesión

---

## Fases de ejecución

### Fase 1 — Stitch: Home + 1 página interna (esta entrega después del plan)
- Diseñar Home completo con todos los bloques en Stitch
- Diseñar `/servicios/defensa-aduanera` como interna representativa
- Aplicar paleta clara con vino, azul marino y olivo
- Iterar con `/premium-frontend` hasta aprobación del estilo

### Fase 2 — Generación del resto del sitio en Stitch (post-aprobación)
- Resto de páginas de Servicios (9 sub-páginas)
- Nosotros, Resultados, Blog hub, FAQ, Contacto
- Lead magnet landing
- Páginas legales y 404

### Fase 3 — Producción de contenido
- Redacción final del copy de todas las páginas (este plan ya lo contiene como base — falta pulido editorial post-Stitch)
- PDF "72 horas" diagramado
- 3 entradas de blog redactadas
- Aviso de privacidad y términos finales

### Fase 4 — Build técnico
- Stack: Next.js 16 + Tailwind + Vercel
- Routing por las 18+ páginas listadas
- MDX para blog
- Formularios con resend.com o similar (notificación a `juridicoadaf@gmail.com`)
- Calendly embebido
- WhatsApp flotante con mensaje contextual por página
- Schema markup LegalService
- Open Graph y meta tags por página
- Analytics + Search Console

### Fase 5 — Lanzamiento
- QA mobile-first (Lighthouse > 90)
- Configurar dominio recuperado `adafsolucionesfiscales.com`
- Alta en Google Business Profile y solicitud de reseñas
- Plan editorial trimestral

---

## Pendientes del cliente (qué necesito de Oscar / despacho)

Para terminar v1 sin huecos necesito:

| Pendiente | Cuándo |
|---|---|
| Confirmar control del dominio `adafsolucionesfiscales.com` (registrar / recuperar) | Antes de Fase 4 |
| Decidir qué hacer con las 2 páginas de Facebook (consolidar a una) | Antes de lanzamiento |
| Reactivar / abrir Google Business Profile con datos oficiales | Antes de lanzamiento |
| Validar y firmar el aviso de privacidad y términos que yo redacte | Antes de Fase 4 |
| Confirmar que el formulario de contacto puede llegar a `juridicoadaf@gmail.com` (o a otro correo) | Fase 4 |
| Validar legalmente el PDF "72 horas" — el contenido es de orientación, pero el despacho debe revisarlo antes de publicar | Fase 3 |
| Validar las 3 entradas de blog antes de publicar (técnicamente correctas en datos legales) | Fase 3 |
| Confirmar si tienen Calendly o equivalente, o si registramos uno | Fase 4 |
| Confirmar nombre comercial visible (¿"ADAF"? ¿"ADAF Asesoría y Defensa Aduanera Fiscal"?) en header | Fase 1 (Stitch) |
| Foto profesional del despacho y/o equipo (cuando estén listas) | Para versión 1.1 (sección Equipo) |
| Casos de éxito anonimizados específicos (si después quieren agregarlos) | Para versión 1.1 |
| Nombres de despachos de Mexicali con cobertura BC (si los tienen identificados) para revisar sus sitios y evitar duplicar estética/slogan | Antes de Fase 1 (deseable, no bloqueante) |

---

## Verificación

**Cómo validar la entrega completa:**

1. **Después de Fase 1 (Stitch Home + Defensa Aduanera):** revisión visual lado a lado con el logo y la paleta. Validar que la sensación es "corporativa, clara, sobria" — no oscura, no juvenil, no publicitaria.
2. **Después de Fase 2:** navegar el sitio completo (mockup) en Stitch — confirmar consistencia visual entre páginas y que el flujo Home → Servicios → Sub-servicio → Contacto es claro.
3. **Después de Fase 3:** lectura completa del copy. Confirmar tono "tú formal, claro, explicativo, sin vendehumos". Identificar términos legales que requieran ajuste.
4. **Después de Fase 4:** correr Lighthouse en mobile y desktop (objetivo > 90), validar formularios envían a correo correcto, WhatsApp flotante funciona en todas las páginas, schema markup valida en `validator.schema.org`, Open Graph se renderiza bien al compartir el dominio en WhatsApp.
5. **Después de Fase 5:** búsqueda manual en Google de keywords objetivo a 60 días para medir indexación inicial. Conteo de leads/mes vía formulario, WhatsApp y agenda como KPI principal.

---

## Análisis competitivo (referencia para diseño y copy)

El cliente compartió el contenido del documento de competencia. Al cruzarlo con el benchmark del análisis estratégico, los 6 competidores nombrados coinciden (Lamassu, Ratio Tax Law, CR&C, VTZ, TL&C, CCN). El documento del cliente añade dos elementos que conviene incorporar:

- **Existen competidores estatales en Mexicali con cobertura Baja California completa**, dirigidos a empresas medianas y grandes. No están nombrados específicamente, pero implican que ADAF compite también con despachos de la capital del estado, no solo con los de Tijuana.
- **Recomendación de Motiva al cierre del documento:** *"enfocar el mensaje en defensa, representación y resolución de contingencias fiscales y aduaneras"*. Esto valida nuestra decisión de "defensa integral neutra" como posicionamiento y los 10 servicios estructurados por contingencia.

Esta sección sintetiza la lectura operativa para el diseño en Stitch y para que ADAF no copie tono ni jerarquía visual de la competencia.

### Mapa de posicionamiento

| | **Cliente PYME / persona física** | **Cliente corporativo / industrial** |
|---|---|---|
| **Especialización fiscal** | Lamassu, Ratio Tax Law, CR&C, **ADAF** | TL&C, CCN |
| **Especialización aduanera** | *(Hueco visible)* | VTZ, CCN, TL&C |

ADAF se ubica en el cuadrante "fiscal + PYME" (saturado) con extensión natural hacia "aduanero + PYME" (relativamente vacío). El sitio debe sostener honestamente las dos materias para defender el nombre completo "Asesoría y Defensa Aduanera Fiscal".

### Competidores directos en Tijuana

#### 1. Lamassu Fiscalistas — `lamassu.mx`
- **Referencia más completa digitalmente.** Es el techo del mercado al que ADAF compite directamente.
- 11 páginas de servicio individuales (Amparos, Auditoría Preventiva, Asistencia en Auditoría SAT/IMSS/INFONAVIT, Contabilidad, Consultoría, Cumplimiento Aduanero, Recuperación de Cuentas Bancarias, Devolución de Impuestos, Planeaciones Patrimoniales, Impuestos Inconstitucionales, Defensa Fiscal).
- Activos: WhatsApp flotante · PDF descargable ("Resumen Ejecutivo CFF 2026") · newsletter · Google Reviews embebidos · revista digital propia · blog quincenal.
- Tono: profesional pero con detonadores de urgencia ("¿Necesitas ayuda ahora mismo?").
- Sedes Tijuana + CDMX.
- **Implicación para ADAF:** la arquitectura por servicio individual es la referencia. **Diferenciamos en tono** (Lamassu es más "publicitario", ADAF debe ser más "editorial"), en sección **Resultados** (Lamassu no la trabaja a fondo) y en **especialización aduanera** (Lamassu trata aduanero como uno más, ADAF lo lleva en el nombre).

#### 2. Ratio Tax Law — `ratiotaxlaw.com`
- Servicios: defensa SAT/IMSS/INFONAVIT/Finanzas estatales · amparos contra embargos · sellos digitales · cartas invitación, acuerdos conclusivos · defensa penal-fiscal (defraudación, discrepancia, lavado).
- Tono: directo, técnico, "fuego" (problemas activos).
- Diferenciador propio: cruce fiscal + penal-fiscal explícito.
- **Implicación para ADAF:** sitio menos pulido; ADAF debe verse más sólido. El cruce penal-fiscal sí lo replicamos (ya está en nuestra sub-página `/defensa-penal-fiscal`).

#### 3. CR&C Consultores Fiscales — `crcfiscal.com`
- **Diferenciador fuerte:** "ex-servidores públicos" — declaran 14 años en TFJA y 17 en Fisco Federal.
- Defensa "360°" SAT/CNBV/IMSS/INFONAVIT/CONAGUA · 69-B · antilavado · embargos · STPS.
- Combina abogados + contadores.
- **Implicación para ADAF:** no podemos pelear el ángulo "ex-funcionario" si no lo somos. ADAF compite con el ángulo de **trayectoria continua de 25 años en frontera norte** y especialización aduanera.

### Competidor regional / corporativo

#### 4. VTZ — Vázquez Tercero & Zepeda — `vtz.mx`
- Firma de comercio exterior y aduanas más prestigiada de México (fundada 1967, oficina Tijuana entre 8 mexicanas).
- Cliente: industriales medianos y grandes, maquiladoras, multinacionales.
- Activos: blog técnico · YouTube · publicaciones académicas · ranking Chambers · membresía Alliott Global Alliance.
- **Implicación para ADAF:** es la "frontera superior" del nicho aduanero. ADAF NO compite aquí, pero debe **vestirse con autoridad técnica suficiente** para que un dueño de PYME importadora lo perciba como opción seria (entre lo "barato y dudoso" y lo "grande e inalcanzable"). El estándar editorial de VTZ marca la barra mínima de seriedad.

### Competidores nacionales con cobertura en Tijuana

#### 5. TL&C Abogados — `tlcabogados.com`
- Ex-funcionarios SAT y SHCP.
- Especialización: defensa aduanera, comercio exterior, IVA/IEPS, IMMEX, OEA, NEEC, visitas domiciliarias.
- Modelo: "atención personalizada por un Socio responsable de principio a fin".
- **Implicación para ADAF:** el modelo de "abogado responsable de principio a fin" coincide con nuestro Bloque 2 del Home ("trato directo y confidencial"). Es defensible y honesto para ADAF.

#### 6. CCN — Cacheaux, Cavazos & Newton — `ccn-law.com`
- Firma binacional MX-EE.UU. (1994), 11 oficinas (3 Texas + 8 México incluyendo Tijuana).
- Cliente: corporaciones multinacionales, transfronterizas.
- Activos: revista digital "CCN Mexico Report" (#162) · podcast.
- **Implicación para ADAF:** frontera superior absoluta. ADAF no compite aquí, y **no debemos imitar** ese estilo bilingüe corporativo grande — quedaríamos pretensiosos. Mantener el tono de "despacho técnico con escala de PYME" es la decisión correcta.

### Conclusiones operativas para el sitio (lo que el análisis cambia en el diseño)

1. **Arquitectura por servicio individual = sí.** Lamassu lo demuestra y por eso decidimos las 10 sub-páginas. No hacer una página única de "Servicios".
2. **Tono editorial sobre tono publicitario.** Diferencia clara con Lamassu y Ratio — ADAF debe leerse más cerca de VTZ en autoridad y cerca de Lamassu en cobertura, pero sin urgencia mercadotécnica.
3. **No prometer "100% comprobables" como CR&C.** Nosotros no podemos sustentar esa cifra y suena vendehumos. Mantener el lenguaje de "resultado realista después del diagnóstico".
4. **No imitar la estética bilingüe corporativa de CCN/VTZ.** Sus sitios son densos, formales y para clientes industriales. ADAF mantiene paleta clara, espacios generosos y lenguaje accesible.
5. **Construir blog y lead magnet desde día 1** — Lamassu publica quincenal, VTZ tiene blog técnico, CCN tiene revista. Sin contenido, ADAF se ve plano frente a cualquiera de los 6.
6. **Prueba social no copiar a otros, generar la propia.** Google Reviews + sección Resultados general (no fingida). Es la brecha más fácil de cerrar a corto plazo y la única que el cliente nuevo realmente lee.
7. **Cobertura geográfica en el sitio:** mencionar Tijuana, Tecate, Rosarito **y Baja California** (no solo Tijuana) en footer y sección Resultados. La competencia estatal de Mexicali ataca clientes BC-wide; ADAF debe declarar igual alcance estatal con anclaje en frontera norte como diferencial. Ya está reflejado en el copy del Home y Resultados.
8. **Pendiente del cliente:** si tienen identificados nombres específicos de los despachos de Mexicali con cobertura BC, conviene revisar sus sitios para asegurar que ADAF no replica iconografía, slogan o estructura. Lo agrego a la lista de pendientes.

---

## Archivos de referencia

- `/root/adaf-web/analisis-estrategico-sitio-web.md` — base estratégica completa
- `/root/adaf-web/brief-motiva-marketing.md` — brief original del cliente
- `/root/adaf-web/diagnostico-fb-adaf.md` — diagnóstico de Facebook (consolidación pendiente)
- `/root/adaf-web/669740538_1564130325716370_619333270727079096_n.jpg` — logo oficial (fuente de paleta)
