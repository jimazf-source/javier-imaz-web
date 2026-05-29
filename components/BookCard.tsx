import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-gold/20 bg-panel shadow-[0_28px_75px_rgba(0,0,0,.38)]">
      <Link
        href={book.href}
        className="relative flex min-h-[470px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_32%,rgba(194,151,74,.11),transparent_58%),#0a1118] p-8"
      >
        {book.overlayCover ? (
          <>
            <Image
              src={book.image}
              alt=""
              fill
              className="object-cover opacity-45 transition duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="relative z-10 flex h-[395px] w-full max-w-[275px] flex-col justify-between border border-gold/35 bg-ink/48 p-7 text-center shadow-2xl">
              <p className="text-[.55rem] font-bold uppercase tracking-[.34em] text-gold-light">
                Javier Imaz Fandos
              </p>
              <h2 className="font-display text-4xl leading-tight text-ivory">{book.title}</h2>
              <p className="font-display text-lg italic text-parchment">
                {book.coverText ?? book.genre}
              </p>
            </div>
          </>
        ) : (
          <Image
            src={book.image}
            alt={`${book.imageLabel} para ${book.title}`}
            width={390}
            height={585}
            className="h-auto max-h-[415px] w-auto max-w-full object-contain shadow-[0_20px_48px_rgba(0,0,0,.55)] transition duration-500 group-hover:scale-[1.025]"
          />
        )}
        <span className="absolute bottom-5 right-5 rounded-full border border-gold/35 bg-ink/85 px-3 py-1 text-[.58rem] font-bold uppercase tracking-[.2em] text-gold-light">
          {book.imageLabel}
        </span>
      </Link>
      <div className="flex flex-1 flex-col border-t border-gold/15 p-7">
        <p className="text-[.66rem] font-bold uppercase tracking-[.27em] text-gold-light">
          {book.genre}
        </p>
        <h3 className="mt-4 font-display text-[2.15rem] leading-[1.08] text-ivory">
          {book.title}
        </h3>
        <p className="mt-3 font-display text-xl italic leading-snug text-gold-light">
          {book.subtitle}
        </p>
        <p className="mt-5 flex-1 text-sm leading-7 text-parchment">{book.shortDescription}</p>
        <p className="mt-5 text-[.62rem] font-bold uppercase tracking-[.24em] text-muted">
          {book.status}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink href={book.href} variant="outline">
            Leer más
          </ButtonLink>
          {book.purchaseUrl ? (
            <ButtonLink href={book.purchaseUrl}>Comprar</ButtonLink>
          ) : (
            <span className="inline-flex min-h-13 items-center rounded-full border border-parchment/15 px-6 text-sm text-muted">
              Próximamente
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
