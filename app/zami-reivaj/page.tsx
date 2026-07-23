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

const pendingMusicLinks = [
  { label: "Spotify", href: "" },
  { label: "Amazon", href: "" },
  { label: "Apple Music", href: "" },
  { label: "YouTube", href: "" },
];

const dondeAunRespiraLinks = [
  { label: "Spotify", href: spotifyAlbumUrl },
  { label: "Amazon", href: amazonAlbumUrl },
  { label: "Apple Music", href: "" },
  { label: "YouTube", href: musicPlaylistUrl },
  { label: "Vídeo YouTube", href: musicYoutubeVideoUrl },
  { label: "SoundCloud", href: soundCloudUrl },
  { label: "Comprar libro", href: bookPurchaseUrl },
];

const discographySections = [
  {
    title: "Música en español",
    intro: "El ciclo en castellano nace directamente del poemario Donde aún respira tu nombre y crecerá con nuevos álbumes vinculados a sus poemas, imágenes y estaciones emocionales.",
    albums: [
      {
        number: "01",
        title: "Donde aún respira tu nombre",
        subtitle: "El instante donde nace el nosotros",
        tracks: "11 canciones · El nacimiento del amor y la intensidad",
        status: "Publicado · Ya a la venta",
        cover: "/assets/portada-donde-aun-respira-frontal.jpg",
        alt: "Portada del álbum Donde aún respira tu nombre de Zami Reivaj",
        text: "El álbum conectado al poemario: música, imagen y palabra unidos para prolongar la lectura del libro.",
        links: dondeAunRespiraLinks,
      },
      {
        number: "02",
        title: "Cuando el amor se derrumba",
        subtitle: "La ruptura y la caída",
        tracks: "10 canciones previstas",
        status: "Boceto de álbum",
        text: "Un tramo más oscuro del ciclo: la pérdida, la distancia y el primer silencio después de la intensidad.",
        links: pendingMusicLinks,
      },
      {
        number: "03",
        title: "El eco que permanece",
        subtitle: "El duelo y la memoria",
        tracks: "15 canciones previstas",
        status: "Boceto de álbum",
        text: "Canciones pensadas para habitar la memoria: lo que queda cuando el amor ya no está, pero sigue sonando.",
        links: pendingMusicLinks,
      },
      {
        number: "04",
        title: "Cuando el amor se convierte en palabras",
        subtitle: "La permanencia y la trascendencia",
        tracks: "16 canciones previstas",
        status: "Boceto de álbum",
        text: "Cierre del ciclo en español: la palabra como refugio, testimonio y forma de permanencia.",
        links: pendingMusicLinks,
      },
    ],
  },
  {
    title: "Música en inglés",
    intro: "La discografía en inglés abre otra respiración del proyecto: más cinematográfica, soulwave y romántica, con portadas y atmósferas propias.",
    albums: [
      {
        number: "01",
        title: "The moment we become us",
        subtitle: "The birth of love and intensity",
        tracks: "11 canciones",
        status: "Publicado en plataformas",
        cover: "/assets/zami-albums/the-moment-we-become-us.png",
        alt: "Portada del álbum The moment we become us de Zami Reivaj",
        text: "Un álbum luminoso y melancólico sobre el instante en que dos memorias comienzan a formar una sola historia.",
        links: pendingMusicLinks,
      },
      {
        number: "02",
        title: "The echo that remains",
        subtitle: "The rupture and the fall",
        tracks: "10 canciones",
        status: "Publicado en plataformas",
        cover: "/assets/zami-albums/the-echo-that-remains.png",
        alt: "Portada del álbum The echo that remains de Zami Reivaj",
        text: "Un territorio de eco, voz rota y elegancia nocturna, con un pulso cercano al soulwave cinematográfico.",
        links: pendingMusicLinks,
      },
      {
        number: "03",
        title: "When love falls",
        subtitle: "Grief and memory",
        tracks: "15 canciones",
        status: "Publicado en plataformas",
        cover: "/assets/zami-albums/when-love-falls.png",
        alt: "Portada del álbum When love falls de Zami Reivaj",
        text: "Una primera caída emocional entre amor, pérdida y memoria: piano, soul y atmósfera cinematográfica.",
        links: pendingMusicLinks,
      },
      {
        number: "04",
        title: "When Love Becomes Words",
        subtitle: "Permanence and transcendence",
        tracks: "11 canciones previstas",
        status: "Boceto de álbum",
        text: "Espacio reservado para el cuarto álbum en inglés, pensado como cierre verbal y emocional del recorrido.",
        links: pendingMusicLinks,
      },
    ],
  },
  {
    title: "Recopilatorios",
    intro: "Recopilaciones y colecciones especiales para agrupar canciones, atmósferas y momentos del universo musical de Zami Reivaj.",
    albums: [
      {
        number: "01",
        title: "I Love you, perhaps",
        subtitle: "Canciones de deseo, duda y permanencia",
        tracks: "11 canciones",
        status: "Recopilatorio publicado",
        cover: "/assets/zami-albums/i-love-you-perhaps.jpg",
        alt: "Portada del recopilatorio I Love you, perhaps de Zami Reivaj",
        text: "Una zona más íntima del universo romántico de Zami Reivaj, reunida como colección emocional.",
        links: pendingMusicLinks,
      },
    ],
    extraCards: [
      {
        title: "Venta del libro",
        subtitle: "Donde aún respira tu nombre",
        status: "Poemario publicado",
        cover: "/assets/portada-donde-aun-respira-frontal.jpg",
        alt: "Portada del libro Donde aún respira tu nombre",
        text: "La página oficial de Grupo Editorial Sargantana conecta el libro con su universo poético, visual y musical.",
        links: [{ label: "Comprar libro", href: bookPurchaseUrl }],
      },
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
              title="Álbumes abiertos al universo Zami Reivaj"
              description="Cada álbum funciona como una puerta propia: portada, atmósfera, número de canciones y accesos de escucha o compra. La discografía queda preparada para seguir creciendo cuando lleguen nuevos lanzamientos."
              centered
            />
          </Reveal>

          <div className="mt-16 space-y-20">
            {discographySections.map((section, sectionIndex) => (
              <Reveal key={section.title} delay={sectionIndex * 90}>
                <div>
                  <div className="mx-auto max-w-4xl text-center">
                    <p className="literary-rule justify-center text-[.65rem] font-bold uppercase tracking-[.3em] text-gold-light">
                      {section.title}
                    </p>
                    <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
                      {section.intro}
                    </p>
                  </div>

                  <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {[...section.albums, ...(section.extraCards ?? [])].map((album) => (
                      <article
                        key={`${section.title}-${album.title}`}
                        className="flex h-full flex-col overflow-hidden border border-gold/20 bg-panel/75 shadow-2xl shadow-black/15"
                      >
                        <div className="relative aspect-square bg-[#0c2632]">
                          {"cover" in album && album.cover ? (
                            <>
                              <Image
                                src={album.cover}
                                alt={album.alt}
                                fill
                                sizes="(min-width: 1280px) 280px, (min-width: 768px) 50vw, 100vw"
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                            </>
                          ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center border-8 border-[#103243] bg-[radial-gradient(circle_at_50%_35%,rgba(194,151,74,.18),transparent_28%),linear-gradient(135deg,#12394a,#0a1d27)] p-8 text-center">
                              <p className="text-[.65rem] font-bold uppercase tracking-[.3em] text-gold-light/80">
                                Próximo álbum
                              </p>
                              <p className="mt-4 font-display text-3xl leading-tight text-ivory">
                                {"number" in album && album.number ? `Álbum ${album.number}` : "Libro"}
                              </p>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <p className="text-[.62rem] font-bold uppercase tracking-[.28em] text-gold-light">
                            {"number" in album && album.number ? `Álbum ${album.number}` : section.title}
                          </p>
                          <h3 className="mt-4 font-display text-3xl leading-tight text-ivory">
                            {album.title}
                          </h3>
                          <p className="mt-3 text-sm font-semibold leading-6 text-parchment">
                            {album.subtitle}
                          </p>
                          <p className="mt-4 text-[.68rem] font-bold uppercase tracking-[.16em] text-gold-light/85">
                            {album.status}
                          </p>
                          {"tracks" in album && album.tracks ? (
                            <p className="mt-2 text-xs font-semibold uppercase tracking-[.14em] text-parchment/90">
                              {album.tracks}
                            </p>
                          ) : null}
                          <p className="mt-5 flex-1 text-sm leading-7 text-muted">
                            {album.text}
                          </p>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {album.links.map((link) =>
                              link.href ? (
                                <ButtonLink
                                  key={link.label}
                                  href={link.href}
                                  className="min-h-10 px-4 py-2 text-[.72rem]"
                                >
                                  {link.label}
                                </ButtonLink>
                              ) : (
                                <span
                                  key={link.label}
                                  className="inline-flex min-h-10 items-center justify-center rounded-full border border-parchment/15 px-4 py-2 text-[.72rem] font-semibold tracking-wide text-muted/70"
                                >
                                  {link.label} pendiente
                                </span>
                              ),
                            )}
                          </div>
                        </div>
                      </article>
                    ))}
                    {section.albums.length + (section.extraCards?.length ?? 0) < 4 ? (
                      Array.from({ length: 4 - section.albums.length - (section.extraCards?.length ?? 0) }).map((_, index) => (
                        <article
                          key={`${section.title}-empty-${index}`}
                          className="hidden min-h-[24rem] border border-dashed border-gold/15 bg-panel/25 xl:block"
                          aria-hidden="true"
                        />
                      ))
                    ) : null}
                  </div>
                </div>
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
