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

const soundCloudUrl = "";

const spotifyAlbumUrl =
  "https://open.spotify.com/intl-es/album/2q3PEAfb8TUSEetan94nkV";

const amazonAlbumUrl =
  "https://www.amazon.es/dp/B0H7PRJYCB/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=72DL2IT2U0UB&dib=eyJ2IjoiMSJ9.2_5t90BmnONOMpjkbBbS-wOWcfMd-58f_1ZeyabqGjgfPoIh_YxnaqLBK1r3ECcW7jWdeHufbBPxEkZkn_Iy4uIJu0_r6wesFUG-dCTD9X7KXZFbDKjtGPHogPMVQIH_52hsAOZt13yTOfS45f2Yv1SR2cXKhRM9QUkZVnHkPHaAaaCd1QHF9SEfpb9_xusR.7AnLiOFXZk2SeIAX_vskqtKbGPjyXYkjSFE8HoTRp5c&dib_tag=se&keywords=zami+reivaj&qid=1783418481&s=mobile-apps&sprefix=zami+reivaj%2Cmobile-apps%2C87&sr=1-1";

const albumDiscography = [
  {
    number: "01",
    title: "When love falls",
    tracks: "15 canciones",
    status: "Publicado en plataformas",
    cover: "/assets/zami-albums/when-love-falls.png",
    alt: "Portada del álbum When love falls de Zami Reivaj",
    text: "Una primera caída emocional entre amor, pérdida y memoria: piano, soul y atmósfera cinematográfica.",
    links: [
      { label: "Spotify", href: "" },
      { label: "Amazon", href: "" },
      { label: "YouTube", href: "" },
      { label: "SoundCloud", href: "" },
    ],
  },
  {
    number: "02",
    title: "The echo that remains",
    tracks: "10 canciones",
    status: "Publicado en plataformas",
    cover: "/assets/zami-albums/the-echo-that-remains.png",
    alt: "Portada del álbum The echo that remains de Zami Reivaj",
    text: "Un territorio de ecos, voz rota y elegancia nocturna, con un pulso cercano al soulwave cinematográfico.",
    links: [
      { label: "Spotify", href: "" },
      { label: "Amazon", href: "" },
      { label: "YouTube", href: "" },
      { label: "SoundCloud", href: "" },
    ],
  },
  {
    number: "03",
    title: "I Love you perhaps.",
    tracks: "11 canciones",
    status: "Publicado en plataformas",
    cover: "/assets/zami-albums/i-love-you-perhaps.jpg",
    alt: "Portada del álbum I Love you perhaps de Zami Reivaj",
    text: "Canciones de deseo, duda y permanencia: una zona más íntima del universo romántico de Zami Reivaj.",
    links: [
      { label: "Spotify", href: "" },
      { label: "Amazon", href: "" },
      { label: "YouTube", href: "" },
      { label: "SoundCloud", href: "" },
    ],
  },
  {
    number: "04",
    title: "The moment we become us",
    tracks: "11 canciones",
    status: "Publicado en plataformas",
    cover: "/assets/zami-albums/the-moment-we-become-us.png",
    alt: "Portada del álbum The moment we become us de Zami Reivaj",
    text: "Un álbum luminoso y melancólico sobre el instante en que dos memorias comienzan a formar una sola historia.",
    links: [
      { label: "Spotify", href: "" },
      { label: "Amazon", href: "" },
      { label: "YouTube", href: "" },
      { label: "SoundCloud", href: "" },
    ],
  },
  {
    number: "05",
    title: "Donde aún respira tu nombre",
    tracks: "11 canciones",
    status: "Publicado · Libro origen",
    cover: "/assets/portada-donde-aun-respira-frontal.jpg",
    alt: "Portada del álbum Donde aún respira tu nombre de Zami Reivaj",
    text: "El álbum conectado al poemario: música, imagen y palabra unidos para prolongar la lectura del libro.",
    links: [
      { label: "Spotify", href: spotifyAlbumUrl },
      { label: "Amazon", href: amazonAlbumUrl },
      { label: "YouTube", href: musicPlaylistUrl },
      { label: "Vídeo YouTube", href: musicYoutubeVideoUrl },
      { label: "SoundCloud", href: soundCloudUrl },
      { label: "Comprar libro", href: bookPurchaseUrl },
    ],
  },
];

const universeStats = [
  { value: "52", label: "poemas" },
  { value: "52", label: "imágenes" },
  { value: "52", label: "canciones" },
  { value: "5", label: "álbumes publicados" },
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
              title="Cinco álbumes abiertos al universo Zami Reivaj"
              description="Cada álbum funciona como una puerta propia: portada, atmósfera, número de canciones y accesos de escucha o compra. La discografía queda preparada para seguir creciendo cuando lleguen nuevos lanzamientos."
              centered
            />
          </Reveal>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {albumDiscography.map((album, index) => (
              <Reveal key={album.number} delay={index * 80}>
                <article className="grid h-full overflow-hidden border border-gold/20 bg-panel/75 shadow-2xl shadow-black/15 md:grid-cols-[220px_1fr]">
                  <div className="relative aspect-square bg-ink md:h-full md:min-h-[220px]">
                    <Image
                      src={album.cover}
                      alt={album.alt}
                      fill
                      sizes="(min-width: 1024px) 220px, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-col p-7">
                    <p className="text-[.65rem] font-bold uppercase tracking-[.28em] text-gold-light">
                      Álbum {album.number}
                    </p>
                    <h3 className="mt-4 font-display text-3xl leading-tight text-ivory sm:text-4xl">
                      {album.title}
                    </h3>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[.18em] text-parchment">
                      {album.status} · {album.tracks}
                    </p>
                    <p className="mt-5 flex-1 text-sm leading-7 text-muted">
                      {album.text}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      {album.links.map((link) =>
                        link.href ? (
                          <ButtonLink key={link.label} href={link.href} className="min-h-11 px-5 py-2 text-xs">
                            {link.label}
                          </ButtonLink>
                        ) : (
                          <span
                            key={link.label}
                            className="inline-flex min-h-11 items-center justify-center rounded-full border border-parchment/15 px-5 py-2 text-xs font-semibold tracking-wide text-muted/70"
                          >
                            {link.label} pendiente
                          </span>
                        ),
                      )}
                    </div>
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
