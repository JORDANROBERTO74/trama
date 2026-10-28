import type { DataPlatformFeatureId, Dictionary } from "@/i18n/dictionaries/en";
import { Section, Container } from "@/components/system";
import { MotionSection } from "../motion-section";
import { DataPlatformBadge } from "./data-platform-badge";
import { BuildOptimizeMockPanel } from "./build-optimize-mock-panel";
import { DataPlatformFeatureMock } from "./data-platform/data-platform-feature-mock";

const gridClass = "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6";

export function DataPlatformSection({
  content,
}: Readonly<{ content: Dictionary["platform"]["data"] }>) {
  const { title, badge, items, bullets } = content;

  return (
    <Section theme="base" padded={false} className="bg-bone">
      <Container className="pb-section-padding pt-12 md:pt-16">
        <MotionSection className="text-center">
          <h2 className="text-section font-semibold text-balance text-ink">{title}</h2>
          <DataPlatformBadge label={badge} />
        </MotionSection>

        <MotionSection className="mt-10 text-left" delay={0.06}>
          <div className={gridClass}>
            {items.map((item) => (
              <BuildOptimizeMockPanel key={item.id} compact>
                <DataPlatformFeatureMock id={item.id as DataPlatformFeatureId} />
              </BuildOptimizeMockPanel>
            ))}
          </div>

          <div className={`mt-6 ${gridClass}`}>
            {items.map((item) => (
              <div key={item.id}>
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-8 border-t border-line pt-10 md:grid-cols-3">
            {bullets.map((bullet) => (
              <div key={bullet.title}>
                <h3 className="text-base font-semibold text-ink">{bullet.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{bullet.body}</p>
              </div>
            ))}
          </div>
        </MotionSection>
      </Container>
    </Section>
  );
}
