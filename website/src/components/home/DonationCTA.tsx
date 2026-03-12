import Link from "next/link";

export default function DonationCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-earth via-maroon to-saffron-dark">
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                            radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          Support Our Mission
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          Your generous contributions help sustain āshram activities, fund
          educational programs, and bring the light of <span className="font-[family-name:var(--font-sanskrit)]">Vedāntic</span> wisdom to
          communities across the world. Every offering, however small, makes a
          meaningful difference.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-full bg-orange-accent px-10 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-orange-accent/90 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-accent"
          >
            Donate Now
          </Link>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-10 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
