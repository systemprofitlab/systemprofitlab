import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { references } from "@/data/site";
import { LeadCapture } from "@/components/ui/LeadCapture";

export const metadata: Metadata = {
  title: "Resources",
  description: "Official public references and system resources used by SystemProfitLab.",
};

export default function ResourcesPage() {
  return (
    <PageShell>
      <section className="shell relative z-10 py-16">
        <span className="eyebrow">Resources</span>
        <h1 className="display mt-6 max-w-5xl">Official references before opinions.</h1>
        <p className="lead mt-7 max-w-3xl">
          No fake testimonials. No unsupported claims. Start with public platform pages,
          help documentation, and affiliate policies.
        </p>
      </section>
      <section className="shell relative z-10 grid gap-4 pb-20 lg:grid-cols-3">
        {references.map((reference) => (
          <a key={reference.href} href={reference.href} className="panel rounded-3xl p-5 hover:border-[var(--cyan)]">
            <h2 className="text-xl font-black">{reference.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{reference.description}</p>
          </a>
        ))}
      </section>
      <section className="shell relative z-10 pb-20">
        <LeadCapture />
      </section>
    </PageShell>
  );
}
