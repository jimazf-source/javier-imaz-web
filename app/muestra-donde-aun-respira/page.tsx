import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Muestra de Donde aún respira tu nombre",
  description:
    "Lee en la web la muestra de Donde aún respira tu nombre, los primeros capítulos del poemario de Javier Imaz Fandos.",
  path: "/muestra-donde-aun-respira",
  image: "/assets/portada-donde-aun-respira-frontal.jpg",
});

const sampleUrl = "/downloads/donde-aun-respira-tu-nombre-muestra.pdf";

export default function MuestraDondeAunRespiraPage() {
  return (
    <section className="px-5 pb-20 pt-32 sm:px-8 lg:pb-28">
      <Reveal className="mx-auto max-w-7xl">
        <p className="mb-5 flex items-center gap-4 text-[.68rem] font-bold uppercase tracking-[.34em] text-gold-light before:h-px before:w-9 before:bg-gold">
          Muestra de lectura
        </p>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h1 className="font-display text-5xl leading-[1.02] text-ivory sm:text-7xl">
              Donde aún respira tu nombre
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              Lectura de muestra del poemario. También puedes descargar el
              PDF recortado para leerlo con calma.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/donde-aun-respira-tu-nombre" variant="quiet">
              Volver al libro
            </ButtonLink>
            <ButtonLink href={sampleUrl} variant="outline" download>
              Descargar PDF
            </ButtonLink>
            <ButtonLink href="#">Comprar libro</ButtonLink>
          </div>
        </div>
      </Reveal>

      <Reveal
        delay={90}
        className="mx-auto mt-12 max-w-7xl overflow-hidden border border-gold/20 bg-panel shadow-2xl"
      >
        <iframe
          src={sampleUrl}
          title="Muestra de lectura de Donde aún respira tu nombre"
          className="h-[78vh] min-h-[620px] w-full bg-ivory"
        />
      </Reveal>
    </section>
  );
}
