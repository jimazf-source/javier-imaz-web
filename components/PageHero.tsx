import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[65vh] items-end overflow-hidden pt-36">
      <Image src={image} alt="" fill priority className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 -z-0 bg-[linear-gradient(90deg,rgba(6,10,15,.96),rgba(6,10,15,.74)_48%,rgba(6,10,15,.3)),linear-gradient(0deg,#070c12,transparent_52%)]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
        <Reveal className="max-w-4xl">
          <p className="mb-6 flex items-center gap-4 text-[.68rem] font-bold uppercase tracking-[.34em] text-gold-light before:h-px before:w-9 before:bg-gold">
            {eyebrow}
          </p>
          <h1 className="font-display text-6xl leading-[.95] text-ivory sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-7 max-w-2xl font-display text-2xl italic leading-snug text-parchment sm:text-3xl">
              {subtitle}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
