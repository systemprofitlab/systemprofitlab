"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getAffiliateHref,
  type AffiliateLinkType,
} from "../lib/affiliate";

const redirectDelayMs = 4000;

type ConfirmationViewProps = {
  email: string;
  source: string;
  type: AffiliateLinkType;
};

export default function ConfirmationView({
  email,
  source,
  type,
}: ConfirmationViewProps) {
  const [secondsLeft, setSecondsLeft] = useState(redirectDelayMs / 1000);
  const affiliateUrl = getAffiliateHref(type);

  useEffect(() => {
    const countdown = window.setInterval(() => {
      setSecondsLeft((current) => (current > 1 ? current - 1 : 1));
    }, 1000);

    const redirect = window.setTimeout(() => {
      window.location.assign(affiliateUrl);
    }, redirectDelayMs);

    return () => {
      window.clearInterval(countdown);
      window.clearTimeout(redirect);
    };
  }, [affiliateUrl]);

  return (
    <main className="site-shell pb-20">
      <section className="container-shell pt-24 sm:pt-28">
        <div className="hero-shell px-6 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto max-w-4xl">
            <span className="section-kicker">You are in</span>
            <h1 className="mt-6 max-w-[11ch] text-5xl font-semibold leading-[0.92] sm:text-6xl">
              Redirecting you now.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We captured <strong className="text-white">{email}</strong> and are sending you to the best next HighLevel offer for this section in {secondsLeft} second{secondsLeft === 1 ? "" : "s"}.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                "Email captured",
                `Intent matched: ${type}`,
                `Source: ${source}`,
              ].map((item) => (
                <div className="panel-surface px-4 py-5 text-sm leading-7 text-slate-200" key={item}>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="premium-button" href={affiliateUrl}>
                Continue now
              </a>
              <Link className="secondary-button" href="/">
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
