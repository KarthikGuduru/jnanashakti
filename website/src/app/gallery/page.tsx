"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Category = "all" | "ashram" | "events";

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ashram", label: "Ashram" },
  { key: "events", label: "Inauguration" },
];

interface GalleryItem {
  title: string;
  caption: string;
  category: Exclude<Category, "all">;
  /** Tailwind height class to create masonry-style variation */
  height: string;
  /** Path to the real image under /public */
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: "Meditation Hall",
    caption: "The meditation hall at Jnāna Shakti Āshram, from outside.",
    category: "ashram",
    height: "h-72",
    image: "/images/ashram/meditation-hall-outside.jpg",
  },
  {
    title: "Chief Guest Address",
    caption:
      "Dr M Nagaraju, chief guest at the inauguration, speaking on 15 January 2026.",
    category: "events",
    height: "h-56",
    image: "/images/ashram/inauguration-dr-nagaraju.jpg",
  },
  {
    title: "Āchārya Cottages",
    caption: "The two Āchārya cottages on the āshram grounds.",
    category: "ashram",
    height: "h-64",
    image: "/images/ashram/acharya-cottages.jpg",
  },
  {
    title: "Lighting the Lamp",
    caption:
      "Brni Vibha Chaitanya and Swami Advayaananda lighting the ceremonial lamp at the inauguration.",
    category: "events",
    height: "h-80",
    image: "/images/ashram/lamp-lighting.jpg",
  },
  {
    title: "Meditation Hall Interior",
    caption:
      "The meditation hall from within — finishing touches still being given.",
    category: "ashram",
    height: "h-64",
    image: "/images/ashram/meditation-hall-inside.jpg",
  },
  {
    title: "Inaugural Gathering",
    caption:
      "A section of the participants gathered for the inauguration on 15 January 2026.",
    category: "events",
    height: "h-56",
    image: "/images/ashram/inauguration-gathering.jpg",
  },
  {
    title: "Residential Block",
    caption:
      "The block of ten rooms for visitors and retreat participants, with the āshram office.",
    category: "ashram",
    height: "h-72",
    image: "/images/ashram/rooms-block.jpg",
  },
  {
    title: "Āshram Entrance",
    caption: "The entrance to Jnāna Shakti Āshram on the inaugural day.",
    category: "events",
    height: "h-56",
    image: "/images/ashram/ashram-entrance.jpg",
  },
  {
    title: "Dining Hall & Kitchen",
    caption: "The dining hall and kitchen serving the āshram community.",
    category: "ashram",
    height: "h-60",
    image: "/images/ashram/dining-hall.jpg",
  },
  {
    title: "Guest of Honour",
    caption:
      "Guest of Honour Dr Vinayachandra Banavaty addressing the gathering.",
    category: "events",
    height: "h-72",
    image: "/images/ashram/dr-banavaty.jpg",
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
              Glimpses of life at <span className="font-[family-name:var(--font-sanskrit)]">Jnāna Shakti Āshram</span> — the facilities, the
              inauguration on 15 January 2026, and the community that gathers here.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-xs text-white/70">
              Note: Finishing touches are still being given in several places; some of these photos will be replaced with better ones over the coming weeks.
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
                  {/* Image */}
                  <div className={`relative w-full ${item.height} overflow-hidden`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
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
