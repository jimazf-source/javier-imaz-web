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

const bookPurchaseUrl =
  "https://grupoeditorialsargantana.com/libro/donde-aun-respira-tu-nombre_196926/";

const musicPlaylistUrl =
  "https://www.youtube.com/playlist?list=OLAK5uy_m1VT6AzrYnSMEUIuoevasO8af_1WBQSLY";

const musicYoutubeVideoUrl =
  "https://www.youtube.com/watch?v=k9NAClO0n3M&list=OLAK5uy_m1VT6AzrYnSMEUIuoevasO8af_1WBQSLY";

const soundCloudUrl = "https://soundcloud.com/artists";

const spotifyAlbumUrl =
  "https://open.spotify.com/intl-es/album/2q3PEAfb8TUSEetan94nkV";

const amazonAlbumUrl =
  "https://www.amazon.es/dp/B0H7PRJYCB/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=72DL2IT2U0UB&dib=eyJ2IjoiMSJ9.2_5t90BmnONOMpjkbBbS-wOWcfMd-58f_1ZeyabqGjgfPoIh_YxnaqLBK1r3ECcW7jWdeHufbBPxEkZkn_Iy4uIJu0_r6wesFUG-dCTD9X7KXZFbDKjtGPHogPMVQIH_52hsAOZt13yTOfS45f2Yv1SR2cXKhRM9QUkZVnHkPHaAaaCd1QHF9SEfpb9_xusR.7AnLiOFXZk2SeIAX_vskqtKbGPjyXYkjSFE8HoTRp5c&dib_tag=se&keywords=zami+reivaj&qid=1783418481&s=mobile-apps&sprefix=zami+reivaj%2Cmobile-apps%2C87&sr=1-1";

const platformLinks = [
  {
    label: "Escuchar en Spotify",
    href: spotifyAlbumUrl,
    status: "Streaming",
    text: "Escucha el álbum completo en Spotify y guarda el proyecto para volver a sus canciones desde tu biblioteca.",
  },
  {
    label: "Comprar o escuchar en Amazon",
    href: amazonAlbumUrl,
    status: "Compra y escucha",
    text: "Accede a la ficha del álbum en Amazon para comprarlo o escucharlo desde las opciones disponibles en la plataforma.",
  },
  {
    label: "Escuchar en YouTube",
    href: musicPlaylistUrl,
    status: "Playlist oficial",
    text: "Reproduce el álbum como lista completa en YouTube y compártelo fácilmente con otros lectores y oyentes.",
  },
  {
    label: "Ver el lanzamiento en YouTube",
    href: musicYoutubeVideoUrl,
    status: "Vídeo y álbum",
    text: "Abre el primer vídeo del álbum y continúa la escucha desde la lista oficial del lanzamiento.",
  },
  {
    label: "Escuchar en SoundCloud",
    href: soundCloudUrl,
    status: "Escucha",
    text: "Accede al espacio de SoundCloud vinculado al universo musical de Zami Reivaj y sus piezas sonoras.",
  },
  {
    label: "Comprar el libro",
    href: bookPurchaseUrl,
    status: "Editorial Sargantana",
    text: "Compra del poemario en la ficha oficial de Grupo Editorial Sargantana.",
  },
];

const albumPlan = [
  {
    number: "01",
    title: "Primer álbum",
    status: "Terminado · 11 canciones",
    text: "Las primeras once piezas del ciclo musical de Donde aún respira tu nombre. El álbum ya puede escucharse y comprarse desde sus plataformas disponibles.",
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
              <ButtonLink href="#videos-poemario">Ver vídeos</ButtonLink>
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

      <section id="videos-poemario" className="px-5 py-20 sm:px-8 lg:py-28">
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
              title="Escucha el álbum y entra en el libro"
              description="El universo de Zami Reivaj ya puede recorrerse desde la música y desde la página. Escucha el álbum en las plataformas disponibles, compártelo con quien pueda sentirlo y completa la experiencia con el libro que le da origen."
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
