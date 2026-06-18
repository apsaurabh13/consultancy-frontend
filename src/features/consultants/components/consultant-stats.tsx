"use client";

import {
  BriefcaseBusiness,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Experts",
  },
  {
    icon: BriefcaseBusiness,
    value: "25K+",
    label: "Consultations",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Success Rate",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
  },
];

export function ConsultantStats() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-6
                  transition-colors
                  hover:border-white/20
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/[0.04]
                    "
                  >
                    <Icon className="h-5 w-5 text-slate-300" />
                  </div>

                  <span className="text-sm text-slate-400">
                    {item.label}
                  </span>
                </div>

                <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {item.value}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}