"use client";

import { memo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const RegisterPage = memo(function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register attempt:", formData);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute left-4 top-6 z-50">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-2 text-sm text-slate-200 shadow-sm backdrop-blur transition-colors hover:bg-white/5">
          <ArrowLeft className="h-4 w-4" />
          Home
        </Link>
      </div>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.15),transparent_35%)]" />
      
      {/* Decorative Blurs */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-black tracking-tight text-white">Get Started</h1>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Join thousands of professionals and consultants on ConsultEdge.
            </p>
          </div>

          {/* Register Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/70 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-50" />
            
            <form onSubmit={handleRegister} className="relative space-y-5">
              {/* Full Name Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-300">Full Name</label>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition duration-300 focus-within:border-violet-500/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />
                  <div className="relative flex items-center gap-3">
                    <User className="h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-transparent text-white placeholder-slate-500 outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-300">Email Address</label>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition duration-300 focus-within:border-violet-500/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />
                  <div className="relative flex items-center gap-3">
                    <Mail className="h-5 w-5 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-transparent text-white placeholder-slate-500 outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-300">Password</label>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition duration-300 focus-within:border-violet-500/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />
                  <div className="relative flex items-center gap-3">
                    <Lock className="h-5 w-5 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a strong password"
                      className="w-full flex-1 bg-transparent text-white placeholder-slate-500 outline-none"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-slate-400 transition-colors hover:text-white"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-300">Confirm Password</label>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition duration-300 focus-within:border-violet-500/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />
                  <div className="relative flex items-center gap-3">
                    <Lock className="h-5 w-5 text-slate-400" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      className="w-full flex-1 bg-transparent text-white placeholder-slate-500 outline-none"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="text-slate-400 transition-colors hover:text-white"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-950/50 text-violet-600 accent-violet-600"
                  required
                />
                <label htmlFor="terms" className="text-xs text-slate-400">
                  I agree to the{" "}
                  <Link href="/terms" className="text-slate-300 hover:text-white transition-colors">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-slate-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Register Button */}
              <Button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-cyan-500/20 transition duration-300 hover:shadow-violet-500/30 hover:scale-[1.02]"
              >
                Create Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              {/* Divider */}
              <div className="relative flex items-center gap-4">
                <div className="flex-1 border-t border-white/10" />
                <span className="text-xs text-slate-500">OR</span>
                <div className="flex-1 border-t border-white/10" />
              </div>

              {/* OAuth Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:border-white/20 hover:bg-white/5"
                >
                  Google
                </button>
                <button
                  type="button"
                  className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:border-white/20 hover:bg-white/5"
                >
                  GitHub
                </button>
              </div>
            </form>
          </div>

          {/* Sign In Link */}
          <div className="mt-8 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="relative inline-block font-semibold text-white transition-colors hover:text-cyan-300"
              style={{
                backgroundImage: "linear-gradient(90deg, transparent, #a78bfa, #06b6d4, transparent)",
                backgroundSize: "200% 100%",
              }}
            >
              <style>{`
                .signin-link::after {
                  content: '';
                  position: absolute;
                  left: 0;
                  bottom: -3px;
                  width: 0;
                  height: 2px;
                  background: linear-gradient(90deg, transparent, #a78bfa, #06b6d4, transparent);
                  background-size: 200% 100%;
                  transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .signin-link:hover::after {
                  width: 100%;
                  animation: shimmer 1.2s ease-in-out;
                }

                @keyframes shimmer {
                  0% { background-position: -1000px 0; }
                  100% { background-position: 1000px 0; }
                }
              `}</style>
              <span className="signin-link">Sign in instead</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default RegisterPage;
