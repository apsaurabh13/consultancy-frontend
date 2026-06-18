"use client";

import {
  MapPin,
  Clock3,
  Mail,
  Phone,
} from "lucide-react";

const info = [
  {
    icon: MapPin,
    title: "Location",
    value: "India (Remote First)",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon - Fri • 9:00 AM - 6:00 PM",
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@consultedge.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 XXXXX XXXXX",
  },
];

export function OfficeInfo() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_500px] lg:items-center">
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
              Office Information
            </span>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              We're Always Ready
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
                To Help You
              </span>
            </h2>

            <p
              className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-400
              sm:text-lg
              "
            >
              Whether you have questions about consultations,
              partnerships, consultant onboarding, or platform
              support, our team is available to assist you.
            </p>
          </div>

          {/* Info Cards */}

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-6
            sm:p-8
            "
          >
            <div className="space-y-5">
              {info.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-4
                    "
                  >
                    <div
                      className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-r
                      from-violet-600
                      via-blue-600
                      to-cyan-500
                      "
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <h3 className="font-medium text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Extra Note */}

            <div
              className="
              mt-6
              rounded-2xl
              border
              border-cyan-500/20
              bg-cyan-500/5
              p-4
              "
            >
              <p className="text-sm text-slate-300">
                We typically respond to all inquiries within
                <span className="font-semibold text-cyan-400">
                  {" "}
                  24 hours
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}