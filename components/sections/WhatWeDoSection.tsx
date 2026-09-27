"use client";

import React, { useState, useRef } from "react";
import { CORE_PILLARS } from "@/data/content";
import { ArrowUpRight, Sparkles, CheckCircle2, Video, TrendingUp, Layers } from "lucide-react";
import { Magnetic } from "@/components/animations/Magnetic";

interface TiltCardProps {
  pillar: typeof CORE_PILLARS[0];
  icon: React.ComponentType<{ className?: string }>;
}

function ServiceTiltCard({ pillar, icon: Icon }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate tilt (-12deg to +12deg)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;

    setTilt({ x: tiltX, y: tiltY });
    setSpotlight({ x, y, opacity: 1 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor="EXPAND"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
        transition: isHovered
          ? "transform 0.12s ease-out"
          : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform",
      }}
      className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden cursor-pointer transition-colors duration-500 border ${
        isHovered
          ? "bg-[#0B1220]/95 border-cyan-400 shadow-[0_25px_60px_rgba(0,191,255,0.25)] border-glow-animated"
          : "bg-[#07111F]/70 border-cyan-500/15 hover:border-cyan-400/40"
      }`}
    >
      {/* 1. Cursor-Follow Glowing Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(400px circle at ${spotlight.x}px ${spotlight.y}px, rgba(0, 191, 255, 0.18), transparent 70%)`,
        }}
      />

      {/* 2. Dynamic background ambient blob moving in opposition */}
      <div
        className={`absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br ${pillar.color} blur-3xl transition-all duration-700 pointer-events-none ${
          isHovered ? "opacity-100 scale-125" : "opacity-25 scale-100"
        }`}
        style={{
          transform: `translate(${tilt.y * -2}px, ${tilt.x * -2}px)`,
        }}
      />

      {/* 3. Top Number & Rotating Icon */}
      <div className="relative z-10 flex items-center justify-between pb-8 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-4xl sm:text-5xl font-black text-cyan-400 font-mono tracking-tighter">
            {pillar.pillar}
          </span>
          <span className="text-lg font-black text-white uppercase tracking-widest">
            {pillar.code}
          </span>
        </div>

        {/* Icon with 360-rotate and scale on hover */}
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
            isHovered
              ? "bg-cyan-400 text-[#050608] shadow-[0_0_25px_#00BFFF] rotate-12 scale-110"
              : "bg-[#0B1220] border border-cyan-500/20 text-cyan-400 rotate-0 scale-100"
          }`}
        >
          <Icon className="w-6 h-6" />
        </div>
      </div>

      {/* 4. Main Body with Content Shifting */}
      <div
        className="relative z-10 py-8 flex flex-col gap-4 transition-transform duration-300"
        style={{
          transform: isHovered ? "translateY(-4px)" : "translateY(0px)",
        }}
      >
        <span className="inline-block text-[11px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
          {pillar.badge}
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
          {pillar.title}
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed">
          {pillar.description}
        </p>

        {/* Capabilities List */}
        <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-3">
          {pillar.services.map((item) => (
            <div key={item.name} className="flex items-start gap-2.5">
              <CheckCircle2
                className={`w-4 h-4 mt-0.5 shrink-0 transition-colors duration-300 ${
                  isHovered ? "text-cyan-400 scale-110" : "text-blue-500"
                }`}
              />
              <div>
                <p className="text-xs font-bold text-slate-200">{item.name}</p>
                <p className="text-[11px] text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Footer with Magnetic Action */}
      <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between">
        <span
          className={`text-xs uppercase tracking-wider font-bold transition-colors duration-300 ${
            isHovered ? "text-cyan-400" : "text-slate-400"
          }`}
        >
          Explore Capabilities
        </span>

        <Magnetic strength={0.4}>
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              isHovered
                ? "bg-cyan-400 text-black rotate-45 shadow-[0_0_15px_#00BFFF]"
                : "bg-white/5 text-slate-400 rotate-0"
            }`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </Magnetic>
      </div>
    </div>
  );
}

export function WhatWeDoSection() {
  const icons = [Video, TrendingUp, Layers];

  return (
    <section id="services" className="relative py-32 bg-[#050608] overflow-hidden border-t border-cyan-500/10">
      {/* Background glow and subtle grid */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4/5 h-[500px] bg-gradient-to-r from-blue-700/10 via-cyan-500/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 rm-grid-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1220] border border-cyan-500/20 text-cyan-400 text-xs uppercase font-mono tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Three Engines of Growth</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
            WE CREATE.<br />
            WE ADVERTISE.<br />
            <span className="rm-text-blue-gradient">WE GROW.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Everything your business needs to arrest attention, capture qualified buyer demand, and scale seamlessly with modern technology.
          </p>
        </div>

        {/* 3 Interactive 3D Tilt Pillar Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {CORE_PILLARS.map((pillar, idx) => (
            <ServiceTiltCard
              key={pillar.pillar}
              pillar={pillar}
              icon={icons[idx]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
