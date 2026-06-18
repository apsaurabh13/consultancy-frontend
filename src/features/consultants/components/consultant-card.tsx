"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  MessageSquare,
  Star,
  BadgeCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Consultant } from "@/features/consultants/types/consultant";

type Props = {
  consultant: Consultant;
};

export const ConsultantCard = memo(
  function ConsultantCard({
    consultant,
  }: Props) {
    const reviews = Math.round(
      consultant.rating * 42
    );

    const sessions =
      consultant.experience * 180;

    return (
      <motion.article
        whileHover={{
          y: -4,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900/60
        backdrop-blur-sm
        "
      >
        {/* Cover */}

        <div className="relative h-32 overflow-hidden">
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-r
            from-violet-600
            via-blue-600
            to-cyan-500
            "
          />

          <div className="absolute inset-0 bg-black/15" />

          <div className="absolute right-4 top-4">
            <span
              className="
              rounded-full
              border
              border-white/20
              bg-white/10
              px-3
              py-1
              text-xs
              font-medium
              text-white
              backdrop-blur-sm
              "
            >
              Verified
            </span>
          </div>
        </div>

        {/* Avatar */}

        <div className="relative px-6">
          <div
            className="
            absolute
            -top-10
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-2xl
            border-4
            border-slate-950
            bg-gradient-to-r
            from-violet-600
            via-blue-600
            to-cyan-500
            text-2xl
            font-bold
            text-white
            shadow-xl
            "
          >
            {consultant.name.charAt(0)}
          </div>
        </div>

        {/* Content */}

        <div className="px-6 pb-6 pt-14">
          {/* Name */}

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-white">
                {consultant.name}
              </h3>

              <BadgeCheck className="h-4 w-4 text-cyan-400" />
            </div>

            <p className="mt-1 text-sm text-slate-400">
              {consultant.role}
            </p>
          </div>

          {/* Status */}

          <div className="mt-4 flex items-center gap-2">
            <span
              className="
              h-2
              w-2
              rounded-full
              bg-emerald-400
              "
            />

            <span className="text-xs text-slate-400">
              Available now
            </span>
          </div>

          {/* Metrics */}

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.02]
              p-4
              "
            >
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                <span className="font-medium text-white">
                  {consultant.rating}
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-500">
                {reviews} reviews
              </p>
            </div>

            <div
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.02]
              p-4
              "
            >
              <div className="flex items-center gap-2">
                <BriefcaseBusiness className="h-4 w-4 text-slate-400" />

                <span className="font-medium text-white">
                  {consultant.experience}y
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Experience
              </p>
            </div>

            <div
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.02]
              p-4
              "
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-slate-400" />

                <span className="font-medium text-white">
                  {sessions}+
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Sessions
              </p>
            </div>

            <div
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.02]
              p-4
              "
            >
              <div className="font-medium text-white">
                98%
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Success Rate
              </p>
            </div>
          </div>

          {/* Expertise */}

          <div className="mt-6 flex flex-wrap gap-2">
            <span
              className="
              rounded-full
              border
              border-white/10
              px-3
              py-1
              text-xs
              text-slate-300
              "
            >
              Technology
            </span>

            <span
              className="
              rounded-full
              border
              border-white/10
              px-3
              py-1
              text-xs
              text-slate-300
              "
            >
              Consulting
            </span>

            <span
              className="
              rounded-full
              border
              border-white/10
              px-3
              py-1
              text-xs
              text-slate-300
              "
            >
              Strategy
            </span>
          </div>

          {/* Price */}

          <div className="mt-6 border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Consultation Fee
            </p>

            <div className="mt-2 flex items-end gap-1">
              <span className="text-3xl font-semibold text-white">
                ₹{consultant.price}
              </span>

              <span className="pb-1 text-sm text-slate-400">
                /minute
              </span>
            </div>
          </div>

          {/* CTA */}

          <div className="mt-6 flex gap-3">
            <Button
              variant="outline"
              className="
              flex-1
              border-white/10
              bg-transparent
              text-white
              hover:bg-white/5
              "
            >
              Profile
            </Button>

            <Button
              className="
              flex-1
              bg-gradient-to-r
              from-violet-600
              via-blue-600
              to-cyan-500
              text-white
              hover:opacity-90
              "
            >
              Book Now

              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.article>
    );
  }
);