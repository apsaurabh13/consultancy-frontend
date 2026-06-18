"use client";

import { useMemo, useState } from "react";

import { consultants as mockConsultants } from "@/mocks/consultants";

import type { Consultant } from "@/features/consultants/types/consultant";

import { ConsultantsHero } from "@/features/consultants/components/consultants-hero";
import { ConsultantStats } from "@/features/consultants/components/consultant-stats";
import { ConsultantsSearch } from "@/features/consultants/components/consultants-search";
import { ConsultantsGrid } from "@/features/consultants/components/consultants-grid";
import { ConsultantsPagination } from "@/features/consultants/components/consultants-pagination";

export default function ConsultantsPage() {
  const [query, setQuery] = useState("");

  const [category, setCategory] =
    useState<string | null>(null);

  const [experience, setExperience] =
    useState<number | null>(null);

  const [rating, setRating] =
    useState<number | null>(null);

  const [priceRange, setPriceRange] =
    useState<string | null>(null);

  const [sortBy, setSortBy] =
    useState("rating");

  const [page, setPage] = useState(1);

  const PER_PAGE = 9;

  const data = useMemo<Consultant[]>(() => {
    return mockConsultants.map((consultant) => ({
      ...consultant,
    }));
  }, []);

  function inferCategory(role: string) {
    const r = role.toLowerCase();

    if (
      r.includes("software") ||
      r.includes("engineer") ||
      r.includes("architect") ||
      r.includes("developer")
    ) {
      return "Technology";
    }

    if (
      r.includes("startup") ||
      r.includes("business") ||
      r.includes("founder")
    ) {
      return "Business";
    }

    if (
      r.includes("finance") ||
      r.includes("investment")
    ) {
      return "Finance";
    }

    if (
      r.includes("legal") ||
      r.includes("law")
    ) {
      return "Legal";
    }

    if (
      r.includes("career") ||
      r.includes("mentor")
    ) {
      return "Career";
    }

    return "Technology";
  }

  const filtered = useMemo(() => {
    let results = data.filter((consultant) => {
      if (
        query &&
        !`${consultant.name} ${consultant.role}`
          .toLowerCase()
          .includes(query.toLowerCase())
      ) {
        return false;
      }

      if (
        category &&
        inferCategory(consultant.role) !== category
      ) {
        return false;
      }

      if (
        experience &&
        consultant.experience < experience
      ) {
        return false;
      }

      if (
        rating &&
        consultant.rating < rating
      ) {
        return false;
      }

      if (priceRange) {
        const [min, max] =
          priceRange.split("-").map(Number);

        if (
          consultant.price < min ||
          consultant.price > max
        ) {
          return false;
        }
      }

      return true;
    });

    switch (sortBy) {
      case "experience":
        results.sort(
          (a, b) =>
            b.experience - a.experience
        );
        break;

      case "price":
        results.sort(
          (a, b) => a.price - b.price
        );
        break;

      case "rating":
      default:
        results.sort(
          (a, b) => b.rating - a.rating
        );
    }

    return results;
  }, [
    data,
    query,
    category,
    experience,
    rating,
    priceRange,
    sortBy,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / PER_PAGE)
  );

  const pageData = filtered.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  return (
    <main className="min-h-screen bg-slate-950">
      <ConsultantsHero />

      <ConsultantStats />

      <ConsultantsSearch
        query={query}
        onQueryChange={(value) => {
          setQuery(value);
          setPage(1);
        }}
        category={category}
        onCategoryChange={(value) => {
          setCategory(value);
          setPage(1);
        }}
        experience={experience}
        onExperienceChange={(value) => {
          setExperience(value);
          setPage(1);
        }}
        rating={rating}
        onRatingChange={(value) => {
          setRating(value);
          setPage(1);
        }}
        priceRange={priceRange}
        onPriceRangeChange={(value) => {
          setPriceRange(value);
          setPage(1);
        }}
        sortBy={sortBy}
        onSortChange={(value) => {
          setSortBy(value);
          setPage(1);
        }}
      />

      <section className="bg-slate-950">
        <div className="mx-auto max-w-[1400px] px-6 py-10">
          {/* Results Header */}

          <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                {filtered.length} Consultant
                {filtered.length !== 1 ? "s" : ""}
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Verified professionals ready
                to help you
              </p>
            </div>

            <div
              className="
              rounded-full
              border
              border-emerald-500/20
              bg-emerald-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-emerald-300
              "
            >
              Verified Experts
            </div>
          </div>

          {/* Consultants Grid */}

          <ConsultantsGrid
            consultants={pageData}
          />

          {/* Pagination */}

          {totalPages > 1 && (
            <div className="mt-10">
              <ConsultantsPagination
                page={page}
                total={totalPages}
                onChange={setPage}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}