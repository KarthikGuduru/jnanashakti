"use client";

import { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";

/**
 * A subtle, dismissible banner celebrating the soft launch of the
 * Jnānashakti website. Dismissal is remembered in localStorage so it
 * doesn't reappear on subsequent visits.
 *
 * On the first-ever visit, a gentle sparkle animation plays behind the
 * message for a few seconds as a small celebratory touch.
 */
export default function LaunchBanner() {
  const [visible, setVisible] = useState(false);
  const [firstVisit, setFirstVisit] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem("jsLaunchBannerDismissed");
      if (dismissed === "1") return;
      const seen = localStorage.getItem("jsLaunchBannerSeen");
      if (!seen) {
        setFirstVisit(true);
        localStorage.setItem("jsLaunchBannerSeen", "1");
      }
      // Slight delay so the banner slides in gently after hero paints.
      const t = setTimeout(() => setVisible(true), 450);
      return () => clearTimeout(t);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem("jsLaunchBannerDismissed", "1");
    } catch {
      /* ignore */
    }
  };

  if (!visible) return null;

  return (
    <div
      className="relative z-30 overflow-hidden border-b border-saffron/20 bg-gradient-to-r from-saffron/15 via-orange-accent/10 to-saffron/15 px-4 py-2.5 text-center"
      role="status"
      aria-live="polite"
    >
      {/* Sparkles (first visit only) */}
      {firstVisit && (
        <>
          <span className="js-sparkle js-sparkle-1" />
          <span className="js-sparkle js-sparkle-2" />
          <span className="js-sparkle js-sparkle-3" />
          <span className="js-sparkle js-sparkle-4" />
          <span className="js-sparkle js-sparkle-5" />
        </>
      )}

      <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-2 text-xs font-medium text-text-primary sm:text-sm">
        <Sparkles size={14} className="flex-shrink-0 text-saffron" />
        <span className="font-[family-name:var(--font-sanskrit)] text-saffron-dark">
          शुभारम्भः
        </span>
        <span className="hidden text-text-muted sm:inline">·</span>
        <span>
          Soft launching today — welcome to{" "}
          <span className="font-[family-name:var(--font-sanskrit)] font-semibold">
            Jnāna Shakti
          </span>
          . We&apos;re still adding finishing touches.
        </span>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss launch banner"
          className="ml-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-saffron/15 hover:text-saffron"
        >
          <X size={12} />
        </button>
      </div>
    </div>
  );
}
