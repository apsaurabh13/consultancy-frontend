"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.12),transparent_30%)]" />

      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}

          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            text-sm
            text-slate-300
            backdrop-blur-sm
            "
          >
            <BadgeCheck className="h-4 w-4 text-cyan-400" />

            Trusted by professionals worldwide
          </div>

          {/* Heading */}

          <h1
            className="
            mt-8
            text-5xl
            font-bold
            leading-tight
            tracking-tight
            text-white
            sm:text-6xl
            lg:text-7xl
            "
          >
            Building The Future Of
            <span
              className="
              block
              bg-gradient-to-r
              from-violet-400
              via-blue-400
              to-cyan-400
              bg-clip-text
              text-transparent
              "
            >
              Expert Consultations
            </span>
          </h1>

          {/* Description */}

          <p
            className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            leading-8
            text-slate-400
            sm:text-xl
            "
          >
            ConsultEdge connects individuals, startups, and
            businesses with verified experts across technology,
            business, finance, legal, and career domains through
            transparent, accessible, and high-quality consultations.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              
              className="
              h-12
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
              <Link href="/consultants">
                Explore Experts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              
              variant="outline"
              className="
              h-12
              rounded-xl
              border-white/10
              bg-white/[0.02]
              px-6
              text-white
              hover:bg-white/[0.04]
              "
            >
              <Link href="/register">
                Become A Consultant
              </Link>
            </Button>
          </div>

          {/* Stats */}

          <div
            className="
            mt-20
            grid
            grid-cols-2
            gap-6
            border-t
            border-white/10
            pt-10
            sm:grid-cols-4
            "
          >
            <div>
              <h3 className="text-3xl font-bold text-white">
                500+
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Verified Experts
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                25K+
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Consultations
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                98%
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Success Rate
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                4.9★
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Average Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}