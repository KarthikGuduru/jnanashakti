import Link from "next/link";
import { ArrowLeft, Clock, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talks by Swami Chidananda | Jnanashakti",
  description:
    "Watch Swami Chidananda's talks on Upanishads, Bhagavad Gita Shankara Bhashya, meditation, and spiritual living from the Fowai Forum YouTube channel.",
};

/* ------------------------------------------------------------------ */
/*  Data — real talks from Fowai Forum YouTube channel                 */
/* ------------------------------------------------------------------ */

const YOUTUBE_CHANNEL = "https://www.youtube.com/@fowaiforumflameofwhoami584";

const TALKS = [
  {
    id: "FBJtv1w4mUk",
    title: "AI: From Artificial to Absolute — The Evolution of Intelligence",
    duration: "1:00:34",
    category: "Philosophy",
  },
  {
    id: "ph4-O8VvbT4",
    title: "Bhagavad Gita Shankara Bhashya Chapter 12 (V-13,14)",
    duration: "43:44",
    category: "Gita",
  },
  {
    id: "8j2402Kn0HI",
    title: "What Does the Word Bharata Mean?",
    duration: "4:51",
    category: "Culture",
  },
  {
    id: "07i32rgA55U",
    title: "Know the Upanishads — God and His Creation",
    duration: "48:54",
    category: "Upanishads",
  },
  {
    id: "jwkRn47WpWE",
    title: "Bhagavad Gita Shankara Bhashya Chapter 11 (V-34,35,36)",
    duration: "43:40",
    category: "Gita",
  },
  {
    id: "5ys1Q1NiOnw",
    title: "Know the Upanishads — Series Talk 7",
    duration: "50:42",
    category: "Upanishads",
  },
  {
    id: "Tbz5ilt95-k",
    title: "Know the Upanishads — Series Talk 3",
    duration: "53:32",
    category: "Upanishads",
  },
  {
    id: "qV_47h_bbBs",
    title: "Bhagavad Gita Shankara Bhashya Chapter 10 (37-42)",
    duration: "1:01:19",
    category: "Gita",
  },
  {
    id: "2kv_lTa7Glo",
    title: "Jyotisham Jyoti — The Light of All Lights",
    duration: "1:08:34",
    category: "Vedanta",
  },
  {
    id: "pQ9DH0fh0Xo",
    title: "My Experience of the Parliament of the World's Religions 2023",
    duration: "1:04:18",
    category: "Events",
  },
  {
    id: "9nDnQ8cH7wc",
    title: "Awareness and Time",
    duration: "1:12:19",
    category: "Philosophy",
  },
  {
    id: "cYd392ks20M",
    title: "Meditation and Thought",
    duration: "1:09:16",
    category: "Meditation",
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
            Talks by Swami Chidananda
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Discourses on the Upanishads, Bhagavad Gita Shankara Bhashya,
            meditation, and the perennial philosophy of India — from the Fowai
            Forum YouTube channel.
          </p>
        </div>
      </section>

      {/* ---- Talks Grid ---- */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TALKS.map((talk) => (
              <a
                key={talk.id}
                href={`https://www.youtube.com/watch?v=${talk.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-warm-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* YouTube thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-text-primary/5">
                  <img
                    src={`https://img.youtube.com/vi/${talk.id}/mqdefault.jpg`}
                    alt={talk.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                      <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Category badge */}
                  <span className="absolute right-3 top-3 rounded-full bg-text-primary/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {talk.category}
                  </span>
                  {/* Duration */}
                  <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-xs font-medium text-white">
                    {talk.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading text-base font-bold leading-snug text-text-primary transition-colors group-hover:text-saffron">
                    {talk.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-text-muted">
                    <Clock size={12} />
                    {talk.duration}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* View all on YouTube */}
          <div className="mt-12 text-center">
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-saffron px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-saffron-dark hover:shadow-md"
            >
              View All Talks on YouTube
              <ExternalLink size={16} />
            </a>
            <p className="mt-3 text-sm text-text-muted">
              300+ talks on the Fowai Forum channel
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
