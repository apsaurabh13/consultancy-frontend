"use client";

import { memo } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

import type { Consultant } from "@/features/consultants/types/consultant";
import { ConsultantCard } from "./consultant-card";

type Props = {
  consultants: Consultant[];
};

export const ConsultantsGrid = memo(function ConsultantsGrid({
  consultants,
}: Props) {
  if (consultants.length === 0) {
    return (
      <div className="flex min-h-[320px] items-center justify-center">
        <div className="text-center">
          <div
            className="
            mx-auto
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/[0.02]
            "
          >
            <Search className="h-5 w-5 text-slate-400" />
          </div>

          <h3 className="mt-5 text-xl font-semibold text-white">
            No consultants found
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Try adjusting your search or filters.
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      grid
      grid-cols-1
      gap-5
      sm:grid-cols-2
      xl:grid-cols-3
      "
    >
      {consultants.map((consultant) => (
        <ConsultantCard
          key={consultant.id}
          consultant={consultant}
        />
      ))}
    </motion.div>
  );
});