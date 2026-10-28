import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Display, Eyebrow, Section } from "@/components/system";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { HeroBackground } from "./hero-background";
import { HeroChatDemo } from "./hero-chat-demo";

export function Hero({ content }: Readonly<{ content: Dictionary["hero"] }>) {
  return (
    <Section
      as="header"
      theme="base"
      padded={false}
      className="isolate flex min-h-[92svh] w-full flex-col justify-center overflow-hidden pb-16 pt-28 md:min-h-[720px] md:pb-20 md:pt-32"
    >
      <HeroBackground />
      <Container className="relative z-10">
        <div className="flex flex-col items-start text-left lg:max-w-[56%]">
          <Eyebrow className="font-mono text-slate">{content.eyebrow}</Eyebrow>
          <Display className="mt-5 max-w-3xl font-semibold text-balance">
            {content.headline.line1}
            <br />
            {content.headline.line2}
            <br />
            <span className="text-slate">{content.headline.line3}</span>
          </Display>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate">
            {content.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="brandPill" size="lg" asChild>
              <Link href="#control-panel">{content.ctas.primary}</Link>
            </Button>
            <Button variant="brandOutline" size="lg" asChild>
              <Link href="#features">{content.ctas.secondary}</Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-12 w-full max-w-[380px] lg:absolute lg:bottom-0 lg:right-0 lg:mx-0 lg:mt-0">
          <HeroChatDemo content={content.console} />
        </div>
      </Container>
    </Section>
  );
}
