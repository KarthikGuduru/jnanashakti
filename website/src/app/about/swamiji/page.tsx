import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Flame,
  Heart,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Swami Chidananda | Jnanashakti Ashram",
  description:
    "Learn about Swami Chidananda, the spiritual guide and founder of Jnanashakti Ashram and FOWAI Forum, whose four decades of teaching wisdom from the Upanishads and Bhagavad Gita inspire seekers worldwide.",
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
            Swami Chidananda
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl animate-fade-in-up delay-100">
            The Guiding Light
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 items-start">
              {/* Photo */}
              <div className="md:col-span-2">
                <div className="w-full overflow-hidden rounded-2xl border border-warm-border bg-warm-cream shadow-sm">
                  <Image
                    src="/images/swamiji.png"
                    alt="Swami Chidananda"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority
                  />
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
                    Swami Chidananda Ji has been a speaker, writer, and teacher
                    of spiritual topics for nearly four decades. He is the
                    founder, Trustee and chief resource person of FOWAI FORUM
                    (Flame Of Who Am I), a non-government organization engaged
                    in dialogues on human values, promotion of spiritual
                    studies, and serving all life forms.
                  </p>
                  <p>
                    At the young age of 23 he was inspired by the uplifting
                    discourses of his mentor Swami Chinmayananda Ji. He served
                    his master&apos;s organization, Chinmaya Mission, for 18
                    years (1984&ndash;2002) and later was at Krishnamurti
                    Foundation India, Varanasi for 10 years
                    (2003&ndash;2013). His thought evolved through coming in
                    contact with the works of several great thinkers, notable
                    among them being Ramana Maharshi and Jiddu Krishnamurti.
                  </p>
                  <p>
                    His four decades of involvement in the &ldquo;perennial
                    philosophy&rdquo; of India, drawing from the celebrated
                    Upanishads, makes him eminently competent to guide people
                    in deeper questions of life. With his background in science
                    and engineering education, he is also well positioned to
                    explore themes like human values, emotional intelligence,
                    communication, leadership and work-life integration that
                    are of special interest to the youth of the world.
                  </p>
                  <p>
                    He held executive positions at Rajghat Education Centre,
                    the chapter at Varanasi of Krishnamurti Foundation India
                    (KFI), where he was involved in projects of education and
                    rural service. Since 2009, he has been a member of
                    KFI&apos;s Governing Body.
                  </p>
                  <p>
                    Born in 1957 in Kundapura (Udupi District, Karnataka), he
                    received B.E. from Mysore University and M.Tech from IIT
                    Madras. He briefly served Hindustan Computers (HCL) in
                    hardware R&amp;D and also taught at Bangalore Institute of
                    Technology. He knows English, Kannada, Hindi, and Sanskrit.
                  </p>
                  <p>
                    He presently lives in Mumbai and travels to various places
                    on lecture tours. Bengaluru, Chennai, Pune, Mumbai, and Goa
                    in India are places where events are held regularly. San
                    Jose (CA), Fort Worth (TX), and Tampa (FL) are among places
                    in the US where audiences await his classes.
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
              Spiritual wisdom is unparalleled in its power to purify and
              transform. Such jnana (wisdom) has the shakti (power) to take us
              across the river of suffering. Spiritual wisdom removes the
              agitations caused by wrong ways of living in the past and the
              fear of erring in the future.
            </blockquote>
            <p className="mt-6 text-white/70 font-medium text-sm tracking-wide">
              — Swami Chidananda (Inspiration: Gita)
            </p>
            <div className="mt-4 w-12 h-0.5 bg-white/30 mx-auto rounded-full" />
          </div>
        </div>
      </section>
    </main>
  );
}
