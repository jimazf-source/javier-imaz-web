import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacidad",
  description:
    "Aviso legal, política de privacidad, cookies y condiciones de compra de Lágrimas Errantes.",
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
  intro?: string;
  sections: LegalSection[];
};

const contactEmail = "jimazf@me.com";

const legalGroups: LegalGroup[] = [
  {
    eyebrow: "Aviso legal",
    title: "Aviso legal y condiciones de uso",
    sections: [
      {
        title: "1.1. Titularidad del sitio web",
        blocks: [
          {
            kind: "paragraph",
            text: "En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa de que el sitio web www.lagrimaserrantes.com es titularidad de:",
          },
          {
            kind: "address",
            lines: [
              "Titular: Javier Imaz Fandos",
              "NIF: 17863792Z",
              "Nombre artístico o proyecto creativo: Lágrimas Errantes / Zami Reivaj",
              "Domicilio a efectos legales: C/ Maestro Marquina 14-16 local, 50006 Zaragoza.",
              `Correo electrónico de contacto: ${contactEmail}`,
              "Sitio web: www.lagrimaserrantes.com",
            ],
          },
        ],
      },
      {
        title: "1.2. Objeto de la web",
        blocks: [
          {
            kind: "paragraph",
            text: "www.lagrimaserrantes.com es una web de autor destinada a presentar y difundir obras literarias, proyectos editoriales, contenidos creativos, noticias, eventos, presentaciones, materiales relacionados con el universo literario Lágrimas Errantes y, en su caso, proyectos musicales vinculados a dichas obras.",
          },
          {
            kind: "paragraph",
            text: "El sitio puede incluir información sobre novelas, poesía, ensayos, canciones, álbumes, material audiovisual, enlaces de compra o escucha en plataformas externas, formularios de contacto, suscripción a boletines informativos y contenidos de carácter cultural o promocional.",
          },
        ],
      },
      {
        title: "1.3. Uso del sitio web",
        blocks: [
          {
            kind: "paragraph",
            text: "El acceso y uso del sitio web atribuye la condición de usuario e implica la aceptación de las presentes condiciones. El usuario se compromete a utilizar la web de forma lícita, diligente y respetuosa con los derechos de terceros, la propiedad intelectual, la imagen del autor y la normativa aplicable.",
          },
          {
            kind: "paragraph",
            text: "Queda prohibido utilizar la web para finalidades ilícitas, lesivas, fraudulentas, ofensivas, contrarias a la buena fe o que puedan dañar, inutilizar o sobrecargar el funcionamiento del sitio.",
          },
        ],
      },
      {
        title: "1.4. Enlaces a terceros",
        blocks: [
          {
            kind: "paragraph",
            text: "La web puede incluir enlaces a plataformas de venta, editoriales, distribuidoras, librerías, servicios musicales, redes sociales, plataformas de streaming, plataformas de vídeo, pasarelas de pago o páginas de terceros. Estos enlaces se ofrecen para facilitar el acceso a contenidos, compras, escucha musical, descargas, reservas o información complementaria.",
          },
          {
            kind: "paragraph",
            text: "Cuando el usuario acceda a una plataforma externa, quedará sujeto a las condiciones legales, políticas de privacidad, cookies, compra, devolución y contratación de dicha plataforma. Lágrimas Errantes no controla ni asume responsabilidad por el contenido, funcionamiento, disponibilidad, políticas o prácticas de privacidad de sitios web ajenos.",
          },
        ],
      },
      {
        title: "1.5. Propiedad intelectual e industrial",
        blocks: [
          {
            kind: "paragraph",
            text: "Todos los contenidos de la web, incluyendo textos, fragmentos literarios, títulos, nombres de obras, sinopsis, poemas, comentarios, imágenes, fotografías, ilustraciones, diseños, logotipos, composiciones musicales, vídeos, estructura, selección de contenidos y elementos gráficos, están protegidos por derechos de propiedad intelectual e industrial.",
          },
          {
            kind: "paragraph",
            text: "Salvo autorización expresa por escrito, queda prohibida la reproducción, distribución, comunicación pública, transformación, extracción, reutilización o explotación de los contenidos de la web, total o parcialmente, con fines comerciales o no comerciales.",
          },
          {
            kind: "paragraph",
            text: "Se permite compartir enlaces públicos a la web siempre que no se altere el contenido, no se atribuya falsamente la autoría y no se perjudique la imagen del proyecto o del autor.",
          },
        ],
      },
      {
        title: "1.6. Responsabilidad",
        blocks: [
          {
            kind: "paragraph",
            text: "El titular procurará mantener la web actualizada, accesible y libre de errores técnicos, pero no garantiza la disponibilidad continua del sitio ni la inexistencia de interrupciones, fallos, errores de conexión, mantenimiento, incidencias de hosting o problemas derivados de terceros.",
          },
          {
            kind: "paragraph",
            text: "La información incluida en la web tiene carácter cultural, literario, informativo o promocional. No constituye asesoramiento profesional, sanitario, legal, financiero ni de ningún otro tipo.",
          },
        ],
      },
      {
        title: "1.7. Legislación aplicable",
        blocks: [
          {
            kind: "paragraph",
            text: "Las presentes condiciones se rigen por la legislación española y, en particular, por la normativa aplicable en materia de servicios de la sociedad de la información, protección de datos, consumidores y usuarios, propiedad intelectual y comercio electrónico.",
          },
        ],
      },
    ],
  },
  {
    eyebrow: "Privacidad",
    title: "Política de privacidad",
    sections: [
      {
        title: "2.1. Responsable del tratamiento",
        blocks: [
          {
            kind: "paragraph",
            text: "El responsable del tratamiento de los datos personales recogidos a través de www.lagrimaserrantes.com es:",
          },
          {
            kind: "address",
            lines: [
              "Responsable: Javier Imaz Fandos",
              "NIF: 17863792Z",
              "Domicilio a efectos legales: C/ Maestro Marquina 14-16 local, 50006 Zaragoza.",
              `Correo electrónico: ${contactEmail}`,
            ],
          },
          {
            kind: "paragraph",
            text: "Esta política se aplica a los datos personales tratados a través de la web, formularios de contacto, suscripción a newsletter, comunicaciones electrónicas y, en su caso, venta directa o preventa gestionada por el propio titular.",
          },
        ],
      },
      {
        title: "2.2. Datos personales tratados",
        blocks: [
          {
            kind: "paragraph",
            text: "Según el uso que el usuario realice de la web, podrán tratarse las siguientes categorías de datos:",
          },
          {
            kind: "list",
            items: [
              "Datos identificativos: nombre, apellidos o nombre con el que el usuario se identifique.",
              "Datos de contacto: correo electrónico, teléfono si se facilita voluntariamente y dirección postal en caso de compras, envíos, preventas o solicitudes concretas.",
              "Datos de navegación: dirección IP, identificadores técnicos, dispositivo, navegador, sistema operativo, páginas visitadas, fecha y hora de acceso y datos analíticos.",
              "Datos relativos a consultas: contenido del mensaje enviado por el usuario mediante formularios, correo electrónico o redes sociales.",
              "Datos comerciales o transaccionales: productos solicitados, pedidos, justificantes de compra, datos de facturación y datos necesarios para gestionar envíos o incidencias, únicamente si se realiza venta directa desde la web o por canales propios.",
              "Datos de preferencias: interés en libros, lanzamientos, presentaciones, newsletter, preventas, material musical o contenidos del universo creativo.",
            ],
          },
          {
            kind: "paragraph",
            text: "No se solicitan ni se tratan de forma intencionada datos especialmente protegidos, como datos de salud, ideología, religión, origen racial, orientación sexual, afiliación sindical o datos biométricos. El usuario debe evitar incluir este tipo de información en formularios o mensajes.",
          },
        ],
      },
      {
        title: "2.3. Finalidades del tratamiento",
        blocks: [
          {
            kind: "paragraph",
            text: "Los datos personales podrán tratarse para las siguientes finalidades:",
          },
          {
            kind: "list",
            items: [
              "Atender consultas, solicitudes, propuestas, mensajes de lectores, colaboraciones, entrevistas, eventos o comunicaciones enviadas por el usuario.",
              "Gestionar la suscripción a la newsletter o boletín de novedades, incluyendo noticias editoriales, publicaciones, presentaciones, lanzamientos, preventas, nuevos fragmentos, canciones, álbumes o contenidos relacionados con el proyecto Lágrimas Errantes.",
              "Gestionar compras, reservas, preventas, envíos, facturación, devoluciones o incidencias cuando la operación sea realizada directamente por el titular.",
              "Redirigir al usuario a plataformas externas de compra, distribución, streaming, redes sociales o servicios de terceros.",
              "Mejorar la web, analizar el uso del sitio, medir audiencia, rendimiento, seguridad y navegación.",
              "Cumplir obligaciones legales, fiscales, contables, administrativas o de protección de consumidores cuando resulten aplicables.",
              "Proteger los derechos de propiedad intelectual, prevenir usos indebidos del sitio y mantener la seguridad de la web.",
            ],
          },
        ],
      },
      {
        title: "2.4. Base jurídica",
        blocks: [
          {
            kind: "paragraph",
            text: "Las bases jurídicas que legitiman el tratamiento son:",
          },
          {
            kind: "list",
            items: [
              "Consentimiento del usuario: para responder a consultas, gestionar la suscripción a newsletter, enviar comunicaciones comerciales o instalar cookies no necesarias.",
              "Ejecución de contrato o aplicación de medidas precontractuales: cuando el usuario solicita una compra, reserva, preventa, envío, descarga, contratación o gestión relacionada con un producto o servicio.",
              "Cumplimiento de obligaciones legales: cuando sea necesario conservar facturas, responder a requerimientos legales o atender obligaciones fiscales, contables, administrativas o de consumo.",
              "Interés legítimo: para mantener la seguridad de la web, prevenir abusos, conservar comunicaciones necesarias para la defensa de derechos, mejorar el funcionamiento del sitio y realizar analítica básica siempre que no prevalezcan los derechos del usuario.",
            ],
          },
        ],
      },
      {
        title: "2.5. Newsletter y comunicaciones comerciales",
        blocks: [
          {
            kind: "paragraph",
            text: "El usuario podrá suscribirse voluntariamente para recibir comunicaciones relacionadas con novedades editoriales, publicaciones, presentaciones, lanzamientos, preventas, contenidos literarios, poesía, música, noticias del proyecto y otros contenidos vinculados a Lágrimas Errantes.",
          },
          {
            kind: "paragraph",
            text: "La suscripción se basará en el consentimiento del usuario. El usuario podrá darse de baja en cualquier momento mediante el enlace incluido en cada comunicación o escribiendo al correo de contacto indicado en esta política.",
          },
        ],
      },
      {
        title: "2.6. Venta directa, enlaces externos y plataformas de terceros",
        blocks: [
          {
            kind: "paragraph",
            text: "Cuando la compra, reserva, escucha, descarga o contratación se realice a través de editoriales, distribuidoras, librerías, plataformas musicales, redes sociales, marketplaces o pasarelas externas, dichas entidades serán responsables de sus propios tratamientos de datos. En esos casos se aplicarán sus políticas de privacidad, cookies, compra y devolución.",
          },
          {
            kind: "paragraph",
            text: "Cuando una venta se realice directamente a través de Lágrimas Errantes o del titular, se tratarán únicamente los datos necesarios para gestionar la operación, entrega, comunicación, facturación, soporte y cumplimiento de obligaciones legales.",
          },
        ],
      },
      {
        title: "2.7. Destinatarios de los datos",
        blocks: [
          {
            kind: "paragraph",
            text: "Los datos no se cederán a terceros salvo obligación legal, consentimiento del usuario o cuando sea necesario para prestar el servicio solicitado. Podrán tener acceso a los datos, en calidad de encargados o prestadores de servicios, proveedores tecnológicos y profesionales como:",
          },
          {
            kind: "list",
            items: [
              "Servicios de alojamiento web, mantenimiento, seguridad y despliegue de la web.",
              "Plataformas de email marketing o newsletter, como Brevo u otras equivalentes.",
              "Herramientas de analítica web, si se instalan y se aceptan las cookies correspondientes.",
              "Servicios de pago, mensajería, transporte, imprenta, distribuidoras, plataformas de venta o proveedores necesarios para gestionar pedidos directos.",
              "Asesores fiscales, contables, legales o administrativos cuando sea necesario.",
            ],
          },
        ],
      },
      {
        title: "2.8. Transferencias internacionales",
        blocks: [
          {
            kind: "paragraph",
            text: "Algunos proveedores tecnológicos, de analítica, email marketing, redes sociales, streaming musical, alojamiento, distribución o venta pueden estar ubicados fuera del Espacio Económico Europeo o tratar datos mediante infraestructuras internacionales. En tales casos se procurará trabajar con proveedores que ofrezcan garantías adecuadas conforme al RGPD, como cláusulas contractuales tipo, decisiones de adecuación u otros mecanismos legalmente previstos.",
          },
        ],
      },
      {
        title: "2.9. Plazo de conservación",
        blocks: [
          {
            kind: "paragraph",
            text: "Los datos se conservarán durante el tiempo necesario para cumplir la finalidad para la que fueron recogidos y, posteriormente, durante los plazos legales aplicables:",
          },
          {
            kind: "list",
            items: [
              "Consultas y mensajes: durante el tiempo necesario para atender la solicitud y conservar prueba de la comunicación si fuera necesario.",
              "Newsletter: hasta que el usuario solicite la baja o retire su consentimiento.",
              "Datos de compras, pedidos, facturación o preventas: durante la relación contractual y los plazos fiscales, contables, administrativos o de consumo aplicables.",
              "Datos de navegación y cookies: según la duración indicada en la política de cookies y en el panel de configuración correspondiente.",
              "Datos necesarios para la defensa de derechos: durante los plazos de prescripción de acciones legales que resulten aplicables.",
            ],
          },
        ],
      },
      {
        title: "2.10. Derechos del usuario",
        blocks: [
          {
            kind: "paragraph",
            text: "El usuario puede ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento, portabilidad y retirada del consentimiento en cualquier momento.",
          },
          {
            kind: "paragraph",
            text: `Para ejercer estos derechos, deberá enviar una solicitud al correo ${contactEmail}, indicando el derecho que desea ejercer y acreditando su identidad cuando sea necesario.`,
          },
          {
            kind: "paragraph",
            text: "El usuario también puede presentar una reclamación ante la Agencia Española de Protección de Datos si considera que el tratamiento de sus datos no se ajusta a la normativa vigente.",
          },
        ],
      },
      {
        title: "2.11. Seguridad",
        blocks: [
          {
            kind: "paragraph",
            text: "El titular aplicará medidas técnicas y organizativas razonables para proteger los datos personales frente a pérdida, acceso no autorizado, alteración, divulgación indebida o uso no autorizado, teniendo en cuenta la naturaleza de los datos, el estado de la técnica y los riesgos existentes.",
          },
        ],
      },
    ],
  },
  {
    eyebrow: "Cookies",
    title: "Política de cookies",
    sections: [
      {
        title: "3.1. Qué son las cookies",
        blocks: [
          {
            kind: "paragraph",
            text: "Las cookies son pequeños archivos que se descargan en el dispositivo del usuario cuando accede a determinadas páginas web. Permiten recordar preferencias, garantizar el funcionamiento técnico de la web, medir la navegación o integrar servicios de terceros.",
          },
        ],
      },
      {
        title: "3.2. Cookies que puede utilizar esta web",
        blocks: [
          {
            kind: "paragraph",
            text: "www.lagrimaserrantes.com puede utilizar las siguientes categorías de cookies o tecnologías similares:",
          },
          {
            kind: "list",
            items: [
              "Cookies técnicas o necesarias: imprescindibles para la navegación, seguridad, funcionamiento de formularios, carga de páginas y mantenimiento del sitio.",
              "Cookies de preferencias: permiten recordar opciones del usuario, como configuración o preferencias de navegación, cuando se activen.",
              "Cookies de análisis o medición: permiten conocer de forma agregada cómo se utiliza la web, qué páginas se visitan y cómo mejorar el contenido.",
              "Cookies de terceros: pueden instalarse al integrar servicios como newsletters, vídeos, música, redes sociales, mapas, analítica, plataformas de compra o contenido embebido.",
              "Cookies publicitarias o de marketing: solo se utilizarán si se activan campañas, píxeles publicitarios, remarketing o herramientas similares, y requerirán consentimiento previo del usuario cuando proceda.",
            ],
          },
        ],
      },
      {
        title: "3.3. Cookies de terceros y servicios externos",
        blocks: [
          {
            kind: "paragraph",
            text: "La web puede integrar enlaces o elementos de terceros como Brevo, Instagram, SoundCloud, Spotify, Apple Music, DistroKid, YouTube, editoriales, librerías, marketplaces, plataformas de venta o herramientas de analítica. Dichos terceros pueden instalar cookies o tecnologías similares conforme a sus propias políticas cuando el usuario interactúe con sus servicios.",
          },
        ],
      },
      {
        title: "3.4. Base legal",
        blocks: [
          {
            kind: "paragraph",
            text: "Las cookies técnicas o necesarias se utilizan para permitir el funcionamiento del sitio. Las cookies de análisis, preferencias, publicidad o terceros que no sean estrictamente necesarias se utilizarán únicamente cuando el usuario haya prestado su consentimiento a través del banner o panel de configuración de cookies.",
          },
        ],
      },
      {
        title: "3.5. Gestión de cookies",
        blocks: [
          {
            kind: "paragraph",
            text: "El usuario puede aceptar, rechazar o configurar las cookies no necesarias desde el banner o panel de configuración disponible en la web. También puede bloquear o eliminar cookies desde la configuración de su navegador.",
          },
          {
            kind: "paragraph",
            text: "La desactivación de determinadas cookies puede afectar al funcionamiento de algunas funcionalidades, como formularios, vídeos, reproductores, estadísticas, integración con redes sociales o servicios externos.",
          },
        ],
      },
      {
        title: "3.6. Actualización de la política de cookies",
        blocks: [
          {
            kind: "paragraph",
            text: "Esta política podrá modificarse cuando cambien los servicios utilizados por la web, las cookies instaladas, la configuración técnica del sitio o la normativa aplicable. Se recomienda revisarla periódicamente.",
          },
        ],
      },
    ],
  },
  {
    eyebrow: "Newsletter",
    title: "Política de comunicaciones comerciales y newsletter",
    sections: [
      {
        title: "4. Comunicaciones electrónicas",
        blocks: [
          {
            kind: "paragraph",
            text: "El usuario podrá recibir comunicaciones electrónicas relacionadas con Lágrimas Errantes únicamente cuando haya prestado su consentimiento, exista una relación previa que lo permita legalmente o concurra otra base legítima conforme a la normativa aplicable.",
          },
          {
            kind: "paragraph",
            text: "Estas comunicaciones podrán incluir noticias editoriales, novedades de libros, poemas, fragmentos, presentaciones, eventos, preventas, lanzamientos, canciones, álbumes, vídeos, contenido del universo literario, promociones o información cultural vinculada al proyecto.",
          },
          {
            kind: "paragraph",
            text: "El usuario podrá darse de baja en cualquier momento mediante el enlace incluido en cada comunicación o escribiendo al correo de contacto del titular. La retirada del consentimiento no afectará a la licitud de los tratamientos realizados con anterioridad.",
          },
        ],
      },
    ],
  },
  {
    eyebrow: "Compras",
    title: "Condiciones de compra, devoluciones, reembolsos y preventas",
    sections: [
      {
        title: "5.1. Ámbito de aplicación",
        blocks: [
          {
            kind: "paragraph",
            text: "Estas condiciones se aplican únicamente a las compras, reservas, preventas, productos físicos, ebooks, merchandising, música, descargas o servicios que, en su caso, sean ofrecidos y gestionados directamente por Javier Imaz Fandos o por Lágrimas Errantes a través de canales propios.",
          },
          {
            kind: "paragraph",
            text: "Cuando la compra se realice a través de editoriales, librerías, distribuidoras, plataformas musicales, marketplaces, pasarelas externas o cualquier tercero, se aplicarán exclusivamente las condiciones de compra, envío, pago, devolución y atención al cliente de dicha plataforma.",
          },
        ],
      },
      {
        title: "5.2. Productos físicos",
        blocks: [
          {
            kind: "paragraph",
            text: "En caso de venta directa de libros físicos, ejemplares firmados, merchandising u otros productos materiales, el usuario dispondrá de los derechos reconocidos por la normativa de consumidores y usuarios. Salvo excepciones legalmente previstas, podrá desistir de la compra dentro del plazo legal aplicable desde la recepción del producto.",
          },
          {
            kind: "paragraph",
            text: "Para aceptar una devolución, el producto deberá encontrarse en buen estado, sin uso indebido, sin daños imputables al comprador y, cuando proceda, con su embalaje original o protección adecuada.",
          },
          {
            kind: "paragraph",
            text: "Los gastos de devolución podrán correr a cargo del comprador salvo que la devolución se deba a un error del titular, defecto del producto o causa legalmente imputable al vendedor.",
          },
        ],
      },
      {
        title: "5.3. Productos personalizados o firmados",
        blocks: [
          {
            kind: "paragraph",
            text: "Los productos personalizados a petición del usuario, ejemplares dedicados nominalmente, productos hechos bajo encargo o materiales claramente personalizados podrán quedar excluidos del derecho de desistimiento cuando así lo permita la normativa aplicable, salvo defecto, error o falta de conformidad.",
          },
        ],
      },
      {
        title: "5.4. Ebooks, descargas digitales y música",
        blocks: [
          {
            kind: "paragraph",
            text: "En caso de venta directa de ebooks, archivos digitales, música descargable, contenido audiovisual u otros productos digitales, el derecho de desistimiento podrá no ser aplicable una vez iniciado el suministro o descarga del contenido digital, siempre que el usuario haya aceptado expresamente esta condición cuando la normativa lo exija.",
          },
          {
            kind: "paragraph",
            text: "Si el ebook, música o contenido digital se adquiere mediante plataformas externas, se aplicarán las condiciones de devolución, cancelación y soporte de cada plataforma.",
          },
        ],
      },
      {
        title: "5.5. Preventas",
        blocks: [
          {
            kind: "paragraph",
            text: "Las preventas se regirán por las condiciones específicas indicadas en cada campaña: producto, precio, fecha estimada de entrega, gastos de envío, plataforma utilizada, posibilidad de cancelación y condiciones especiales. Si la preventa se gestiona a través de terceros, se aplicarán las condiciones de esa plataforma.",
          },
        ],
      },
      {
        title: "5.6. Reembolsos",
        blocks: [
          {
            kind: "paragraph",
            text: "Cuando proceda un reembolso en una venta directa, se realizará mediante el mismo medio de pago utilizado por el usuario, salvo acuerdo distinto o imposibilidad técnica. El plazo de devolución será el legalmente aplicable desde la aprobación de la devolución o cancelación.",
          },
        ],
      },
      {
        title: "5.7. Contacto para compras directas",
        blocks: [
          {
            kind: "paragraph",
            text: `Para incidencias relacionadas con compras directas, devoluciones, productos defectuosos, pedidos, entregas o preventas gestionadas por Lágrimas Errantes, el usuario podrá escribir a ${contactEmail}.`,
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
            description="Aviso legal, protección de datos, cookies, newsletter y condiciones aplicables a Lágrimas Errantes."
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
                {group.intro ? (
                  <p className="mt-6 max-w-4xl text-base leading-8 text-parchment">
                    {group.intro}
                  </p>
                ) : null}

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
