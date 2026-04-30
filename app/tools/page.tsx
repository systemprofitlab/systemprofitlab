import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { OfferCta } from "@/components/ui/OfferCta";
import { offers } from "@/data/offers";
import { StackComparisonVisual } from "@/components/sections/Visuals";

export const metadata: Metadata = {
  title: "Recommended Stack",
  description:
    "Explore the SystemProfitLab recommended SaaS stack and bridge pages for available affiliate offers.",
};

export default function ToolsPage() {
  return (
    <PageShell>
      <section className="shell relative z-10 py-16">
        <span className="eyebrow">Recommended stack</span>
        <h1 className="display mt-6 max-w-5xl">The tools are only useful when they connect into a system.</h1>
        <p className="lead mt-7 max-w-3xl">
          These are the affiliate paths currently available in the project. Each CTA goes
          through a transparent bridge page first.
        </p>
      </section>
      <section className="shell relative z-10 pb-20">
        <div className="grid gap-4 lg:grid-cols-3">
          {offers.map((offer) => (
            <article key={offer.slug} className="glass flex flex-col rounded-3xl p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--cyan)]">
                {offer.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-black tracking-[-0.03em]">{offer.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{offer.description}</p>
              <div className="mt-4 grid gap-3 text-sm leading-6">
                <p>
                  <strong>Best for:</strong> <span className="text-[var(--muted)]">{offer.bestFor}</span>
                </p>
                <p>
                  <strong>Benefit:</strong> <span className="text-[var(--muted)]">{offer.benefit}</span>
                </p>
              </div>
              <div className="mt-6 flex-1" />
              <OfferCta slug={offer.slug} label="Open offer bridge" />
            </article>
          ))}
        </div>
      </section>
      <section className="section relative z-10 bg-[var(--panel-strong)]">
        <div className="shell">
          <span className="eyebrow">Stack logic</span>
          <h2 className="section-title mt-5">Reduce sprawl before adding speed.</h2>
          <div className="mt-10">
            <StackComparisonVisual />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
