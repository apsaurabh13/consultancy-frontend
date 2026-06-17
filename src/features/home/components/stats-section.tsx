"use client";

import { memo, useMemo } from "react";
import { BriefcaseBusiness, Star, TrendingUp, Users } from "lucide-react";

const stats = [
  { value: "25K+", label: "Consultations", icon: BriefcaseBusiness, detail: "Across growth, product, and finance." },
  { value: "500+", label: "Verified Experts", icon: Users, detail: "Top-rated consultants across industries." },
  { value: "98%", label: "Success Rate", icon: TrendingUp, detail: "Meaningful outcomes for every session." },
  { value: "4.9★", label: "Average Rating", icon: Star, detail: "Trusted by professionals worldwide." },
];

export const StatsSection = memo(function StatsSection() {
  const items = useMemo(() => stats, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),transparent_22%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">Platform metrics</span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">Numbers that prove our consultancy quality.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Data-driven advisory delivered with premium experience and trusted outcomes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.label} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-violet-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <div className="relative flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="mt-3 text-4xl font-black text-white">{item.value}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-6 text-slate-300">{item.detail}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-20 rounded-[2.5rem] border border-white/10 bg-slate-900/70 p-10 text-center shadow-2xl shadow-slate-950/20">
          <h3 className="text-3xl font-bold text-white">Helping professionals make better decisions.</h3>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-400">
            Whether you're building a startup, scaling a team, or planning your next move, the right consultant makes the path clear.
          </p>
        </div>
      </div>
    </section>
  );
});
