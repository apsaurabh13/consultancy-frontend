"use client";

import Link from "next/link";
import { sidebarConfig } from "./sidebar.config";

type Props = {
  role: "client" | "consultant" | "admin";
};

export default function Sidebar({
  role,
}: Props) {
  const menuItems =
    sidebarConfig[role];

  return (
    <aside className="h-screen w-64 border-r bg-white">
      <div className="border-b p-6">
        <h2 className="text-xl font-bold">
          ConsultSphere
        </h2>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-100"
            >
              <Icon size={18} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}