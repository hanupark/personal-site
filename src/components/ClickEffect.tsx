"use client";

import { useEffect, useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function ClickEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const ripple: Ripple = { id: Date.now(), x: e.clientX, y: e.clientY };
      const rippleDuration =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--duration-ripple")) || 1000;

      setRipples((prev) => [...prev, ripple]);

      // Remove after animation completes
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, rippleDuration);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute rounded-full animate-pressure"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
    </div>
  );
}
