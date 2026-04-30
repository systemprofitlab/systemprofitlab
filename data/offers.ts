export type Offer = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  bestFor: string;
  benefit: string;
  category: "platform" | "training" | "ai" | "launch";
  affiliateUrl: string;
  source: "env" | "legacy-code";
};

const envHighLevelUrl =
  process.env.NEXT_PUBLIC_AFFILIATE_URL ||
  "https://www.gohighlevel.com/pro-trial?fp_ref=9pi088";

export const offers: Offer[] = [
  {
    slug: "highlevel-main",
    title: "HighLevel Main Platform",
    eyebrow: "Core operating system",
    description:
      "Explore HighLevel as an all-in-one sales and marketing platform for CRM, funnels, automation, booking, messaging, and client management.",
    bestFor: "Business owners, agencies, service providers, creators, and operators comparing core software stacks.",
    benefit:
      "Centralize many growth workflows before paying for more disconnected point tools.",
    category: "platform",
    affiliateUrl: envHighLevelUrl,
    source: "env",
  },
  {
    slug: "highlevel-annual",
    title: "HighLevel Annual Offer",
    eyebrow: "Direct platform path",
    description:
      "A direct HighLevel route found in the original project for visitors already evaluating the platform.",
    bestFor: "Visitors who already understand the platform and want the official sign-up path.",
    benefit: "Move from research into the official HighLevel buying flow.",
    category: "platform",
    affiliateUrl: "https://www.gohighlevel.com/?fp_ref=gubftj",
    source: "legacy-code",
  },
  {
    slug: "highlevel-pro",
    title: "HighLevel SaaS Pro Trial",
    eyebrow: "Agency and SaaS path",
    description:
      "A HighLevel Pro trial route found in the original project for agencies and SaaS-style operators.",
    bestFor: "Agencies, SaaS resellers, and operators evaluating advanced platform capabilities.",
    benefit: "Start from a path oriented around agency and SaaS use cases.",
    category: "platform",
    affiliateUrl: "https://www.gohighlevel.com/protrial?fp_ref=gubftj",
    source: "legacy-code",
  },
  {
    slug: "ai-employee",
    title: "HighLevel AI Employee",
    eyebrow: "AI tools",
    description:
      "Explore the HighLevel AI route found in the original project, useful for visitors researching AI-assisted conversations, content, reviews, and operations.",
    bestFor: "Teams that want AI inside the same environment as their CRM, workflows, and conversations.",
    benefit: "Evaluate AI capabilities as part of the operating system instead of a separate tool island.",
    category: "ai",
    affiliateUrl: "https://www.gohighlevel.com/ai?fp_ref=gubftj",
    source: "legacy-code",
  },
  {
    slug: "bootcamp",
    title: "HighLevel Bootcamp",
    eyebrow: "Education path",
    description:
      "A training-oriented HighLevel route found in the original project for visitors who want a guided starting point.",
    bestFor: "Beginners and implementers who want education before building a full system.",
    benefit: "Learn the platform with a more structured entry point.",
    category: "training",
    affiliateUrl: "https://www.gohighlevel.com/highlevel-bootcamp?fp_ref=gubftj",
    source: "legacy-code",
  },
  {
    slug: "five-day-challenge",
    title: "HighLevel 5-Day Challenge",
    eyebrow: "Short sprint",
    description:
      "A challenge-style HighLevel route found in the original project for people who prefer a focused sprint.",
    bestFor: "Action-oriented users who want a compact path into the platform.",
    benefit: "Use a short learning container to understand the opportunity and next build steps.",
    category: "training",
    affiliateUrl: "https://www.gohighlevel.com/5dc?fp_ref=gubftj",
    source: "legacy-code",
  },
  {
    slug: "digital-product-launch",
    title: "Digital Product Launch Workshop",
    eyebrow: "Launch workflow",
    description:
      "A workshop route found in the original project for creators and entrepreneurs planning a product launch.",
    bestFor: "Creators, coaches, consultants, and founders building a launch flow.",
    benefit: "Connect offer, funnel, follow-up, and launch execution into a clearer path.",
    category: "launch",
    affiliateUrl: "https://www.gohighlevel.com/digitalproductlaunch-workshop?fp_ref=gubftj",
    source: "legacy-code",
  },
];

export function getOffer(slug: string) {
  return offers.find((offer) => offer.slug === slug);
}

export const missingAffiliateIdeas = [
  "WordPress Unlimited",
  "Ad Manager",
  "HIPAA",
  "Priority Support",
  "Certification Program",
  "Supercharged SaaS Program",
  "Prospecting Tool",
  "WLMA",
];
