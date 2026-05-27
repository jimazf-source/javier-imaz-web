import { NewsCard } from "@/components/NewsCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { news } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Noticias",
  description:
    "Novedades editoriales, presentaciones y proceso creativo de Javier Imaz Fandos.",
  path: "/noticias",
  image: "/assets/mapa-rutas-literarias.jpg",
});

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Cuaderno editorial"
        title="Noticias"
        subtitle="Presentaciones, proceso creativo y nuevas señales desde el universo literario."
        image="/assets/mapa-rutas-literarias.jpg"
      />
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <Reveal key={item.slug} delay={index * 75}>
              <NewsCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
