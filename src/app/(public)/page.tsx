import { HeroSection } from "@/features/home/components/hero-section";
import { TrustedCompanies } from "@/features/home/components/trusted-companies";
import { StatsSection } from "@/features/home/components/stats-section";
import { FeaturedConsultants } from "@/features/home/components/featured-consultants";
import { CategoriesSection } from "@/features/home/components/categories-section";
import { HowItWorks } from "@/features/home/components/how-it-works";
import { WhyConsultEdge } from "@/features/home/components/why-consultedge";
import { TestimonialsSection } from "@/features/home/components/testimonials-section";
import { CtaSection } from "@/features/home/components/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedCompanies />
      <StatsSection />
      <FeaturedConsultants />
      <CategoriesSection />
      <HowItWorks />
      <WhyConsultEdge />
     
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
