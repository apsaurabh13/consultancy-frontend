"use client";

import {
  CalendarDays,
  Clock3,
  CircleCheck,
} from "lucide-react";

const schedule = [
  {
    day: "Monday",
    time: "09:00 AM - 06:00 PM",
  },
  {
    day: "Tuesday",
    time: "09:00 AM - 06:00 PM",
  },
  {
    day: "Wednesday",
    time: "09:00 AM - 06:00 PM",
  },
  {
    day: "Thursday",
    time: "09:00 AM - 06:00 PM",
  },
  {
    day: "Friday",
    time: "09:00 AM - 06:00 PM",
  },
];

export function ConsultantAvailability() {
  return (
    <section
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/[0.02]
      p-6
      "
    >
      {/* Header */}

      <h2 className="text-xl font-semibold text-white">
        Availability
      </h2>

      {/* Status */}

      <div
        className="
        mt-5
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-emerald-500/20
        bg-emerald-500/10
        p-4
        "
      >
        <CircleCheck className="h-5 w-5 text-emerald-400" />

        <div>
          <p className="font-medium text-emerald-400">
            Available Now
          </p>

          <p className="text-xs text-slate-400">
            Accepting new consultations
          </p>
        </div>
      </div>

      {/* Response Time */}

      <div
        className="
        mt-5
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-white/[0.02]
        p-4
        "
      >
        <div className="flex items-center gap-3">
          <Clock3 className="h-5 w-5 text-cyan-400" />

          <span className="text-sm text-slate-300">
            Average Response Time
          </span>
        </div>

        <span className="text-sm font-medium text-white">
          15 mins
        </span>
      </div>

      {/* Schedule */}

      <div className="mt-6">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-violet-400" />

          <h3 className="text-sm font-medium text-white">
            Weekly Schedule
          </h3>
        </div>

        <div className="mt-4 space-y-3">
          {schedule.map((item) => (
            <div
              key={item.day}
              className="
              flex
              items-center
              justify-between
              rounded-xl
              border
              border-white/10
              bg-white/[0.02]
              px-4
              py-3
              "
            >
              <span className="text-sm text-slate-300">
                {item.day}
              </span>

              <span className="text-sm text-slate-400">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}

      <div
        className="
        mt-6
        rounded-2xl
        border
        border-cyan-500/20
        bg-cyan-500/5
        p-4
        "
      >
        <p className="text-sm text-slate-300">
          Consultation requests outside working hours
          will be answered during the next available slot.
        </p>
      </div>
    </section>
  );
}