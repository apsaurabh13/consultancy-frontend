"use client";

const stats = [
  {
    value: "500+",
    label: "Verified Experts",
  },
  {
    value: "25K+",
    label: "Consultations",
  },
  {
    value: "98%",
    label: "Success Rate",
  },
  {
    value: "4.9★",
    label: "Average Rating",
  },
];

export function PlatformStats() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            text-sm
            text-slate-300
            "
          >
            Platform Impact
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            Trusted By Professionals
            <span
              className="
              block
              bg-gradient-to-r
              from-violet-400
              via-blue-400
              to-cyan-400
              bg-clip-text
              text-transparent
              "
            >
              Across Industries
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Numbers that reflect our commitment to quality,
            trust, and meaningful professional connections.
          </p>
        </div>

        {/* Stats */}

        <div
          className="
          mt-16
          grid
          grid-cols-2
          gap-8
          border-t
          border-white/10
          pt-12
          lg:grid-cols-4
          "
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <h3
                className="
                bg-gradient-to-r
                from-violet-400
                via-blue-400
                to-cyan-400
                bg-clip-text
                text-5xl
                font-bold
                text-transparent
                "
              >
                {stat.value}
              </h3>

              <p className="mt-3 text-sm text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}