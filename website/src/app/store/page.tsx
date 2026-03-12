import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookstore | Jnanashakti",
  description:
    "Books by Swami Chidananda on Vedanta, meditation, devotion, and right living. Available from the Fowai Forum online store.",
};

/* ------------------------------------------------------------------ */
/*  Data — real books from fowai.org/product-category/books            */
/* ------------------------------------------------------------------ */

const BOOKS = [
  {
    title: "The Equanimous Mind",
    image: "/images/book-equanimous-mind.jpg",
    description:
      "An exploration of mental equanimity and inner balance through the lens of Vedāntic wisdom. Swāmi Chidānanda guides the reader towards a mind that remains steady amidst the ups and downs of life.",
    language: "English",
    href: "https://fowai.org/product/equanimous-mind",
  },
  {
    title: "Erase the Ego",
    image: "/images/book-erase-ego.jpg",
    description:
      "A penetrating inquiry into the nature of the ego and how it veils our true self. Drawing from the Upanishads and Bhagavad Gītā, this book offers practical insights for transcending the limited sense of 'I'.",
    language: "English",
    href: "https://fowai.org/product/erase-the-ego",
  },
  {
    title: "Light on Right Living",
    subtitle: "The Little Book of Photons",
    image: "/images/book-light-on-right-living.png",
    description:
      "A compact collection of luminous insights for daily living. Each 'photon' of wisdom illuminates the path of right action, ethical conduct, and spiritual awareness in everyday life.",
    language: "English",
    href: "https://fowai.org/product/light-on-right-living",
  },
  {
    title: "Mukunda Mala",
    image: "/images/book-mukunda-mala.jpg",
    description:
      "A devotional classic — the Mukunda Māla Stotra is a garland of verses in praise of Lord Krishna. Swāmi Chidānanda presents this timeless hymn with commentary that deepens the reader's understanding of Bhakti.",
    language: "English",
    href: "https://fowai.org/product/mumkunda-mala",
  },
  {
    title: "Daily Bytes",
    image: "/images/book-daily-bytes.jpg",
    description:
      "A day-by-day collection of spiritual wisdom and reflection. Each 'byte' offers a nugget of insight to carry through the day — ideal for seekers who want a daily dose of contemplative thought.",
    language: "English",
    href: "https://fowai.org/product/daily-bytes",
  },
];

const TRANSLATIONS = [
  {
    title: "Equanimous Mind (Kannada)",
    image: "/images/book-equanimous-mind-kannada.jpg",
    language: "Kannada",
    href: "https://fowai.org/product/kannada-versio-of-em",
  },
  {
    title: "Santulit Man (Hindi)",
    image: "/images/book-santulit-man-hindi.jpg",
    language: "Hindi",
    href: "https://fowai.org/product/santulit-man-hindi",
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
            Publications by <span className="font-[family-name:var(--font-sanskrit)]">Swāmi Chidānanda</span> — books that distil timeless
            spiritual wisdom into practical guidance for seekers.
          </p>
        </div>
      </section>

      {/* ---- Books Grid ---- */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BOOKS.map((book) => (
              <a
                key={book.title}
                href={book.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-warm-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Book cover */}
                <div className="relative aspect-square overflow-hidden bg-warm-cream">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-bold text-text-primary transition-colors group-hover:text-saffron">
                    {book.title}
                  </h3>
                  {"subtitle" in book && book.subtitle && (
                    <p className="mt-0.5 text-sm italic text-saffron">
                      {book.subtitle}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-text-muted">
                    <span className="font-[family-name:var(--font-sanskrit)]">Swāmi Chidānanda</span> &middot; {book.language}
                  </p>

                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-text-muted">
                    {book.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-saffron transition-colors group-hover:text-saffron-dark">
                    View on Fowai Store
                    <ExternalLink size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* ---- Translations ---- */}
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              Regional Translations
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              Select titles available in Kannada and Hindi.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TRANSLATIONS.map((book) => (
                <a
                  key={book.title}
                  href={book.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-warm-border bg-surface p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-warm-cream">
                    <Image
                      src={book.image}
                      alt={book.title}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-text-primary group-hover:text-saffron">
                      {book.title}
                    </h3>
                    <p className="mt-1 text-xs text-text-muted">
                      {book.language}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="mt-12 rounded-xl border border-warm-border bg-warm-cream/50 p-6 text-center">
            <p className="text-sm text-text-muted">
              Books are available on the{" "}
              <a
                href="https://fowai.org/product-category/books"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-saffron hover:text-saffron-dark"
              >
                Fowai Forum online store
              </a>
              . For bulk orders (5+ copies), contact{" "}
              <a
                href="mailto:fowaiforum@yahoo.com"
                className="font-medium text-saffron hover:text-saffron-dark"
              >
                fowaiforum@yahoo.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
