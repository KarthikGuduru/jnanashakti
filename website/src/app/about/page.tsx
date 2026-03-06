import type { Metadata } from "next";
import Link from "next/link";
import { Eye, Heart, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Jnanashakti | Jnanashakti Ashram",
  description:
    "Learn about Jnanashakti Ashram — our mission to empower individuals and organisations through human values, spiritual education, and the timeless wisdom of ancient Indian traditions.",
};

const subPages = [
  {
    href: "/about/vision",
    icon: Eye,
    title: "Vision & Mission",
    description:
      "Discover our guiding vision of illuminating lives through ancient wisdom, and the mission that drives our work across education, spirituality, and human development.",
  },
  {
    href: "/about/values",
    icon: Heart,
    title: "Human Values",
    description:
      "Explore the universal human values — Truth, Non-violence, Love, Peace, Right Conduct, and Compassion — that form the cornerstone of all our programmes.",
  },
  {
    href: "/about/swamiji",
    icon: User,
    title: "Swamiji",
    description:
      "Meet the spiritual guide and founder whose vision, teachings, and unwavering dedication have shaped Jnanashakti into a beacon of wisdom and transformation.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-warm-white min-h-screen">
      {/* Banner */}
      <section className="relative bg-gradient-to-br from-saffron-dark via-saffron to-earth overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center animate-fade-in-up">
            About Jnanashakti
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 text-center max-w-2xl mx-auto animate-fade-in-up delay-100">
            Illuminating lives through ancient wisdom
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text-primary">
              Who We Are
            </h2>
            <div className="mt-4 w-20 h-1 bg-saffron mx-auto rounded-full" />
            <p className="mt-8 text-lg leading-relaxed text-text-muted">
              Jnanashakti Ashram is dedicated to working in the fields of{" "}
              <span className="text-text-primary font-medium">
                human values
              </span>{" "}
              and{" "}
              <span className="text-text-primary font-medium">
                spiritual education
              </span>
              , empowering individuals and organisations to lead purposeful,
              value-driven lives. Rooted in the timeless wisdom of ancient
              Indian traditions, our work bridges the sacred and the practical
              — adding lasting value to academic institutions, communities, and
              families.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              Through transformative programmes, workshops, and retreats, we
              foster inner growth, ethical leadership, and a deeper
              understanding of the self. Our approach honours tradition while
              speaking to the challenges of modern life, creating a space where
              seekers of all backgrounds can discover the power of knowledge
              and self-transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-page Cards */}
      <section className="section-padding bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text-primary text-center">
            Explore More
          </h2>
          <div className="mt-4 w-20 h-1 bg-saffron mx-auto rounded-full" />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {subPages.map((page) => {
              const Icon = page.icon;
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group bg-surface rounded-2xl border border-warm-border p-8 shadow-sm hover:shadow-lg hover:border-saffron/40 transition-all duration-300 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-xl bg-saffron/10 flex items-center justify-center group-hover:bg-saffron/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-saffron" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-text-primary group-hover:text-saffron-dark transition-colors duration-300">
                    {page.title}
                  </h3>
                  <p className="mt-3 text-text-muted leading-relaxed flex-1">
                    {page.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-saffron font-medium text-sm group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Decorative Quote */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-saffron text-5xl font-heading leading-none select-none">
              &ldquo;
            </div>
            <blockquote className="mt-2 font-heading text-2xl md:text-3xl italic text-text-primary leading-snug">
              True education is not the accumulation of information, but the
              transformation of the individual through the light of knowledge.
            </blockquote>
            <div className="mt-6 w-12 h-0.5 bg-saffron mx-auto rounded-full" />
          </div>
        </div>
      </section>
    </main>
  );
}
