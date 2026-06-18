"use client";

import {
  Search,
  CalendarCheck,
  MessageSquareText,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Find The Right Expert",
    description:
      "Browse verified consultants across technology, business, finance, legal, and career domains.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Book A Consultation",
    description:
      "Choose your preferred expert, review their profile, and schedule a consultation that fits your needs.",
  },
  {
    icon: MessageSquareText,
    step: "03",
    title: "Get Expert Guidance",
    description:
      "Connect through chat or consultation sessions and receive actionable advice from experienced professionals.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-24">
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
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            Get Expert Advice In
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
              Three Simple Steps
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            ConsultEdge makes it easy to connect with
            industry professionals and get the guidance
            you need to move forward with confidence.
          </p>
        </div>

        {/* Steps */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="
                relative
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-8
                "
              >
                {/* Connection Line */}

                {index < steps.length - 1 && (
                  <div
                    className="
                    absolute
                    left-full
                    top-20
                    hidden
                    h-px
                    w-8
                    bg-white/10
                    lg:block
                    "
                  />
                )}

                {/* Step Number */}

                <span
                  className="
                  text-sm
                  font-medium
                  text-slate-500
                  "
                >
                  STEP {step.step}
                </span>

                {/* Icon */}

                <div
                  className="
                  mt-4
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

                {/* Content */}

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}