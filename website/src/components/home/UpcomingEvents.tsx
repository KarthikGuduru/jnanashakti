import { MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Session {
  dayNum: string;
  month: string;
  day: string;
  time: string;
}

const SESSIONS: Session[] = [
  { dayNum: "08", month: "MAY", day: "Friday, May 8",   time: "6:30 – 8:00 PM" },
  { dayNum: "09", month: "MAY", day: "Saturday, May 9", time: "10:30 AM – 12:00 PM" },
  { dayNum: "10", month: "MAY", day: "Sunday, May 10",  time: "6:30 – 8:00 PM" },
];

export default function UpcomingEvents() {
  return (
    <section className="section-padding bg-warm-cream/40">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-saffron">
            Visiting Honorable Guru
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Upcoming Programs
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-saffron" />
          <p className="mx-auto mt-4 max-w-xl text-sm text-text-muted">
            A 3-day Satsang with <strong className="text-text-primary">Swami Chidananda</strong> on
            the <em>Shiva Aparadha Kshamapana Stotram</em> — Finding Peace in Divine Forgiveness.
          </p>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-sm text-text-muted">
            <MapPin className="h-4 w-4 text-saffron" />
            Home of Duke Hindu Chaplain, 104 Grannon Court, Cary, NC
          </div>
        </div>

        {/* Session cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          {SESSIONS.map((s) => (
            <article
              key={s.dayNum}
              className="group flex flex-col items-center rounded-2xl bg-surface border border-warm-border/60 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-6 text-center"
            >
              {/* Date badge */}
              <div className="flex flex-col items-center justify-center rounded-xl bg-saffron/10 px-5 py-3">
                <span className="text-2xl font-bold leading-none text-saffron">{s.dayNum}</span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-saffron-dark">
                  {s.month}
                </span>
              </div>

              <p className="mt-4 font-heading text-base font-semibold text-text-primary">
                {s.day}
              </p>

              <div className="mt-2 flex items-center gap-1.5 text-sm text-text-muted">
                <Clock className="h-3.5 w-3.5 text-saffron" />
                <span>{s.time}</span>
              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-full border-2 border-saffron px-8 py-3 text-sm font-semibold text-saffron transition-all duration-300 hover:bg-saffron hover:text-white"
          >
            View All Events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
