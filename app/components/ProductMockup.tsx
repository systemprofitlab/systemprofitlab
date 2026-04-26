type ProductMockupProps = {
  compact?: boolean;
};

const stages = [
  { label: "New leads", value: "184", delta: "+28%", tone: "from-cyan-400 to-blue-500" },
  { label: "AI replies", value: "92", delta: "18 sec", tone: "from-violet-400 to-fuchsia-500" },
  { label: "Booked", value: "43", delta: "+31%", tone: "from-emerald-300 to-cyan-500" },
];

const rows = [
  { name: "Business owner", intent: "Automation", path: "AI Employee", score: 94 },
  { name: "New operator", intent: "Guided setup", path: "Bootcamp", score: 87 },
  { name: "Agency team", intent: "Client delivery", path: "SaaS Pro", score: 91 },
];

const activity = [
  "AI replied to Maya in 18 seconds",
  "Lead moved from inquiry to booked",
  "Owner matched to automation path",
];

const pipeline = [
  { label: "Captured", count: 184, width: "92%" },
  { label: "Qualified", count: 92, width: "68%" },
  { label: "Booked", count: 43, width: "44%" },
];

const chartBars = [42, 58, 51, 74, 68, 86, 96, 78, 92];

export default function ProductMockup({ compact = false }: ProductMockupProps) {
  return (
    <div className={`product-orbit relative ${compact ? "max-w-[640px]" : "w-full"}`}>
      <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#08111f]/90 shadow-[0_34px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(168,85,247,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]" />
        <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            System live
          </span>
        </div>

        <div className="relative grid lg:grid-cols-[172px_minmax(0,1fr)]">
          <aside className="border-b border-white/10 bg-black/20 p-5 text-white lg:border-b-0 lg:border-r">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Workspace
            </p>
            <div className="mt-5 space-y-2">
              {["Overview", "Leads", "AI follow-up", "Systems", "Reporting"].map(
                (item, index) => (
                  <div
                    className={`rounded-xl px-3 py-2 text-sm ${
                      index === 0
                        ? "bg-white text-slate-950 shadow-[0_14px_30px_rgba(255,255,255,0.14)]"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                    key={item}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Health
              </p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
              </div>
              <p className="mt-3 text-sm font-semibold text-white">86% automated</p>
            </div>
          </aside>

          <div className="p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {stages.map((stage) => (
                <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-[0_16px_42px_rgba(0,0,0,0.22)]" key={stage.label}>
                  <div className={`h-2 w-12 rounded-full bg-gradient-to-r ${stage.tone}`} />
                  <div className="mt-4 flex items-end justify-between gap-3">
                    <p className="text-3xl font-semibold text-white">{stage.value}</p>
                    <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] font-semibold text-cyan-100">
                      {stage.delta}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-slate-400">{stage.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Pipeline
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      Opportunity movement
                    </h3>
                  </div>
                  <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    Live
                  </span>
                </div>
                <div className="mt-5 space-y-4">
                  {pipeline.map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">{item.label}</span>
                        <span className="font-semibold text-white">{item.count}</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400"
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Response curve
                </p>
                <div className="mt-5 flex h-40 items-end gap-2">
                  {chartBars.map((height, index) => (
                    <div
                      className={`flex-1 rounded-t-xl ${
                        index > 5
                          ? "bg-gradient-to-t from-violet-500 to-cyan-300"
                          : "bg-gradient-to-t from-blue-500 to-sky-300"
                      }`}
                      key={`${height}-${index}`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.07] p-4 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Growth router
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    System paths by visitor need
                  </h3>
                </div>
                <span className="rounded-full bg-violet-300/10 px-3 py-1 text-xs font-semibold text-violet-100">
                  4 growth paths
                </span>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
                {rows.map((row) => (
                  <div className="grid grid-cols-[1fr_1fr_auto_auto] gap-3 border-b border-white/10 bg-black/10 px-4 py-3 text-sm last:border-b-0" key={row.name}>
                    <span className="font-semibold text-white">{row.name}</span>
                    <span className="text-slate-400">{row.intent}</span>
                    <span className="font-semibold text-cyan-200">{row.path}</span>
                    <span className="text-slate-500">{row.score}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_240px]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  AI conversation
                </p>
                <div className="mt-4 space-y-3">
                  <div className="max-w-[84%] rounded-2xl bg-white/10 px-4 py-3 text-sm leading-6 text-slate-200">
                    I can help you book a consultation. Are you looking for automation or setup support?
                  </div>
                  <div className="ml-auto max-w-[78%] rounded-2xl bg-gradient-to-r from-cyan-500/25 to-violet-500/25 px-4 py-3 text-sm leading-6 text-white">
                    Automation. We miss too many calls after hours.
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Live activity
                </p>
                <div className="mt-4 space-y-3">
                  {activity.map((item) => (
                    <div className="rounded-xl bg-white/[0.06] px-3 py-2 text-xs font-medium leading-5 text-slate-300" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
