import Link from "next/link";
import { buildAffiliateRedirectHref } from "./lib/affiliate";
import LeadForm from "./components/LeadForm";
import Navbar from "./components/Navbar";
import ProductMockup from "./components/ProductMockup";
import { audiencePaths, offers } from "./lib/funnel";

const metrics = [
  { value: "2.4x", label: "faster lead response" },
  { value: "31%", label: "more booked calls" },
  { value: "14", label: "tools replaced" },
  { value: "24/7", label: "AI coverage" },
];

const trustSignals = [
  "CRM",
  "Funnels",
  "AI follow-up",
  "Calendars",
  "Reviews",
  "Payments",
];

const problems = [
  {
    title: "Lead intent fades fast",
    text: "Every minute between inquiry and response lowers the chance of a booked appointment.",
  },
  {
    title: "Tool sprawl hides revenue",
    text: "Forms, inboxes, calendars, automations, and reviews split across apps make growth harder to operate.",
  },
  {
    title: "The next step is unclear",
    text: "Beginners, agencies, and automation-driven teams need different offers, not the same generic CTA.",
  },
];

const featureBlocks = [
  {
    eyebrow: "Capture",
    title: "Turn every touchpoint into a tracked opportunity",
    text: "Funnels, forms, chat, calls, and inbound messages flow into one contact record so nothing starts outside the system.",
  },
  {
    eyebrow: "Respond",
    title: "Use automation and AI to reply while intent is still high",
    text: "Route leads, answer common questions, trigger reminders, and keep the conversation moving without waiting on manual follow-up.",
  },
  {
    eyebrow: "Convert",
    title: "Move conversations into appointments, pipeline, and revenue",
    text: "Calendars, deal stages, reputation workflows, and payments keep buyers moving through a clean operating rhythm.",
  },
];

const useCases = [
  {
    label: "Beginner path",
    title: "Launch the system with guided setup",
    text: "Best for owners who need momentum, structure, and a low-friction first win.",
    href: buildAffiliateRedirectHref("starter", "beginner-path", "use-case-routing"),
    linkLabel: "Start guided path",
  },
  {
    label: "Agency path",
    title: "Operate client growth and recurring revenue",
    text: "Best for agencies that need delivery, pipeline, white-label options, and client visibility.",
    href: buildAffiliateRedirectHref("agency", "agency-path", "use-case-routing"),
    linkLabel: "Start agency trial",
  },
  {
    label: "AI / automation path",
    title: "Fix slow response with AI follow-up",
    text: "Best for appointment businesses losing leads after hours or between staff handoffs.",
    href: buildAffiliateRedirectHref("ai", "ai-automation-path", "use-case-routing"),
    linkLabel: "See AI employee",
  },
  {
    label: "General trial",
    title: "Explore the full HighLevel platform",
    text: "Best for visitors who already know they want the platform and need the direct route.",
    href: buildAffiliateRedirectHref("trial", "general-trial-path", "use-case-routing"),
    linkLabel: "Start free trial",
  },
];

const offerCards = offers.filter((offer) =>
  ["bootcamp-trial", "saas-pro-plan", "ai-employee", "annual-plan"].includes(
    offer.slug,
  ),
);

export default function Home() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <section className="container-shell grid min-h-[calc(100vh-72px)] gap-12 pb-16 pt-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:pt-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm">
              SaaS affiliate growth hub
            </div>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.96] text-slate-950 sm:text-6xl lg:text-7xl">
              The smarter path to HighLevel for every growth intent.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              SystemProfitLab routes each visitor to the right HighLevel offer:
              guided setup, agency scale, AI automation, or the direct trial.
            </p>

            <div className="mt-8 max-w-xl">
              <LeadForm
                buttonLabel="Get My Best Path"
                helperText="Enter your email and we will unlock the cleanest starting route."
                minimal
                redirectType="trial"
                source="hero-intent-capture"
                variant="hero"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="premium-button"
                href={buildAffiliateRedirectHref("trial", "hero-direct-trial", "hero")}
              >
                Start Free Trial
              </a>
              <Link className="secondary-button" href="#paths">
                Compare Paths
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {trustSignals.map((signal) => (
                <span className="metric-chip" key={signal}>
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <ProductMockup />
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="container-shell grid gap-6 py-7 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-semibold tracking-tight text-slate-950">
                  {item.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="container-shell py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="section-kicker">Revenue leak</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                The problem is not traffic. It is the gap after interest.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                A premium funnel does more than send everyone to one signup
                page. It reads intent, captures demand, and moves people into
                the offer most likely to convert.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {problems.map((problem) => (
                <article className="panel-surface p-6" key={problem.title}>
                  <h3 className="text-xl font-semibold text-slate-950">
                    {problem.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {problem.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white" id="solution">
          <div className="container-shell">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="section-kicker section-kicker-dark">SystemProfitLab</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                  One conversion layer for the full HighLevel buying journey.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                  Every CTA either captures an email or routes to a tracked
                  affiliate destination. No dead buttons, no unclear next step,
                  no generic path for high-intent buyers.
                </p>
              </div>

              <div className="grid gap-4">
                {featureBlocks.map((feature) => (
                  <article className="dark-panel p-6" key={feature.title}>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                      {feature.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {feature.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell py-20" id="features">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker">Platform value</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Premium positioning backed by real software outcomes.
              </h2>
            </div>
            <a
              className="premium-button"
              href={buildAffiliateRedirectHref("ai", "features-primary", "features")}
            >
              See AI Automation
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Unified CRM and pipeline",
              "AI conversations and instant replies",
              "Funnels, forms, and lead capture",
              "Calendars, reminders, and booking",
              "Reputation and review workflows",
              "Client-ready agency operations",
            ].map((item) => (
              <div className="panel-surface p-6" key={item}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                  {item.slice(0, 2)}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {item}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Built to reduce handoffs, improve response speed, and keep
                  buyer intent moving toward the next conversion.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-20" id="paths">
          <div className="container-shell">
            <div className="max-w-3xl">
              <p className="section-kicker">Intent routing</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Four paths. One clear next step for each buyer.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                The funnel changes the destination based on what the visitor is
                trying to solve, which makes every click more relevant.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-4">
              {useCases.map((path) => (
                <article className="panel-surface flex min-h-[310px] flex-col p-6" key={path.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                    {path.label}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                    {path.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {path.text}
                  </p>
                  <a className="mt-8 text-sm font-semibold text-slate-950 hover:text-teal-700" href={path.href}>
                    {path.linkLabel}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-shell py-20" id="offers">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker">Offer mapping</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Affiliate offers matched to urgency, maturity, and business model.
              </h2>
            </div>
            <Link className="secondary-button" href="/offers">
              View All Offers
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {offerCards.map((offer) => (
              <article className="panel-surface flex h-full flex-col p-6" key={offer.slug}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {offer.category}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                  {offer.shortTitle}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {offer.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {offer.proof.slice(0, 2).map((proof) => (
                    <span className="metric-chip" key={proof}>
                      {proof}
                    </span>
                  ))}
                </div>
                <Link className="mt-8 text-sm font-semibold text-slate-950 hover:text-teal-700" href={`/offer/${offer.slug}`}>
                  Review offer
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <p className="section-kicker section-kicker-dark">Email capture</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Capture the lead before sending them deeper into the funnel.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                The email capture path gives warm visitors a helpful next step
                while preserving the ability to route them into the correct
                affiliate offer after submission.
              </p>
            </div>
            <LeadForm
              buttonLabel="Unlock My Funnel Path"
              redirectType="starter"
              source="bottom-email-capture"
              subtitle="Get the route recommendation and continue to the best offer for your current stage."
              title="Find your starting path"
              variant="inline"
            />
          </div>
        </section>

        <section className="container-shell py-20">
          <div className="cta-band grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="section-kicker">Ready path</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Start with the offer most likely to turn intent into revenue.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="premium-button"
                href={buildAffiliateRedirectHref("trial", "final-primary", "final-cta")}
              >
                Start Free Trial
              </a>
              <a
                className="secondary-button"
                href={buildAffiliateRedirectHref("agency", "final-agency", "final-cta")}
              >
                Agency Trial
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white">
          <div className="container-shell flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-base font-semibold text-slate-950">
                SystemProfitLab
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Intent-based SaaS affiliate routing for HighLevel buyers.
              </p>
            </div>
            <div className="flex flex-wrap gap-5">
              {audiencePaths.map((path) => (
                <Link className="footer-link" href={path.routePath} key={path.slug}>
                  {path.audience}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
