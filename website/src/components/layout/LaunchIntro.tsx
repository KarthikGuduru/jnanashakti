"use client";

import { useEffect, useState } from "react";

/**
 * Launch intro: a full-screen ceremonial overlay inviting the visitor
 * to tap and light the lamp. Once tapped, a flame ignites with a warm
 * golden glow and the Sanskrit greeting शुभारम्भः (auspicious
 * beginning) appears, after which the overlay gently fades away to
 * reveal the site.
 *
 * Shown only on the first visit per browser (localStorage flag).
 * The tap also serves as the user gesture that unlocks audio
 * autoplay, so the background music can begin immediately.
 */
export default function LaunchIntro() {
  const [stage, setStage] = useState<"hidden" | "idle" | "lit" | "fading">(
    "hidden"
  );

  useEffect(() => {
    try {
      const seen = localStorage.getItem("jsLampLit");
      if (seen === "1") return;
    } catch {
      /* ignore */
    }
    // Small delay so the page paints before the overlay locks the screen.
    const t = setTimeout(() => setStage("idle"), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (stage !== "idle") return;
    // Prevent body scroll while the intro is visible.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [stage]);

  const light = () => {
    if (stage !== "idle") return;
    setStage("lit");
    try {
      localStorage.setItem("jsLampLit", "1");
    } catch {
      /* ignore */
    }
    // After the flame has risen and greeting has shown, fade the overlay.
    setTimeout(() => setStage("fading"), 2600);
    setTimeout(() => setStage("hidden"), 3400);
  };

  if (stage === "hidden") return null;

  const lit = stage === "lit" || stage === "fading";
  const fading = stage === "fading";

  return (
    <button
      type="button"
      onClick={light}
      aria-label="Light the lamp to enter"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#1a0f08] via-[#2a1510] to-[#0f0805] transition-opacity duration-700 ${
        fading ? "opacity-0" : "opacity-100"
      } ${stage === "idle" ? "cursor-pointer" : "cursor-default"}`}
      disabled={stage !== "idle"}
    >
      {/* Background radial glow once lit */}
      <span
        aria-hidden
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-[1800ms] ease-out ${
          lit ? "opacity-80" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(255,180,80,0.45) 0%, rgba(234,88,12,0.18) 30%, rgba(0,0,0,0) 65%)",
        }}
      />

      {/* Diya + flame */}
      <div className="relative flex flex-col items-center">
        <div className="relative h-56 w-56 sm:h-64 sm:w-64">
          {/* Flame wrapper (fades in when lit) */}
          <div
            className={`pointer-events-none absolute left-1/2 bottom-[54%] -translate-x-1/2 transition-opacity duration-500 ${
              lit ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Soft outer glow */}
            <div
              aria-hidden
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl transition-all duration-1000 ${
                lit ? "h-32 w-32" : "h-0 w-0"
              }`}
              style={{ background: "rgba(255,170,60,0.55)" }}
            />
            {/* Flame shape */}
            <svg
              width="48"
              height="72"
              viewBox="0 0 48 72"
              className={`relative ${lit ? "js-flame" : ""}`}
              fill="none"
            >
              <defs>
                <radialGradient id="flameGrad" cx="50%" cy="70%" r="60%">
                  <stop offset="0%" stopColor="#FFF5CC" />
                  <stop offset="40%" stopColor="#FFC14D" />
                  <stop offset="75%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#B45309" />
                </radialGradient>
              </defs>
              <path
                d="M24 4 C14 22, 6 34, 10 50 C12 62, 20 68, 24 68 C28 68, 36 62, 38 50 C42 34, 34 22, 24 4 Z"
                fill="url(#flameGrad)"
              />
              {/* Inner blue-ish core */}
              <path
                d="M24 30 C20 40, 18 48, 22 56 C23 60, 25 60, 26 56 C30 48, 28 40, 24 30 Z"
                fill="rgba(255,255,230,0.85)"
              />
            </svg>
          </div>

          {/* Wick */}
          <div
            aria-hidden
            className="absolute left-1/2 bottom-[52%] h-2 w-[3px] -translate-x-1/2 rounded-sm bg-[#3a2a1a]"
          />

          {/* Diya body (oil lamp) */}
          <svg
            viewBox="0 0 240 240"
            className="h-full w-full drop-shadow-[0_8px_24px_rgba(255,140,0,0.25)]"
          >
            <defs>
              <linearGradient id="diyaBody" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#B96421" />
                <stop offset="50%" stopColor="#8C3E12" />
                <stop offset="100%" stopColor="#5A2609" />
              </linearGradient>
              <linearGradient id="diyaLip" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D97A2C" />
                <stop offset="100%" stopColor="#A14E15" />
              </linearGradient>
              <radialGradient id="oilPool" cx="50%" cy="30%" r="60%">
                <stop offset="0%" stopColor="#FFC875" />
                <stop offset="100%" stopColor="#7A3B10" />
              </radialGradient>
            </defs>
            {/* Diya base shadow */}
            <ellipse cx="120" cy="180" rx="95" ry="10" fill="rgba(0,0,0,0.35)" />
            {/* Lamp body */}
            <path
              d="M30 130 Q120 200 210 130 L195 140 Q120 180 45 140 Z"
              fill="url(#diyaBody)"
            />
            {/* Inner oil pool */}
            <path
              d="M40 128 Q120 168 200 128 Q120 150 40 128 Z"
              fill="url(#oilPool)"
            />
            {/* Pointed spout/tip for the wick */}
            <path
              d="M108 126 Q120 110 132 126 Q120 132 108 126 Z"
              fill="url(#diyaLip)"
            />
          </svg>
        </div>

        {/* Text below */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <div
            className={`font-[family-name:var(--font-sanskrit)] text-3xl tracking-wide transition-all duration-700 sm:text-4xl ${
              lit
                ? "translate-y-0 text-[#FFD89A] opacity-100"
                : "translate-y-2 text-[#E6B980]/60 opacity-70"
            }`}
          >
            {lit ? "शुभारम्भः" : "ॐ"}
          </div>
          <p
            className={`text-sm tracking-wide transition-opacity duration-500 sm:text-base ${
              lit
                ? "text-[#FFE0B0]/80"
                : "text-[#E6B980]/70 animate-[pulse_2s_ease-in-out_infinite]"
            }`}
          >
            {lit ? "Welcome to Jnāna Shakti" : "Tap to light the lamp"}
          </p>
        </div>
      </div>
    </button>
  );
}
