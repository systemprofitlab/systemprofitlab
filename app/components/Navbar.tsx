"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#solution", label: "Platform" },
  { href: "/#features", label: "Features" },
  { href: "/#paths", label: "Paths" },
  { href: "/offers", label: "Offers" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const update = () => setSolid(window.scrollY > 10);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`container-shell nav-surface flex items-center justify-between px-4 py-3 sm:px-5 ${
          solid ? "shadow-[0_18px_55px_rgba(15,23,42,0.12)]" : ""
        }`}
      >
        <Link className="flex items-center gap-3" href="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
            SP
          </span>
          <p className="text-[15px] font-semibold tracking-tight text-slate-950">
            SystemProfitLab
          </p>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <nav aria-label="Primary navigation" className="flex items-center gap-7">
            {links.map((link) => (
              <Link
                className="text-sm font-semibold text-slate-600 hover:text-slate-950"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link className="premium-button min-h-[44px] px-5 text-xs" href="/get-system">
            Get My Path
          </Link>
        </div>

        <Link className="secondary-button min-h-[44px] px-5 text-xs lg:hidden" href="/get-system">
          Get Path
        </Link>
      </div>
    </header>
  );
}
