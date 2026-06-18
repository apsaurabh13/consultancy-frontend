"use client";

import {
  Brain,
  Code2,
  Cloud,
  Database,
  Server,
  LayoutDashboard,
} from "lucide-react";

const expertise = [
  {
    title: "AI Engineering",
    icon: Brain,
  },
  {
    title: "FastAPI",
    icon: Server,
  },
  {
    title: "AWS Cloud",
    icon: Cloud,
  },
  {
    title: "System Design",
    icon: LayoutDashboard,
  },
  {
    title: "Python",
    icon: Code2,
  },
  {
    title: "PostgreSQL",
    icon: Database,
  },
];

export function ConsultantExpertise() {
  return (
    <section
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/[0.02]
      p-6
      sm:p-8
      "
    >
      {/* Header */}

      <div>
        <h2 className="text-2xl font-bold text-white">
          Expertise & Skills
        </h2>

        <p className="mt-2 text-sm leading-7 text-slate-400">
          Areas where this consultant provides guidance,
          mentorship, and professional consulting.
        </p>
      </div>

      {/* Skills Grid */}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/[0.02]
              p-4
              transition-all
              duration-200
              hover:border-cyan-500/20
              hover:bg-white/[0.03]
              "
            >
              <div
                className="
                flex
                h-12
                w-12
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

                <p className="mt-1 text-xs text-slate-500">
                  Expert Level
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Tags */}

      <div className="mt-8">
        <h3 className="text-sm font-medium text-slate-300">
          Additional Skills
        </h3>

        <div className="mt-4 flex flex-wrap gap-3">
          {[
            "Gen AI",
            "OpenAI",
            "Docker",
            "Kubernetes",
            "Microservices",
            "Architecture",
            "Backend Development",
            "API Design",
            "Cloud Migration",
            "Career Mentoring",
          ].map((skill) => (
            <span
              key={skill}
              className="
              rounded-full
              border
              border-white/10
              bg-white/[0.02]
              px-4
              py-2
              text-sm
              text-slate-300
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}