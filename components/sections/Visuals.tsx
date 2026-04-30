import { systemSteps } from "@/data/site";

export function CommandDashboard() {
  const pipeline = ["New", "Qualified", "Booked", "Won"];
  return (
    <div className="glass float-soft relative rounded-[28px] p-4 sm:p-5">
      <div className="flex items-center justify-between border-b border-black/10 pb-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--green)]">
            Growth OS
          </p>
          <p className="mt-1 text-xl font-black">Command Center</p>
        </div>
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[var(--rose)]" />
          <span className="h-3 w-3 rounded-full bg-[var(--amber)]" />
          <span className="h-3 w-3 rounded-full bg-[var(--green)]" />
        </div>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="grid gap-3">
          {["Lead capture", "Follow-up", "Booking", "Reviews"].map((item, index) => (
            <div key={item} className="rounded-2xl border border-black/10 bg-[var(--surface-deep)] p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black">{item}</span>
                <span className="text-xs font-bold text-[var(--cyan)]">{84 + index * 4}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--green)] to-[var(--cyan)]"
                  style={{ width: `${62 + index * 8}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-black/10 bg-[var(--surface-deep)] p-4">
          <div className="grid grid-cols-4 gap-3">
            {pipeline.map((stage, stageIndex) => (
              <div key={stage} className="min-w-0">
                <p className="truncate text-xs font-black uppercase tracking-[0.12em] text-[var(--muted)]">
                  {stage}
                </p>
                <div className="mt-3 grid gap-2">
                  {[0, 1, 2].map((card) => (
                    <div
                      key={card}
                      className="h-16 rounded-xl border border-black/10 bg-white/55 p-2"
                    >
                      <div className="h-2 w-4/5 rounded-full bg-black/20" />
                      <div className="mt-3 h-2 w-2/3 rounded-full bg-black/10" />
                      <div
                        className="mt-3 h-1.5 rounded-full bg-[var(--green)]/80"
                        style={{ width: `${35 + stageIndex * 14 + card * 8}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <svg viewBox="0 0 520 150" className="mt-4 h-28 w-full overflow-visible">
            <path
              d="M10 116 C70 64, 112 92, 166 58 S263 22, 318 52 415 108, 506 28"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              className="pulse-line"
            />
            <defs>
              <linearGradient id="lineGradient" x1="0" x2="1">
                <stop stopColor="#91ff72" />
                <stop offset="1" stopColor="#67e8ff" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function SystemMapVisual() {
  return (
    <div className="glass rounded-[28px] p-5 sm:p-8">
      <div className="grid gap-4 md:grid-cols-4">
        {systemSteps.map((step, index) => (
          <div key={step} className="relative rounded-2xl border border-black/10 bg-[var(--surface-deep)] p-4">
            <p className="text-xs font-black text-[var(--cyan)]">0{index + 1}</p>
            <p className="mt-3 text-lg font-black">{step}</p>
            {index < systemSteps.length - 1 ? (
              <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-[var(--green)] to-[var(--cyan)] md:block" />
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-black/10 bg-white/50 p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-2xl font-black tracking-[-0.03em]">The system behind the sale</p>
          <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
            Traffic is only useful when each click has a clean path into capture, context,
            follow-up, conversion, and retention.
          </p>
        </div>
      </div>
    </div>
  );
}

export function StackComparisonVisual() {
  const disconnected = [
    "Website",
    "Funnels",
    "CRM",
    "SMS",
    "Email",
    "Booking",
    "Reviews",
    "Social",
    "Automation",
  ];
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="panel rounded-3xl p-5">
        <p className="text-sm font-black text-[var(--rose)]">Disconnected stack</p>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {disconnected.map((tool) => (
            <div key={tool} className="rounded-2xl border border-black/10 bg-[var(--surface-deep)] p-3 text-sm font-bold text-[var(--muted)]">
              {tool}
            </div>
          ))}
        </div>
      </div>
      <div className="glass rounded-3xl p-5">
        <p className="text-sm font-black text-[var(--green)]">Connected operating layer</p>
        <div className="mt-5 grid min-h-[220px] place-items-center rounded-3xl border border-black/10 bg-[var(--surface-deep)] p-6 text-center">
          <div>
            <p className="text-4xl font-black tracking-[-0.05em]">HighLevel</p>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">
              A single environment that can centralize many core marketing and
              client-management workflows, depending on business needs and setup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
