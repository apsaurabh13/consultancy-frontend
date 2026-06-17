"use client";

import { memo } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const ConsultantsHero = memo(function ConsultantsHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />

      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-violet-600/8 blur-[120px]" />

      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-600/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}

          <div
            className="
            inline-flex
            items-center
            rounded-full
            border
            border-white/10
            bg-white/[0.02]
            px-4
            py-2
            text-sm
            text-slate-300
            "
          >
            500+ verified consultants
          </div>

          {/* Heading */}

          <h1
            className="
            mt-8
            text-5xl
            font-semibold
            tracking-tight
            text-white
            sm:text-6xl
            lg:text-7xl
            "
          >
            Find the right expert
            <span className="block">
              for your next decision
            </span>
          </h1>

          {/* Description */}

          <p
            className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-slate-400
            "
          >
            Connect with experienced professionals across
            technology, business, finance, legal and career
            consulting.
          </p>

          {/* CTA */}

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              className="
              h-11
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              via-blue-600
              to-cyan-500
              px-6
              text-white
              hover:opacity-90
              "
            >
              Browse Consultants

              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="
              h-11
              rounded-xl
              border-white/10
              bg-transparent
              text-slate-300
              hover:bg-white/[0.03]
              hover:text-white
              "
            >
              Become a Consultant
            </Button>
          </div>

          {/* Stats */}

          <div
            className="
            mt-20
            grid
            grid-cols-3
            gap-8
            border-t
            border-white/10
            pt-10
            "
          >
          
          </div>
        </div>
      </div>
    </section>
  );
});