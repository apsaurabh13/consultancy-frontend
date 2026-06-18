"use client";

import { memo } from "react";
import { Search } from "lucide-react";

type Props = {
  query: string;
  onQueryChange: (v: string) => void;

  category: string | null;
  onCategoryChange: (v: string | null) => void;

  experience: number | null;
  onExperienceChange: (v: number | null) => void;

  rating: number | null;
  onRatingChange: (v: number | null) => void;

  priceRange: string | null;
  onPriceRangeChange: (v: string | null) => void;

  sortBy: string;
  onSortChange: (v: string) => void;
};

export const ConsultantsSearch = memo(
  function ConsultantsSearch({
    query,
    onQueryChange,

    category,
    onCategoryChange,

    experience,
    onExperienceChange,

    rating,
    onRatingChange,

    priceRange,
    onPriceRangeChange,

    sortBy,
    onSortChange,
  }: Props) {
    return (
      <section className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto max-w-[1400px] px-6 py-8">
          {/* Search */}

          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

            <input
              value={query}
              onChange={(e) =>
                onQueryChange(e.target.value)
              }
              placeholder="Search consultants, expertise or skills..."
              className="
              h-12
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/[0.02]
              pl-11
              pr-4
              text-white
              outline-none
              placeholder:text-slate-500
              "
            />
          </div>

          {/* Filters */}

          <div className="mt-4 flex flex-wrap gap-3">
            <select
              value={category ?? ""}
              onChange={(e) =>
                onCategoryChange(
                  e.target.value || null
                )
              }
              className="h-10 rounded-xl border border-white/10 bg-white/[0.02] px-4 text-sm text-white"
            >
              <option value="">
                Category
              </option>

              <option value="Technology">
                Technology
              </option>

              <option value="Business">
                Business
              </option>

              <option value="Finance">
                Finance
              </option>

              <option value="Legal">
                Legal
              </option>

              <option value="Career">
                Career
              </option>
            </select>

            <select
              value={experience ?? ""}
              onChange={(e) =>
                onExperienceChange(
                  e.target.value
                    ? Number(e.target.value)
                    : null
                )
              }
              className="h-10 rounded-xl border border-white/10 bg-white/[0.02] px-4 text-sm text-white"
            >
              <option value="">
                Experience
              </option>

              <option value="1">
                1+ Years
              </option>

              <option value="3">
                3+ Years
              </option>

              <option value="5">
                5+ Years
              </option>

              <option value="10">
                10+ Years
              </option>
            </select>

            <select
              value={rating ?? ""}
              onChange={(e) =>
                onRatingChange(
                  e.target.value
                    ? Number(e.target.value)
                    : null
                )
              }
              className="h-10 rounded-xl border border-white/10 bg-white/[0.02] px-4 text-sm text-white"
            >
              <option value="">
                Rating
              </option>

              <option value="4">
                4.0+
              </option>

              <option value="4.5">
                4.5+
              </option>

              <option value="4.8">
                4.8+
              </option>
            </select>

            <select
              value={priceRange ?? ""}
              onChange={(e) =>
                onPriceRangeChange(
                  e.target.value || null
                )
              }
              className="h-10 rounded-xl border border-white/10 bg-white/[0.02] px-4 text-sm text-white"
            >
              <option value="">
                Price
              </option>

              <option value="0-10">
                ₹0-₹10
              </option>

              <option value="10-20">
                ₹10-₹20
              </option>

              <option value="20-50">
                ₹20-₹50
              </option>
            </select>

            <select
              value={sortBy}
              onChange={(e) =>
                onSortChange(
                  e.target.value
                )
              }
              className="h-10 rounded-xl border border-white/10 bg-white/[0.02] px-4 text-sm text-white"
            >
              <option value="rating">
                Highest Rated
              </option>

              <option value="experience">
                Most Experienced
              </option>

              <option value="price">
                Lowest Price
              </option>
            </select>
          </div>
        </div>
      </section>
    );
  }
);