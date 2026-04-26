import Link from "next/link";
import { notFound } from "next/navigation";
import {
  buildAffiliateRedirectHref,
  getAffiliateTypeForOfferSlug,
} from "../lib/affiliate";
import FeatureIcon from "./FeatureIcon";
import ProductMockup from "./ProductMockup";
import type { AudiencePath } from "../lib/funnel";
import { getOffer, offers } from "../lib/funnel";
import Navbar from "./Navbar";

type AudienceLandingPageProps = {
  path: AudiencePath;
};

function getAudienceIcon(audience: string) {
  if (audience === "Beginners") return "compass" as const;
  if (audience === "Agencies") return "agency" as const;
  if (audience === "Local businesses") return "phone" as const;
  return "rocket" as const;
}

export default function AudienceLandingPage({ path }: AudienceLandingPageProps) {
  const primaryOffer = getOffer(path.primaryOfferSlug);
  const secondaryOffer = getOffer(path.secondaryOfferSlug);
  const alternateOffers = offers.filter(
    (offer) =>
      offer.slug !== path.primaryOfferSlug && offer.slug !== path.secondaryOfferSlug,
  );

  if (!primaryOffer || !secondaryOffer) {
    notFound();
  }

  const primaryType = getAffiliateTypeForOfferSlug(primaryOffer.slug);
  const secondaryType = getAffiliateTypeForOfferSlug(secondaryOffer.slug);

  return (
    <main className="site-shell pb-20">
      <Navbar />

      <section className="container-shell pt-28 sm:pt-32">
        <div className="hero-shell px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center">
            <div>
              <span className="section-kicker">{path.leadLabel}</span>
              <h1 className="mt-6 max-w-[12ch] text-5xl font-semibold leading-[0.92] sm:text-6xl">
                {path.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {path.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {path.signals.map((signal) => (
                  <span className="metric-chip" key={signal}>
                    {signal}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="premium-button"
                  href={buildAffiliateRedirectHref(
                    primaryType,
                    `${path.slug}-primary`,
                    path.audience,
                  )}
                  rel="noreferrer"
                  target="_blank"
                >
                  {path.primaryCtaLabel}
                </a>
                <a
                  className="secondary-button"
                  href={buildAffiliateRedirectHref(
                    secondaryType,
                    `${path.slug}-secondary`,
                    path.audience,
                  )}
                  rel="noreferrer"
                  target="_blank"
                >
                  {path.secondaryCtaLabel}
                </a>
              </div>
            </div>

            <div className="space-y-5">
              <ProductMockup compact />
              <div className="panel-surface-strong p-6">
                <FeatureIcon name={getAudienceIcon(path.audience)} />
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  Recommended start
                </p>
                <h3 className="mt-4 text-2xl font-semibold">{primaryOffer.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {primaryOffer.promise}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell mt-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="section-shell px-6 py-7 sm:px-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Why this matters
            </p>
            <h2 className="mt-5 max-w-[12ch] text-3xl font-semibold leading-tight sm:text-4xl">
              {path.problemTitle}
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-300">
              {path.problemSummary}
            </p>
          </article>

          <article className="section-shell px-6 py-7 sm:px-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              What you gain
            </p>
            <ul className="mt-5 space-y-4">
              {path.outcomes.map((outcome) => (
                <li className="flex gap-3 text-sm leading-7 text-slate-300" key={outcome}>
                  <FeatureIcon className="mt-1 h-10 w-10 rounded-xl" name="spark" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="container-shell mt-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="panel-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Best first move
            </p>
            <h3 className="mt-4 text-2xl font-semibold">{primaryOffer.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {primaryOffer.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {primaryOffer.proof.map((item) => (
                <span className="metric-chip text-xs" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <a
              className="premium-button mt-8"
              href={buildAffiliateRedirectHref(
                primaryType,
                `${path.slug}-best-first-move`,
                path.audience,
              )}
              rel="noreferrer"
              target="_blank"
            >
              View offer
            </a>
          </article>

          <article className="panel-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              What to avoid
            </p>
            <ul className="mt-5 space-y-4">
              {path.mistakes.map((mistake) => (
                <li className="flex gap-3 text-sm leading-7 text-slate-300" key={mistake}>
                  <FeatureIcon className="mt-1 h-10 w-10 rounded-xl" name="checklist" />
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
            <a
              className="secondary-button mt-8"
              href={buildAffiliateRedirectHref(
                secondaryType,
                `${path.slug}-alternate-path`,
                path.audience,
              )}
              rel="noreferrer"
              target="_blank"
            >
              View alternate path
            </a>
          </article>
        </div>
      </section>

      <section className="container-shell mt-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="section-kicker">Other good fits</span>
            <h2 className="mt-6 max-w-[12ch] text-3xl font-semibold leading-tight sm:text-4xl">
              Additional offers worth comparing.
            </h2>
          </div>
          <Link className="footer-link hidden md:block" href="/offers">
            View all offers
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[secondaryOffer, ...alternateOffers.slice(0, 2)].map((offer) => (
            <article className="panel-surface flex min-h-[250px] flex-col p-6" key={offer.slug}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                {offer.category}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{offer.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{offer.summary}</p>
              <Link
                className="mt-auto pt-8 text-sm font-semibold text-cyan-200 hover:text-white"
                href={`/offer/${offer.slug}`}
              >
                View offer
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
