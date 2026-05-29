import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";

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
        </div>

        {/* Summary card */}
        <div className="mt-12 mx-auto max-w-2xl">
          <div className="rounded-2xl border border-warm-border bg-gradient-to-br from-sky-50 via-warm-cream/40 to-warm-cream/60 p-8 text-center shadow-sm sm:p-10">
            <p className="text-xs font-bold uppercase tracking-widest text-saffron">
              Vancouver, Canada
            </p>
            <h3 className="mt-2 font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Swamiji&apos;s Canada Visit
            </h3>

            {/* Meta row */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-text-muted">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-saffron" />
                7 events · May 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-saffron" />
                Vancouver, Quebec &amp; Toronto
              </span>
            </div>

            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-text-muted">
              A series of talks, lectures, and guided meditation sessions with{" "}
              <strong className="text-text-primary">Swami Chidananda</strong>{" "}
              across Vancouver, Quebec, and Toronto — from the Power of Yoga at
              the Consulate General of India to the three-day{" "}
              <em>Gita for Life</em> series.
            </p>

            <Link
              href="/events"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-saffron-dark"
            >
              See All Dates
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
