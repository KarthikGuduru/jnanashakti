"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Plays a soft ambient loop in the background.
 *
 * Browsers block autoplay without prior user interaction, so we attempt
 * autoplay first (works for visitors who've previously interacted with
 * this site) and fall back to starting playback on the first user
 * interaction (click / touch / keypress / scroll).
 *
 * A very small mute toggle lives in the bottom-right so visitors can
 * silence the audio if they prefer quiet.
 */
export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.11;
    audio.loop = true;

    // Respect a prior user preference stored in localStorage.
    try {
      const savedMuted = localStorage.getItem("jsBgMuted");
      if (savedMuted === "1") {
        setMuted(true);
        audio.muted = true;
      }
    } catch {
      /* ignore */
    }

    // Attempt immediate autoplay (often blocked on first visit).
    const tryPlay = () => {
      const p = audio.play();
      if (p && typeof p.then === "function") {
        p.then(() => setStarted(true)).catch(() => {
          /* blocked — wait for user gesture */
        });
      } else {
        setStarted(true);
      }
    };

    tryPlay();

    // Fallback: start on first user interaction anywhere on the page.
    const onGesture = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().then(() => setStarted(true)).catch(() => {});
      }
      removeListeners();
    };
    const events: (keyof WindowEventMap)[] = [
      "click",
      "touchstart",
      "keydown",
      "scroll",
    ];
    const add = () => events.forEach((e) => window.addEventListener(e, onGesture, { once: true, passive: true }));
    const removeListeners = () => events.forEach((e) => window.removeEventListener(e, onGesture));
    add();

    return () => removeListeners();
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !muted;
    audio.muted = next;
    setMuted(next);
    try {
      localStorage.setItem("jsBgMuted", next ? "1" : "0");
    } catch {
      /* ignore */
    }
    // If unmuting and audio is paused (never started), try to start.
    if (!next && audio.paused) {
      audio.play().then(() => setStarted(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/breathe.mp3"
        preload="auto"
        loop
        playsInline
        aria-hidden="true"
      />
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute background music" : "Mute background music"}
        title={muted ? "Unmute" : "Mute"}
        className={`fixed bottom-4 right-4 z-40 flex h-9 w-9 items-center justify-center rounded-full border border-warm-border bg-surface/80 text-text-muted shadow-sm backdrop-blur-sm transition-all hover:text-saffron ${
          started || muted ? "opacity-70 hover:opacity-100" : "opacity-50 hover:opacity-100"
        }`}
      >
        {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
      </button>
    </>
  );
}
