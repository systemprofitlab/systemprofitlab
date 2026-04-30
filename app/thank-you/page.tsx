import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { OfferCta } from "@/components/ui/OfferCta";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your SaaS Growth System Map request was received.",
};

export default async function ThankYouPage(props: PageProps<"/thank-you">) {
  const searchParams = await props.searchParams;
  const email = typeof searchParams.email === "string" ? searchParams.email : "";

  return (
    <main className="grid min-h-screen place-items-center px-4 py-12">
      <div className="glass max-w-3xl rounded-[32px] p-6 text-center sm:p-10">
        <CheckCircle2 className="mx-auto text-[var(--green)]" size={42} />
        <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] sm:text-7xl">Map requested.</h1>
        <p className="lead mx-auto mt-6 max-w-2xl">
          {email ? `We captured ${email}. ` : null}
          Your next step is to compare the recommended stack or continue to the main
          HighLevel bridge page.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <OfferCta slug="highlevel-main" label="Continue to HighLevel" />
          <Link href="/tools" className="button button-secondary">
            See recommended stack <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
