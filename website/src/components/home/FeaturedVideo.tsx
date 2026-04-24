import Link from "next/link";
import { PlayCircle, Youtube } from "lucide-react";

const VIDEO_ID = "a9ujA0MmGEo";

export default function FeaturedVideo() {
  return (
    <section className="section-padding bg-warm-cream">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-saffron">
            <PlayCircle size={16} />
            Featured Video
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            A Glimpse of <span className="font-[family-name:var(--font-sanskrit)]">Jnāna Shakti</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-muted">
            Watch this short film to experience the spirit of the āshram and
            the vision behind <span className="font-[family-name:var(--font-sanskrit)]">Jnānashakti</span>.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-warm-border bg-black shadow-lg">
          <div className="relative aspect-video w-full">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0`}
              title="Jnanashakti — Featured Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
          <a
            href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-saffron px-5 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-saffron-dark"
          >
            <Youtube size={16} />
            Watch on YouTube
          </a>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-warm-border bg-surface px-5 py-2 font-semibold text-text-primary transition-colors hover:border-saffron/40 hover:text-saffron"
          >
            View Photo Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
