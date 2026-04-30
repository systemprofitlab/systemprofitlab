import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CircleDollarSign,
  Compass,
  FileSearch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { audiences, highLevelFeatures, references } from "@/data/site";
import { offers } from "@/data/offers";
import { OfferCta } from "@/components/ui/OfferCta";
import { LeadCapture } from "@/components/ui/LeadCapture";
import { CommandDashboard, StackComparisonVisual, SystemMapVisual } from "@/components/sections/Visuals";

export function HeroSection() {
  return (
    <section className="shell relative z-10 grid min-h-[calc(100vh-84px)] items-center gap-10 py-10 lg:grid-cols-[0.88fr_1.12fr]">
      <div className="reveal">
        <span className="eyebrow">
          <Sparkles size={14} /> SaaS systems for modern operators
        </span>
        <h1 className="hero-display mt-6">Turn scattered business tools into one automated growth system.</h1>
        <p className="lead mt-7 max-w-2xl">
          SystemProfitLab helps business owners, creators, agencies, and entrepreneurs
          understand serious SaaS tools like GoHighLevel, then choose the right path for
          CRM, funnels, automation, booking, and client follow-up.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/tools" className="button button-primary">
            Explore the system <ArrowRight size={18} />
          </Link>
          <Link href="/how-it-works" className="button button-secondary">
            See how it works
          </Link>
        </div>
        <p className="mt-5 max-w-xl text-xs leading-5 text-[var(--muted)]">
          Affiliate disclosure: SystemProfitLab may earn commissions when visitors click
          certain software links and sign up. This does not increase visitor cost.
        </p>
      </div>
      <CommandDashboard />
    </section>
  );
}

export function WhatWeDoSection() {
  return (
    <section className="section relative z-10 border-y border-black/10 bg-[var(--soft-band)]">
      <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <span className="eyebrow">What SystemProfitLab does</span>
          <h2 className="section-title mt-5">We simplify the software research before you buy the stack.</h2>
        </div>
        <p className="lead">
          Most businesses do not need more random software. They need one connected flow
          that captures leads, organizes conversations, automates repetitive work, books
          appointments, and keeps every customer touchpoint visible.
        </p>
      </div>
    </section>
  );
}

export function ProblemSolutionSection() {
  const pains = [
    "Too many disconnected tools",
    "Leads getting lost between apps",
    "Manual follow-up that depends on memory",
    "No clear funnel or CRM organization",
    "No automated booking path",
    "No central dashboard for conversations",
    "Multiple subscriptions with overlapping jobs",
  ];
  return (
    <section className="section relative z-10">
      <div className="shell grid gap-8 lg:grid-cols-2">
        <div className="panel rounded-[28px] p-6 sm:p-8">
          <span className="eyebrow">
            <AlertTriangle size={14} /> The problem
          </span>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.045em] sm:text-6xl">
            Your tools are not the system. The flow is.
          </h2>
          <div className="mt-7 grid gap-3">
            {pains.map((pain) => (
              <div key={pain} className="flex gap-3 rounded-2xl border border-black/10 bg-[var(--surface-deep)] p-4">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--rose)]" />
                <p className="font-bold leading-6 text-[var(--muted)]">{pain}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-[28px] p-6 sm:p-8">
          <span className="eyebrow">
            <BadgeCheck size={14} /> The solution
          </span>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.045em] sm:text-6xl">
            One operating layer for modern business growth.
          </h2>
          <p className="lead mt-6">
            GoHighLevel is publicly positioned as an all-in-one sales and marketing
            platform. Depending on the business model and setup, it can help bring CRM,
            funnels, websites, messaging, automation, booking, and client management into
            a more organized environment.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {["Capture", "Organize", "Follow up", "Convert"].map((item) => (
              <div key={item} className="rounded-2xl border border-black/10 bg-[var(--surface-deep)] p-4">
                <CheckCircle2 size={19} className="text-[var(--green)]" />
                <p className="mt-3 text-xl font-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section className="section relative z-10 bg-[var(--panel-strong)]">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="eyebrow">How GoHighLevel helps</span>
            <h2 className="section-title mt-5">Capture. Organize. Follow up. Convert.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
            These are benefit-focused summaries based on public HighLevel platform and
            help materials. Features, pricing, and availability can change.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highLevelFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="panel rounded-3xl p-5 transition hover:border-black/25 hover:bg-white/80">
                <Icon size={24} className="text-[var(--cyan)]" />
                <h3 className="mt-5 text-xl font-black">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AudienceSection() {
  return (
    <section className="section relative z-10">
      <div className="shell">
        <span className="eyebrow">Who it is for</span>
        <h2 className="section-title mt-5">Different businesses. Same need for a cleaner operating system.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <article key={audience.title} className="glass rounded-3xl p-5">
                <Icon size={24} className="text-[var(--green)]" />
                <h3 className="mt-5 text-xl font-black">{audience.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{audience.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SystemMapSection() {
  return (
    <section className="section relative z-10 bg-[var(--soft-band)]">
      <div className="shell">
        <span className="eyebrow">System map</span>
        <h2 className="section-title mt-5">Build the engine before you buy more traffic.</h2>
        <div className="mt-10">
          <SystemMapVisual />
        </div>
      </div>
    </section>
  );
}

export function OffersSection() {
  return (
    <section className="section relative z-10" id="offers">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="eyebrow">
              <CircleDollarSign size={14} /> Affiliate offers
            </span>
            <h2 className="section-title mt-5">Recommended paths, organized professionally.</h2>
          </div>
          <Link href="/tools" className="button button-secondary">
            See full stack <ArrowRight size={18} />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {offers.slice(0, 6).map((offer) => (
            <article key={offer.slug} className="glass flex flex-col rounded-3xl p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--cyan)]">{offer.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-black tracking-[-0.03em]">{offer.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{offer.description}</p>
              <p className="mt-4 text-sm font-bold text-[var(--ink)]">Best for: {offer.bestFor}</p>
              <div className="mt-5 flex-1" />
              <OfferCta slug={offer.slug} label="Open bridge page" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComparisonSection() {
  return (
    <section className="section relative z-10 bg-[var(--panel-strong)]">
      <div className="shell">
        <span className="eyebrow">Comparison</span>
        <h2 className="section-title mt-5">Disconnected stack vs. all-in-one system.</h2>
        <p className="lead mt-5 max-w-3xl">
          HighLevel may reduce tool sprawl and centralize many core marketing and
          client-management workflows. It will not be the perfect replacement for every
          specialized tool in every business.
        </p>
        <div className="mt-10">
          <StackComparisonVisual />
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  const points = [
    "We simplify the software research.",
    "We explain tools in plain English.",
    "We connect visitors to relevant SaaS systems.",
    "We focus on practical business systems.",
    "We help users understand what to use before they waste time.",
  ];
  return (
    <section className="section relative z-10">
      <div className="shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="eyebrow">
            <Compass size={14} /> Why SystemProfitLab
          </span>
          <h2 className="section-title mt-5">A guide, not another noisy software pitch.</h2>
        </div>
        <div className="grid gap-4">
          {points.map((point) => (
            <div key={point} className="flex gap-4 rounded-3xl border border-black/10 bg-white/55 p-5">
              <ShieldCheck size={21} className="mt-0.5 shrink-0 text-[var(--green)]" />
              <p className="text-lg font-black tracking-[-0.02em]">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="section relative z-10 bg-[var(--soft-band)]">
      <div className="shell">
        <span className="eyebrow">
          <FileSearch size={14} /> Trust and references
        </span>
        <h2 className="section-title mt-5">Based on public platform information.</h2>
        <p className="lead mt-5 max-w-3xl">
          Information on this site is based on publicly available HighLevel platform and
          affiliate program materials. Commission details and product features may change,
          so users should review official HighLevel pages before signing up.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {references.map((reference) => (
            <a key={reference.href} href={reference.href} className="panel rounded-3xl p-5 transition hover:border-[var(--cyan)]">
              <p className="text-lg font-black">{reference.title}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{reference.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="section relative z-10">
      <div className="shell">
        <div className="glass rounded-[32px] p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <span className="eyebrow">Next move</span>
              <h2 className="mt-5 max-w-4xl text-4xl font-black leading-none tracking-[-0.05em] sm:text-7xl">
                Build the system before you scale the traffic.
              </h2>
              <p className="lead mt-5 max-w-2xl">
                Start with HighLevel, compare the tools, or get the free system map and
                decide from a cleaner model.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <OfferCta slug="highlevel-main" label="Start with HighLevel" />
                <Link href="/tools" className="button button-secondary">
                  Compare the tools
                </Link>
              </div>
            </div>
            <LeadCapture compact />
          </div>
        </div>
      </div>
    </section>
  );
}
