"use client";

import {
  Star,
  Briefcase,
  Clock3,
  Globe,
  MessageSquare,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
  consultantId?: string;
};

export function ConsultantHero({}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.12),transparent_30%),radial-gradient(circle_at_right,_rgba(6,182,212,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Content */}

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            {/* Avatar */}

            <div
              className="
              flex
              h-24
              w-24
              shrink-0
              items-center
              justify-center
              rounded-3xl
              bg-gradient-to-r
              from-violet-600
              via-blue-600
              to-cyan-500
              text-3xl
              font-bold
              text-white
              shadow-lg
              sm:h-28
              sm:w-28
              "
            >
              RS
            </div>

            {/* Info */}

            <div>
              <div
                className="
                inline-flex
                items-center
                rounded-full
                border
                border-emerald-500/20
                bg-emerald-500/10
                px-3
                py-1
                text-xs
                font-medium
                text-emerald-400
                "
              >
                Available Now
              </div>

              <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Rahul Sharma
              </h1>

              <p className="mt-2 text-base text-slate-400 sm:text-lg">
                Senior AI Engineer & Cloud Architect
              </p>

              {/* Stats */}

              <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9 Rating</span>
                </div>

                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>142 Reviews</span>
                </div>

                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>8 Years Experience</span>
                </div>
              </div>

              {/* Meta */}

              <div className="mt-5 flex flex-wrap gap-3">
                <span
                  className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3
                  py-1.5
                  text-xs
                  text-slate-300
                  "
                >
                  AI Engineering
                </span>

                <span
                  className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3
                  py-1.5
                  text-xs
                  text-slate-300
                  "
                >
                  FastAPI
                </span>

                <span
                  className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3
                  py-1.5
                  text-xs
                  text-slate-300
                  "
                >
                  AWS
                </span>

                <span
                  className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3
                  py-1.5
                  text-xs
                  text-slate-300
                  "
                >
                  System Design
                </span>
              </div>
            </div>
          </div>

          {/* Right Card */}

          <div
            className="
            w-full
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-6
            lg:w-[340px]
            "
          >
            <div className="space-y-5">
              {/* Price */}

              <div>
                <p className="text-sm text-slate-400">
                  Consultation Rate
                </p>

                <h2
                  className="
                  mt-2
                  bg-gradient-to-r
                  from-violet-400
                  via-blue-400
                  to-cyan-400
                  bg-clip-text
                  text-4xl
                  font-bold
                  text-transparent
                  "
                >
                  ₹20/min
                </h2>
              </div>

              {/* Info */}

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    Response Time
                  </span>

                  <span className="text-white">
                    Within 15 mins
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    Consultations
                  </span>

                  <span className="text-white">
                    1,200+
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    Languages
                  </span>

                  <span className="text-white">
                    English, Hindi
                  </span>
                </div>
              </div>

              {/* Buttons */}

              <div className="flex flex-col gap-3 pt-2">
                <Button
                  className="
                  h-12
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  via-blue-600
                  to-cyan-500
                  text-white
                  "
                >
                  Book Consultation
                </Button>

                <Button
                  variant="outline"
                  className="
                  h-12
                  rounded-xl
                  border-white/10
                  bg-white/[0.02]
                  text-white
                  "
                >
                  Send Message
                </Button>
              </div>

              {/* Status */}

              <div
                className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-emerald-500/20
                bg-emerald-500/10
                px-4
                py-3
                text-sm
                text-emerald-400
                "
              >
                <Clock3 className="h-4 w-4" />
                Available For Consultation
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Meta */}

        <div
          className="
          mt-8
          flex
          flex-wrap
          gap-4
          text-sm
          text-slate-400
          "
        >
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Remote Worldwide
          </div>

          <div>•</div>

          <div>Verified Consultant</div>

          <div>•</div>

          <div>Top Rated Expert</div>
        </div>
      </div>
    </section>
  );
}