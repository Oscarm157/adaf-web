export type BodyBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "blockquote"; text: string; cite?: string }
  | { type: "note"; title: string; text: string };

export type BlogPost = {
  slug: string;
  cat: string;
  fecha: string;
  fechaIso: string;
  folio: string;
  titulo: string;
  resumen: string;
  autor: string;
  body: BodyBlock[];
  metaTitle: string;
  metaDescription: string;
};

export const posts: BlogPost[] = [
  {
    slug: "reforma-cff-2026",
    cat: "Reformas",
    fecha: "27 abr 2026",
    fechaIso: "2026-04-27",
    folio: "Nota 001",
    titulo:
      "Reforma al CFF 2026: cambios para empresarios e importadores",
    resumen:
      "Modificaciones principales en sellos digitales, restricciones, RFC y comprobantes, con su impacto práctico antes del cierre del ejercicio.",
    autor: "Equipo ADAF",
    metaTitle:
      "Reforma al CFF 2026: cambios para empresarios e importadores",
    metaDescription:
      "Comentario técnico de ADAF sobre los cambios al Código Fiscal de la Federación 2026 en sellos digitales, restricciones, RFC y comprobantes, con su impacto en la PYME importadora.",
    body: [
      {
        type: "p",
        text: "Cada cierre de ejercicio trae ajustes al Código Fiscal de la Federación que cambian la manera en la que el SAT ejerce sus facultades de comprobación y la forma en la que el contribuyente cumple con sus obligaciones formales. La reforma 2026 sigue esa línea: refuerza los controles sobre la emisión de comprobantes, ordena los supuestos de restricción del certificado de sello digital y precisa los plazos para que el contribuyente desvirtúe ciertos hechos. Para una PYME importadora, lo relevante no es la lectura general de la reforma, sino qué procedimientos administrativos se vuelven más rápidos para la autoridad y qué cargas adicionales recaen sobre la operación diaria.",
      },
      {
        type: "p",
        text: "Esta nota organiza los bloques de cambios que estamos viendo en la práctica del despacho —sellos digitales, registro federal de contribuyentes, comprobantes fiscales y procedimientos en torno al artículo 69-B del CFF— y aterriza acciones concretas que conviene revisar antes del próximo cierre de ejercicio. Cuando un cambio puntual depende de una redacción específica que aún no consideramos cerrada, lo dejamos señalado para validación interna del despacho.",
      },
      {
        type: "h2",
        text: "I. Restricción del certificado de sello digital",
      },
      {
        type: "p",
        text: "El artículo 17-H Bis del CFF regula la facultad del SAT para restringir temporalmente el uso del certificado de sello digital cuando detecta determinados supuestos en la operación del contribuyente: omisión de declaraciones, datos del RFC inconsistentes, domicilios no localizables, operaciones presumiblemente inexistentes en términos del 69-B, entre otros. La restricción no es una sanción definitiva, pero su efecto operativo es inmediato: sin sello digital activo no se pueden emitir comprobantes y, para una empresa importadora con facturación diaria, equivale a una interrupción del flujo.",
      },
      {
        type: "p",
        text: "El procedimiento de aclaración previsto en el propio 17-H Bis tiene un plazo corto. El contribuyente debe presentar el caso de aclaración ante el SAT y aportar las pruebas que desvirtúen el supuesto detectado. La autoridad responde con la resolución de la solicitud y, en caso de no quedar conforme, queda abierta la vía del recurso de revocación o el juicio de nulidad ante el TFJA. Lo que cambia con la reforma es la operatividad del procedimiento y los criterios con los que el SAT está validando las aclaraciones [pendiente de validación legal del despacho].",
      },
      {
        type: "note",
        title: "En la práctica",
        text: "La restricción del sello suele detonarse por omisiones que el contribuyente no había percibido como graves: una declaración mensual presentada en cero por error, un domicilio fiscal con discrepancia frente a registros aduanales, un proveedor incluido en una lista del 69-B presuntivo. Antes de que la restricción ocurra, conviene auditar los datos del RFC y la consistencia de las declaraciones del ejercicio.",
      },
      {
        type: "h2",
        text: "II. Registro Federal de Contribuyentes y datos del padrón",
      },
      {
        type: "p",
        text: "Los ajustes al RFC apuntan a depurar el padrón y reforzar la verificación del domicilio fiscal. Para empresas importadoras la consistencia entre el domicilio fiscal del RFC, el domicilio del padrón de importadores y los datos manifestados en pedimento es crítica. Una discrepancia que antes pasaba como observación operativa, hoy puede activar el supuesto de no localización y, con ello, la restricción del sello digital o la suspensión del padrón.",
      },
      {
        type: "ul",
        items: [
          "Verifica que el domicilio fiscal vigente en el RFC coincida con el manifestado ante ANAM.",
          "Confirma que los socios y representantes legales registrados estén actualizados.",
          "Si hubo cambio de actividad económica, valida que el catálogo del SAT y la actividad real estén alineados.",
          "Mantén disponible la documentación que acredita el domicilio: contrato de arrendamiento, comprobantes recientes, constancia de situación fiscal.",
        ],
      },
      {
        type: "h2",
        text: "III. Comprobantes fiscales digitales (CFDI)",
      },
      {
        type: "p",
        text: "Las modificaciones en torno a los CFDI tienden a precisar requisitos de los complementos, los plazos de cancelación y los efectos de las cancelaciones tardías o no aceptadas por el receptor. Para un importador que opera con carta porte, complemento de comercio exterior y comprobantes con clave de producto del catálogo SAT, cada precisión técnica puede traducirse en observaciones durante una revisión electrónica.",
      },
      {
        type: "p",
        text: "El criterio que conviene tener presente es que un CFDI emitido con datos inconsistentes —clave equivocada, complemento incompleto, RFC del receptor inválido— se vuelve un punto de entrada para la autoridad en revisiones posteriores. La regularización oportuna, mediante cancelación y reemisión dentro de los plazos, evita que esos comprobantes se conviertan en argumento del SAT para presumir simulación o, en casos extremos, para incluir al emisor en los listados del 69-B.",
      },
      {
        type: "h2",
        text: "IV. Operaciones inexistentes y artículo 69-B",
      },
      {
        type: "p",
        text: "El artículo 69-B del CFF se mantiene como uno de los procedimientos más sensibles para empresas que operan con redes amplias de proveedores. La reforma 2026 ajusta plazos y formas de notificación de los listados presuntivos y definitivos, sin cambiar la estructura del procedimiento: la autoridad publica una presunción de inexistencia de operaciones, el contribuyente afectado tiene un plazo para desvirtuar mediante pruebas, y de no hacerlo —o de hacerlo insuficientemente— se publica el listado definitivo con consecuencias sobre los efectos fiscales de los comprobantes emitidos.",
      },
      {
        type: "p",
        text: "Para el receptor de comprobantes de un proveedor incluido en el listado definitivo, el efecto es directo: pierde la deducibilidad del gasto y el acreditamiento del IVA, salvo que demuestre la materialidad de la operación. El detalle específico del plazo y las formas de notificación bajo la versión 2026 queda [pendiente de validación legal del despacho].",
      },
      {
        type: "h2",
        text: "V. Plazos y procedimientos de defensa",
      },
      {
        type: "p",
        text: "Los plazos generales para los medios de defensa en materia fiscal y administrativa siguen su lógica conocida y conviene tenerlos a la mano cuando llega una notificación. Los principales son los siguientes:",
      },
      {
        type: "ul",
        items: [
          "Aportar pruebas en auditoría tras oficio de observaciones: 20 días hábiles.",
          "Procedimiento de aclaración por restricción de sello digital (17-H Bis): plazo corto previsto en el propio artículo.",
          "Recurso de revocación: 30 días hábiles desde la notificación de la resolución.",
          "Juicio contencioso administrativo (nulidad) ante el TFJA: 30 días hábiles.",
          "Amparo indirecto: 15 días hábiles.",
        ],
      },
      {
        type: "h2",
        text: "VI. Impacto en la PYME importadora",
      },
      {
        type: "p",
        text: "Para una empresa que importa de manera continua, el patrón es claro: los cambios al CFF se sienten primero en la operación —en el sello digital, en el catálogo del RFC, en los CFDI con complemento de comercio exterior— y se manifiestan en una revisión meses después. Lo que en enero parece un dato menor, al cierre del ejercicio puede ser el detonador de un crédito fiscal con multas y actualizaciones.",
      },
      {
        type: "p",
        text: "La diferencia entre una empresa que atraviesa la reforma sin contingencias y una que termina en procedimiento administrativo está en la disciplina documental: cruces periódicos entre la contabilidad y los pedimentos, validación de proveedores frente a los listados del 69-B, control de los CFDI con sus complementos, y atención inmediata a cualquier carta invitación o requerimiento.",
      },
      {
        type: "h2",
        text: "VII. Acciones recomendadas antes del cierre",
      },
      {
        type: "ul",
        items: [
          "Auditoría preventiva del RFC: domicilio, socios, representantes y actividad económica.",
          "Cruce de proveedores frente a los listados publicados del 69-B (presuntivos y definitivos).",
          "Revisión de la consistencia entre CFDI emitidos, pedimentos y registros contables.",
          "Validación de los complementos exigidos en operaciones de comercio exterior y carta porte.",
          "Inventario de notificaciones recibidas en el ejercicio y su estado procesal.",
          "Planeación documental para el caso de una restricción del sello digital o un requerimiento del SAT.",
        ],
      },
      {
        type: "h2",
        text: "VIII. Referencias",
      },
      {
        type: "ul",
        items: [
          "Código Fiscal de la Federación: artículo 17-H Bis (restricción de sellos), artículo 69-B (operaciones inexistentes), artículo 73 (corrección espontánea), disposiciones sobre RFC y CFDI.",
          "Resolución Miscelánea Fiscal vigente y sus modificaciones publicadas en el DOF.",
          "Criterios normativos y no vinculativos publicados por el SAT.",
        ],
      },
      {
        type: "p",
        text: "La reforma se lee distinto desde la operación que desde el escritorio. Si tu empresa importa con regularidad y quieres anticipar el efecto de estos cambios sobre tus contingencias actuales, una valoración preventiva ordena el panorama antes de que llegue la primera notificación.",
      },
    ],
  },
  {
    slug: "visita-domiciliaria-sat",
    cat: "Procedimientos",
    fecha: "20 abr 2026",
    fechaIso: "2026-04-20",
    folio: "Nota 002",
    titulo:
      "Visita domiciliaria del SAT: derechos del contribuyente",
    resumen:
      "Qué hacer al inicio de la diligencia, documentación que pueden requerir, plazos para aportar pruebas y errores comunes que escalan el procedimiento.",
    autor: "Equipo ADAF",
    metaTitle:
      "Visita domiciliaria del SAT: derechos del contribuyente",
    metaDescription:
      "Diferencia con la revisión de gabinete, derechos al inicio de la diligencia bajo el artículo 44 del CFF, qué firmar y qué no, y plazos clave para responder.",
    body: [
      {
        type: "p",
        text: "La visita domiciliaria es una de las facultades de comprobación más intrusivas que ejerce el SAT. A diferencia de una carta invitación o de una revisión electrónica, los visitadores se presentan físicamente en el domicilio fiscal del contribuyente con una orden firmada por la autoridad y un objeto específico de revisión. Lo que ocurre en las primeras horas de esa diligencia condiciona el resto del procedimiento: si el contribuyente atiende sin orden, sin asesoría y sin lectura cuidadosa de cada acta, los hechos asentados ganan peso probatorio y reducen las opciones de defensa cuando se determine, en su caso, un crédito fiscal.",
      },
      {
        type: "p",
        text: "Esta nota explica la diferencia entre una visita domiciliaria y una revisión de gabinete, los derechos del contribuyente al inicio de la diligencia conforme al artículo 44 del CFF, qué documentos conviene firmar y cuáles no, y los plazos que empiezan a correr desde el levantamiento de cada acta.",
      },
      {
        type: "h2",
        text: "I. Visita domiciliaria y revisión de gabinete: no son lo mismo",
      },
      {
        type: "p",
        text: "La visita domiciliaria se desarrolla en el domicilio fiscal o en cualquier otro lugar donde el contribuyente realice sus actividades. Los visitadores se presentan, identifican y entregan la orden de visita; a partir de ahí, los hechos quedan asentados en actas parciales sucesivas hasta el acta final. La revisión de gabinete, en cambio, ocurre en oficinas del SAT: la autoridad notifica un oficio de requerimiento, el contribuyente entrega información y la revisión se documenta sin presencia física en el domicilio.",
      },
      {
        type: "p",
        text: "La diferencia operativa es importante. En visita domiciliaria los visitadores tienen acceso directo al lugar y a la documentación que esté en él; en gabinete, el contribuyente conserva el control sobre qué se entrega y cuándo. Los derechos y los plazos se rigen por reglas distintas y, en el caso de la visita, las formalidades del artículo 44 del CFF son determinantes: si la autoridad las omite, hay vicios formales aprovechables en la defensa.",
      },
      {
        type: "h2",
        text: "II. Derechos al inicio de la diligencia (Art. 44 CFF)",
      },
      {
        type: "p",
        text: "El artículo 44 del Código Fiscal de la Federación regula las formalidades de la visita domiciliaria. Entre los derechos y obligaciones que conviene conocer al momento en que tocan a la puerta están los siguientes:",
      },
      {
        type: "ul",
        items: [
          "Recibir y conservar la orden de visita por escrito, firmada por funcionario competente, con el objeto y alcance precisos.",
          "Identificar a los visitadores con credencial vigente y constancia de identificación, asentando los datos en el acta.",
          "Designar dos testigos. Si el contribuyente no los designa o los designados no aceptan, los visitadores los nombran y se asienta esa circunstancia.",
          "Estar presente o ser representado por persona autorizada con poder suficiente.",
          "Recibir copia firmada de cada acta levantada durante la diligencia.",
          "Que la visita se entienda con quien se encuentre en el domicilio cuando el destinatario de la orden no está, conforme a las reglas del propio artículo.",
        ],
      },
      {
        type: "p",
        text: "Cuando alguno de estos elementos falta —orden sin firma autógrafa o digital válida, identificación incompleta, designación irregular de testigos— se construye un argumento de nulidad por vicios formales. Esos argumentos no se inventan después; se ganan o se pierden en la diligencia misma, según lo que se asiente en el acta.",
      },
      {
        type: "h2",
        text: "III. Qué firmar y qué no firmar",
      },
      {
        type: "p",
        text: "El criterio general es claro: firmar el acuse de recibo de la orden y de cada acta, sí; firmar conformidad con hechos que no se entienden o que el contribuyente no puede confirmar en el momento, no. Toda acta admite manifestaciones del visitado: si hay desacuerdo con un hecho asentado, ese desacuerdo se hace constar por escrito en el espacio correspondiente del acta.",
      },
      {
        type: "ul",
        items: [
          "Firma el acuse de la orden de visita: solo acredita la recepción, no la conformidad.",
          "Firma cada acta parcial y el acta final asentando manifestaciones cuando proceda.",
          "No firmes una declaración de conformidad con hechos que no estás en condiciones de confirmar.",
          "No entregues documentación que no se haya requerido formalmente; aporta lo solicitado en los plazos previstos.",
          "Pide siempre copia de cada acta antes de que los visitadores se retiren.",
        ],
      },
      {
        type: "note",
        title: "Importante",
        text: "Negarse a firmar el acuse no detiene el procedimiento. La autoridad asienta la negativa, designa testigos y la diligencia continúa. Lo que sí cambia el rumbo es asentar manifestaciones por escrito cuando hay desacuerdo: ese registro se convierte en pieza del expediente para la defensa posterior.",
      },
      {
        type: "h2",
        text: "IV. Plazos y desarrollo de la visita",
      },
      {
        type: "p",
        text: "Una vez iniciada la visita, la autoridad cuenta con plazos previstos en el CFF para concluirla. Durante el desarrollo se levantan actas parciales que documentan lo revisado y, al cierre, un acta final con los hechos y omisiones detectados. A partir de la última acta parcial, el contribuyente tiene un plazo de 20 días hábiles para aportar pruebas y desvirtuar las observaciones antes del oficio de observaciones.",
      },
      {
        type: "ul",
        items: [
          "Aportar pruebas tras la última acta parcial / oficio de observaciones: 20 días hábiles.",
          "Acuerdo conclusivo ante PRODECON: antes de la notificación de la resolución determinativa.",
          "Recurso de revocación contra la resolución: 30 días hábiles.",
          "Juicio de nulidad ante el TFJA: 30 días hábiles.",
          "Amparo indirecto: 15 días hábiles.",
        ],
      },
      {
        type: "h2",
        text: "V. Documentación que pueden requerir",
      },
      {
        type: "p",
        text: "El alcance del requerimiento depende del objeto de la orden de visita, pero los rubros más frecuentes incluyen contabilidad del ejercicio revisado, declaraciones presentadas, papeles de trabajo, comprobantes fiscales emitidos y recibidos, contratos, conciliaciones bancarias y, en empresas importadoras, pedimentos y anexos. Toda entrega debe asentarse en acta con el detalle de lo entregado.",
      },
      {
        type: "h2",
        text: "VI. Errores comunes que escalan el procedimiento",
      },
      {
        type: "ul",
        items: [
          "Atender la diligencia sin asesoría y firmar conformidad con hechos no verificados.",
          "Entregar documentación adicional no solicitada, ampliando innecesariamente el alcance.",
          "Omitir manifestaciones por escrito cuando hay desacuerdo con un hecho asentado.",
          "Dejar pasar el plazo de 20 días hábiles para aportar pruebas tras el oficio de observaciones.",
          "Pagar el crédito determinado antes de impugnar, lo que en muchos casos se interpreta como aceptación tácita.",
          "Confundir notificaciones por estrados con falta de notificación.",
        ],
      },
      {
        type: "h2",
        text: "VII. Cuándo conviene contactar al abogado",
      },
      {
        type: "p",
        text: "El momento ideal es al recibir la orden de visita, no después del acta final. La asesoría temprana permite ordenar la entrega documental, controlar el contenido de las actas, planear el escrito de pruebas y alegatos, y evaluar oportunamente si conviene un acuerdo conclusivo ante PRODECON o avanzar hacia recurso de revocación o juicio de nulidad. Atender bien una visita evita que un procedimiento administrativo se convierta en un crédito fiscal firme con multas.",
      },
      {
        type: "h2",
        text: "VIII. Referencias",
      },
      {
        type: "ul",
        items: [
          "Código Fiscal de la Federación: artículos 42, 43, 44, 45, 46 y 46-A.",
          "Reglamento del CFF, en lo aplicable a las visitas domiciliarias.",
          "Reglas de carácter general aplicables al procedimiento.",
        ],
      },
    ],
  },
  {
    slug: "embargo-aduana-pama",
    cat: "Aduanero",
    fecha: "12 abr 2026",
    fechaIso: "2026-04-12",
    folio: "Nota 003",
    titulo:
      "Embargo precautorio en aduana: pasos para responder un PAMA",
    resumen:
      "Plazo de 10 días para pruebas y alegatos, vías de defensa procedentes y procedimiento para recuperar la mercancía con garantía mientras se resuelve el fondo.",
    autor: "Equipo ADAF",
    metaTitle:
      "Embargo precautorio en aduana: pasos para responder un PAMA",
    metaDescription:
      "Qué es el Procedimiento Administrativo en Materia Aduanera, plazo de 10 días para pruebas y alegatos, vías de defensa y recuperación de la mercancía con garantía.",
    body: [
      {
        type: "p",
        text: "Cuando una mercancía queda retenida en una aduana o en un recinto fiscalizado, lo primero que recibe el importador es un acta de inicio del Procedimiento Administrativo en Materia Aduanera, mejor conocido como PAMA. Ese acta marca el arranque de un procedimiento con plazos cortos en el que el contribuyente tiene una sola oportunidad amplia para aportar pruebas y alegatos antes de que la autoridad emita la resolución determinativa. La diferencia entre responder bien y responder mal —o no responder— se traduce en la pérdida de la mercancía, en multas que pueden alcanzar el 130% del valor en aduana y, en casos graves, en el escalamiento a procedimientos penales por contrabando.",
      },
      {
        type: "p",
        text: "Esta nota describe qué es el PAMA, el plazo de 10 días para pruebas y alegatos, las vías de defensa que abre la resolución y el procedimiento para recuperar la mercancía con garantía mientras se resuelve el fondo del asunto.",
      },
      {
        type: "h2",
        text: "I. Qué es el PAMA y cuándo se inicia",
      },
      {
        type: "p",
        text: "El PAMA es el procedimiento administrativo mediante el cual la autoridad aduanera embarga la mercancía de manera precautoria cuando presume una irregularidad en la operación de comercio exterior. La presunción puede derivar de diversos supuestos: clasificación arancelaria incorrecta, valor en aduana inexacto, omisión de regulaciones no arancelarias (NOMs, permisos previos, avisos automáticos), pedimento con datos inconsistentes, certificado de origen no acreditado, o documentación técnica insuficiente.",
      },
      {
        type: "p",
        text: "Iniciado el PAMA, la autoridad levanta acta circunstanciada con los hechos y la fundamentación. Esa acta es la base de todo: lo que ahí se asiente —y lo que ahí se deje de asentar— pesa en el resto del procedimiento. Conviene revisarla con detalle desde la primera lectura: qué mercancía se describe, qué pedimento ampara la operación, qué fundamento legal cita la autoridad y qué prueba ofreció el visitador para sostener la presunción.",
      },
      {
        type: "h2",
        text: "II. Plazo de 10 días para pruebas y alegatos",
      },
      {
        type: "p",
        text: "Una vez levantada el acta de inicio, el contribuyente cuenta con 10 días hábiles para ofrecer pruebas y formular alegatos. Es un plazo estructuralmente distinto a los plazos generales de 30 días que rigen otras vías de impugnación: aquí el procedimiento tiene un compás más corto y una sola oportunidad amplia de defensa antes de la resolución determinativa.",
      },
      {
        type: "p",
        text: "Las pruebas habituales en un PAMA incluyen documentos que acreditan la legalidad de la importación —pedimento, factura comercial, lista de empaque, certificado de origen— y documentos técnicos del producto cuando la observación es de cumplimiento normativo (NOMs, etiquetado, fichas técnicas). Cuando la observación es de clasificación o valor, las pruebas se construyen con análisis comparativos, dictámenes técnicos y referencias a las Reglas Generales de Interpretación de la Tarifa.",
      },
      {
        type: "note",
        title: "El plazo no se prorroga por costumbre",
        text: "El plazo de 10 días corre desde el levantamiento del acta. No se interrumpe por gestiones extraoficiales con la aduana, ni por la negociación con el agente aduanal. Si llega el día 10 sin escrito de pruebas y alegatos presentado en forma, la oportunidad se pierde y el procedimiento avanza con el material que la autoridad recabó por su cuenta.",
      },
      {
        type: "h2",
        text: "III. Vías de defensa contra la resolución",
      },
      {
        type: "p",
        text: "Cerrado el periodo de pruebas y alegatos, la autoridad emite resolución. Si confirma la irregularidad, determina el crédito fiscal por contribuciones al comercio exterior omitidas, las multas correspondientes y, en su caso, declara la mercancía en propiedad del Fisco Federal. Frente a esa resolución se abren las vías de impugnación.",
      },
      {
        type: "ul",
        items: [
          "Recurso de revocación ante la propia autoridad: 30 días hábiles desde la notificación de la resolución.",
          "Juicio contencioso administrativo (nulidad) ante el TFJA: 30 días hábiles. No se puede ir simultáneamente con el recurso; se elige una vía.",
          "Amparo directo contra la sentencia del TFJA: 15 días hábiles.",
          "Amparo indirecto cuando hay actos de imposible reparación durante el procedimiento: 15 días hábiles desde la notificación o ejecución del acto.",
        ],
      },
      {
        type: "p",
        text: "La elección entre recurso de revocación y juicio de nulidad no es trivial. El recurso es más rápido y económico, pero se resuelve por la propia autoridad emisora; el juicio es más profundo en alcance probatorio y permite suspensión más amplia, pero toma más tiempo. La decisión depende del expediente: fortaleza de las pruebas, monto del crédito, mercancía en juego y plazos comerciales del importador.",
      },
      {
        type: "h2",
        text: "IV. Recuperación de la mercancía con garantía",
      },
      {
        type: "p",
        text: "Mientras se resuelve el fondo, en muchos casos la mercancía puede recuperarse mediante el otorgamiento de garantía del interés fiscal. La garantía cubre el monto del crédito fiscal determinado o presumido y se constituye en alguna de las modalidades previstas en el artículo 141 del CFF: depósito en dinero, fianza, prenda o hipoteca, embargo administrativo, entre otras.",
      },
      {
        type: "p",
        text: "La recuperación con garantía es una decisión de gestión: implica afectar liquidez para liberar mercancía cuya pérdida operativa podría ser mayor que el costo financiero de la garantía. Para mercancía perecedera, con ciclos comerciales cortos o con compromisos contractuales activos, recuperarla pronto suele ser preferible al ahorro de no garantizar.",
      },
      {
        type: "h2",
        text: "V. Documentos que conviene reunir desde el día uno",
      },
      {
        type: "ul",
        items: [
          "Acta circunstanciada del inicio del PAMA, con todos sus anexos.",
          "Pedimento de importación y sus anexos (factura, lista de empaque, conocimiento de embarque o guía aérea).",
          "Certificado de origen cuando se aplica preferencia arancelaria de algún tratado.",
          "Documentación técnica del producto: NOMs aplicables, fichas técnicas, etiquetado, registros sanitarios si aplican.",
          "Comunicaciones previas con el agente aduanal y con la autoridad.",
          "Constancias del cumplimiento de regulaciones no arancelarias (permisos, avisos automáticos).",
        ],
      },
      {
        type: "h2",
        text: "VI. Errores comunes en la respuesta a un PAMA",
      },
      {
        type: "ul",
        items: [
          "Esperar a que la mercancía sea declarada en abandono antes de actuar.",
          "Presentar el escrito de pruebas y alegatos sin documental técnica de respaldo.",
          "Confundir el plazo del PAMA con el plazo del recurso de revocación posterior.",
          "Pagar el crédito determinado antes de evaluar la impugnación.",
          "Asumir que el agente aduanal puede sustituir la representación legal en el procedimiento.",
        ],
      },
      {
        type: "h2",
        text: "VII. Cuándo transigir y cuándo litigar",
      },
      {
        type: "p",
        text: "No todos los PAMA conviene litigarlos hasta el final. Cuando la observación tiene sustento documental sólido del lado de la autoridad y la diferencia económica es manejable, una corrección espontánea o un pago con regularización puede ser preferible al costo de un litigio que probablemente se pierda. Cuando, en cambio, la presunción de la autoridad se sostiene en interpretaciones discutibles —clasificación, valor, alcance de una NOM— el litigio tiene fundamento y los antecedentes del TFJA suelen ser favorables al contribuyente bien preparado.",
      },
      {
        type: "p",
        text: "La decisión se toma con expediente en mano, no por intuición. Un diagnóstico técnico al inicio del PAMA permite estimar probabilidades reales y orientar la estrategia desde el escrito de pruebas y alegatos.",
      },
      {
        type: "h2",
        text: "VIII. Referencias",
      },
      {
        type: "ul",
        items: [
          "Ley Aduanera: disposiciones sobre PAMA, embargo precautorio y abandono de mercancías.",
          "Código Fiscal de la Federación: artículos 141 (formas de garantizar el interés fiscal) y 73 (corrección espontánea).",
          "Reglas Generales de Comercio Exterior vigentes.",
          "Reglas Generales de Interpretación de la Tarifa de la Ley de los Impuestos Generales de Importación y Exportación.",
        ],
      },
      {
        type: "p",
        text: "Si tu empresa tiene mercancía retenida o acaba de recibir el acta de inicio, el plazo de 10 días corre desde ese momento. Una valoración temprana ordena el escrito de pruebas y alegatos y abre, cuando procede, la vía de recuperación con garantía mientras se resuelve el fondo.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip diacritics
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
