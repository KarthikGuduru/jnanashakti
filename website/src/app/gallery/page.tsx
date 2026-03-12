"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Category = "all" | "ashram" | "events" | "satsang" | "nature";

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ashram", label: "Ashram" },
  { key: "events", label: "Events" },
  { key: "satsang", label: "Satsang" },
  { key: "nature", label: "Nature" },
];

interface GalleryItem {
  title: string;
  caption: string;
  category: Exclude<Category, "all">;
  /** Tailwind height class to create masonry-style variation */
  height: string;
  /** Gradient for the placeholder */
  gradient: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: "Main Meditation Hall",
    caption: "The heart of Shakti Ashram -- where seekers gather for daily meditation",
    category: "ashram",
    height: "h-72",
    gradient: "from-saffron/15 to-earth/10",
  },
  {
    title: "Annual Retreat 2024",
    caption: "Over 200 participants joined the week-long spiritual immersion programme",
    category: "events",
    height: "h-56",
    gradient: "from-orange-accent/10 to-saffron/15",
  },
  {
    title: "Evening Satsang",
    caption: "Swamiji addressing devotees during the evening satsang session",
    category: "satsang",
    height: "h-64",
    gradient: "from-earth/10 to-saffron-light/15",
  },
  {
    title: "Ashram Garden Path",
    caption: "The serene walkway lined with flowering trees and meditation benches",
    category: "nature",
    height: "h-80",
    gradient: "from-green-100/50 to-saffron/5",
  },
  {
    title: "Temple Interior",
    caption: "The beautifully adorned sanctum of the ashram temple",
    category: "ashram",
    height: "h-64",
    gradient: "from-saffron/20 to-orange-accent/10",
  },
  {
    title: "Diwali Celebration",
    caption: "The ashram grounds illuminated with thousands of lamps on Diwali night",
    category: "events",
    height: "h-56",
    gradient: "from-orange-accent/15 to-yellow-100/30",
  },
  {
    title: "Morning Chanting",
    caption: "Residents and visitors chanting Vedic hymns at the break of dawn",
    category: "satsang",
    height: "h-72",
    gradient: "from-saffron/10 to-warm-cream",
  },
  {
    title: "Riverside View",
    caption: "The peaceful river flowing beside the ashram, a place for contemplation",
    category: "nature",
    height: "h-56",
    gradient: "from-blue-50 to-saffron/5",
  },
  {
    title: "Library & Study Hall",
    caption: "A quiet space housing rare texts on Vedānta, Yoga, and Indian philosophy",
    category: "ashram",
    height: "h-60",
    gradient: "from-earth/8 to-warm-cream",
  },
  {
    title: "Guru Purnima 2024",
    caption: "The sacred tradition of honouring the Guru on this auspicious day",
    category: "events",
    height: "h-72",
    gradient: "from-saffron/15 to-earth-light/10",
  },
  {
    title: "Bhajan Evening",
    caption: "Devotional singing under the open sky in the āshram courtyard",
    category: "satsang",
    height: "h-56",
    gradient: "from-saffron-light/15 to-orange-accent/5",
  },
  {
    title: "Sunrise over the Hills",
    caption: "The first rays of sunlight painting the hills behind the ashram gold",
    category: "nature",
    height: "h-80",
    gradient: "from-orange-accent/10 to-yellow-50/30",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-warm-white">
        {/* ---- Banner ---- */}
        <section className="relative overflow-hidden bg-gradient-to-br from-saffron-dark via-earth to-saffron-light py-20 sm:py-28">
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
              Photo Gallery
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
              Glimpses of life at <span className="font-[family-name:var(--font-sanskrit)]">Shakti Āshram</span> — moments of devotion, learning,
              celebration, and the natural beauty that surrounds our spiritual home.
            </p>
          </div>
        </section>

        {/* ---- Filter & Gallery ---- */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-4">
            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                    activeCategory === cat.key
                      ? "bg-saffron text-white shadow-sm"
                      : "border border-warm-border bg-surface text-text-muted hover:border-saffron/30 hover:text-text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Masonry-style grid */}
            <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
              {filtered.map((item) => (
                <div
                  key={item.title}
                  className="group mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-warm-border bg-surface shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  {/* Image placeholder */}
                  <div
                    className={`flex items-center justify-center bg-gradient-to-br ${item.gradient} ${item.height}`}
                  >
                    <ImageIcon
                      size={36}
                      className="text-warm-border/60 transition-colors group-hover:text-saffron/30"
                    />
                  </div>

                  {/* Caption */}
                  <div className="p-4">
                    <h3 className="font-heading text-sm font-semibold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-text-muted">
                      {item.caption}
                    </p>
                    <span className="mt-2 inline-block rounded-full bg-saffron/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-saffron">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="mt-16 text-center">
                <ImageIcon size={48} className="mx-auto text-warm-border" />
                <p className="mt-4 text-text-muted">
                  No photos found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
    </div>
  );
}
