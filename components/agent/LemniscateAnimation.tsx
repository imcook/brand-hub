"use client";

import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

const FPS = 12;
const TOTAL_FRAMES = 120;

export default function LemniscateAnimation({ width = 200, height = 91 }: { width?: number; height?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);
  const tickerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "/assets/lemniscate-mask-fixed.json",
    });
    animRef.current = anim;

    const step = () => {
      anim.goToAndStop(frameRef.current, true);
      frameRef.current = (frameRef.current + 1) % TOTAL_FRAMES;
    };

    anim.addEventListener("DOMLoaded", () => {
      tickerRef.current = setInterval(step, 1000 / FPS);
    });

    return () => {
      if (tickerRef.current) clearInterval(tickerRef.current);
      anim.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width, height }}
      aria-hidden="true"
    />
  );
}
