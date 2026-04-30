import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { LeadCapture } from "@/components/ui/LeadCapture";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How SystemProfitLab turns software research into a practical business system map.",
};

const steps = [
  {
    title: "Understand the business model",
    body: "A creator, local business, consultant, and agency do not need the same workflow. Start with the motion.",
  },
  {
    title: "Map the revenue path",
    body: "Identify the path from traffic to lead capture, CRM context, automation, booking, follow-up, conversion, and retention.",
  },
  {
    title: "Choose the smallest serious stack",
    body: "Recommend the SaaS path that reduces tool sprawl without pretending one product solves every edge case.",
  },
  {
    title: "Route through transparent bridge pages",
    body: "Every affiliate CTA explains where the visitor is going and discloses the affiliate relationship.",
  },
];

export default function HowItWorksPage() {
  return (
    <PageShell>
      <section className="shell relative z-10 py-16">
        <span className="eyebrow">How it works</span>
        <h1 className="display mt-6 max-w-5xl">Software research becomes a system map.</h1>
        <p className="lead mt-7 max-w-3xl">
          SystemProfitLab turns crowded SaaS options into plain-English operating models
          that help visitors understand what to use and why.
        </p>
      </section>
      <section className="shell relative z-10 grid gap-4 pb-20 lg:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step.title} className="glass rounded-3xl p-5">
            <p className="text-sm font-black text-[var(--green)]">0{index + 1}</p>
            <h2 className="mt-5 text-2xl font-black tracking-[-0.03em]">{step.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.body}</p>
          </article>
        ))}
      </section>
      <section className="shell relative z-10 pb-20">
        <LeadCapture />
      </section>
    </PageShell>
  );
}
