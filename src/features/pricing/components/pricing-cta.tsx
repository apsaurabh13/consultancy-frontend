"use client";

import Link from "next/link";
import { ArrowRight, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PricingCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          px-6
          py-12
          sm:px-10
          sm:py-16
          lg:px-16
          "
        >
          {/* Background Glow */}

          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-600/10 blur-[120px]" />

          <div className="relative text-center">
            {/* Badge */}

            <div
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-2
              text-sm
              text-slate-300
              "
            >
              <Wallet className="h-4 w-4 text-cyan-400" />
              Start Consulting Today
            </div>

            {/* Heading */}

            <h2
              className="
              mx-auto
              mt-6
              max-w-3xl
              text-3xl
              font-bold
              text-white
              sm:text-4xl
              lg:text-5xl
              "
            >
              Ready To Get
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
                Expert Advice?
              </span>
            </h2>

            {/* Description */}

            <p
              className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-400
              sm:text-lg
              "
            >
              Add wallet credits, connect with verified
              consultants, and pay only for the time you use.
              No subscriptions. No hidden fees.
            </p>

            {/* Buttons */}

            <div
              className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
              "
            >
              <Button
                
                className="
                h-12
                w-full
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                via-blue-600
                to-cyan-500
                px-6
                text-white
                transition-transform
                duration-200
                hover:scale-[1.02]
                sm:w-auto
                "
              >
                <Link href="/consultants">
                  Browse Experts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
               
                variant="outline"
                className="
                h-12
                w-full
                rounded-xl
                border-white/10
                bg-white/[0.02]
                px-6
                text-white
                transition-colors
                hover:bg-white/[0.05]
                sm:w-auto
                "
              >
                <Link href="/wallet">
                  Add Wallet Balance
                </Link>
              </Button>
            </div>

            {/* Trust Stats */}

            <div
              className="
              mt-10
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
              text-sm
              text-slate-500
              "
            >
              <span>500+ Experts</span>
              <span className="hidden sm:block">•</span>

              <span>25K+ Consultations</span>
              <span className="hidden sm:block">•</span>

              <span>98% Success Rate</span>
              <span className="hidden sm:block">•</span>

              <span>4.9★ Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}