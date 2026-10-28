import { Container, Section } from "@/components/system";
import type { ControlIconId, Dictionary } from "@/i18n/dictionaries/en";
import {
  DatabaseZap,
  FileLock2,
  Globe2,
  KeyRound,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { MotionSection } from "./motion-section";

const controlIconMap: Record<ControlIconId, LucideIcon> = {
  approval: UserCheck,
  audit: FileLock2,
  credentials: KeyRound,
  residency: Globe2,
  training: DatabaseZap,
};

export function TrustSection({
  content,
}: Readonly<{ content: Dictionary["governance"] }>) {
  return (
    <Section id="governance" theme="base" padded={false} className="bg-surface-2">
      <Container className="py-section-padding">
        <MotionSection className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-eyebrow uppercase text-slate">{content.title}</p>
          <h2 className="mt-4 text-section font-semibold text-balance text-ink">
            {content.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate">
            {content.intro}
          </p>
        </MotionSection>

        <MotionSection className="mt-12" delay={0.06}>
          <ul className="grid list-none grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line p-0 sm:grid-cols-2 lg:grid-cols-5">
            {content.controls.map((control) => {
              const Icon = controlIconMap[control.icon];
              return (
                <li key={control.title} className="flex flex-col gap-3 bg-bone p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal/10 text-signal">
                    <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold leading-snug text-ink">
                    {control.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate">{control.description}</p>
                </li>
              );
            })}
          </ul>
        </MotionSection>
      </Container>
    </Section>
  );
}
