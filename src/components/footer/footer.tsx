"use client";

import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.06),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.06),transparent_40%)]" />
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .footer-link {
          position: relative;
          display: inline-block;
          color: inherit;
          text-decoration: none;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, #a78bfa, #06b6d4, transparent);
          background-size: 200% 100%;
          transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 2px;
        }

        .footer-link:hover::after {
          width: 100%;
          animation: shimmer 1.2s ease-in-out;
        }
      `}</style>

      <Container>
        <div className="relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-slate-400 leading-relaxed">
              Connect with verified experts across technology, business, finance, career and more.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="group relative inline-flex items-center justify-center rounded-full border border-white/10 p-2.5 text-slate-400 transition-all duration-300 hover:text-white"
                    aria-label={social.label}
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                    <span className="relative z-10">
                      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Product</h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Consultants", href: "/consultants" },
                { label: "Pricing", href: "/pricing" },
                { label: "Features", href: "/features" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Company</h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Legal</h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} ConsultEdge. All rights reserved.</p>
          <p>Built with Next.js 15 & TypeScript</p>
        </div>
      </Container>
    </footer>
  );
}
