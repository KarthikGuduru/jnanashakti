import Link from "next/link";
import { ArrowLeft, Video, BookOpen, Images, ArrowRight, Quote } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teachings & Wisdom",
  description:
    "Explore Swamiji's talks, articles, and media library — a treasury of spiritual wisdom rooted in Vedanta and ancient Indian traditions.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const SECTIONS = [
  {
    icon: Video,
    title: "Talks",
    description:
      "Watch and listen to Swamiji's discourses on Vedanta, meditation, dharma, and the art of conscious living. Audio and video recordings of satsangs and public talks.",
    href: "/teachings/talks",
    count: "50+ recordings",
  },
  {
    icon: BookOpen,
    title: "Articles",
    description:
      "Read Swamiji's writings on spiritual philosophy, practical wisdom, and the application of ancient teachings in modern life.",
    href: "/teachings/articles",
    count: "30+ articles",
  },
  {
    icon: Images,
    title: "Media Library",
    description:
      "Browse our collection of audio recordings, videos, and photographs from ashram events, retreats, and spiritual gatherings.",
    href: "/teachings/media",
    count: "100+ items",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function TeachingsPage() {
  return (
    <div className="min-h-screen bg-warm-white">
        {/* ---- Banner ---- */}
        <section className="relative overflow-hidden bg-gradient-to-br from-saffron-dark via-earth to-saffron py-20 sm:py-28">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white" />
            <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-white" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Teachings &amp; Wisdom
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
              A treasury of spiritual knowledge drawn from the timeless wisdom of
              Vedanta and the living tradition of the Guru-Shishya Parampara.
            </p>
          </div>
        </section>

        {/* ---- Featured Quote ---- */}
        <section className="section-padding border-b border-warm-border">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-saffron/10 text-saffron">
              <Quote size={24} />
            </div>
            <blockquote className="mt-6 font-heading text-2xl font-medium italic leading-relaxed text-text-primary sm:text-3xl">
              &ldquo;The purpose of knowledge is not mere accumulation of information, but
              the transformation of the seeker. True wisdom illuminates the self and
              liberates the mind.&rdquo;
            </blockquote>
            <cite className="mt-4 block text-sm font-medium not-italic text-saffron">
              -- Swamiji
            </cite>
          </div>
        </section>

        {/* ---- Section Cards ---- */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-3">
              {SECTIONS.map((section) => (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group rounded-2xl border border-warm-border bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-saffron/30 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-saffron/10 text-saffron transition-colors group-hover:bg-saffron group-hover:text-white">
                    <section.icon size={28} />
                  </div>
                  <h2 className="mt-5 font-heading text-2xl font-bold text-text-primary">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {section.description}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-saffron/70">
                    {section.count}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-saffron transition-colors group-hover:text-saffron-dark">
                    Explore
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
}
