type SceneVariant = "hero" | "beginners" | "agencies" | "local" | "creators";

type SceneIllustrationProps = {
  variant: SceneVariant;
};

export default function SceneIllustration({
  variant,
}: SceneIllustrationProps) {
  return (
    <div className={`sceneIllustration scene-${variant}`} aria-hidden="true">
      <svg viewBox="0 0 640 460" role="presentation">
        <defs>
          <linearGradient id="sceneBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.88)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.18)" />
          </linearGradient>
          <linearGradient id="sceneAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        <rect
          x="26"
          y="30"
          width="588"
          height="400"
          rx="34"
          fill="url(#sceneBg)"
          stroke="rgba(255,255,255,0.42)"
        />

        {variant === "hero" ? (
          <>
            <circle cx="495" cy="118" r="76" fill="currentColor" opacity="0.12" />
            <circle cx="172" cy="340" r="92" fill="currentColor" opacity="0.08" />
            <rect x="74" y="82" width="250" height="128" rx="26" fill="#fff" opacity="0.92" />
            <rect x="354" y="110" width="198" height="86" rx="24" fill="currentColor" opacity="0.14" />
            <rect x="114" y="108" width="104" height="14" rx="7" fill="currentColor" opacity="0.22" />
            <rect x="114" y="136" width="148" height="16" rx="8" fill="currentColor" opacity="0.62" />
            <rect x="114" y="166" width="128" height="12" rx="6" fill="currentColor" opacity="0.18" />
            <rect x="84" y="250" width="472" height="118" rx="30" fill="#fff" opacity="0.86" />
            <path
              d="M132 319c38-64 84-96 138-96 48 0 82 28 110 56 24 24 46 42 86 42"
              fill="none"
              stroke="currentColor"
              strokeWidth="14"
              strokeLinecap="round"
              opacity="0.72"
            />
            <circle cx="130" cy="319" r="14" fill="currentColor" />
            <circle cx="270" cy="223" r="14" fill="currentColor" opacity="0.84" />
            <circle cx="380" cy="278" r="14" fill="currentColor" opacity="0.74" />
            <circle cx="466" cy="318" r="14" fill="currentColor" opacity="0.64" />
          </>
        ) : null}

        {variant === "beginners" ? (
          <>
            <circle cx="480" cy="116" r="74" fill="currentColor" opacity="0.12" />
            <rect x="88" y="96" width="198" height="218" rx="28" fill="#fff" opacity="0.95" />
            <rect x="326" y="132" width="204" height="82" rx="24" fill="#fff" opacity="0.86" />
            <rect x="326" y="234" width="132" height="106" rx="24" fill="currentColor" opacity="0.16" />
            <path d="M152 168l28 28 54-66" fill="none" stroke="currentColor" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" />
            <rect x="132" y="234" width="104" height="14" rx="7" fill="currentColor" opacity="0.2" />
            <rect x="132" y="260" width="82" height="14" rx="7" fill="currentColor" opacity="0.45" />
          </>
        ) : null}

        {variant === "agencies" ? (
          <>
            <circle cx="158" cy="118" r="68" fill="currentColor" opacity="0.12" />
            <rect x="88" y="110" width="468" height="226" rx="32" fill="#fff" opacity="0.9" />
            <rect x="124" y="148" width="118" height="152" rx="24" fill="currentColor" opacity="0.1" />
            <rect x="272" y="224" width="64" height="76" rx="18" fill="currentColor" opacity="0.24" />
            <rect x="358" y="188" width="64" height="112" rx="18" fill="currentColor" opacity="0.48" />
            <rect x="444" y="162" width="64" height="138" rx="18" fill="currentColor" opacity="0.74" />
            <path d="M136 196h94M136 224h72M136 252h82" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" opacity="0.36" />
          </>
        ) : null}

        {variant === "local" ? (
          <>
            <circle cx="468" cy="94" r="66" fill="currentColor" opacity="0.12" />
            <rect x="112" y="76" width="204" height="308" rx="38" fill="#fff" opacity="0.94" />
            <rect x="340" y="124" width="158" height="92" rx="24" fill="#fff" opacity="0.84" />
            <rect x="340" y="244" width="172" height="116" rx="28" fill="currentColor" opacity="0.16" />
            <circle cx="214" cy="326" r="18" fill="currentColor" opacity="0.68" />
            <path d="M170 144h88M150 182h128M166 224h96" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" opacity="0.26" />
            <path d="M390 294c28-44 52-66 72-66 30 0 56 44 86 92" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" opacity="0.56" />
          </>
        ) : null}

        {variant === "creators" ? (
          <>
            <circle cx="172" cy="100" r="66" fill="currentColor" opacity="0.12" />
            <rect x="84" y="96" width="474" height="252" rx="34" fill="#fff" opacity="0.9" />
            <rect x="118" y="130" width="156" height="184" rx="26" fill="currentColor" opacity="0.14" />
            <rect x="302" y="130" width="222" height="94" rx="24" fill="#fff" opacity="0.92" />
            <rect x="302" y="244" width="98" height="70" rx="22" fill="currentColor" opacity="0.52" />
            <rect x="418" y="244" width="106" height="70" rx="22" fill="currentColor" opacity="0.22" />
            <circle cx="196" cy="196" r="42" fill="currentColor" opacity="0.65" />
            <path d="M164 268h64" stroke="#fff" strokeWidth="12" strokeLinecap="round" />
          </>
        ) : null}
      </svg>
    </div>
  );
}
