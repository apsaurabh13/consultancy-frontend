"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rahul Verma",
    role: "Startup Founder",
    rating: 5,
    review:
      "Excellent guidance on system architecture and scaling strategy. The consultation saved us weeks of engineering effort.",
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Software Engineer",
    rating: 5,
    review:
      "Very clear explanations and practical advice. Helped me prepare for senior backend engineering interviews.",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Product Manager",
    rating: 4,
    review:
      "Great experience discussing AI implementation strategies. Highly knowledgeable and easy to communicate with.",
  },
];

export function ConsultantReviews() {
  return (
    <section
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/[0.02]
      p-6
      sm:p-8
      "
    >
      {/* Header */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Reviews & Ratings
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Feedback from professionals who received
            consultation and mentorship.
          </p>
        </div>

        <div className="text-left sm:text-right">
          <div className="flex items-center gap-2 sm:justify-end">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

            <span className="text-2xl font-bold text-white">
              4.9
            </span>
          </div>

          <p className="text-sm text-slate-400">
            Based on 142 reviews
          </p>
        </div>
      </div>

      {/* Reviews */}

      <div className="mt-8 space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.02]
            p-5
            "
          >
            {/* Top */}

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-r
                  from-violet-600
                  via-blue-600
                  to-cyan-500
                  text-sm
                  font-semibold
                  text-white
                  "
                >
                  {review.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <h3 className="font-medium text-white">
                    {review.name}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {review.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {Array.from({
                  length: review.rating,
                }).map((_, index) => (
                  <Star
                    key={index}
                    className="
                    h-4
                    w-4
                    fill-yellow-400
                    text-yellow-400
                    "
                  />
                ))}
              </div>
            </div>

            {/* Review */}

            <p className="mt-4 leading-7 text-slate-300">
              "{review.review}"
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}

      <div className="mt-8 flex justify-center">
        <button
          className="
          rounded-xl
          border
          border-white/10
          bg-white/[0.02]
          px-5
          py-3
          text-sm
          font-medium
          text-slate-300
          transition-colors
          hover:border-white/20
          hover:text-white
          "
        >
          View All Reviews
        </button>
      </div>
    </section>
  );
}