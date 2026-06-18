import { AboutHero } from "@/features/about/components/about-hero";
import { MissionSection } from "@/features/about/components/mission-section";
import { WhyChooseUs } from "@/features/about/components/why-choose-us";
import { JourneyTimeline } from "@/features/about/components/journey-timeline";
import { PlatformStats } from "@/features/about/components/platform-stats";
import { HowItWorks } from "@/features/about/components/how-it-works";
import { CoreValues } from "@/features/about/components/core-values";
import { TeamPreview } from "@/features/about/components/team-preview";
import { CTASection } from "@/features/about/components/cta-section";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <AboutHero />
      <MissionSection />
      <WhyChooseUs />
      <JourneyTimeline />
      <PlatformStats />
      <HowItWorks />
      <CoreValues />
      <TeamPreview />
      <CTASection />
    </main>
  );
}