import { ConsultantHero } from "@/features/consultant-details/ components/consultant-hero";
import { ConsultantOverview } from "@/features/consultant-details/ components/consultant-overview";
import { ConsultantExpertise } from "@/features/consultant-details/ components/consultant-expertise";
import { ConsultantExperience } from "@/features/consultant-details/ components/consultant-experience";
import { ConsultantReviews } from "@/features/consultant-details/ components/consultant-reviews";
import { ConsultantPricing } from "@/features/consultant-details/ components/consultant-pricing";
import { ConsultantAvailability } from "@/features/consultant-details/ components/consultant-availability";
import { RelatedConsultants } from "@/features/consultant-details/ components/related-consultants";
import { ConsultantCTA } from "@/features/consultant-details/ components/consultant-cta";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ConsultantDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-slate-950">
      <ConsultantHero consultantId={id} />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
            {/* Main Content */}
            <div className="space-y-8">
              <ConsultantOverview />

              <ConsultantExpertise />

              <ConsultantExperience />

              <ConsultantReviews />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <ConsultantPricing />

              <ConsultantAvailability />
            </aside>
          </div>
        </div>
      </section>

      <RelatedConsultants />

      <ConsultantCTA />
    </main>
  );
}