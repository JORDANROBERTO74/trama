import type { DataPlatformFeatureId } from "@/i18n/dictionaries/en";
import { AgentMemoryFeatureMock } from "./agent-memory-feature-mock";
import { CustomerDataFeatureMock } from "./customer-data-feature-mock";
import { RecommendationsFeatureMock } from "./recommendations-feature-mock";
import { ProactiveEngagementFeatureMock } from "./proactive-engagement-feature-mock";

export function DataPlatformFeatureMock({ id }: { id: DataPlatformFeatureId }) {
  switch (id) {
    case "agent-memory":
      return <AgentMemoryFeatureMock />;
    case "customer-data":
      return <CustomerDataFeatureMock />;
    case "recommendations":
      return <RecommendationsFeatureMock />;
    case "proactive-engagement":
      return <ProactiveEngagementFeatureMock />;
    default:
      return null;
  }
}
