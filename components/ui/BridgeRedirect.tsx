"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import type { Offer } from "@/data/offers";

export function BridgeRedirect({ offer }: { offer: Offer }) {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const tick = window.setInterval(() => {
      setSeconds((value) => Math.max(value - 1, 0));
    }, 1000);

    const redirect = window.setTimeout(() => {
      window.location.href = offer.affiliateUrl;
    }, 5200);

    return () => {
      window.clearInterval(tick);
      window.clearTimeout(redirect);
    };
  }, [offer.affiliateUrl]);

  return (
    <div className="shell flex min-h-screen items-center py-10">
      <div className="mx-auto grid w-full max-w-3xl gap-6 text-center">
        <span className="eyebrow mx-auto">
          <ShieldCheck size={14} /> Affiliate bridge
        </span>
        <h1 className="text-5xl font-black leading-none tracking-[-0.05em] sm:text-7xl">
          You are heading to {offer.title}.
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-[var(--muted)]">
          SystemProfitLab may earn a commission if you sign up through this link, at no
          extra cost to you. Review the official provider page before purchasing.
        </p>
        <div className="glass mx-auto w-full max-w-xl rounded-2xl p-5">
          <div className="h-2 overflow-hidden rounded-full bg-black/10">
            <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[var(--green)] to-[var(--cyan)]" />
          </div>
          <p className="mt-4 text-sm font-bold text-[var(--muted)]">
            Redirecting in {seconds} second{seconds === 1 ? "" : "s"}.
          </p>
          <a href={offer.affiliateUrl} className="button button-primary mt-5 w-full">
            Continue now <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
