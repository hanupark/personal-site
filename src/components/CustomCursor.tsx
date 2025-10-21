"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPressed, setIsPressed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio("/audio/click.m4a");

    const playClickSound = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0; // Reset to start
        audioRef.current.play().catch(() => {
          // Silently fail if audio can't play
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsPressed(true);
      playClickSound();
    };

    const handleMouseUp = () => setIsPressed(false);

    const handleTouchStart = () => {
      setIsPressed(true);
      playClickSound();
    };

    const handleTouchEnd = () => setIsPressed(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-30%, -75%)",
      }}
    >
      <Image
        src={isPressed ? "/images/Tongs-closed.png" : "/images/Tongs-open.png"}
        alt="cursor"
        width={96}
        height={96}
        className="w-24"
        style={{ width: "auto", height: "auto" }}
        priority={false}
      />
    </div>
  );
}
