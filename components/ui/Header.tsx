import Link from "next/link";
import { ArrowRight, Layers3 } from "lucide-react";
import { navItems } from "@/data/site";

export function Header() {
  return (
    <header className="shell relative z-20 flex items-center justify-between py-5">
      <Link href="/" className="flex items-center gap-3" aria-label="SystemProfitLab home">
        <span className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white/70">
          <Layers3 size={20} className="text-[var(--green)]" />
        </span>
        <span className="text-sm font-black uppercase tracking-[0.18em]">SystemProfitLab</span>
      </Link>
      <nav className="hidden items-center gap-7 text-sm font-bold text-[var(--muted)] lg:flex">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="transition hover:text-[var(--ink)]">
            {item.label}
          </Link>
        ))}
      </nav>
      <Link href="/tools" className="button button-secondary">
        Explore <ArrowRight size={17} />
      </Link>
    </header>
  );
}
