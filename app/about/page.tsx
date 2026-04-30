import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";

export const metadata: Metadata = {
  title: "About",
  description: "About SystemProfitLab and its approach to SaaS affiliate education.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="shell relative z-10 py-16">
        <span className="eyebrow">About</span>
        <h1 className="display mt-6 max-w-5xl">A software guidance platform for people building real systems.</h1>
        <p className="lead mt-7 max-w-3xl">
          SystemProfitLab exists to help business owners, creators, agencies, and
          entrepreneurs understand the software layer behind modern growth: CRM,
          funnels, automation, booking, conversations, reviews, and client operations.
        </p>
      </section>
      <section className="shell relative z-10 grid gap-4 pb-20 lg:grid-cols-3">
        {[
          "Practical over flashy",
          "Disclosure over hidden incentives",
          "Systems over scattered tactics",
        ].map((value) => (
          <article key={value} className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-black tracking-[-0.03em]">{value}</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              The site is designed to educate and route visitors to relevant tools without
              fake urgency, fake testimonials, or guaranteed income claims.
            </p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
