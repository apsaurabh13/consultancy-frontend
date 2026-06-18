"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function UserActions() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .login-btn {
          position: relative;
          color: inherit;
        }

        
      `}</style>
      <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/10">
        <Link href="/login" className="login-btn">
          Login
        </Link>
      </Button>

      <Button className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-violet-500/30 hover:opacity-90">
        <Link href="/register">
          Get Started
        </Link>
      </Button>
    </div>
  );
}
