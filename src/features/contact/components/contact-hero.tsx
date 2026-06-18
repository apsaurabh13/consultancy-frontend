"use client";

import Link from "next/link";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.12),transparent_30%)]" />

      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}

          <div
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
            backdrop-blur-sm
            "
          >
            <MessageSquare className="h-4 w-4 text-cyan-400" />

            Let's Start A Conversation
          </div>

          {/* Heading */}

          <h1
            className="
            mt-6
            text-4xl
            font-bold
            tracking-tight
            text-white
            sm:text-5xl
            lg:text-6xl
            "
          >
            Get In Touch With
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
              The ConsultEdge Team
            </span>
          </h1>

          {/* Description */}

          <p
            className="
            mx-auto
            mt-6
            max-w-2xl
            text-base
            leading-7
            text-slate-400
            sm:text-lg
            "
          >
            Whether you have questions, need support,
            want to become a consultant, or explore
            partnership opportunities, we're here to help.
          </p>

          {/* Actions */}

          <div
            className="
            mt-10
            flex
            flex-col
            items-center
            justify-center
            gap-4
            sm:flex-row
            "
          >
            <Button
            
              className="
              h-12
              w-full
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              via-blue-600
              to-cyan-500
              px-6
              text-white
              sm:w-auto
              "
            >
              <Link href="#contact-form">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
             
              variant="outline"
              className="
              h-12
              w-full
              rounded-xl
              border-white/10
              bg-white/[0.02]
              px-6
              text-white
              hover:bg-white/[0.04]
              sm:w-auto
              "
            >
              <Link href="mailto:support@consultedge.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </Link>
            </Button>
          </div>

          {/* Stats */}

          <div
            className="
            mt-16
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-3
            "
          >
            <div
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.02]
              p-5
              "
            >
              <h3 className="text-2xl font-bold text-white">
                &lt; 24h
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Average Response Time
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
              <h3 className="text-2xl font-bold text-white">
                500+
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Verified Consultants
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
              <h3 className="text-2xl font-bold text-white">
                25K+
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Consultations Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}