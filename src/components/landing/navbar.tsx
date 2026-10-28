"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useScrolled } from "@/lib/use-scrolled";
import { cn } from "@/lib/utils";
import { BrandLogo } from "./brand-logo";
import { LocaleSwitcher } from "./locale-switcher";

export function Navbar({
  content,
  locale,
}: Readonly<{
  content: Dictionary["nav"];
  locale: Locale;
}>) {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-colors duration-300",
        scrolled || menuOpen
          ? "border-b border-line bg-bone/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6 lg:px-8">
        <Link href={`/${locale}`} className="shrink-0 text-lg">
          <BrandLogo name={content.brand} />
        </Link>

        <nav aria-label={content.brand} className="hidden items-center gap-7 md:flex">
          {content.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <LocaleSwitcher currentLocale={locale} label={content.localeLabel} />
          <Button variant="brandSolid" size="lg" asChild>
            <Link href="#pilot">{content.cta}</Link>
          </Button>
        </div>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label={content.openMenu}>
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] border-line bg-bone">
            <SheetTitle className="sr-only">{content.brand}</SheetTitle>
            <nav className="mt-10 flex flex-col gap-5">
              {content.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-ink"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-6 border-t border-line pt-6">
              <LocaleSwitcher currentLocale={locale} label={content.localeLabel} />
              <Button variant="brandSolid" asChild onClick={() => setMenuOpen(false)}>
                <Link href="#pilot">{content.cta}</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
