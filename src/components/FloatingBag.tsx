"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Position {
  x: number;
  y: number;
}

interface FloatingImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  initialX?: number;
  initialY?: number;
  initialVelocityX?: number;
  initialVelocityY?: number;
  initialRotation?: number;
  startDelay?: number;
}

export default function FloatingImage({
  src,
  alt,
  width = 150,
  height = 200,
  initialX,
  initialY,
  initialVelocityX = -2,
  initialVelocityY = 0.5,
  initialRotation,
  startDelay = 0,
}: FloatingImageProps) {
  const [isClient, setIsClient] = useState(false);
  const [canAnimate, setCanAnimate] = useState(startDelay === 0);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });

  // Use refs for values that change but shouldn't trigger re-renders
  const velocityRef = useRef({ x: initialVelocityX, y: initialVelocityY });
  const rotationSpeedRef = useRef(0.5);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Initialize position and rotation client-side to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
    setPosition({
      x: initialX ?? Math.random() * (window.innerWidth - width),
      y: initialY ?? Math.random() * (window.innerHeight - height),
    });
    setRotation(initialRotation ?? Math.random() * 360);
  }, [initialX, initialY, initialRotation, width, height]);

  // Handle start delay
  useEffect(() => {
    if (startDelay === 0) return;
    const timer = setTimeout(() => setCanAnimate(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  // Floating animation with physics
  useEffect(() => {
    if (isDragging || !isClient || !canAnimate) return;

    const animate = () => {
      setPosition((prev) => {
        const maxX = window.innerWidth - width;
        const maxY = window.innerHeight - height;
        const velocity = velocityRef.current;

        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;

        // Bounce at edges
        if (newX <= 0 || newX >= maxX) {
          velocity.x = -velocity.x;
          newX = Math.max(0, Math.min(newX, maxX));
        }
        if (newY <= 0 || newY >= maxY) {
          velocity.y = -velocity.y;
          newY = Math.max(0, Math.min(newY, maxY));
        }

        return { x: newX, y: newY };
      });

      setRotation((prev) => prev + rotationSpeedRef.current);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isDragging, isClient, canAnimate, width, height]);

  // Start drag (mouse or touch)
  const handleDragStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    setDragOffset({ x: clientX - position.x, y: clientY - position.y });
  };

  const handleMouseDown = (e: React.MouseEvent) => handleDragStart(e.clientX, e.clientY);

  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
  };

  // Handle drag movement and release
  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (clientX: number, clientY: number) => {
      const x = Math.max(0, Math.min(clientX - dragOffset.x, window.innerWidth - width));
      const y = Math.max(0, Math.min(clientY - dragOffset.y, window.innerHeight - height));
      setPosition({ x, y });
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // Prevent scrolling
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleEnd = () => {
      setIsDragging(false);
      // Random velocity and rotation after drop
      velocityRef.current = {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      };
      rotationSpeedRef.current = (Math.random() - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, dragOffset, width, height]);

  return (
    <div
      className="absolute cursor-grab active:cursor-grabbing z-10 pointer-events-auto"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${width}px`,
        height: `${height}px`,
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center center",
        transition: isDragging ? "none" : "transform 0.1s ease-out",
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full opacity-80 hover:opacity-100 transition-opacity"
        draggable={false}
      />
    </div>
  );
}
