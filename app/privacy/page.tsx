import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SystemProfitLab privacy policy.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="shell relative z-10 max-w-4xl py-16">
        <span className="eyebrow">Privacy</span>
        <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] sm:text-7xl">Privacy Policy</h1>
        <div className="lead mt-8 grid gap-6">
          <p>
            SystemProfitLab may collect information you submit through forms, such as an
            email address, so we can send requested resources or follow up about software
            systems.
          </p>
          <p>
            We may use analytics, affiliate tracking, and third-party links to understand
            site performance and route visitors to software providers. Third-party sites
            have their own privacy practices and terms.
          </p>
          <p>
            SystemProfitLab acts as an independent affiliate and not as HighLevel itself.
            We may earn commissions when visitors sign up through certain links.
          </p>
          <p>
            To request access, correction, or deletion of information you submitted,
            contact the site owner through the contact page.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
