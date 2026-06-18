"use client";

import {
  Wallet,
  Clock3,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function ConsultantPricing() {
  return (
    <section
      className="
      lg:sticky
      lg:top-24
      "
    >
      <div
        className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        "
      >
        {/* Header */}

        <div
          className="
          border-b
          border-white/10
          p-6
          "
        >
          <p className="text-sm text-slate-400">
            Consultation Rate
          </p>

          <div className="mt-3 flex items-end gap-2">
            <h2
              className="
              bg-gradient-to-r
              from-violet-400
              via-blue-400
              to-cyan-400
              bg-clip-text
              text-5xl
              font-bold
              text-transparent
              "
            >
              ₹20
            </h2>

            <span className="pb-2 text-slate-400">
              / minute
            </span>
          </div>

          <p className="mt-3 text-sm text-slate-400">
            Pay only for the consultation time you use.
          </p>
        </div>

        {/* Stats */}

        <div className="space-y-4 p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">
              Experience
            </span>

            <span className="font-medium text-white">
              8+ Years
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">
              Rating
            </span>

            <span className="font-medium text-white">
              4.9 ★
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">
              Consultations
            </span>

            <span className="font-medium text-white">
              1,200+
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">
              Response Time
            </span>

            <span className="font-medium text-white">
              15 mins
            </span>
          </div>
        </div>

        {/* Features */}

        <div
          className="
          border-y
          border-white/10
          p-6
          "
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Wallet className="h-4 w-4 text-cyan-400" />

              <span className="text-sm text-slate-300">
                Wallet-based payments
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Clock3 className="h-4 w-4 text-cyan-400" />

              <span className="text-sm text-slate-300">
                Real-time consultation billing
              </span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="h-4 w-4 text-cyan-400" />

              <span className="text-sm text-slate-300">
                Secure transactions
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}

        <div className="p-6">
          <Button
            className="
            h-12
            w-full
            rounded-xl
            bg-gradient-to-r
            from-violet-600
            via-blue-600
            to-cyan-500
            text-white
            "
          >
            Book Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="
            mt-3
            h-12
            w-full
            rounded-xl
            border-white/10
            bg-white/[0.02]
            text-white
            hover:bg-white/[0.05]
            "
          >
            Add To Favorites
          </Button>
        </div>

        {/* Footer */}

        <div
          className="
          border-t
          border-white/10
          bg-cyan-500/5
          p-4
          text-center
          "
        >
          <p className="text-xs text-slate-400">
            You'll see total consultation cost before
            starting a session.
          </p>
        </div>
      </div>
    </section>
  );
}