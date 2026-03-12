"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types & Data                                                       */
/* ------------------------------------------------------------------ */

type EventType = "Retreats" | "Workshops" | "Satsang";
type FilterTab = "All" | EventType;

interface EventItem {
  id: string;
  title: string;
  description: string;
  dateLabel: string;
  month: string;
  day: string;
  location: string;
  type: EventType;
}

const EVENTS: EventItem[] = [
  {
    id: "meditation-retreat",
    title: "Meditation Retreat",
    description:
      "A three-day immersive retreat focusing on silent meditation, prānāyāma, and guided contemplation for inner peace.",
    dateLabel: "Mar 15 - 17, 2026",
    month: "MAR",
    day: "15",
    location: "Shakti Ashram, Pune",
    type: "Retreats",
  },
  {
    id: "weekend-satsang",
    title: "Weekend Satsang",
    description:
      "Join us every Saturday for satsang with discourse on Vedāntic teachings, devotional chanting, and guided meditation.",
    dateLabel: "Every Saturday",
    month: "SAT",
    day: "Eve",
    location: "Shakti Ashram, Main Hall",
    type: "Satsang",
  },
  {
    id: "youth-workshop",
    title: "Youth Workshop",
    description:
      "An interactive workshop for young adults exploring the relevance of ancient wisdom in modern life through discussion and practice.",
    dateLabel: "Apr 5, 2026",
    month: "APR",
    day: "05",
    location: "Shakti Ashram, Seminar Hall",
    type: "Workshops",
  },
  {
    id: "vedanta-study",
    title: "Vedanta Study Group",
    description:
      "Weekly sessions studying the Upanishads and Bhagavad Gītā under the guidance of senior teachers. Open to all levels.",
    dateLabel: "Every Wednesday",
    month: "WED",
    day: "Eve",
    location: "Shakti Ashram, Library",
    type: "Satsang",
  },
  {
    id: "annual-retreat",
    title: "Annual Retreat",
    description:
      "The flagship week-long residential retreat featuring intensive study, meditation, and self-inquiry in a supportive community.",
    dateLabel: "May 1 - 7, 2026",
    month: "MAY",
    day: "01",
    location: "Shakti Ashram, Pune",
    type: "Retreats",
  },
  {
    id: "special-discourse",
    title: "Special Discourse",
    description:
      "A special evening discourse by a visiting teacher on the theme of 'Self-Knowledge and Daily Life'. Open to all.",
    dateLabel: "Apr 20, 2026",
    month: "APR",
    day: "20",
    location: "Shakti Ashram, Main Hall",
    type: "Workshops",
  },
];

const TABS: FilterTab[] = ["All", "Retreats", "Workshops", "Satsang"];

/* ------------------------------------------------------------------ */
/*  Tag colour map                                                     */
/* ------------------------------------------------------------------ */

function typeTagClasses(type: EventType): string {
  switch (type) {
    case "Retreats":
      return "bg-saffron/10 text-saffron";
    case "Workshops":
      return "bg-earth/10 text-earth";
    case "Satsang":
      return "bg-orange-accent/10 text-orange-accent";
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");

  const filteredEvents = useMemo(
    () =>
      activeTab === "All"
        ? EVENTS
        : EVENTS.filter((e) => e.type === activeTab),
    [activeTab]
  );

  return (
    <main className="min-h-screen bg-warm-white">
      {/* ── Banner ── */}
      <section className="bg-gradient-to-br from-saffron-dark via-saffron to-earth py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Programs &amp; Events
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
            Explore retreats, workshops, and <span className="font-[family-name:var(--font-sanskrit)]">satsang</span> sessions at Shakti Ashram
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4">
          {/* ── Filter tabs ── */}
          <div className="flex flex-wrap items-center gap-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-saffron text-white shadow-sm"
                    : "border border-warm-border bg-surface text-text-muted hover:border-saffron/40 hover:text-saffron"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ── Event cards grid ── */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-warm-border bg-surface shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Top bar with date badge */}
                <div className="flex items-start gap-4 p-6 pb-0">
                  {/* Date badge */}
                  <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-saffron text-white">
                    <span className="text-[10px] font-bold uppercase leading-none tracking-wider">
                      {event.month}
                    </span>
                    <span className="mt-0.5 text-xl font-bold leading-none">
                      {event.day}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${typeTagClasses(event.type)}`}
                    >
                      {event.type}
                    </span>
                    <h3 className="mt-1.5 font-heading text-lg font-semibold leading-snug text-text-primary">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col px-6 pt-3 pb-6">
                  <p className="flex-1 text-sm leading-relaxed text-text-muted">
                    {event.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-4 space-y-1.5 text-xs text-text-muted">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-saffron" />
                      <span>{event.dateLabel}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-saffron" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Register button */}
                  <Link
                    href={`/events/${event.id}`}
                    className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-saffron py-2.5 text-sm font-semibold text-saffron transition-all hover:bg-saffron hover:text-white"
                  >
                    Register
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {filteredEvents.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-text-muted">
                No events found in this category.
              </p>
              <button
                onClick={() => setActiveTab("All")}
                className="mt-3 text-sm font-medium text-saffron hover:text-saffron-dark"
              >
                View all events
              </button>
            </div>
          )}

          {/* ── Registration note ── */}
          <div className="mt-14 rounded-2xl border border-warm-border bg-warm-cream p-8 text-center sm:p-10">
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              Registration Queries
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-text-muted">
              For questions about event registration, availability, or group
              bookings, please reach out to our events team.
            </p>
            <a
              href="mailto:events@jnanashakti.org"
              className="mt-4 inline-block text-sm font-semibold text-saffron transition-colors hover:text-saffron-dark"
            >
              events@jnanashakti.org
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
