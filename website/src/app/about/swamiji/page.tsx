import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Flame,
  Heart,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Swamiji | Jnanashakti Ashram",
  description:
    "Learn about Swamiji, the spiritual guide and founder of Jnanashakti Ashram, whose vision, teachings, and lifelong dedication inspire seekers on the path of wisdom and self-transformation.",
};

const teachings = [
  {
    icon: Lightbulb,
    title: "Knowledge as Liberation",
    description:
      "Swamiji teaches that true knowledge — Jnana — is not merely intellectual understanding but a direct, transformative experience of reality. Through self-enquiry and the study of sacred texts, the seeker peels away the layers of ignorance to reveal the luminous self within.",
  },
  {
    icon: Heart,
    title: "Values as Daily Practice",
    description:
      "For Swamiji, human values are not abstract ideals but practical tools for living well. He emphasises that Truth, Love, Peace, Right Conduct, Non-violence, and Compassion must be woven into every moment — in how we speak, work, relate, and serve.",
  },
  {
    icon: Flame,
    title: "Service as Worship",
    description:
      "Swamiji holds that selfless service (Seva) is one of the highest forms of spiritual practice. By serving others without expectation of reward, we purify the heart, dissolve the ego, and experience the divine in every being we encounter.",
  },
  {
    icon: BookOpen,
    title: "Bridging Tradition and Modernity",
    description:
      "With deep scholarship in the ancient texts and a keen understanding of contemporary life, Swamiji makes the wisdom of the Vedas, Upanishads, and Bhagavad Gita accessible and relevant. His teachings honour the past while addressing the spiritual needs of the present.",
  },
];

export default function SwamijiPage() {
  return (
    <main className="bg-warm-white min-h-screen">
      {/* Banner */}
      <section className="relative bg-gradient-to-br from-saffron-dark via-saffron to-earth overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to About
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in-up">
            Swamiji
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl animate-fade-in-up delay-100">
            A life devoted to wisdom, service, and the upliftment of all
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 items-start">
              {/* Photo Placeholder */}
              <div className="md:col-span-2">
                <div className="w-full aspect-[3/4] bg-warm-cream rounded-2xl border border-warm-border flex items-center justify-center shadow-sm">
                  <div className="text-center px-6">
                    <div className="w-16 h-16 rounded-full bg-saffron/10 flex items-center justify-center mx-auto">
                      <svg
                        className="w-8 h-8 text-saffron"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </div>
                    <p className="mt-4 text-text-muted text-sm font-medium">
                      Photo of Swamiji
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio Text */}
              <div className="md:col-span-3">
                <span className="inline-block text-sm font-medium tracking-widest uppercase text-saffron">
                  Spiritual Guide & Founder
                </span>
                <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold text-text-primary">
                  A Journey of Light
                </h2>
                <div className="mt-4 w-20 h-1 bg-saffron rounded-full" />

                <div className="mt-8 space-y-5 text-text-muted leading-relaxed text-base md:text-lg">
                  <p>
                    Swamiji&apos;s spiritual journey began in his early years,
                    drawn by an inner calling to seek the deeper truths of
                    existence. Guided by a profound yearning for knowledge, he
                    immersed himself in the study of the Vedas, Upanishads,
                    Bhagavad Gita, and other sacred texts under the tutelage of
                    revered teachers in the Indian spiritual tradition.
                  </p>
                  <p>
                    After years of rigorous study, contemplation, and
                    meditative practice, Swamiji emerged with a rare
                    combination of scholarly depth and practical wisdom. His
                    understanding of the ancient texts is not confined to
                    academic knowledge — it is illuminated by personal
                    experience and a living connection to the truths they
                    convey.
                  </p>
                  <p>
                    Moved by compassion for a world increasingly disconnected
                    from its spiritual roots, Swamiji founded Jnanashakti
                    Ashram as a sanctuary for seekers, a centre for values
                    education, and a beacon of hope for communities in need of
                    guidance. His vision is clear: to make the transformative
                    power of ancient wisdom available to every individual,
                    regardless of background or circumstance.
                  </p>
                  <p>
                    Today, Swamiji continues to teach, guide, and inspire
                    through discourses, workshops, personal mentoring, and the
                    many programmes of Jnanashakti Ashram. His warmth,
                    humility, and unwavering dedication to service have touched
                    countless lives across India and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Teachings */}
      <section className="section-padding bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <span className="inline-block text-sm font-medium tracking-widest uppercase text-saffron">
                Philosophy & Approach
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold text-text-primary">
                Key Teachings
              </h2>
              <div className="mt-4 w-20 h-1 bg-saffron mx-auto rounded-full" />
              <p className="mt-6 text-lg text-text-muted leading-relaxed">
                Swamiji&apos;s teachings are rooted in the ancient wisdom
                traditions of India, yet they speak directly to the needs and
                challenges of contemporary life.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {teachings.map((teaching) => {
                const Icon = teaching.icon;
                return (
                  <div
                    key={teaching.title}
                    className="bg-surface rounded-2xl border border-warm-border p-8 shadow-sm hover:shadow-lg hover:border-saffron/40 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-saffron/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-saffron" />
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-semibold text-text-primary">
                      {teaching.title}
                    </h3>
                    <p className="mt-3 text-text-muted leading-relaxed">
                      {teaching.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-saffron-dark via-saffron to-earth rounded-2xl p-8 md:p-12 text-center">
            <div className="text-white/30 text-5xl font-heading leading-none select-none">
              &ldquo;
            </div>
            <blockquote className="mt-2 font-heading text-xl md:text-2xl italic text-white leading-snug">
              The highest purpose of human life is to know oneself. When you
              discover who you truly are, you discover the source of all peace,
              all love, and all wisdom. This is the journey — from the known to
              the unknown, from darkness to light, from the finite to the
              infinite.
            </blockquote>
            <p className="mt-6 text-white/70 font-medium text-sm tracking-wide">
              — Swamiji
            </p>
            <div className="mt-4 w-12 h-0.5 bg-white/30 mx-auto rounded-full" />
          </div>
        </div>
      </section>
    </main>
  );
}
