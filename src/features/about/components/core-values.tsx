"use client";

import {
  ShieldCheck,
  Eye,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "We build confidence through verified experts, secure consultations, and reliable interactions.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear pricing, honest communication, and transparent processes at every step.",
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    description:
      "We focus on connecting users with experienced professionals who deliver meaningful guidance.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Empowering individuals, startups, and businesses to make better decisions and achieve success.",
  },
];

export function CoreValues() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            text-sm
            text-slate-300
            "
          >
            Our Values
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            Principles That Drive
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
              Everything We Build
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            At ConsultEdge, our values guide every interaction,
            helping us create a platform built on trust,
            transparency, and long-term impact.
          </p>
        </div>

        {/* Values Grid */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-8
                transition-all
                duration-300
                hover:border-white/20
                "
              >
                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-violet-600
                  via-blue-600
                  to-cyan-500
                  "
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}