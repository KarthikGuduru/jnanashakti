import { Mic, FileText, PlayCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

interface TeachingLink {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  href: string;
}

const teachingLinks: TeachingLink[] = [
  {
    icon: Mic,
    title: "Talks",
    description: "Recorded discourses on Vedanta, dharma, and daily practice.",
    href: "/teachings/talks",
  },
  {
    icon: FileText,
    title: "Articles",
    description: "Written reflections and explorations of scriptural wisdom.",
    href: "/teachings/articles",
  },
  {
    icon: PlayCircle,
    title: "Media Library",
    description: "Video recordings, bhajans, and guided meditations.",
    href: "/teachings/media",
  },
];

export default function TeachingsPreview() {
  return (
    <section className="section-padding bg-warm-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Teachings &amp; Wisdom
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-saffron" />
        </div>

        {/* Featured quote */}
        <blockquote className="mx-auto mt-12 max-w-3xl text-center">
          <p className="font-heading text-xl italic leading-relaxed text-text-primary/80 sm:text-2xl md:text-3xl">
            &ldquo;True knowledge is that which liberates — not just the mind,
            but the very sense of who you are.&rdquo;
          </p>
          <footer className="mt-4 text-sm font-semibold tracking-wide text-saffron uppercase">
            — Swamiji
          </footer>
        </blockquote>

        {/* Two-column layout */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left — descriptive text */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-text-primary">
              Explore a Living Tradition
            </h3>
            <p className="mt-4 leading-relaxed text-text-muted">
              The teachings offered at Jnanashakti draw from the wellspring of
              Vedanta, the Upanishads, and the Bhagavad Gita, presented with
              clarity and relevance for seekers in the modern world. Whether
              through talks, written reflections, or guided sessions, each
              teaching aims to kindle the inner light of understanding and
              self-inquiry.
            </p>
            <p className="mt-4 leading-relaxed text-text-muted">
              Discover resources that support your journey — from introductory
              discourses for newcomers to in-depth explorations for committed
              practitioners.
            </p>

            <div className="mt-8">
              <Link
                href="/teachings"
                className="inline-flex items-center gap-2 rounded-full bg-saffron px-8 py-3.5 text-sm font-semibold text-white shadow transition-all duration-300 hover:bg-saffron-dark hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore All Teachings
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right — link cards */}
          <div className="flex flex-col gap-4">
            {teachingLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-start gap-4 rounded-xl border border-warm-border/60 bg-surface p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-saffron/10 text-saffron transition-colors group-hover:bg-saffron group-hover:text-white">
                  <item.icon className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <h4 className="font-heading text-base font-semibold text-text-primary group-hover:text-saffron-dark transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>

                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-text-muted transition-transform group-hover:translate-x-1 group-hover:text-saffron" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
