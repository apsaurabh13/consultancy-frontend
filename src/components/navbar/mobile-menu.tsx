"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { label: "Home", href: "/" },
  { label: "Consultants", href: "/consultants" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function MobileMenu() {
  return (
    <div className="lg:hidden">
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .mobile-link {
          position: relative;
          display: inline-block;
        }

        
      `}</style>
      <Sheet>
        <SheetTrigger className="flex items-center justify-center text-slate-300 hover:text-white transition-colors">
          <Menu className="h-6 w-6" />
        </SheetTrigger>

        <SheetContent side="right" className="border-l border-white/10 bg-slate-950 text-white">
          <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
            <Link href="/" className="text-lg font-extrabold text-white">ConsultEdge</Link>
            <div className="flex items-center gap-2">
              <Link href="/login" className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:text-white">Sign in</Link>
              <Link href="/register" className="rounded-md bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 px-3 py-2 text-sm font-semibold text-white">Sign up</Link>
            </div>
          </div>

          <div className="mt-6 px-6">
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-lg font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}