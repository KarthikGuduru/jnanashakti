"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Headphones,
  Video,
  Play,
  Pause,
  Clock,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Archive.org collection                                             */
/* ------------------------------------------------------------------ */

const ARCHIVE_ID = "geeta-01-june-8-2021-52-mins-verses-67-68-of-ch-2";
const ARCHIVE_PAGE = `https://archive.org/details/${ARCHIVE_ID}`;
const YOUTUBE_CHANNEL = "https://www.youtube.com/@fowaiforumflameofwhoami584";

function archiveUrl(filename: string) {
  return `https://archive.org/download/${ARCHIVE_ID}/${encodeURIComponent(filename)}`;
}

/* ------------------------------------------------------------------ */
/*  Types & data                                                       */
/* ------------------------------------------------------------------ */

type TabKey = "video" | "audio";

const TABS: { key: TabKey; label: string; icon: React.ElementType }[] = [
  { key: "video", label: "Video", icon: Video },
  { key: "audio", label: "Audio", icon: Headphones },
];

const VIDEO_ITEMS = [
  { id: "FBJtv1w4mUk", title: "AI: From Artificial to Absolute — The Evolution of Intelligence", duration: "1:00:34" },
  { id: "07i32rgA55U", title: "Know the Upanishads — God and His Creation", duration: "48:54" },
  { id: "2kv_lTa7Glo", title: "Jyotisham Jyoti — The Light of All Lights", duration: "1:08:34" },
  { id: "pQ9DH0fh0Xo", title: "Parliament of the World's Religions 2023, Chicago", duration: "1:04:18" },
  { id: "9nDnQ8cH7wc", title: "Awareness and Time", duration: "1:12:19" },
  { id: "cYd392ks20M", title: "Meditation and Thought", duration: "1:09:16" },
  { id: "g7X0ZgbxqSY", title: "Love and Fear", duration: "1:15:08" },
  { id: "mxpzUIutBw0", title: "Upanishad in Plain English", duration: "41:46" },
  { id: "rJQRiTuTaEs", title: "Sadhana in Srividya", duration: "1:08:55" },
];

type AudioItem = {
  title: string;
  subtitle: string;
  duration: string;
  series: string;
  filename: string;
};

const AUDIO_ITEMS: AudioItem[] = [
  {
    title: "Bhagavad Gītā 2.67 & 2.68",
    subtitle: "June 8, 2021",
    duration: "52 min",
    series: "Bhagavad Gītā",
    filename: "Geeta 01, June 8, 2021, 52 mins, verses 67, 68 of ch 2.mp3",
  },
  {
    title: "Bhagavad Gītā 2.69",
    subtitle: "June 15, 2021",
    duration: "54 min",
    series: "Bhagavad Gītā",
    filename: "Geeta 02, June 15, 2021, 54 mins, verse 69 of ch 2.mp3",
  },
  {
    title: "Bhagavad Gītā 12.8 & 12.9 with Śāṅkara Bhāshya",
    subtitle: "December 31, 2025",
    duration: "44 min",
    series: "Bhagavad Gītā",
    filename: "Geeta 03 Dec 31, 2025, 44 mins, verse 8 and 9 of ch 12 with bhAshya.mp3",
  },
  {
    title: "Bhagavad Gītā 12.11 & 12.12 with Śāṅkara Bhāshya",
    subtitle: "January 21, 2026",
    duration: "54 min",
    series: "Bhagavad Gītā",
    filename: "Geeta 04 Jan 21, 2026, 54 mins, verses 11 and 12, ch 12 with bhAshya.mp3",
  },
  {
    title: "Bhagavad Gītā — Introduction to Chapter 13",
    subtitle: "April 15, 2026",
    duration: "63 min",
    series: "Bhagavad Gītā",
    filename: "Geeta 05 Introduction to chapter 13, April 15, 2026, 63 mins.mp3",
  },
  {
    title: "Viveka Chūḍāmaṇi — Introduction",
    subtitle: "December 1, 2024 · Mumbai",
    duration: "57 min",
    series: "Viveka Chūḍāmaṇi",
    filename: "Viveka Chudamani 01, Intro, Dec 1 2024, 57 mins Mumbai.mp3",
  },
  {
    title: "Viveka Chūḍāmaṇi — Verses 3 to 6",
    subtitle: "December 22, 2024 · Mumbai",
    duration: "60 min",
    series: "Viveka Chūḍāmaṇi",
    filename: "Viveka Chudamani 03, Dec 22 2024, 60 mins verses 3 thru 6, Mumbai.mp3",
  },
  {
    title: "Ātmabodha — Verse 1",
    subtitle: "April 12, 2024",
    duration: "49 min",
    series: "Ātmabodha",
    filename: "ātmabodha 01, 12Apr2024, 49 mins, verse 1.mp3",
  },
  {
    title: "Ātmabodha — Verses 2 & 3",
    subtitle: "April 19, 2024",
    duration: "51 min",
    series: "Ātmabodha",
    filename: "ātmabodha 02, 19Apr2024, 51 mins, verses 2 and 3.mp3",
  },
  {
    title: "You and Your Personality: From Fragmentation to Integration",
    subtitle: "February 9, 2024 · MK Sanghvi College, Juhu",
    duration: "44 min",
    series: "Special Talk",
    filename:
      "You and Your Personality, Fragmentation to Integration, MK Sanghvi College, Juhu Feb 9 2024, 44 mins.mp3",
  },
  {
    title: "Recitation — 5 Verses of the Geetā",
    subtitle: "Chanting by Swāmi Chidānanda",
    duration: "",
    series: "Recitation",
    filename: "recitation, 5 verses of Geeta.mp3",
  },
];

const ALL_SERIES = ["All", ...Array.from(new Set(AUDIO_ITEMS.map((a) => a.series)))];

const SERIES_COLORS: Record<string, string> = {
  "Bhagavad Gītā": "bg-saffron/10 text-saffron",
  "Viveka Chūḍāmaṇi": "bg-earth/10 text-earth",
  "Ātmabodha": "bg-maroon/10 text-maroon",
  "Special Talk": "bg-gold/10 text-gold",
  "Recitation": "bg-saffron/10 text-saffron",
};

/* ------------------------------------------------------------------ */
/*  AudioRow — individual track with expandable player                 */
/* ------------------------------------------------------------------ */

function AudioRow({ item }: { item: AudioItem }) {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => setPlaying(false);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("ended", onEnded);
    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("ended", onEnded);
    };
  }, [open]);

  function togglePlay() {
    if (!open) {
      setOpen(true);
      // audio will autoPlay once revealed
      return;
    }
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) el.play();
    else el.pause();
  }

  return (
    <div className="rounded-xl border border-warm-border bg-surface shadow-sm transition-all duration-200 hover:border-saffron/30 hover:shadow-md">
      {/* Header row */}
      <div className="flex items-center gap-4 p-5">
        {/* Play / Pause button */}
        <button
          onClick={togglePlay}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-saffron/10 text-saffron transition-colors hover:bg-saffron hover:text-white"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
        </button>

        {/* Info */}
        <div className="min-w-0 flex-1">
          <p className="truncate font-heading text-base font-semibold text-text-primary">
            {item.title}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-text-muted">
            {item.duration && (
              <span className="flex items-center gap-1">
                <Clock size={11} />
                {item.duration}
              </span>
            )}
            <span>{item.subtitle}</span>
          </div>
        </div>

        {/* Series badge + expand toggle */}
        <div className="flex shrink-0 items-center gap-2">
          <span
            className={`hidden rounded-full px-2.5 py-0.5 text-xs font-medium font-[family-name:var(--font-sanskrit)] sm:inline ${
              SERIES_COLORS[item.series] ?? "bg-saffron/10 text-saffron"
            }`}
          >
            {item.series}
          </span>
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-full p-1 text-text-muted transition-colors hover:text-saffron"
            aria-label="Expand player"
          >
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Expandable audio player */}
      {open && (
        <div className="border-t border-warm-border px-5 pb-5 pt-4">
          <audio
            ref={audioRef}
            controls
            autoPlay
            preload="metadata"
            src={archiveUrl(item.filename)}
            className="w-full"
          />
          <p className="mt-2 text-right text-xs text-text-muted">
            Hosted on{" "}
            <a
              href={ARCHIVE_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron hover:underline"
            >
              Internet Archive
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("video");
  const [series, setSeries] = useState("All");

  const filteredAudio =
    series === "All" ? AUDIO_ITEMS : AUDIO_ITEMS.filter((a) => a.series === series);

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
            Video discourses and audio talks by{" "}
            <span className="font-[family-name:var(--font-sanskrit)]">Swāmi Chidānanda</span> —
            from YouTube and Internet Archive.
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

          {/* ---- Video tab ---- */}
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

          {/* ---- Audio tab ---- */}
          {activeTab === "audio" && (
            <div className="mt-8">
              {/* Series filter pills */}
              <div className="mb-6 flex flex-wrap gap-2">
                {ALL_SERIES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSeries(s)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold font-[family-name:var(--font-sanskrit)] transition-all ${
                      series === s
                        ? "bg-saffron text-white shadow-sm"
                        : "border border-warm-border bg-surface text-text-muted hover:border-saffron/30 hover:text-saffron"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Track list */}
              <div className="space-y-3">
                {filteredAudio.map((item) => (
                  <AudioRow key={item.filename} item={item} />
                ))}
              </div>

            </div>
          )}

          {/* View all on YouTube (video tab only) */}
          {activeTab === "video" && (
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
          )}
        </div>
      </section>
    </div>
  );
}
