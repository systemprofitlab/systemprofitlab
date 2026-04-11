import Image from "next/image";
import LeadForm from "./components/LeadForm";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

const systems = [
  {
    title: "Traffic Blueprint",
    text: "Clear hooks, content angles, and weekly publishing rhythm for bringing the right people in.",
  },
  {
    title: "Conversion Funnel",
    text: "A focused offer path that collects emails, explains the next step, and routes qualified leads.",
  },
  {
    title: "Follow-Up Engine",
    text: "Email-ready lead capture with optional webhook forwarding for your CRM or automation stack.",
  },
];

const outcomes = [
  "Launch a lead capture page that works on mobile and desktop.",
  "Validate email submissions before they reach your backend.",
  "Redirect subscribers to your offer or affiliate destination.",
  "Connect a webhook later without rebuilding the page.",
];

const testimonials = [
  {
    quote:
      "The flow made the offer easier to explain and the follow-up easier to manage.",
    name: "Alex J.",
  },
  {
    quote:
      "I finally had one page that connected content, email capture, and next steps.",
    name: "Samantha R.",
  },
  {
    quote:
      "Simple enough to launch quickly, structured enough to keep improving.",
    name: "David K.",
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="hero" id="top" aria-labelledby="hero-title">
        <Image
          className="heroImage"
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80"
          alt="A focused workspace with notebooks and analytics screens"
          fill
          priority
          sizes="100vw"
        />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow">Traffic. Funnel. Follow-up.</p>
          <h1 id="hero-title">
            Turn attention into a lead system that keeps working.
          </h1>
          <p className="heroText">
            SystemProfitLab gives creators and small businesses a working path
            from first click to captured lead to next offer.
          </p>
          <LeadForm variant="hero" />
        </div>
      </section>

      <section className="section sectionIntro" id="system">
        <div className="sectionHeader">
          <p className="eyebrow">Built for action</p>
          <h2>Everything needed for the first working version.</h2>
        </div>
        <div className="systemGrid">
          {systems.map((item) => (
            <article className="panel" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="featureBand" id="automation">
        <div className="featureMedia">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80"
            alt="A team reviewing an automation workflow on a large screen"
            width={1400}
            height={933}
            sizes="(max-width: 860px) 100vw, 56vw"
          />
        </div>
        <div className="featureCopy">
          <p className="eyebrow">Lead flow</p>
          <h2>Capture the email, confirm the request, send the next step.</h2>
          <ul>
            {outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="proof">
        <div className="sectionHeader">
          <p className="eyebrow">Signals</p>
          <h2>A cleaner path from audience to opportunity.</h2>
        </div>
        <div className="testimonialGrid">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="cta" id="start">
        <div>
          <p className="eyebrow">Start now</p>
          <h2>Get the system and route your next lead with confidence.</h2>
        </div>
        <LeadForm variant="inline" />
      </section>

      <footer className="footer">
        <p>Copyright 2026 SystemProfitLab. All rights reserved.</p>
        <p>Educational content only. Results depend on offer, audience, and execution.</p>
      </footer>
    </main>
  );
}
