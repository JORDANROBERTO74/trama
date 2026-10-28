import Link from "next/link";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function NotFound() {
  const dict = getDictionary(defaultLocale).notFound;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate">
        {dict.brand}
      </span>
      <h1 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
        {dict.title}
      </h1>
      <p className="mt-5 max-w-md text-sm leading-relaxed text-slate">{dict.body}</p>
      <Link
        href={`/${defaultLocale}`}
        className="mt-9 inline-flex items-center rounded-full bg-signal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-signal/90"
      >
        {dict.cta}
      </Link>
    </main>
  );
}
