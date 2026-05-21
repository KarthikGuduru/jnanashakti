import { MapPin, Clock, Calendar, ArrowRight, Sparkles } from "lucide-react";
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
          <p className="mx-auto mt-4 max-w-xl text-sm text-text-muted">
            <strong className="text-text-primary">Swami Chidananda&apos;s</strong> first event
            in Canada this year — an evening celebrating the power of Yoga at the Consulate
            General of India, Vancouver.
          </p>
        </div>

        {/* Featured event card */}
        <div className="mt-12 mx-auto max-w-4xl rounded-2xl border border-warm-border bg-gradient-to-br from-sky-50 via-warm-cream/40 to-warm-cream/60 p-6 shadow-sm sm:p-10">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-saffron" />
            <p className="text-xs font-bold uppercase tracking-widest text-saffron">
              First Canada Event of the Year
            </p>
          </div>

          <h3 className="mt-2 font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Celebrating the Power of Yoga
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">
            The <strong className="text-text-primary">Consulate General of India</strong>,
            in collaboration with{" "}
            <strong className="text-text-primary">Heartfulness Institute</strong> &amp;{" "}
            <strong className="text-text-primary">FOWAI Forum</strong>, invites you to an
            evening featuring{" "}
            <strong className="text-text-primary">Swami Chidananda Saraswati</strong> on{" "}
            <em>The Equanimous Mind</em>, a reflective presentation on Yoga for{" "}
            <em>Ahimsa</em>, and a guided Yoga &amp; Heartfulness meditation.
          </p>

          {/* When + Where */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-2.5 rounded-xl border border-warm-border bg-surface px-4 py-3 shadow-sm">
              <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
              <div className="text-sm">
                <p className="font-semibold text-text-primary">Thursday, 21 May 2026</p>
                <div className="mt-0.5 flex items-center gap-1 text-text-muted">
                  <Clock className="h-3 w-3" />
                  <span>4:00 – 6:00 PM</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2.5 rounded-xl border border-warm-border bg-surface px-4 py-3 shadow-sm">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
              <div className="text-sm">
                <p className="font-semibold text-text-primary">Consulate General of India</p>
                <p className="text-text-muted">
                  3rd Floor Hall, #325 Howe Street, Vancouver, BC
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="https://bit.ly/2026may21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-saffron-dark"
            >
              Register
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <Link
              href="/events"
              className="text-sm font-medium text-text-muted transition-colors hover:text-saffron"
            >
              View full programme &rarr;
            </Link>
          </div>
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
