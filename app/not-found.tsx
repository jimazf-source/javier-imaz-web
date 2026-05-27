import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center px-5 pt-20 text-center">
      <div>
        <p className="text-[.7rem] font-bold uppercase tracking-[.38em] text-gold-light">404</p>
        <h1 className="mt-6 font-display text-7xl text-ivory">Página no encontrada</h1>
        <p className="mx-auto mt-6 max-w-md leading-8 text-muted">
          Este rastro no conduce a ningún capítulo del universo literario.
        </p>
        <div className="mt-10">
          <ButtonLink href="/">Volver al inicio</ButtonLink>
        </div>
      </div>
    </section>
  );
}
