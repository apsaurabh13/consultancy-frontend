"use client";

import {
  Briefcase,
  Building2,
  Calendar,
} from "lucide-react";

const experiences = [
  {
    company: "Google",
    role: "Senior AI Engineer",
    duration: "2023 - Present",
    description:
      "Leading AI infrastructure projects, building scalable machine learning systems and mentoring engineering teams.",
  },
  {
    company: "Amazon",
    role: "Cloud Solutions Architect",
    duration: "2020 - 2023",
    description:
      "Designed cloud-native architectures, optimized AWS workloads, and supported enterprise migrations.",
  },
  {
    company: "Infosys",
    role: "Software Engineer",
    duration: "2018 - 2020",
    description:
      "Developed backend services, APIs, and enterprise applications using modern engineering practices.",
  },
];

export function ConsultantExperience() {
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
          Professional Experience
        </h2>

        <p className="mt-2 text-sm leading-7 text-slate-400">
          A track record of delivering results across
          technology, cloud, and AI domains.
        </p>
      </div>

      {/* Timeline */}

      <div className="mt-10 space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={experience.company}
            className="relative flex gap-4 sm:gap-6"
          >
            {/* Timeline */}

            <div className="relative flex flex-col items-center">
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
                <Briefcase className="h-5 w-5 text-white" />
              </div>

              {index !== experiences.length - 1 && (
                <div
                  className="
                  mt-2
                  h-full
                  w-px
                  bg-white/10
                  "
                />
              )}
            </div>

            {/* Content */}

            <div className="flex-1 pb-6">
              <div
                className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-5
                "
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {experience.role}
                    </h3>

                    <div className="mt-1 flex items-center gap-2 text-slate-400">
                      <Building2 className="h-4 w-4" />
                      <span className="text-sm">
                        {experience.company}
                      </span>
                    </div>
                  </div>

                  <div
                    className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-400
                    "
                  >
                    <Calendar className="h-4 w-4" />
                    {experience.duration}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {experience.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}

      <div
        className="
        mt-8
        rounded-2xl
        border
        border-cyan-500/20
        bg-cyan-500/5
        p-4
        "
      >
        <p className="text-sm text-slate-300">
          <span className="font-semibold text-white">
            8+ years
          </span>{" "}
          of experience across AI Engineering, Cloud
          Architecture, Backend Development, and Technical
          Leadership.
        </p>
      </div>
    </section>
  );
}