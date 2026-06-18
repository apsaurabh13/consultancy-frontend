"use client";

import {
  ShieldCheck,
  Wallet,
  Zap,
  BadgeCheck,
  Clock3,
  CreditCard,
} from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Pay Only For Usage",
    description:
      "No subscriptions or monthly commitments. Pay only for the consultation time you use.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description:
      "Know consultant rates upfront before starting any consultation.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Experts",
    description:
      "Connect with trusted professionals across multiple industries.",
  },
  {
    icon: Zap,
    title: "Instant Access",
    description:
      "Get expert guidance quickly without long waiting periods.",
  },
  {
    icon: Clock3,
    title: "Flexible Consultations",
    description:
      "Consult for a few minutes or longer based on your requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "Protected wallet transactions and secure payment processing.",
  },
];

export function PricingBenefits() {
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
            Why Choose ConsultEdge
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Built For Simple &
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
              Transparent Consulting
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            Everything you need to connect with experts
            confidently and efficiently.
          </p>
        </div>

        {/* Benefits Grid */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-6
                transition-colors
                duration-200
                hover:border-white/20
                "
              >
                <div
                  className="
                  flex
                  h-12
                  w-12
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

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Bar */}

        <div
          className="
          mt-14
          rounded-3xl
          border
          border-white/10
          bg-white/[0.02]
          px-6
          py-5
          "
        >
          <div
            className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
            text-sm
            text-slate-400
            "
          >
            <span>✓ No Subscription Fees</span>
            <span>✓ Verified Consultants</span>
            <span>✓ Secure Payments</span>
            <span>✓ Transparent Pricing</span>
            <span>✓ Instant Access</span>
          </div>
        </div>
      </div>
    </section>
  );
}