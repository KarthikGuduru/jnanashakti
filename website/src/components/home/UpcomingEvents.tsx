import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Event {
  id: string;
  date: { day: string; month: string };
  title: string;
  description: string;
  location: string;
  registrationHref: string;
}

const events: Event[] = [
  {
    id: "fowai-residential-retreat",
    date: { day: "07", month: "Apr" },
    title: "FOWAI Forum — First Residential Retreat",
    description:
      "A residential retreat featuring 'Touching the Infinite — Bhooma-vidyā' by Swami Chidananda and 'The Joy of Freedom — Jeevanmukti' by Swami Abhishek Chaitanya Giri. Limited to 15 persons. ₹1800 per person.",
    location: "Jnana Shakti Ashram, Sudhagad, Raigad",
    registrationHref: "/events/fowai-residential-retreat",
  },
  {
    id: "satsang-series",
    date: { day: "22", month: "Apr" },
    title: "Monthly Satsang & Discourse",
    description:
      "An evening of devotional chanting, scriptural discourse, and open dialogue exploring the essence of dharma in daily life.",
    location: "Community Hall, Bengaluru",
    registrationHref: "/events/satsang-series",
  },
  {
    id: "youth-workshop",
    date: { day: "05", month: "May" },
    title: "Youth Values Workshop",
    description:
      "An interactive workshop for young adults on integrating ancient Indian values with modern career and personal growth.",
    location: "Jnanashakti Ashram, Coimbatore",
    registrationHref: "/events/youth-workshop",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="section-padding bg-warm-cream/40">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Upcoming Programs
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-saffron" />
        </div>

        {/* Event cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.id}
              className="group flex flex-col rounded-2xl bg-surface border border-warm-border/60 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
            >
              {/* Date badge */}
              <div className="flex items-start gap-4 p-6 pb-0">
                <div className="flex flex-col items-center justify-center rounded-xl bg-saffron/10 px-4 py-3 text-center shrink-0">
                  <span className="text-2xl font-bold leading-none text-saffron">
                    {event.date.day}
                  </span>
                  <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-saffron-dark">
                    {event.date.month}
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="font-heading text-lg font-semibold text-text-primary leading-snug">
                    {event.title}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-1 text-sm text-text-muted">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="flex-1 px-6 pt-4 pb-2">
                <p className="text-sm leading-relaxed text-text-muted">
                  {event.description}
                </p>
              </div>

              {/* Register link */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={event.registrationHref}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron transition-colors hover:text-saffron-dark"
                >
                  Register
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
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
