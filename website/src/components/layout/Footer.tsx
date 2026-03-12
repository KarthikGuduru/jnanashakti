import Link from "next/link";
import Image from "next/image";
import { Youtube, Mail, Phone, MapPin } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Teachings", href: "/teachings" },
  { label: "Events", href: "/events" },
  { label: "Bookstore", href: "/store" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

const PROGRAMS = [
  { label: "Talks", href: "/teachings/talks" },
  { label: "Articles", href: "/teachings/articles" },
  { label: "Media Library", href: "/teachings/media" },
  { label: "Request to Stay", href: "/ashram/stay" },
  { label: "Directions", href: "/ashram/directions" },
];

const SOCIAL_LINKS = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@fowaiforumflameofwhoami584",
    icon: Youtube,
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-maroon text-warm-white/80">
      {/* ---- Main grid ---- */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 - About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-heading text-2xl font-bold tracking-tight text-warm-white"
            >
              <Image
                src="/images/logo.jpeg"
                alt="Jnanashakti Ashram"
                width={40}
                height={40}
                className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
              />
              <span className="font-[family-name:var(--font-sanskrit)]"><span className="text-saffron">Jnāna</span>shakti</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-warm-white/60">
              <span className="font-[family-name:var(--font-sanskrit)]">Jnānashakti Āshram</span> is a spiritual sanctuary dedicated to the
              pursuit of self-knowledge, inner transformation, and the timeless
              wisdom of <span className="font-[family-name:var(--font-sanskrit)]">Vedānta</span>. We welcome seekers of all backgrounds on the
              path of awakening.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-warm-white/15 text-warm-white/50 transition-all hover:border-saffron/50 hover:bg-saffron/10 hover:text-saffron"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-white/60 transition-colors hover:text-saffron"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Programs */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-white">
              Programs
            </h3>
            <ul className="mt-4 space-y-3">
              {PROGRAMS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-white/60 transition-colors hover:text-saffron"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="mailto:fowaiforum@gmail.com"
                  className="flex items-start gap-3 text-sm text-warm-white/60 transition-colors hover:text-saffron"
                >
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  <span>fowaiforum@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919969432560"
                  className="flex items-start gap-3 text-sm text-warm-white/60 transition-colors hover:text-saffron"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  <span>+91 99694 32560</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-warm-white/60">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <address className="not-italic leading-relaxed">
                    <span className="font-[family-name:var(--font-sanskrit)]">Jnāna Shakti Āshram</span>,
                    <br />
                    Vāve Tarfe Āsare (वावे तर्फ़े आसरे),
                    <br />
                    Sudhagadh Taluka, Raigadh Jilha,
                    <br />
                    Maharashtra 410 205, India
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---- Bottom bar ---- */}
      <div className="border-t border-warm-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-warm-white/40 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {currentYear} <span className="font-[family-name:var(--font-sanskrit)]">Jnānashakti Āshram</span>. All rights reserved.</p>
          <p className="italic">Built with devotion</p>
        </div>
      </div>
    </footer>
  );
}
