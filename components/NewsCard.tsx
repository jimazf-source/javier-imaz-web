import Image from "next/image";
import Link from "next/link";
import type { NewsPost } from "@/data/site";

export function NewsCard({ item }: { item: NewsPost }) {
  return (
    <article className="group overflow-hidden border border-parchment/10 bg-panel/55">
      <Link href={`/noticias/${item.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            fill
            src={item.image}
            alt=""
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center gap-3 text-[.65rem] font-bold uppercase tracking-[.22em] text-gold-light">
            <span>{item.category}</span>
            <span className="h-px w-5 bg-gold/60" />
            <time dateTime={item.date}>{item.displayDate}</time>
          </div>
          <h3 className="font-display text-3xl leading-tight text-ivory">{item.title}</h3>
          <p className="mt-4 text-sm leading-7 text-muted">{item.excerpt}</p>
          <p className="mt-6 text-sm font-semibold text-gold-light">Leer noticia →</p>
        </div>
      </Link>
    </article>
  );
}
