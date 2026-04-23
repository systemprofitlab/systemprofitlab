import ConfirmationView from "./ConfirmationView";

type ConfirmationPageProps = {
  searchParams: Promise<{
    email?: string;
  }>;
};

export default async function ConfirmationPage({
  searchParams,
}: ConfirmationPageProps) {
  const params = await searchParams;
  const email = params.email?.trim() || "your inbox";

  return <ConfirmationView email={email} />;
}
