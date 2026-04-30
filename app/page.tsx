import { PageShell } from "@/components/ui/PageShell";
import {
  AudienceSection,
  ComparisonSection,
  FeaturesSection,
  FinalCtaSection,
  HeroSection,
  OffersSection,
  ProblemSolutionSection,
  SystemMapSection,
  TrustSection,
  WhatWeDoSection,
  WhySection,
} from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <WhatWeDoSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <AudienceSection />
      <SystemMapSection />
      <OffersSection />
      <ComparisonSection />
      <WhySection />
      <TrustSection />
      <FinalCtaSection />
    </PageShell>
  );
}
