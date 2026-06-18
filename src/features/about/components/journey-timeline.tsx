"use client";

import {
  Lightbulb,
  Rocket,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";

const timeline = [
  {
    year: "2026",
    title: "The Idea",
    description:
      "ConsultEdge started with a vision to make expert guidance accessible to everyone.",
    icon: Lightbulb,
  },
  {
    year: "2026",
    title: "Platform Development",
    description:
      "Built the foundation of a secure and scalable consultation platform.",
    icon: Rocket,
  },
  {
    year: "2026",
    title: "Expert Network",
    description:
      "Onboarded professionals across technology, business, finance, and career domains.",
    icon: Users,
  },
  {
    year: "2027",
    title: "Global Expansion",
    description:
      "Expanding access to trusted expert consultations worldwide.",
    icon: Globe,
  },
];

export function JourneyTimeline() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
            inline-flex
            items-center
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
            Our Journey
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Building The Future Of
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
              Expert Consultations
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            Every milestone moves us closer to making
            professional expertise more accessible,
            transparent, and impactful.
          </p>
        </div>

        {/* Timeline */}

        <div className="mt-16">
          <div
            className="
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-4
            "
          >
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                  relative
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-6
                  backdrop-blur-sm
                  "
                >
                  {/* Arrow Desktop */}

                  {index !== timeline.length - 1 && (
                    <div
                      className="
                      absolute
                      -right-5
                      top-1/2
                      hidden
                      -translate-y-1/2
                      xl:flex
                      "
                    >
                      <ArrowRight className="h-5 w-5 text-slate-600" />
                    </div>
                  )}

                  {/* Icon */}

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

                  {/* Year */}

                  <p className="mt-5 text-sm font-medium text-cyan-400">
                    {item.year}
                  </p>

                  {/* Title */}

                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}