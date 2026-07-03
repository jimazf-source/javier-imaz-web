"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        scrolled || open
          ? "border-parchment/10 bg-ink/92 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex min-w-0 items-center gap-2"
          aria-label="Zami Reivaj, inicio"
        >
          <Image
            src="/assets/logo-zr-gold.png"
            alt=""
            width={58}
            height={46}
            className="h-auto w-12 object-contain drop-shadow-[0_4px_12px_rgba(194,151,74,.2)] sm:w-14"
            style={{ height: "auto" }}
          />
          <span className="truncate font-display text-[1.18rem] tracking-[.025em] text-ivory sm:text-[1.42rem]">
            Zami <span className="text-gold-light">Reivaj</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`relative py-2 text-[0.82rem] font-medium transition ${
                  active ? "text-gold-light" : "text-parchment hover:text-ivory"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-gold" />
                )}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="relative z-10 flex h-12 w-12 flex-col items-center justify-center gap-2 text-ivory xl:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span
            className={`h-px w-7 bg-current transition ${open ? "translate-y-[9px] rotate-45" : ""}`}
          />
          <span className={`h-px w-7 bg-current transition ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-7 bg-current transition ${open ? "-translate-y-[9px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`fixed right-0 top-20 z-40 flex h-[calc(100dvh-5rem)] w-[82vw] max-w-[21rem] flex-col items-stretch gap-2 overflow-y-auto border-l border-gold/20 bg-[#070c12] px-6 py-7 text-left shadow-2xl shadow-black/60 transition duration-300 xl:hidden ${
          open ? "visible translate-x-0 opacity-100" : "invisible translate-x-full opacity-0"
        }`}
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={`block w-full border-b border-parchment/10 py-3 text-left text-[0.98rem] font-semibold tracking-wide transition hover:text-gold-light ${
              pathname === item.href ? "text-gold-light" : "text-ivory"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
