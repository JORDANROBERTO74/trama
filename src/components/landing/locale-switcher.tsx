"use client";

import Link from "next/link";
import type { Locale } from "@/i18n/config";

export function LocaleSwitcher({
  currentLocale,
  label,
  inverted = false,
}: Readonly<{
  currentLocale: Locale;
  label: string;
  inverted?: boolean;
}>) {
  const base = `inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] ${
    inverted ? "text-bone" : "text-ink"
  }`;

  return (
    <div role="group" aria-label={label} className={base}>
      <Link
        href="/en"
        hrefLang="en"
        aria-current={currentLocale === "en" ? "page" : undefined}
        className={
          currentLocale === "en"
            ? "underline underline-offset-4"
            : "opacity-45 transition-opacity hover:opacity-100"
        }
      >
        EN
      </Link>
      <span aria-hidden="true" className="text-[10px] opacity-30">
        /
      </span>
      <Link
        href="/es"
        hrefLang="es"
        aria-current={currentLocale === "es" ? "page" : undefined}
        className={
          currentLocale === "es"
            ? "underline underline-offset-4"
            : "opacity-45 transition-opacity hover:opacity-100"
        }
      >
        ES
      </Link>
    </div>
  );
}
