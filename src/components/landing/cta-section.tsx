import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/system";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { MotionSection } from "./motion-section";

export function CTASection({ content }: Readonly<{ content: Dictionary["pilot"] }>) {
  const { headline, body, metrics, ctas } = content;

  return (
    <Section id="pilot" theme="base" padded={false} className="bg-bone">
      <Container className="py-section-padding">
        <MotionSection className="mx-auto max-w-3xl text-center">
          <h2 className="text-section font-semibold text-balance text-ink">{headline}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate">{body}</p>

          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-slate/70">
            {content.targetLabel}
          </p>

          <ul className="mx-auto mt-3 grid max-w-2xl list-none grid-cols-2 gap-x-6 gap-y-3 p-0 text-left sm:grid-cols-4">
            {metrics.map((metric) => (
              <li key={metric.from} className="border-t border-line pt-3">
                <span className="block font-mono text-lg font-medium text-ink">
                  {metric.from}
                </span>
                <span className="mt-1 block text-xs leading-snug text-slate">{metric.to}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center sm:gap-4">
            <Button variant="brandPill" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="#pilot">{ctas.primary}</Link>
            </Button>
            <Button variant="brandOutline" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="#governance">{ctas.secondary}</Link>
            </Button>
          </div>
        </MotionSection>
      </Container>
    </Section>
  );
}
