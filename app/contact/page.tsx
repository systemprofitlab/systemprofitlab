import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { LeadCapture } from "@/components/ui/LeadCapture";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SystemProfitLab or request the free SaaS Growth System Map.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="shell relative z-10 grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="eyebrow">Contact</span>
          <h1 className="display mt-6">Get the system map.</h1>
          <p className="lead mt-7">
            Enter your email and start with the practical model. The form is intentionally
            simple so it can be connected later to HighLevel, ConvertKit,
            ActiveCampaign, or another email platform.
          </p>
        </div>
        <LeadCapture />
      </section>
    </PageShell>
  );
}
