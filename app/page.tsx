import Image from "next/image";
import { BookCard } from "@/components/BookCard";
import { ButtonLink } from "@/components/ButtonLink";
import { NewsCard } from "@/components/NewsCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { UniverseTopics } from "@/components/UniverseTopics";
import { bookSections, news, siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-screen items-end overflow-hidden pt-28">
        <Image
          src="/assets/caja-del-tiempo.jpg"
          alt="Caja antigua con reloj, geometrías y rubí granate"
          fill
          priority
          className="-z-10 object-cover object-[67%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,12,18,.99),rgba(7,12,18,.87)_42%,rgba(7,12,18,.24)_78%),linear-gradient(0deg,#070c12,transparent_42%)]" />
        <div className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:pb-24">
          <Reveal className="max-w-3xl">
            <p className="mb-7 flex items-center gap-4 text-[.68rem] font-bold uppercase tracking-[.36em] text-gold-light before:h-px before:w-10 before:bg-gold">
              Autor · Universo literario
            </p>
            <h1 className="font-display text-[clamp(4.4rem,10vw,8.5rem)] leading-[.87] tracking-[-.03em] text-ivory">
              Lágrimas
              <span className="block pl-[clamp(2rem,8vw,6rem)] italic text-gold-light">
                Errantes
              </span>
            </h1>
            <p className="mt-6 font-display text-[clamp(1.45rem,3vw,2.25rem)] italic text-parchment">
              Javier Imaz Fandos
            </p>
            <p className="mt-9 font-display text-[clamp(1.65rem,3vw,2.35rem)] italic leading-snug text-parchment">
              {siteConfig.tagline}
            </p>
            <blockquote className="mt-7 border-l border-gold/45 pl-5 text-base leading-8 text-muted">
              “Los objetos que importan siempre llegan por rutas largas.”
            </blockquote>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/lagrimas-errantes">
                Descubrir Lágrimas Errantes
              </ButtonLink>
              <ButtonLink href="/libros" variant="outline">
                Ver libros
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.9fr_1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="El universo literario"
              title="Donde el tiempo deja huellas."
              description="Un mundo narrativo de alquimistas, manuscritos, sociedades secretas y rutas antiguas. La Caja del Tiempo une los misterios de Lágrimas Errantes con una nueva puerta aún por abrir."
            />
            <UniverseTopics />
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden border border-gold/20 p-3 map-glow">
              <Image
                src="/assets/mapa-rutas-literarias.jpg"
                width={1400}
                height={781}
                alt="Mapa ilustrado de las rutas del universo literario"
                className="w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-parchment/10 bg-ink-soft px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Obras"
              title="La biblioteca"
              description="Novela, poesía y ensayo atravesados por una misma inquietud: la memoria, el secreto y nuestra forma de habitar el tiempo."
              centered
            />
          </Reveal>
          <div className="mt-16 space-y-20">
            {bookSections.map((section) => (
              <div key={section.title}>
                <Reveal>
                  <h3 className="border-b border-gold/20 pb-5 font-display text-4xl text-ivory">
                    {section.title}
                  </h3>
                </Reveal>
                <div className="mt-9 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {section.books.map((book, index) => (
                    <Reveal key={book.slug} delay={index * 80}>
                      <BookCard book={book} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 text-center sm:px-8 lg:py-32">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/8 blur-3xl" />
        <Reveal className="relative mx-auto max-w-4xl">
          <p className="literary-rule mb-9 justify-center text-[.68rem] font-bold uppercase tracking-[.34em] text-gold-light">
            Lágrimas Errantes
          </p>
          <blockquote className="font-display text-[clamp(2.5rem,5vw,4.6rem)] italic leading-tight text-ivory">
            “El tiempo no puede poseerse. Solo puede merecerse.”
          </blockquote>
        </Reveal>
      </section>

      <section className="bg-panel/25 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Noticias"
              title="Novedades"
              description="Presentaciones, proceso creativo y claves del universo narrativo."
            />
          </Reveal>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {news.map((item, index) => (
              <Reveal key={item.slug} delay={80 * index}>
                <NewsCard item={item} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <ButtonLink href="/noticias" variant="outline">
              Ver todas las noticias
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-4xl border border-gold/20 bg-[radial-gradient(circle_at_50%_100%,rgba(194,151,74,.15),transparent_45%),#0d151e] px-6 py-14 text-center sm:px-14">
          <p className="mb-5 text-[.68rem] font-bold uppercase tracking-[.34em] text-gold-light">
            Cuaderno de novedades
          </p>
          <h2 className="font-display text-5xl text-ivory sm:text-6xl">
            Recibe las próximas señales.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-muted">
            Apúntate para recibir noticias de lanzamientos, presentaciones y nuevos
            fragmentos del universo literario.
          </p>
          <div className="mx-auto max-w-xl">
            <NewsletterForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
