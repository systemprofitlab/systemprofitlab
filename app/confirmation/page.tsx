import ConfirmationView from "./ConfirmationView";
import type { AffiliateLinkType } from "../lib/affiliate";

type ConfirmationPageProps = {
  searchParams: Promise<{
    email?: string;
    type?: AffiliateLinkType;
    source?: string;
  }>;
};

export default async function ConfirmationPage({
  searchParams,
}: ConfirmationPageProps) {
  const params = await searchParams;
  const email = params.email?.trim() || "your inbox";
  const type = params.type || "trial";
  const source = params.source || "lead-form";

  return <ConfirmationView email={email} source={source} type={type} />;
}
