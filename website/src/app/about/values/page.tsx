import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Sun,
  Feather,
  Heart,
  CloudSun,
  Scale,
  HandHeart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Human Values | Jnanashakti Ashram",
  description:
    "Discover the six universal human values — Truth, Non-violence, Love, Peace, Right Conduct, and Compassion — that form the foundation of Jnanashakti's teachings and programmes.",
};

const values = [
  {
    icon: Sun,
    sanskrit: "Satya",
    english: "Truth",
    description:
      "Truth is the bedrock of all values. It encompasses honesty in speech and action, integrity in thought, and the courageous pursuit of what is real and authentic. Living in truth means aligning our outer lives with our inner knowing.",
  },
  {
    icon: Feather,
    sanskrit: "Ahimsa",
    english: "Non-violence",
    description:
      "Ahimsa extends beyond the absence of physical harm. It calls us to cultivate gentleness in thought, word, and deed — towards ourselves, others, and all living beings. Non-violence is the natural expression of a heart filled with understanding.",
  },
  {
    icon: Heart,
    sanskrit: "Prema",
    english: "Love",
    description:
      "Prema is unconditional, selfless love — the kind that expects nothing in return. It is the binding force that connects all beings and the highest expression of human nature. When love flows freely, it dissolves barriers and heals division.",
  },
  {
    icon: CloudSun,
    sanskrit: "Shanti",
    english: "Peace",
    description:
      "True peace begins within. Shanti is the inner stillness that remains steady amidst the turmoil of the external world. Through meditation, self-enquiry, and mindful living, we cultivate a peace that radiates outward into our families and communities.",
  },
  {
    icon: Scale,
    sanskrit: "Dharma",
    english: "Right Conduct",
    description:
      "Dharma calls us to act in accordance with our highest understanding of what is right. It encompasses duty, responsibility, ethical behaviour, and the discipline to do what is good even when it is difficult. Right conduct is values in action.",
  },
  {
    icon: HandHeart,
    sanskrit: "Karuna",
    english: "Compassion",
    description:
      "Karuna is the tender response of the heart to the suffering of others. It moves us beyond empathy into action — to serve, to uplift, and to ease the burdens of those around us. Compassion is wisdom expressed through loving service.",
  },
];

export default function ValuesPage() {
  return (
    <main className="bg-warm-white min-h-screen">
      {/* Banner */}
      <section className="relative bg-gradient-to-br from-saffron-dark via-saffron to-earth overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to About
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in-up">
            Human Values
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl animate-fade-in-up delay-100">
            The timeless principles that guide our lives and teachings
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-saffron">
              Foundation of Our Work
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold text-text-primary">
              Values That Transform
            </h2>
            <div className="mt-4 w-20 h-1 bg-saffron mx-auto rounded-full" />
            <p className="mt-8 text-lg leading-relaxed text-text-muted">
              At the heart of Jnanashakti&apos;s work lies a deep commitment to
              human values education. These six universal values, drawn from the
              ancient Indian spiritual tradition, are not mere ideals to admire
              from a distance. They are living principles meant to be practised
              daily — in our homes, schools, workplaces, and communities. When
              internalised, they have the power to transform individuals and, in
              turn, the world around them.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              Our programmes are designed to help participants of all ages not
              only understand these values intellectually, but to experience
              their truth directly and integrate them into every dimension of
              life.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.sanskrit}
                  className="bg-surface rounded-2xl border border-warm-border p-8 shadow-sm hover:shadow-lg hover:border-saffron/40 transition-all duration-300 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-xl bg-saffron/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-saffron" />
                  </div>
                  <div className="mt-6">
                    <span className="text-sm font-medium tracking-wider uppercase text-saffron">
                      {value.sanskrit}
                    </span>
                    <h3 className="mt-1 font-heading text-xl font-semibold text-text-primary">
                      {value.english}
                    </h3>
                  </div>
                  <p className="mt-4 text-text-muted leading-relaxed flex-1">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values in Modern Life */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <span className="inline-block text-sm font-medium tracking-widest uppercase text-saffron">
                Ancient Wisdom, Modern Relevance
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold text-text-primary">
                Values in Everyday Life
              </h2>
              <div className="mt-4 w-20 h-1 bg-saffron mx-auto rounded-full" />
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface rounded-2xl border border-warm-border p-8 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  In Education
                </h3>
                <p className="mt-3 text-text-muted leading-relaxed">
                  Values education cultivates not just academically excellent
                  students, but well-rounded individuals with strong character.
                  Schools and universities that integrate human values into
                  their programmes see improvements in student behaviour,
                  emotional well-being, and the overall learning environment.
                </p>
              </div>

              <div className="bg-surface rounded-2xl border border-warm-border p-8 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  In the Workplace
                </h3>
                <p className="mt-3 text-text-muted leading-relaxed">
                  Organisations grounded in human values foster trust,
                  collaboration, and ethical leadership. When individuals bring
                  truth, compassion, and right conduct into their professional
                  lives, workplaces become spaces of purpose, not just
                  productivity.
                </p>
              </div>

              <div className="bg-surface rounded-2xl border border-warm-border p-8 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  In Family Life
                </h3>
                <p className="mt-3 text-text-muted leading-relaxed">
                  The family is the first school of values. When parents and
                  children practise love, peace, and non-violence together,
                  homes become sanctuaries of warmth and understanding. Values
                  nurtured in the family ripple outward into the wider
                  community.
                </p>
              </div>

              <div className="bg-surface rounded-2xl border border-warm-border p-8 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  In Personal Growth
                </h3>
                <p className="mt-3 text-text-muted leading-relaxed">
                  On the individual level, living by these values brings a
                  profound sense of clarity, purpose, and inner peace.
                  Self-enquiry rooted in truth, a life of compassionate
                  service, and the daily practice of right conduct lead to
                  lasting fulfilment beyond material success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-saffron text-5xl font-heading leading-none select-none">
              &ldquo;
            </div>
            <blockquote className="mt-2 font-heading text-2xl md:text-3xl italic text-text-primary leading-snug">
              Values are not taught — they are caught. They are transmitted
              through the lived example of those who embody them.
            </blockquote>
            <div className="mt-6 w-12 h-0.5 bg-saffron mx-auto rounded-full" />
          </div>
        </div>
      </section>
    </main>
  );
}
