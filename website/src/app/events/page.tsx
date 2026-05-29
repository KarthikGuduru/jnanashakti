import Image from "next/image";
import {
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  ExternalLink,
  BookOpen,
  Phone,
  Mail,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface EventSession {
  date: string;
  time: string;
  note?: string;
}

interface EventContact {
  name: string;
  detail: string;
}

interface SpiritualEvent {
  id: string;
  poster: string;
  badge: string;
  title: string;
  presenter: string;
  description: string;
  sessions: EventSession[];
  venueName: string;
  venueAddress: string;
  topics?: { heading?: string; items: string[] };
  registerUrl?: string;
  contacts?: EventContact[];
  donation?: string;
}

/* Swamiji's 2026 visit to Vancouver, Canada — in chronological order */
const CANADA_EVENTS: SpiritualEvent[] = [
  {
    id: "power-of-yoga",
    poster: "/images/events/vancouver-yoga-poster.jpg",
    badge: "First Canada Event of the Year",
    title: "Celebrating the Power of Yoga",
    presenter:
      "Consulate General of India, in collaboration with Heartfulness Institute & FOWAI Forum",
    description:
      "An evening celebrating the power of Yoga — featuring Swami Chidananda Saraswati on “The Equanimous Mind”, a reflective presentation on Yoga for Ahimsa by Heartfulness Institute, and a guided Yoga session followed by Heartfulness meditation.",
    sessions: [
      { date: "Thursday, 21 May 2026", time: "4:00 – 6:00 PM" },
    ],
    venueName: "Consulate General of India",
    venueAddress: "3rd Floor Hall, #325 Howe Street, Vancouver, BC",
    registerUrl: "https://bit.ly/2026may21",
    contacts: [
      { name: "Heartfulness Vancouver", detail: "vancouver.bc@heartfulness.org" },
    ],
  },
  {
    id: "guided-meditation",
    poster: "/images/events/guided-meditation.jpg",
    badge: "Daily Morning Practice",
    title: "Guided Meditation",
    presenter: "With Swami Chidananda Saraswati (FOWAI Forum, Mumbai, India)",
    description:
      "Guided Meditation is an excellent tool for beginners, providing a focal point and gentle instruction to help you connect and let go of self-judgement. Come and experience Swami Chidanandaji's unique style of guided meditation.",
    sessions: [
      { date: "22 – 26 May 2026", time: "7:00 – 7:30 AM", note: "Daily morning session" },
    ],
    venueName: "Queensborough Community Centre",
    venueAddress: "Outside Yoga Hall, Queensborough Community Centre",
    donation: "Donations are welcome.",
    contacts: [
      { name: "Jyothi Varma", detail: "jyothivarma2010@gmail.com" },
      { name: "Phone", detail: "604 562 0269" },
    ],
  },
  {
    id: "mahalakshmi-lecture-series",
    poster: "/images/events/mahalakshmi-lecture-series.jpg",
    badge: "Lecture Series",
    title: "Wisdom for Today, Guidance for Life",
    presenter:
      "Shree Mahalakshmi Hindu Temple Vancouver & Organization of Hindu Malayalee Society BC",
    description:
      "A lecture series with Swami Chidananda Saraswati of FOWAI Forum — an internationally acclaimed speaker who makes ancient Indian wisdom accessible to modern audiences.",
    sessions: [
      {
        date: "Saturday, 23 May 2026",
        time: "7:00 – 8:15 PM",
        note: "Followed by light dinner",
      },
      {
        date: "Sunday, 24 May 2026",
        time: "10:30 AM – 12:30 PM",
        note: "Prasadam by Malayalee Community",
      },
      {
        date: "Monday, 25 May 2026",
        time: "7:00 – 8:15 PM",
        note: "Followed by light dinner",
      },
    ],
    venueName: "Sri Mahalakshmi Temple",
    venueAddress: "467 E 11th Avenue, Vancouver, BC",
    topics: {
      heading: "Topics based on the Bhagavad Gītā",
      items: [
        "Stress Reduction — A spiritual Approach",
        "Self Knowledge and Self-realisation",
        "Meditation and Self-healing",
      ],
    },
    contacts: [
      { name: "Jyothi Varma", detail: "604 562 0269" },
      { name: "Remya Nair", detail: "604 715 4962" },
      { name: "Rukmini Prameyaji", detail: "604 725 4757" },
    ],
  },
  {
    id: "ohm-bc-sanatana-dharma",
    poster: "/images/events/ohm-bc-sanatana-dharma.jpg",
    badge: "Special Lecture",
    title: "Why is Hinduism known as Sanātana Dharma?",
    presenter:
      "Organization of Hindu Malayalee Society BC (OHM-BC) presents a lecture",
    description:
      "A special lecture by Swami Chidananda Saraswati of FOWAI Forum (Flame of Who Am I) — an internationally acclaimed speaker and teacher who makes ancient Indian wisdom accessible to modern audiences. Light refreshments will be provided.",
    sessions: [
      { date: "Sunday, 24 May 2026", time: "5:30 – 7:30 PM" },
    ],
    venueName: "Lakshmi Narayan Mandir",
    venueAddress: "8321 140 St, Surrey, BC V3W 5K9",
    topics: {
      heading: "Topic based on the Bhagavad Gītā",
      items: ["Why is Hinduism known as Sanātana Dharma?"],
    },
    contacts: [
      { name: "Jyothi Varma", detail: "604 562 0269" },
      { name: "Remya Nair", detail: "604 715 4962" },
      { name: "Satyamoorthi", detail: "604 365 3082" },
    ],
  },
  {
    id: "gita-for-life",
    poster: "/images/events/gita-for-life.jpg",
    badge: "Three-Day Series",
    title: "Gita for Life — Wisdom for Today, Guidance for Life",
    presenter: "Organization of Hindu Malayalee Society BC (OHM-BC)",
    description:
      "Timeless wisdom, practical living, profound transformation. A three-day series with Swami Chidananda Saraswati. All are welcome — refreshments and snacks will be served.",
    sessions: [
      {
        date: "Tuesday, 26 May 2026",
        time: "7:00 – 8:00 PM",
        note: "How Life gets messed up",
      },
      {
        date: "Wednesday, 27 May 2026",
        time: "7:00 – 8:00 PM",
        note: "How we may rise above all mess",
      },
      {
        date: "Thursday, 28 May 2026",
        time: "7:00 – 8:00 PM",
        note: "The Contours of Joyous Life",
      },
    ],
    venueName: "Anvil Centre",
    venueAddress:
      "777 Columbia Street, New Westminster (Across New West SkyTrain) — 4th Floor, Room 417",
    topics: {
      heading: "Based on inspiration from",
      items: ["Sri Shankara's Vivēka Chūḍāmaṇi"],
    },
    contacts: [
      { name: "Jyothi Varma", detail: "604 562 0269" },
      { name: "Remya Nair", detail: "604 715 4962" },
      { name: "Sathyamoorthi", detail: "+1 604 365 3082" },
    ],
  },
  {
    id: "science-and-spirituality",
    poster: "/images/events/science-and-spirituality.jpg",
    badge: "Talk · Quebec",
    title: "Science & Spirituality",
    presenter: "FOWAI Forum (Flame of Who Am I)",
    description:
      "A talk by Swami Chidananda Saraswati exploring the meeting points of science and spirituality. Language: English. All are welcome.",
    sessions: [
      { date: "Friday, 29 May 2026", time: "6:30 – 8:00 PM" },
    ],
    venueName: "Hindu Mandir",
    venueAddress: "50 Kesmark St, Dollard-Des Ormeaux, Quebec H9B 3K4",
    contacts: [
      { name: "Jyothi Varma", detail: "604 562 0269" },
      { name: "Lakshmi Tata", detail: "514 826 7822" },
      { name: "Anupratap", detail: "514 550 8310" },
    ],
  },
  {
    id: "toronto-events",
    poster: "/images/events/toronto-events.jpg",
    badge: "Events in Toronto · Open to All",
    title: "Toronto Programs",
    presenter:
      "Sringeri Vidya Bharati Foundation Canada & Guruvayurappan Temple of Brampton",
    description:
      "Swami Chidananda's programs in the Greater Toronto Area — a Vedanta Satsang, a youth meet, and a talk on the Mukunda Mala. Open to all.",
    sessions: [
      {
        date: "Saturday, 30 May 2026",
        time: "11:00 AM – 12:00 PM",
        note: "Vedanta Satsang · Sringeri Temple, 80 Brydon Dr, Etobicoke",
      },
      {
        date: "Saturday, 30 May 2026",
        time: "5:00 – 6:30 PM",
        note: "Yuvathma's Youth Meet · Guruvayurappan Temple of Brampton",
      },
      {
        date: "Sunday, 31 May 2026",
        time: "10:30 AM – 12:00 PM",
        note: "Talk on Mukunda Mala · Guruvayurappan Temple of Brampton",
      },
    ],
    venueName: "Etobicoke & Brampton, Ontario",
    venueAddress:
      "Sringeri Temple, 80 Brydon Dr, Etobicoke · Guruvayurappan Temple, 2580 Countryside Drive, Brampton, ON L6R 3T4",
    registerUrl: "https://www.guruvayur.ca",
    contacts: [
      { name: "More info", detail: "www.guruvayur.ca" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Event card                                                         */
/* ------------------------------------------------------------------ */

function EventCard({ event }: { event: SpiritualEvent }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-warm-border bg-gradient-to-br from-sky-50 via-warm-cream/40 to-warm-cream/60 shadow-sm">
      <div className="flex flex-col gap-8 p-6 lg:flex-row lg:items-start lg:gap-10 sm:p-8">
        {/* Poster */}
        <div className="flex justify-center lg:w-72 lg:shrink-0">
          <Image
            src={event.poster}
            alt={`${event.title} — Swami Chidananda Saraswati, Canada 2026`}
            width={520}
            height={760}
            className="w-full max-w-xs rounded-xl border border-warm-border shadow-md lg:max-w-none"
          />
        </div>

        {/* Details */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-saffron" />
            <p className="text-xs font-bold uppercase tracking-widest text-saffron">
              {event.badge}
            </p>
          </div>
          <h3 className="mt-2 font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            {event.title}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-text-primary/70">
            {event.presenter}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-[15px]">
            {event.description}
          </p>

          {/* Sessions */}
          <div className="mt-5 space-y-2.5">
            {event.sessions.map((s) => (
              <div
                key={s.date + s.time}
                className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl border border-warm-border bg-surface px-4 py-3 shadow-sm"
              >
                <span className="flex items-center gap-1.5 text-sm font-semibold text-text-primary">
                  <Calendar className="h-4 w-4 shrink-0 text-saffron" />
                  {s.date}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-saffron">
                  <Clock className="h-3.5 w-3.5 shrink-0" />
                  {s.time}
                </span>
                {s.note && (
                  <span className="text-xs italic text-text-muted">{s.note}</span>
                )}
              </div>
            ))}
          </div>

          {/* Venue */}
          <div className="mt-4 flex items-start gap-2 text-sm text-text-muted">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
            <span>
              <span className="font-semibold text-text-primary">
                {event.venueName}
              </span>
              {" — "}
              {event.venueAddress}
            </span>
          </div>

          {/* Topics */}
          {event.topics && (
            <div className="mt-4 flex items-start gap-2">
              <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
              <div className="text-sm">
                {event.topics.heading && (
                  <p className="font-semibold text-text-primary">
                    {event.topics.heading}
                  </p>
                )}
                <ul className="mt-1 space-y-0.5 text-text-muted">
                  {event.topics.items.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Donation */}
          {event.donation && (
            <p className="mt-3 text-sm font-medium text-text-primary">
              {event.donation}
            </p>
          )}

          {/* Register + contacts */}
          <div className="mt-6 flex flex-col gap-4">
            {event.registerUrl && (
              <a
                href={event.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-saffron px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-saffron-dark"
              >
                Register
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {event.contacts && (
              <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                {event.contacts.map((c) => {
                  const isEmail = c.detail.includes("@");
                  const Icon = isEmail ? Mail : Phone;
                  return (
                    <span
                      key={c.name + c.detail}
                      className="inline-flex items-center gap-1.5 text-xs text-text-muted"
                    >
                      <Icon className="h-3 w-3 text-saffron" />
                      <span className="font-medium text-text-primary">
                        {c.name}:
                      </span>{" "}
                      {c.detail}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  NC Satsang sessions                                                */
/* ------------------------------------------------------------------ */

interface SatsangSession {
  day: string;
  date: string;
  time: string;
  month: string;
  dayNum: string;
}

const NC_SESSIONS: SatsangSession[] = [
  { day: "Friday",   date: "May 8, 2026",  time: "6:30 – 8:00 PM",      month: "MAY", dayNum: "08" },
  { day: "Saturday", date: "May 9, 2026",  time: "10:30 AM – 12:00 PM", month: "MAY", dayNum: "09" },
  { day: "Sunday",   date: "May 10, 2026", time: "6:30 – 8:00 PM",      month: "MAY", dayNum: "10" },
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
        <div className="mx-auto max-w-6xl px-4">

          {/* ── Canada visit ── */}
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-saffron">
              Canada · May 2026
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Swamiji&apos;s Canada Visit
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-saffron" />
            <p className="mx-auto mt-4 max-w-xl text-sm text-text-muted">
              A series of talks, lectures, and guided meditation sessions across
              Vancouver, Quebec, and Toronto through May 2026.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {CANADA_EVENTS.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* ── NC Satsang ── */}
          <div className="mt-16 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-saffron">
              Cary, North Carolina · May 2026
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              United States Satsang
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-saffron" />
          </div>

          <div className="mt-10 rounded-2xl border border-warm-border bg-warm-cream/50 p-6 sm:p-10">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">

              {/* Left — poster */}
              <div className="flex justify-center lg:w-80 lg:shrink-0">
                <Image
                  src="/images/events/nc-satsang-poster.jpg"
                  alt="Finding Peace in Divine Forgiveness — Satsang with Swami Chidananda, Cary NC, May 8–10 2026"
                  width={520}
                  height={700}
                  className="rounded-xl shadow-md border border-warm-border w-full max-w-xs lg:max-w-none"
                />
              </div>

              {/* Right — details */}
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-saffron">
                  Visiting Honorable Guru
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                  &ldquo;Finding Peace in Divine Forgiveness&rdquo;
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">
                  A 3-day Satsang with{" "}
                  <strong className="text-text-primary">Swami Chidananda</strong> centered on the{" "}
                  <em>Shiva Aparadha Kshamapana Stotram</em> — a profound hymn of surrender,
                  forgiveness, and grace.
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-sm text-text-muted">
                  <MapPin className="h-4 w-4 shrink-0 text-saffron" />
                  <span>Home of Duke Hindu Chaplain, 104 Grannon Court, Cary, NC</span>
                </div>

                {/* Session cards */}
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {NC_SESSIONS.map((s) => (
                    <div
                      key={s.day}
                      className="flex flex-col items-center gap-3 rounded-xl border border-warm-border bg-surface p-5 shadow-sm text-center"
                    >
                      <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-saffron text-white">
                        <span className="text-[10px] font-bold uppercase leading-none tracking-wider">
                          {s.month}
                        </span>
                        <span className="mt-0.5 text-lg font-bold leading-none">{s.dayNum}</span>
                      </div>
                      <div>
                        <p className="font-heading text-sm font-semibold text-text-primary">
                          {s.day}
                        </p>
                        <div className="mt-1 flex items-center justify-center gap-1 text-xs text-text-muted">
                          <Calendar className="h-3 w-3" />
                          <span>{s.date}</span>
                        </div>
                        <div className="mt-1.5 flex items-center justify-center gap-1">
                          <Clock className="h-3 w-3 text-saffron" />
                          <span className="text-xs font-semibold text-saffron">{s.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
