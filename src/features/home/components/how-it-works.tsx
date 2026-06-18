"use client";

import { memo, useMemo } from "react";
import { CalendarDays, Search, Zap } from "lucide-react";

const steps = [
  { icon: Search, title: "Find the right expert", description: "Filter by industry, expertise, or outcome to connect with the exact consultant you need." },
  { icon: CalendarDays, title: "Schedule instantly", description: "Book sessions at your preferred time and sync with your workflow." },
  { icon: Zap, title: "Act with confidence", description: "Receive clear recommendations and follow-up actions from proven specialists." },
];

export const HowItWorks = memo(function HowItWorks() {
  const items = useMemo(() => steps, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.1),transparent_25%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.1),transparent_25%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">How it works</span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">Three steps to expert outcomes.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            A seamless experience from discovery and booking to debrief and impact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-slate-950/10 transition duration-300 hover:-translate-y-1 hover:border-violet-500/20 hover:bg-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
});
