"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroHighlights = [
  { label: "Verified Experts", value: "500+" },
  { label: "Trusted Consultations", value: "25K+" },
  { label: "Average Rating", value: "4.9★" },
];

const heroBadges = [
  { label: "70% faster decisions", description: "Quick advice from top consultants." },
  { label: "Secure sessions", description: "Private expert consultations every time." },
];

export const HeroSection = memo(function HeroSection() {
  const highlights = useMemo(() => heroHighlights, []);
  const badges = useMemo(() => heroBadges, []);

  return (
    <section className="relative overflow-hidden bg-slate-950/90 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.16),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.16),transparent_20%),linear-gradient(180deg,#02040b_0%,#07101f_100%)]" />
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-sm shadow-slate-950/20 backdrop-blur-xl">
              <Star className="h-4 w-4 text-amber-300" />
              Trusted by growth teams globally
            </div>

            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">ConsultEdge · Expert consultations · Scalable guidance</p>
              <h1 className="max-w-3xl text-5xl font-black tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
                Connect with industry leaders for <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">smarter business decisions</span>.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Build momentum with curated expertise across technology, finance, marketing, and operations, all in one polished consultancy platform.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="h-14 rounded-2xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 text-white shadow-xl shadow-cyan-500/20 hover:shadow-violet-500/30">
                Find Consultants
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="h-14 rounded-2xl border-white/20 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10">
                Become Consultant
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-sm shadow-slate-950/20 backdrop-blur-xl">
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-2xl">
              <div className="flex items-center justify-between gap-4 rounded-3xl bg-slate-900/80 p-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Consultation snapshot</p>
                  <p className="mt-2 text-xl font-semibold text-white">High-value advisory briefing</p>
                </div>
                <div className="rounded-2xl bg-slate-800/90 px-4 py-3 text-xs uppercase tracking-[0.35em] text-cyan-300/80">Live now</div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {badges.map((badge) => (
                  <div key={badge.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{badge.label}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{badge.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[2rem] bg-gradient-to-br from-violet-600/20 via-blue-600/15 to-cyan-500/15 p-6">
                <div className="flex items-center justify-between gap-4 text-sm text-slate-300">
                  <p>Customer journey score</p>
                  <p className="font-semibold text-white">97%</p>
                </div>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-900">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-violet-500 via-blue-400 to-cyan-400 shadow-lg shadow-cyan-500/20" />
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -left-8 -top-10 hidden h-32 w-32 rounded-full bg-violet-500/10 blur-3xl xl:block" />
            <div className="pointer-events-none absolute -right-8 -bottom-10 hidden h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl xl:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
});
