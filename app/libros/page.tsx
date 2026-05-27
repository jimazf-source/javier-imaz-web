import { BookCard } from "@/components/BookCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { bookSections } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Libros",
  description:
    "Biblioteca de Javier Imaz Fandos: novelas, poesía y ensayo ordenados por género.",
  path: "/libros",
});

export default function BooksPage() {
  return (
    <>
      <PageHero
        eyebrow="Biblioteca"
        title="Libros"
        subtitle="Novelas, poesía y ensayo: historias tejidas entre memoria, misterio y el tiempo."
        image="/assets/libro-biblioteca.jpg"
      />
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-24">
          {bookSections.map((section) => (
            <div key={section.title}>
              <Reveal>
                <SectionHeading
                  eyebrow="Colección"
                  title={section.title}
                  description={section.description}
                />
              </Reveal>
              <div className="mt-12 grid gap-9 md:grid-cols-2 xl:grid-cols-3">
                {section.books.map((book, index) => (
                  <Reveal key={book.slug} delay={index * 80}>
                    <BookCard book={book} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
