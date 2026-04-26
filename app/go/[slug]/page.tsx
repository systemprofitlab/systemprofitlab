import { notFound } from "next/navigation";
import AffiliateRedirect from "../../components/AffiliateRedirect";
import {
  AFFILIATE_LINKS,
  type AffiliateLinkType,
  getAffiliateTypeForOfferSlug,
} from "../../lib/affiliate";
import { getOffer, offers } from "../../lib/funnel";

type GoPageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    source?: string;
    section?: string;
    audience?: string;
  }>;
};

export function generateStaticParams() {
  return [
    ...Object.keys(AFFILIATE_LINKS).map((slug) => ({ slug })),
    ...offers.map((offer) => ({ slug: offer.slug })),
  ];
}

export default async function GoPage({ params, searchParams }: GoPageProps) {
  const { slug } = await params;
  const query = await searchParams;
  const directType = slug as AffiliateLinkType;
  const isDirectType = directType in AFFILIATE_LINKS;
  const offer = getOffer(slug);

  if (!isDirectType && !offer) {
    notFound();
  }

  const affiliateType = isDirectType
    ? directType
    : getAffiliateTypeForOfferSlug(slug);
  const destination = isDirectType
    ? AFFILIATE_LINKS[affiliateType]
    : offer!.affiliateHref;
  const source = query.source || query.section || query.audience || "site";
  const label = isDirectType
    ? `${affiliateType.charAt(0).toUpperCase()}${affiliateType.slice(1)} path`
    : offer!.title;

  return (
    <AffiliateRedirect
      destination={destination}
      label={label}
      source={source}
    />
  );
}
