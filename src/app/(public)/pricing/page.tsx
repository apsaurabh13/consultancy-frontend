import { PricingHero } from "@/features/pricing/components/pricing-hero";
import { HowPricingWorks } from "@/features/pricing/components/how-pricing-works";
import { WalletPackages } from "@/features/pricing/components/wallet-packages";
import { PricingBenefits } from "@/features/pricing/components/pricing-benefits";
import { FAQSection } from "@/features/pricing/components/faq-section";
import { PricingCTA } from "@/features/pricing/components/pricing-cta";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <PricingHero />
      <HowPricingWorks />
      <WalletPackages />
      <PricingBenefits />
      <FAQSection />
      <PricingCTA />
    </main>
  );
}