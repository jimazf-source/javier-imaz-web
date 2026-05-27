import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/data/site";
import "./globals.css";

const cormorant = localFont({
  variable: "--font-cormorant",
  display: "swap",
  src: [
    {
      path: "./fonts/cormorant-garamond-normal-latin.woff2",
      weight: "400 600",
      style: "normal",
    },
    {
      path: "./fonts/cormorant-garamond-italic-latin.woff2",
      weight: "400 600",
      style: "italic",
    },
  ],
});

const manrope = localFont({
  variable: "--font-manrope",
  display: "swap",
  src: [
    {
      path: "./fonts/manrope-normal-latin.woff2",
      weight: "400 700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Javier Imaz Fandos",
    "Lágrimas Errantes",
    "El Enigma de la Caja del Tiempo",
    "novela histórica",
    "misterio literario",
    "fantasía histórica",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/assets/caja-del-tiempo.jpg", alt: "La Caja del Tiempo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/assets/caja-del-tiempo.jpg"],
  },
  icons: { icon: "/assets/logo-zr-gold.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="bg-ink font-body text-ivory antialiased">
        <a
          href="#contenido"
          className="fixed -top-20 left-5 z-[100] rounded-full bg-ivory px-5 py-2 text-sm text-ink focus:top-5"
        >
          Ir al contenido
        </a>
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
