import type { ImproveAiFeatureId } from "@/i18n/dictionaries/en";
import { ExplorerFeatureMock } from "./explorer-feature-mock";
import { MonitorsFeatureMock } from "./monitors-feature-mock";
import { ExperimentsFeatureMock } from "./experiments-feature-mock";
import { ObservabilityFeatureMock } from "./observability-feature-mock";

export function ImproveAiFeatureMock({ id }: { id: ImproveAiFeatureId }) {
  switch (id) {
    case "explorer":
      return <ExplorerFeatureMock />;
    case "monitors":
      return <MonitorsFeatureMock />;
    case "experiments":
      return <ExperimentsFeatureMock />;
    case "observability":
      return <ObservabilityFeatureMock />;
    default:
      return null;
  }
}
