import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-maroon via-earth to-saffron-dark">
      {/* Decorative lotus / Om pattern */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Large lotus-like radial behind the text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.06]">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Stylised lotus petals */}
            <ellipse cx="100" cy="70" rx="18" ry="50" fill="white" transform="rotate(0 100 100)" />
            <ellipse cx="100" cy="70" rx="18" ry="50" fill="white" transform="rotate(45 100 100)" />
            <ellipse cx="100" cy="70" rx="18" ry="50" fill="white" transform="rotate(90 100 100)" />
            <ellipse cx="100" cy="70" rx="18" ry="50" fill="white" transform="rotate(135 100 100)" />
            <ellipse cx="100" cy="70" rx="18" ry="50" fill="white" transform="rotate(180 100 100)" />
            <ellipse cx="100" cy="70" rx="18" ry="50" fill="white" transform="rotate(225 100 100)" />
            <ellipse cx="100" cy="70" rx="18" ry="50" fill="white" transform="rotate(270 100 100)" />
            <ellipse cx="100" cy="70" rx="18" ry="50" fill="white" transform="rotate(315 100 100)" />
            <circle cx="100" cy="100" r="20" fill="white" />
          </svg>
        </div>

        {/* Subtle gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-saffron-dark/20 via-transparent to-earth/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-[family-name:var(--font-sanskrit)] text-5xl tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in-up">
          Jnānashakti
        </h1>

        <p className="mt-4 font-heading text-lg text-white/90 italic sm:text-xl md:text-2xl animate-fade-in-up delay-100">
          Illuminating Lives Through Ancient Wisdom
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 leading-relaxed sm:text-lg animate-fade-in-up delay-200">
          Rooted in the timeless traditions of India, Jnanashakti nurtures human
          values, imparts spiritual education, and empowers individuals and
          organisations through inner transformation.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up delay-300">
          <Link
            href="/teachings"
            className="inline-flex items-center justify-center rounded-full bg-orange-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-orange-accent/90 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-accent"
          >
            Explore Teachings
          </Link>
          <Link
            href="/ashram"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Visit the Ashram
          </Link>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-white to-transparent" />
    </section>
  );
}
