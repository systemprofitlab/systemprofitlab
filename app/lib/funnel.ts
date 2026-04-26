export type Offer = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  theme: "blue" | "violet" | "emerald" | "orange";
  summary: string;
  promise: string;
  affiliateHref: string;
  cta: string;
  proof: string[];
  idealFor: string[];
  included: string[];
  decisionTitle: string;
  decisionSummary: string;
  outcomes: string[];
};

export type AudiencePath = {
  slug: string;
  routePath: string;
  audience: string;
  title: string;
  summary: string;
  promise: string;
  leadLabel: string;
  problemTitle: string;
  problemSummary: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  primaryOfferSlug: string;
  secondaryOfferSlug: string;
  signals: string[];
  steps: string[];
  outcomes: string[];
  mistakes: string[];
};

export const offers: Offer[] = [
  {
    slug: "bootcamp-trial",
    title: "HighLevel Bootcamp + 30-Day Trial",
    shortTitle: "Bootcamp",
    category: "Guided start",
    theme: "blue",
    summary:
      "The strongest first move for business owners who want a live system faster without figuring everything out alone.",
    promise:
      "Get help launching faster, avoid setup friction, and build momentum before leads start slipping away.",
    affiliateHref:
      "https://www.gohighlevel.com/highlevel-bootcamp?fp_ref=gubftj",
    cta: "Start Free Trial",
    proof: ["30-day trial", "Live bootcamp", "Implementation support"],
    idealFor: [
      "Business owners who want help getting live",
      "Beginners who do not want to waste time on the wrong setup",
      "Anyone who needs a stronger first win before scaling",
    ],
    included: [
      "A longer runway to launch",
      "More clarity during setup",
      "A simpler path to first results",
    ],
    decisionTitle: "Why this is the safest place to start",
    decisionSummary:
      "If the biggest risk is overwhelm or a slow launch, the best option is the one that shortens the path to a working system.",
    outcomes: [
      "Get live faster",
      "Reduce setup confusion",
      "Build confidence before scaling",
    ],
  },
  {
    slug: "annual-plan",
    title: "HighLevel Annual Offer",
    shortTitle: "Annual Offer",
    category: "Direct commitment",
    theme: "blue",
    summary:
      "A simple buying path for warm traffic that already wants HighLevel and just needs the cleanest route to commit.",
    promise:
      "Move straight into the platform when the decision is already made and speed matters more than education.",
    affiliateHref: "https://www.gohighlevel.com/?fp_ref=gubftj",
    cta: "Start Free Trial",
    proof: ["Annual pricing", "Direct signup path", "Warm buyer fit"],
    idealFor: [
      "Visitors already sold on HighLevel",
      "Buyers comparing plans, not learning basics",
      "People who want the shortest path to access",
    ],
    included: [
      "A shorter buying path",
      "Less friction for warm traffic",
      "Cleaner commitment for ready buyers",
    ],
    decisionTitle: "Why this works for buyers who are already ready",
    decisionSummary:
      "When someone already trusts the platform, the best page removes friction and helps them move now.",
    outcomes: [
      "Shorter path to purchase",
      "Less comparison fatigue",
      "Better fit for bottom-of-funnel traffic",
    ],
  },
  {
    slug: "saas-pro-plan",
    title: "HighLevel SaaS Pro Plan Trial",
    shortTitle: "SaaS Pro Plan",
    category: "Agency growth",
    theme: "violet",
    summary:
      "The right trial for agencies that want client delivery, recurring revenue, and a stronger operating system behind growth.",
    promise:
      "Manage leads, conversations, pipeline, and client growth from one place without stitching together more tools.",
    affiliateHref: "https://www.gohighlevel.com/protrial?fp_ref=gubftj",
    cta: "Start Free Trial",
    proof: ["14-day trial", "Agency-ready", "White-label growth path"],
    idealFor: [
      "Agencies and consultants scaling service delivery",
      "Operators selling recurring marketing systems",
      "Teams that need pipeline, automation, and client visibility in one place",
    ],
    included: [
      "A stronger system for client work",
      "Cleaner recurring revenue positioning",
      "Better fit for agency operations",
    ],
    decisionTitle: "Why agencies should start here",
    decisionSummary:
      "If the business model depends on clients, delivery, and recurring growth, this path creates the strongest fit fastest.",
    outcomes: [
      "Stronger client delivery system",
      "Better fit for recurring revenue",
      "Cleaner operational control",
    ],
  },
  {
    slug: "five-day-challenge",
    title: "HighLevel 5-Day Challenge",
    shortTitle: "5-Day Challenge",
    category: "Fast momentum",
    theme: "orange",
    summary:
      "A structured sprint for people who take action faster with deadlines, accountability, and visible progress.",
    promise:
      "Compress the time between interest and execution so momentum builds before hesitation sets in.",
    affiliateHref: "https://www.gohighlevel.com/5dc?fp_ref=gubftj",
    cta: "Start Free Trial",
    proof: ["5-day sprint", "Done-for-you assets", "Expert guidance"],
    idealFor: [
      "Action-takers who move better with structure",
      "Operators who want visible progress quickly",
      "People who need a deadline to follow through",
    ],
    included: [
      "Shorter time to action",
      "More accountability",
      "More momentum during setup",
    ],
    decisionTitle: "Why this moves faster than a standard trial",
    decisionSummary:
      "For some buyers, the biggest unlock is not more information. It is urgency, structure, and a reason to move this week.",
    outcomes: [
      "Faster action after signup",
      "Higher implementation momentum",
      "Better fit for execution-driven buyers",
    ],
  },
  {
    slug: "ai-employee",
    title: "HighLevel AI Employee",
    shortTitle: "AI Employee",
    category: "Lead response",
    theme: "emerald",
    summary:
      "The fastest path for businesses that lose leads after hours, respond too slowly, or need more appointments from existing demand.",
    promise:
      "Respond instantly, answer questions, and book more opportunities without relying on manual follow-up.",
    affiliateHref: "https://www.gohighlevel.com/ai?fp_ref=gubftj",
    cta: "Start Free Trial",
    proof: ["1.58M+ AI agents", "8M+ calls answered", "86M+ messages sent"],
    idealFor: [
      "Local businesses with inbound demand",
      "Teams missing calls or texting back too late",
      "Appointment-driven businesses that need more booked conversations",
    ],
    included: [
      "Faster lead response",
      "More booked appointments",
      "Stronger after-hours coverage",
    ],
    decisionTitle: "Why this is the fastest operational win",
    decisionSummary:
      "If revenue is leaking because response time is slow, this is the clearest way to stop losing easy opportunities.",
    outcomes: [
      "More leads answered instantly",
      "More appointments booked automatically",
      "Less revenue lost after hours",
    ],
  },
  {
    slug: "digital-product-launch",
    title: "Digital Product Launch Workshop",
    shortTitle: "Launch Workshop",
    category: "Creator growth",
    theme: "orange",
    summary:
      "A better starting path for creators and educators who want to turn an audience into sales with a more guided launch process.",
    promise:
      "Move from attention to offer faster with a launch path built around monetization instead of generic software setup.",
    affiliateHref:
      "https://www.gohighlevel.com/digitalproductlaunch-workshop?fp_ref=gubftj",
    cta: "Start Free Trial",
    proof: ["Workshop format", "$97 offer angle", "Built for creators"],
    idealFor: [
      "Creators packaging an offer for the first time",
      "Coaches and educators turning expertise into revenue",
      "Audience-led businesses that need a monetization path",
    ],
    included: [
      "A clearer launch process",
      "Better monetization framing",
      "A stronger bridge from audience to offer",
    ],
    decisionTitle: "Why creators move better with a launch angle",
    decisionSummary:
      "When audience attention already exists, the highest-value next step is the one that connects attention to an offer people can buy.",
    outcomes: [
      "Faster path from audience to revenue",
      "Better launch clarity",
      "Stronger fit for creator-led growth",
    ],
  },
];

export const audiencePaths: AudiencePath[] = [
  {
    slug: "new-to-highlevel",
    routePath: "/for-beginners",
    audience: "Beginners",
    title: "Get live faster without setup overwhelm",
    summary:
      "Start with the path that helps you launch, automate follow-up, and build momentum without wasting time on the wrong plan first.",
    promise:
      "Shorten the path from signup to first result.",
    leadLabel: "For beginners",
    problemTitle: "The biggest risk is not choosing the wrong software. It is never getting the system live.",
    problemSummary:
      "Most first-time buyers lose time when they enter a platform with no clear launch plan. A better first path reduces confusion and gets results moving sooner.",
    primaryCtaLabel: "See the guided start",
    secondaryCtaLabel: "Need a faster sprint?",
    primaryOfferSlug: "bootcamp-trial",
    secondaryOfferSlug: "five-day-challenge",
    signals: [
      "Needs help launching",
      "Wants less setup friction",
      "Needs a clearer first result",
    ],
    steps: [
      "Start with the offer that helps you launch faster",
      "Keep the setup simple and guided",
      "Move into momentum once the basics are live",
    ],
    outcomes: [
      "Launch faster",
      "Reduce setup overwhelm",
      "Build confidence earlier",
    ],
    mistakes: [
      "Starting too advanced too early",
      "Trying to build everything alone",
      "Waiting too long to get the system live",
    ],
  },
  {
    slug: "agency-operator",
    routePath: "/for-agencies",
    audience: "Agencies",
    title: "Manage clients, pipeline, and recurring growth from one system",
    summary:
      "The right path for agencies that need one place for lead flow, automation, conversations, and recurring client delivery.",
    promise:
      "Operate with more control and less tool sprawl.",
    leadLabel: "For agencies",
    problemTitle: "Agencies do not need more disconnected tools. They need one operating system for growth and delivery.",
    problemSummary:
      "When client work, follow-up, pipeline, and recurring revenue depend on multiple platforms, service quality and visibility suffer. The right path fixes operations first.",
    primaryCtaLabel: "See the agency plan",
    secondaryCtaLabel: "Already ready to commit?",
    primaryOfferSlug: "saas-pro-plan",
    secondaryOfferSlug: "annual-plan",
    signals: [
      "Runs client delivery",
      "Needs stronger recurring systems",
      "Wants more operational control",
    ],
    steps: [
      "Lead with the plan built for agencies",
      "Tie the value to growth and client delivery",
      "Use the direct offer when the buyer is already warm",
    ],
    outcomes: [
      "Stronger agency operations",
      "Cleaner recurring revenue story",
      "Better fit for scale and delivery",
    ],
    mistakes: [
      "Leading with beginner messaging",
      "Ignoring recurring revenue goals",
      "Using generic software copy instead of operator outcomes",
    ],
  },
  {
    slug: "local-business",
    routePath: "/for-local-businesses",
    audience: "Local businesses",
    title: "Stop missing calls and turn more inquiries into booked appointments",
    summary:
      "The strongest path for businesses that depend on fast response, local trust, and better follow-up to turn leads into revenue.",
    promise:
      "Answer faster and book more from the demand you already have.",
    leadLabel: "For local businesses",
    problemTitle: "Leads go cold when nobody answers quickly enough.",
    problemSummary:
      "If new inquiries sit too long, revenue disappears before the first real conversation happens. The right system answers faster, follows up automatically, and books more appointments.",
    primaryCtaLabel: "See the AI path",
    secondaryCtaLabel: "Need the broader system first?",
    primaryOfferSlug: "ai-employee",
    secondaryOfferSlug: "bootcamp-trial",
    signals: [
      "Misses leads after hours",
      "Needs more booked appointments",
      "Wants less manual follow-up",
    ],
    steps: [
      "Fix response time first",
      "Automate the handoff to booking",
      "Use the broader platform path when more setup is needed",
    ],
    outcomes: [
      "More leads answered",
      "More appointments booked",
      "Less revenue lost after hours",
    ],
    mistakes: [
      "Treating slow response like a minor issue",
      "Relying on manual text-back processes",
      "Using disconnected tools for reviews, calls, and calendars",
    ],
  },
  {
    slug: "creator-launch",
    routePath: "/for-creators",
    audience: "Creators",
    title: "Turn audience attention into bookings, buyers, and launch momentum",
    summary:
      "The best path for creators, coaches, and educators who need a cleaner system for lead capture, nurture, and monetization.",
    promise:
      "Move from content to conversion faster.",
    leadLabel: "For creators",
    problemTitle: "Attention alone does not pay. The system behind the audience is what turns interest into revenue.",
    problemSummary:
      "If leads are coming in but the follow-up and booking process is weak, monetization stays inconsistent. The best path creates structure around lead capture and launch movement.",
    primaryCtaLabel: "See the creator path",
    secondaryCtaLabel: "Want a faster build sprint?",
    primaryOfferSlug: "digital-product-launch",
    secondaryOfferSlug: "five-day-challenge",
    signals: [
      "Has audience attention already",
      "Needs a clearer monetization system",
      "Wants more structure around launch and nurture",
    ],
    steps: [
      "Lead with the monetization-first offer",
      "Use the sprint option for faster implementation",
      "Keep the focus on launch, booking, and follow-up",
    ],
    outcomes: [
      "Stronger monetization flow",
      "Better path from content to offer",
      "Cleaner launch momentum",
    ],
    mistakes: [
      "Relying on scattered tools after lead capture",
      "Talking about features instead of monetization",
      "Waiting too long to build the follow-up system",
    ],
  },
];

export function getOffer(slug: string) {
  return offers.find((offer) => offer.slug === slug);
}

export function getAudiencePath(slug: string) {
  return audiencePaths.find((path) => path.slug === slug);
}

export function getAudiencePathByRoute(routePath: string) {
  return audiencePaths.find((path) => path.routePath === routePath);
}

export function buildTrackedOfferHref(
  offerSlug: string,
  source: string,
  audience?: string,
) {
  const params = new URLSearchParams({ source });

  if (audience) {
    params.set("audience", audience);
  }

  return `/go/${offerSlug}?${params.toString()}`;
}
