export const siteConfig = {
  name: "Javier Imaz Fandos",
  brandName: "Zami Reivaj",
  tagline: "Novelas de misterio, tiempo y leyenda.",
  description:
    "Web literaria oficial de Javier Imaz Fandos: novelas, poesía y ensayo sobre misterio, memoria y tiempo.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://lagrimaserrantes.com",
  instagram: "https://www.instagram.com/lagrimaserrantes",
  instagramHandle: "@lagrimaserrantes",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
};

export type Book = {
  slug: string;
  category: "Novela" | "Poesía" | "Ensayo";
  title: string;
  subtitle: string;
  genre: string;
  status: string;
  image: string;
  imageLabel: string;
  overlayCover?: boolean;
  coverText?: string;
  href: string;
  shortDescription: string;
  synopsis?: string[];
  themes?: string[];
  publisher?: string;
  published?: string;
  isbn?: string;
  purchaseUrl?: string;
  sampleUrl?: string;
};

export const books: Book[] = [
  {
    slug: "lagrimas-errantes",
    category: "Novela",
    title: "Lágrimas Errantes",
    subtitle: "Un bucle entre el tiempo y la leyenda",
    genre: "Aventura histórica · Fantasía mítica · Misterio",
    status: "Publicado",
    image: "/assets/portada-lagrimas-errantes.jpg",
    imageLabel: "Portada editorial",
    href: "/lagrimas-errantes",
    shortDescription:
      "Tres épocas, una Caja del Tiempo y las lágrimas de una diosa-tortuga convergen en una aventura sobre todo aquello que no queremos perder.",
    publisher: "Universo de Letras · Grupo Editorial Planeta",
    published: "2026",
    isbn: "9791387715984",
    purchaseUrl:
      "https://libros.cc/Lagrimas-Errantes.htm?isbn=9791387715984",
    sampleUrl: "/downloads/lagrimas-errantes-muestra-paginas-1-31.pdf",
  },
  {
    slug: "el-enigma-de-la-caja-del-tiempo",
    category: "Novela",
    title: "El Enigma de la Caja del Tiempo",
    subtitle:
      "Una novela sobre el tiempo, la memoria y los secretos que sobreviven a los hombres.",
    genre: "Misterio histórico · Thriller literario",
    status: "En desarrollo",
    image: "/assets/caja-del-tiempo.jpg",
    imageLabel: "Imagen aportada",
    overlayCover: true,
    coverText: "Una novela sobre el tiempo, la memoria y los secretos.",
    href: "/el-enigma-de-la-caja-del-tiempo",
    shortDescription:
      "Adrián Hannemam recibe una caja de madera oscura sin remitente. Abrirla significa entrar en una trama que comenzó en 1624.",
  },
  {
    slug: "el-eco-del-silencio",
    category: "Novela",
    title: "El Eco del Silencio",
    subtitle: "La consciencia también puede convertirse en territorio de espionaje",
    genre: "Thriller de neurociencia · Espionaje",
    status: "En desarrollo",
    image: "/assets/cubierta-eco-del-silencio.jpg",
    imageLabel: "Propuesta visual",
    overlayCover: true,
    href: "/libros/el-eco-del-silencio",
    shortDescription:
      "Un neurocientífico desarrolla un sistema capaz de capturar la mente humana y debe decidir hasta dónde llega el amor de un padre.",
    synopsis: [
      "Adrián Velasco desarrolla junto a Iván Petrov el ECO, un sistema capaz de capturar y preservar la mente humana. Cuando su hija Lucía sufre un accidente, una decisión irreversible marca el destino de ambos.",
      "Entre Salamanca, Róterdam y Helsinki, el proyecto atrae a la inteligencia rusa y a la Orden de Prometheus. La pregunta deja de ser científica: si preservamos una mente, ¿salvamos a la persona o creamos algo distinto?",
    ],
    themes: ["Neurociencia", "Consciencia digital", "Espionaje", "Amor paterno", "Ética"],
  },
  {
    slug: "la-noche-oscura-del-gallego",
    category: "Novela",
    title: "La Noche Oscura del Gállego",
    subtitle: "El río no devuelve lo que se lleva",
    genre: "Narrativa de misterio · Memoria histórica",
    status: "En desarrollo",
    image: "/assets/cubierta-noche-oscura-gallego.jpg",
    imageLabel: "Propuesta visual",
    overlayCover: true,
    href: "/libros/la-noche-oscura-del-gallego",
    shortDescription:
      "Elena Casas regresa a Zuera tras la muerte de su padre y abre una caja donde varias generaciones guardaron silencio.",
    synopsis: [
      "Elena Casas, arquitecta de treinta y ocho años, vuelve de noche a Zuera después de que su padre aparezca muerto en el río Gállego con un libro atado al pecho.",
      "Una caja de madera, páginas arrancadas y secretos familiares la llevan por el Prepirineo, el archivo de Jaca y San Juan de la Peña. La novela sigue la estructura espiritual de la Noche oscura de San Juan de la Cruz para adentrarse en una memoria que ya no admite silencio.",
    ],
    themes: ["Zuera", "Río Gállego", "Secretos familiares", "Memoria", "Investigación"],
  },
  {
    slug: "la-mujer-que-nunca-existio",
    category: "Novela",
    title: "La Mujer que Nunca Existió",
    subtitle: "Creí conocer cada secreto de mi marido. Me equivocaba con cada uno.",
    genre: "Thriller psicológico",
    status: "En desarrollo",
    image: "/assets/cubierta-mujer-nunca-existio.jpg",
    imageLabel: "Propuesta visual",
    overlayCover: true,
    href: "/libros/la-mujer-que-nunca-existio",
    shortDescription:
      "Una historia de identidades ocultas, apariencias domésticas y secretos capaces de deshacer una vida completa.",
    synopsis: [
      "Un thriller psicológico construido alrededor de una protagonista que descubre que el mundo íntimo que creía conocer sostenía una segunda identidad.",
      "Con una atmósfera oscura y elegante, la novela explora la dualidad entre lo visible y lo oculto: la casa perfecta, el reflejo alterado y la verdad que espera detrás de una llave.",
    ],
    themes: ["Identidad", "Secreto", "Matrimonio", "Engaño", "Thriller"],
  },
  {
    slug: "donde-aun-respira-tu-nombre",
    category: "Poesía",
    title: "Donde aún respira tu nombre",
    subtitle: "Cartografía poética de una ausencia",
    genre: "Poemario comentado · Poesía contemporánea",
    status: "En desarrollo",
    image: "/assets/portada-donde-aun-respira-frontal.jpg",
    imageLabel: "Portada aportada",
    href: "/libros/donde-aun-respira-tu-nombre",
    shortDescription:
      "Una cartografía emocional en 53 poemas comentados: el amor que no se olvida, sino que se transforma en lenguaje.",
    published: "2026",
    synopsis: [
      "El amor no siempre encuentra su destino en el tiempo. A veces encuentra su forma en la memoria. Donde aún respira tu nombre recorre, en 53 poemas acompañados de comentario crítico, el territorio invisible que deja un amor que no llegó a cumplirse del todo.",
      "A través de ocho estaciones emocionales, el libro avanza del nacimiento del amor y su ruptura hacia el duelo, la memoria, la permanencia y la trascendencia. No propone olvidar, sino encontrar una forma serena de integrar lo vivido mediante la poesía.",
    ],
    themes: ["Amor imposible", "Ausencia", "Memoria", "Duelo", "Permanencia", "Poesía"],
  },
  {
    slug: "geometria-del-desencuentro",
    category: "Poesía",
    title: "Geometría del desencuentro",
    subtitle: "Manual para sobrevivir al recuerdo de un amor imposible",
    genre: "Poesía contemporánea",
    status: "En desarrollo",
    image: "/assets/cubierta-geometria-desencuentro.jpg",
    imageLabel: "Propuesta visual",
    overlayCover: true,
    href: "/libros/geometria-del-desencuentro",
    shortDescription:
      "Un itinerario poético por la memoria, la ausencia y la belleza de aquello que quedó inacabado.",
    synopsis: [
      "Hay amores que no se olvidan porque nunca se vivieron del todo. Este poemario recorre los territorios invisibles de la memoria, la soledad y el amor imposible.",
      "Desde una voz íntima y contenida, la ausencia se transforma en lenguaje: la herida adquiere geometría, el silencio construye una arquitectura emocional y el recuerdo encuentra una forma de permanecer.",
    ],
    themes: ["Memoria", "Ausencia", "Amor imposible", "Tiempo interior", "Poesía"],
  },
  {
    slug: "la-etica-del-tiempo",
    category: "Ensayo",
    title: "La Ética del Tiempo",
    subtitle: "Memoria, dolor y responsabilidad en una época acelerada",
    genre: "Ensayo filosófico",
    status: "En desarrollo",
    image: "/assets/cubierta-etica-tiempo.jpg",
    imageLabel: "Propuesta visual",
    overlayCover: true,
    href: "/libros/la-etica-del-tiempo",
    shortDescription:
      "Una reflexión sobre el dolor que no se elabora, la memoria que da forma a la identidad y la responsabilidad de vivir el tiempo.",
    synopsis: [
      "Este ensayo parte de una convicción: cuando una sociedad expulsa el dolor, degrada la memoria; y cuando degrada la memoria, empobrece la identidad.",
      "En diálogo con Ricoeur, Arendt y Byung-Chul Han, propone una ética del duelo y de la memoria frente a la fantasía moderna de conservarlo y controlarlo todo.",
    ],
    themes: ["Memoria", "Duelo", "Identidad", "Responsabilidad", "Tiempo"],
  },
];

export const bookSections = [
  {
    title: "Novela",
    description: "Misterio, historia, ciencia y secretos que transforman a quienes los descubren.",
    books: books.filter((book) => book.category === "Novela"),
  },
  {
    title: "Poesía",
    description: "El amor, la ausencia y la memoria convertidos en palabra.",
    books: books.filter((book) => book.category === "Poesía"),
  },
  {
    title: "Ensayo",
    description: "Una mirada reflexiva sobre el tiempo, la identidad y el dolor.",
    books: books.filter((book) => book.category === "Ensayo"),
  },
];

export const enigmaCharacters = [
  {
    name: "Adrián Hannemam",
    description:
      "Restaurador del Museo de Diseño de Gante. Un objeto imposible altera el orden minucioso de su vida.",
  },
  {
    name: "Leila Kafesoglu",
    description:
      "Una presencia ligada a las rutas, los archivos y los secretos que la caja todavía custodia.",
  },
  {
    name: "Samuel Hannemam",
    description:
      "El alquimista de Gante cuya historia conduce al origen del artefacto en 1624.",
  },
  {
    name: "Cornelius Kafesoglu",
    description:
      "Un nombre heredado entre documentos, claves antiguas y un pasado que reclama ser leído.",
  },
];

export const enigmaSymbols = [
  {
    title: "La caja",
    description:
      "Madera oscura, geometrías y un mecanismo capaz de interrogar el tiempo.",
  },
  {
    title: "El rubí",
    description:
      "Una gema granate engastada como corazón y advertencia del artefacto.",
  },
  {
    title: "La madera de Zhôan",
    description:
      "Un material extraño, casi indescifrable, traído por rutas que atraviesan siglos.",
  },
  {
    title: "La tortuga de Yharty",
    description:
      "Emblema de la custodia, la memoria y la sabiduría de la espera.",
  },
  {
    title: "El reloj",
    description:
      "Doce pulsadores y símbolos alquímicos: una medida que no obedece a las horas.",
  },
];

export const universeTopics = [
  {
    title: "Tiempo",
    comment:
      "En estas obras, el tiempo no es solo medida: es memoria, responsabilidad y la posibilidad de reparar lo que quedó incompleto.",
  },
  {
    title: "Alquimia",
    comment:
      "En Gante, en 1624, Samuel Hannemam convierte materia, amor y temor a la pérdida en el origen de la Caja del Tiempo.",
  },
  {
    title: "Yharty",
    comment:
      "La tortuga alada custodia el equilibrio perdido. Sus lágrimas enlazan pasado, presente y futuro en una única profecía.",
  },
  {
    title: "Memoria",
    comment:
      "Los objetos conservan las huellas de quienes los tocaron; recordar no es mirar atrás, sino decidir qué hacer con la herencia recibida.",
  },
  {
    title: "Leyenda",
    comment:
      "Mapas, manuscritos y símbolos antiguos abren rutas donde el mito deja de ser relato y comienza a alterar la vida de los personajes.",
  },
];

export type NewsPost = {
  slug: string;
  category: string;
  date: string;
  displayDate: string;
  title: string;
  excerpt: string;
  image: string;
  body: string[];
  gallery?: NewsImage[];
};

export type NewsImage = {
  src: string;
  alt: string;
  caption?: string;
  fit?: "cover" | "contain";
};

export const news: NewsPost[] = [
  {
    slug: "feria-libro-zaragoza-labordeta-albareda",
    category: "Feria del libro",
    date: "2026-05-30",
    displayDate: "30 mayo 2026",
    title: "La Feria del Libro confirmó el viaje",
    excerpt:
      "En el Parque José Antonio Labordeta, junto a Librería Albareda, Lágrimas Errantes encontró lectores, firmas y una mañana de ventas memorables.",
    image: "/assets/noticias/3-2.png",
    body: [
      "El 30 de mayo, Lágrimas Errantes volvió a salir al encuentro de los lectores en la Feria del Libro de Zaragoza, en el Parque José Antonio Labordeta, de la mano de Librería Albareda.",
      "La caseta 65-66 fue una pequeña estación de paso para quienes se acercaron por curiosidad y se quedaron por el misterio: conversaciones, firmas, recomendaciones y ejemplares que encontraron casa.",
      "La afluencia de público, la acogida de la obra y el ritmo de ventas hicieron de la jornada una de esas fechas que confirman que un libro también viaja cuando alguien lo abre.",
    ],
    gallery: [
      {
        src: "/assets/noticias/3-1.png",
        alt: "Cartel de la firma de Lágrimas Errantes en la Feria del Libro de Zaragoza",
        caption:
          "La cita del 30 de mayo en la caseta 65-66 del Parque José Antonio Labordeta.",
        fit: "contain",
      },
      {
        src: "/assets/noticias/3-2.png",
        alt: "Javier Imaz Fandos firmando ejemplares en la Feria del Libro de Zaragoza",
        caption: "Firmas y conversación en una mañana de gran afluencia.",
      },
      {
        src: "/assets/noticias/3-3.png",
        alt: "Mesa de Lágrimas Errantes en la Feria del Libro de Zaragoza",
        caption:
          "La novela compartió mesa con otros títulos y muchos lectores curiosos.",
      },
      {
        src: "/assets/noticias/3-4.png",
        alt: "Javier Imaz Fandos con lectores en la caseta de Librería Albareda",
        caption:
          "El encuentro con los lectores convirtió la jornada en celebración.",
      },
      {
        src: "/assets/noticias/A.png",
        alt: "Imagen promocional de Lágrimas Errantes con varios ejemplares",
        caption:
          "Lágrimas Errantes, lista para seguir encontrando lectores.",
        fit: "contain",
      },
    ],
  },
  {
    slug: "presentacion-lagrimas-errantes-fnac-zaragoza",
    category: "Presentación",
    date: "2026-05-22",
    displayDate: "22 mayo 2026",
    title: "Una tarde llena en FNAC Zaragoza",
    excerpt:
      "La sala de FNAC Zaragoza se llenó para presentar Lágrimas Errantes: conversación, emoción lectora y una acogida que confirmó el pulso de la novela.",
    image: "/assets/noticias/2-2.png",
    body: [
      "El 22 de mayo, Lágrimas Errantes tuvo su presentación en FNAC Zaragoza, en la calle del Coso, con una sala llena y un público entregado desde el primer minuto.",
      "La conversación convirtió la novela en una puerta abierta: misterio, tiempo, leyenda, memoria y ese impulso lector que aparece cuando una historia empieza a respirar fuera del libro.",
      "Fue una tarde de gran afluencia, presentación cuidada y ventas; una de esas citas que no solo anuncian una obra, sino que la ponen en marcha.",
    ],
    gallery: [
      {
        src: "/assets/noticias/2-1.png",
        alt: "Cartel de la presentación de Lágrimas Errantes en FNAC Zaragoza",
        caption:
          "La presentación del 22 de mayo en FNAC Plaza España, calle del Coso.",
        fit: "contain",
      },
      {
        src: "/assets/noticias/2-2.png",
        alt: "Presentación de Lágrimas Errantes con público en FNAC Zaragoza",
        caption:
          "Una sala llena para hablar de tiempo, leyenda y misterio.",
      },
      {
        src: "/assets/noticias/2-3.png",
        alt: "Mesa de presentación de Lágrimas Errantes en FNAC Zaragoza",
        caption:
          "La novela encontró voz propia entre preguntas, música y conversación.",
      },
      {
        src: "/assets/noticias/2-4.png",
        alt: "Javier Imaz Fandos junto al expositor de Lágrimas Errantes en FNAC",
        caption:
          "El libro, el cartel y la firma: una tarde de lanzamiento muy especial.",
      },
      {
        src: "/assets/noticias/D.png",
        alt: "Imagen promocional de Lágrimas Errantes en ambiente de biblioteca",
        caption:
          "Una imagen editorial para prolongar la atmósfera de la presentación.",
        fit: "contain",
      },
    ],
  },
  {
    slug: "san-jorge-zaragoza-libreria-albareda",
    category: "Firma",
    date: "2026-04-23",
    displayDate: "23 abril 2026",
    title: "San Jorge abrió la ruta de Lágrimas Errantes",
    excerpt:
      "En pleno Paseo de la Independencia, la novela celebró el Día del Libro con Librería Albareda entre lectores, firmas y la energía de Zaragoza.",
    image: "/assets/noticias/1-2.png",
    body: [
      "El 23 de abril, Día de San Jorge, Lágrimas Errantes salió a la calle en Zaragoza con Librería Albareda, en el Paseo de la Independencia.",
      "Entre firmas, conversaciones y lectores que se acercaban atraídos por la portada y por el misterio de la caja, la jornada tuvo esa mezcla de celebración popular y descubrimiento literario que solo ocurre en el Día del Libro.",
      "La afluencia de público, la cercanía de los lectores y las ventas hicieron de San Jorge el primer gran impulso de la campaña.",
    ],
    gallery: [
      {
        src: "/assets/noticias/1-1.png",
        alt: "Cartel de firma de Lágrimas Errantes por San Jorge",
        caption:
          "La firma de San Jorge en Librería Albareda, Paseo Independencia 29.",
        fit: "contain",
      },
      {
        src: "/assets/noticias/1-2.png",
        alt: "Javier Imaz Fandos firmando Lágrimas Errantes el Día de San Jorge",
        caption: "Firmas, lectores y mucho movimiento en el Día del Libro.",
      },
      {
        src: "/assets/noticias/1-3.png",
        alt: "Mesa de Lágrimas Errantes durante San Jorge en Zaragoza",
        caption:
          "Ejemplares preparados para una jornada de ventas y descubrimientos.",
      },
      {
        src: "/assets/noticias/1-4.png",
        alt: "Javier Imaz Fandos mostrando Lágrimas Errantes en San Jorge",
        caption:
          "El libro como punto de encuentro en pleno Paseo de la Independencia.",
      },
      {
        src: "/assets/noticias/1-5.png",
        alt: "Imagen promocional de Lágrimas Errantes ya a la venta",
        caption:
          "Material de campaña para acompañar el lanzamiento de la novela.",
        fit: "contain",
      },
      {
        src: "/assets/noticias/1-6.png",
        alt: "Cartel de Lágrimas Errantes con código QR",
        caption:
          "El QR acercó la novela a lectores que querían seguir la pista después.",
        fit: "contain",
      },
      {
        src: "/assets/noticias/B.png",
        alt: "Portada promocional de Lágrimas Errantes",
        caption:
          "La portada como llamada visual al misterio de la Caja del Tiempo.",
        fit: "contain",
      },
      {
        src: "/assets/noticias/C.png",
        alt: "Ejemplares de Lágrimas Errantes sobre una mesa",
        caption:
          "Una imagen de campaña para presentar la novela en su versión más editorial.",
        fit: "contain",
      },
    ],
  },
];

export const journalEntries = [
  {
    kind: "Crónica",
    title: "El origen de la Caja del Tiempo",
    excerpt:
      "Un regalo íntimo se transforma en el objeto que enlaza siglos, rutas y decisiones dentro de Lágrimas Errantes.",
  },
  {
    kind: "Nota",
    title: "Yharty y la memoria",
    excerpt:
      "La tortuga alada y sus lágrimas: una mitología sobre aquello que se pierde y aquello que todavía puede custodiarse.",
  },
  {
    kind: "Fragmento",
    title: "Donde aún respira la ausencia",
    excerpt:
      "Poesía, silencio y permanencia: cuando la palabra deja de buscar el olvido y aprende a habitar el recuerdo.",
  },
];

export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Libros", href: "/libros" },
  { label: "Lágrimas Errantes", href: "/lagrimas-errantes" },
  { label: "El Enigma", href: "/el-enigma-de-la-caja-del-tiempo" },
  { label: "Autor", href: "/autor" },
  { label: "Bitácora", href: "/bitacora" },
  { label: "Noticias", href: "/noticias" },
  { label: "Contacto", href: "/contacto" },
];
