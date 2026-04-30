import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/ui/PageShell";
import { highLevelFeatures, references } from "@/data/site";
import { OfferCta } from "@/components/ui/OfferCta";
import { CommandDashboard, SystemMapVisual } from "@/components/sections/Visuals";

export const metadata: Metadata = {
  title: "GoHighLevel System",
  description:
    "A plain-English SystemProfitLab overview of GoHighLevel as an all-in-one sales and marketing platform.",
};

export default function GoHighLevelSystemPage() {
  return (
    <PageShell>
      <section className="shell relative z-10 grid gap-10 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div>
          <span className="eyebrow">GoHighLevel system</span>
          <h1 className="display mt-6">The all-in-one layer for lead flow and client operations.</h1>
          <p className="lead mt-7">
            GoHighLevel is publicly described as an all-in-one sales and marketing
            platform for agencies and businesses. SystemProfitLab explains where it fits,
            what it can centralize, and when it may make sense to use it.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <OfferCta slug="highlevel-main" label="Start with HighLevel" />
            <Link href="/tools" className="button button-secondary">
              Compare paths <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <CommandDashboard />
      </section>
      <section className="section relative z-10 bg-[var(--panel-strong)]">
        <div className="shell">
          <span className="eyebrow">Feature map</span>
          <h2 className="section-title mt-5">What it helps organize.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highLevelFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="panel rounded-3xl p-5">
                  <Icon size={24} className="text-[var(--cyan)]" />
                  <h2 className="mt-5 text-xl font-black">{feature.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section relative z-10">
        <div className="shell">
          <span className="eyebrow">Operating model</span>
          <h2 className="section-title mt-5">Traffic is not the system. This is.</h2>
          <div className="mt-10">
            <SystemMapVisual />
          </div>
        </div>
      </section>
      <section className="section relative z-10 bg-[var(--soft-band)]">
        <div className="shell">
          <span className="eyebrow">Official sources</span>
          <h2 className="section-title mt-5">Review the official pages before signing up.</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {references.map((reference) => (
              <a key={reference.href} href={reference.href} className="panel rounded-3xl p-5 hover:border-[var(--cyan)]">
                <h2 className="text-xl font-black">{reference.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{reference.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
