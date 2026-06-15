"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold"
        >
          ConsultSphere
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/consultants">
            Consultants
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/contact">
            Contact
          </Link>

          <Link href="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}