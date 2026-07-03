import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacidad",
  description:
    "Política de privacidad, comunicaciones comerciales, cookies y devoluciones de la web.",
  path: "/privacidad",
});

type ContentBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "address"; lines: string[] };

type LegalSection = {
  title: string;
  blocks: ContentBlock[];
};

type LegalGroup = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

const legalGroups: LegalGroup[] = [
  {
    eyebrow: "RGPD",
    title: "Política de privacidad",
    intro:
      "De conformidad con el Reglamento (UE) 2016/679, General de Protección de Datos (RGPD), se informa a los usuarios de este sitio web del tratamiento de sus datos personales conforme a lo siguiente:",
    sections: [
      {
        title: "1. Responsable del tratamiento",
        blocks: [
          {
            kind: "address",
            lines: [
              "Razón social: Instituto Aragonés de Osteopatía, S.L.",
              "NIF/CIF: B50862127",
              "Dirección: Calle Maestro Marquina, 14-16 local, 50006 Zaragoza",
              "Correo electrónico de contacto: protecciondedatos@institutosteopatia.com",
              "Correo general: osteopatia@institutosteopatia.com",
            ],
          },
        ],
      },
      {
        title: "2. Ámbito sanitario y formativo",
        blocks: [
          {
            kind: "paragraph",
            text: "El Instituto Aragonés de Osteopatía desarrolla actividades sanitarias y formativas. En el marco de la actividad sanitaria, los datos personales tratados pueden incluir, en determinados casos, datos relativos a la salud, considerados categorías especiales de datos conforme al artículo 9 del RGPD.",
          },
        ],
      },
      {
        title: "3. Datos personales objeto de tratamiento",
        blocks: [
          {
            kind: "paragraph",
            text: "A través del sitio web, formularios y demás canales de contacto, se podrán recabar los siguientes datos personales:",
          },
          {
            kind: "list",
            items: [
              "Datos identificativos: nombre y apellidos.",
              "Datos de contacto: correo electrónico, teléfono.",
              "Datos de navegación: dirección IP, tipo de navegador, dispositivo y datos analíticos.",
              "Datos académicos o profesionales, en caso de solicitudes de información, inscripción o relación formativa.",
              "Datos de salud, exclusivamente cuando sea necesario para la prestación de servicios sanitarios.",
            ],
          },
        ],
      },
      {
        title: "4. Finalidades del tratamiento y base jurídica",
        blocks: [
          {
            kind: "paragraph",
            text: "Los datos personales facilitados por los interesados serán tratados con las siguientes finalidades y conforme a las bases legales indicadas:",
          },
          {
            kind: "list",
            items: [
              "Atender consultas o solicitudes de información: consentimiento del interesado (art. 6.1.a RGPD).",
              "Gestión administrativa, académica o comercial: ejecución de un contrato o aplicación de medidas precontractuales (art. 6.1.b RGPD).",
              "Gestión sanitaria y atención clínica: ejecución de un contrato y cumplimiento de obligaciones legales (art. 6.1.b y c RGPD).",
              "Tratamiento de datos de salud: prestación de asistencia sanitaria (art. 9.2.h RGPD).",
              "Envío de comunicaciones informativas o comerciales relacionadas con productos, servicios, actividades o promociones: consentimiento del interesado (art. 6.1.a RGPD).",
              "Elaboración de perfiles comerciales básicos, basados en la información facilitada por el propio interesado, con el fin de ofrecer contenidos y servicios de su interés. En ningún caso se adoptarán decisiones automatizadas basadas en dichos perfiles.",
              "Cumplimiento de obligaciones legales, sanitarias, fiscales o administrativas: cumplimiento de una obligación legal (art. 6.1.c RGPD).",
              "Mejora de la experiencia de usuario y análisis estadístico del uso del sitio web: interés legítimo del responsable (art. 6.1.f RGPD).",
            ],
          },
        ],
      },
      {
        title: "5. Plazo de conservación de los datos",
        blocks: [
          {
            kind: "paragraph",
            text: "Los datos personales se conservarán conforme a los siguientes criterios:",
          },
          {
            kind: "list",
            items: [
              "Datos sanitarios e historias clínicas: durante los plazos establecidos por la normativa sanitaria estatal y autonómica aplicable.",
              "Datos académicos y formativos: mientras se mantenga la relación formativa y durante los plazos legales posteriores exigidos.",
              "Datos comerciales: mientras no se revoque el consentimiento otorgado.",
              "Resto de datos personales: mientras se mantenga la relación contractual, académica o mercantil, y durante los plazos exigidos por la normativa fiscal, contable o administrativa.",
            ],
          },
        ],
      },
      {
        title: "6. Destinatarios de los datos",
        blocks: [
          {
            kind: "paragraph",
            text: "Los datos personales no se cederán a terceros, salvo obligación legal o cuando sea necesario para la correcta prestación de los servicios (proveedores tecnológicos, servicios de alojamiento web, plataformas de gestión). Asimismo, podrán comunicarse a empresas del mismo grupo exclusivamente para fines administrativos internos.",
          },
        ],
      },
      {
        title: "7. Transferencias internacionales de datos",
        blocks: [
          {
            kind: "paragraph",
            text: "Con carácter general, no se realizan transferencias internacionales de datos. En caso de utilizar servicios de terceros ubicados fuera del Espacio Económico Europeo, se adoptarán las garantías adecuadas conforme a los artículos 44 y siguientes del RGPD.",
          },
        ],
      },
      {
        title: "8. Derechos de las personas interesadas",
        blocks: [
          {
            kind: "paragraph",
            text: "Las personas interesadas tienen derecho a:",
          },
          {
            kind: "list",
            items: [
              "Acceder a sus datos personales.",
              "Solicitar la rectificación de los datos inexactos.",
              "Solicitar la supresión de sus datos cuando ya no sean necesarios para los fines recogidos.",
              "Oponerse al tratamiento de sus datos en determinadas circunstancias.",
              "Solicitar la limitación del tratamiento.",
              "Solicitar la portabilidad de sus datos.",
              "Retirar el consentimiento prestado en cualquier momento, sin efectos retroactivos.",
            ],
          },
          {
            kind: "paragraph",
            text: "Para el ejercicio de estos derechos, el interesado deberá dirigir una solicitud al correo electrónico protecciondedatos@institutosteopatia.com, adjuntando copia de un documento que acredite su identidad.",
          },
        ],
      },
      {
        title: "9. Medidas de seguridad",
        blocks: [
          {
            kind: "paragraph",
            text: "El responsable del tratamiento aplica las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su pérdida, alteración, acceso no autorizado o divulgación indebida, atendiendo al estado de la técnica, la naturaleza de los datos tratados y los riesgos existentes.",
          },
        ],
      },
      {
        title: "10. Autoridad de control",
        blocks: [
          {
            kind: "paragraph",
            text: "En caso de considerar que el tratamiento de sus datos personales no se ajusta a la normativa vigente, el interesado puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD): www.aepd.es.",
          },
        ],
      },
    ],
  },
  {
    eyebrow: "LSSI-CE",
    title: "Política de comunicaciones comerciales",
    intro:
      "De conformidad con el Reglamento (UE) 2016/679, General de Protección de Datos (RGPD), y la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de lo siguiente:",
    sections: [
      {
        title: "1. Tratamiento de los datos",
        blocks: [
          {
            kind: "paragraph",
            text: "Los datos personales utilizados para el envío de comunicaciones comerciales son tratados por Instituto Aragonés de Osteopatía, S.L. y han sido recabados con el consentimiento expreso del interesado, con la finalidad de informar sobre servicios, actividades, campañas, promociones o para dar respuesta a solicitudes realizadas por el propio interesado.",
          },
        ],
      },
      {
        title: "2. Naturaleza de las comunicaciones",
        blocks: [
          {
            kind: "paragraph",
            text: "Las comunicaciones enviadas tienen carácter informativo y/o comercial y se remiten únicamente a aquellos destinatarios que han otorgado su autorización previa. Dichas comunicaciones están dirigidas exclusivamente a su destinatario y pueden contener información de carácter confidencial o privilegiado.",
          },
          {
            kind: "paragraph",
            text: "Queda prohibida cualquier modificación, retransmisión, difusión u otro uso de la información contenida en estas comunicaciones por personas o entidades distintas de su destinatario, salvo autorización expresa del Instituto Aragonés de Osteopatía. En caso de haber recibido el mensaje por error, se ruega proceder a su eliminación inmediata y abstenerse de su lectura o del acceso a los archivos adjuntos.",
          },
          {
            kind: "paragraph",
            text: "El correo electrónico a través de Internet no permite garantizar plenamente la confidencialidad, integridad o correcta recepción de los mensajes, por lo que el Instituto Aragonés de Osteopatía no asume responsabilidad por estas circunstancias.",
          },
        ],
      },
      {
        title: "3. Derecho de oposición y baja de comunicaciones",
        blocks: [
          {
            kind: "paragraph",
            text: "El destinatario podrá oponerse en cualquier momento al tratamiento de sus datos con fines promocionales o comerciales solicitando la baja del servicio mediante el envío de un correo electrónico a osteopatia@institutosteopatia.com, indicando en el asunto del mensaje \"Baja comunicación\".",
          },
        ],
      },
      {
        title: "4. Ejercicio de derechos RGPD",
        blocks: [
          {
            kind: "paragraph",
            text: "Asimismo, el destinatario podrá ejercer gratuitamente los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de los datos, así como revocar el consentimiento otorgado en cualquier momento, sin efectos retroactivos.",
          },
          {
            kind: "paragraph",
            text: "Para el ejercicio de estos derechos, deberá dirigir una solicitud al correo electrónico protecciondedatos@institutosteopatia.com, o bien mediante escrito firmado dirigido a:",
          },
          {
            kind: "address",
            lines: [
              "Instituto Aragonés de Osteopatía, S.L.",
              "C/ Maestro Marquina 14-16 local",
              "50006 Zaragoza",
            ],
          },
        ],
      },
      {
        title: "5. Base legal del tratamiento",
        blocks: [
          {
            kind: "paragraph",
            text: "La base legal para el tratamiento de los datos personales con fines comerciales es el consentimiento del interesado, conforme al artículo 6.1.a del RGPD.",
          },
        ],
      },
    ],
  },
  {
    eyebrow: "Cookies",
    title: "Política de cookies",
    intro:
      "De conformidad con el Reglamento (UE) 2016/679, General de Protección de Datos (RGPD), la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD) y la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios sobre el uso de cookies en este sitio web.",
    sections: [
      {
        title: "1. ¿Qué son las cookies?",
        blocks: [
          {
            kind: "paragraph",
            text: "Las cookies son pequeños archivos de texto que se descargan y almacenan en el dispositivo del usuario (ordenador, smartphone, tableta u otro dispositivo electrónico) cuando visita determinadas páginas web. Su finalidad puede ser muy diversa, como almacenar preferencias de navegación, recopilar información estadística, permitir determinadas funcionalidades técnicas o facilitar la interacción con el sitio web.",
          },
          {
            kind: "paragraph",
            text: "En algunos casos, las cookies pueden llegar a reconocer al usuario o a su dispositivo, especialmente cuando se combinan con otra información, siempre de acuerdo con la normativa vigente.",
          },
        ],
      },
      {
        title: "2. ¿Por qué son útiles las cookies?",
        blocks: [
          {
            kind: "paragraph",
            text: "Desde el punto de vista del usuario, las cookies permiten una navegación más ágil y personalizada, recordando preferencias como el idioma o determinadas configuraciones. Desde el punto de vista del titular del sitio web, permiten mejorar los servicios ofrecidos y analizar el uso que los usuarios hacen del sitio web con fines estadísticos y de mejora continua.",
          },
        ],
      },
      {
        title: "3. Tipos de cookies utilizadas",
        blocks: [
          {
            kind: "paragraph",
            text: "Este sitio web utiliza cookies propias y de terceros. En función de su finalidad, se emplean los siguientes tipos de cookies:",
          },
          {
            kind: "list",
            items: [
              "Cookies técnicas o necesarias: permiten la navegación por el sitio web y el uso de las diferentes opciones o servicios que ofrece. Son imprescindibles para el correcto funcionamiento de la web.",
              "Cookies de personalización o mejora del rendimiento: permiten recordar información para que el usuario acceda al servicio con determinadas características, como el idioma, el tipo de navegador o configuraciones previamente seleccionadas.",
              "Cookies de análisis o estadísticas: bien tratadas por el titular del sitio web o por terceros, permiten cuantificar el número de usuarios y analizar de forma estadística la utilización del sitio web, con el fin de mejorar los contenidos y servicios ofrecidos.",
              "Cookies de geolocalización: permiten conocer de forma aproximada y anónima la ubicación del dispositivo desde el que se accede al sitio web, con el fin de ofrecer contenidos o servicios adaptados territorialmente.",
              "Cookies de registro: se generan cuando el usuario se registra o inicia sesión en el sitio web, y permiten identificarlo mientras dure la sesión o hasta que cierre el navegador.",
              "Cookies publicitarias: permiten gestionar de la forma más eficaz posible los espacios publicitarios del sitio web, adecuando el contenido del anuncio al servicio solicitado o al uso que el usuario realice del sitio web.",
              "Cookies de terceros: en algunas páginas pueden instalarse cookies de terceros, como servicios de análisis (por ejemplo, Google Analytics) o redes sociales, que permiten compartir contenidos o analizar la navegación.",
            ],
          },
        ],
      },
      {
        title: "4. Base legal para el uso de cookies",
        blocks: [
          {
            kind: "list",
            items: [
              "Cookies técnicas o necesarias: interés legítimo del responsable (art. 6.1.f RGPD).",
              "Cookies de análisis, personalización, publicitarias o de terceros: consentimiento del usuario (art. 6.1.a RGPD), prestado a través del banner o panel de configuración de cookies.",
            ],
          },
        ],
      },
      {
        title: "5. Gestión y configuración de cookies",
        blocks: [
          {
            kind: "paragraph",
            text: "El usuario puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante:",
          },
          {
            kind: "list",
            items: [
              "El panel o banner de configuración de cookies disponible en el sitio web.",
              "La configuración de las opciones del navegador utilizado.",
            ],
          },
          {
            kind: "paragraph",
            text: "La desactivación de determinadas cookies puede afectar al correcto funcionamiento del sitio web o a la disponibilidad de algunos servicios.",
          },
          {
            kind: "paragraph",
            text: "A continuación se facilitan enlaces informativos para la gestión de cookies en los principales navegadores:",
          },
          {
            kind: "list",
            items: [
              "Google Chrome: https://support.google.com/chrome/answer/95647?hl=es",
              "Mozilla Firefox: https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan",
              "Microsoft Edge / Internet Explorer: https://support.microsoft.com/es-es/help/17442",
              "Safari: https://support.apple.com/es-es/guide/safari/sfri11471/mac",
              "Safari para iOS (iPhone y iPad): https://support.apple.com/es-es/HT201265",
            ],
          },
        ],
      },
      {
        title: "6. Información adicional sobre cookies",
        blocks: [
          {
            kind: "paragraph",
            text: "Para obtener más información sobre las cookies, incluyendo cómo ver qué cookies se han instalado en su dispositivo y cómo gestionarlas o eliminarlas, puede consultar los siguientes sitios web:",
          },
          {
            kind: "list",
            items: ["allaboutcookies.org", "youronlinechoices.eu", "youronlinechoices.com"],
          },
        ],
      },
      {
        title: "7. Actualización de la Política de Cookies",
        blocks: [
          {
            kind: "paragraph",
            text: "El titular del sitio web puede modificar la presente Política de Cookies en función de cambios legislativos, reglamentarios o técnicos. Se recomienda al usuario revisar esta política de forma periódica para estar adecuadamente informado sobre cómo y para qué se utilizan las cookies.",
          },
        ],
      },
      {
        title: "8. Contacto",
        blocks: [
          {
            kind: "paragraph",
            text: "Si desea ponerse en contacto con nosotros en relación con esta Política de Cookies, puede hacerlo a través del correo electrónico protecciondedatos@institutosteopatia.com.",
          },
        ],
      },
    ],
  },
  {
    eyebrow: "Condiciones",
    title: "Política de devoluciones, reembolsos y cancelaciones",
    intro:
      "La presente política regula las condiciones aplicables a las devoluciones, reembolsos y cancelaciones de productos y formaciones ofrecidas por el Instituto Aragonés de Osteopatía (IAO).",
    sections: [
      {
        title: "1. Ámbito de aplicación y aspectos legales",
        blocks: [
          {
            kind: "paragraph",
            text: "El Instituto Aragonés de Osteopatía cumple con los requisitos legales establecidos para la impartición de formación especializada, siendo un centro reconocido a nivel nacional por la calidad de sus programas y la excelencia de su profesorado.",
          },
          {
            kind: "paragraph",
            text: "El Instituto otorga diplomas y certificados que capacitan profesionalmente y permiten el ejercicio profesional tanto por cuenta propia como ajena, de acuerdo con la jurisprudencia del Tribunal Supremo, el Real Decreto Legislativo del Impuesto sobre Actividades Económicas (IAE), la Resolución del Parlamento Europeo de 20 de mayo de 1997 sobre el estatuto de la medicina no convencional, así como la normativa laboral vigente (Estatuto de los Trabajadores y Ley Orgánica de Libertad Sindical).",
          },
          {
            kind: "paragraph",
            text: "Los alumnos formados en el Instituto Aragonés de Osteopatía podrán beneficiarse de diplomas y certificados laborales, no académicos oficiales, que acreditan su competencia profesional y su capacitación para el ejercicio legal de la actividad.",
          },
        ],
      },
      {
        title: "2. Política de devoluciones de productos",
        blocks: [
          {
            kind: "paragraph",
            text: "El plazo para solicitar la devolución de productos físicos o retractación en caso de iniciar un curso es de 30 días naturales desde la recepción del producto o desde el comienzo del mismo.",
          },
          {
            kind: "paragraph",
            text: "El producto, en caso de material de texto, deberá encontrarse sin usar, en perfecto estado y en su embalaje original.",
          },
          {
            kind: "paragraph",
            text: "No se admiten devoluciones de productos digitales o descargables, tarjetas de regalo, productos de higiene personal o material sanitario de uso individual, en caso de que hubiere.",
          },
        ],
      },
      {
        title: "3. Reembolsos",
        blocks: [
          {
            kind: "paragraph",
            text: "Una vez recibido el producto devuelto y tras comprobar su estado, se notificará al cliente la aprobación o denegación del reembolso.",
          },
          {
            kind: "paragraph",
            text: "En caso de aprobación, el reembolso se efectuará utilizando el mismo medio de pago empleado en la compra, dentro del plazo legalmente establecido.",
          },
        ],
      },
      {
        title: "4. Gastos de envío",
        blocks: [
          {
            kind: "paragraph",
            text: "Los gastos de envío derivados de la devolución correrán a cargo del cliente, salvo que la devolución se deba a un error imputable al Instituto Aragonés de Osteopatía o a un defecto del producto.",
          },
        ],
      },
      {
        title: "5. Política de cancelación de cursos y formaciones",
        blocks: [
          {
            kind: "paragraph",
            text: "En caso de cancelación de la inscripción a un curso o formación:",
          },
          {
            kind: "list",
            items: [
              "El importe abonado no será reembolsable una vez formalizada la inscripción y comenzada la formación.",
              "El importe abonado podrá ser utilizado como crédito para la realización de otros cursos o actividades formativas del Instituto, en el curso académico siguiente.",
            ],
          },
          {
            kind: "paragraph",
            text: "Únicamente en casos debidamente justificados y por causas de fuerza mayor, a valorar por la dirección del centro, el Instituto podrá acceder a la devolución de una parte proporcional del importe pendiente. Se aplicará una deducción del 10 % sobre el precio total del curso en concepto de gastos de gestión.",
          },
        ],
      },
      {
        title: "6. Contacto",
        blocks: [
          {
            kind: "paragraph",
            text: "Para cualquier consulta relacionada con devoluciones, reembolsos o cancelaciones, puede ponerse en contacto con el Instituto Aragonés de Osteopatía a través del siguiente correo electrónico: osteopatia@institutosteopatia.com.",
          },
        ],
      },
    ],
  },
];

function LegalBlock({ block }: { block: ContentBlock }) {
  if (block.kind === "list") {
    return (
      <ul className="mt-4 space-y-3 pl-5 text-muted">
        {block.items.map((item) => (
          <li key={item} className="list-disc leading-8">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.kind === "address") {
    return (
      <address className="mt-4 not-italic leading-8 text-parchment">
        {block.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
    );
  }

  return <p className="mt-4 leading-8 text-muted">{block.text}</p>;
}

export default function PrivacyPage() {
  return (
    <section className="px-5 pb-20 pt-36 sm:px-8 lg:pb-28 lg:pt-44">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Información legal"
            title="Privacidad y condiciones"
            description="Información sobre protección de datos, comunicaciones comerciales, uso de cookies y condiciones de devolución, reembolso y cancelación."
          />
        </Reveal>

        <div className="mt-14 space-y-16">
          {legalGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 80}>
              <article className="border border-gold/20 bg-panel/55 p-6 sm:p-10">
                <p className="flex items-center gap-4 text-[.68rem] font-bold uppercase tracking-[.3em] text-gold-light before:h-px before:w-9 before:bg-gold">
                  {group.eyebrow}
                </p>
                <h2 className="mt-6 font-display text-4xl leading-tight text-ivory sm:text-5xl">
                  {group.title}
                </h2>
                <p className="mt-6 max-w-4xl text-base leading-8 text-parchment">
                  {group.intro}
                </p>

                <div className="mt-10 space-y-9">
                  {group.sections.map((section) => (
                    <section key={section.title}>
                      <h3 className="font-display text-2xl leading-tight text-ivory sm:text-3xl">
                        {section.title}
                      </h3>
                      {section.blocks.map((block, blockIndex) => (
                        <LegalBlock key={`${section.title}-${blockIndex}`} block={block} />
                      ))}
                    </section>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
