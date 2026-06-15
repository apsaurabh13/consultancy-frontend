"use client";

import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="flex h-16 items-center justify-between px-6">
        <input
          placeholder="Search..."
          className="w-72 rounded-lg border px-4 py-2"
        />

        <div className="flex items-center gap-4">
          <Bell />

          <div className="h-10 w-10 rounded-full bg-gray-200" />
        </div>
      </div>
    </header>
  );
}