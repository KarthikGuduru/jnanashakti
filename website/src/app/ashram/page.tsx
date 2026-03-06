import Link from "next/link";
import type { Metadata } from "next";
import {
  Flower2,
  BookOpen,
  UtensilsCrossed,
  TreePine,
  BedDouble,
  MapPin,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shakti Ashram | Jnanashakti",
  description:
    "A serene spiritual retreat for seekers. Discover the sacred spaces, facilities, and atmosphere of Shakti Ashram.",
};

const features = [
  {
    icon: Flower2,
    title: "Meditation Halls",
    description:
      "Spacious halls designed for silent meditation and group practice, open from dawn to dusk.",
  },
  {
    icon: BookOpen,
    title: "Library",
    description:
      "A curated collection of Vedantic texts, scriptures, and spiritual literature for study and contemplation.",
  },
  {
    icon: UtensilsCrossed,
    title: "Dining",
    description:
      "Wholesome, sattvic vegetarian meals prepared with care and served communally in the dining hall.",
  },
  {
    icon: TreePine,
    title: "Gardens",
    description:
      "Lush gardens and shaded walkways that invite quiet reflection amidst nature's tranquility.",
  },
  {
    icon: BedDouble,
    title: "Accommodation",
    description:
      "Simple, clean rooms for visiting seekers and retreat participants, fostering an atmosphere of simplicity.",
  },
];

export default function AshramPage() {
  return (
    <main className="min-h-screen bg-warm-white">
      {/* ── Banner ── */}
      <section className="relative bg-gradient-to-br from-saffron-dark via-saffron to-earth py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Shakti Ashram
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
            A sanctuary of stillness, study, and spiritual awakening
          </p>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
                A Serene Retreat for Seekers
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted sm:text-lg">
                <p>
                  Nestled among gentle hills and ancient trees, Shakti Ashram
                  offers a peaceful refuge for those drawn to the path of
                  self-knowledge. Here, the rhythms of daily life are shaped by
                  meditation, study of the scriptures, and selfless service.
                </p>
                <p>
                  Whether you are visiting for a day of quiet reflection or
                  joining a residential retreat, the ashram provides an
                  environment conducive to inner inquiry. Away from the noise of
                  modern life, seekers find the space to turn inward and
                  reconnect with what is essential.
                </p>
                <p>
                  The ashram welcomes sincere seekers of all backgrounds. Daily
                  schedules include morning and evening meditation, satsang,
                  Vedanta classes, and time for personal study and contemplation.
                </p>
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border-2 border-dashed border-warm-border bg-warm-cream">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-saffron/10">
                  <TreePine className="h-8 w-8 text-saffron" />
                </div>
                <p className="mt-3 text-sm font-medium text-text-muted">
                  Ashram Photo
                </p>
                <p className="mt-1 text-xs text-text-muted/60">
                  Image will be placed here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features / Facilities ── */}
      <section className="section-padding bg-warm-cream">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Ashram Facilities
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-muted">
              Everything you need for a focused and nourishing stay, rooted in
              simplicity and spiritual purpose.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-xl border border-warm-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-saffron/10">
                    <Icon className="h-6 w-6 text-saffron" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-text-primary">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTAs ── */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl border border-warm-border bg-surface p-8 text-center shadow-sm sm:p-12">
            <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Plan Your Visit
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-muted">
              Experience the peace and wisdom of ashram life. Submit a stay
              request or find directions to reach us.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/ashram/stay"
                className="inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-saffron-dark hover:shadow-md"
              >
                Request to Stay
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/ashram/directions"
                className="inline-flex items-center gap-2 rounded-full border border-saffron px-7 py-3 text-sm font-semibold text-saffron transition-all hover:bg-saffron hover:text-white"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
