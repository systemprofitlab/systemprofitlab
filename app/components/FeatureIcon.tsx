type FeatureIconName =
  | "compass"
  | "agency"
  | "spark"
  | "phone"
  | "rocket"
  | "checklist";

type FeatureIconProps = {
  name: FeatureIconName;
  className?: string;
};

export default function FeatureIcon({
  name,
  className = "",
}: FeatureIconProps) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  return (
    <span
      aria-hidden="true"
      className={`icon-badge ${className}`.trim()}
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" role="presentation">
        {name === "compass" ? (
          <>
            <circle cx="12" cy="12" r="8" {...commonProps} />
            <path d="M14.8 9.2 13 13l-3.8 1.8L11 11l3.8-1.8Z" {...commonProps} />
          </>
        ) : null}
        {name === "agency" ? (
          <>
            <rect x="4" y="6" width="16" height="12" rx="2" {...commonProps} />
            <path d="M8 14V11M12 14V9M16 14v-2" {...commonProps} />
          </>
        ) : null}
        {name === "spark" ? (
          <>
            <path d="m12 4 1.7 4.3L18 10l-4.3 1.7L12 16l-1.7-4.3L6 10l4.3-1.7L12 4Z" {...commonProps} />
            <path d="M18.5 4.5 19 6l1.5.5-1.5.5-.5 1.5-.5-1.5L16 6.5l1.5-.5.5-1.5Z" {...commonProps} />
          </>
        ) : null}
        {name === "phone" ? (
          <>
            <path d="M8 5h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" {...commonProps} />
            <path d="M10 8h4M11 16h2" {...commonProps} />
          </>
        ) : null}
        {name === "rocket" ? (
          <>
            <path d="M14.5 5.5c2.8.3 4.2 1.7 4.5 4.5-1.6 3.2-4.2 5.8-7.4 7.4-2.8-.3-4.2-1.7-4.5-4.5 1.6-3.2 4.2-5.8 7.4-7.4Z" {...commonProps} />
            <circle cx="14.5" cy="9.5" r="1.25" {...commonProps} />
            <path d="M8.5 15.5 6 18l-.5-3.5L8.5 15.5ZM15.5 8.5 18 6l.5 3.5-3-1Z" {...commonProps} />
          </>
        ) : null}
        {name === "checklist" ? (
          <>
            <rect x="5" y="4" width="14" height="16" rx="2" {...commonProps} />
            <path d="m8 9 1 1 2-2M8 14l1 1 2-2M12.5 9H16M12.5 14H16" {...commonProps} />
          </>
        ) : null}
      </svg>
    </span>
  );
}
