import type { Dictionary } from "@/i18n/dictionaries/en";
import { Section, Container } from "@/components/system";
import { MotionSection } from "../motion-section";
import { AgentOsDashboardMock } from "./agent-os-dashboard-mock";
import { AgentBuildingAgentSection } from "./agent-building-agent-section";
import { ImproveAISection } from "./improve-ai-section";
import { DataPlatformSection } from "./data-platform-section";

export function AgentOSSection({
  content,
}: Readonly<{ content: Dictionary["platform"] }>) {
  return (
    <>
      <Section
        id="control-panel"
        theme="product"
        padded={false}
        className="bg-dot-grid text-center"
      >
        <Container className="py-section-padding">
          <MotionSection>
            <p className="font-mono text-eyebrow uppercase text-slate">
              {content.section.title}
            </p>
            <h2 className="mt-4 text-section font-semibold text-balance text-ink">
              {content.section.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate">
              {content.section.intro}
            </p>
          </MotionSection>

          <MotionSection className="mt-10 md:mt-12" delay={0.08}>
            <AgentOsDashboardMock content={content} />
          </MotionSection>
        </Container>
      </Section>

      <AgentBuildingAgentSection content={content.build} />
      <ImproveAISection content={content.capabilities} />
      <DataPlatformSection content={content.data} />
    </>
  );
}
