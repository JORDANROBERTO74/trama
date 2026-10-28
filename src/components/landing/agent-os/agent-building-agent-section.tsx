import type { Dictionary } from "@/i18n/dictionaries/en";
import { Section, Container } from "@/components/system";
import { MotionSection } from "../motion-section";
import { GhostwriterBadge } from "./ghostwriter-badge";
import { GhostwriterBuildMock } from "./ghostwriter-build-mock";
import { GhostwriterOptimizeMock } from "./ghostwriter-optimize-mock";
import { BuildOptimizeMockPanel } from "./build-optimize-mock-panel";

export function AgentBuildingAgentSection({
  content,
}: Readonly<{ content: Dictionary["platform"]["build"] }>) {
  const { title, badge, build, optimize } = content;

  return (
    <Section theme="base" padded={false} className="bg-bone">
      <Container className="pb-12 pt-section-padding md:pb-16">
        <MotionSection className="text-center">
          <h2 className="text-section font-semibold text-balance text-ink">{title}</h2>
          <GhostwriterBadge label={badge} />
        </MotionSection>

        <MotionSection className="mt-10 text-left" delay={0.06}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <BuildOptimizeMockPanel>
              <GhostwriterBuildMock content={build} />
            </BuildOptimizeMockPanel>
            <BuildOptimizeMockPanel>
              <GhostwriterOptimizeMock content={optimize} />
            </BuildOptimizeMockPanel>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <h3 className="text-lg font-semibold text-ink">{build.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{build.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink">{optimize.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{optimize.description}</p>
            </div>
          </div>
        </MotionSection>
      </Container>
    </Section>
  );
}
