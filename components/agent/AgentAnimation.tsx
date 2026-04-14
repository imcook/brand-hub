"use client";

import Lottie from "lottie-react";
import { useEffect, useRef } from "react";

// Three animation states — each a separate Lottie JSON export from After Effects:
//
// 1. /public/assets/agent-idle.json     — gentle looping infinity wave, waiting state
// 2. /public/assets/agent-active.json   — sped-up infinity wave cycling through colours, loops while thinking
// 3. /public/assets/agent-complete.json — plays once to completion and stops
//
// To activate: import each JSON and replace the corresponding `null` below.

// import idleAnimation from "@/public/assets/agent-idle.json";
// import activeAnimation from "@/public/assets/agent-active.json";
// import completeAnimation from "@/public/assets/agent-complete.json";
const idleAnimation = null;
const activeAnimation = null;
const completeAnimation = null;

type AnimationState = "idle" | "active" | "complete";

interface AgentAnimationProps {
  state?: AnimationState;
  onCompleteFinished?: () => void;
}

export default function AgentAnimation({
  state = "idle",
  onCompleteFinished,
}: AgentAnimationProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lottieRef = useRef<any>(null);

  const animationData =
    state === "active" ? activeAnimation :
    state === "complete" ? completeAnimation :
    idleAnimation;

  const shouldLoop = state !== "complete";

  // When complete animation finishes, notify parent so it can return to idle
  const handleComplete = () => {
    if (state === "complete" && onCompleteFinished) {
      onCompleteFinished();
    }
  };

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.goToAndPlay(0);
    }
  }, [state]);

  // Placeholder until animation files are in place
  if (!animationData) {
    const isActive = state === "active";
    const isComplete = state === "complete";
    return (
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
        style={{ background: isActive || isComplete ? "#44607B" : "#44607B1A" }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M3 9c0-1.5 1.5-3 3-3s3 1.5 3 3 1.5 3 3 3 3-1.5 3-3"
            stroke={isActive || isComplete ? "white" : "#44607B"}
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={shouldLoop}
      onComplete={handleComplete}
      style={{ width: 40, height: 40 }}
    />
  );
}
