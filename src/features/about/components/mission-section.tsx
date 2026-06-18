"use client";

import { Target, ShieldCheck, Users } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Purpose Driven",
    description:
      "Helping individuals and businesses make better decisions through expert guidance.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Experts",
    description:
      "Every consultant is verified to ensure quality, credibility, and professionalism.",
  },
  {
    icon: Users,
    title: "Accessible Knowledge",
    description:
      "Connecting people with industry experts regardless of location or background.",
  },
];

export function MissionSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}

          <div>
            <span
              className="
              inline-flex
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
              Our Mission
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
              Making Expert Advice
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
                Accessible To Everyone
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              At ConsultEdge, we believe that access to expert
              knowledge should not be limited by geography,
              network, or opportunity.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-400">
              Our mission is to connect individuals, startups,
              and businesses with trusted professionals who can
              provide clarity, direction, and confidence for
              important decisions.
            </p>
          </div>

          {/* Right Content */}

          <div className="space-y-5">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-6
                  "
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-r
                      from-violet-600
                      via-blue-600
                      to-cyan-500
                      "
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}