"use client";

import {
  Wallet,
  UserCheck,
  MessageSquare,
  CreditCard,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Add Wallet Balance",
    description:
      "Top up your wallet with credits and get ready to connect with experts.",
  },
  {
    icon: UserCheck,
    title: "Choose An Expert",
    description:
      "Browse verified consultants and select the professional that matches your needs.",
  },
  {
    icon: MessageSquare,
    title: "Start Consultation",
    description:
      "Begin chatting or consulting directly through the ConsultEdge platform.",
  },
  {
    icon: CreditCard,
    title: "Pay Per Minute",
    description:
      "Charges are deducted based on the consultant's rate and consultation duration.",
  },
];

export function HowPricingWorks() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
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
            How Pricing Works
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            A Simple &
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
              Transparent Process
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            No subscriptions. No hidden fees. Just add funds,
            connect with experts, and pay only for the advice
            you receive.
          </p>
        </div>

        {/* Steps */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                p-6
                "
              >
                {/* Arrow */}

                {index < steps.length - 1 && (
                  <div
                    className="
                    absolute
                    -right-4
                    top-1/2
                    hidden
                    -translate-y-1/2
                    xl:flex
                    "
                  >
                    <ArrowRight className="h-5 w-5 text-slate-600" />
                  </div>
                )}

                {/* Step Number */}

                <span className="text-sm font-medium text-cyan-400">
                  Step {index + 1}
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

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}

        <div
          className="
          mt-12
          rounded-3xl
          border
          border-cyan-500/20
          bg-cyan-500/5
          p-5
          text-center
          "
        >
          <p className="text-sm text-slate-300">
            Wallet balance can be used across all consultants,
            and you'll always see the consultant's rate before
            starting a session.
          </p>
        </div>
      </div>
    </section>
  );
}