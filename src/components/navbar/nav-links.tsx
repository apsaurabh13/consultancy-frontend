"use client";

import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Consultants", href: "/consultants" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function NavLinks() {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

       
        .nav-link-underline:hover::after {
          width: 100%;
          animation: shimmer 1.2s ease-in-out;
        }
      `}</style>
      {links.map((item) => (
        <div key={item.href} className="inline-block">
          <Link
            href={item.href}
            className="nav-link-underline text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
          >
            {item.label}
          </Link>
        </div>
      ))}
    </>
  );
}
