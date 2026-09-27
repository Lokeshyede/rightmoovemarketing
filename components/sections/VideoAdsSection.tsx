"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Pause, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Magnetic } from "@/components/animations/Magnetic";

gsap.registerPlugin(ScrollTrigger);

interface VideoShowcaseItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  resolution: string;
  aspectRatio: string;
  metric: string;
  description: string;
  gradient: string;
  badge: string;
}

const VIDEO_ITEMS: VideoShowcaseItem[] = [
  {
    id: "v1",
    title: "Cinematic High-Yield Product Commercial",
    category: "PRODUCT ADS",
    duration: "0:30",
    resolution: "4K UHD",
    aspectRatio: "16:9",
    metric: "4.8x ROAS Benchmark",
    description: "Macro-lens 4K visual storytelling with dynamic motion graphics and direct-response psychological callouts.",
    gradient: "from-blue-600/40 via-cyan-500/20 to-[#07111F]",
    badge: "Direct Response",
  },
  {
    id: "v2",
    title: "Brand Authority Manifesto Film",
    category: "BRAND FILMS",
    duration: "1:15",
    resolution: "4K UHD",
    aspectRatio: "16:9",
    metric: "91% Hook Retention",
    description: "Emotional brand storytelling engineered to build deep institutional credibility and command premium pricing.",
    gradient: "from-cyan-600/40 via-blue-900/30 to-[#07111F]",
    badge: "Authority",
  },
  {
    id: "v3",
    title: "High-Retention Algorithmic Reels",
    category: "REELS",
    duration: "0:25",
    resolution: "Vertical 9:16",
    aspectRatio: "9:16",
    metric: "3.2M Organic Impressions",
    description: "First 2-second pattern interrupt hooks with rhythmic kinetic typography and synced audio drops.",
    gradient: "from-blue-500/40 via-indigo-700/30 to-[#07111F]",
    badge: "Viral Architecture",
  },
  {
    id: "v4",
    title: "VIP Launch Promotional Video",
    category: "PROMOTIONAL VIDEOS",
    duration: "0:45",
    resolution: "4K UHD",
    aspectRatio: "16:9",
    metric: "68% Pre-Launch Signups",
    description: "Urgency-driven motion design with dynamic countdown cues and multi-device preview animations.",
    gradient: "from-cyan-400/30 via-blue-700/30 to-[#07111F]",
    badge: "Conversion Sprint",
  },
  {
    id: "v5",
    title: "Omni-Channel Social Media Ad Suite",
    category: "SOCIAL MEDIA ADS",
    duration: "0:15",
    resolution: "Square 1:1 & 9:16",
    aspectRatio: "1:1",
    metric: "2.8s Thumb-Stop Rate",
    description: "Modular, high-speed A/B creative variants optimized for Meta, YouTube Shorts, and TikTok algorithms.",
    gradient: "from-blue-700/40 via-cyan-600/30 to-[#07111F]",
    badge: "Omni-Channel",
  },
];

export function VideoAdsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // GSAP Horizontal Scroll Pinning on Desktop
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Only enable GSAP pinned horizontal scroll on desktop screens
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      const scrollWidth = track.scrollWidth - window.innerWidth + 180;

      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${scrollWidth * 1.2}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const idx = Math.min(
              VIDEO_ITEMS.length - 1,
              Math.floor(progress * VIDEO_ITEMS.length)
            );
            setActiveIdx(idx);
          },
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const activeVideo = VIDEO_ITEMS[activeIdx];

  const handleManualScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setActiveIdx((prev) => Math.max(0, prev - 1));
    } else {
      setActiveIdx((prev) => Math.min(VIDEO_ITEMS.length - 1, prev + 1));
    }
  };

  return (
    <section
      id="videos"
      ref={containerRef}
      className="relative bg-[#050608] overflow-hidden border-t border-cyan-500/15"
    >
      {/* Background glow ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center py-20 lg:py-0">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1220] border border-cyan-500/20 text-cyan-400 text-xs uppercase font-mono tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cinematic Advertising Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.05]">
              WE CREATE ADS<br />
              <span className="rm-text-blue-gradient">PEOPLE WANT TO WATCH.</span>
            </h2>
          </div>

          {/* Navigation Indicators & Manual Buttons */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest hidden sm:inline">
              Scroll or Drag To Move
            </span>
            <div className="flex items-center gap-2">
              <Magnetic strength={0.3}>
                <button
                  onClick={() => handleManualScroll("left")}
                  disabled={activeIdx === 0}
                  className="w-10 h-10 rounded-full bg-[#0B1220] border border-cyan-500/25 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 disabled:opacity-30 disabled:pointer-events-none transition-all"
                  aria-label="Previous Showcase"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <button
                  onClick={() => handleManualScroll("right")}
                  disabled={activeIdx === VIDEO_ITEMS.length - 1}
                  className="w-10 h-10 rounded-full bg-[#0B1220] border border-cyan-500/25 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 disabled:opacity-30 disabled:pointer-events-none transition-all"
                  aria-label="Next Showcase"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* GSAP Horizontal Track (Desktop) / Horizontal Snapping Stream (Mobile) */}
        <div className="w-full overflow-x-auto lg:overflow-visible no-scrollbar px-4 sm:px-6 lg:px-8">
          <div
            ref={trackRef}
            className="flex gap-6 sm:gap-8 items-center w-max py-4"
          >
            {VIDEO_ITEMS.map((item, idx) => {
              const isCentered = activeIdx === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveIdx(idx);
                    setIsPlaying(true);
                  }}
                  data-cursor="PLAY"
                  className={`group relative rounded-3xl overflow-hidden border-2 transition-all duration-500 cursor-pointer shrink-0 w-[300px] sm:w-[480px] lg:w-[620px] aspect-[16/10] flex flex-col justify-between p-6 sm:p-8 ${
                    isCentered
                      ? "border-cyan-400 shadow-[0_0_50px_rgba(0,191,255,0.4)] scale-100 rotate-0 bg-[#0B1220]"
                      : "border-cyan-500/20 hover:border-cyan-400/50 scale-95 -rotate-1 opacity-75 hover:opacity-100 bg-[#07111F]"
                  }`}
                  style={{
                    willChange: "transform, opacity",
                  }}
                >
                  {/* Background Grid & Vibrant Gradient */}
                  <div className="absolute inset-0 rm-grid-bg opacity-30" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50 group-hover:opacity-75 transition-opacity`} />

                  {/* Simulated Live Audio Equalizer Bars */}
                  <div className="absolute bottom-6 left-6 flex items-end gap-1.5 h-10 pointer-events-none z-10">
                    {[35, 70, 50, 95, 60, 30, 85, 100, 65, 45].map((h, i) => (
                      <div
                        key={i}
                        className="w-1.5 bg-cyan-400/80 rounded-full animate-pulse"
                        style={{
                          height: `${isCentered ? h : h * 0.35}%`,
                          animationDuration: `${0.4 + (i % 4) * 0.15}s`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Top Metadata Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/70 border border-cyan-400/30 text-[10px] sm:text-xs font-mono font-bold text-cyan-300 backdrop-blur-md">
                      {item.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-600/40 text-[10px] sm:text-xs font-mono text-white backdrop-blur-md">
                      {item.resolution}
                    </span>
                  </div>

                  {/* Center Interactive Play/Pause Button Icon */}
                  <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isCentered
                          ? "bg-cyan-400 text-black shadow-[0_0_35px_rgba(0,191,255,0.7)] scale-110"
                          : "bg-white/10 text-white backdrop-blur-md group-hover:scale-105"
                      }`}
                    >
                      {isCentered && isPlaying ? (
                        <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
                      ) : (
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-current" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="relative z-10 pt-4 border-t border-white/10 flex items-end justify-between gap-4">
                    <div>
                      <span className="text-[10px] sm:text-xs font-mono text-cyan-400 font-bold uppercase">
                        {item.badge}
                      </span>
                      <h3 className="text-base sm:text-xl font-bold text-white mt-0.5 line-clamp-1">
                        {item.title}
                      </h3>
                    </div>

                    <div className="px-3 py-1 rounded-xl bg-black/80 border border-cyan-400/30 text-xs font-mono font-bold text-cyan-300 whitespace-nowrap shadow-[0_0_15px_rgba(0,191,255,0.3)]">
                      {item.metric}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Video Detail Ribbon */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-8">
          <div className="p-6 rounded-2xl bg-[#0B1220] border border-cyan-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                Active Spotlight: {activeVideo.title}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                {activeVideo.description}
              </p>
            </div>

            <Magnetic strength={0.25} data-cursor="MOVE">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_0_25px_rgba(0,191,255,0.5)] transition-all whitespace-nowrap"
              >
                <span>Commission Video Ad</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
