"use client";

import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LeadCapture({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      router.push(`/thank-you?email=${encodeURIComponent(String(data.email || ""))}`);
      return;
    }

    setStatus("error");
  }

  return (
    <form onSubmit={onSubmit} className={`glass rounded-2xl p-5 ${compact ? "" : "sm:p-7"}`}>
      <div className="flex items-start gap-3">
        <CheckCircle2 className="mt-1 text-[var(--green)]" size={21} />
        <div>
          <p className="text-lg font-black tracking-[-0.02em]">Free SaaS Growth System Map</p>
          <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
            Get the simple map: traffic, capture, CRM, automation, booking, follow-up,
            conversion, retention.
          </p>
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="min-h-12 rounded-xl border border-black/10 bg-white/70 px-4 text-[var(--ink)] outline-none ring-[var(--cyan)] transition placeholder:text-black/35 focus:ring-2"
        />
        <button className="button button-primary" disabled={status === "loading"}>
          {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : <ArrowRight size={18} />}
          Get map
        </button>
      </div>
      {status === "error" ? (
        <p className="mt-3 text-sm font-bold text-[var(--rose)]">
          The form did not send. Please try again.
        </p>
      ) : null}
      <p className="mt-4 text-xs leading-5 text-[var(--muted)]">
        You can connect this form later to HighLevel, ConvertKit, ActiveCampaign, or any
        email platform. No fake urgency, no income promises.
      </p>
    </form>
  );
}
