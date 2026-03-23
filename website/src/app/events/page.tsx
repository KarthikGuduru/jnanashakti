"use client";

import { useRef } from "react";
import Image from "next/image";
import { MapPin, Calendar, Clock, Users, Phone, IndianRupee, ArrowRight, Banknote, Building2 } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types & Data                                                       */
/* ------------------------------------------------------------------ */

interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  speaker: string;
  description: string;
  dateLabel: string;
  timeLabel: string;
  month: string;
  day: string;
  location: string;
}

const EVENTS: EventItem[] = [
  {
    id: "touching-the-infinite",
    title: "Touching the Infinite",
    subtitle: "Bhooma-vidyā",
    speaker: "Swami Chidananda",
    description:
      "An exploration of Bhooma-vidyā from the Chāndogya Upanishad — the teaching of the Infinite. Pursuing the question 'Who am I?' makes our likes and dislikes fall away. Pure perception takes place, heralding freedom.",
    dateLabel: "Tuesday, April 7, 2026",
    timeLabel: "Starts 12:00 PM",
    month: "APR",
    day: "07",
    location: "Jnana Shakti Ashram, Village Vave Tarfe Asare, Sudhagad, Raigad, Maharashtra 410205",
  },
  {
    id: "the-joy-of-freedom",
    title: "The Joy of Freedom",
    subtitle: "Jeevanmukti",
    speaker: "Swami Abhishek Chaitanya Giri",
    description:
      "A discourse on Jeevanmukti — liberation while living. Discover how self-knowledge transforms daily life into an expression of freedom, clarity, and joy.",
    dateLabel: "Wednesday, April 8, 2026",
    timeLabel: "Ends 3:00 PM",
    month: "APR",
    day: "08",
    location: "Jnana Shakti Ashram, Village Vave Tarfe Asare, Sudhagad, Raigad, Maharashtra 410205",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function EventsPage() {
  const payRef = useRef<HTMLDivElement>(null);

  function scrollToPayment() {
    payRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-warm-white">
      {/* ── Banner ── */}
      <section className="bg-gradient-to-br from-saffron-dark via-saffron to-earth py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Programs &amp; Events
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
            FOWAI Forum — First Residential Retreat at{" "}
            <span className="font-[family-name:var(--font-sanskrit)]">Jnana Shakti</span>
          </p>
        </div>
      </section>

      {/* ── Retreat overview ── */}
      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-2xl border border-warm-border bg-warm-cream p-6 sm:p-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-saffron">
              FOWAI Forum
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              The Flame of Who am I?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
              Pursuing this question makes our likes and dislikes fall away. Pure perception
              takes place, heralding freedom.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-text-muted">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-saffron" />
                April 7–8, 2026 (Tue–Wed)
              </span>
              <span className="flex items-center gap-1.5">
                <IndianRupee className="h-4 w-4 text-saffron" />
                ₹1,800 per person
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-saffron" />
                Limited to 15 persons
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-text-muted">
              <span className="flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-saffron" />
                +91 77159 33334
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-saffron" />
                +91 93733 24070
              </span>
            </div>

            {/* Posters */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-warm-border shadow-sm">
                <Image
                  src="/images/fowai-retreat-poster.jpg"
                  alt="FOWAI Forum First Residential Retreat poster — Touching the Infinite by Swami Chidananda and The Joy of Freedom by Swami Abhishek Chaitanya Giri, April 7–8, 2026"
                  width={600}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-warm-border shadow-sm">
                <Image
                  src="/images/fowai-retreat-details.jpg"
                  alt="FOWAI Forum retreat details — Jnana Shakti Ashram address, group photo, and retreat donation information"
                  width={600}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* ── Event cards ── */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {EVENTS.map((event) => (
              <article
                key={event.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-warm-border bg-surface shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Top bar with date badge */}
                <div className="flex items-start gap-4 p-6 pb-0">
                  <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-saffron text-white">
                    <span className="text-[10px] font-bold uppercase leading-none tracking-wider">
                      {event.month}
                    </span>
                    <span className="mt-0.5 text-xl font-bold leading-none">
                      {event.day}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="inline-block rounded-full bg-saffron/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-saffron">
                      Retreat
                    </span>
                    <h3 className="mt-1.5 font-heading text-lg font-semibold leading-snug text-text-primary">
                      {event.title}
                    </h3>
                    <p className="font-[family-name:var(--font-sanskrit)] text-sm text-earth italic">
                      {event.subtitle}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col px-6 pt-3 pb-6">
                  <p className="text-sm font-semibold text-text-primary">
                    {event.speaker}
                  </p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                    {event.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-4 space-y-1.5 text-xs text-text-muted">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-saffron" />
                      <span>{event.dateLabel}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-saffron" />
                      <span>{event.timeLabel}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-saffron" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Register button */}
                  <button
                    onClick={scrollToPayment}
                    className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-saffron py-2.5 text-sm font-semibold text-saffron transition-all hover:bg-saffron hover:text-white"
                  >
                    Register &amp; Pay
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* ── How to Pay ── */}
          <div ref={payRef} id="register" className="mt-14 scroll-mt-24 rounded-2xl border border-warm-border bg-warm-cream p-8 sm:p-10">
            <h2 className="font-heading text-2xl font-bold text-text-primary text-center">
              How to Pay ₹1,800
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-text-muted text-center">
              The retreat donation of ₹1,800 per person is inclusive of stay and food.
              You can pay using either of the two options below.
            </p>

            <div className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
              {/* Option 1 — Cheque */}
              <div className="rounded-xl border border-warm-border bg-surface p-6">
                <div className="flex items-center gap-2">
                  <Banknote className="h-5 w-5 text-saffron" />
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    Option 1 — Cheque
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  Write a cheque in favour of <strong className="text-text-primary">FOWAI FORUM</strong> and
                  hand it over to us when you come.
                </p>
              </div>

              {/* Option 2 — NEFT */}
              <div className="rounded-xl border border-warm-border bg-surface p-6">
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-saffron" />
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    Option 2 — NEFT
                  </h3>
                </div>
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-text-muted">Bank</dt>
                    <dd className="font-medium text-text-primary">HDFC Bank</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-text-muted">Branch</dt>
                    <dd className="font-medium text-text-primary">Vishal Hall, Andheri East, Mumbai</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-text-muted">Account holder</dt>
                    <dd className="font-medium text-text-primary">FOWAI FORUM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-text-muted">IFSC</dt>
                    <dd className="font-medium text-text-primary">HDFC0000086</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-text-muted">Type</dt>
                    <dd className="font-medium text-text-primary">Savings Bank</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-text-muted">Account no.</dt>
                    <dd className="font-medium text-text-primary">50100 24494 2248</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Note for non-Indian citizens */}
            <p className="mx-auto mt-6 max-w-lg text-center text-sm text-text-muted">
              The above is for Indian citizens. Others may please contact us at{" "}
              <a href="tel:+919373324070" className="font-semibold text-saffron hover:text-saffron-dark">+91 93733 24070</a>
              {" "}or{" "}
              <a href="tel:+917715933334" className="font-semibold text-saffron hover:text-saffron-dark">+91 77159 33334</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
