import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { books } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const book = books.find((item) => item.slug === "lagrimas-errantes")!;

export const metadata = createMetadata({
  title: "Lágrimas Errantes",
  description:
    "Lágrimas Errantes. Un bucle entre el tiempo y la leyenda, novela de Javier Imaz Fandos publicada por Universo de Letras.",
  path: "/lagrimas-errantes",
  image: "/assets/og-lagrimas-errantes-whatsapp.jpg",
});

const storyLines = [
  {
    place: "Gante, 1624",
    title: "El origen",
    text: "Un alquimista forja la Caja del Tiempo movido por el amor y por el temor a la pérdida.",
  },
  {
    place: "Los mares del siglo XIX",
    title: "La expedición",
    text: "Zacarías Neldson persigue las tres esferas de cuarzo en una ruta de ciencia, peligro y leyenda.",
  },
  {
    place: "Zufaria, 1942",
    title: "El lector inesperado",
    text: "Zami encuentra el extremo de un hilo tendido durante siglos y descubre el poder de leer los signos.",
  },
];

const vimeoVideos = [
  {
    title: "I. El origen de la leyenda",
    description:
      "Una puerta audiovisual al mito de Yharty, las lágrimas dispersas y los símbolos que abren la novela.",
    embedUrl:
      "https://player.vimeo.com/video/1194359474?title=0&byline=0&portrait=0&badge=0&vimeo_logo=0&pip=0&dnt=1&autopause=0",
  },
  {
    title: "II. En busca de un mito",
    description:
      "El viaje, la expedición y la llamada de aquello que permanece oculto entre mapas, memoria y destino.",
    embedUrl:
      "https://player.vimeo.com/video/1194537524?title=0&byline=0&portrait=0&badge=0&vimeo_logo=0&pip=0&dnt=1&autopause=0",
  },
  {
    title: "III. La búsqueda de lo imposible",
    description:
      "El tramo final del enigma: la frontera entre la aventura, el ritual y lo que el tiempo no quiere entregar.",
    embedUrl:
      "https://player.vimeo.com/video/1194543577?title=0&byline=0&portrait=0&badge=0&vimeo_logo=0&pip=0&dnt=1&autopause=0",
  },
];

const gallerySections = [
  {
    part: "Primera parte",
    title: "Las Lágrimas de Yharty",
    motto: "El origen.",
    images: [
      {
        src: "/assets/lagrimas-gallery/parte-1-shricopia.jpg",
        alt: "Diosa Shri nacida de pétalos dorados",
        title: "De sus pétalos dorados nació la diosa Shri",
        fit: "contain",
      },
      {
        src: "/assets/lagrimas-gallery/parte-1-02-bo-gema.jpg",
        alt: "Bo encuentra la gran gema en la mina",
        title: "Bo encuentra la gran Gema",
      },
      {
        src: "/assets/lagrimas-gallery/parte-1-03-muerte-veronica.jpg",
        alt: "Muerte de Verónica",
        title: "Muerte de Verónica",
      },
      {
        src: "/assets/lagrimas-gallery/parte-1-04-sinaplius.jpg",
        alt: "Sinaplius con la Caja del Tiempo",
        title: "Sinaplius",
      },
      {
        src: "/assets/lagrimas-gallery/parte-1-05-ruta-raymond.jpg",
        alt: "Mapa del viaje de Raymond",
        title: "La ruta de Raymond",
      },
      {
        src: "/assets/lagrimas-gallery/parte-1-06-expedicion-tibet.jpg",
        alt: "Expedición al Tíbet",
        title: "Expedición al Tíbet",
      },
      {
        src: "/assets/lagrimas-gallery/parte-1-07-raymond-amul.jpg",
        alt: "Raymond recibe de Amul la Lágrima de Yharty",
        title: "Raymond recibe de Amul la Lágrima de Yharty",
      },
      {
        src: "/assets/lagrimas-gallery/parte-1-08-regalo.jpg",
        alt: "Zami recibe el regalo",
        title: "El regalo",
      },
      {
        src: "/assets/lagrimas-gallery/parte-1-09-zami-desvan.jpg",
        alt: "Zami lee en el desván",
        title: "Zami en el desván",
      },
    ],
  },
  {
    part: "Segunda parte",
    title: "En busca de un mito",
    motto: "La gran expedición.",
    images: [
      {
        src: "/assets/lagrimas-gallery/parte-2-plano.jpg",
        alt: "Plano antiguo de la expedición del Spirit of the Winds",
        title: "Plano de la expedición",
      },
      {
        src: "/assets/lagrimas-gallery/parte-2-fosil-tortuga-alada.jpg",
        alt: "Fósil de la tortuga alada en el Crystal Palace",
        title: "El fósil de la tortuga alada",
      },
      {
        src: "/assets/lagrimas-gallery/parte-2-gran-expedicion.jpg",
        alt: "Botadura del barco de la gran expedición",
        title: "La gran expedición",
      },
      {
        src: "/assets/lagrimas-gallery/parte-2-04-captura.jpg",
        alt: "La captura en alta mar",
        title: "La captura",
      },
      {
        src: "/assets/lagrimas-gallery/parte-2-05-spirit.jpg",
        alt: "El Spirit navegando a toda vela",
        title: "El Spirit",
      },
      {
        src: "/assets/lagrimas-gallery/parte-2-06-guerra-opio.jpg",
        alt: "Rutas comerciales durante la Guerra del Opio",
        title: "Guerra del Opio",
      },
      {
        src: "/assets/lagrimas-gallery/parte-2-07-isla-do-fogo.jpg",
        alt: "Globo sobrevolando Isla do Fogo",
        title: "Isla do Fogo",
      },
      {
        src: "/assets/lagrimas-gallery/parte-2-08-polizon.jpg",
        alt: "Un polizón a bordo del barco",
        title: "Un polizón",
      },
      {
        src: "/assets/lagrimas-gallery/parte-2-09-relato-capitan-smith.jpg",
        alt: "El capitán Smith relata la travesía",
        title: "El relato del Capitán Smith",
      },
    ],
  },
  {
    part: "Tercera parte",
    title: "La búsqueda de lo imposible",
    motto: "El ritual.",
    images: [
      {
        src: "/assets/lagrimas-gallery/parte-3-madagascar.jpg",
        alt: "Mapa de Madagascar de la expedición del Spirit of the Winds",
        title: "Madagascar",
      },
      {
        src: "/assets/lagrimas-gallery/parte-3-02-rescate.jpg",
        alt: "El rescate en el pecio",
        title: "El rescate",
      },
      {
        src: "/assets/lagrimas-gallery/parte-3-03-pecio-capitan-kidd.jpg",
        alt: "El pecio del Capitán Kidd bajo el agua",
        title: "El pecio del Capitán Kidd",
      },
      {
        src: "/assets/lagrimas-gallery/parte-3-04-descenso-barco.jpg",
        alt: "Preparando el descenso al barco hundido",
        title: "Preparando el descenso al barco",
      },
      {
        src: "/assets/lagrimas-gallery/parte-3-05-desastre.jpg",
        alt: "El desastre entre las naves",
        title: "El desastre",
      },
      {
        src: "/assets/lagrimas-gallery/parte-3-06-canton.jpg",
        alt: "Navegando hacia Cantón",
        title: "Navegando hacia Cantón",
      },
      {
        src: "/assets/lagrimas-gallery/parte-3-07-li-xin.jpg",
        alt: "Li Xin ante el barco incendiado",
        title: "Li Xin",
      },
      {
        src: "/assets/lagrimas-gallery/parte-3-08-buscando-rajest.jpg",
        alt: "Buscando a Rajest en las calles de Cantón",
        title: "Buscando a Rajest",
      },
      {
        src: "/assets/lagrimas-gallery/parte-3-09-maling.jpg",
        alt: "El encuentro con Maling",
        title: "El encuentro con Maling",
      },
    ],
  },
];

export default function LagrimasPage() {
  return (
    <>
      <PageHero
        eyebrow="Novela publicada"
        title="Lágrimas Errantes"
        subtitle="Un bucle entre el tiempo y la leyenda."
        image="/assets/hero-lagrimas-errantes.jpg"
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href={book.purchaseUrl!}>Comprar libro</ButtonLink>
          <ButtonLink href="/muestra-lagrimas-errantes" variant="outline">
            Leer muestra
          </ButtonLink>
        </div>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[360px_1fr]">
          <Reveal>
            <div className="sticky top-28 overflow-hidden border border-gold/20 bg-panel">
              <div className="bg-ink">
                <Image
                  src="/assets/portada-lagrimas-errantes.jpg"
                  alt="Portada de Lágrimas Errantes"
                  width={397}
                  height={592}
                  className="block h-auto w-full object-cover shadow-2xl"
                  priority
                />
              </div>
              <dl className="space-y-4 p-7 text-sm">
                <div>
                  <dt className="text-muted">Editorial</dt>
                  <dd className="mt-1 text-parchment">{book.publisher}</dd>
                </div>
                <div>
                  <dt className="text-muted">Primera edición</dt>
                  <dd className="mt-1 text-parchment">{book.published}</dd>
                </div>
                <div>
                  <dt className="text-muted">ISBN papel</dt>
                  <dd className="mt-1 text-parchment">{book.isbn}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <SectionHeading eyebrow="Sinopsis" title="Tres épocas. Un solo destino." />
              <div className="mt-9 space-y-6 text-lg leading-9 text-parchment">
                <p>
                  Imagina que alguien forjó un objeto capaz de guardar el tiempo como si
                  fuese agua en una vasija. Imagina que ese objeto pasó de mano en mano
                  durante tres siglos, dejando a su paso amor, codicia, naufragios y secretos.
                </p>
                <p>
                  En el verano de 1942, un niño sube a un desván y encuentra en una caja la
                  punta de ese hilo. Así comienza una aventura entre historia, mitología,
                  misterio y el deseo universal de no perder aquello que amamos.
                </p>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-4">
              {storyLines.map((line, index) => (
                <Reveal key={line.place} delay={index * 75}>
                  <article className="grid gap-4 border border-parchment/10 bg-panel/45 p-7 sm:grid-cols-[150px_1fr]">
                    <p className="text-[.68rem] font-bold uppercase tracking-[.25em] text-gold-light">
                      {line.place}
                    </p>
                    <div>
                      <h3 className="font-display text-3xl text-ivory">{line.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{line.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-parchment/10 bg-ink-soft px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Image
              src="/assets/anillo-yharty.jpg"
              alt="Anillo simbólico de la tortuga de Yharty"
              width={1200}
              height={959}
              className="border border-gold/20"
            />
          </Reveal>
          <Reveal delay={90}>
            <SectionHeading
              eyebrow="El universo de Yharty"
              title="Tres lágrimas dispersas"
              description="Yharty, la tortuga alada, custodia un equilibrio roto. Sus tres lágrimas representan pasado, presente y futuro; reunirlas es el camino hacia una armonía perdida."
            />
            <p className="mt-7 leading-8 text-parchment">
              La Caja del Tiempo responde a la intención de quien la porta: amor y
              responsabilidad pueden abrir lo que la codicia convierte en condena.
            </p>
            <div className="mt-10 border-t border-gold/20 pt-8">
              <h3 className="font-display text-5xl leading-[1.06] text-ivory sm:text-6xl">
                El anillo de la hermandad
              </h3>
              <p className="mt-6 leading-8 text-parchment">
                El anillo de la hermandad es una señal de custodia y juramento:
                quienes lo reconocen aceptan proteger el equilibrio de Yharty y
                velar para que la profecía no se pierda entre los pliegues del
                tiempo. No es solo un emblema, sino una alianza silenciosa entre
                memoria, lealtad y destino.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Videos del libro"
              title="Lágrimas Errantes en movimiento"
              description="Tres piezas breves para entrar en el pulso visual de la novela: origen, expedición y ritual."
              centered
            />
          </Reveal>

          <div className="mt-14 space-y-8">
            {vimeoVideos.map((video, index) => (
              <Reveal key={video.embedUrl} delay={index * 90}>
                <article className="overflow-hidden border border-gold/20 bg-panel shadow-2xl shadow-black/20 lg:grid lg:grid-cols-[minmax(0,1.45fr)_420px]">
                  <div className="relative aspect-video bg-ink">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      allow="fullscreen; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-t border-gold/15 p-7 lg:border-l lg:border-t-0 lg:p-8">
                    <p className="literary-rule text-[.65rem] font-bold uppercase tracking-[.28em] text-gold-light">
                      Corto audiovisual
                    </p>
                    <h3 className="mt-6 font-display text-4xl leading-tight text-ivory">
                      {video.title}
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-muted">
                      {video.description}
                    </p>
                    <p className="mt-8 text-xs uppercase tracking-[.22em] text-gold-light/80">
                      Reproducir en pantalla completa desde el propio vídeo
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-parchment/10 bg-ink-soft px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Galería del libro"
              title="Imágenes de Lágrimas Errantes"
              description="Tres rutas visuales para recorrer el origen mítico, la expedición y el ritual que sostienen el universo de la novela."
              centered
            />
          </Reveal>

          <div className="mt-16 space-y-20">
            {gallerySections.map((section, sectionIndex) => (
              <section key={section.title}>
                <Reveal>
                  <div className="grid gap-5 border-b border-gold/20 pb-7 md:grid-cols-[auto_1fr] md:items-end">
                    <p className="text-[.68rem] font-bold uppercase tracking-[.32em] text-gold-light">
                      {section.part}
                    </p>
                    <div>
                      <h3 className="font-display text-4xl leading-tight text-ivory sm:text-5xl">
                        {section.title}
                      </h3>
                      <p className="mt-3 font-display text-2xl italic text-parchment">
                        {section.motto}
                      </p>
                    </div>
                  </div>
                </Reveal>

                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                  {section.images.map((item, index) => (
                    <Reveal key={item.src} delay={(sectionIndex + index) * 70}>
                      <figure className="group overflow-hidden border border-gold/20 bg-panel">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes="(min-width: 1024px) 33vw, 100vw"
                            className={`transition duration-700 group-hover:scale-105 ${
                              item.fit === "contain"
                                ? "object-contain"
                                : "object-cover"
                            }`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80" />
                        </div>
                        <figcaption className="border-t border-gold/15 px-5 py-5">
                          <p className="font-display text-2xl leading-tight text-ivory">
                            {item.title}
                          </p>
                        </figcaption>
                      </figure>
                    </Reveal>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 text-center sm:px-8 lg:py-32">
        <Reveal className="mx-auto max-w-4xl">
          <p className="literary-rule mb-9 justify-center text-[.68rem] font-bold uppercase tracking-[.34em] text-gold-light">
            Frase destacada
          </p>
          <blockquote className="font-display text-[clamp(2.5rem,5vw,4.6rem)] italic leading-tight text-ivory">
            “El tiempo no puede poseerse. Solo puede merecerse.”
          </blockquote>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ButtonLink href={book.purchaseUrl!}>Comprar Lágrimas Errantes</ButtonLink>
            <ButtonLink href={book.sampleUrl!} variant="outline" download>
              Descargar capítulo de muestra
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
