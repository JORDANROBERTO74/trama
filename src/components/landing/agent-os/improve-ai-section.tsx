import type { Dictionary, ImproveAiFeatureId } from "@/i18n/dictionaries/en";
import { Section, Container } from "@/components/system";
import { MotionSection } from "../motion-section";
import { InsightsBadge } from "./insights-badge";
import { BuildOptimizeMockPanel } from "./build-optimize-mock-panel";
import { ImproveAiFeatureMock } from "./improve-ai/improve-ai-feature-mock";

const gridClass = "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6";

export function ImproveAISection({
  content,
}: Readonly<{ content: Dictionary["platform"]["capabilities"] }>) {
  const { title, badge, items } = content;

  return (
    <Section theme="base" padded={false} className="bg-surface">
      <Container className="py-12 md:py-16">
        <MotionSection className="text-center">
          <h2 className="text-section font-semibold text-balance text-ink">{title}</h2>
          <InsightsBadge label={badge} />
        </MotionSection>

        <MotionSection className="mt-10 text-left" delay={0.06}>
          <div className={gridClass}>
            {items.map((item) => (
              <BuildOptimizeMockPanel key={item.id} compact>
                <ImproveAiFeatureMock id={item.id as ImproveAiFeatureId} />
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
        </MotionSection>
      </Container>
    </Section>
  );
}
