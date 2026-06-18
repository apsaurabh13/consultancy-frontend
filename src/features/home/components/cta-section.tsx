"use client";

import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CtaSection = memo(function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),transparent_25%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-slate-900/70 p-10 shadow-2xl shadow-slate-950/40 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Ready to accelerate?</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Book your first expert session and start making stronger decisions.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Gain instant access to consultants who understand your industry, your challenges, and your next growth move.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <Button className="inline-flex items-center justify-center gap-2 rounded-3xl bg-white px-8 py-4 text-black font-semibold shadow-xl shadow-slate-950/20 transition duration-300 hover:scale-[1.02]">
              Start Consultation
              <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="text-sm text-slate-400">No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
});
