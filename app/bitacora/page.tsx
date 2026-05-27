import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { journalEntries } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Bitácora",
  description:
    "Crónicas, notas y fragmentos del universo narrativo de Javier Imaz Fandos.",
  path: "/bitacora",
  image: "/assets/mapa-rutas-literarias.jpg",
});

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Bitácora"
        title="Bitácora"
        subtitle="Crónicas, notas y fragmentos del universo narrativo."
        image="/assets/mapa-rutas-literarias.jpg"
      />

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Cuaderno literario"
              title="Tras las huellas de las obras"
              description="Un espacio para compartir símbolos, procesos de escritura y fragmentos que amplían la lectura de los libros."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {journalEntries.map((entry, index) => (
              <Reveal key={entry.title} delay={index * 80}>
                <article className="flex h-full flex-col border border-gold/20 bg-panel/45 p-8">
                  <p className="text-[.66rem] font-bold uppercase tracking-[.3em] text-gold-light">
                    {entry.kind}
                  </p>
                  <h2 className="mt-6 font-display text-4xl leading-tight text-ivory">
                    {entry.title}
                  </h2>
                  <p className="mt-6 flex-1 text-sm leading-8 text-parchment">
                    {entry.excerpt}
                  </p>
                  <p className="mt-9 text-[.62rem] font-bold uppercase tracking-[.25em] text-muted">
                    Próximamente
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-parchment/10 px-5 py-20 text-center sm:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="font-display text-5xl text-ivory">
            Sigue el universo literario.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-muted">
            Las novedades editoriales y presentaciones se publican en la sección de noticias.
          </p>
          <div className="mt-10">
            <ButtonLink href="/noticias" variant="outline">
              Ver noticias
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
