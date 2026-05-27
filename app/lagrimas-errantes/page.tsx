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
  image: "/assets/hero-lagrimas-errantes.jpg",
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
    place: "Zuera, 1942",
    title: "El lector inesperado",
    text: "Zami encuentra el extremo de un hilo tendido durante siglos y descubre el poder de leer los signos.",
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
          <ButtonLink href={book.sampleUrl!} variant="outline" download>
            Leer muestra
          </ButtonLink>
        </div>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[360px_1fr]">
          <Reveal>
            <div className="sticky top-28 border border-gold/20 bg-panel p-7">
              <Image
                src="/assets/portada-lagrimas-errantes.jpg"
                alt="Portada de Lágrimas Errantes"
                width={397}
                height={592}
                className="w-full shadow-2xl"
              />
              <dl className="mt-7 space-y-4 text-sm">
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
          </Reveal>
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
