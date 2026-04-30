import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "SystemProfitLab affiliate disclosure.",
};

export default function AffiliateDisclosurePage() {
  return (
    <PageShell>
      <section className="shell relative z-10 max-w-4xl py-16">
        <span className="eyebrow">Disclosure</span>
        <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] sm:text-7xl">Affiliate Disclosure</h1>
        <div className="lead mt-8 grid gap-6">
          <p>
            SystemProfitLab may earn commissions when visitors click certain links and
            sign up for third-party software. This does not increase the cost to the
            visitor.
          </p>
          <p>
            Product details, pricing, and commission terms may change. Always review
            official provider terms before purchasing.
          </p>
          <p>
            SystemProfitLab is an independent entity from HighLevel. It is not an agent or
            employee of HighLevel and has no authority to make binding contracts or
            representations on HighLevel&apos;s behalf. Opinions expressed here are our own.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
