"use client";

import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

const FPS = 12;
const FRAME_DURATION = 1000 / FPS;

// Playback sequence:
// 1. Play frames 0–22 once
// 2. Pause 1s
// 3. Play frames 22–48 once
// 4. Pause 1s
// 5. Loop steps 3–4 indefinitely

export default function LemniscateAnimation({ className = "w-[200px]" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "/assets/Mask_attempt_2_fixed.json",
    });
    animRef.current = anim;

    const clearTicker = () => {
      if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
      if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null; }
    };

    const playRange = (from: number, to: number, onComplete: () => void) => {
      clearTicker();
      let frame = from;
      anim.goToAndStop(frame, true);
      intervalRef.current = setInterval(() => {
        frame++;
        anim.goToAndStop(frame, true);
        if (frame >= to) {
          clearTicker();
          onComplete();
        }
      }, FRAME_DURATION);
    };

    const loopSegment = () => {
      playRange(22, 48, () => {
        timeoutRef.current = setTimeout(loopSegment, 1000);
      });
    };

    const startSequence = () => {
      playRange(0, 22, () => {
        timeoutRef.current = setTimeout(loopSegment, 1000);
      });
    };

    anim.addEventListener("DOMLoaded", startSequence);

    return () => {
      clearTicker();
      anim.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ aspectRatio: "1080/490" }}
      aria-hidden="true"
    />
  );
}
