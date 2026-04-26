import Link from "next/link";
import Image from "next/image";
import { buildAffiliateRedirectHref } from "./lib/affiliate";
import LeadForm from "./components/LeadForm";
import Navbar from "./components/Navbar";
import VisualMosaic from "./components/VisualMosaic";
import { audiencePaths, offers } from "./lib/funnel";

const proofMetrics = [
  { value: "4", label: "clear growth paths" },
  { value: "24/7", label: "automation-first focus" },
  { value: "1", label: "recommended operating system" },
  { value: "0", label: "guesswork in the next step" },
];

const capabilities = [
  {
    title: "System selection",
    text: "We study the tools, offers, and workflows that already work, then point business owners to the path that makes the most sense for their stage.",
  },
  {
    title: "AI automation guidance",
    text: "We focus on systems that reduce manual follow-up, answer leads faster, and keep conversations moving when the team is busy or offline.",
  },
  {
    title: "Growth path routing",
    text: "Beginner, agency, creator, and local-business visitors should not all receive the same offer. The page routes each person to a better-fit next step.",
  },
];

const systems = [
  "Lead capture",
  "AI replies",
  "Booking",
  "CRM",
  "Pipeline",
  "Reviews",
  "Payments",
  "Automation",
];

const visualReel = [
  {
    src: "/generated/hero-operator-desktop.webp",
    title: "Lead flow",
    text: "Capture demand and move it into one system.",
  },
  {
    src: "/hero-business-owner.jpg",
    title: "Owner clarity",
    text: "Know which path fits before adding another tool.",
  },
  {
    src: "/generated/section-operator-desktop.webp",
    title: "AI operations",
    text: "Make follow-up faster and easier to manage.",
  },
  {
    src: "/generated/hero-operator-mobile.webp",
    title: "Mobile-ready",
    text: "Keep the system moving from anywhere.",
  },
  {
    src: "/generated/section-operator-mobile.webp",
    title: "Simple handoff",
    text: "Route the next action without confusion.",
  },
];

const selectedPaths = [
  {
    eyebrow: "For business owners",
    title: "Stop letting leads sit unanswered.",
    text: "Use AI follow-up, calendars, reminders, and pipeline visibility so the business works with more ease.",
    href: buildAffiliateRedirectHref("ai", "home-business-owners", "selected-paths"),
    cta: "See AI automation",
  },
  {
    eyebrow: "For new operators",
    title: "Get the system live without setup overwhelm.",
    text: "Start with a guided path that helps you understand the platform, launch faster, and build confidence before scaling.",
    href: buildAffiliateRedirectHref("starter", "home-beginners", "selected-paths"),
    cta: "Start guided path",
  },
  {
    eyebrow: "For agencies",
    title: "Run client growth from one operating system.",
    text: "Use a platform built for pipeline, client delivery, recurring systems, and the back-end operations agencies need.",
    href: buildAffiliateRedirectHref("agency", "home-agencies", "selected-paths"),
    cta: "See agency path",
  },
  {
    eyebrow: "For creators",
    title: "Turn attention into a working follow-up machine.",
    text: "Capture interest, automate nurture, book calls, and move people from content to offer without scattered tools.",
    href: "/for-creators",
    cta: "Explore creator path",
  },
];

const process = [
  {
    step: "01",
    title: "Recognize the working system",
    text: "We look for tools with real operational value: clear workflows, credible adoption, strong use cases, and a path to measurable business leverage.",
  },
  {
    step: "02",
    title: "Match the system to the buyer",
    text: "A creator, local business, beginner, and agency each need a different starting point. We make the next step clear.",
  },
  {
    step: "03",
    title: "Route the visitor to action",
    text: "Every CTA either captures the email or sends the visitor to the correct HighLevel offer with a simple redirect experience.",
  },
];

const standards = [
  "The system must make daily business operations easier.",
  "The offer must connect to a clear growth outcome.",
  "The path must be simple enough for a busy owner to understand.",
  "The recommendation must be backed by visible platform utility, not hype.",
];

const industries = [
  "Local services",
  "Coaches",
  "Creators",
  "Agencies",
  "Consultants",
  "Online offers",
  "Appointment businesses",
  "Small teams",
];

const featuredOffers = offers.filter((offer) =>
  ["ai-employee", "bootcamp-trial", "saas-pro-plan"].includes(offer.slug),
);

const highlights = [
  {
    image: "/generated/hero-operator-desktop.webp",
    title: "A business owner needs fewer moving parts",
    text: "The right system connects forms, conversations, calendars, pipeline, and AI follow-up so the business is easier to operate.",
  },
  {
    image: "/hero-business-owner.jpg",
    title: "A creator needs attention to become a real path",
    text: "Traffic only matters when it becomes captured leads, nurture, booking, and a clear next offer.",
  },
  {
    image: "/generated/section-operator-desktop.webp",
    title: "An agency needs delivery that can scale",
    text: "Client growth needs one operating layer for pipeline, communication, automation, and reporting.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <section className="container-shell grid min-h-[calc(100vh-72px)] gap-12 pb-16 pt-28 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pt-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-semibold leading-[0.94] text-slate-950 sm:text-6xl lg:text-7xl">
              We help businesses choose the systems that make growth easier.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              SystemProfitLab identifies proven automation paths for business
              owners, creators, agencies, and operators who want a simpler way
              to capture leads, follow up with AI, and run the business with
              less friction.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="premium-button"
                href={buildAffiliateRedirectHref("trial", "home-hero-primary", "hero")}
              >
                Start With The System
              </a>
              <Link className="secondary-button" href="#what-we-do">
                See What We Do
              </Link>
            </div>

            <div className="mt-8 max-w-xl">
              <LeadForm
                buttonLabel="Find My Growth Path"
                helperText="Get the clearest HighLevel starting path for your stage."
                minimal
                redirectType="trial"
                source="home-hero-email"
                variant="hero"
              />
            </div>
          </div>

          <VisualMosaic />
        </section>

        <section className="visual-reel-section" aria-label="SystemProfitLab visual proof reel">
          <div className="visual-reel-track">
            {[...visualReel, ...visualReel].map((item, index) => (
              <article className="visual-reel-card" key={`${item.title}-${index}`}>
                <Image src={item.src} alt="" width={112} height={128} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="container-shell grid gap-6 py-7 sm:grid-cols-2 lg:grid-cols-4">
            {proofMetrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-3xl font-semibold tracking-tight text-slate-950">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="container-shell py-20" id="what-we-do">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="section-kicker">What we do</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                We find efficient systems and make the next move obvious.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                We are not here to make software sound complicated. We are here
                to show business owners which system solves the real problem:
                missed leads, slow follow-up, scattered tools, and wasted time.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {capabilities.map((item) => (
                <article className="panel-surface p-6" key={item.title}>
                  <h3 className="text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white" id="system">
          <div className="container-shell">
            <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
              <div>
                <p className="section-kicker section-kicker-dark">The system</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                  HighLevel is the growth operating system we route people toward.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                  The reason is simple: the strongest businesses do not run on
                  disconnected forms, inboxes, calendars, and spreadsheets. They
                  run on connected systems that capture, respond, book, track,
                  and follow up from one place.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="premium-button bg-white text-slate-950 hover:bg-slate-100"
                    href={buildAffiliateRedirectHref("trial", "system-section", "system")}
                  >
                    Start Free Trial
                  </a>
                  <a
                    className="secondary-button border-white/20 bg-white/10 text-white hover:bg-white/15"
                    href={buildAffiliateRedirectHref("ai", "system-ai-section", "system")}
                  >
                    See AI Path
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {systems.map((system) => (
                  <div
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-5 text-sm font-semibold text-slate-100"
                    key={system}
                  >
                    {system}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell py-20" id="paths">
          <div className="max-w-3xl">
            <p className="section-kicker">Selected paths</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Clear offers for the way you actually grow.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              The offer should match the situation. Some people need AI
              response first. Some need guided setup. Some need agency-grade
              operations. The route changes based on the need.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {selectedPaths.map((path) => (
              <article className="panel-surface flex min-h-[300px] flex-col p-6 sm:p-7" key={path.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                  {path.eyebrow}
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight text-slate-950">
                  {path.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {path.text}
                </p>
                <a className="mt-8 text-sm font-semibold text-slate-950 hover:text-teal-700" href={path.href}>
                  {path.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white py-20" id="process">
          <div className="container-shell">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="section-kicker">Our process</p>
                <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                  Simple enough to understand. Strong enough to act on.
                </h2>
              </div>
              <Link className="secondary-button" href="/offers">
                Compare Offers
              </Link>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {process.map((item) => (
                <article className="panel-surface p-6" key={item.step}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {item.step}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-shell py-20" id="highlights">
          <div className="max-w-3xl">
            <p className="section-kicker">Selected highlights</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              The visual story is simple: capture, automate, and operate with less weight.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {highlights.map((item) => (
              <article className="highlight-card" key={item.title}>
                <Image src={item.image} alt="" width={760} height={520} />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold leading-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container-shell py-20" id="industries">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="section-kicker">Who it is for</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Built for people who need the business to work smoother.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                The common thread is not the industry. It is the need for
                better systems: faster response, clearer pipeline, stronger
                follow-up, and less manual chaos.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {industries.map((industry) => (
                <div className="panel-surface px-4 py-5 text-sm font-semibold text-slate-700" key={industry}>
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white" id="proof">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="section-kicker section-kicker-dark">Credibility</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                We recommend systems that can stand up to scrutiny.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                SystemProfitLab is built around a simple standard: do not send
                people into confusing tools just because there is an affiliate
                link. The system has to be useful, understandable, and aligned
                with a real business outcome.
              </p>
            </div>

            <div className="grid gap-4">
              {standards.map((standard) => (
                <div className="dark-panel p-6 text-base font-medium leading-7 text-slate-100" key={standard}>
                  {standard}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-shell py-20" id="offers">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker">Recommended systems</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Start with the HighLevel path that matches the job.
              </h2>
            </div>
            <Link className="secondary-button" href="/offers">
              View All Offers
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredOffers.map((offer) => (
              <article className="panel-surface flex h-full flex-col p-6" key={offer.slug}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                  {offer.category}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                  {offer.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {offer.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {offer.proof.map((proof) => (
                    <span className="metric-chip" key={proof}>
                      {proof}
                    </span>
                  ))}
                </div>
                <Link className="mt-8 text-sm font-semibold text-slate-950 hover:text-teal-700" href={`/offer/${offer.slug}`}>
                  Review this path
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white py-20" id="story">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <p className="section-kicker">Why we exist</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Better tools should make business feel lighter, not harder.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                Business owners are constantly told to buy another tool, join
                another platform, or build another funnel. The problem is that
                most of those recommendations are not tied to how the business
                actually operates.
              </p>
              <p>
                SystemProfitLab exists to recognize the systems that make the
                work easier: tools that help capture demand, automate follow-up,
                organize pipeline, and create a calmer path from attention to
                revenue.
              </p>
            </div>
          </div>
        </section>

        <section className="container-shell py-20" id="contact">
          <div className="cta-band grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <p className="section-kicker">Next level</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Ready to make the business work with more ease?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                Start with the recommended system, or leave your email and get
                routed to the clearest growth path for your stage.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="premium-button"
                  href={buildAffiliateRedirectHref("trial", "home-final-primary", "final-cta")}
                >
                  Start Free Trial
                </a>
                <a
                  className="secondary-button"
                  href={buildAffiliateRedirectHref("ai", "home-final-ai", "final-cta")}
                >
                  Explore AI Automation
                </a>
              </div>
            </div>

            <LeadForm
              buttonLabel="Send Me The Best Path"
              redirectType="starter"
              source="home-final-email"
              subtitle="Tell us where to send the next step. The route stays simple."
              title="Find your path"
              variant="inline"
            />
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white">
          <div className="container-shell flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-base font-semibold text-slate-950">
                SystemProfitLab
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Clear growth paths for businesses that want better systems.
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
