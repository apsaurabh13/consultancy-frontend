"use client";

import {
  User,
  Briefcase,
  Code2,
  Settings,
} from "lucide-react";

const team = [
  {
    name: "Saurabh Pandey",
    role: "Founder & Product Lead",
    icon: User,
  },
  {
    name: "Product Team",
    role: "User Experience & Strategy",
    icon: Briefcase,
  },
  {
    name: "Engineering Team",
    role: "Platform Development",
    icon: Code2,
  },
  {
    name: "Operations Team",
    role: "Support & Growth",
    icon: Settings,
  },
];

export function TeamPreview() {
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
            Our Team
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            The People Behind
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
              ConsultEdge
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            A passionate team focused on building a trusted
            platform that connects people with the expertise
            they need to succeed.
          </p>
        </div>

        {/* Team Grid */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => {
            const Icon = member.icon;

            return (
              <div
                key={member.role}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-8
                text-center
                transition-colors
                hover:border-white/20
                "
              >
                {/* Avatar */}

                <div
                  className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-r
                  from-violet-600
                  via-blue-600
                  to-cyan-500
                  "
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Info */}

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {member.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}