"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Eye, EyeOff, Lock, Mail, Star, Users, BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute left-4 top-6 z-50">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-2 text-sm text-slate-200 shadow-sm backdrop-blur transition-colors hover:bg-white/5">
          <ArrowLeft className="h-4 w-4" />
          Home
        </Link>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),transparent_25%),linear-gradient(180deg,#02040b_0%,#07101f_100%)]" />
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8">
        <div className="hidden flex-col justify-center gap-10 lg:flex xl:px-16">
          <div className="max-w-xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">
              Welcome to ConsultEdge
            </span>
            <div className="space-y-5">
              <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
                Talk to <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">industry-leading experts</span>
              </h1>
              <p className="text-lg leading-8 text-slate-300 sm:text-xl">
                Connect with verified professionals, mentors, and consultants who help you move faster with confidence.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <Users className="h-10 w-10 text-cyan-400" />
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Consultations</p>
                  <p className="mt-3 text-2xl font-bold text-white">25K+</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <BriefcaseBusiness className="h-10 w-10 text-violet-400" />
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Experts</p>
                  <p className="mt-3 text-2xl font-bold text-white">500+</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl sm:col-span-2">
              <div className="flex items-center gap-4">
                <Star className="h-10 w-10 text-amber-400" />
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Average rating</p>
                  <p className="mt-3 text-2xl font-bold text-white">4.9★</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 sm:px-8">
          <div className="w-full max-w-md">
            <div className="rounded-[40px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-2xl sm:p-10">
              <div className="mb-8 text-center">
                <h2 className="text-4xl font-black text-white">Welcome Back</h2>
                <p className="mt-3 text-slate-400">Sign in to continue your journey.</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Email Address</label>
                  <div className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 transition-colors hover:border-violet-500/30">
                    <Mail className="h-5 w-5 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">Password</label>
                  <div className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 transition-colors hover:border-violet-500/30">
                    <Lock className="h-5 w-5 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeOff className="h-5 w-5 text-slate-400" /> : <Eye className="h-5 w-5 text-slate-400" />}
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <Link href="#" className="text-sm text-slate-400 transition-colors hover:text-white">
                    Forgot password?
                  </Link>
                </div>

                <Button type="submit" className="h-14 w-full rounded-2xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 text-white shadow-xl shadow-cyan-500/20 hover:opacity-90">
                  Sign In
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-slate-950 px-4 text-xs text-slate-500">OR CONTINUE WITH</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {['Google', 'GitHub', 'LinkedIn'].map((provider) => (
                    <button key={provider} type="button" className="rounded-2xl border border-white/10 bg-slate-950/70 py-3 text-sm text-slate-300 transition duration-300 hover:bg-white/5">
                      {provider}
                    </button>
                  ))}
                </div>
              </form>
            </div>

            <p className="mt-8 text-center text-sm text-slate-400">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="font-semibold text-white hover:text-cyan-300">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
