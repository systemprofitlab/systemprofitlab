import Link from "next/link";
import { notFound } from "next/navigation";
import { getAffiliateTypeForOfferSlug } from "../../lib/affiliate";
import DashboardShowcase from "../../components/DashboardShowcase";
import FeatureIcon from "../../components/FeatureIcon";
import Navbar from "../../components/Navbar";
import {
  audiencePaths,
  buildTrackedOfferHref,
  getOffer,
  offers,
} from "../../lib/funnel";

type OfferPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return offers.map((offer) => ({ slug: offer.slug }));
}

function getOfferIcon(theme: string) {
  if (theme === "violet") return "agency" as const;
  if (theme === "emerald") return "phone" as const;
  if (theme === "orange") return "rocket" as const;
  return "compass" as const;
}

export default async function OfferPage({ params }: OfferPageProps) {
  const { slug } = await params;
  const offer = getOffer(slug);

  if (!offer) {
    notFound();
  }

  const relatedPaths = audiencePaths.filter(
    (path) =>
      path.primaryOfferSlug === offer.slug || path.secondaryOfferSlug === offer.slug,
  );
  const affiliateType = getAffiliateTypeForOfferSlug(offer.slug);

  return (
    <main className="site-shell pb-20">
      <Navbar />

      <section className="container-shell pt-28 sm:pt-32">
        <div className="hero-shell px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center">
            <div>
              <span className="section-kicker">{offer.category}</span>
              <h1 className="mt-6 max-w-[12ch] text-5xl font-semibold leading-[0.92] sm:text-6xl">
                {offer.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {offer.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {offer.proof.map((item) => (
                  <span className="metric-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="premium-button"
                  href={buildTrackedOfferHref(
                    affiliateType,
                    `offer-page:${offer.slug}`,
                    offer.category,
                  )}
                  rel="noreferrer"
                  target="_blank"
                >
                  {offer.cta}
                </a>
                <Link className="secondary-button" href="/offers">
                  Find My Best HighLevel Path
                </Link>
              </div>
            </div>

            <div className="space-y-5">
              <DashboardShowcase variant="analytics" />
              <div className="panel-surface-strong p-6">
                <FeatureIcon name={getOfferIcon(offer.theme)} />
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  Best for
                </p>
                <h3 className="mt-4 text-2xl font-semibold">{offer.promise}</h3>
                <ul className="mt-6 space-y-4">
                  {offer.idealFor.map((item) => (
                    <li className="flex gap-3 text-sm leading-7 text-slate-300" key={item}>
                      <FeatureIcon className="mt-1 h-10 w-10 rounded-xl" name="checklist" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell mt-10">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="section-shell px-6 py-7 sm:px-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Why this path works
            </p>
            <h3 className="mt-4 text-2xl font-semibold">{offer.decisionTitle}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {offer.decisionSummary}
            </p>
          </article>

          <article className="section-shell px-6 py-7 sm:px-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              What you get
            </p>
            <ul className="mt-5 space-y-4">
              {offer.included.map((item) => (
                <li className="flex gap-3 text-sm leading-7 text-slate-300" key={item}>
                  <FeatureIcon className="mt-1 h-10 w-10 rounded-xl" name="spark" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="section-shell px-6 py-7 sm:px-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Outcome
            </p>
            <ul className="mt-5 space-y-4">
              {offer.outcomes.map((item) => (
                <li className="flex gap-3 text-sm leading-7 text-slate-300" key={item}>
                  <FeatureIcon className="mt-1 h-10 w-10 rounded-xl" name="checklist" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="container-shell mt-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="section-kicker">Best fit</span>
            <h2 className="mt-6 max-w-[12ch] text-3xl font-semibold leading-tight sm:text-4xl">
              Where this offer fits best.
            </h2>
          </div>
          <Link className="footer-link hidden md:block" href="/offers">
            Back to all offers
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {relatedPaths.map((path) => (
            <article className="panel-surface flex min-h-[240px] flex-col p-6" key={path.slug}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                {path.audience}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{path.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{path.summary}</p>
              <Link
                className="mt-auto pt-8 text-sm font-semibold text-cyan-200 hover:text-white"
                href={path.routePath}
              >
                Open use case
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
