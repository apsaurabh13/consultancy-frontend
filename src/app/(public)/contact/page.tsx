import { ContactHero } from "@/features/contact/components/contact-hero";
import { ContactOptions } from "@/features/contact/components/contact-options";
import { ContactForm } from "@/features/contact/components/contact-form";
import { OfficeInfo } from "@/features/contact/components/office-info";
import { FAQSection } from "@/features/contact/components/faq-section";
import { CTASection } from "@/features/contact/components/cta-section";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <ContactHero />
      <ContactOptions />
      <ContactForm />
      <OfficeInfo />
      <FAQSection />
      <CTASection />
    </main>
  );
}