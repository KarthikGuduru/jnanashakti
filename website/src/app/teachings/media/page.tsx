"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Headphones,
  Video,
  Play,
  Clock,
  ExternalLink,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data — real content from Fowai Forum YouTube                       */
/* ------------------------------------------------------------------ */

const YOUTUBE_CHANNEL = "https://www.youtube.com/@fowaiforumflameofwhoami584";

type TabKey = "video" | "audio";

const TABS: { key: TabKey; label: string; icon: React.ElementType }[] = [
  { key: "video", label: "Video", icon: Video },
  { key: "audio", label: "Audio", icon: Headphones },
];

const VIDEO_ITEMS = [
  {
    id: "FBJtv1w4mUk",
    title: "AI: From Artificial to Absolute — The Evolution of Intelligence",
    duration: "1:00:34",
  },
  {
    id: "07i32rgA55U",
    title: "Know the Upanishads — God and His Creation",
    duration: "48:54",
  },
  {
    id: "2kv_lTa7Glo",
    title: "Jyotisham Jyoti — The Light of All Lights",
    duration: "1:08:34",
  },
  {
    id: "pQ9DH0fh0Xo",
    title: "Parliament of the World's Religions 2023, Chicago",
    duration: "1:04:18",
  },
  {
    id: "9nDnQ8cH7wc",
    title: "Awareness and Time",
    duration: "1:12:19",
  },
  {
    id: "cYd392ks20M",
    title: "Meditation and Thought",
    duration: "1:09:16",
  },
  {
    id: "g7X0ZgbxqSY",
    title: "Love and Fear",
    duration: "1:15:08",
  },
  {
    id: "mxpzUIutBw0",
    title: "Upanishad in Plain English",
    duration: "41:46",
  },
  {
    id: "rJQRiTuTaEs",
    title: "Sadhana in Srividya",
    duration: "1:08:55",
  },
];

/* Audio items from the Bhagavad Gita series */
const AUDIO_ITEMS = [
  {
    id: "ph4-O8VvbT4",
    title: "Bhagavad Gita Shankara Bhashya Ch.12 (V-13,14)",
    duration: "43:44",
    series: "Gita Bhashya",
  },
  {
    id: "jwkRn47WpWE",
    title: "Bhagavad Gita Shankara Bhashya Ch.11 (V-34,35,36)",
    duration: "43:40",
    series: "Gita Bhashya",
  },
  {
    id: "qV_47h_bbBs",
    title: "Bhagavad Gita Shankara Bhashya Ch.10 (37-42)",
    duration: "1:01:19",
    series: "Gita Bhashya",
  },
  {
    id: "87--4JluK4E",
    title: "Bhagavad Gita Shankara Bhashya Ch.10 (34,35,36)",
    duration: "46:10",
    series: "Gita Bhashya",
  },
  {
    id: "8r1OwjyagFU",
    title: "Bhagavad Gita Shankara Bhashya Ch.10 Introduction",
    duration: "45:59",
    series: "Gita Bhashya",
  },
  {
    id: "Tbz5ilt95-k",
    title: "Know the Upanishads — Series Talk 3",
    duration: "53:32",
    series: "Upanishads",
  },
  {
    id: "5ys1Q1NiOnw",
    title: "Know the Upanishads — Series Talk 7",
    duration: "50:42",
    series: "Upanishads",
  },
  {
    id: "uxck-tlLBDc",
    title: "Know the Upanishads — Series Talk 2",
    duration: "41:01",
    series: "Upanishads",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("video");

  return (
    <div className="min-h-screen bg-warm-white">
      {/* ---- Banner ---- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-saffron via-saffron-dark to-earth py-20 sm:py-24">
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
            Media Library
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Browse video discourses and audio talks by <span className="font-[family-name:var(--font-sanskrit)]">Swāmi Chidānanda</span> from the
            Fowai Forum YouTube channel.
          </p>
        </div>
      </section>

      {/* ---- Tabs ---- */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4">
          {/* Tab bar */}
          <div className="flex gap-2 rounded-xl border border-warm-border bg-surface p-1.5 sm:inline-flex">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeTab === tab.key
                    ? "bg-saffron text-white shadow-sm"
                    : "text-text-muted hover:bg-warm-white hover:text-text-primary"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Video tab */}
          {activeTab === "video" && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {VIDEO_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`https://www.youtube.com/watch?v=${item.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-2xl border border-warm-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* YouTube thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-text-primary/5">
                    <img
                      src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                        <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-xs font-medium text-white">
                      {item.duration}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-base font-semibold text-text-primary group-hover:text-saffron">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex items-center gap-1 text-xs text-text-muted">
                      <Clock size={12} />
                      {item.duration}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Audio tab — Gita Bhashya & Upanishad series */}
          {activeTab === "audio" && (
            <div className="mt-8 space-y-4">
              {AUDIO_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`https://www.youtube.com/watch?v=${item.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-warm-border bg-surface p-5 shadow-sm transition-all hover:border-saffron/30 hover:shadow-md sm:gap-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-saffron/10 text-saffron transition-colors group-hover:bg-saffron group-hover:text-white">
                    <Play size={20} className="ml-0.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-heading text-base font-semibold text-text-primary group-hover:text-saffron">
                      {item.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-3 text-xs text-text-muted">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {item.duration}
                      </span>
                      <span className="rounded-full bg-saffron/10 px-2.5 py-0.5 text-xs font-medium font-[family-name:var(--font-sanskrit)] text-saffron">
                        {item.series}
                      </span>
                    </div>
                  </div>
                  <ExternalLink size={16} className="shrink-0 text-text-muted/40 transition-colors group-hover:text-saffron" />
                </a>
              ))}
            </div>
          )}

          {/* View all on YouTube */}
          <div className="mt-12 text-center">
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-saffron px-8 py-3 text-sm font-semibold text-saffron transition-all hover:bg-saffron hover:text-white"
            >
              Browse All on YouTube
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
