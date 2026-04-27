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
  ShieldCheck,
  ArrowLeft,
  Check,
  AlertTriangle,
  Info,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Constants                                                           */
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

// Indian PAN: 5 letters, 4 digits, 1 letter
const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
// Indian mobile: starts 6-9, 10 digits
const PHONE_REGEX = /^[6-9]\d{9}$/;

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);
  const [citizenDeclared, setCitizenDeclared] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    const { name, value } = e.target;
    const next = name === "pan" ? value.toUpperCase() : value;
    setFormData((prev) => ({ ...prev, [name]: next }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const barePhone = (v: string) => v.replace(/\D/g, "").replace(/^91/, "");

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = "Full name is required.";
    if (!formData.email.includes("@")) next.email = "Enter a valid email address.";
    if (!PHONE_REGEX.test(barePhone(formData.phone)))
      next.phone = "Enter a valid 10-digit Indian mobile number.";
    if (!PAN_REGEX.test(formData.pan))
      next.pan = "Enter a valid PAN number (e.g. ABCDE1234F).";
    if (!citizenDeclared)
      next.citizen = "You must confirm your citizenship to proceed.";
    if (displayAmount < 1) next.amount = "Please select or enter a donation amount.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const displayAmount = isCustom ? Number(customAmount) || 0 : selectedAmount || 0;

  const canProceed =
    citizenDeclared &&
    displayAmount > 0 &&
    formData.name.trim().length > 0 &&
    formData.email.includes("@") &&
    PHONE_REGEX.test(barePhone(formData.phone)) &&
    PAN_REGEX.test(formData.pan);

  const handleProceed = async () => {
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          amount: displayAmount,
          isRecurring,
          citizenDeclared,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors({ form: data.error ?? "Something went wrong. Please try again." });
        return;
      }
      // TODO (Razorpay): open Razorpay checkout with data.orderId
      // const options = { key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, order_id: data.orderId, ... }
      // const rzp = new (window as any).Razorpay(options);
      // rzp.open();
      alert("Payment gateway coming soon — your details have been saved.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-warm-white">
      {/* ---- FCRA Legal Notice ---- */}
      <div className="border-b border-amber-200 bg-amber-50 py-3">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-start gap-2 text-sm text-amber-900 sm:items-center">
            <AlertTriangle size={15} className="mt-0.5 shrink-0 text-amber-600 sm:mt-0" />
            <p>
              <span className="font-semibold">Legal Notice:</span> FOWAI Forum is not FCRA
              registered. We strictly accept donations only from Indian citizens. We do not
              accept funds from foreign nationals, OCI or PIO cardholders, or NRO accounts
              held by foreign nationals.
            </p>
          </div>
        </div>
      </div>

      {/* ---- Hero Banner ---- */}
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

      {/* ---- Impact Areas ---- */}
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

              {/* Indian citizens only notice */}
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4">
                <Info size={17} className="mt-0.5 shrink-0 text-blue-600" />
                <p className="text-sm leading-relaxed text-blue-800">
                  Donations are accepted exclusively from{" "}
                  <strong>Indian citizens</strong>. If you are a foreign national,
                  OCI, or PIO cardholder, we are legally unable to accept your
                  contribution under Indian law.
                </p>
              </div>

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
                      <span className="mr-2 text-sm font-semibold text-text-muted">Rs</span>
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
                {errors.amount && (
                  <p className="mt-1 text-xs text-red-600">{errors.amount}</p>
                )}
              </div>

              {/* Form fields */}
              <div className="mt-8 space-y-5">
                {/* Name */}
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
                    className={`mt-1.5 w-full rounded-lg border bg-warm-white px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:ring-2 focus:ring-saffron/20 ${
                      errors.name
                        ? "border-red-400 focus:border-red-400"
                        : "border-warm-border focus:border-saffron"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                  )}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Email */}
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
                      className={`mt-1.5 w-full rounded-lg border bg-warm-white px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:ring-2 focus:ring-saffron/20 ${
                        errors.email
                          ? "border-red-400 focus:border-red-400"
                          : "border-warm-border focus:border-saffron"
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-text-primary"
                    >
                      Mobile Number <span className="text-orange-accent">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`mt-1.5 w-full rounded-lg border bg-warm-white px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:ring-2 focus:ring-saffron/20 ${
                        errors.phone
                          ? "border-red-400 focus:border-red-400"
                          : "border-warm-border focus:border-saffron"
                      }`}
                      placeholder="98765 43210"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* PAN — mandatory */}
                <div>
                  <label
                    htmlFor="pan"
                    className="block text-sm font-semibold text-text-primary"
                  >
                    PAN Number <span className="text-orange-accent">*</span>{" "}
                    <span className="text-xs font-normal text-text-muted">
                      (required for compliance &amp; 80G receipt)
                    </span>
                  </label>
                  <input
                    id="pan"
                    name="pan"
                    type="text"
                    required
                    value={formData.pan}
                    onChange={handleInputChange}
                    className={`mt-1.5 w-full rounded-lg border bg-warm-white px-4 py-3 text-text-primary uppercase outline-none transition-colors placeholder:normal-case placeholder:text-text-muted/50 focus:ring-2 focus:ring-saffron/20 ${
                      errors.pan
                        ? "border-red-400 focus:border-red-400"
                        : "border-warm-border focus:border-saffron"
                    }`}
                    placeholder="ABCDE1234F"
                    maxLength={10}
                  />
                  {errors.pan && (
                    <p className="mt-1 text-xs text-red-600">{errors.pan}</p>
                  )}
                </div>

                {/* Citizenship declaration */}
                <div
                  className={`rounded-xl border p-4 transition-colors ${
                    errors.citizen
                      ? "border-red-300 bg-red-50"
                      : citizenDeclared
                      ? "border-green-300 bg-green-50"
                      : "border-warm-border bg-warm-white"
                  }`}
                >
                  <label className="flex cursor-pointer items-start gap-3">
                    <div className="relative mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        checked={citizenDeclared}
                        onChange={() => {
                          setCitizenDeclared((v) => !v);
                          if (errors.citizen)
                            setErrors((prev) => ({ ...prev, citizen: "" }));
                        }}
                        className="peer sr-only"
                      />
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-colors ${
                          citizenDeclared
                            ? "border-saffron bg-saffron"
                            : "border-warm-border bg-white"
                        }`}
                      >
                        {citizenDeclared && <Check size={13} className="text-white" />}
                      </div>
                    </div>
                    <span className="text-sm leading-relaxed text-text-primary">
                      I declare that I am a citizen of India. I am not a foreign
                      national, OCI, or PIO cardholder. I understand that FOWAI Forum
                      is not FCRA registered and cannot legally accept donations from
                      foreign sources.
                    </span>
                  </label>
                  {errors.citizen && (
                    <p className="mt-2 text-xs text-red-600">{errors.citizen}</p>
                  )}
                </div>

                {/* Monthly donation */}
                <label className="flex cursor-pointer items-center gap-3">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isRecurring}
                      onChange={() => setIsRecurring((v) => !v)}
                      className="peer sr-only"
                    />
                    <div className="flex h-5 w-5 items-center justify-center rounded border-2 border-warm-border bg-warm-white transition-colors peer-checked:border-saffron peer-checked:bg-saffron">
                      {isRecurring && <Check size={13} className="text-white" />}
                    </div>
                  </div>
                  <span className="text-sm text-text-primary">
                    Make this a monthly donation
                  </span>
                </label>
              </div>

              {/* Form-level error */}
              {errors.form && (
                <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errors.form}
                </div>
              )}

              {/* Submit */}
              <button
                type="button"
                onClick={handleProceed}
                disabled={!canProceed || isSubmitting}
                className={`mt-8 w-full rounded-xl px-6 py-4 text-lg font-bold text-white shadow-md transition-all ${
                  canProceed && !isSubmitting
                    ? "bg-orange-accent hover:bg-orange-accent/90 hover:shadow-lg active:scale-[0.98]"
                    : "cursor-not-allowed bg-gray-300 shadow-none"
                }`}
              >
                {isSubmitting ? "Processing…" : (
                  <>
                    Proceed to Pay
                    {displayAmount > 0 && (
                      <span className="ml-2">
                        Rs {displayAmount.toLocaleString("en-IN")}
                      </span>
                    )}
                    {isRecurring && " / month"}
                  </>
                )}
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
