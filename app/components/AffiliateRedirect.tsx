"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type AffiliateRedirectProps = {
  destination: string;
  label: string;
  source: string;
};

export default function AffiliateRedirect({
  destination,
  label,
  source,
}: AffiliateRedirectProps) {
  const [secondsLeft, setSecondsLeft] = useState(3);

  useEffect(() => {
    const countdown = window.setInterval(() => {
      setSecondsLeft((current) => (current > 1 ? current - 1 : 1));
    }, 1000);

    const redirect = window.setTimeout(() => {
      window.location.assign(destination);
    }, 1200);

    return () => {
      window.clearInterval(countdown);
      window.clearTimeout(redirect);
    };
  }, [destination]);

  return (
    <main className="site-shell">
      <section className="container-shell flex min-h-screen items-center py-20">
        <div className="mx-auto w-full max-w-3xl rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-[0_28px_90px_rgba(15,23,42,0.12)] sm:p-10">
          <p className="section-kicker">System router</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            Routing you to the right system.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600">
            We matched this click to <strong>{label}</strong>. The next page
            will open automatically in {secondsLeft} second
            {secondsLeft === 1 ? "" : "s"}.
          </p>

          <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
            <div className="panel-surface px-4 py-5 text-sm font-medium text-slate-700">
              Source: {source}
            </div>
            <div className="panel-surface px-4 py-5 text-sm font-medium text-slate-700">
              Status: redirect ready
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a className="premium-button" href={destination}>
              Continue now
            </a>
            <Link className="secondary-button" href="/">
              Back to site
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
