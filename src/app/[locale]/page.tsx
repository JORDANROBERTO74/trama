import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { constructMetadata } from "@/lib/seo";
import { SkipLink } from "@/components/landing/skip-link";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { LogoMarquee } from "@/components/landing/logo-marquee";
import { FeaturesSection } from "@/components/landing/features-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { AgentOSSection } from "@/components/landing/agent-os";
import { TrustSection } from "@/components/landing/trust-section";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale as Locale);
  return constructMetadata({
    locale: locale as Locale,
    title: dict.meta.title,
    description: dict.meta.description,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale as Locale);

  return (
    <div className="flex min-h-screen flex-col">
      <SkipLink />
      <Navbar content={dict.nav} locale={locale as Locale} />
      <main id="main">
        <Hero content={dict.hero} />
        <LogoMarquee content={dict.stack} />
        <FeaturesSection content={dict.features} />
        <TestimonialsSection content={dict.demos} />
        <AgentOSSection content={dict.platform} />
        <TrustSection content={dict.governance} />
        <CTASection content={dict.pilot} />
      </main>
      <Footer content={dict.footer} locale={locale as Locale} />
    </div>
  );
}
