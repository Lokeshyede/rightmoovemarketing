"use client";

import { useEffect, useState, useRef } from "react";
import { HeroCanvas } from "@/components/canvas/HeroCanvas";
import { RightMoveLogo } from "@/components/brand/RightMoveLogo";
import { Magnetic } from "@/components/animations/Magnetic";
import { ArrowUpRight, Play, Sparkles, TrendingUp, Target, Video, Users, Database } from "lucide-react";

interface HeroSectionProps {
  onStartProject?: () => void;
  onExploreWork?: () => void;
}

export function HeroSection({ onStartProject, onExploreWork }: HeroSectionProps) {
  const [introPhase, setIntroPhase] = useState<
    "blackout" | "light" | "logo" | "headline" | "sweep" | "complete"
  >("blackout");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, relX: 0.5, relY: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Cinematic Load Sequence Orchestration
  useEffect(() => {
    // 1. Initial Blackout (0 - 300ms)
    const t1 = setTimeout(() => setIntroPhase("light"), 250);
    // 2. Blue Light Appears (250 - 750ms)
    const t2 = setTimeout(() => setIntroPhase("logo"), 750);
    // 3. RightMove Logo Reveal & Mark Draw (750 - 1500ms)
    const t3 = setTimeout(() => setIntroPhase("headline"), 1500);
    // 4. Headline Appears Word-By-Word (1500 - 2400ms)
    const t4 = setTimeout(() => setIntroPhase("sweep"), 2400);
    // 5. Blue Light Sweep (2400 - 3100ms)
    const t5 = setTimeout(() => setIntroPhase("complete"), 3100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  // Track mouse coordinates for mouse-follow glow and 3D parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({
        x,
        y,
        relX: x / rect.width,
        relY: y / rect.height,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Floating marketing metric chips (Desktop)
  const floatingCards = [
    { label: "META ADS", icon: Target, metric: "+4.8x ROAS", top: "18%", left: "4%", delay: 0.1 },
    { label: "QUALIFIED LEADS", icon: Users, metric: "84 / day", top: "32%", right: "4%", delay: 0.25 },
    { label: "VIRAL REELS", icon: Video, metric: "2.4M Views", bottom: "28%", left: "5%", delay: 0.4 },
    { label: "CAMPAIGNS", icon: TrendingUp, metric: "Predictable Scale", top: "70%", right: "5%", delay: 0.55 },
    { label: "CRM & TECH", icon: Database, metric: "Zero Lead Lag", bottom: "14%", left: "24%", delay: 0.7 },
  ];

  // Headline words for staggered split-text reveal
  const headlineWordsRow1 = ["WE", "MAKE", "YOUR", "BUSINESS"];
  const headlineWordsRow2 = ["IMPOSSIBLE", "TO", "IGNORE."];

  const isHeadlineActive = introPhase === "headline" || introPhase === "sweep" || introPhase === "complete";
  const isSweepActive = introPhase === "sweep" || introPhase === "complete";
  const isCardsActive = introPhase === "complete";

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center pt-28 pb-16 sm:pb-20 overflow-hidden bg-[#050608] select-none"
    >
      {/* 1. Cinematic Black Screen Overlay with Smooth Fade Out */}
      <div
        className={`fixed inset-0 bg-[#050608] z-50 pointer-events-none transition-opacity duration-1000 ease-out ${
          introPhase === "blackout" ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* 2. Interactive Three.js Hardware Canvas Background */}
      <HeroCanvas />

      {/* 3. Central Pulsing Blue Light Bloom */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-1000 ease-out ${
          introPhase === "blackout"
            ? "w-0 h-0 opacity-0"
            : introPhase === "light"
            ? "w-[450px] sm:w-[850px] h-[450px] sm:h-[850px] opacity-90 bg-radial from-blue-600/35 via-cyan-500/10 to-transparent blur-3xl scale-110"
            : "w-[350px] sm:w-[750px] h-[350px] sm:h-[750px] opacity-60 bg-radial from-blue-600/20 via-cyan-500/5 to-transparent blur-3xl scale-100"
        }`}
      />

      {/* 4. Mouse-Follow Dynamic Glow (Desktop Interactive) */}
      <div
        className="hidden md:block absolute w-[400px] h-[400px] rounded-full pointer-events-none transition-opacity duration-500 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: "radial-gradient(circle, rgba(0,191,255,0.08) 0%, rgba(11,92,255,0.03) 40%, transparent 70%)",
        }}
      />

      {/* 5. Cyber Grid Overlay with 3D Depth Shift */}
      <div
        className="absolute inset-0 rm-grid-bg opacity-30 pointer-events-none"
        style={{
          transform: `translate(${(mousePos.relX - 0.5) * -12}px, ${(mousePos.relY - 0.5) * -12}px)`,
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* 6. Main Hero Stage Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Official RightMove Logo Reveal with Glowing Sweep */}
        <div
          className={`mb-4 sm:mb-6 flex flex-col items-center max-w-full transition-all duration-1000 ease-out ${
            introPhase === "blackout" || introPhase === "light"
              ? "opacity-0 scale-90 translate-y-6 blur-md"
              : "opacity-100 scale-100 translate-y-0 blur-none"
          }`}
        >
          <div className="relative group p-2">
            <div className="block sm:hidden">
              <RightMoveLogo variant="horizontal" size="md" priority />
            </div>
            <div className="hidden sm:block">
              <RightMoveLogo variant="horizontal" size="xl" priority />
            </div>
            
            {/* Animated Electric Glow Aura */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-blue-600/40 via-cyan-400/40 to-blue-500/40 blur-xl opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none animate-pulse-subtle" />
          </div>

          {/* Official Tagline Badge */}
          <div className="mt-2 sm:mt-3 flex items-center gap-2 sm:gap-3">
            <span className="h-[1px] w-4 sm:w-8 bg-cyan-400/50" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(0,191,255,0.6)] whitespace-nowrap">
              Smart Moves. Real Results.
            </span>
            <span className="h-[1px] w-4 sm:w-8 bg-cyan-400/50" />
          </div>
        </div>

        {/* Word-by-Word Reveal Headline with 3D Perspective */}
        <div className="w-full max-w-4xl mx-auto my-3 sm:my-4 px-2 perspective-1000">
          <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight sm:leading-[1.05] uppercase">
            {/* Row 1 Words */}
            <span className="inline-flex flex-wrap justify-center gap-x-2 sm:gap-x-4">
              {headlineWordsRow1.map((word, i) => (
                <span
                  key={word}
                  className="inline-block transition-all duration-700 ease-out"
                  style={{
                    opacity: isHeadlineActive ? 1 : 0,
                    transform: isHeadlineActive
                      ? "translateY(0px) rotateX(0deg)"
                      : "translateY(28px) rotateX(30deg)",
                    transitionDelay: `${i * 120}ms`,
                  }}
                >
                  {word}
                </span>
              ))}
            </span>

            <br className="hidden sm:inline" />{" "}

            {/* Row 2 Gradient Words with Blue Light Sweep */}
            <span className="relative inline-flex flex-wrap justify-center gap-x-2 sm:gap-x-4 mt-1 sm:mt-0">
              {headlineWordsRow2.map((word, i) => (
                <span
                  key={word}
                  className="relative inline-block rm-text-blue-gradient font-black drop-shadow-[0_0_40px_rgba(0,191,255,0.6)] transition-all duration-700 ease-out"
                  style={{
                    opacity: isHeadlineActive ? 1 : 0,
                    transform: isHeadlineActive
                      ? "translateY(0px) rotateX(0deg)"
                      : "translateY(32px) rotateX(30deg)",
                    transitionDelay: `${(i + 4) * 120}ms`,
                  }}
                >
                  {word}
                </span>
              ))}

              {/* Blue Light Sweep Passing Across Headline */}
              {isSweepActive && (
                <span
                  className="absolute inset-0 pointer-events-none animate-light-sweep opacity-75"
                  aria-hidden="true"
                />
              )}
            </span>
          </h1>
        </div>

        {/* Brand Core Pillars */}
        <p
          className={`text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.18em] sm:tracking-[0.25em] uppercase text-slate-300 mt-1 sm:mt-2 transition-all duration-700 delay-300 ${
            isHeadlineActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Creative <span className="text-cyan-400">/</span> Performance <span className="text-blue-500">/</span> Growth
        </p>

        {/* Concise Supporting Copy */}
        <p
          className={`mt-4 sm:mt-5 max-w-2xl text-xs sm:text-base md:text-lg text-slate-400 leading-relaxed font-normal px-2 transition-all duration-700 delay-500 ${
            isHeadlineActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          We create high-yield ad creative, engineer predictive customer acquisition funnels, and build the scalable software systems that move businesses forward.
        </p>

        {/* Cinematic Magnetic CTAs */}
        <div
          className={`mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full sm:w-auto px-2 sm:px-0 transition-all duration-700 delay-700 ${
            isHeadlineActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Primary Magnetic CTA */}
          <Magnetic strength={0.25} data-cursor="MOVE">
            <button
              onClick={
                onStartProject ||
                (() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                })
              }
              className="w-full sm:w-auto group relative px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-bold text-xs uppercase tracking-widest overflow-hidden shadow-[0_0_35px_rgba(11,92,255,0.55)] transition-all duration-300 hover:shadow-[0_0_55px_rgba(0,191,255,0.85)] hover:scale-105 active:scale-95 cursor-pointer border-glow-animated"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Start A Project</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </Magnetic>

          {/* Secondary Magnetic CTA */}
          <Magnetic strength={0.2} data-cursor="EXPLORE">
            <button
              onClick={
                onExploreWork ||
                (() => {
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                })
              }
              className="w-full sm:w-auto group px-8 py-3.5 sm:py-4 rounded-full bg-[#0B1220]/80 border border-cyan-500/25 text-slate-200 hover:text-white hover:border-cyan-400 text-xs uppercase tracking-widest font-bold backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,191,255,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform fill-cyan-400/20" />
              <span>Explore Our Work</span>
            </button>
          </Magnetic>
        </div>

        {/* The RightMove Visual Arrow Conversion Formula Strip */}
        <div
          className={`mt-8 sm:mt-12 inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#07111F]/80 border border-cyan-500/20 backdrop-blur-md text-[9px] sm:text-[11px] font-mono tracking-wider text-slate-400 shadow-[0_0_20px_rgba(11,92,255,0.2)] max-w-full transition-all duration-700 delay-1000 ${
            isHeadlineActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-white font-semibold">CONTENT</span>
          <span className="text-cyan-400 animate-pulse">→</span>
          <span className="text-white font-semibold">ADVERTISING</span>
          <span className="text-cyan-400 animate-pulse">→</span>
          <span className="text-white font-semibold">ATTENTION</span>
          <span className="text-cyan-400 animate-pulse">→</span>
          <span className="text-cyan-300 font-semibold">LEADS</span>
          <span className="text-cyan-400 animate-pulse">→</span>
          <span className="text-cyan-200 font-semibold">CUSTOMERS</span>
          <span className="text-cyan-400 animate-pulse">→</span>
          <span className="text-cyan-400 font-black drop-shadow-[0_0_10px_#00BFFF]">GROWTH</span>
        </div>
      </div>

      {/* Floating 3D Marketing Cards (Desktop only with 3D Tilt & Staggered Entrance) */}
      <div className="hidden xl:block pointer-events-none absolute inset-0 max-w-7xl mx-auto">
        {floatingCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              style={{
                position: "absolute",
                top: card.top,
                bottom: card.bottom,
                left: card.left,
                right: card.right,
                opacity: isCardsActive ? 1 : 0,
                transform: isCardsActive
                  ? `translate(${(mousePos.relX - 0.5) * 20}px, ${(mousePos.relY - 0.5) * 20}px)`
                  : "translateY(30px) scale(0.9)",
                transition: "opacity 0.8s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${card.delay}s`,
              }}
              className="pointer-events-auto animate-float-slow"
            >
              <div
                data-cursor="METRIC"
                className="p-3.5 rounded-2xl rm-glass rm-glass-hover shadow-xl flex items-center gap-3 transition-transform duration-300 hover:scale-108 hover:shadow-[0_0_30px_rgba(0,191,255,0.35)] cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-600/25 border border-cyan-500/35 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,191,255,0.35)]">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">{card.label}</p>
                  <p className="text-xs font-bold text-white font-mono">{card.metric}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
