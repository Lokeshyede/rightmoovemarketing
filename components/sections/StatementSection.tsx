"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RightMoveLogo } from "@/components/brand/RightMoveLogo";
import { STATEMENTS } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export function StatementSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const pin = pinRef.current;
    if (!container || !pin) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "+=2800",
        pin: pin,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          const idx = Math.min(
            STATEMENTS.length - 1,
            Math.floor(progress * STATEMENTS.length)
          );
          setActiveIdx(idx);
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[3400px] bg-[#050608]">
      {/* Pinned Viewport Container */}
      <div
        ref={pinRef}
        className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        {/* Dynamic Background Aurora that shifts color with progress */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-700 blur-[140px]"
          style={{
            width: `${500 + activeIdx * 60}px`,
            height: `${500 + activeIdx * 60}px`,
            background: activeIdx === STATEMENTS.length - 1
              ? "radial-gradient(circle, rgba(0, 191, 255, 0.25) 0%, rgba(11, 92, 255, 0.15) 50%, transparent 70%)"
              : "radial-gradient(circle, rgba(11, 92, 255, 0.2) 0%, rgba(0, 191, 255, 0.08) 50%, transparent 70%)",
          }}
        />

        {/* Ambient Grid overlay with gentle parallax */}
        <div className="absolute inset-0 rm-grid-bg opacity-25 pointer-events-none" />

        {/* Top Section Tag */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2 rounded-full bg-[#0B1220]/90 border border-cyan-500/25 backdrop-blur-md shadow-[0_0_20px_rgba(0,191,255,0.2)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-slate-200">
            The RightMove Philosophy
          </span>
        </div>

        {/* Center Dynamic Typography Container with Blur-to-Sharp & Word Morph */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="min-h-[240px] sm:min-h-[300px] flex items-center justify-center relative w-full">
            {STATEMENTS.map((statement, idx) => {
              const isActive = activeIdx === idx;
              const isFinal = idx === STATEMENTS.length - 1;
              const words = statement.split(" ");

              return (
                <div
                  key={statement}
                  className={`transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center ${
                    isActive
                      ? "opacity-100 scale-100 blur-none pointer-events-auto"
                      : "opacity-0 scale-90 blur-xl pointer-events-none"
                  }`}
                >
                  {isFinal && (
                    <div className="mb-6 animate-pulse-subtle">
                      <RightMoveLogo variant="mark" size="md" />
                    </div>
                  )}

                  <h2
                    className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.08] ${
                      isFinal
                        ? "rm-text-blue-gradient drop-shadow-[0_0_40px_rgba(0,191,255,0.6)]"
                        : idx === 3
                        ? "text-cyan-300 drop-shadow-[0_0_25px_rgba(0,191,255,0.4)]"
                        : "text-white"
                    }`}
                  >
                    {words.map((word, wIdx) => (
                      <span
                        key={word}
                        className="inline-block transition-all duration-500"
                        style={{
                          transform: isActive ? "translateY(0px)" : "translateY(20px)",
                          transitionDelay: `${wIdx * 60}ms`,
                        }}
                      >
                        {word}&nbsp;
                      </span>
                    ))}
                  </h2>

                  <p className="mt-6 text-xs sm:text-sm font-mono tracking-widest text-cyan-400/80 uppercase">
                    Stage 0{idx + 1} of 0{STATEMENTS.length}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Scroll Progress Bar with Glowing Traveling Dot */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 w-64 max-w-full">
          <div className="flex items-center gap-2">
            {STATEMENTS.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIdx === i
                    ? "w-10 bg-cyan-400 shadow-[0_0_15px_#00BFFF]"
                    : activeIdx > i
                    ? "w-4 bg-blue-600"
                    : "w-2 bg-slate-800"
                }`}
              />
            ))}
          </div>

          <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">
            Scroll to progress philosophy
          </span>
        </div>
      </div>
    </div>
  );
}
