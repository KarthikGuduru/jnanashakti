"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  BookOpen,
  Building2,
  CreditCard,
  Smartphone,
  Landmark,
  Globe,
  ShieldCheck,
  ArrowLeft,
  Check,
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

const PRESET_AMOUNTS = [500, 1000, 2000, 5000];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [donorType, setDonorType] = useState<"indian" | "international">("indian");
  const [isRecurring, setIsRecurring] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
  });

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustomClick = () => {
    setIsCustom(true);
    setSelectedAmount(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const displayAmount = isCustom ? Number(customAmount) || 0 : selectedAmount || 0;

  return (
    <div className="min-h-screen bg-warm-white">
        {/* ---- Banner ---- */}
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

        {/* ---- Why Donate / Impact Areas ---- */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
                Your Impact
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-text-muted">
                Every contribution directly supports the ashram&apos;s mission of
                spiritual education and service to humanity.
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

        {/* ---- Donation Form ---- */}
        <section className="section-padding bg-warm-cream/50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-2xl">
              <div className="rounded-2xl border border-warm-border bg-surface p-8 shadow-sm sm:p-10">
                <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                  Make a Donation
                </h2>
                <p className="mt-2 text-text-muted">
                  Choose an amount and fill in your details below.
                </p>

                {/* Amount selection */}
                <div className="mt-8">
                  <label className="text-sm font-semibold text-text-primary">
                    Select Amount
                  </label>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {PRESET_AMOUNTS.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handlePresetClick(amount)}
                        className={`rounded-lg border-2 px-5 py-3 text-sm font-semibold transition-all ${
                          selectedAmount === amount && !isCustom
                            ? "border-saffron bg-saffron text-white"
                            : "border-warm-border bg-surface text-text-primary hover:border-saffron/50"
                        }`}
                      >
                        Rs {amount.toLocaleString("en-IN")}
                      </button>
                    ))}
                    <button
                      onClick={handleCustomClick}
                      className={`rounded-lg border-2 px-5 py-3 text-sm font-semibold transition-all ${
                        isCustom
                          ? "border-saffron bg-saffron text-white"
                          : "border-warm-border bg-surface text-text-primary hover:border-saffron/50"
                      }`}
                    >
                      Other
                    </button>
                  </div>
                  {isCustom && (
                    <div className="mt-3">
                      <div className="flex items-center rounded-lg border-2 border-saffron/30 bg-warm-white px-4 py-3 focus-within:border-saffron">
                        <span className="mr-2 text-sm font-semibold text-text-muted">
                          Rs
                        </span>
                        <input
                          type="number"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          placeholder="Enter amount"
                          className="w-full bg-transparent text-lg font-semibold text-text-primary outline-none placeholder:text-text-muted/50"
                          min="1"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Donor type toggle */}
                <div className="mt-8">
                  <label className="text-sm font-semibold text-text-primary">
                    Donor Type
                  </label>
                  <div className="mt-3 flex rounded-lg border border-warm-border bg-warm-white p-1">
                    <button
                      onClick={() => setDonorType("indian")}
                      className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-all ${
                        donorType === "indian"
                          ? "bg-saffron text-white shadow-sm"
                          : "text-text-muted hover:text-text-primary"
                      }`}
                    >
                      Indian Donor
                    </button>
                    <button
                      onClick={() => setDonorType("international")}
                      className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-all ${
                        donorType === "international"
                          ? "bg-saffron text-white shadow-sm"
                          : "text-text-muted hover:text-text-primary"
                      }`}
                    >
                      International Donor
                    </button>
                  </div>
                </div>

                {/* Form fields */}
                <div className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-text-primary"
                    >
                      Full Name <span className="text-orange-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1.5 w-full rounded-lg border border-warm-border bg-warm-white px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:border-saffron focus:ring-2 focus:ring-saffron/20"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-text-primary"
                      >
                        Email <span className="text-orange-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1.5 w-full rounded-lg border border-warm-border bg-warm-white px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:border-saffron focus:ring-2 focus:ring-saffron/20"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-text-primary"
                      >
                        Phone <span className="text-orange-accent">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1.5 w-full rounded-lg border border-warm-border bg-warm-white px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:border-saffron focus:ring-2 focus:ring-saffron/20"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* PAN number -- Indian donors only */}
                  {donorType === "indian" && (
                    <div>
                      <label
                        htmlFor="pan"
                        className="block text-sm font-semibold text-text-primary"
                      >
                        PAN Number{" "}
                        <span className="text-xs font-normal text-text-muted">
                          (required for 80G tax receipt)
                        </span>
                      </label>
                      <input
                        id="pan"
                        name="pan"
                        type="text"
                        value={formData.pan}
                        onChange={handleInputChange}
                        className="mt-1.5 w-full rounded-lg border border-warm-border bg-warm-white px-4 py-3 text-text-primary uppercase outline-none transition-colors placeholder:normal-case placeholder:text-text-muted/50 focus:border-saffron focus:ring-2 focus:ring-saffron/20"
                        placeholder="ABCDE1234F"
                        maxLength={10}
                      />
                    </div>
                  )}

                  {/* Recurring donation */}
                  <label className="flex cursor-pointer items-center gap-3">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={isRecurring}
                        onChange={() => setIsRecurring(!isRecurring)}
                        className="peer sr-only"
                      />
                      <div className="flex h-5 w-5 items-center justify-center rounded border-2 border-warm-border bg-warm-white transition-colors peer-checked:border-saffron peer-checked:bg-saffron">
                        {isRecurring && <Check size={14} className="text-white" />}
                      </div>
                    </div>
                    <span className="text-sm text-text-primary">
                      Make this a monthly donation
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="button"
                  className="mt-8 w-full rounded-xl bg-orange-accent px-6 py-4 text-lg font-bold text-white shadow-md transition-all hover:bg-orange-accent/90 hover:shadow-lg active:scale-[0.98]"
                >
                  Proceed to Pay
                  {displayAmount > 0 && (
                    <span className="ml-2">
                      {donorType === "indian" ? "Rs" : "$"}{" "}
                      {displayAmount.toLocaleString("en-IN")}
                    </span>
                  )}
                  {isRecurring && " / month"}
                </button>

                {/* Payment methods */}
                <div className="mt-6 rounded-xl bg-warm-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Accepted payment methods
                  </p>
                  <div className="mt-3 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-text-primary">
                      <Smartphone size={18} className="text-saffron" />
                      UPI
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-primary">
                      <CreditCard size={18} className="text-saffron" />
                      Credit / Debit Card
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-primary">
                      <Landmark size={18} className="text-saffron" />
                      Netbanking
                    </div>
                  </div>
                </div>

                {/* FCRA note for international donors */}
                {donorType === "international" && (
                  <div className="mt-4 flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-5">
                    <Globe size={20} className="mt-0.5 shrink-0 text-blue-600" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900">
                        International Donors
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-blue-800/80">
                        All international donations are processed through our FCRA
                        compliant channel. You will be guided through the required
                        documentation during the payment process.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Tax benefits */}
              <div className="mt-8 flex items-start gap-4 rounded-2xl border border-warm-border bg-surface p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    Tax Benefits
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">
                    All Indian donations are eligible for tax exemption under Section
                    80G of the Income Tax Act. A tax receipt will be emailed to you
                    within 24 hours of your contribution. Please ensure your PAN details
                    are correct for the receipt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
