"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Address",
    lines: [
      "Shakti Ashram, Jnanashakti",
      "Near Pandharpur Road",
      "Solapur, Maharashtra 413006",
      "India",
    ],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+91 99999 00000", "+91 88888 00000"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@jnanashakti.org", "ashram@jnanashakti.org"],
  },
  {
    icon: Clock,
    label: "Office Hours",
    lines: [
      "Monday - Saturday: 9:00 AM - 6:00 PM",
      "Sunday: 10:00 AM - 1:00 PM",
      "Closed on public holidays",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submission
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-warm-white">
        {/* ---- Banner ---- */}
        <section className="relative overflow-hidden bg-gradient-to-br from-earth via-earth-light to-saffron py-20 sm:py-28">
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
              Get in Touch
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
              We welcome your questions, feedback, and inquiries. Reach out to us and
              we&apos;ll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* ---- Contact Section ---- */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Left -- Form */}
              <div className="lg:col-span-3">
                <div className="rounded-2xl border border-warm-border bg-surface p-8 shadow-sm sm:p-10">
                  <h2 className="font-heading text-2xl font-bold text-text-primary">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-sm text-text-muted">
                    Fill out the form below and we will get back to you within 1-2
                    business days.
                  </p>

                  {submitted ? (
                    <div className="mt-8 rounded-xl bg-green-50 p-8 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <Send size={24} />
                      </div>
                      <h3 className="mt-4 font-heading text-xl font-semibold text-green-900">
                        Message Sent!
                      </h3>
                      <p className="mt-2 text-sm text-green-700">
                        Thank you for reaching out. We will respond to your message
                        shortly.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: "", email: "", subject: "", message: "" });
                        }}
                        className="mt-4 text-sm font-medium text-green-700 underline underline-offset-2 hover:text-green-900"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-text-primary"
                          >
                            Name <span className="text-orange-accent">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1.5 w-full rounded-lg border border-warm-border bg-warm-white px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:border-saffron focus:ring-2 focus:ring-saffron/20"
                            placeholder="Your name"
                          />
                        </div>
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
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-semibold text-text-primary"
                        >
                          Subject <span className="text-orange-accent">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="mt-1.5 w-full rounded-lg border border-warm-border bg-warm-white px-4 py-3 text-text-primary outline-none transition-colors focus:border-saffron focus:ring-2 focus:ring-saffron/20"
                        >
                          <option value="" disabled>
                            Select a subject
                          </option>
                          <option value="general">General Inquiry</option>
                          <option value="visit">Visit / Stay at Ashram</option>
                          <option value="events">Events & Programs</option>
                          <option value="donations">Donations & Tax Receipts</option>
                          <option value="volunteer">Volunteer Opportunities</option>
                          <option value="teachings">Teachings & Publications</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-text-primary"
                        >
                          Message <span className="text-orange-accent">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="mt-1.5 w-full resize-none rounded-lg border border-warm-border bg-warm-white px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-muted/50 focus:border-saffron focus:ring-2 focus:ring-saffron/20"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-xl bg-saffron px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-saffron-dark hover:shadow-lg active:scale-[0.98]"
                      >
                        <Send size={16} />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Right -- Contact Info */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {CONTACT_INFO.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-warm-border bg-surface p-6 shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron/10 text-saffron">
                          <item.icon size={22} />
                        </div>
                        <div>
                          <h3 className="font-heading text-base font-semibold text-text-primary">
                            {item.label}
                          </h3>
                          <div className="mt-1.5 space-y-0.5">
                            {item.lines.map((line, i) => (
                              <p key={i} className="text-sm text-text-muted">
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Map Placeholder ---- */}
        <section className="section-padding border-t border-warm-border bg-warm-cream/30">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Find Us
            </h2>
            <p className="mt-2 text-center text-text-muted">
              Shakti Ashram is located near Solapur, Maharashtra
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-warm-border shadow-sm">
              {/* Map placeholder */}
              <div className="flex h-80 items-center justify-center bg-warm-white sm:h-96">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-saffron/10 text-saffron">
                    <MapPin size={32} />
                  </div>
                  <p className="mt-4 font-heading text-lg font-semibold text-text-primary">
                    Interactive Map
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    Map integration will be added here
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-saffron transition-colors hover:text-saffron-dark"
                  >
                    Open in Google Maps
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
