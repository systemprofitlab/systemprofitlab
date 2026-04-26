import AudienceLandingPage from "../components/AudienceLandingPage";
import { getAudiencePathByRoute } from "../lib/funnel";

export default function ForBeginnersPage() {
  const path = getAudiencePathByRoute("/for-beginners");

  if (!path) {
    throw new Error("Missing audience path for /for-beginners");
  }

  return <AudienceLandingPage path={path} />;
}
