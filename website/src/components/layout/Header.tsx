"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  highlight?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Vision & Mission", href: "/about/vision" },
      { label: "Human Values", href: "/about/values" },
      { label: "Swamiji", href: "/about/swamiji" },
    ],
  },
  {
    label: "Teachings",
    href: "/teachings",
    children: [
      { label: "Talks", href: "/teachings/talks" },
      { label: "Articles", href: "/teachings/articles" },
      { label: "Media Library", href: "/teachings/media" },
    ],
  },
  {
    label: "Ashram",
    href: "/ashram",
    children: [
      { label: "About Shakti Ashram", href: "/ashram" },
      { label: "Request to Stay", href: "/ashram/stay" },
      { label: "Directions", href: "/ashram/directions" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Store", href: "/store" },
  { label: "Donate", href: "/donate", highlight: true },
  { label: "Contact", href: "/contact" },
];

/* ------------------------------------------------------------------ */
/*  Desktop dropdown                                                   */
/* ------------------------------------------------------------------ */

function DesktopDropdown({
  item,
  isOpen,
  onToggle,
  onClose,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  /* close on outside click */
  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-sm font-medium text-text-primary/80 transition-colors hover:text-saffron"
        aria-expanded={isOpen}
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Flyout panel */}
      <div
        className={`absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 transition-all duration-200 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        {/* Tiny caret */}
        <div className="mx-auto h-2 w-2 rotate-45 bg-surface shadow-sm" />
        <ul className="-mt-1 min-w-[200px] overflow-hidden rounded-lg border border-warm-border bg-surface shadow-lg">
          {item.children!.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onClose}
                className="block px-5 py-3 text-sm text-text-primary/80 transition-colors hover:bg-warm-white hover:text-saffron"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile accordion item                                              */
/* ------------------------------------------------------------------ */

function MobileAccordion({
  item,
  isOpen,
  onToggle,
  onNavigate,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className="border-b border-warm-white/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-lg font-medium text-warm-white transition-colors hover:text-saffron"
      >
        {item.label}
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="overflow-hidden">
          {item.children!.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="block py-2.5 pl-4 text-base text-warm-white/70 transition-colors hover:text-saffron"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  /* Track scroll position for sticky styling */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll(); // initialise
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setOpenMobileAccordion(null);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-warm-border/60 bg-surface/80 shadow-sm backdrop-blur-md"
            : "bg-surface"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8">
          {/* ---- Logo ---- */}
          <Link
            href="/"
            className="font-heading text-2xl font-bold tracking-tight text-text-primary sm:text-[1.65rem]"
          >
            <span className="text-saffron">Jnana</span>shakti
          </Link>

          {/* ---- Desktop nav ---- */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              if (item.highlight) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full bg-saffron px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-saffron-dark hover:shadow-md"
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.children) {
                return (
                  <DesktopDropdown
                    key={item.label}
                    item={item}
                    isOpen={openDesktopDropdown === item.label}
                    onToggle={() =>
                      setOpenDesktopDropdown((prev) =>
                        prev === item.label ? null : item.label
                      )
                    }
                    onClose={() => setOpenDesktopDropdown(null)}
                  />
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-text-primary/80 transition-colors hover:text-saffron"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* ---- Mobile controls ---- */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Donate CTA (small) */}
            <Link
              href="/donate"
              className="rounded-full bg-saffron px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-saffron-dark"
            >
              Donate
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-text-primary transition-colors hover:bg-warm-white"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ---- Mobile full-screen overlay (outside header to avoid sticky stacking context) ---- */}
      <div
        className={`fixed inset-0 z-[100] bg-[#1A1A2E] transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Close bar at top matching header height */}
        <div className="flex h-16 items-center justify-between px-4 sm:h-18 sm:px-6">
          <Link
            href="/"
            onClick={closeMobile}
            className="font-heading text-2xl font-bold tracking-tight text-warm-white"
          >
            <span className="text-saffron">Jnana</span>shakti
          </Link>
          <button
            onClick={closeMobile}
            className="inline-flex items-center justify-center rounded-md p-2 text-warm-white transition-colors hover:text-saffron"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav list */}
        <nav
          className="h-[calc(100dvh-4rem)] overflow-y-auto px-6 pb-10 pt-2"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => {
            if (item.children) {
              return (
                <MobileAccordion
                  key={item.label}
                  item={item}
                  isOpen={openMobileAccordion === item.label}
                  onToggle={() =>
                    setOpenMobileAccordion((prev) =>
                      prev === item.label ? null : item.label
                    )
                  }
                  onNavigate={closeMobile}
                />
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className={`block border-b border-warm-white/10 py-4 text-lg font-medium transition-colors ${
                  item.highlight
                    ? "text-saffron hover:text-saffron-light"
                    : "text-warm-white hover:text-saffron"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
