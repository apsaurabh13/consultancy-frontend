"use client";

import {
  Award,
  Briefcase,
  GraduationCap,
  Users,
} from "lucide-react";

export function ConsultantOverview() {
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
          About Consultant
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Professional background, expertise, and consulting
          experience.
        </p>
      </div>

      {/* Bio */}

      <div className="mt-8">
        <p className="leading-8 text-slate-300">
          Rahul Sharma is a Senior AI Engineer and Cloud
          Architect with over 8 years of experience building
          scalable software systems, AI-powered applications,
          and cloud-native solutions.

          <br />
          <br />

          He has worked with startups, enterprises, and
          growing businesses to help them solve technical
          challenges, improve architecture, and accelerate
          product development.

          <br />
          <br />

          His consulting areas include AI Engineering,
          FastAPI, AWS, System Design, Backend Development,
          and technical career mentorship.
        </p>
      </div>

      {/* Highlights */}

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div
          className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.02]
          p-5
          "
        >
          <div className="flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-cyan-400" />

            <h3 className="font-medium text-white">
              Industry Experience
            </h3>
          </div>

          <p className="mt-3 text-sm text-slate-400">
            8+ years working across AI, cloud, backend,
            architecture, and consulting.
          </p>
        </div>

        <div
          className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.02]
          p-5
          "
        >
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-cyan-400" />

            <h3 className="font-medium text-white">
              Consultations
            </h3>
          </div>

          <p className="mt-3 text-sm text-slate-400">
            Successfully completed 1,200+ consultations for
            professionals, founders, and businesses.
          </p>
        </div>

        <div
          className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.02]
          p-5
          "
        >
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5 text-cyan-400" />

            <h3 className="font-medium text-white">
              Specialization
            </h3>
          </div>

          <p className="mt-3 text-sm text-slate-400">
            AI Engineering, AWS Architecture, FastAPI,
            System Design, and Technical Leadership.
          </p>
        </div>

        <div
          className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.02]
          p-5
          "
        >
          <div className="flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-cyan-400" />

            <h3 className="font-medium text-white">
              Mentorship
            </h3>
          </div>

          <p className="mt-3 text-sm text-slate-400">
            Helping developers and engineers grow their
            careers through personalized guidance.
          </p>
        </div>
      </div>
    </section>
  );
}