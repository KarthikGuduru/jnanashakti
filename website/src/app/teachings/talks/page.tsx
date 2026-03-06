import Link from "next/link";
import { ArrowLeft, Play, Clock, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talks by Swamiji",
  description:
    "Listen to Swamiji's talks on Vedanta, meditation, dharma, and spiritual living. Audio and video recordings of discourses and satsangs.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const TALKS = [
  {
    title: "The Nature of Self",
    description:
      "An exploration of Atman and the timeless Vedantic inquiry 'Who am I?' -- understanding our true nature beyond body and mind.",
    duration: "52 min",
    date: "15 Jan 2025",
    category: "Vedanta",
  },
  {
    title: "Living Vedanta",
    description:
      "Practical application of Vedantic principles in everyday life -- how ancient wisdom can guide our modern decisions and relationships.",
    duration: "47 min",
    date: "28 Dec 2024",
    category: "Philosophy",
  },
  {
    title: "Meditation & Mind",
    description:
      "Understanding the mechanics of the mind and the transformative power of meditation as outlined in the Yoga Sutras.",
    duration: "38 min",
    date: "10 Nov 2024",
    category: "Meditation",
  },
  {
    title: "Dharma in Daily Life",
    description:
      "Swamiji explains the multifaceted concept of dharma and how to discover and live by your svadharma in the contemporary world.",
    duration: "55 min",
    date: "22 Oct 2024",
    category: "Dharma",
  },
  {
    title: "Understanding Karma",
    description:
      "A deep dive into the law of karma -- moving beyond simplistic notions to grasp its profound role in self-evolution.",
    duration: "44 min",
    date: "05 Sep 2024",
    category: "Philosophy",
  },
  {
    title: "Path of Devotion",
    description:
      "The Bhakti tradition and the role of devotion in spiritual life -- how love and surrender lead to the highest knowledge.",
    duration: "41 min",
    date: "18 Aug 2024",
    category: "Bhakti",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function TalksPage() {
  return (
    <div className="min-h-screen bg-warm-white">
        {/* ---- Banner ---- */}
        <section className="relative overflow-hidden bg-gradient-to-br from-saffron-dark via-saffron to-earth py-20 sm:py-24">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4">
            <Link
              href="/teachings"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Teachings
            </Link>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Talks by Swamiji
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              Recordings of discourses, satsangs, and spiritual talks exploring the
              depths of Vedanta, meditation, and dharmic living.
            </p>
          </div>
        </section>

        {/* ---- Talks Grid ---- */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TALKS.map((talk) => (
                <article
                  key={talk.title}
                  className="group overflow-hidden rounded-2xl border border-warm-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Thumbnail placeholder */}
                  <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-saffron/10 to-earth/10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-saffron/90 text-white shadow-lg transition-transform group-hover:scale-110">
                      <Play size={28} className="ml-1" />
                    </div>
                    <span className="absolute right-3 top-3 rounded-full bg-text-primary/70 px-3 py-1 text-xs font-medium text-white">
                      {talk.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-text-primary transition-colors group-hover:text-saffron">
                      {talk.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-muted">
                      {talk.description}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-text-muted">
                      <span className="flex items-center gap-1">
                        <Clock size={13} />
                        {talk.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {talk.date}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
}
