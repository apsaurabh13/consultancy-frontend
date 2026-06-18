"use client";

import {
  ShieldCheck,
  BadgeCheck,
  Zap,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Experts",
    description:
      "Connect with carefully vetted professionals across technology, business, finance, legal, and career domains.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description:
      "Know exactly what you're paying before every consultation with clear and upfront pricing.",
  },
  {
    icon: Zap,
    title: "Instant Access",
    description:
      "Get expert guidance when you need it without lengthy scheduling or complicated processes.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Built with privacy, reliability, and trust at the core of every interaction.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

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
            Why ConsultEdge
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            Built For Trust,
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
              Quality & Growth
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            We make expert consultations simple, transparent,
            and accessible so you can focus on making better
            decisions with confidence.
          </p>
        </div>

        {/* Features Grid */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-8
                transition-colors
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
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}