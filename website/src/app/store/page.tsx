"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingCart, BookOpen, Star } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const BOOKS = [
  {
    title: "The Essence of Vedanta",
    author: "Swamiji",
    price: 350,
    rating: 5,
    description:
      "A clear and accessible introduction to the core teachings of Advaita Vedanta, drawn from Swamiji's decades of study and practice.",
    pages: 248,
    language: "English",
  },
  {
    title: "Meditation: A Practical Guide",
    author: "Swamiji",
    price: 275,
    rating: 5,
    description:
      "Step-by-step guidance for establishing a consistent meditation practice, with techniques rooted in the Yoga Sutras of Patanjali.",
    pages: 192,
    language: "English",
  },
  {
    title: "Dharma for Daily Living",
    author: "Swamiji",
    price: 300,
    rating: 4,
    description:
      "Practical wisdom for navigating modern life with ancient values. Covers relationships, work, health, and spiritual growth through the lens of dharma.",
    pages: 216,
    language: "English / Hindi",
  },
  {
    title: "Commentaries on the Upanishads",
    author: "Swamiji",
    price: 450,
    rating: 5,
    description:
      "In-depth commentary on selected Upanishads including Isha, Kena, and Mandukya, making these profound texts accessible to contemporary seekers.",
    pages: 384,
    language: "English",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function StorePage() {
  return (
    <div className="min-h-screen bg-warm-white">
        {/* ---- Banner ---- */}
        <section className="relative overflow-hidden bg-gradient-to-br from-earth via-earth-light to-saffron py-20 sm:py-24">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white" />
            <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-white" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Bookstore
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
              Publications by Swamiji -- books that distill timeless spiritual wisdom
              into practical guidance for seekers at every stage of the journey.
            </p>
          </div>
        </section>

        {/* ---- Books Grid ---- */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {BOOKS.map((book) => (
                <div
                  key={book.title}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-warm-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Book cover placeholder */}
                  <div className="flex h-56 items-center justify-center bg-gradient-to-br from-saffron/10 via-warm-cream to-earth/10">
                    <div className="flex flex-col items-center gap-2">
                      <BookOpen
                        size={40}
                        className="text-saffron/40 transition-colors group-hover:text-saffron/70"
                      />
                      <span className="text-xs font-medium text-text-muted/50">
                        Cover Image
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-lg font-bold text-text-primary transition-colors group-hover:text-saffron">
                      {book.title}
                    </h3>
                    <p className="mt-1 text-sm text-saffron">{book.author}</p>

                    {/* Rating */}
                    <div className="mt-2 flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < book.rating
                              ? "fill-orange-accent text-orange-accent"
                              : "text-warm-border"
                          }
                        />
                      ))}
                    </div>

                    <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-text-muted">
                      {book.description}
                    </p>

                    <div className="mt-3 flex items-center gap-3 text-xs text-text-muted">
                      <span>{book.pages} pages</span>
                      <span className="h-1 w-1 rounded-full bg-warm-border" />
                      <span>{book.language}</span>
                    </div>

                    {/* Price & CTA */}
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xl font-bold text-text-primary">
                        Rs {book.price}
                      </span>
                      <button className="inline-flex items-center gap-2 rounded-lg bg-orange-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-orange-accent/90 hover:shadow-md active:scale-[0.97]">
                        <ShoppingCart size={15} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-12 rounded-xl border border-warm-border bg-warm-cream/50 p-6 text-center">
              <p className="text-sm text-text-muted">
                All proceeds from book sales go towards supporting the ashram&apos;s
                educational programs and community services. Books are also available at
                the ashram bookshop during your visit.
              </p>
            </div>
          </div>
        </section>
    </div>
  );
}
