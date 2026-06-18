"use client";

import {
  BriefcaseBusiness,
  LifeBuoy,
  Handshake,
} from "lucide-react";

const options = [
  {
    icon: BriefcaseBusiness,
    title: "Sales",
    description:
      "Talk to our team about enterprise solutions, business consultations, and platform offerings.",
    contact: "sales@consultedge.com",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description:
      "Need help with your account, bookings, or platform issues? We're here to assist.",
    contact: "support@consultedge.com",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description:
      "Explore strategic partnerships, consultant onboarding, and collaboration opportunities.",
    contact: "partners@consultedge.com",
  },
];

export function ContactOptions() {
  return (
    <section className="py-20">
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
            Contact Channels
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Reach The Right Team
          </h2>

          <p className="mt-4 text-slate-400">
            Choose the department that best matches your inquiry.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {options.map((option) => {
            const Icon = option.icon;

            return (
              <div
                key={option.title}
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

                {/* Content */}

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {option.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {option.description}
                </p>

                {/* Contact */}

                <div
                  className="
                  mt-6
                  rounded-xl
                  border
                  border-white/10
                  bg-slate-900/40
                  px-4
                  py-3
                  "
                >
                  <p className="text-sm font-medium text-cyan-400">
                    {option.contact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}