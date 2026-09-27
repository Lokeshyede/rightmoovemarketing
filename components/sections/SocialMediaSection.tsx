"use client";

import { useState } from "react";
import { Sparkles, Heart, MessageCircle, Share2, Flame } from "lucide-react";

interface SocialCard {
  id: string;
  type: "REEL" | "CAROUSEL" | "STORY" | "STRATEGY";
  title: string;
  handle: string;
  views: string;
  likes: string;
  comments: string;
  shares: string;
  hook: string;
  gradient: string;
  tilt: string;
}

const ROW_ONE_ITEMS: SocialCard[] = [
  {
    id: "s1",
    type: "REEL",
    title: "How We Scaled Client ROAS From 1.4x to 6.2x",
    handle: "@rightmove.growth",
    views: "842K",
    likes: "46.2K",
    comments: "1.4K",
    shares: "12.8K",
    hook: "The 3-second hook mistake costing 90% of brands their ad budget.",
    gradient: "from-blue-600/40 via-cyan-500/20 to-[#07111F]",
    tilt: "-rotate-2",
  },
  {
    id: "s2",
    type: "CAROUSEL",
    title: "The 2026 Customer Acquisition Funnel Breakdown",
    handle: "@rightmove.strategy",
    views: "420K",
    likes: "28.5K",
    comments: "980",
    shares: "8.1K",
    hook: "Why single-page websites are dying and how to replace them.",
    gradient: "from-cyan-600/40 via-blue-900/40 to-[#07111F]",
    tilt: "rotate-1",
  },
  {
    id: "s3",
    type: "REEL",
    title: "Commercial Film Behind-The-Scenes",
    handle: "@rightmove.creative",
    views: "1.2M",
    likes: "89.4K",
    comments: "2.1K",
    shares: "24.6K",
    hook: "Lighting setup for luxury product advertisements that stop thumbs.",
    gradient: "from-blue-500/40 via-indigo-700/30 to-[#07111F]",
    tilt: "-rotate-1",
  },
  {
    id: "s4",
    type: "STORY",
    title: "Live Campaign Launch Day: 320 Leads in 4 Hours",
    handle: "@rightmove.live",
    views: "185K",
    likes: "15.7K",
    comments: "410",
    shares: "3.2K",
    hook: "Real-time dashboard monitor as budget scales up seamlessly.",
    gradient: "from-cyan-400/30 via-blue-800/30 to-[#07111F]",
    tilt: "rotate-2",
  },
];

const ROW_TWO_ITEMS: SocialCard[] = [
  {
    id: "s5",
    type: "STRATEGY",
    title: "The 5 Psychological Angles That Never Fatigue",
    handle: "@rightmove.ads",
    views: "610K",
    likes: "39.1K",
    comments: "1.2K",
    shares: "14.3K",
    hook: "Identity, Fear of Inaction, Status Elevation, Logic, Social Proof.",
    gradient: "from-blue-700/40 via-cyan-600/30 to-[#07111F]",
    tilt: "rotate-2",
  },
  {
    id: "s6",
    type: "REEL",
    title: "Why Your Organic Reach Stopped Moving (And Fix)",
    handle: "@rightmove.growth",
    views: "950K",
    likes: "62.4K",
    comments: "3.4K",
    shares: "19.5K",
    hook: "Algorithm update decoded and applied in under 45 seconds.",
    gradient: "from-indigo-600/35 via-cyan-500/25 to-[#07111F]",
    tilt: "-rotate-2",
  },
  {
    id: "s7",
    type: "CAROUSEL",
    title: "High-Yield Creative Matrix Architecture",
    handle: "@rightmove.creative",
    views: "530K",
    likes: "34.8K",
    comments: "1.1K",
    shares: "9.7K",
    hook: "The testing hierarchy we use across $200k/mo ad spend.",
    gradient: "from-blue-600/35 via-cyan-400/20 to-[#07111F]",
    tilt: "-rotate-1",
  },
  {
    id: "s8",
    type: "REEL",
    title: "How to Build a Lead Qualifying Machine",
    handle: "@rightmove.growth",
    views: "780K",
    likes: "51.3K",
    comments: "1.8K",
    shares: "15.4K",
    hook: "Turn raw clicks into pre-screened booked appointments.",
    gradient: "from-cyan-500/35 via-blue-800/35 to-[#07111F]",
    tilt: "rotate-1",
  },
];

export function SocialMediaSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const pillars = [
    { title: "Content Strategy", desc: "Psychological customer avatars and narrative arcs." },
    { title: "Content Creation", desc: "Studio-filmed reels, aesthetic carousels & graphics." },
    { title: "Posting & Scheduling", desc: "Algorithmic timing and community cadence." },
    { title: "Reels & Stories", desc: "High-retention short-form video optimization." },
    { title: "Active Engagement", desc: "Zero-lag comment moderation & DM nurturing." },
    { title: "Growth Analytics", desc: "Weekly tracking of reach, saves, and conversion." },
  ];

  return (
    <section className="relative py-32 bg-[#050608] overflow-hidden border-t border-cyan-500/15">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[600px] bg-gradient-to-r from-blue-700/10 via-cyan-500/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1220] border border-cyan-500/20 text-cyan-400 text-xs uppercase font-mono tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Organic Velocity & Community</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
            YOUR SOCIAL MEDIA.<br />
            <span className="rm-text-blue-gradient">ALWAYS MOVING.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed">
            We turn stagnant social channels into high-velocity attention machines with daily high-production short-form video, thought-leadership carousels, and proactive community growth.
          </p>
        </div>

        {/* 6 Capability Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-4 rounded-2xl bg-[#0B1220]/70 border border-cyan-500/15 text-center flex flex-col items-center justify-center hover:border-cyan-400/50 hover:bg-[#0f1b33] transition-all"
            >
              <p className="text-xs font-bold text-white uppercase tracking-wider">{p.title}</p>
              <p className="text-[10px] text-slate-400 mt-1 leading-snug">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Content Wall (Dual Continuous Stream at Different Speeds) */}
      <div className="relative w-full overflow-hidden py-4 flex flex-col gap-6">
        {/* Edge Gradient Shadows */}
        <div className="absolute left-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-r from-[#050608] to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-l from-[#050608] to-transparent z-30 pointer-events-none" />

        {/* Row 1: Moves Left */}
        <div className="animate-marquee flex gap-6 items-center">
          {[...ROW_ONE_ITEMS, ...ROW_ONE_ITEMS, ...ROW_ONE_ITEMS].map((card, idx) => {
            const cardKey = `row1-${card.id}-${idx}`;
            const isHovered = hoveredId === cardKey;

            return (
              <div
                key={cardKey}
                onMouseEnter={() => setHoveredId(cardKey)}
                onMouseLeave={() => setHoveredId(null)}
                data-cursor="EXPAND"
                className={`w-[270px] sm:w-[320px] rounded-3xl p-6 bg-[#0B1220] border transition-all duration-500 flex flex-col justify-between shrink-0 cursor-pointer ${
                  isHovered
                    ? "border-cyan-400 shadow-[0_20px_50px_rgba(0,191,255,0.4)] scale-110 z-40 rotate-0 bg-[#0e1b36] -translate-y-3"
                    : `border-cyan-500/20 hover:border-cyan-400/50 ${card.tilt}`
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-black font-black text-xs shadow-[0_0_10px_#00BFFF]">
                      RM
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">{card.handle}</p>
                      <p className="text-[10px] font-mono text-cyan-400">{card.type}</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                    <Flame className="w-3 h-3 text-cyan-400 fill-cyan-400" />
                    {card.views}
                  </span>
                </div>

                {/* Content Visual Canvas */}
                <div className={`relative w-full rounded-2xl overflow-hidden mb-4 p-4 flex flex-col justify-end bg-gradient-to-br ${card.gradient} min-h-[160px]`}>
                  <div className="absolute inset-0 rm-grid-bg opacity-30" />
                  <p className="relative z-10 text-xs font-medium text-slate-200 line-clamp-3 bg-black/70 p-3 rounded-xl border border-white/10 backdrop-blur-md">
                    &ldquo;{card.hook}&rdquo;
                  </p>
                </div>

                {/* Footer Engagement */}
                <div>
                  <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug mb-3">
                    {card.title}
                  </h4>

                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono pt-3 border-t border-white/10">
                    <span className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                      <Heart className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/30" />
                      {card.likes}
                    </span>
                    <span className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                      <MessageCircle className="w-3.5 h-3.5 text-blue-400" />
                      {card.comments}
                    </span>
                    <span className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                      <Share2 className="w-3.5 h-3.5 text-cyan-300" />
                      {card.shares}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: Moves Right at Different Speed */}
        <div className="animate-marquee-reverse flex gap-6 items-center">
          {[...ROW_TWO_ITEMS, ...ROW_TWO_ITEMS, ...ROW_TWO_ITEMS].map((card, idx) => {
            const cardKey = `row2-${card.id}-${idx}`;
            const isHovered = hoveredId === cardKey;

            return (
              <div
                key={cardKey}
                onMouseEnter={() => setHoveredId(cardKey)}
                onMouseLeave={() => setHoveredId(null)}
                data-cursor="EXPAND"
                className={`w-[270px] sm:w-[320px] rounded-3xl p-6 bg-[#0B1220] border transition-all duration-500 flex flex-col justify-between shrink-0 cursor-pointer ${
                  isHovered
                    ? "border-cyan-400 shadow-[0_20px_50px_rgba(0,191,255,0.4)] scale-110 z-40 rotate-0 bg-[#0e1b36] -translate-y-3"
                    : `border-cyan-500/20 hover:border-cyan-400/50 ${card.tilt}`
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-black font-black text-xs shadow-[0_0_10px_#00BFFF]">
                      RM
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">{card.handle}</p>
                      <p className="text-[10px] font-mono text-cyan-400">{card.type}</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                    <Flame className="w-3 h-3 text-cyan-400 fill-cyan-400" />
                    {card.views}
                  </span>
                </div>

                {/* Content Visual Canvas */}
                <div className={`relative w-full rounded-2xl overflow-hidden mb-4 p-4 flex flex-col justify-end bg-gradient-to-br ${card.gradient} min-h-[160px]`}>
                  <div className="absolute inset-0 rm-grid-bg opacity-30" />
                  <p className="relative z-10 text-xs font-medium text-slate-200 line-clamp-3 bg-black/70 p-3 rounded-xl border border-white/10 backdrop-blur-md">
                    &ldquo;{card.hook}&rdquo;
                  </p>
                </div>

                {/* Footer Engagement */}
                <div>
                  <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug mb-3">
                    {card.title}
                  </h4>

                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono pt-3 border-t border-white/10">
                    <span className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                      <Heart className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/30" />
                      {card.likes}
                    </span>
                    <span className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                      <MessageCircle className="w-3.5 h-3.5 text-blue-400" />
                      {card.comments}
                    </span>
                    <span className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                      <Share2 className="w-3.5 h-3.5 text-cyan-300" />
                      {card.shares}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
