"use client";

import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { NavLinks } from "./nav-links";
import { UserActions } from "./user-actions";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur-2xl shadow-lg shadow-slate-950/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.08),transparent_40%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.08),transparent_40%)]" />
      <Container>
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            <NavLinks />
          </nav>

          <div className="flex items-center gap-4">
            <UserActions />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
