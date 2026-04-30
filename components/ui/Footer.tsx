import Link from "next/link";
import { navItems, references } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-10">
      <div className="shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em]">SystemProfitLab</p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
            SystemProfitLab may earn commissions when visitors click certain links and sign
            up for third-party software. This does not increase visitor cost. Product
            details, pricing, and commission terms may change. Always review official
            provider terms before purchasing.
          </p>
        </div>
        <div>
          <p className="text-sm font-black">Pages</p>
          <div className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[var(--ink)]">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="hover:text-[var(--ink)]">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-black">Trust</p>
          <div className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
            <Link href="/affiliate-disclosure" className="hover:text-[var(--ink)]">
              Affiliate Disclosure
            </Link>
            <Link href="/privacy" className="hover:text-[var(--ink)]">
              Privacy Policy
            </Link>
            <a href={references[0].href} className="hover:text-[var(--ink)]">
              Official HighLevel
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
