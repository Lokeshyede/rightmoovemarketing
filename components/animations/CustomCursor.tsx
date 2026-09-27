"use client";

import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: -100, y: -100 });
  const mouse = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    requestAnimationFrame(() => setMounted(true));

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement;
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute("data-cursor") || "");
        setIsHovered(true);
        return;
      }

      const interactive = target.closest("button, a, input, select, textarea, [role='button']");
      if (interactive) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    // RAF loop for smooth lerp
    let animId: number;
    const loop = () => {
      // Lerp position
      pos.current.x += (mouse.current.x - pos.current.x) * 0.18;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Center sharp glowing dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2.5 h-2.5 rounded-full bg-cyan-400 pointer-events-none shadow-[0_0_12px_#00BFFF] z-50 transition-transform duration-75"
        style={{ willChange: "transform" }}
      />

      {/* Outer fluid halo with dynamic text expansion */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border pointer-events-none transition-[width,height,background-color,border-color,margin] duration-300 flex items-center justify-center z-40 ${
          cursorText
            ? "w-24 h-24 -ml-12 -mt-12 bg-blue-600/30 backdrop-blur-xs border-cyan-300 shadow-[0_0_30px_rgba(0,191,255,0.45)]"
            : isHovered
            ? "w-16 h-16 -ml-8 -mt-8 bg-blue-500/20 border-cyan-400 shadow-[0_0_25px_rgba(11,92,255,0.35)]"
            : "w-10 h-10 -ml-5 -mt-5 bg-transparent border-cyan-400/35"
        }`}
        style={{ willChange: "transform" }}
      >
        {cursorText && (
          <span className="text-[10px] font-black tracking-widest text-cyan-200 uppercase select-none transition-all duration-200 animate-pulse-subtle">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
