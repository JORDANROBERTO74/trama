import { Container, Section } from "@/components/system";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { FeatureInfoCard } from "./feature-info-card";
import { MotionSection } from "./motion-section";

export function FeaturesSection({
  content,
}: Readonly<{ content: Dictionary["features"] }>) {
  const [largeA, largeB, ...small] = content.items;

  return (
    <Section id="features" theme="base" padded={false} className="bg-bone">
      <Container className="py-section-padding">
        <MotionSection id="service" className="text-center">
          <h2 className="text-section font-semibold text-ink">{content.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate">
            {content.intro}
          </p>
        </MotionSection>

        <MotionSection className="mt-10 md:mt-12">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <FeatureInfoCard
              size="large"
              icon={largeA.icon}
              title={largeA.title}
              description={largeA.description}
            />
            <FeatureInfoCard
              size="large"
              icon={largeB.icon}
              title={largeB.title}
              description={largeB.description}
            />
          </div>
        </MotionSection>

        <MotionSection className="mt-4 md:mt-6" delay={0.08}>
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {small.map((feature) => (
              <FeatureInfoCard
                key={feature.title}
                size="compact"
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </MotionSection>
      </Container>
    </Section>
  );
}
