"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, Info } from "lucide-react";

const PURPOSE_OPTIONS = [
  "Spiritual Retreat",
  "Meditation Practice",
  "Attending Program",
  "Personal Retreat",
  "Other",
] as const;

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  purpose: string;
  specialRequirements: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  guests: "1",
  purpose: "",
  specialRequirements: "",
};

const inputClasses =
  "w-full rounded-lg border border-warm-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 transition-colors focus:border-saffron focus:outline-none focus:ring-2 focus:ring-saffron/20";

const labelClasses = "block text-sm font-medium text-text-primary mb-1.5";

/*
 * Web3Forms — free tier (250 submissions/month, email notifications).
 * Replace the access_key below with your own from https://web3forms.com
 */
const WEB3FORMS_KEY = "03f67aff-7f5f-4e0a-915f-c968357bd7d7";

export default function StayRequestPage() {
  const [form, setForm] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: "Jnanashakti Ashram Stay Request",
          subject: `Stay Request: ${form.fullName} (${form.checkIn} to ${form.checkOut})`,
          ...form,
        }),
      });

      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-warm-white">
      {/* ── Banner ── */}
      <section className="bg-gradient-to-br from-saffron-dark via-saffron to-earth py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Request to Stay at <span className="font-[family-name:var(--font-sanskrit)]">Shakti Āshram</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/80 sm:text-lg">
            Submit your stay request below and we will get back to you with a
            confirmation.
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

          <div className="grid gap-10 lg:grid-cols-3">
            {/* ── Sidebar info ── */}
            <div className="lg:col-span-1">
              <div className="rounded-xl border border-warm-border bg-warm-cream p-6">
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  About <span className="font-[family-name:var(--font-sanskrit)]">Āshram</span> Stays
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-muted">
                  <p>
                    Staying at <span className="font-[family-name:var(--font-sanskrit)]">Shakti Āshram</span> is a unique opportunity to immerse
                    yourself in a life of contemplation, study, and service.
                    Guests are expected to participate in the daily schedule,
                    which includes morning and evening meditation, satsang, and communal meals.
                  </p>
                  <p>
                    Accommodation is simple and clean, reflecting the ashram's
                    commitment to a life of simplicity. Stays are available for a
                    minimum of two nights.
                  </p>
                </div>

                <hr className="my-5 border-warm-border" />

                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  Guidelines
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-text-muted">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-saffron" />
                    Maintain silence in meditation halls and library
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-saffron" />
                    Dress modestly and respectfully
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-saffron" />
                    No alcohol, tobacco, or non-vegetarian food on premises
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-saffron" />
                    Participate in the daily schedule and sevā (service)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-saffron" />
                    Mobile phones on silent; limited usage encouraged
                  </li>
                </ul>
              </div>
            </div>

            {/* ── Form ── */}
            <div className="lg:col-span-2">
              {status === "sent" ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center rounded-xl border border-warm-border bg-surface py-16 text-center shadow-sm">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Send className="h-7 w-7 text-green-600" />
                  </div>
                  <h2 className="mt-5 font-heading text-2xl font-bold text-text-primary">
                    Request Submitted
                  </h2>
                  <p className="mt-2 max-w-md text-text-muted">
                    Thank you for your interest in staying at <span className="font-[family-name:var(--font-sanskrit)]">Shakti Āshram</span>. We
                    will review your request and send a confirmation to{" "}
                    <span className="font-medium text-text-primary">
                      {form.email}
                    </span>
                    .
                  </p>
                  <Link
                    href="/ashram"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-saffron-dark"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Ashram
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-xl border border-warm-border bg-surface p-6 shadow-sm sm:p-8"
                >
                  <h2 className="font-heading text-2xl font-bold text-text-primary">
                    Stay Request Form
                  </h2>
                  <p className="mt-1 text-sm text-text-muted">
                    Please fill out the details below. All fields marked with{" "}
                    <span className="text-red-500">*</span> are required.
                  </p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {/* Full Name */}
                    <div className="sm:col-span-2">
                      <label htmlFor="fullName" className={labelClasses}>
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={inputClasses}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClasses}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className={labelClasses}>
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={inputClasses}
                      />
                    </div>

                    {/* Check-in Date */}
                    <div>
                      <label htmlFor="checkIn" className={labelClasses}>
                        Check-in Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        required
                        value={form.checkIn}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>

                    {/* Check-out Date */}
                    <div>
                      <label htmlFor="checkOut" className={labelClasses}>
                        Check-out Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        required
                        value={form.checkOut}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>

                    {/* Number of Guests */}
                    <div>
                      <label htmlFor="guests" className={labelClasses}>
                        Number of Guests <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="guests"
                        name="guests"
                        required
                        min="1"
                        max="10"
                        value={form.guests}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>

                    {/* Purpose of Visit */}
                    <div>
                      <label htmlFor="purpose" className={labelClasses}>
                        Purpose of Visit{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="purpose"
                        name="purpose"
                        required
                        value={form.purpose}
                        onChange={handleChange}
                        className={inputClasses}
                      >
                        <option value="" disabled>
                          Select a purpose
                        </option>
                        {PURPOSE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Special Requirements */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="specialRequirements"
                        className={labelClasses}
                      >
                        Special Requirements
                      </label>
                      <textarea
                        id="specialRequirements"
                        name="specialRequirements"
                        rows={4}
                        value={form.specialRequirements}
                        onChange={handleChange}
                        placeholder="Dietary needs, accessibility requirements, or any other requests..."
                        className={`${inputClasses} resize-y`}
                      />
                    </div>
                  </div>

                  {/* Admin approval note */}
                  <div className="mt-6 flex items-start gap-3 rounded-lg border border-saffron/20 bg-saffron/5 p-4">
                    <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-saffron" />
                    <p className="text-sm text-text-muted">
                      All stay requests require admin approval. You will receive
                      a confirmation email once your request has been reviewed.
                    </p>
                  </div>

                  {status === "error" && (
                    <p className="mt-4 text-sm text-red-600">
                      Something went wrong. Please try again or email us at
                      fowaiforum@gmail.com.
                    </p>
                  )}

                  {/* Submit */}
                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-saffron px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-saffron-dark hover:shadow-md disabled:opacity-60 sm:w-auto"
                    >
                      <Send className="h-4 w-4" />
                      {status === "sending" ? "Submitting..." : "Submit Request"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
