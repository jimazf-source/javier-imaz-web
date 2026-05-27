import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Autor",
  description:
    "Biografía y biblioteca de Javier Imaz Fandos, autor de novelas, poesía y ensayo.",
  path: "/autor",
  image: "/assets/autor-javier-imaz.jpg",
});

const trajectory = [
  "Nacido en Zuera (Zaragoza), territorio cuya memoria atraviesa su imaginario narrativo.",
  "Doctor en Medicina y Cirugía, docente y fundador del Instituto Aragonés de Osteopatía.",
  "Autor de tratados académicos y ganador del Premio Internacional de Poesía Hermano Argensola en 1986.",
  "Publica Lágrimas Errantes en 2026 bajo el sello Universo de Letras, Grupo Editorial Planeta.",
];

export default function AuthorPage() {
  return (
    <>
      <PageHero
        eyebrow="El autor"
        title="Javier Imaz Fandos"
        subtitle="Entre el rigor científico y la imaginación literaria."
        image="/assets/gante-atmosfera.jpg"
      />
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[390px_1fr]">
          <Reveal>
            <figure className="border border-gold/20 bg-panel p-4">
              <Image
                src="/assets/autor-javier-imaz.jpg"
                width={737}
                height={900}
                alt="Retrato de Javier Imaz Fandos"
                className="w-full"
              />
              <figcaption className="px-3 pb-3 pt-5 font-display text-2xl text-parchment">
                Javier Imaz Fandos
              </figcaption>
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <SectionHeading eyebrow="Biografía literaria" title="El tiempo como relato" />
              <div className="mt-9 space-y-6 text-lg leading-9 text-parchment">
                <p>
                  Javier Imaz Fandos es autor de <em>Lágrimas Errantes</em>, novela
                  publicada en 2026, y de un catálogo en desarrollo que incluye{" "}
                  <em>El Enigma de la Caja del Tiempo</em>, narrativa de misterio,
                  poesía y ensayo.
                </p>
                <p>
                  Su escritura combina aventura, historia, ciencia, leyenda y reflexión
                  sobre el tiempo. Se caracteriza por mitologías propias, objetos
                  simbólicos y una mirada literaria sobre la memoria, el destino y la
                  pérdida.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100} className="mt-12">
              <h2 className="font-display text-4xl text-ivory">Trayectoria</h2>
              <div className="mt-7 grid gap-4">
                {trajectory.map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[42px_1fr] gap-4 border-b border-parchment/10 pb-5 text-sm leading-7 text-muted"
                  >
                    <span className="font-display text-2xl text-gold">0{index + 1}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-parchment/10 bg-ink-soft px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Universo narrativo"
              title="Mito, ciencia, pérdida y memoria"
              description="De la Caja del Tiempo y Yharty a la consciencia digital, el duelo, los secretos familiares y el amor imposible: cada obra se acerca a aquello que heredamos y no podemos devolver intacto."
            />
          </Reveal>
          <Reveal delay={100}>
            <blockquote className="border border-gold/20 bg-panel/55 p-9 font-display text-4xl italic leading-snug text-ivory">
              “Leer, explorar, pensar y amar: todo exige aprender a habitar el tiempo.”
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 border border-gold/20 bg-panel/40 p-10 text-center md:flex-row md:text-left">
          <div>
            <p className="text-[.68rem] font-bold uppercase tracking-[.34em] text-gold-light">
              Contacto profesional
            </p>
            <h2 className="mt-4 font-display text-4xl text-ivory">
              Presentaciones y proyectos editoriales
            </h2>
            <p className="mt-4 text-muted">
              Contacto directo y novedades a través del canal oficial {siteConfig.instagramHandle}.
            </p>
          </div>
          <ButtonLink href="/contacto">Contactar</ButtonLink>
        </Reveal>
      </section>
    </>
  );
}
