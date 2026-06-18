"use client";

import { memo, useMemo } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { consultants } from "@/mocks/consultants";

export const FeaturedConsultants = memo(function FeaturedConsultants() {
  const cards = useMemo(
    () => consultants.map((consultant) => ({
      ...consultant,
      label: consultant.role,
      capacity: "Available now",
    })),
    []
  );

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),transparent_22%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">Featured experts</span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">Learn from the best consultants in the industry.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Browse verified consultants with proven track records across strategy, engineering, finance and growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((consultant) => (
            <article key={consultant.id} className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-violet-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 text-white shadow-lg shadow-slate-950/30">
                    <span className="text-2xl font-bold">{consultant.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{consultant.name}</h3>
                    <p className="text-sm text-slate-400">{consultant.role}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{consultant.experience} yrs experience</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Top rated</span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">
                    <p className="uppercase tracking-[0.3em] text-slate-500">Experience</p>
                    <p className="mt-3 text-lg font-semibold text-white">{consultant.experience} Years</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">
                    <p className="uppercase tracking-[0.3em] text-slate-500">Reviews</p>
                    <p className="mt-3 text-lg font-semibold text-white">120+</p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Rate</p>
                    <p className="mt-2 text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">₹{consultant.price}/min</p>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-slate-400" />
                </div>

                <button className="w-full rounded-3xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 px-5 py-4 text-sm font-semibold text-white transition duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  View Profile
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});
