"use client";

import { Wallet, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    title: "Starter",
    amount: "₹500",
    description:
      "Perfect for quick consultations and first-time users.",
  },
  {
    title: "Popular",
    amount: "₹1,000",
    description:
      "Ideal for multiple expert sessions and ongoing guidance.",
    featured: true,
  },
  {
    title: "Professional",
    amount: "₹2,500",
    description:
      "Best for startups, professionals, and long-term consulting.",
  },
  {
    title: "Enterprise",
    amount: "₹5,000",
    description:
      "Designed for teams and businesses needing frequent advice.",
  },
];

export function WalletPackages() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
            inline-flex
            items-center
            gap-2
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
            <Wallet className="h-4 w-4 text-cyan-400" />
            Wallet Packages
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Add Credits &
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
              Start Consulting
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            Choose a wallet balance that fits your needs.
            Use credits across any consultant on the platform.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`
                relative
                rounded-3xl
                border
                p-8
                transition-all
                duration-200

                ${
                  pkg.featured
                    ? `
                    border-cyan-500/30
                    bg-gradient-to-b
                    from-cyan-500/10
                    to-white/[0.02]
                    `
                    : `
                    border-white/10
                    bg-white/[0.02]
                    `
                }
              `}
            >
              {/* Popular Badge */}

              {pkg.featured && (
                <div
                  className="
                  absolute
                  -top-3
                  left-1/2
                  -translate-x-1/2
                  rounded-full
                  bg-gradient-to-r
                  from-violet-600
                  via-blue-600
                  to-cyan-500
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-white
                  "
                >
                  Most Popular
                </div>
              )}

              <div className="mt-2">
                <h3 className="text-xl font-semibold text-white">
                  {pkg.title}
                </h3>

                <p
                  className="
                  mt-4
                  bg-gradient-to-r
                  from-violet-400
                  via-blue-400
                  to-cyan-400
                  bg-clip-text
                  text-5xl
                  font-bold
                  text-transparent
                  "
                >
                  {pkg.amount}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {pkg.description}
                </p>
              </div>

              {/* Features */}

              <ul className="mt-8 space-y-3">
                <li className="text-sm text-slate-300">
                  ✓ Use with any consultant
                </li>

                <li className="text-sm text-slate-300">
                  ✓ No expiry
                </li>

                <li className="text-sm text-slate-300">
                  ✓ Secure payments
                </li>

                <li className="text-sm text-slate-300">
                  ✓ Instant activation
                </li>
              </ul>

              {/* CTA */}

              <Button
                className={`
                  mt-8
                  h-11
                  w-full
                  rounded-xl

                  ${
                    pkg.featured
                      ? `
                      bg-gradient-to-r
                      from-violet-600
                      via-blue-600
                      to-cyan-500
                      text-white
                      `
                      : `
                      bg-white/[0.04]
                      text-white
                      hover:bg-white/[0.08]
                      `
                  }
                `}
              >
                Add Funds
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}