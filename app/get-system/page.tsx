import Link from "next/link";
import { buildAffiliateRedirectHref } from "../lib/affiliate";
import LeadForm from "../components/LeadForm";
import Navbar from "../components/Navbar";

export default function GetSystemPage() {
  return (
    <main className="site-shell pb-20">
      <Navbar />

      <section className="container-shell pt-28 sm:pt-32">
        <div className="hero-shell px-6 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div>
              <span className="section-kicker">Growth path</span>
              <h1 className="mt-6 max-w-[11ch] text-5xl font-semibold leading-[0.92] sm:text-6xl">
                Get matched to the system that makes your business easier to run.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Unlock the clearest HighLevel starting path for your stage,
                whether you need AI follow-up, guided setup, agency operations,
                or a simpler way to turn attention into booked opportunities.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  "Capture demand",
                  "Automate follow-up",
                  "Run with ease",
                ].map((item) => (
                  <div className="panel-surface px-4 py-5 text-sm leading-7 text-slate-200" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <LeadForm
              buttonLabel="Find My System"
              redirectType="trial"
              source="get-system"
              subtitle="Get the strongest next move for your business stage."
              title="Find your growth path"
              variant="hero"
            />
          </div>

          <div className="mx-auto mt-8 flex max-w-5xl flex-wrap gap-3">
            <a
              className="secondary-button"
              href={buildAffiliateRedirectHref("trial", "get-system-primary", "get-system")}
              rel="noreferrer"
              target="_blank"
            >
              Start With HighLevel
            </a>
            <Link className="footer-link self-center" href="/">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
