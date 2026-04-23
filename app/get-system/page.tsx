import Link from "next/link";
import LeadForm from "../components/LeadForm";

export default function GetSystemPage() {
  return (
    <main className="capturePage">
      <section className="captureCard">
        <p className="eyebrow">Free system</p>
        <h1>Get the SystemProfitLab starter system.</h1>
        <p className="captureText">
          Enter your email below and we will send the system to your inbox, then
          guide you to the next step right away.
        </p>
        <ul className="captureChecklist">
          <li>Traffic and follow-up starter structure</li>
          <li>Simple next-step path after submit</li>
          <li>Confirmation page before redirect</li>
        </ul>
        <LeadForm variant="inline" />
        <div className="captureLinks">
          <Link className="confirmationLink" href="/">
            Back to homepage
          </Link>
        </div>
      </section>
    </main>
  );
}
