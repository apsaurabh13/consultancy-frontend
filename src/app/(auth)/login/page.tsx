"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="hidden w-1/2 items-center justify-center bg-muted lg:flex">
        <div className="max-w-md px-8">
          <h1 className="mb-4 text-4xl font-bold">
            Welcome Back
          </h1>

          <p className="text-muted-foreground">
            Connect with experienced consultants and
            accelerate your career growth through
            real-time expert guidance.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">
              Login
            </h2>

            <p className="mt-2 text-muted-foreground">
              Enter your credentials to continue
            </p>
          </div>

          <form className="space-y-5">
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

            <div>
              <div className="mb-2 flex justify-between">
                <label className="text-sm font-medium">
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-sm text-blue-600"
                >
                  Forgot Password?
                </Link>
              </div>

              <input
                type="password"
                placeholder="********"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-black py-3 font-medium text-white"
            >
              Login
            </button>
          </form>

          <div className="my-6 flex items-center">
            <div className="h-px flex-1 bg-border" />
            <span className="px-4 text-sm text-muted-foreground">
              OR
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <button
            className="w-full rounded-lg border py-3"
            type="button"
          >
            Continue with Google
          </button>

          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-blue-600"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}