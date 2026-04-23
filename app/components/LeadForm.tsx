"use client";

import { FormEvent, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";

type FormState = "idle" | "loading" | "success" | "error";

type LeadFormProps = {
  variant: "hero" | "inline";
};

export default function LeadForm({ variant }: LeadFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Could not save that email.");
      }

      setStatus("success");
      setMessage(data.message || "You are in. Sending you to the next step now.");
      window.setTimeout(() => {
        const params = new URLSearchParams({ email });
        window.location.assign(`/confirmation?${params.toString()}`);
      }, 700);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  const form = (
    <form className={`leadForm ${variant}`} onSubmit={submitLead}>
      <label htmlFor={`email-${variant}`}>Email address</label>
      <div className="leadFields">
        <Input
          id={`email-${variant}`}
          name="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          disabled={status === "loading" || status === "success"}
          autoComplete="email"
        />
        <Button
          type="submit"
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? "Sending..." : "Get Instant Access"}
        </Button>
      </div>
      {message ? (
        <p className={`formMessage ${status}`} role="status">
          {message}
        </p>
      ) : (
        <p className="formNote">No spam. Just the system and the next step.</p>
      )}
    </form>
  );

  if (variant === "inline") {
    return form;
  }

  return (
    <>
      <div className="heroActions">
        <Button onClick={() => setOpen(true)}>Get Your Free System</Button>
        <a href="#system">See the system</a>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Get the system">
        {form}
      </Modal>
    </>
  );
}
