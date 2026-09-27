"use client";

import { useEffect, useState } from "react";

export function AtmosphericBackground() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Base Subtle Ambient Noise Texture */}
      <div className="absolute inset-0 rm-noise-bg pointer-events-none opacity-40 z-10" />

      {/* 2. Global Cyber Grid that gently shifts */}
      <div 
        className="absolute inset-0 rm-grid-bg opacity-20 pointer-events-none"
        style={{
          transform: mounted
            ? `translate(${(mousePos.x - 0.5) * -15}px, ${(mousePos.y - 0.5) * -15}px)`
            : "none",
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* 3. Slow Organic Blue Aurora Blobs */}
      {/* Aurora Blob 1 - Top Left Electric Blue */}
      <div
        className="absolute -top-32 -left-32 w-[650px] sm:w-[900px] h-[650px] sm:h-[900px] rounded-full bg-radial from-[#0B5CFF]/15 via-[#00BFFF]/5 to-transparent blur-[140px] animate-aurora pointer-events-none"
        style={{ animationDuration: "22s" }}
      />

      {/* Aurora Blob 2 - Center Right Cyan Glow */}
      <div
        className="absolute top-1/3 -right-48 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full bg-radial from-[#00BFFF]/12 via-[#0B5CFF]/5 to-transparent blur-[160px] animate-aurora pointer-events-none"
        style={{ animationDuration: "28s", animationDelay: "-7s" }}
      />

      {/* Aurora Blob 3 - Bottom Left Deep Ambient */}
      <div
        className="absolute top-2/3 -left-40 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full bg-radial from-[#0B5CFF]/14 via-[#07111F]/10 to-transparent blur-[150px] animate-aurora pointer-events-none"
        style={{ animationDuration: "25s", animationDelay: "-14s" }}
      />

      {/* 4. Moving Light Rays / Beams */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-40 left-1/4 w-[2px] h-[140vh] bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent rotate-[25deg] blur-xs animate-pulse-subtle"
          style={{ animationDuration: "7s" }}
        />
        <div 
          className="absolute -top-40 right-1/3 w-[1.5px] h-[140vh] bg-gradient-to-b from-transparent via-blue-500/35 to-transparent rotate-[-20deg] blur-xs animate-pulse-subtle"
          style={{ animationDuration: "9s", animationDelay: "2s" }}
        />
      </div>

      {/* 5. Floating Geometric Brand Symbols (Subtle Wireframe Chevrons & Diamonds) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Chevron 1 */}
        <div
          className="absolute top-[22%] left-[8%] w-14 h-14 border border-cyan-400/15 rounded-xl rotate-12 animate-float-slow"
          style={{
            transform: `translate(${(mousePos.x - 0.5) * 25}px, ${(mousePos.y - 0.5) * 25}px) rotate(18deg)`,
            transition: "transform 1s ease-out",
          }}
        />

        {/* Floating Chevron 2 */}
        <div
          className="absolute top-[55%] right-[10%] w-20 h-20 border border-blue-500/15 rounded-2xl -rotate-12 animate-float-reverse"
          style={{
            transform: `translate(${(mousePos.x - 0.5) * -30}px, ${(mousePos.y - 0.5) * -30}px) rotate(-15deg)`,
            transition: "transform 1.2s ease-out",
          }}
        />

        {/* Floating RightMove Mark Wireframe Outline */}
        <div
          className="absolute top-[80%] left-[12%] w-16 h-16 border border-cyan-400/10 rounded-full flex items-center justify-center animate-float-slow"
          style={{
            transform: `translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px)`,
            transition: "transform 1s ease-out",
          }}
        >
          <div className="w-8 h-8 border-t-2 border-r-2 border-cyan-400/20 rotate-45 translate-x-[-2px] translate-y-[2px]" />
        </div>
      </div>
    </div>
  );
}
