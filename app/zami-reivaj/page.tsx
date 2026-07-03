import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { dondeAunRespiraVideos } from "@/data/donde-aun-respira-videos";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Zami Reivaj · Música",
  description:
    "Proyecto musical de Javier Imaz Fandos nacido del universo poético, visual y sonoro de Donde aún respira tu nombre.",
  path: "/zami-reivaj",
  image: "/assets/portada-donde-aun-respira-frontal.jpg",
});

const platformLinks = [
  {
    label: "Enlace oficial DistroKid / HyperFollow",
    href: "#distrokid-hyperfollow-pendiente",
    status: "Página oficial pendiente",
    text: "Página puente para reunir los enlaces que DistroKid genere cuando el álbum esté disponible en las plataformas.",
  },
  {
    label: "Comprar o escuchar en Apple",
    href: "#apple-pendiente",
    status: "Apple Music / iTunes pendiente",
    text: "Preparado para enlazar la ficha oficial cuando el álbum esté disponible en el ecosistema de Apple.",
  },
  {
    label: "Comprar o escuchar en Amazon",
    href: "#amazon-pendiente",
    status: "Amazon Music pendiente",
    text: "Preparado para la ficha del álbum en Amazon, útil como canal comercial y de escucha según disponibilidad.",
  },
  {
    label: "Escuchar en Spotify",
    href: "#spotify-pendiente",
    status: "Streaming pendiente",
    text: "Canal principal de descubrimiento y escucha, más orientado a streaming que a venta directa del álbum.",
  },
  {
    label: "Escuchar en YouTube",
    href: "#youtube-pendiente",
    status: "Vídeo / streaming pendiente",
    text: "Espacio para videoclips, lyric videos o YouTube Music. Ayuda mucho a descubrir el proyecto.",
  },
  {
    label: "Escuchar en SoundCloud",
    href: "#soundcloud-pendiente",
    status: "QR y escucha pendiente",
    text: "Ideal para enlazar los QR del libro. Se podrán escuchar pistas públicas o privadas compartidas mediante enlace secreto.",
  },
  {
    label: "Comprar el libro",
    href: "/donde-aun-respira-tu-nombre",
    status: "Página del poemario",
    text: "Acceso al libro que origina el proyecto musical, visual y poético.",
  },
];

const directoryLinks = [
  {
    label: "Proyecto musical",
    href: "/zami-reivaj",
    text: "La página central de Zami Reivaj, los álbumes y las plataformas de escucha o compra.",
  },
  {
    label: "Libros",
    href: "/libros",
    text: "El directorio literario con las obras publicadas y los proyectos en desarrollo.",
  },
];

const albumPlan = [
  {
    number: "01",
    title: "Primer álbum",
    status: "Terminado · 11 canciones",
    text: "Las primeras once piezas del ciclo musical de Donde aún respira tu nombre. El álbum ya está preparado para su distribución a través de DistroKid.",
  },
  {
    number: "02",
    title: "Segundo álbum",
    status: "En preparación · 12-14 canciones previstas",
    text: "Continuará el recorrido emocional del poemario, ampliando el diálogo entre voz, imagen y memoria.",
  },
  {
    number: "03",
    title: "Tercer álbum",
    status: "En preparación · 12-14 canciones previstas",
    text: "Un tramo más íntimo y cinematográfico del universo sonoro, pensado para acompañar nuevas estaciones del libro.",
  },
  {
    number: "04",
    title: "Cuarto álbum",
    status: "En preparación · 12-14 canciones previstas",
    text: "Cierre musical del proyecto: la última constelación de canciones vinculadas a los poemas y sus imágenes.",
  },
];

const firstAlbumTracks = Array.from({ length: 11 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    number,
    title: `Canción ${number}`,
  };
});

const universeStats = [
  { value: "52", label: "poemas" },
  { value: "52", label: "imágenes" },
  { value: "52", label: "canciones" },
  { value: "4", label: "álbumes previstos" },
];

export default function ZamiReivajPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-36 sm:px-8 lg:pb-28 lg:pt-44">
        <Image
          src="/assets/portada-donde-aun-respira-frontal.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_30%,rgba(194,151,74,.18),transparent_28%),linear-gradient(90deg,rgba(6,10,15,.98),rgba(6,10,15,.88)_48%,rgba(6,10,15,.62)),linear-gradient(0deg,#070c12,rgba(7,12,18,.62)_48%,#070c12)]" />

        <div className="mx-auto grid max-w-7xl items-end gap-14 lg:grid-cols-[1fr_380px]">
          <Reveal className="max-w-4xl">
            <p className="mb-6 flex items-center gap-4 text-[.68rem] font-bold uppercase tracking-[.34em] text-gold-light before:h-px before:w-9 before:bg-gold">
              Proyecto musical
            </p>
            <div className="mb-9 w-28 sm:w-36">
              <Image
                src="/assets/logo-zr-gold.png"
                alt="Zami Reivaj"
                width={360}
                height={180}
                className="h-auto w-full"
              />
            </div>
            <h1 className="font-display text-6xl leading-[.95] text-ivory sm:text-7xl lg:text-8xl">
              Zami Reivaj
            </h1>
            <p className="mt-7 max-w-3xl font-display text-2xl italic leading-snug text-parchment sm:text-3xl">
              Música nacida de un libro donde la poesía, la imagen y la voz buscan la misma herida luminosa.
            </p>
            <p className="mt-8 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              Zami Reivaj es el pseudónimo musical de Javier Imaz Fandos. El proyecto nace del poemario
              {" "}
              <span className="text-parchment">Donde aún respira tu nombre</span>, una obra concebida como universo total:
              52 poemas, 52 imágenes y 52 canciones conectadas mediante códigos QR a SoundCloud.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="#primer-album">Primer álbum</ButtonLink>
              <ButtonLink href="/donde-aun-respira-tu-nombre" variant="outline">
                Ver el libro
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="border border-gold/25 bg-panel/85 p-5 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="relative aspect-[2/3] overflow-hidden bg-ivory">
                <Image
                  src="/assets/portada-donde-aun-respira-frontal.jpg"
                  alt="Portada de Donde aún respira tu nombre"
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t border-gold/15 px-2 pt-6">
                <p className="text-[.68rem] font-bold uppercase tracking-[.28em] text-gold-light">
                  Libro origen
                </p>
                <p className="mt-3 font-display text-3xl leading-tight text-ivory">
                  Donde aún respira tu nombre
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Poemario, galería visual y ciclo musical unidos en una misma experiencia emocional.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-parchment/10 bg-ink-soft px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Universo sonoro"
              title="Una cartografía de poesía, imagen y música"
              description="El libro no funciona como un objeto aislado. Cada poema abre una puerta: una imagen lo acompaña, una canción lo prolonga y el lector puede atravesar esa escena desde la página, el oído y la mirada."
              centered
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {universeStats.map((item, index) => (
              <Reveal key={item.label} delay={index * 70}>
                <div className="border border-gold/20 bg-panel p-8 text-center">
                  <p className="font-display text-6xl text-ivory">{item.value}</p>
                  <p className="mt-3 text-[.68rem] font-bold uppercase tracking-[.26em] text-gold-light">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Vídeos del poemario"
              title="Donde aún respira tu nombre en movimiento"
              description="Dos piezas audiovisuales para conectar el proyecto musical con el universo visual y emocional del libro."
              centered
            />
          </Reveal>

          <div className="mt-14 space-y-8">
            {dondeAunRespiraVideos.map((video, index) => (
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

      <section id="primer-album" className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[420px_1fr]">
          <Reveal>
            <div className="sticky top-28">
              <SectionHeading
                eyebrow="Primer álbum"
                title="Las primeras 11 canciones"
                description="El primer álbum del ciclo ya está terminado y subido a DistroKid. Esta sección queda preparada para enlazar las plataformas oficiales cuando estén disponibles."
              />
              <div className="mt-9 border border-gold/20 bg-panel p-7">
                <p className="text-[.68rem] font-bold uppercase tracking-[.28em] text-gold-light">
                  Estado
                </p>
                <p className="mt-4 font-display text-3xl text-ivory">
                  Álbum 1 completado
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Once canciones como primera entrega del universo musical de Donde aún respira tu nombre.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {firstAlbumTracks.map((track, index) => (
              <Reveal key={track.number} delay={index * 45}>
                <article className="grid gap-5 border border-parchment/10 bg-panel/45 p-6 sm:grid-cols-[90px_1fr_auto] sm:items-center">
                  <p className="font-display text-4xl text-gold-light">{track.number}</p>
                  <div>
                    <h3 className="font-display text-3xl text-ivory">{track.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      Título pendiente de confirmar para publicación web.
                    </p>
                  </div>
                  <span className="rounded-full border border-gold/25 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-gold-light">
                    Álbum 1
                  </span>
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
              eyebrow="Mapa discográfico"
              title="Cuatro álbumes para completar el ciclo"
              description="La sección queda pensada para crecer con el proyecto: el primer álbum ya existe y los tres siguientes ocuparán su lugar conforme se terminen las nuevas canciones."
              centered
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {albumPlan.map((album, index) => (
              <Reveal key={album.number} delay={index * 80}>
                <article className="flex h-full flex-col border border-gold/20 bg-panel p-7">
                  <p className="text-[.65rem] font-bold uppercase tracking-[.28em] text-gold-light">
                    Álbum {album.number}
                  </p>
                  <h3 className="mt-5 font-display text-3xl leading-tight text-ivory">
                    {album.title}
                  </h3>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[.18em] text-parchment">
                    {album.status}
                  </p>
                  <p className="mt-5 flex-1 text-sm leading-7 text-muted">
                    {album.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Compra, escucha y libro"
              title="DistroKid como centro de distribución"
              description="El álbum ya está preparado en DistroKid, que lo distribuye hacia las plataformas principales. Aquí quedarán enlazadas la página oficial del lanzamiento, las tiendas, los espacios de streaming y el acceso al libro."
              centered
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {platformLinks.map((platform, index) => (
              <Reveal key={platform.label} delay={index * 70}>
                <article
                  id={platform.href.startsWith("#") ? platform.href.slice(1) : undefined}
                  className="flex h-full flex-col border border-gold/20 bg-panel/55 p-7"
                >
                  <p className="text-[.65rem] font-bold uppercase tracking-[.28em] text-gold-light">
                    {platform.status}
                  </p>
                  <h3 className="mt-5 flex-1 font-display text-3xl leading-tight text-ivory">
                    {platform.label}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {platform.text}
                  </p>
                  <div className="mt-7">
                    <ButtonLink href={platform.href} variant={platform.href.startsWith("#") ? "quiet" : "gold"}>
                      {platform.href.startsWith("#") ? "Pendiente" : "Abrir"}
                    </ButtonLink>
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
              eyebrow="Directorio"
              title="Accesos principales de la web"
              description="En el menú de las tres rayas quedan visibles los accesos importantes para moverse entre el proyecto musical y los libros."
              centered
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {directoryLinks.map((item, index) => (
              <Reveal key={item.href} delay={index * 80}>
                <article className="flex h-full flex-col border border-gold/20 bg-panel p-8">
                  <p className="text-[.65rem] font-bold uppercase tracking-[.28em] text-gold-light">
                    Acceso web
                  </p>
                  <h3 className="mt-5 flex-1 font-display text-4xl leading-tight text-ivory">
                    {item.label}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-muted">
                    {item.text}
                  </p>
                  <div className="mt-8">
                    <ButtonLink href={item.href} variant={index === 0 ? "gold" : "outline"}>
                      Abrir
                    </ButtonLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-parchment/10 px-5 py-24 text-center sm:px-8 lg:py-32">
        <Reveal className="mx-auto max-w-4xl">
          <p className="literary-rule mb-9 justify-center text-[.68rem] font-bold uppercase tracking-[.34em] text-gold-light">
            Zami Reivaj
          </p>
          <blockquote className="font-display text-[clamp(2.5rem,5vw,4.6rem)] italic leading-tight text-ivory">
            &ldquo;Una canción para cada poema. Una imagen para cada herida. Un libro convertido en territorio sonoro.&rdquo;
          </blockquote>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/donde-aun-respira-tu-nombre">
              Entrar en el poemario
            </ButtonLink>
            <ButtonLink href="/contacto" variant="outline">
              Contacto
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
