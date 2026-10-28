import { Container, Section } from "@/components/system";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { TestimonialCard } from "./testimonial-card";
import { MotionSection } from "./motion-section";

export function TestimonialsSection({
  content,
}: Readonly<{ content: Dictionary["demos"] }>) {
  return (
    <Section id="demos" theme="base" padded={false} className="bg-surface">
      <Container className="py-section-padding">
        <MotionSection className="text-center">
          <h2 className="text-section font-semibold text-ink">{content.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate">
            {content.intro}
          </p>
        </MotionSection>

        <div className="mt-10 hidden gap-5 lg:grid lg:grid-cols-4">
          {content.items.map((item, index) => (
            <MotionSection key={item.company} delay={index * 0.08} className="h-full">
              <TestimonialCard {...item} />
            </MotionSection>
          ))}
        </div>

        <div className="mt-10 lg:hidden">
          <ul className="flex snap-x snap-mandatory list-none gap-4 overflow-x-auto pb-4 pl-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {content.items.map((item) => (
              <li key={item.company} className="w-[85%] shrink-0 snap-start sm:w-[62%]">
                <TestimonialCard {...item} />
              </li>
            ))}
          </ul>
          <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-slate/70">
            {content.swipeHint}
          </p>
        </div>
      </Container>
    </Section>
  );
}
