import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contacto",
  description:
    "Contacto profesional, novedades y redes oficiales de Javier Imaz Fandos.",
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <section className="px-5 pb-20 pt-36 sm:px-8 lg:pb-28 lg:pt-44">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Contacto"
            title="Abramos una conversación."
            description="Para comunicaciones editoriales, presentaciones, entrevistas o información sobre las obras."
          />
        </Reveal>
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_.82fr]">
          <Reveal>
            <div className="border border-gold/20 bg-panel/50 p-7 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
          <div className="grid gap-6">
            <Reveal delay={80} className="border border-parchment/10 bg-panel/35 p-8">
              <p className="text-[.66rem] font-bold uppercase tracking-[.3em] text-gold-light">
                Redes oficiales
              </p>
              <h2 className="mt-5 font-display text-4xl text-ivory">Instagram</h2>
              <p className="mt-4 leading-8 text-muted">
                Noticias de los libros, imágenes del proceso y próximos anuncios.
              </p>
              <div className="mt-7">
                <ButtonLink href={siteConfig.instagram} variant="outline">
                  {siteConfig.instagramHandle}
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={130} className="border border-gold/20 bg-ink-soft p-8">
              <p className="text-[.66rem] font-bold uppercase tracking-[.3em] text-gold-light">
                Newsletter
              </p>
              <h2 className="mt-5 font-display text-4xl text-ivory">Novedades</h2>
              <p className="mt-4 leading-8 text-muted">
                Suscríbete para recibir información editorial y lanzamientos.
              </p>
              <NewsletterForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
