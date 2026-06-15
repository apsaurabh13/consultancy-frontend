"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="hidden w-1/2 items-center justify-center bg-muted lg:flex">
        <div className="max-w-md px-8">
          <h1 className="mb-4 text-4xl font-bold">
            Start Your Journey
          </h1>

          <p className="text-muted-foreground">
            Join thousands of users connecting with
            expert consultants for career growth,
            mentorship, interview preparation,
            system design guidance, and more.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">
              Create Account
            </h2>

            <p className="mt-2 text-muted-foreground">
              Fill in your details to get started
            </p>
          </div>

          <form className="space-y-5">
            {/* First Name */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                First Name
              </label>

              <input
                type="text"
                placeholder="John"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Last Name
              </label>

              <input
                type="text"
                placeholder="Doe"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="********"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="********"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1"
              />

              <p className="text-sm text-muted-foreground">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="font-medium text-blue-600"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-blue-600"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-black py-3 font-medium text-white"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="h-px flex-1 bg-border" />
            <span className="px-4 text-sm text-muted-foreground">
              OR
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="w-full rounded-lg border py-3"
          >
            Continue with Google
          </button>

          {/* Login */}
          <p className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-blue-600"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}