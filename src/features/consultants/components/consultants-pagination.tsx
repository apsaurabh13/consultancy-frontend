"use client";

import { memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  page: number;
  total: number;
  onChange: (page: number) => void;
};

export const ConsultantsPagination = memo(
  function ConsultantsPagination({
    page,
    total,
    onChange,
  }: Props) {
    if (total <= 1) return null;

    const pages = Array.from(
      { length: total },
      (_, i) => i + 1
    );

    return (
      <nav
        aria-label="Pagination"
        className="mt-12 mb-20 flex items-center justify-center"
      >
        <div
          className="
          flex
          items-center
          gap-1
          rounded-2xl
          border
          border-white/10
          bg-white/[0.02]
          p-1
          "
        >
          {/* Previous */}
          <button
            onClick={() => onChange(page - 1)}
            disabled={page === 1}
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            text-slate-400
            transition-colors
            hover:bg-white/[0.04]
            hover:text-white
            disabled:pointer-events-none
            disabled:opacity-40
            "
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Pages */}
          {pages.map((p) => (
            <button
              key={p}
              onClick={() => onChange(p)}
              className={`
                h-10
                min-w-[40px]
                rounded-xl
                px-3
                text-sm
                font-medium
                transition-colors

                ${
                  p === page
                    ? "bg-white text-slate-950"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                }
              `}
            >
              {p}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => onChange(page + 1)}
            disabled={page === total}
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            text-slate-400
            transition-colors
            hover:bg-white/[0.04]
            hover:text-white
            disabled:pointer-events-none
            disabled:opacity-40
            "
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </nav>
    );
  }
);