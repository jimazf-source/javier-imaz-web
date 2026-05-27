import Image from "next/image";
import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-parchment/10 bg-ink-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_auto_auto]">
        <div className="max-w-sm">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo-zr-gold.png"
              alt=""
              width={62}
              height={48}
              className="h-auto w-16 object-contain"
              style={{ height: "auto" }}
            />
            <span className="font-display text-2xl text-ivory">{siteConfig.brandName}</span>
          </Link>
          <p className="mt-5 text-sm leading-7 text-muted">{siteConfig.tagline}</p>
        </div>
        <div>
          <p className="mb-4 text-[.67rem] font-bold uppercase tracking-[.3em] text-gold-light">
            Navegación
          </p>
          <div className="grid gap-2 text-sm text-muted">
            {navigation.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-gold-light">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-[.67rem] font-bold uppercase tracking-[.3em] text-gold-light">
            Canal oficial
          </p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-parchment transition hover:text-gold-light"
          >
            {siteConfig.instagramHandle}
          </a>
          <Link
            href="/privacidad"
            className="mt-4 block text-sm text-muted transition hover:text-gold-light"
          >
            Privacidad y formularios
          </Link>
        </div>
      </div>
      <div className="border-t border-parchment/10 px-5 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Javier Imaz Fandos. Todos los derechos reservados.
      </div>
    </footer>
  );
}
