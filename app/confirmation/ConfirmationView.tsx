"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const affiliateUrl =
  process.env.NEXT_PUBLIC_AFFILIATE_URL || "https://www.systemprofitlab.com";

const redirectDelayMs = 4000;

type ConfirmationViewProps = {
  email: string;
};

export default function ConfirmationView({ email }: ConfirmationViewProps) {
  const [secondsLeft, setSecondsLeft] = useState(redirectDelayMs / 1000);

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
  }, []);

  return (
    <main className="confirmationPage">
      <section className="confirmationCard">
        <p className="eyebrow">Check your email</p>
        <h1>Email captured.</h1>
        <p className="confirmationLead">
          SystemProfitLab will send an email to <strong>{email}</strong> shortly.
        </p>
        <p className="confirmationSubtext">
          Keep this page open for a moment. We are sending you to the next step in{" "}
          {secondsLeft} second{secondsLeft === 1 ? "" : "s"}.
        </p>
        <div className="confirmationActions">
          <a className="button" href={affiliateUrl}>
            Continue now
          </a>
          <Link className="confirmationLink" href="/">
            Back to homepage
          </Link>
        </div>
      </section>
    </main>
  );
}
