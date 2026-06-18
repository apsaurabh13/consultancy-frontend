"use client";

import Link from "next/link";

import { consultants } from "@/mocks/consultants";
import { ConsultantCard } from "@/features/consultants/components/consultant-card";

export function RelatedConsultants() {
  const relatedConsultants = consultants.slice(0, 4);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span
              className="
              inline-flex
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-2
              text-sm
              text-slate-300
              "
            >
              Similar Experts
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Related Consultants
            </h2>

            <p className="mt-3 max-w-2xl text-slate-400">
              Explore other verified professionals with
              similar expertise and consulting experience.
            </p>
          </div>

          <Link
            href="/consultants"
            className="
            text-sm
            font-medium
            text-cyan-400
            transition-colors
            hover:text-cyan-300
            "
          >
            View All Consultants →
          </Link>
        </div>

        {/* Consultants */}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {relatedConsultants.map((consultant) => (
            <ConsultantCard
              key={consultant.id}
              consultant={consultant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}