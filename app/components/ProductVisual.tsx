type ProductVisualVariant = "homepage" | "agency" | "automation" | "creator" | "starter";

type ProductVisualProps = {
  variant: ProductVisualVariant;
};

const visualCopy = {
  homepage: {
    label: "Smart routing",
    headline: "Match visitors to the strongest starting point.",
    points: ["Beginners", "Agencies", "Local businesses", "Creators"],
  },
  agency: {
    label: "Agency workflow",
    headline: "Lead, onboard, deliver, and grow recurring revenue.",
    points: ["Pipeline", "Clients", "Reporting", "SaaS"],
  },
  automation: {
    label: "AI response",
    headline: "Answer faster and book more qualified leads.",
    points: ["Calls", "Messages", "Follow-up", "Bookings"],
  },
  creator: {
    label: "Launch flow",
    headline: "Turn audience attention into a product offer.",
    points: ["Audience", "Offer", "Checkout", "Follow-up"],
  },
  starter: {
    label: "Guided setup",
    headline: "Start with a path built for confidence and momentum.",
    points: ["Coach", "Assets", "Launch", "Next step"],
  },
} as const;

export default function ProductVisual({ variant }: ProductVisualProps) {
  const content = visualCopy[variant];

  return (
    <aside className={`productVisual productVisual-${variant}`} aria-hidden="true">
      <div className="visualShell">
        <div className="visualTopBar">
          <span />
          <span />
          <span />
        </div>
        <div className="visualBadge">{content.label}</div>
        <h3>{content.headline}</h3>
        <div className="visualCanvas" aria-hidden="true">
          <div className="visualCanvasGlow" />
          <div className="visualCanvasPanel visualCanvasPanel-primary">
            <strong>Traffic</strong>
            <span>Audience-matched entry pages</span>
          </div>
          <div className="visualCanvasPanel visualCanvasPanel-secondary">
            <strong>Decision</strong>
            <span>Best-fit offer and CTA path</span>
          </div>
          <div className="visualCanvasLine visualCanvasLine-a" />
          <div className="visualCanvasLine visualCanvasLine-b" />
        </div>
        <div className="visualMetricRow">
          <div className="visualMetric">
            <strong>Best fit</strong>
            <span>Audience matched</span>
          </div>
          <div className="visualMetric">
            <strong>Offer ready</strong>
            <span>CTA tracked</span>
          </div>
          <div className="visualMetric">
            <strong>Lead capture</strong>
            <span>Email optional</span>
          </div>
        </div>
        <div className="visualTrack">
          {content.points.map((point, index) => (
            <div className="visualNode" key={point}>
              <div className="visualDot">{index + 1}</div>
              <div className="visualNodeBody">
                <span>{point}</span>
                <small>
                  {index === 0
                    ? "Entry point"
                    : index === content.points.length - 1
                      ? "Decision-ready"
                      : "Qualified path"}
                </small>
              </div>
            </div>
          ))}
        </div>
        <div className="visualStats">
          <div className="visualStatCard">
            <strong>Website flow</strong>
            <span>Structured sections instead of stacked slides</span>
          </div>
          <div className="visualStatCard">
            <strong>Clear CTA depth</strong>
            <span>Browse, capture, or click through</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
