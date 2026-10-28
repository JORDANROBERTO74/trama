import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { BrandLogo } from "./brand-logo";

export function Footer({
  content,
  locale,
}: Readonly<{
  content: Dictionary["footer"];
  locale: Locale;
}>) {
  return (
    <footer className="border-t border-line bg-graphite pb-[env(safe-area-inset-bottom)] text-bone">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-3">
          <Link href={`/${locale}`} className="inline-flex">
            <BrandLogo name={content.brand} light />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-bone/60">{content.tagline}</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          {Object.entries(content.columns).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone/50">
                {title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-bone/75 transition-colors hover:text-bone"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-bone/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-bone/50">{content.copyright}</p>
          <ul className="flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
            {content.legal.map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-bone/50 transition-colors hover:text-bone">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
