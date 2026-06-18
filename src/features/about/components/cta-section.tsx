"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.10),transparent_35%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          px-8
          py-16
          text-center
          backdrop-blur-sm
          sm:px-12
          "
        >
          {/* Glow */}

          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-600/10 blur-[120px]" />

          <div className="relative">
            {/* Badge */}

            <span
              className="
              inline-flex
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
              Start Your Journey Today
            </span>

            {/* Heading */}

            <h2
              className="
              mx-auto
              mt-6
              max-w-4xl
              text-4xl
              font-bold
              leading-tight
              text-white
              sm:text-5xl
              lg:text-6xl
              "
            >
              Connect With Experts Who Help You
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
                Make Better Decisions
              </span>
            </h2>

            {/* Description */}

            <p
              className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-400
              "
            >
              Access verified consultants across technology,
              business, finance, legal, and career domains.
              Get expert guidance tailored to your goals.
            </p>

            {/* Actions */}

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
                  Explore Consultants
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

            {/* Trust Indicators */}

            <div
              className="
              mt-12
              flex
              flex-wrap
              items-center
              justify-center
              gap-8
              border-t
              border-white/10
              pt-8
              text-sm
              text-slate-400
              "
            >
              <span>✓ 500+ Verified Experts</span>
              <span>✓ 25K+ Consultations</span>
              <span>✓ 98% Success Rate</span>
              <span>✓ 4.9★ Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}