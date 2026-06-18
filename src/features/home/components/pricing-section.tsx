"use client";

import { memo, useMemo } from "react";
import { Button } from "@/components/ui/button";

const plans = [
  { name: "Basic", price: "$39", features: ["3 sessions / month", "Access to expert network", "Email follow-up support"], highlight: false },
  { name: "Pro", price: "$59", features: ["6 sessions / month", "Priority scheduling", "Strategy review reports"], highlight: true },
  { name: "Enterprise", price: "$79", features: ["Unlimited consultations", "Dedicated advisor", "Custom growth roadmap"], highlight: false },
];

export const PricingSection = memo(function PricingSection() {
  const items = useMemo(() => plans, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.08),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">Pricing plans</span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">Flexible plans for every stage of growth.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Choose the plan that fits your advisory needs, whether you're starting fresh or scaling across teams.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((plan) => (
            <div key={plan.name} className={`rounded-[2rem] border border-white/10 p-8 transition duration-300 ${plan.highlight ? "bg-slate-900/70 shadow-2xl shadow-cyan-500/10" : "bg-slate-900/70 hover:border-violet-500/20 hover:bg-white/5"}`}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{plan.name} plan</p>
                  <p className="mt-4 text-5xl font-black text-white">{plan.price}</p>
                </div>
                {plan.highlight ? <span className="rounded-full bg-cyan-500/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">Best value</span> : null}
              </div>

              <ul className="mt-8 space-y-4 text-sm text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="mt-10 w-full justify-center rounded-3xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 text-white shadow-xl shadow-cyan-500/20 hover:shadow-violet-500/30">
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
