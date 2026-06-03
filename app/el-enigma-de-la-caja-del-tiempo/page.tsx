import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { enigmaCharacters, enigmaSymbols } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "El Enigma de la Caja del Tiempo",
  description:
    "Adrián Hannemam recibe una misteriosa caja ligada a un alquimista desaparecido en 1624. Descubre El Enigma de la Caja del Tiempo.",
  path: "/el-enigma-de-la-caja-del-tiempo",
  image: "/assets/caja-del-tiempo.jpg",
});

const gallery = [
  {
    src: "/assets/caja-del-tiempo.jpg",
    alt: "La Caja del Tiempo con reloj y rubí",
    caption: "La caja y su mecanismo",
  },
  {
    src: "/assets/gante-atmosfera-caja-tiempo.png",
    alt: "Archivo europeo contemporáneo con la Caja del Tiempo sobre una mesa",
    caption: "Gante y las rutas antiguas",
  },
  {
    src: "/assets/enigma-adrian-gante-caja-tiempo.png",
    alt: "Adrián restaurando la Caja del Tiempo en Gante",
    caption: "Adrián en Gante",
  },
  {
    src: "/assets/enigma-leia-estambul-caja-tiempo.png",
    alt: "Leila investigando la Caja del Tiempo en Estambul",
    caption: "Leila en Estambul",
  },
  {
    src: "/assets/enigma-adrian-leia-psara-caja-tiempo-1.png",
    alt: "Adrián y Leila sobre un barco frente a Psará al atardecer",
    caption: "Rumbo a Psará",
  },
  {
    src: "/assets/enigma-adrian-leia-psara-caja-tiempo-2.png",
    alt: "Adrián y Leila en la costa de Psará junto a la Caja del Tiempo",
    caption: "La noche de Psará",
  },
];

export default function EnigmaPage() {
  return (
    <>
      <PageHero
        eyebrow="Próxima novela"
        title="El Enigma de la Caja del Tiempo"
        subtitle="Una novela sobre el tiempo, la memoria y los secretos que sobreviven a los hombres."
        image="/assets/caja-del-tiempo.jpg"
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="#sinopsis">Leer sinopsis</ButtonLink>
          <span className="inline-flex min-h-13 items-center rounded-full border border-gold/45 px-7 text-sm font-semibold text-gold-light">
            Compra próximamente
          </span>
        </div>
      </PageHero>

      <section id="sinopsis" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.78fr_1fr]">
          <Reveal>
            <SectionHeading eyebrow="Sinopsis" title="La caja que no debía llegar." />
            <figure className="mt-10 max-w-sm overflow-hidden border border-gold/20 bg-panel/40 p-2 shadow-2xl shadow-black/30">
              <Image
                src="/assets/caja-del-tiempo-completa.png"
                width={1538}
                height={1023}
                alt="La Caja del Tiempo completa con su reloj, símbolos y rubí"
                className="h-auto w-full object-contain"
              />
            </figure>
          </Reveal>
          <Reveal delay={100} className="space-y-7 text-lg leading-9 text-parchment">
            <p>
              Cuando Adrián Hannemam, restaurador del Museo de Diseño de Gante, recibe
              una misteriosa caja de madera oscura sin remitente, descubre que el objeto
              está ligado a su propio apellido y a un alquimista desaparecido en 1624.
            </p>
            <p>
              Lo que parecía una pieza antigua se convierte en la entrada a una trama de
              sociedades secretas, rutas perdidas, manuscritos, leyendas y una pregunta
              imposible: <span className="text-gold-light">¿puede el tiempo guardarse?</span>
            </p>
            <blockquote className="mt-10 border-l border-gold/50 pl-7 font-display text-3xl italic leading-snug text-ivory">
              “Los objetos que importan siempre llegan por rutas largas.”
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-parchment/10 bg-ink-soft px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Personajes"
              title="Nombres unidos por la caja"
              description="Cuatro vidas atravesadas por el origen y el destino de un objeto imposible."
              centered
            />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {enigmaCharacters.map((character, index) => (
              <Reveal key={character.name} delay={index * 70}>
                <article className="h-full border border-parchment/10 bg-panel/50 p-7">
                  <span className="font-display text-3xl text-gold">0{index + 1}</span>
                  <h3 className="mt-5 font-display text-3xl leading-tight text-ivory">
                    {character.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{character.description}</p>
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
              eyebrow="Símbolos"
              title="Cinco claves del misterio"
              description="Objetos y signos que convierten la investigación en una lectura del tiempo."
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-parchment/10 bg-parchment/10 sm:grid-cols-2 lg:grid-cols-5">
            {enigmaSymbols.map((symbol, index) => (
              <Reveal key={symbol.title} delay={index * 55} className="bg-ink-soft">
                <article className="min-h-[250px] p-7">
                  <span className="text-xs font-bold tracking-[.3em] text-gold">0{index + 1}</span>
                  <h3 className="mt-7 font-display text-3xl text-ivory">{symbol.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{symbol.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-panel/25 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Ambientación"
              title="Europa bajo una luz secreta"
              description="Gante, Praga, Psará, rutas antiguas, archivos y museos. Lugares donde cada objeto conserva una capa de historia y cada documento puede contener una amenaza."
            />
          </Reveal>
          <Reveal delay={90}>
            <Image
              src="/assets/gante-atmosfera-caja-tiempo.png"
              width={1822}
              height={863}
              alt="Archivo europeo contemporáneo con la Caja del Tiempo sobre una mesa"
              className="border border-gold/20 shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Galería" title="El mundo del Enigma" centered />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {gallery.map((image, index) => (
              <Reveal key={image.src} delay={index * 70}>
                <figure className="group relative overflow-hidden border border-gold/15">
                  <div className="relative aspect-[16/10]">
                    <Image
                      fill
                      src={image.src}
                      alt={image.alt}
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 to-transparent px-6 pb-5 pt-14 font-display text-2xl text-ivory">
                    {image.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-parchment/10 px-5 py-24 text-center sm:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <p className="text-[.68rem] font-bold uppercase tracking-[.34em] text-gold-light">
            El umbral espera
          </p>
          <h2 className="mt-6 font-display text-6xl text-ivory sm:text-7xl">
            Entra en el enigma.
          </h2>
          <p className="mx-auto mt-7 max-w-lg leading-8 text-muted">
            Sigue las novedades del lanzamiento y descubre las próximas piezas de la historia.
          </p>
          <div className="mt-10">
            <ButtonLink href="https://www.instagram.com/lagrimaserrantes">
              Seguir las novedades
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
