import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles & Writings",
  description:
    "Read Swamiji's articles on spiritual philosophy, Vedanta, meditation, and the application of ancient wisdom in modern life.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const ARTICLES = [
  {
    title: "The Silence Between Thoughts",
    excerpt:
      "In the space between two thoughts lies the doorway to the infinite. This article explores how cultivating inner silence through meditation reveals the ever-present awareness that is our true nature. The practice is not about stopping thoughts, but about discovering what remains when they subside.",
    date: "12 Feb 2025",
    readTime: "8 min read",
    category: "Meditation",
  },
  {
    title: "Karma Yoga: The Art of Selfless Action",
    excerpt:
      "The Bhagavad Gita teaches us that true freedom lies not in inaction but in action performed without attachment to results. This piece examines how Karma Yoga transforms every daily activity into a spiritual practice, from the simplest chores to the most demanding responsibilities.",
    date: "28 Jan 2025",
    readTime: "12 min read",
    category: "Philosophy",
  },
  {
    title: "Guru and Grace: The Living Tradition",
    excerpt:
      "The Guru-Shishya Parampara is the backbone of Indian spiritual transmission. This article reflects on the sacred relationship between teacher and student, and how grace flows through lineage to awaken the dormant knowledge within the seeker.",
    date: "15 Jan 2025",
    readTime: "10 min read",
    category: "Tradition",
  },
  {
    title: "Understanding Samskaras: The Seeds of Habit",
    excerpt:
      "Our deeply ingrained patterns of thought and behaviour, known as samskaras, shape our experience of reality. Swamiji explains the Vedantic view of how these impressions form, persist, and can ultimately be transcended through awareness and right effort.",
    date: "02 Dec 2024",
    readTime: "9 min read",
    category: "Vedanta",
  },
  {
    title: "The Three States of Consciousness",
    excerpt:
      "Waking, dreaming, and deep sleep -- the Mandukya Upanishad uses these three familiar states to point towards the fourth, Turiya, the unchanging witness of all experience. A profound teaching that reveals the nature of awareness itself.",
    date: "18 Nov 2024",
    readTime: "11 min read",
    category: "Upanishads",
  },
  {
    title: "Ahimsa in the Modern World",
    excerpt:
      "Non-violence is far more than the absence of physical harm. This article explores the deeper dimensions of ahimsa as taught in the Indian tradition -- non-violence in thought, speech, and action, and its relevance in our interconnected world.",
    date: "05 Oct 2024",
    readTime: "7 min read",
    category: "Ethics",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-warm-white">
        {/* ---- Banner ---- */}
        <section className="relative overflow-hidden bg-gradient-to-br from-earth via-saffron-dark to-saffron py-20 sm:py-24">
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
              Articles &amp; Writings
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              Reflections and essays by Swamiji on spiritual philosophy, practical
              wisdom, and the ancient teachings applied to contemporary life.
            </p>
          </div>
        </section>

        {/* ---- Articles Grid ---- */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-2">
              {ARTICLES.map((article) => (
                <article
                  key={article.title}
                  className="group rounded-2xl border border-warm-border bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-saffron/10 px-3 py-1 text-xs font-semibold text-saffron">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <Calendar size={12} />
                      {article.date}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-bold text-text-primary transition-colors group-hover:text-saffron">
                    {article.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-text-muted">
                    {article.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron transition-colors group-hover:text-saffron-dark">
                      Read More
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
}
