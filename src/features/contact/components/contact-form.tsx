"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <section
      id="contact-form"
      className="py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_480px] lg:items-start">
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
              Contact Us
            </span>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              We'd Love To
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
                Hear From You
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
              Have a question, partnership opportunity,
              business inquiry, or need support?
              Fill out the form and our team will
              get back to you as soon as possible.
            </p>

            <div className="mt-10 space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <h3 className="font-semibold text-white">
                  Fast Responses
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Most inquiries receive a response
                  within 24 hours.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <h3 className="font-semibold text-white">
                  Dedicated Support
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Our team is available to assist with
                  platform questions and onboarding.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-6
            backdrop-blur-sm
            sm:p-8
            "
          >
            <form className="space-y-5">
              {/* Name */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-slate-900/50
                  px-4
                  text-white
                  placeholder:text-slate-500
                  outline-none
                  focus:border-cyan-500/50
                  "
                />
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-slate-900/50
                  px-4
                  text-white
                  placeholder:text-slate-500
                  outline-none
                  focus:border-cyan-500/50
                  "
                />
              </div>

              {/* Subject */}

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-slate-900/50
                  px-4
                  text-white
                  placeholder:text-slate-500
                  outline-none
                  focus:border-cyan-500/50
                  "
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Write your message..."
                  className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-white/10
                  bg-slate-900/50
                  px-4
                  py-3
                  text-white
                  placeholder:text-slate-500
                  outline-none
                  focus:border-cyan-500/50
                  "
                />
              </div>

              {/* Button */}

              <Button
                type="submit"
                className="
                h-12
                w-full
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                via-blue-600
                to-cyan-500
                text-white
                "
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}