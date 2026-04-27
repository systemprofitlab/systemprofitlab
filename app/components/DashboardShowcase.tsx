type DashboardShowcaseProps = {
  variant?: "hero" | "crm" | "automation" | "analytics";
};

const contacts = [
  { name: "Maya Chen", status: "Booked", value: "$4.8k" },
  { name: "Jordan Lee", status: "AI reply", value: "$2.1k" },
  { name: "Avery Stone", status: "Follow-up", value: "$7.4k" },
];

const automations = [
  "New form submission",
  "AI qualifies intent",
  "Calendar link sent",
  "Pipeline stage updated",
];

const pipeline = [
  { label: "Captured", value: "184", width: "92%" },
  { label: "Qualified", value: "92", width: "68%" },
  { label: "Booked", value: "43", width: "46%" },
  { label: "Won", value: "21", width: "28%" },
];

const bars = [48, 66, 54, 82, 73, 96, 88, 104, 92, 118];

export default function DashboardShowcase({
  variant = "hero",
}: DashboardShowcaseProps) {
  return (
    <div className={`dashboard-showcase dashboard-showcase-${variant}`}>
      <div className="dashboard-frame">
        <div className="dashboard-topbar">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <span className="dashboard-pill">System live</span>
        </div>

        <div className="dashboard-body">
          <aside className="dashboard-sidebar">
            <p className="dashboard-label">SystemProfitLab</p>
            {["Overview", "Contacts", "Pipeline", "AI Inbox", "Automations"].map(
              (item, index) => (
                <div
                  className={`dashboard-nav-item ${index === 0 ? "is-active" : ""}`}
                  key={item}
                >
                  <span />
                  {item}
                </div>
              ),
            )}
          </aside>

          <section className="dashboard-main">
            <div className="dashboard-heading-row">
              <div>
                <p className="dashboard-label">Growth command center</p>
                <h3>Lead capture, AI response, and pipeline in one view.</h3>
              </div>
              <button type="button">Route lead</button>
            </div>

            <div className="dashboard-metrics">
              {[
                ["184", "New leads"],
                ["18s", "Avg AI reply"],
                ["43", "Booked calls"],
              ].map(([value, label]) => (
                <div className="dashboard-metric" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="dashboard-grid">
              <div className="dashboard-panel dashboard-panel-large">
                <div className="dashboard-panel-head">
                  <div>
                    <p className="dashboard-label">Pipeline movement</p>
                    <h4>Opportunities by stage</h4>
                  </div>
                  <span>+31%</span>
                </div>
                <div className="dashboard-bars">
                  {bars.map((height, index) => (
                    <i
                      key={`${height}-${index}`}
                      style={{ height: `${height}px` }}
                    />
                  ))}
                </div>
              </div>

              <div className="dashboard-panel">
                <p className="dashboard-label">AI conversation</p>
                <div className="chat-bubble">
                  I can help you book a time. Are you looking for automation or setup?
                </div>
                <div className="chat-bubble is-user">
                  Automation. We miss leads after hours.
                </div>
              </div>
            </div>

            <div className="dashboard-grid dashboard-grid-bottom">
              <div className="dashboard-panel">
                <p className="dashboard-label">CRM contacts</p>
                <div className="contact-list">
                  {contacts.map((contact) => (
                    <div className="contact-row" key={contact.name}>
                      <span className="contact-avatar">{contact.name.slice(0, 1)}</span>
                      <div>
                        <strong>{contact.name}</strong>
                        <small>{contact.status}</small>
                      </div>
                      <em>{contact.value}</em>
                    </div>
                  ))}
                </div>
              </div>

              <div className="dashboard-panel">
                <p className="dashboard-label">Automation flow</p>
                <div className="automation-flow">
                  {automations.map((step, index) => (
                    <div className="automation-step" key={step}>
                      <span>{index + 1}</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="dashboard-panel">
                <p className="dashboard-label">Stage health</p>
                <div className="pipeline-list">
                  {pipeline.map((stage) => (
                    <div key={stage.label}>
                      <div className="pipeline-meta">
                        <span>{stage.label}</span>
                        <strong>{stage.value}</strong>
                      </div>
                      <div className="pipeline-track">
                        <i style={{ width: stage.width }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
