export type AffiliateLinkType = "trial" | "agency" | "ai" | "starter";

export const AFFILIATE_LINKS: Record<AffiliateLinkType, string> = {
  trial: "https://www.gohighlevel.com/?fp_ref=gubftj",
  agency: "https://www.gohighlevel.com/protrial?fp_ref=gubftj",
  ai: "https://www.gohighlevel.com/ai?fp_ref=gubftj",
  starter: "https://www.gohighlevel.com/highlevel-bootcamp?fp_ref=gubftj",
};

export function getAffiliateHref(type: AffiliateLinkType) {
  return AFFILIATE_LINKS[type];
}

export function getAffiliateTypeForOfferSlug(slug: string): AffiliateLinkType {
  if (slug === "saas-pro-plan") return "agency";
  if (slug === "ai-employee") return "ai";
  if (slug === "bootcamp-trial") return "starter";
  return "trial";
}

export function getAffiliateTypeForAudience(audience: string): AffiliateLinkType {
  if (audience === "Beginners") return "starter";
  if (audience === "Agencies") return "agency";
  if (audience === "Local businesses") return "ai";
  return "trial";
}

export function buildAffiliateRedirectHref(
  type: AffiliateLinkType,
  source: string,
  section?: string,
) {
  const params = new URLSearchParams({
    source,
    section: section || source,
  });

  return `/go/${type}?${params.toString()}`;
}

export function handleAffiliateClick(
  type: AffiliateLinkType,
  source: string,
  section?: string,
) {
  return buildAffiliateRedirectHref(type, source, section);
}
