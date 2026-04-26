"use client";

import { FormEvent, useState } from "react";
import type { AffiliateLinkType } from "../lib/affiliate";

type FormState = "idle" | "loading" | "success" | "error";

type LeadFormProps = {
  variant?: "hero" | "inline";
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  minimal?: boolean;
  helperText?: string;
  redirectType?: AffiliateLinkType;
  source?: string;
};

export default function LeadForm({
  variant = "inline",
  title,
  subtitle,
  buttonLabel = "Unlock the Lead System",
  minimal = false,
  helperText,
  redirectType = "trial",
  source = "lead-form",
}: LeadFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, affiliateType: redirectType }),
      });
      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Could not save that email.");
      }

      setStatus("success");
      setMessage(data.message || "You are in. Opening the next step now.");
      window.setTimeout(() => {
        const params = new URLSearchParams({
          email,
          type: redirectType,
          source,
        });
        window.location.assign(`/confirmation?${params.toString()}`);
      }, 650);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  const isHero = variant === "hero";

  return (
    <div className={`panel-surface-strong ${isHero ? "p-4 sm:p-5" : "p-5"}`}>
      {title ? <p className="mb-2 text-sm font-semibold text-slate-950">{title}</p> : null}
      {subtitle ? <p className="mb-4 text-sm leading-6 text-slate-600">{subtitle}</p> : null}

      <form className="space-y-4" onSubmit={submitLead}>
        <div className="space-y-2">
          <label
            className={`${minimal ? "sr-only" : "block text-sm font-medium text-slate-700"}`}
            htmlFor={`email-${variant}`}
          >
            Email address
          </label>
          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
            <input
              autoComplete="email"
              className="h-12 w-full rounded-full border border-slate-300 bg-white px-5 text-base text-slate-950 outline-none ring-0 placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 sm:h-14"
              disabled={status === "loading" || status === "success"}
              id={`email-${variant}`}
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@business.com"
              required
              type="email"
              value={email}
            />
            <button
              className="premium-button h-12 px-6 sm:h-14"
              disabled={status === "loading" || status === "success"}
              type="submit"
            >
              {status === "loading" ? "Sending..." : buttonLabel}
            </button>
          </div>
        </div>

        {message ? (
          <p
            className={`text-sm ${
              status === "error" ? "text-rose-300" : "text-emerald-300"
            }`}
            role="status"
          >
            {message}
          </p>
        ) : (
          <p className="text-sm text-slate-500">
            {helperText ||
              "Get the starter guide, practical growth notes, and the clearest next step for your business."}
          </p>
        )}
      </form>
    </div>
  );
}
