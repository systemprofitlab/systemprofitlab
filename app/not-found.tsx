import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4 text-center">
      <div className="max-w-2xl">
        <span className="eyebrow">404</span>
        <h1 className="mt-6 text-6xl font-black tracking-[-0.06em] sm:text-8xl">Route not found.</h1>
        <p className="lead mt-6">
          This page is not part of the current SystemProfitLab operating map.
        </p>
        <Link href="/" className="button button-primary mt-8">
          Back home <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  );
}
