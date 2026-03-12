import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Flower2,
  BookOpen,
  UtensilsCrossed,
  TreePine,
  BedDouble,
  MapPin,
  ArrowRight,
  Users,
  Mic,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Jnanashakti Ashram | A Space for Spiritual Sadhana",
  description:
    "Jnanashakti Ashram at Vave Village, Sudhagad, Maharashtra — a holistic facility by Fowai Forum for intensive sadhana, study of Upanishads and Gita, seminars, and spiritual retreats.",
};

const features = [
  {
    icon: BedDouble,
    title: "Residential Blocks",
    description:
      "Accommodation for spiritual aspirants undertaking long-term and short-term study courses at the āshram.",
  },
  {
    icon: Flower2,
    title: "Meditation Space",
    description:
      "A dedicated space designed for silent meditation and group sadhana practice, open from dawn to dusk.",
  },
  {
    icon: Mic,
    title: "Auditorium & Seminar Hall",
    description:
      "The Yājnavalkya Auditorium and seminar hall for discourses, workshops, and one-day sādhanā camps.",
  },
  {
    icon: BookOpen,
    title: "Granthālaya (Library)",
    description:
      "A curated collection of Vedāntic texts, Upanishads, Gītā commentaries, and spiritual literature for study and contemplation.",
  },
  {
    icon: UtensilsCrossed,
    title: "Maitreyī (Dining & Kitchen)",
    description:
      "Wholesome, sattvic vegetarian meals prepared with care and served communally in the dining hall.",
  },
  {
    icon: Users,
    title: "Āchārya Bhavans",
    description:
      "Dedicated quarters for resident teachers and instructors who conduct study courses and seminars.",
  },
];

const visionItems = [
  {
    title: "Shakti",
    description:
      "A wing for strengthening human values and individual rejuvenation through emotional health and spiritual wisdom. For working people like executives, educators and various other professionals.",
  },
  {
    title: "Shanti",
    description:
      "A wing for imparting advanced spiritual education, drawing from the rich heritage of Indian spirituality and wisdom traditions of the world. For those who are looking for a deeper meaning in life.",
  },
];

export default function AshramPage() {
  return (
    <main className="min-h-screen bg-warm-white">
      {/* ── Banner ── */}
      <section className="relative bg-gradient-to-br from-saffron-dark via-saffron to-earth py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-[family-name:var(--font-sanskrit)] text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
            Jnāna Shakti Āshram
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85 sm:text-xl font-[family-name:var(--font-sanskrit)]">
            A Space for Spiritual Sādhanā
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/60">
            Vave Village, Near Jambhulpada, Sudhagad, Maharashtra
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
                A Holistic Facility for Seekers
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted sm:text-lg">
                <p>
                  Spiritual wisdom is unparalleled in its power to purify and
                  transform. Such <em className="font-[family-name:var(--font-sanskrit)] not-italic">jnāna</em> (wisdom) has the{" "}
                  <em className="font-[family-name:var(--font-sanskrit)] not-italic">shakti</em> (power) to take us across the river of
                  suffering.
                </p>
                <p>
                  Fowai Forum has planned to set up Jnanashakti Ashram — a
                  holistic facility to provide a serene ambiance for intensive
                  sadhana and study of scriptures. Residential blocks for
                  spiritual aspirants, accommodation for Acharyas, an
                  auditorium, seminar hall, meditation space, and a library are
                  among the salient features.
                </p>
                <p>
                  Competent teachers and instructors will conduct long-term and
                  short-term study courses, one-day sadhana camps, seminars,
                  and more. The ashram is located at Vave Village, near
                  Jambhulpada, Sudhagad, Maharashtra — less than three hours
                  drive from either Mumbai airport or Pune airport.
                </p>
              </div>
            </div>

            {/* Brochure image */}
            <div className="overflow-hidden rounded-2xl border border-warm-border shadow-sm">
              <Image
                src="/images/ashram-brochure-2.jpg"
                alt="Jnanashakti Ashram — A Space for Spiritual Sadhana"
                width={1200}
                height={850}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="section-padding bg-warm-cream">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-saffron">
              Our Vision
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Two Wings of Transformation
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-muted">
              The ashram&apos;s vision is realised through two complementary
              wings, each serving a distinct purpose.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {visionItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-warm-border bg-surface p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-[family-name:var(--font-sanskrit)] text-2xl text-saffron">
                  {item.title}
                </h3>
                <p className="mt-4 text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-4xl mx-auto text-center">
            <p className="text-lg font-medium text-text-primary">
              Our Mission
            </p>
            <p className="mt-2 text-text-muted max-w-2xl mx-auto">
              To empower a human being to acquire the wisdom to respond to
              situations, with the right action.
            </p>
          </div>
        </div>
      </section>

      {/* ── Facilities ── */}
      <section className="section-padding">
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
                  <h3 className="mt-4 font-[family-name:var(--font-sanskrit)] text-xl text-text-primary">
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

      {/* ── Layout Map ── */}
      <section className="section-padding bg-warm-cream">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Ashram Layout
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-muted">
              The planned layout of Jnanashakti Ashram at Vave Village,
              Sudhagad.
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 items-start">
            <div className="overflow-hidden rounded-2xl border border-warm-border bg-surface shadow-sm">
              <Image
                src="/images/ashram-map.jpg"
                alt="Jnanashakti Ashram site layout map"
                width={800}
                height={1100}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-warm-border bg-surface shadow-sm">
              <Image
                src="/images/ashram-brochure-1.jpg"
                alt="Jnanashakti Ashram layout and contribution details"
                width={1200}
                height={850}
                className="w-full h-auto object-contain"
              />
            </div>
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
