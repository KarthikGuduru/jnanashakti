import Link from "next/link";
import {
  Heart,
  BookOpen,
  Building2,
  ShieldCheck,
  ArrowLeft,
  AlertTriangle,
  Clock,
  Landmark,
  Phone,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const IMPACT_AREAS = [
  {
    icon: Heart,
    title: "Sponsor a Meal",
    amount: 500,
    description:
      "Provide nourishing meals for ashram visitors and seekers who come for spiritual guidance and learning.",
  },
  {
    icon: BookOpen,
    title: "Support Education",
    amount: 2000,
    description:
      "Fund spiritual education programs, workshops, and the publication of teachings that transform lives.",
  },
  {
    icon: Building2,
    title: "Construction Fund",
    amount: 5000,
    description:
      "Contribute to the expansion of ashram facilities, meditation halls, and accommodation for seekers.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page (SSG — no "use client" needed)                                */
/* ------------------------------------------------------------------ */

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-warm-white">

      {/* ── FCRA Legal Notice ── */}
      <div className="border-b border-amber-200 bg-amber-50 py-5">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-start gap-3 text-sm text-amber-900">
            <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-600" />
            <div className="space-y-3 leading-relaxed">
              <p>
                <span className="font-semibold">As per Indian Law:</span>{" "}
                <span className="font-semibold">FOWAI FORUM</span> (which runs
                the <span className="font-[family-name:var(--font-sanskrit)]">Jnāna Shakti āshram</span>) is not allowed to take
                donations from people holding non-Indian passports in the
                following ways:
              </p>
              <ol className="ml-1 list-inside list-decimal space-y-1">
                <li>
                  through Apps/Portals like RazorPay, Billdesk etc.
                </li>
                <li>
                  through bank transfers from their NRO accounts.
                </li>
              </ol>
              <p>
                Having OCI or PIO cards will not make an exception to the
                above scenario.
              </p>
              <div>
                <p className="font-semibold">How then to contribute:</p>
                <p className="mt-1">
                  Donors with foreign passports may send cheques (in foreign
                  currency or INR) in favour of{" "}
                  <span className="font-semibold">FOWAI FORUM</span> to the
                  trust&apos;s Mumbai address.
                </p>
              </div>
              <address className="not-italic">
                <span className="font-semibold">FOWAI FORUM</span>
                <br />
                8/53, Verma Nagar,
                <br />
                Andheri East,
                <br />
                Mumbai 400 069 India.
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-saffron-dark via-saffron to-saffron-light py-20 sm:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white" />
          <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Support Our Mission
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
            Your generosity enables us to continue spreading ancient wisdom, nurturing
            human values, and providing a sanctuary for spiritual seekers.
          </p>
        </div>
      </section>

      {/* ── Impact Areas ── */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Your Impact
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-muted">
              Every contribution directly supports the ashram&apos;s mission of spiritual
              education and service to humanity.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {IMPACT_AREAS.map((area) => (
              <div
                key={area.title}
                className="group rounded-2xl border border-warm-border bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-saffron/10 text-saffron transition-colors group-hover:bg-saffron group-hover:text-white">
                  <area.icon size={28} />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-text-primary">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {area.description}
                </p>
                <p className="mt-4 text-2xl font-bold text-saffron">
                  Rs {area.amount.toLocaleString("en-IN")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coming Soon + Bank Details ── */}
      <section className="section-padding bg-warm-cream/50">
        <div className="mx-auto max-w-2xl px-4">

          {/* Coming Soon card */}
          <div className="rounded-2xl border border-warm-border bg-surface p-10 shadow-sm text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-saffron/10">
              <Clock size={32} className="text-saffron" />
            </div>
            <h2 className="mt-5 font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Online Donations — Coming Soon
            </h2>
            <p className="mx-auto mt-3 max-w-md text-text-muted leading-relaxed">
              We are setting up a secure payment gateway. In the meantime, please
              donate directly via bank transfer or get in touch with us.
            </p>
          </div>

          {/* Bank transfer details */}
          <div className="mt-8 rounded-2xl border border-warm-border bg-surface p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-saffron/10 text-saffron">
                <Landmark size={20} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-primary">
                Bank Transfer (NEFT / IMPS)
              </h3>
            </div>
            <dl className="mt-5 divide-y divide-warm-border text-sm">
              {[
                ["Account Holder", "FOWAI FORUM"],
                ["Bank", "HDFC Bank"],
                ["Branch", "Vishal Hall, Andheri East, Mumbai"],
                ["Account No.", "50100 24494 2248"],
                ["IFSC", "HDFC0000086"],
                ["Account Type", "Savings Bank"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-2.5">
                  <dt className="text-text-muted">{label}</dt>
                  <dd className="font-semibold text-text-primary">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-text-muted">
              After transferring, please WhatsApp your name and transaction reference to
              one of the numbers below so we can acknowledge your donation.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-6 rounded-2xl border border-warm-border bg-surface p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-saffron/10 text-saffron">
                <Phone size={20} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-primary">
                Contact Us
              </h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="tel:+917715933334"
                className="flex items-center gap-2 rounded-lg border border-warm-border bg-warm-cream px-4 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:border-saffron hover:text-saffron"
              >
                +91 77159 33334
              </a>
              <a
                href="tel:+919373324070"
                className="flex items-center gap-2 rounded-lg border border-warm-border bg-warm-cream px-4 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:border-saffron hover:text-saffron"
              >
                +91 93733 24070
              </a>
            </div>
          </div>

          {/* Tax benefits */}
          <div className="mt-6 flex items-start gap-4 rounded-2xl border border-warm-border bg-surface p-6 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-text-primary">
                Tax Benefits
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-text-muted">
                All Indian donations are eligible for tax exemption under Section 80G
                of the Income Tax Act. A receipt will be issued within 24 hours of your
                contribution.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
