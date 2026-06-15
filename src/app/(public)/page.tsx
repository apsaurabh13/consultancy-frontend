export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight">
              Connect With Expert Consultants
            </h1>

            <p className="mb-8 text-lg text-muted-foreground">
              Get instant guidance from experienced professionals
              in Software Engineering, FastAPI, AWS, DevOps,
              Career Growth, System Design, and more.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="rounded-lg bg-black px-6 py-3 text-white">
                Find Consultants
              </button>

              <button className="rounded-lg border px-6 py-3">
                Become a Consultant
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center">
            <h2 className="text-3xl font-bold">10K+</h2>
            <p className="text-muted-foreground">
              Clients
            </p>
          </div>

          <div className="rounded-xl border p-6 text-center">
            <h2 className="text-3xl font-bold">500+</h2>
            <p className="text-muted-foreground">
              Consultants
            </p>
          </div>

          <div className="rounded-xl border p-6 text-center">
            <h2 className="text-3xl font-bold">50K+</h2>
            <p className="text-muted-foreground">
              Consultations
            </p>
          </div>

          <div className="rounded-xl border p-6 text-center">
            <h2 className="text-3xl font-bold">4.9★</h2>
            <p className="text-muted-foreground">
              Average Rating
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Popular Categories
          </h2>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            {[
              "FastAPI",
              "AWS",
              "DevOps",
              "System Design",
              "Career Guidance",
              "Interview Preparation",
              "Resume Review",
              "MERN Stack",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border bg-background p-5 text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Consultants */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Featured Consultants
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-xl border p-6"
            >
              <div className="mb-4 h-16 w-16 rounded-full bg-muted" />

              <h3 className="text-xl font-semibold">
                Consultant Name
              </h3>

              <p className="mb-2 text-muted-foreground">
                Senior Backend Engineer
              </p>

              <p className="mb-4">
                ⭐ 4.9 • 8 Years Experience
              </p>

              <p className="mb-4">
                ₹10 / minute
              </p>

              <button className="w-full rounded-lg bg-black py-2 text-white">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">
            How It Works
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border bg-background p-6">
              <h3 className="mb-3 text-xl font-semibold">
                1. Find Consultant
              </h3>

              <p>
                Browse and choose a consultant
                based on expertise, experience,
                and ratings.
              </p>
            </div>

            <div className="rounded-xl border bg-background p-6">
              <h3 className="mb-3 text-xl font-semibold">
                2. Add Wallet Balance
              </h3>

              <p>
                Add funds and allocate an amount
                for consultation.
              </p>
            </div>

            <div className="rounded-xl border bg-background p-6">
              <h3 className="mb-3 text-xl font-semibold">
                3. Start Consultation
              </h3>

              <p>
                Chat instantly and pay only for
                the time you use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="rounded-2xl border p-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Ready To Get Expert Advice?
          </h2>

          <p className="mb-8 text-muted-foreground">
            Start your first consultation today.
          </p>

          <button className="rounded-lg bg-black px-8 py-3 text-white">
            Explore Consultants
          </button>
        </div>
      </section>
    </main>
  );
}