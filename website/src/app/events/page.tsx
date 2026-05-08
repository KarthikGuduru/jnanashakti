import { MapPin, Calendar, Clock } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface SatsangSession {
  day: string;
  date: string;
  time: string;
  month: string;
  dayNum: string;
}

const NC_SESSIONS: SatsangSession[] = [
  { day: "Friday",   date: "May 8, 2026",  time: "6:30 – 8:00 PM",     month: "MAY", dayNum: "08" },
  { day: "Saturday", date: "May 9, 2026",  time: "10:30 AM – 12:00 PM", month: "MAY", dayNum: "09" },
  { day: "Sunday",   date: "May 10, 2026", time: "6:30 – 8:00 PM",     month: "MAY", dayNum: "10" },
];

/* ------------------------------------------------------------------ */
/*  Page (SSG)                                                         */
/* ------------------------------------------------------------------ */

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-warm-white">

      {/* ── Banner ── */}
      <section className="bg-gradient-to-br from-saffron-dark via-saffron to-earth py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Programs &amp; Events
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
            Retreats, workshops, and{" "}
            <span className="font-[family-name:var(--font-sanskrit)]">satsang</span> sessions
            with Swami Chidananda
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-4">

          {/* ── NC Satsang ── */}
          <div className="rounded-2xl border border-warm-border bg-warm-cream/50 p-6 sm:p-10">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-saffron">
                Visiting Honorable Guru
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                &ldquo;Finding Peace in Divine Forgiveness&rdquo;
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
                A 3-day Satsang with{" "}
                <strong className="text-text-primary">Swami Chidananda</strong> centered on the{" "}
                <em>Shiva Aparadha Kshamapana Stotram</em> — a profound hymn of surrender,
                forgiveness, and grace.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-text-muted">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-saffron" />
                  Home of Duke Hindu Chaplain, 104 Grannon Court, Cary, NC
                </span>
              </div>
            </div>

            {/* Session cards */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {NC_SESSIONS.map((s) => (
                <div
                  key={s.day}
                  className="flex flex-col items-center gap-4 rounded-xl border border-warm-border bg-surface p-6 shadow-sm text-center"
                >
                  <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-saffron text-white">
                    <span className="text-[10px] font-bold uppercase leading-none tracking-wider">
                      {s.month}
                    </span>
                    <span className="mt-0.5 text-xl font-bold leading-none">{s.dayNum}</span>
                  </div>
                  <div>
                    <p className="font-heading text-base font-semibold text-text-primary">
                      {s.day}
                    </p>
                    <div className="mt-1 flex items-center justify-center gap-1 text-xs text-text-muted">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{s.date}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-saffron" />
                      <span className="text-xs font-semibold text-saffron">{s.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
