import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { news } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = news.find((post) => post.slug === slug);
  if (!item) return {};
  return createMetadata({
    title: item.title,
    description: item.excerpt,
    path: `/noticias/${item.slug}`,
    image: item.image,
  });
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = news.find((post) => post.slug === slug);
  if (!article) notFound();

  return (
    <article className="px-5 pb-20 pt-36 sm:px-8 lg:pb-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="flex items-center gap-4 text-[.68rem] font-bold uppercase tracking-[.3em] text-gold-light before:h-px before:w-9 before:bg-gold">
            {article.category} · <time dateTime={article.date}>{article.displayDate}</time>
          </p>
          <h1 className="mt-7 font-display text-6xl leading-[1.03] text-ivory sm:text-7xl">
            {article.title}
          </h1>
          <p className="mt-7 font-display text-2xl italic leading-snug text-parchment">
            {article.excerpt}
          </p>
        </Reveal>
        <Reveal delay={70} className="mt-12 overflow-hidden border border-gold/20">
          <Image
            src={article.image}
            alt=""
            width={1400}
            height={850}
            className="max-h-[560px] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={100} className="mx-auto mt-12 max-w-3xl space-y-7 text-lg leading-9 text-parchment">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        {article.gallery?.length ? (
          <Reveal delay={140} className="mt-16">
            <p className="flex items-center gap-4 text-[.68rem] font-bold uppercase tracking-[.3em] text-gold-light before:h-px before:w-9 before:bg-gold">
              Galería
            </p>
            <h2 className="mt-5 font-display text-4xl text-ivory sm:text-5xl">
              Instantes de la campaña
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {article.gallery.map((item, index) => (
                <figure
                  key={`${item.src}-${index}`}
                  className="overflow-hidden border border-gold/15 bg-panel/70 shadow-2xl shadow-black/20"
                >
                  <div
                    className={`relative bg-black/25 ${
                      item.fit === "contain" ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className={item.fit === "contain" ? "object-contain p-3" : "object-cover"}
                    />
                  </div>
                  {item.caption ? (
                    <figcaption className="border-t border-gold/10 px-5 py-4 text-sm leading-6 text-parchment/80">
                      {item.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          </Reveal>
        ) : null}

        <Reveal delay={180} className="mx-auto mt-12 max-w-3xl">
          <ButtonLink href="/noticias" variant="outline">
            Volver a noticias
          </ButtonLink>
        </Reveal>
      </div>
    </article>
  );
}
