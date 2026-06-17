"use client";

import { memo, useMemo } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Anita Rao", title: "Founder, Product Studio", quote: "The consultants at ConsultEdge helped us scale fast with precise strategy and clear execution plans.", role: "Founder" },
  { name: "Rishi Patel", title: "VP Growth", quote: "The advisory sessions were focused, actionable, and directly improved our decision-making process.", role: "VP Growth" },
  { name: "Nina Das", title: "Finance Lead", quote: "Accessible expert support made our launches more confident and our teams more aligned.", role: "Finance Lead" },
];

export const TestimonialsSection = memo(function TestimonialsSection() {
  const items = useMemo(() => testimonials, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.08),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">Customer stories</span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">Trusted by leaders who expect clarity.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Real feedback from professionals who rely on ConsultEdge for strategic expertise.
          </p>
        </div>

        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .marquee-container {
            animation: marquee 10s linear infinite;
          }

          .marquee-container:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="relative overflow-hidden">
          <div className="marquee-container flex gap-8">
            {[...items, ...items].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="relative flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/20 transition duration-300 hover:border-violet-500/20 hover:bg-white/5"
              >
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/10">
                    <Quote className="h-6 w-6" />
                  </div>
                  <p className="mt-8 text-lg leading-8 text-slate-200">"{item.quote}"</p>
                  <div className="mt-8">
                    <p className="text-base font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-slate-400">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-950 to-transparent" />
        </div>
      </div>
    </section>
  );
});
