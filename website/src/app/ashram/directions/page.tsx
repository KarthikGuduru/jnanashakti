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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Directions to Shakti Ashram | Jnanashakti",
  description:
    "Find directions and travel information to reach Shakti Ashram by air, train, or road.",
};

const travelModes = [
  {
    icon: Plane,
    title: "By Air",
    description:
      "The nearest airport is Pune International Airport (PNQ), approximately 45 km from the ashram. From the airport, you can hire a taxi or use app-based cab services to reach us. The drive takes roughly 1 to 1.5 hours depending on traffic.",
  },
  {
    icon: TrainFront,
    title: "By Train",
    description:
      "Pune Junction (PUNE) is the nearest major railway station, about 40 km away. Several trains connect Pune to Mumbai, Delhi, Bangalore, and other major cities. Pre-paid taxis and auto-rickshaws are available outside the station.",
  },
  {
    icon: Car,
    title: "By Road",
    description:
      "Shakti Ashram is well connected by road. From Pune, take NH48 towards Satara and follow the signs to the ashram after the Bhor exit. The route is scenic and well-maintained. Parking is available at the ashram for visitors arriving by car.",
  },
];

export default function DirectionsPage() {
  return (
    <main className="min-h-screen bg-warm-white">
      {/* ── Banner ── */}
      <section className="bg-gradient-to-br from-saffron-dark via-saffron to-earth py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            How to Reach Shakti Ashram
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/80 sm:text-lg">
            Find us nestled in the serene foothills near Pune, Maharashtra
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

          {/* ── Map placeholder ── */}
          <div className="overflow-hidden rounded-2xl border-2 border-dashed border-warm-border bg-warm-cream">
            <div className="flex aspect-[16/7] items-center justify-center">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-saffron/10">
                  <MapPin className="h-8 w-8 text-saffron" />
                </div>
                <p className="mt-3 text-sm font-medium text-text-muted">
                  Map will be embedded here
                </p>
                <p className="mt-1 text-xs text-text-muted/60">
                  Google Maps embed placeholder
                </p>
              </div>
            </div>
          </div>

          {/* ── Address ── */}
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="rounded-xl border border-warm-border bg-surface p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-saffron/10">
                    <MapPin className="h-5 w-5 text-saffron" />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-semibold text-text-primary">
                      Ashram Address
                    </h2>
                    <address className="mt-2 text-sm not-italic leading-relaxed text-text-muted">
                      Shakti Ashram
                      <br />
                      Village Kolavade, Bhor Taluka
                      <br />
                      Pune District, Maharashtra 412206
                      <br />
                      India
                    </address>
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
                          <p className="mt-2 text-sm leading-relaxed text-text-muted">
                            {mode.description}
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
              about reaching the ashram, our team is happy to help.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-saffron"
              >
                <Phone className="h-4 w-4 text-saffron" />
                +91 98765 43210
              </a>
              <a
                href="mailto:ashram@jnanashakti.org"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-saffron"
              >
                <Mail className="h-4 w-4 text-saffron" />
                ashram@jnanashakti.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
