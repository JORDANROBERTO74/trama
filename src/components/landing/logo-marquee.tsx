import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/system";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { LogoMarqueeTrack } from "./logo-marquee-track";

export function LogoMarquee({ content }: Readonly<{ content: Dictionary["stack"] }>) {
  const repeated = [...content.items, ...content.items, ...content.items, ...content.items];

  return (
    <Section theme="base" padded={false} className="border-y border-line bg-bone text-center">
      <Container className="py-14 md:py-16">
        <h2 className="text-section font-semibold text-ink">{content.title}</h2>
        <div className="mt-5 flex justify-center">
          <Button variant="brandOutline" size="sm" asChild>
            <Link href="#features">{content.cta}</Link>
          </Button>
        </div>
        <LogoMarqueeTrack items={repeated} label={content.label} />
      </Container>
    </Section>
  );
}
