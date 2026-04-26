import AudienceLandingPage from "../components/AudienceLandingPage";
import { getAudiencePathByRoute } from "../lib/funnel";

export default function ForAgenciesPage() {
  const path = getAudiencePathByRoute("/for-agencies");

  if (!path) {
    throw new Error("Missing audience path for /for-agencies");
  }

  return <AudienceLandingPage path={path} />;
}
