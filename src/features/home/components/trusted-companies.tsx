"use client";

import { memo, useMemo } from "react";

const companies = ["GOOGLE", "MICROSOFT", "AMAZON", "META", "ADOBE", "STRIPE"];

export const TrustedCompanies = memo(function TrustedCompanies() {
  const items = useMemo(() => companies, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.1),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.1),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">Trusted worldwide</span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">Professionals at leading companies trust ConsultEdge.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Industry leaders, founders, and teams rely on our consultants for expert guidance and measurable growth.
          </p>
        </div>

        <div className="mt-16 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {items.map((company) => (
            <div key={company} className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 px-6 py-8 text-center text-sm text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-violet-500/20 hover:bg-white/5">
              <span className="text-xl font-black tracking-widest text-white">{company}</span>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 rounded-[2.5rem] border border-white/10 bg-slate-900/70 p-8 md:grid-cols-3">
          <div className="text-center">
            <h3 className="text-5xl font-black text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text">10K+</h3>
            <p className="mt-2 text-slate-400">Active professionals</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-black text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text">500+</h3>
            <p className="mt-2 text-slate-400">Verified consultants</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-black text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text">25K+</h3>
            <p className="mt-2 text-slate-400">Consultations completed</p>
          </div>
        </div>
      </div>
    </section>
  );
});
