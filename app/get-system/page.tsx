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
              <span className="section-kicker">Lead system</span>
              <h1 className="mt-6 max-w-[11ch] text-5xl font-semibold leading-[0.92] sm:text-6xl">
                Get the system behind faster follow-up and more booked appointments.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Unlock the starter guide, implementation notes, and the clearest HighLevel path for your business.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  "Capture more leads",
                  "Respond faster",
                  "Book more appointments",
                ].map((item) => (
                  <div className="panel-surface px-4 py-5 text-sm leading-7 text-slate-700" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <LeadForm
              buttonLabel="Unlock the Lead System"
              redirectType="trial"
              source="get-system"
              subtitle="Get the guide and the strongest next move for your business."
              title="Unlock the Lead System"
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
              Start Free Trial
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
