import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { redirectPath } from "@/lib/routes";

type OfferCtaProps = {
  slug: string;
  label?: string;
  variant?: "primary" | "secondary";
};

export function OfferCta({ slug, label = "View offer", variant = "primary" }: OfferCtaProps) {
  return (
    <Link
      href={redirectPath(slug)}
      className={`button ${variant === "primary" ? "button-primary" : "button-secondary"}`}
    >
      {label} <ArrowRight size={18} />
    </Link>
  );
}
