"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Headphones,
  Video,
  Camera,
  Play,
  Clock,
  Download,
  Image as ImageIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type TabKey = "audio" | "video" | "photos";

const TABS: { key: TabKey; label: string; icon: React.ElementType }[] = [
  { key: "audio", label: "Audio", icon: Headphones },
  { key: "video", label: "Video", icon: Video },
  { key: "photos", label: "Photos", icon: Camera },
];

const AUDIO_ITEMS = [
  { title: "Morning Meditation Chant", duration: "22 min", date: "10 Feb 2025" },
  { title: "Upanishad Discourse -- Isha", duration: "58 min", date: "01 Feb 2025" },
  { title: "Evening Satsang: Q&A Session", duration: "45 min", date: "20 Jan 2025" },
  { title: "Guided Pranayama Practice", duration: "30 min", date: "14 Jan 2025" },
  { title: "Bhagavad Gita Chapter 2 Commentary", duration: "1 hr 5 min", date: "28 Dec 2024" },
  { title: "Vedantic Chanting -- Nirvana Shatakam", duration: "18 min", date: "15 Dec 2024" },
];

const VIDEO_ITEMS = [
  { title: "Swamiji at Kumbh Mela 2025", duration: "12 min", date: "22 Jan 2025" },
  { title: "Annual Retreat Highlights", duration: "8 min", date: "10 Jan 2025" },
  { title: "Discourse: The Yoga of Knowledge", duration: "52 min", date: "05 Dec 2024" },
  { title: "Ashram Tour with Commentary", duration: "15 min", date: "20 Nov 2024" },
  { title: "Diwali Celebration at Ashram", duration: "6 min", date: "01 Nov 2024" },
  { title: "Guru Purnima Address", duration: "35 min", date: "21 Jul 2024" },
];

const PHOTO_ITEMS = [
  { title: "Ashram at Sunrise", caption: "The main meditation hall bathed in golden morning light" },
  { title: "Satsang Gathering", caption: "Seekers assembled for evening satsang in the open pavilion" },
  { title: "Temple Puja", caption: "Daily morning puja ceremony at the ashram temple" },
  { title: "Garden Meditation", caption: "The serene garden path used for walking meditation" },
  { title: "Annual Yagna", caption: "Sacred fire ceremony during the annual spiritual retreat" },
  { title: "Library Corner", caption: "The ashram library housing rare Vedantic texts" },
  { title: "Community Kitchen", caption: "Volunteers preparing prasadam for ashram residents" },
  { title: "Riverside Evening", caption: "Evening aarti by the river near the ashram grounds" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("audio");

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
              Browse our growing collection of audio recordings, videos, and photographs
              from ashram life, retreats, and spiritual gatherings.
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

            {/* Audio tab */}
            {activeTab === "audio" && (
              <div className="mt-8 space-y-4">
                {AUDIO_ITEMS.map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-center gap-4 rounded-xl border border-warm-border bg-surface p-5 shadow-sm transition-all hover:border-saffron/30 hover:shadow-md sm:gap-6"
                  >
                    <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-saffron/10 text-saffron transition-colors group-hover:bg-saffron group-hover:text-white">
                      <Play size={20} className="ml-0.5" />
                    </button>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-heading text-base font-semibold text-text-primary group-hover:text-saffron">
                        {item.title}
                      </h3>
                      <div className="mt-1 flex items-center gap-3 text-xs text-text-muted">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {item.duration}
                        </span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <button className="hidden shrink-0 rounded-lg border border-warm-border p-2.5 text-text-muted transition-colors hover:border-saffron/30 hover:text-saffron sm:block">
                      <Download size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Video tab */}
            {activeTab === "video" && (
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {VIDEO_ITEMS.map((item) => (
                  <div
                    key={item.title}
                    className="group overflow-hidden rounded-2xl border border-warm-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Video thumbnail placeholder */}
                    <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-text-primary/5 to-saffron/10">
                      <button className="flex h-14 w-14 items-center justify-center rounded-full bg-saffron/90 text-white shadow-lg transition-transform group-hover:scale-110">
                        <Play size={24} className="ml-1" />
                      </button>
                      <span className="absolute bottom-2 right-2 rounded bg-text-primary/70 px-2 py-0.5 text-xs font-medium text-white">
                        {item.duration}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-base font-semibold text-text-primary group-hover:text-saffron">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-text-muted">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Photos tab */}
            {activeTab === "photos" && (
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {PHOTO_ITEMS.map((item, idx) => (
                  <div
                    key={item.title}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-warm-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Photo placeholder */}
                    <div
                      className="flex items-center justify-center bg-gradient-to-br from-saffron/5 to-earth/10"
                      style={{ height: idx % 3 === 0 ? "14rem" : "11rem" }}
                    >
                      <ImageIcon
                        size={32}
                        className="text-warm-border transition-colors group-hover:text-saffron/40"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-text-muted">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
    </div>
  );
}
