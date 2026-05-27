import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { books } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const detailBooks = books.filter((book) => book.href.startsWith("/libros/"));

export function generateStaticParams() {
  return detailBooks.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = detailBooks.find((item) => item.slug === slug);
  if (!book) return {};

  return createMetadata({
    title: book.title,
    description: book.shortDescription,
    path: book.href,
    image: book.image,
  });
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = detailBooks.find((item) => item.slug === slug);
  if (!book) notFound();

  return (
    <>
      <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(194,151,74,.15),transparent_35%),linear-gradient(180deg,#0b131b,#070c12)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_.72fr]">
          <Reveal>
            <p className="flex items-center gap-4 text-[.68rem] font-bold uppercase tracking-[.34em] text-gold-light before:h-px before:w-9 before:bg-gold">
              {book.genre}
            </p>
            <h1 className="mt-8 font-display text-[clamp(3.6rem,7vw,6.2rem)] leading-[.96] text-ivory">
              {book.title}
            </h1>
            <p className="mt-7 max-w-2xl font-display text-3xl italic leading-snug text-parchment">
              {book.subtitle}
            </p>
            <p className="mt-8 text-xs font-bold uppercase tracking-[.28em] text-muted">
              {book.status}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="#sinopsis">Leer sinopsis</ButtonLink>
              <ButtonLink href="/contacto" variant="outline">
                Consultas
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <figure className="overflow-hidden border border-gold/20 bg-panel p-3">
              <Image
                src={book.image}
                alt={`${book.imageLabel} para ${book.title}`}
                width={1400}
                height={900}
                priority
                className={
                  book.imageLabel === "Portada aportada"
                    ? "mx-auto max-h-[680px] w-auto max-w-full object-contain shadow-2xl"
                    : "aspect-[4/4.6] w-full object-cover"
                }
              />
              <figcaption className="px-3 pb-2 pt-5 text-[.62rem] font-bold uppercase tracking-[.25em] text-muted">
                {book.imageLabel}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section id="sinopsis" className="scroll-mt-24 border-y border-parchment/10 bg-ink-soft px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.72fr_1fr]">
          <Reveal>
            <SectionHeading eyebrow="La obra" title="Sinopsis" />
          </Reveal>
          <Reveal delay={90} className="space-y-7 text-lg leading-9 text-parchment">
            {book.synopsis?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-5xl text-center">
          <SectionHeading eyebrow="Claves" title="Territorios de lectura" centered />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {book.themes?.map((theme) => (
              <span
                key={theme}
                className="rounded-full border border-gold/25 px-6 py-3 font-display text-2xl text-parchment"
              >
                {theme}
              </span>
            ))}
          </div>
          <div className="mt-14">
            <ButtonLink href="/libros" variant="outline">
              Volver a todos los libros
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
