"use client";

import { useState, useEffect, useRef } from "react";

// Get animation durations from CSS variables (in milliseconds)
const getDuration = (varName: string) => {
  if (typeof window === "undefined") return 0;
  const value = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  // Parse value like "900ms" or "1.2s" to milliseconds
  if (value.endsWith('ms')) {
    return parseInt(value);
  } else if (value.endsWith('s')) {
    return parseFloat(value) * 1000;
  }
  return 0;
};

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isSpinning, setIsSpinning] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const spinnerRef = useRef<HTMLDivElement>(null);

  // Wait for all images to load
  useEffect(() => {
    // Wait for the window load event which fires after all resources are loaded
    const handleLoad = () => {
      // Double-check all images are actually loaded
      const images = Array.from(document.images);
      const promises = images.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.onload = img.onerror = resolve;
            })
      );

      Promise.all(promises).then(() => setLoadingComplete(true));
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Detect when rotation hits 0° after loading completes
  useEffect(() => {
    if (!loadingComplete || !spinnerRef.current) return;

    let animationFrameId: number;

    const checkRotation = () => {
      if (!spinnerRef.current) return;

      const matrix = window.getComputedStyle(spinnerRef.current).transform;

      if (matrix && matrix !== "none") {
        const values = matrix.match(/matrix\((.+)\)/)?.[1].split(", ");
        if (values) {
          const angle = Math.atan2(parseFloat(values[1]), parseFloat(values[0])) * (180 / Math.PI);
          const normalized = (angle + 360) % 360;

          // Stop when upright (within 5° of 0°)
          if (normalized < 5 || normalized > 355) {
            setIsSpinning(false);
            const pauseDuration = getDuration("--duration-spinner-pause") || 900;
            const fadeDuration = getDuration("--duration-fade") || 1200;

            setTimeout(() => {
              setFadeOut(true);
              // Dispatch event when fade starts so page can trigger animations
              window.dispatchEvent(new Event('loadingComplete'));
              setTimeout(() => setIsLoading(false), fadeDuration);
            }, pauseDuration);
            return;
          }
        }
      }

      animationFrameId = requestAnimationFrame(checkRotation);
    };

    animationFrameId = requestAnimationFrame(checkRotation);
    return () => cancelAnimationFrame(animationFrameId);
  }, [loadingComplete]);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-all ease-linear ${
        fadeOut ? "opacity-0 blur-lg" : "opacity-100"
      }`}
      style={{ transitionDuration: "var(--duration-fade)" }}
    >
      <div className="relative w-20 h-20">
        <div
          ref={spinnerRef}
          className="absolute inset-0 bg-[var(--color-primary)] rounded-full flex items-center justify-center animate-spin"
          style={{ animationPlayState: isSpinning ? "running" : "paused" }}
        >
          {/* Thank you bag smiley */}
          <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none">
            <circle cx="8" cy="9" r="1.5" fill="white" />
            <circle cx="16" cy="9" r="1.5" fill="white" />
            <path
              d="M7 14 Q 12 17 17 14"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
