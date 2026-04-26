import AudienceLandingPage from "../components/AudienceLandingPage";
import { getAudiencePathByRoute } from "../lib/funnel";

export default function ForLocalBusinessesPage() {
  const path = getAudiencePathByRoute("/for-local-businesses");

  if (!path) {
    throw new Error("Missing audience path for /for-local-businesses");
  }

  return <AudienceLandingPage path={path} />;
}
