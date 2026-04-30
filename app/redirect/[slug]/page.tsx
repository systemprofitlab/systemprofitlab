import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { offers, getOffer } from "@/data/offers";
import { BridgeRedirect } from "@/components/ui/BridgeRedirect";

export function generateStaticParams() {
  return offers.map((offer) => ({ slug: offer.slug }));
}

export async function generateMetadata(props: PageProps<"/redirect/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const offer = getOffer(slug);

  if (!offer) {
    return {
      title: "Offer not found",
    };
  }

  return {
    title: `${offer.title} Bridge`,
    description: `Transparent affiliate bridge page for ${offer.title}.`,
  };
}

export default async function RedirectPage(props: PageProps<"/redirect/[slug]">) {
  const { slug } = await props.params;
  const offer = getOffer(slug);

  if (!offer) {
    notFound();
  }

  return <BridgeRedirect offer={offer} />;
}
