import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Donde aún respira tu nombre",
  description:
    "Cartografía poética de una ausencia. 52 poemas comentados, ilustrados y musicados de Javier Imaz Fandos.",
  path: "/donde-aun-respira-tu-nombre",
  image: "/assets/portada-donde-aun-respira-frontal.jpg",
});

const estaciones = [
  { numero: "I", title: "El nacimiento del amor", poemas: "6 poemas", text: "Cuando el amor aparece sin saber que será memoria." },
  { numero: "II", title: "La intensidad", poemas: "5 poemas", text: "Cuando el amor parece infinito." },
  { numero: "III", title: "La ruptura", poemas: "5 poemas", text: "Cuando aparecen las primeras grietas." },
  { numero: "IV", title: "La caída", poemas: "5 poemas", text: "Cuando el amor se derrumba." },
  { numero: "V", title: "El duelo", poemas: "6 poemas", text: "Cuando la ausencia comienza a instalarse." },
  { numero: "VI", title: "La memoria", poemas: "9 poemas", text: "Cuando el amor sobrevive en el recuerdo." },
  { numero: "VII", title: "La permanencia", poemas: "4 poemas", text: "Cuando el amor ya no existe, pero permanece." },
  { numero: "VIII", title: "Trascendencia", poemas: "12 poemas", text: "Cuando el amor se convierte en palabra." },
];

const dimensiones = [
  { numero: "01", label: "Palabra", title: "52 poemas comentados", text: "Verso libre de arquitectura rigurosa —cinco estrofas de cinco versos—, cada uno seguido de un comentario crítico del propio autor que revela su mecánica simbólica." },
  { numero: "02", label: "Imagen", title: "52 láminas originales", text: "Ilustraciones en tinta del autor: figuras solitarias, blancos habitados y un hilo rojo que recorre el libro como emblema del amor que insiste en permanecer." },
  { numero: "03", label: "Música", title: "52 piezas para escuchar", text: "Un código QR junto a cada poema permite escucharlo interpretado y acompañado de música, sumergiendo al lector en una experiencia íntima, visual y sonora." },
];

const galeria = [
  { src: "/assets/portada-donde-aun-respira-frontal.jpg", alt: "Portada de Donde aún respira tu nombre", title: "Portada" },
  { src: "/assets/donde-aun-respira-gallery/lamina-01.jpg", alt: "Lámina interior 01 de Donde aún respira tu nombre", title: "Lámina 01" },
  { src: "/assets/donde-aun-respira-gallery/lamina-02.jpg", alt: "Lámina interior 02 de Donde aún respira tu nombre", title: "Lámina 02" },
  { src: "/assets/donde-aun-respira-gallery/lamina-03.jpg", alt: "Lámina interior 03 de Donde aún respira tu nombre", title: "Lámina 03" },
  { src: "/assets/donde-aun-respira-gallery/lamina-04.jpg", alt: "Lámina interior 04 de Donde aún respira tu nombre", title: "Lámina 04" },
  { src: "/assets/donde-aun-respira-gallery/lamina-05.jpg", alt: "Lámina interior 05 de Donde aún respira tu nombre", title: "Lámina 05" },
  { src: "/assets/donde-aun-respira-gallery/lamina-06.jpg", alt: "Lámina interior 06 de Donde aún respira tu nombre", title: "Lámina 06" },
  { src: "/assets/donde-aun-respira-gallery/lamina-07.jpg", alt: "Lámina interior 07 de Donde aún respira tu nombre", title: "Lámina 07" },
  { src: "/assets/donde-aun-respira-gallery/lamina-08.jpg", alt: "Lámina interior 08 de Donde aún respira tu nombre", title: "Lámina 08" },
  { src: "/assets/donde-aun-respira-gallery/lamina-09.jpg", alt: "Lámina interior 09 de Donde aún respira tu nombre", title: "Lámina 09" },
  { src: "/assets/donde-aun-respira-gallery/lamina-10.jpg", alt: "Lámina interior 10 de Donde aún respira tu nombre", title: "Lámina 10" },
  { src: "/assets/donde-aun-respira-gallery/lamina-11.jpg", alt: "Lámina interior 11 de Donde aún respira tu nombre", title: "Lámina 11" },
];

const vimeoAccesses = [
  {
    title: "I. El vértigo del amor",
    description:
      "Primera pieza audiovisual del poemario: una entrada íntima al universo sonoro, visual y emocional de la obra.",
    embedUrl:
      "https://player.vimeo.com/video/1206848969?title=0&byline=0&portrait=0&badge=0&vimeo_logo=0&pip=0&dnt=1&autopause=0",
  },
  {
    title: "II. Siempre juntos los dos",
    description:
      "Segundo acceso en Vimeo para acompañar la lectura con imagen, música y la atmósfera poética del libro.",
    embedUrl:
      "https://player.vimeo.com/video/1206858779?title=0&byline=0&portrait=0&badge=0&vimeo_logo=0&pip=0&dnt=1&autopause=0",
  },
];

export default function DondeAunRespiraPage() {
  return (
    <>
      <PageHero
        eyebrow="Poemario publicado"
        title="Donde aún respira tu nombre"
        subtitle="Cartografía poética de una ausencia."
        image="/assets/portada-donde-aun-respira-frontal.jpg"
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="#">Comprar libro</ButtonLink>
          <ButtonLink href="/zami-reivaj" variant="outline">
            Proyecto musical
          </ButtonLink>
          <ButtonLink href="/muestra-donde-aun-respira" variant="outline">
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
                  src="/assets/portada-donde-aun-respira-frontal.jpg"
                  alt="Portada de Donde aún respira tu nombre"
                  width={397}
                  height={592}
                  className="block h-auto w-full object-cover shadow-2xl"
                  priority
                />
              </div>
              <dl className="space-y-4 p-7 text-sm">
                <div><dt className="text-muted">Editorial</dt><dd className="mt-1 text-parchment">NPQ Editores</dd></div>
                <div><dt className="text-muted">Primera edición</dt><dd className="mt-1 text-parchment">Junio 2026</dd></div>
                <div><dt className="text-muted">ISBN</dt><dd className="mt-1 text-parchment">979-13-88234-17-0</dd></div>
                <div><dt className="text-muted">Estructura</dt><dd className="mt-1 text-parchment">52 poemas · 8 estaciones</dd></div>
              </dl>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading eyebrow="Sinopsis" title="El amor que no se olvida porque nunca se vivió del todo." />
              <div className="mt-9 space-y-6 text-lg leading-9 text-parchment">
                <p>El amor no siempre encuentra su destino en el tiempo. A veces encuentra su forma en la memoria. Donde aún respira tu nombre es una obra singular en el panorama de la poesía contemporánea en lengua española.</p>
                <p>No es únicamente un poemario: es un mapa emocional de alta precisión, trazado sobre el territorio invisible que deja un amor que no llega a cumplirse del todo. Javier Imaz Fandos construye una arquitectura poética de 52 poemas —cada uno acompañado de un comentario crítico propio— que guía al lector a través de ocho estaciones emocionales.</p>
                <p>Un viaje completo que no termina con el olvido, sino con algo más valioso: la integración.</p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-4">
              {estaciones.map((e, index) => (
                <Reveal key={e.numero} delay={index * 60}>
                  <article className="grid gap-4 border border-parchment/10 bg-panel/45 p-7 sm:grid-cols-[150px_1fr]">
                    <div>
                      <p className="text-[.68rem] font-bold uppercase tracking-[.25em] text-gold-light">Estación {e.numero}</p>
                      <p className="mt-1 text-xs text-muted">{e.poemas}</p>
                    </div>
                    <div>
                      <h3 className="font-display text-3xl text-ivory">{e.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{e.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-parchment/10 bg-ink-soft px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="El universo del poemario" title="Para leer, contemplar y escuchar" description="No es solo un poemario: es una experiencia artística y sensorial concebida para vivirse con todos los sentidos. Palabra, imagen y música se unen para dar forma a un universo propio." centered />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {dimensiones.map((d, index) => (
              <Reveal key={d.numero} delay={index * 90}>
                <article className="border border-gold/20 bg-panel p-8">
                  <p className="text-[.65rem] font-bold uppercase tracking-[.28em] text-gold-light">{d.numero} — {d.label}</p>
                  <p className="mt-4 font-display text-5xl text-ivory">52</p>
                  <h3 className="mt-2 font-display text-2xl text-ivory">{d.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{d.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-14 border border-gold/20 bg-panel p-10 text-center">
              <p className="text-[.68rem] font-bold uppercase tracking-[.32em] text-gold-light">Autoría total</p>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-parchment">Las tres dimensiones de la obra —escritura, pintura y composición— son obra del propio Javier Imaz Fandos. Palabra, imagen y sonido nacen de una sola voz y convergen en un único universo poético.</p>
              <div className="mt-8">
                <ButtonLink href="/zami-reivaj">
                  Entrar en el proyecto musical
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Vídeos del libro" title="Donde aún respira tu nombre en movimiento" description="Dos accesos audiovisuales para entrar en el universo sonoro y visual del poemario desde Vimeo." centered />
          </Reveal>
          <div className="mt-14 space-y-8">
            {vimeoAccesses.map((video, index) => (
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
            <SectionHeading eyebrow="Galería del libro" title="Imágenes de Donde aún respira tu nombre" description="Portada y láminas interiores del poemario: figuras solitarias, blancos habitados y el hilo rojo de la memoria." centered />
          </Reveal>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {galeria.map((item, index) => (
              <Reveal key={item.src} delay={index * 70}>
                <figure className="group overflow-hidden border border-gold/20 bg-panel">
                  <div className="relative aspect-[2/3] overflow-hidden bg-ivory">
                    <Image src={item.src} alt={item.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80" />
                  </div>
                  <figcaption className="border-t border-gold/15 px-5 py-5">
                    <p className="font-display text-2xl leading-tight text-ivory">{item.title}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 text-center sm:px-8 lg:py-32">
        <Reveal className="mx-auto max-w-4xl">
          <p className="literary-rule mb-9 justify-center text-[.68rem] font-bold uppercase tracking-[.34em] text-gold-light">Frase destacada</p>
          <blockquote className="font-display text-[clamp(2.5rem,5vw,4.6rem)] italic leading-tight text-ivory">
            &ldquo;Hay amores que, aunque imposibles, se quedan para siempre donde importa: en la voz que se atreve a convertirlos en literatura.&rdquo;
          </blockquote>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ButtonLink href="#">Comprar Donde aún respira tu nombre</ButtonLink>
            <ButtonLink href="/muestra-donde-aun-respira" variant="outline">
              Leer muestra</ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
