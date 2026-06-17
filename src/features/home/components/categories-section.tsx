"use client";

import { memo, useMemo } from "react";
import { Briefcase, Code2, Globe2, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

const categories = [
  { icon: Globe2, label: "Global Strategy", count: 92 },
  { icon: Code2, label: "Tech & Engineering", count: 76 },
  { icon: Briefcase, label: "Business Growth", count: 84 },
  { icon: TrendingUp, label: "Marketing Performance", count: 68 },
  { icon: ShieldCheck, label: "Risk & Compliance", count: 51 },
  { icon: Sparkles, label: "Talent & Career", count: 59 },
];

export const CategoriesSection = memo(function CategoriesSection() {
  const items = useMemo(() => categories, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.08),transparent_30%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.1),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">Consulting domains</span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">Explore expert categories built for your business needs.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Browse reliable expertise in every key area of modern advisory and operations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.label} className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-slate-950/10 transition duration-300 hover:-translate-y-1 hover:border-violet-500/20 hover:bg-white/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/10">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{item.label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.count}+ consultants ready to support your project.</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
});
