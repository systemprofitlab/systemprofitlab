import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MailCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Confirmation",
  description: "Confirmation page for SystemProfitLab.",
};

export default function ConfirmationPage() {
  return (
    <main className="grid min-h-screen place-items-center px-4 py-12">
      <div className="glass max-w-3xl rounded-[32px] p-6 text-center sm:p-10">
        <MailCheck className="mx-auto text-[var(--cyan)]" size={42} />
        <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] sm:text-7xl">Confirmed.</h1>
        <p className="lead mx-auto mt-6 max-w-2xl">
          Your request is in the system. Start with the map, then choose the software path
          that matches your business model.
        </p>
        <Link href="/tools" className="button button-primary mt-8">
          Open recommended stack <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  );
}
