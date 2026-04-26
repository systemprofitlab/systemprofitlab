import AudienceLandingPage from "../components/AudienceLandingPage";
import { getAudiencePathByRoute } from "../lib/funnel";

export default function ForCreatorsPage() {
  const path = getAudiencePathByRoute("/for-creators");

  if (!path) {
    throw new Error("Missing audience path for /for-creators");
  }

  return <AudienceLandingPage path={path} />;
}
