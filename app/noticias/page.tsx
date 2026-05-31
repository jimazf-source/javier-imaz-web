import { NewsCard } from "@/components/NewsCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { news } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Noticias",
  description:
    "Firmas, presentaciones y ferias de Lágrimas Errantes en Zaragoza.",
  path: "/noticias",
  image: "/assets/noticias/3-2.png",
});

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Agenda viva"
        title="Noticias"
        subtitle="Firmas, presentaciones y ferias donde Lágrimas Errantes se encuentra con sus lectores."
        image="/assets/noticias/3-2.png"
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
