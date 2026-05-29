import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { books } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const book = books.find((item) => item.slug === "lagrimas-errantes")!;

export const metadata = createMetadata({
  title: "Muestra de Lágrimas Errantes",
  description:
    "Lee en la web la muestra de Lágrimas Errantes, limitada hasta la página 31.",
  path: "/muestra-lagrimas-errantes",
  image: "/assets/portada-lagrimas-errantes.jpg",
});

export default function MuestraLagrimasErrantesPage() {
  return (
    <section className="px-5 pb-20 pt-32 sm:px-8 lg:pb-28">
      <Reveal className="mx-auto max-w-7xl">
        <p className="mb-5 flex items-center gap-4 text-[.68rem] font-bold uppercase tracking-[.34em] text-gold-light before:h-px before:w-9 before:bg-gold">
          Muestra de lectura
        </p>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h1 className="font-display text-5xl leading-[1.02] text-ivory sm:text-7xl">
              Lágrimas Errantes
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              Lectura de muestra hasta la página 31. También puedes descargar el
              PDF recortado para leerlo con calma.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/lagrimas-errantes" variant="quiet">
              Volver al libro
            </ButtonLink>
            <ButtonLink href={book.sampleUrl!} variant="outline" download>
              Descargar PDF
            </ButtonLink>
            <ButtonLink href={book.purchaseUrl!}>Comprar libro</ButtonLink>
          </div>
        </div>
      </Reveal>

      <Reveal
        delay={90}
        className="mx-auto mt-12 max-w-7xl overflow-hidden border border-gold/20 bg-panel shadow-2xl"
      >
        <iframe
          src={book.sampleUrl}
          title="Muestra de lectura de Lágrimas Errantes"
          className="h-[78vh] min-h-[620px] w-full bg-ivory"
        />
      </Reveal>
    </section>
  );
}
