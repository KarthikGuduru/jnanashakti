import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  MapPin,
  Plane,
  TrainFront,
  Car,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Directions to Jnanashakti Ashram | Jnanashakti",
  description:
    "Find directions and travel information to reach Jnanashakti Ashram at Vave Village, Sudhagad, Raigad District, Maharashtra. Less than 3 hours from Mumbai or Pune.",
};

/* Approximate coordinates for Jambhulpada / Sudhagad area, Raigad */
const LAT = 18.537;
const LNG = 73.308;
const ZOOM = 13;

const travelModes = [
  {
    icon: Plane,
    title: "By Air",
    lines: [
      "Chhatrapati Shivaji Maharaj International Airport (Mumbai) — approx. 3 hours drive",
      "Pune International Airport — approx. 2.5 – 3 hours drive",
    ],
    note: "Hire a taxi or use app-based cab services from either airport.",
  },
  {
    icon: TrainFront,
    title: "By Train",
    lines: [
      "Nearest major station: Pali (Konkan Railway) — approx. 11 km",
      "Lonavala station — approx. 26 km",
      "Pune Junction — approx. 53 km",
    ],
    note: "Autos and local taxis are available from Pali station to the ashram.",
  },
  {
    icon: Car,
    title: "By Road",
    lines: [
      "From Pune: Take NH48 towards Mumbai, exit at Lonavala/Pali, follow signs to Sudhagad / Jambhulpada",
      "From Mumbai: Take Mumbai-Pune Expressway, exit at Lonavala, head south towards Pali and Sudhagad",
    ],
    note: "The route is scenic through the Sahyadri hills. Parking available at the ashram.",
  },
];

export default function DirectionsPage() {
  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${LNG - 0.04}%2C${LAT - 0.025}%2C${LNG + 0.04}%2C${LAT + 0.025}&layer=mapnik&marker=${LAT}%2C${LNG}`;
  const osmLinkUrl = `https://www.openstreetmap.org/?mlat=${LAT}&mlon=${LNG}#map=${ZOOM}/${LAT}/${LNG}`;

  return (
    <main className="min-h-screen bg-warm-white">
      {/* ── Banner ── */}
      <section className="bg-gradient-to-br from-saffron-dark via-saffron to-earth py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            How to Reach the <span className="font-[family-name:var(--font-sanskrit)]">Āshram</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/80 sm:text-lg">
            Vāve Tarfe Āsare, Sudhagadh Taluka, Raigadh Jilha,
            Maharashtra 410 205
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4">
          {/* Back link */}
          <Link
            href="/ashram"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-saffron transition-colors hover:text-saffron-dark"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Ashram
          </Link>

          {/* ── Map ── */}
          <div className="relative overflow-hidden rounded-2xl border border-warm-border shadow-sm">
            {/* OpenStreetMap embed */}
            <iframe
              title="Jnanashakti Ashram location on OpenStreetMap"
              src={osmEmbedUrl}
              className="h-[350px] w-full sm:h-[420px] lg:h-[480px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            {/* Floating label */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-xs">
              <div className="flex items-center gap-3 rounded-xl border border-warm-border bg-surface/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                {/* Om marker */}
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-saffron text-white">
                  <span className="text-lg font-bold leading-none">ॐ</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-[family-name:var(--font-sanskrit)] text-text-primary">
                    Jnāna Shakti Āshram
                  </p>
                  <p className="truncate text-xs text-text-muted">
                    Vāve Tarfe Āsare, Sudhagadh, Maharashtra
                  </p>
                </div>
              </div>
            </div>

            {/* Link to full map */}
            <a
              href={osmLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-4 top-4 rounded-lg bg-surface/90 px-3 py-1.5 text-xs font-medium text-text-primary shadow-md backdrop-blur-sm transition-colors hover:bg-surface hover:text-saffron"
            >
              View larger map &rarr;
            </a>
          </div>

          {/* ── Address + Travel ── */}
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {/* Address card */}
            <div className="lg:col-span-1 space-y-6">
              <div className="rounded-xl border border-warm-border bg-surface p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-saffron text-white">
                    <span className="text-base font-bold leading-none">ॐ</span>
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-semibold text-text-primary">
                      <span className="font-[family-name:var(--font-sanskrit)]">Āshram</span> Address
                    </h2>
                    <address className="mt-2 text-sm not-italic leading-relaxed text-text-muted">
                      <span className="font-[family-name:var(--font-sanskrit)]">Jnāna Shakti Āshram</span>
                      <br />
                      Vāve Tarfe Āsare (वावे तर्फ़े आसरे)
                      <br />
                      Sudhagadh Taluka, Raigadh Jilha
                      <br />
                      Maharashtra 410 205, India
                    </address>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-warm-border bg-surface p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-saffron/10">
                    <Clock className="h-5 w-5 text-saffron" />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-semibold text-text-primary">
                      Distance
                    </h2>
                    <ul className="mt-2 space-y-1 text-sm text-text-muted">
                      <li>~53 km west of Pune</li>
                      <li>~11 km east of Pali</li>
                      <li>~26 km south of Lonavala</li>
                      <li>&lt; 3 hrs from Mumbai / Pune airports</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Travel directions ── */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                Travel Directions
              </h2>
              <div className="mt-6 space-y-6">
                {travelModes.map((mode) => {
                  const Icon = mode.icon;
                  return (
                    <div
                      key={mode.title}
                      className="rounded-xl border border-warm-border bg-surface p-6 shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-saffron/10">
                          <Icon className="h-6 w-6 text-saffron" />
                        </div>
                        <div>
                          <h3 className="font-heading text-lg font-semibold text-text-primary">
                            {mode.title}
                          </h3>
                          <ul className="mt-2 space-y-1.5">
                            {mode.lines.map((line) => (
                              <li
                                key={line}
                                className="flex items-start gap-2 text-sm leading-relaxed text-text-muted"
                              >
                                <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-saffron/60" />
                                {line}
                              </li>
                            ))}
                          </ul>
                          <p className="mt-3 text-xs text-text-muted/80 italic">
                            {mode.note}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Contact for assistance ── */}
          <div className="mt-12 rounded-2xl border border-warm-border bg-warm-cream p-8 text-center sm:p-10">
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              Need Help Getting Here?
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-text-muted">
              If you need assistance with travel arrangements or have questions
              about reaching the āshram, please contact us.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
              <a
                href="tel:+919969432560"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-saffron"
              >
                <Phone className="h-4 w-4 text-saffron" />
                +91 99694 32560 (Vivek Guleria)
              </a>
              <a
                href="mailto:fowaiforum@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-saffron"
              >
                <Mail className="h-4 w-4 text-saffron" />
                fowaiforum@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
