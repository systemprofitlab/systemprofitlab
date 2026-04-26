import Link from "next/link";
import Navbar from "../components/Navbar";
import ProductMockup from "../components/ProductMockup";
import { buildTrackedOfferHref, offers } from "../lib/funnel";

export default function OffersPage() {
  return (
    <main className="site-shell pb-20">
      <Navbar />

      <section className="container-shell pt-28 sm:pt-32">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">Recommended systems</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.96] text-slate-950 sm:text-6xl">
              Choose the HighLevel path that matches the way you grow.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Compare the systems we route visitors toward: AI response,
              guided setup, agency operations, sprint momentum, creator
              launches, and direct trial access.
            </p>
          </div>
          <ProductMockup compact />
        </div>
      </section>

      <section className="container-shell mt-12">
        <div className="grid gap-5 lg:grid-cols-3">
          {offers.map((offer) => (
            <article className="panel-surface flex h-full flex-col p-6" key={offer.slug}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                {offer.category}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950">
                {offer.title}
              </h2>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                {offer.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {offer.proof.map((item) => (
                  <span className="metric-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  className="premium-button min-h-[48px] px-5"
                  href={buildTrackedOfferHref(offer.slug, `offers-page:${offer.slug}`)}
                >
                  {offer.cta}
                </a>
                <Link className="secondary-button min-h-[48px] px-5" href={`/offer/${offer.slug}`}>
                  Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
