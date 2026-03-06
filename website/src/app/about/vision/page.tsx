import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Users,
  GraduationCap,
  Sparkles,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vision & Mission | Jnanashakti Ashram",
  description:
    "Our vision is to illuminate lives through the timeless wisdom of ancient Indian traditions, fostering a world grounded in human values, spiritual understanding, and inner transformation.",
};

const missionPoints = [
  {
    icon: BookOpen,
    text: "Promote human values education through structured programmes, workshops, and retreats that make ancient wisdom accessible and practical for people of all ages and backgrounds.",
  },
  {
    icon: GraduationCap,
    text: "Enrich academic institutions by integrating value-based education into their curricula, empowering educators and students to cultivate character alongside knowledge.",
  },
  {
    icon: Users,
    text: "Empower individuals, families, and organisations to lead purposeful, ethical lives by providing tools for self-reflection, emotional resilience, and spiritual growth.",
  },
  {
    icon: Globe,
    text: "Build bridges between diverse communities and traditions, fostering mutual respect, understanding, and a shared commitment to universal human values.",
  },
  {
    icon: Sparkles,
    text: "Preserve and share the rich spiritual heritage of India through scholarly study, contemplative practice, and creative expression, ensuring these teachings remain vibrant for future generations.",
  },
];

export default function VisionPage() {
  return (
    <main className="bg-warm-white min-h-screen">
      {/* Banner */}
      <section className="relative bg-gradient-to-br from-saffron-dark via-saffron to-earth overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to About
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in-up">
            Vision & Mission
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl animate-fade-in-up delay-100">
            The guiding light behind everything we do
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <span className="inline-block text-sm font-medium tracking-widest uppercase text-saffron">
                Our Vision
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold text-text-primary">
                A World Grounded in Wisdom
              </h2>
              <div className="mt-4 w-20 h-1 bg-saffron mx-auto rounded-full" />
            </div>

            <div className="mt-12 bg-surface rounded-2xl border border-warm-border p-8 md:p-12 shadow-sm">
              <div className="text-saffron text-5xl font-heading leading-none select-none">
                &ldquo;
              </div>
              <p className="mt-2 font-heading text-xl md:text-2xl leading-relaxed text-text-primary italic">
                To illuminate lives through the timeless wisdom of ancient
                Indian traditions, fostering a world grounded in human values,
                spiritual understanding, and inner transformation.
              </p>
              <div className="mt-6 text-saffron text-5xl font-heading leading-none text-right select-none">
                &rdquo;
              </div>
            </div>

            <p className="mt-8 text-lg text-text-muted leading-relaxed text-center">
              We envision a society where every individual has the opportunity
              to discover their highest potential through the light of
              knowledge. A world where ancient wisdom informs modern action,
              where human values guide decision-making, and where spiritual
              understanding brings lasting peace to hearts and communities
              alike.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <span className="inline-block text-sm font-medium tracking-widest uppercase text-saffron">
                Our Mission
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold text-text-primary">
                How We Serve
              </h2>
              <div className="mt-4 w-20 h-1 bg-saffron mx-auto rounded-full" />
              <p className="mt-6 text-lg text-text-muted leading-relaxed">
                Our mission is carried out through a constellation of efforts,
                each aimed at bringing the transformative power of values and
                wisdom into the fabric of everyday life.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {missionPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="bg-surface rounded-xl border border-warm-border p-6 md:p-8 shadow-sm flex gap-5 items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-saffron/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-saffron" />
                    </div>
                    <p className="text-text-muted leading-relaxed text-base md:text-lg">
                      {point.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Quote */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-saffron-dark via-saffron to-earth rounded-2xl p-8 md:p-12 text-center">
            <div className="text-white/30 text-5xl font-heading leading-none select-none">
              &ldquo;
            </div>
            <blockquote className="mt-2 font-heading text-xl md:text-2xl italic text-white leading-snug">
              Let knowledge be the lamp, values the oil, and devotion the flame
              — together they illuminate the path from darkness to light.
            </blockquote>
            <div className="mt-6 w-12 h-0.5 bg-white/30 mx-auto rounded-full" />
          </div>
        </div>
      </section>
    </main>
  );
}
