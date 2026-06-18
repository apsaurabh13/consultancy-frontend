import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
    >
      <div className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 p-2 text-white">
        <BriefcaseBusiness className="h-5 w-5" />
      </div>

      <span className="text-lg font-bold">
        ConsultEdge
      </span>
    </Link>
  );
}