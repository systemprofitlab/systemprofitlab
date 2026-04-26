type ProductMockupProps = {
  compact?: boolean;
};

const stages = [
  { label: "New leads", value: "184", tone: "bg-teal-500" },
  { label: "Qualified", value: "92", tone: "bg-sky-500" },
  { label: "Booked", value: "43", tone: "bg-indigo-500" },
];

const rows = [
  { name: "Beginner owner", intent: "Guided setup", path: "Bootcamp" },
  { name: "Agency operator", intent: "Scale delivery", path: "SaaS Pro" },
  { name: "Local service", intent: "Missed calls", path: "AI Employee" },
];

const activity = [
  "AI replied to Morgan in 18 sec",
  "Agency visitor routed to Pro Trial",
  "Lead captured from final CTA",
];

export default function ProductMockup({ compact = false }: ProductMockupProps) {
  return (
    <div className={`relative ${compact ? "max-w-[560px]" : "w-full"}`}>
      <div className="absolute -left-5 top-12 hidden h-24 w-24 rounded-full bg-teal-200/50 blur-3xl lg:block" />
      <div className="absolute -bottom-6 right-6 hidden h-28 w-28 rounded-full bg-amber-200/50 blur-3xl lg:block" />

      <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_34px_100px_rgba(15,23,42,0.14)]">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Routing live
          </span>
        </div>

        <div className="grid lg:grid-cols-[168px_minmax(0,1fr)]">
          <aside className="border-b border-slate-200 bg-slate-950 p-5 text-white lg:border-b-0 lg:border-r">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Workspace
            </p>
            <div className="mt-5 space-y-2">
              {["Overview", "Leads", "Automations", "Offers", "Reporting"].map(
                (item, index) => (
                  <div
                    className={`rounded-xl px-3 py-2 text-sm ${
                      index === 0 ? "bg-white text-slate-950" : "text-slate-300"
                    }`}
                    key={item}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </aside>

          <div className="bg-[#fbfaf7] p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {stages.map((stage) => (
                <div className="rounded-2xl border border-slate-200 bg-white p-4" key={stage.label}>
                  <div className={`h-2 w-10 rounded-full ${stage.tone}`} />
                  <p className="mt-4 text-3xl font-semibold text-slate-950">
                    {stage.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {stage.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Intent router
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">
                    Offer paths by visitor signal
                  </h3>
                </div>
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                  4 active paths
                </span>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                {rows.map((row) => (
                  <div className="grid grid-cols-[1fr_1fr_auto] gap-3 border-b border-slate-200 bg-white px-4 py-3 text-sm last:border-b-0" key={row.name}>
                    <span className="font-semibold text-slate-900">{row.name}</span>
                    <span className="text-slate-500">{row.intent}</span>
                    <span className="font-semibold text-teal-700">{row.path}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_220px]">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Conversion trend
                </p>
                <div className="mt-5 flex h-36 items-end gap-2">
                  {[36, 48, 42, 66, 58, 78, 88].map((height) => (
                    <div className="flex-1 rounded-t-xl bg-slate-950" key={height} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Live activity
                </p>
                <div className="mt-4 space-y-3">
                  {activity.map((item) => (
                    <div className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-medium leading-5 text-slate-600" key={item}>
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
