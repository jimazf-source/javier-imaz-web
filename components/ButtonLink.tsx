import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline" | "quiet";
  external?: boolean;
  download?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "gold",
  external = href.startsWith("http"),
  download = false,
  className = "",
}: ButtonLinkProps) {
  const style = {
    gold: "bg-gold text-ink hover:bg-gold-light shadow-[0_15px_38px_rgba(194,151,74,.18)]",
    outline:
      "border border-gold/45 text-gold-light hover:border-gold hover:bg-gold/10",
    quiet:
      "border border-parchment/15 text-parchment hover:border-gold/45 hover:text-gold-light",
  }[variant];
  const classes = `inline-flex min-h-13 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition duration-200 hover:-translate-y-0.5 ${style} ${className}`;

  if (external || download) {
    return (
      <a
        className={classes}
        href={href}
        target={download ? undefined : "_blank"}
        rel={external ? "noreferrer" : undefined}
        download={download || undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
