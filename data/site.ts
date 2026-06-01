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
    purchaseUrl: "https://libros.cc/Lagrimas-Errantes.htm?isbn=9791387715984",
    sampleUrl: "/downloads/lagrimas-errantes-muestra-paginas-1-31.pdf",
  },
  {
    slug: "el-enigma-de-la-caja-del-tiempo",
    category: "Novela",
    title: "El Enigma de la Caja del Tiempo",
    subtitle: "Una novela sobre el tiempo, la memoria y los secretos que sobreviven a los hombres.",
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
      "Una caja de madera, páginas arrancadas y secretos familiares la llevan por el Prepirineo, el archivo de Jaca y San Juan de la Peña.",
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
      "Con una atmósfera oscura y elegante, la novela explora la dualidad entre lo visible y lo oculto.",
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
      "El amor no siempre encuentra su destino en el tiempo. A veces encuentra su forma en la memoria.",
      "A través de ocho estaciones emocionales, el libro avanza del nacimiento del amor y su ruptura hacia el duelo, la memoria, la permanencia y la trascendencia.",
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
      "Hay amores que no se olvidan porque nunca se vivieron del todo.",
      "Desde una voz íntima y contenida, la ausencia se transforma en lenguaje.",
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
      "Este ensayo parte de una convicción: cuando una sociedad expulsa el dolor, degrada la memoria.",
      "En diálogo con Ricoeur, Arendt y Byung-Chul Han, propone una ética del duelo y de la memoria.",
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
    description: "Restaurador del Museo de Diseño de Gante. Un objeto imposible altera el orden minucioso de su vida.",
  },
  {
    name: "Leila Kafesoglu",
    description: "Una presencia ligada a las rutas, los archivos y los secretos que la caja todavía custodia.",
  },
  {
    name: "Samuel Hannemam",
    description: "El alquimista de Gante cuya historia conduce al origen del artefacto en 1624.",
  },
  {
    name: "Cornelius Kafesoglu",
    description: "Un nombre heredado entre documentos, claves antiguas y un pasado que reclama ser leído.",
  },
];

export const enigmaSymbols = [
  { title: "La caja", description: "Madera oscura, geometrías y un mecanismo capaz de interrogar el tiempo." },
  { title: "El rubí", description: "Una gema granate engastada como corazón y advertencia del artefacto." },
  { title: "La madera de Zhôan", description: "Un material extraño, casi indescifrable, traído por rutas que atraviesan siglos." },
  { title: "La tortuga de Yharty", description: "Emblema de la custodia, la memoria y la sabiduría de la espera." },
  { title: "El reloj", description: "Doce pulsadores y símbolos alquímicos: una medida que no obedece a las horas." },
];

export const universeTopics = [
  { title: "Tiempo", comment: "En estas obras, el tiempo no es solo medida: es memoria, responsabilidad y la posibilidad de reparar lo que quedó incompleto." },
  { title: "Alquimia", comment: "En Gante, en 1624, Samuel Hannemam convierte materia, amor y temor a la pérdida en el origen de la Caja del Tiempo." },
  { title: "Yharty", comment: "La tortuga alada custodia el equilibrio perdido. Sus lágrimas enlazan pasado, presente y futuro en una única profecía." },
  { title: "Memoria", comment: "Los objetos conservan las huellas de quienes los tocaron; recordar no es mirar atrás, sino decidir qué hacer con la herencia recibida." },
  { title: "Leyenda", comment: "Mapas, manuscritos y símbolos antiguos abren rutas donde el mito deja de ser relato y comienza a alterar la vida de los personajes." },
];

export const journalEntries = [
  { kind: "Crónica", title: "El origen de la Caja del Tiempo", excerpt: "Un regalo íntimo se transforma en el objeto que enlaza siglos, rutas y decisiones dentro de Lágrimas Errantes." },
  { kind: "Nota", title: "Yharty y la memoria", excerpt: "La tortuga alada y sus lágrimas: una mitología sobre aquello que se pierde y aquello que todavía puede custodiarse." },
  { kind: "Fragmento", title: "Donde aún respira la ausencia", excerpt: "Poesía, silencio y permanencia: cuando la palabra deja de buscar el olvido y aprende a habitar el recuerdo." },
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

export type NewsImage = {
  src: string;
  alt: string;
  caption?: string;
  fit?: "cover" | "contain";
};

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

export const news: NewsPost[] = [
  // ── EVENTOS Y PRESENTACIONES ──────────────────────────────────────
  {
    slug: "san-jorge-zaragoza-2026",
    category: "Presentación",
    date: "2026-04-23",
    displayDate: "23 abril 2026",
    title: "San Jorge en Zaragoza: un día para recordar",
    excerpt:
      "El Paseo de la Independencia se llenó de libros, lectores y el calor inconfundible de la fiesta aragonesa.",
    image: "/assets/EVENTOS/A-3-Sanjorge.png",
    body: [
      "El 23 de abril es, en Aragón, mucho más que una fecha en el calendario. La festividad de San Jorge convierte el Paseo de la Independencia de Zaragoza en un río de libros, flores y conversaciones que solo ocurre una vez al año, y Lágrimas Errantes estuvo allí.",
      "La jornada superó todas las expectativas. El público se acercó con curiosidad genuina, con ese apetito lector que solo se ve en los días grandes, y la respuesta fue extraordinaria: las ventas superaron las previsiones más optimistas y las dedicatorias se sucedieron sin pausa durante toda la mañana.",
      "Fue un día entrañable, de esos que quedan grabados. Lectores que se llevaban el libro para ellos, para un hijo, para un amigo. Conversaciones espontáneas sobre el tiempo, la memoria y la Caja. Un ambiente que recordaba por qué vale la pena escribir.",
      "Todo ello de la mano de la Librería Albareda, en el Paseo de la Independencia 29, cómplice imprescindible de esta aventura literaria en Zaragoza.",
    ],
    gallery: [
      {
        src: "/assets/EVENTOS/A-1-SanJorge.png",
        alt: "Cartel de la firma de San Jorge en Librería Albareda",
        caption: "Firma de la obra · 23 de abril · Librería Albareda",
        fit: "contain",
      },
      {
        src: "/assets/EVENTOS/A-2-Sanjorge.png",
        alt: "Javier Imaz Fandos firmando ejemplares en San Jorge",
        caption: "Dedicatorias sin pausa durante toda la mañana",
      },
      {
        src: "/assets/EVENTOS/A-3-Sanjorge.png",
        alt: "Javier Imaz Fandos con el libro en la caseta de San Jorge",
        caption: "El Paseo de la Independencia, escenario de la fiesta del libro aragonés",
      },
      {
        src: "/assets/EVENTOS/A-4-_San_Jorge_.png",
        alt: "Javier Imaz Fandos junto a un lector en San Jorge",
        caption: "Momentos de encuentro con los lectores",
      },
      {
        src: "/assets/EVENTOS/A-5-San_Jorge-Libro.png",
        alt: "Ejemplares de Lágrimas Errantes en la caseta de San Jorge",
        caption: "Lágrimas Errantes, presente en la jornada más literaria del año en Aragón",
      },
      {
        src: "/assets/EVENTOS/A-6-San_Jorge-Libro.png",
        alt: "Roll-up de Lágrimas Errantes con código QR",
        caption: "Universo de Letras · Grupo Editorial Planeta",
        fit: "contain",
      },
    ],
  },
  {
    slug: "presentacion-lagrimas-errantes-fnac-zaragoza",
    category: "Presentación",
    date: "2026-05-22",
    displayDate: "22 mayo 2026",
    title: "Lágrimas Errantes en FNAC Zaragoza: una noche memorable",
    excerpt:
      "Sala llena, guitarra en vivo y una conversación que convirtió la presentación en algo más que un acto literario.",
    image: "/assets/EVENTOS/B-3_-Fnac.png",
    body: [
      "El 22 de mayo, a las 19 horas, la sala de eventos de FNAC Zaragoza —Plaza España, Calle del Coso 25-27— acogió la presentación oficial de Lágrimas Errantes ante un público que llenó el aforo hasta el último asiento.",
      "La velada fue mucho más que una presentación al uso. Con música de guitarra en directo como hilo conductor, el autor dialogó con el presentador sobre el origen de la novela, la Caja del Tiempo y el universo que se despliega entre Gante, el siglo XIX y la España de 1942. El ambiente resultó ameno, cálido y cargado de esa energía que solo surge cuando el libro conecta de verdad con quienes lo escuchan.",
      "Las ventas y dedicatorias que siguieron al acto confirmaron lo que la sala ya transmitía: Lágrimas Errantes había encontrado a sus lectores. Una noche para el recuerdo, organizada junto a la Librería Albareda y Universo de Letras, Grupo Editorial Planeta.",
    ],
    gallery: [
      {
        src: "/assets/EVENTOS/B-1-Fnac.png",
        alt: "Cartel de la presentación en FNAC Zaragoza",
        caption: "Presentación oficial · 22 de mayo · FNAC Zaragoza",
        fit: "contain",
      },
      {
        src: "/assets/EVENTOS/B-2_Fnac.png",
        alt: "Javier Imaz Fandos junto al cartel de Lágrimas Errantes en FNAC",
        caption: "El autor, ante el expositor de la novela en FNAC Zaragoza",
      },
      {
        src: "/assets/EVENTOS/B-3_-Fnac.png",
        alt: "Mesa de presentación con guitarra en directo en FNAC Zaragoza",
        caption: "Música, palabra y libro: una presentación diferente",
      },
      {
        src: "/assets/EVENTOS/B-4-Fnac.png",
        alt: "Público asistente a la presentación en FNAC Zaragoza",
        caption: "Sala llena en FNAC Zaragoza",
      },
      {
        src: "/assets/EVENTOS/B-5-Fnac.png",
        alt: "Vista general de la sala durante la presentación",
        caption: "Una velada que superó todas las expectativas",
      },
      {
        src: "/assets/EVENTOS/B-6-Fnac.png",
        alt: "Ejemplares de Lágrimas Errantes en ambiente de biblioteca",
        caption: "Lágrimas Errantes · Universo de Letras · Grupo Editorial Planeta",
      },
    ],
  },
  {
    slug: "dia-del-libro-zaragoza-2026",
    category: "Presentación",
    date: "2026-05-30",
    displayDate: "30 mayo 2026",
    title: "Día del Libro en Zaragoza: las expectativas cumplidas",
    excerpt:
      "La Caseta 65-66 del Parque José Antonio Labordeta reunió a lectores, amigos y el mejor ambiente para cerrar una primavera literaria extraordinaria.",
    image: "/assets/EVENTOS/C-2_Di_a_dellibro_Zaragoza.png",
    body: [
      "El 30 de mayo, en la Caseta 65-66 del Parque José Antonio Labordeta de Zaragoza, Lágrimas Errantes cerró una primavera de presentaciones a la altura de los mejores momentos del año. La afluencia de público fue notable, el ambiente resultó distendido y festivo, y las expectativas —ya de por sí elevadas tras el éxito de las jornadas anteriores— quedaron plenamente cumplidas.",
      "La jornada estuvo marcada por el encuentro cercano con los lectores: conversaciones tranquilas, familias que se acercaban a la caseta, amigos que aprovechaban el día para llevarse un ejemplar dedicado. Ese calor humano que solo se encuentra en las ferias del libro al aire libre.",
      "Una vez más, la Librería Albareda fue el marco perfecto para este reencuentro con Zaragoza y sus lectores. Tres eventos, tres experiencias distintas, y una certeza: Lágrimas Errantes ha encontrado su lugar en la ciudad.",
    ],
    gallery: [
      {
        src: "/assets/EVENTOS/C-1-Di_a_del_Libro_Zaragoza.png",
        alt: "Cartel del Día del Libro en Zaragoza",
        caption: "Firma de la obra · 30 de mayo · Caseta 65-66, Parque Labordeta",
        fit: "contain",
      },
      {
        src: "/assets/EVENTOS/C-2_Di_a_dellibro_Zaragoza.png",
        alt: "Javier Imaz Fandos con lectores en el Día del Libro",
        caption: "Encuentro con los lectores en el Parque Labordeta",
      },
      {
        src: "/assets/EVENTOS/C-3_Di_a_del_Libro_Zaragoza.png",
        alt: "Javier Imaz Fandos con un lector en la caseta",
        caption: "Momentos de encuentro y dedicatorias",
      },
      {
        src: "/assets/EVENTOS/C-4-Di_a_del_Libro_Zaragoza.png",
        alt: "Grupo de personas en la caseta del Día del Libro",
        caption: "El ambiente festivo y literario del Parque Labordeta",
      },
      {
        src: "/assets/EVENTOS/C-5-Dia_del_libro_Libro.png",
        alt: "Ejemplares de Lágrimas Errantes en el Día del Libro",
        caption: "Lágrimas Errantes · Universo de Letras · Grupo Editorial Planeta",
      },
      {
        src: "/assets/EVENTOS/C-6_-Di_a_delLibro.png",
        alt: "Grupo de personas junto al autor en la caseta",
        caption: "Con el equipo de la Librería Albareda y amigos",
      },
    ],
  },
  // ── NOVEDADES EDITORIALES ─────────────────────────────────────────
  {
    slug: "la-caja-del-tiempo-un-objeto-una-pregunta",
    category: "Novedad editorial",
    date: "2026-05-01",
    displayDate: "Mayo 2026",
    title: "La Caja del Tiempo: un objeto, una pregunta",
    excerpt:
      "El artefacto que enlaza alquimia, memoria y responsabilidad en el universo narrativo.",
    image: "/assets/caja-del-tiempo.jpg",
    body: [
      "Forjada en el origen mítico del relato, la Caja del Tiempo no es únicamente una pieza antigua: responde a la intención de quien se aproxima a ella.",
      "Sus materiales, su reloj y su rubí abren una pregunta que atraviesa ambos libros: no si podemos retener el tiempo, sino qué merecemos hacer con él.",
    ],
  },
  // ── NOTICIAS ──────────────────────────────────────────────────────
  {
    slug: "la-hermandad-del-anillo",
    category: "Noticia",
    date: "2026-04-01",
    displayDate: "Abril 2026",
    title: "La hermandad del anillo: vela por que se cumpla la profecía",
    excerpt:
      "El anillo de Yharty reúne custodia, lealtad y el compromiso de proteger el destino anunciado.",
    image: "/assets/anillo-yharty.jpg",
    body: [
      "La hermandad custodia el anillo como emblema de Yharty y del juramento que atraviesa generaciones: velar por que la profecía encuentre su cumplimiento.",
      "En este universo de ciencia, mito y aventura, la lealtad es una fuerza capaz de unir las rutas de Lágrimas Errantes con los secretos de la Caja del Tiempo.",
    ],
  },
];