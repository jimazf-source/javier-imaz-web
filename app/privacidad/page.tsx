import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacidad",
  description: "Información sobre contacto y suscripción en la web de Javier Imaz Fandos.",
  path: "/privacidad",
});

export default function PrivacyPage() {
  return (
    <section className="px-5 pb-20 pt-36 sm:px-8 lg:pb-28 lg:pt-44">
      <Reveal className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Información" title="Privacidad y formularios" />
        <div className="mt-12 space-y-9 text-base leading-8 text-parchment">
          <div>
            <h2 className="font-display text-3xl text-ivory">Finalidad</h2>
            <p className="mt-3">
              El formulario de contacto se utilizará para responder comunicaciones
              editoriales o consultas sobre las obras. El formulario de newsletter se
              utilizará únicamente para enviar novedades solicitadas por el lector.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-ivory">Servicios de envío</h2>
            <p className="mt-3">
              Antes de activar los formularios en producción se configurará el proveedor
              de correo y la plataforma de suscripción elegida. Esta página deberá
              completarse con los datos legales y la política definitiva antes de publicar
              formularios activos.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-ivory">Contacto actual</h2>
            <p className="mt-3">
              Mientras se completa la configuración, el canal oficial es{" "}
              <a
                className="text-gold-light underline decoration-gold/40 underline-offset-4"
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
              >
                {siteConfig.instagramHandle}
              </a>
              .
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
