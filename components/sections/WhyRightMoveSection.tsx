"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/data/content";
import { RightMoveLogo } from "@/components/brand/RightMoveLogo";
import { Sparkles, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Magnetic } from "@/components/animations/Magnetic";

export function WhyRightMoveSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const formulaItems = [
    { label: "CONTENT", desc: "Attention-stopping visual media" },
    { label: "ADVERTISING", desc: "Targeted Meta & Google campaigns" },
    { label: "SOCIAL", desc: "Continuous brand authority & reach" },
    { label: "LEADS", desc: "Automated qualification funnels" },
    { label: "TECHNOLOGY", desc: "Websites, CRM & scale software" },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeTestimonial];

  return (
    <section className="relative py-32 bg-[#050608] overflow-hidden border-t border-cyan-500/15">
      {/* Background glow and subtle grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[600px] bg-gradient-to-r from-blue-700/10 via-cyan-500/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1220] border border-cyan-500/20 text-cyan-400 text-xs uppercase font-mono tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Unified Growth Partner</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
            ONE PARTNER.<br />
            <span className="rm-text-blue-gradient">EVERYTHING DIGITAL.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed">
            Eliminate agency finger-pointing. RightMove unites commercial creative, performance media buying, and software engineering under one accountable roof.
          </p>
        </div>

        {/* 1. Animated The RightMove Formula Block */}
        <div className="rounded-3xl border-2 border-cyan-500/30 bg-[#0B1220]/95 p-8 sm:p-12 mb-20 shadow-[0_20px_50px_rgba(5,6,8,0.9)] backdrop-blur-xl">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 font-bold">
              The Proprietary Growth Formula
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-center">
            {formulaItems.map((item, idx) => (
              <div key={item.label} className="flex items-center gap-3 sm:gap-6">
                <div
                  data-cursor="FORMULA"
                  className="p-4 sm:p-5 rounded-2xl bg-[#07111F] border border-cyan-500/20 text-center hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,191,255,0.35)] hover:-translate-y-1 transition-all duration-300"
                >
                  <p className="text-base sm:text-xl font-black font-mono text-white tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1 max-w-[130px] hidden sm:block">
                    {item.desc}
                  </p>
                </div>

                {idx < formulaItems.length - 1 ? (
                  <span className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono animate-pulse">
                    +
                  </span>
                ) : (
                  <span className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono animate-pulse">
                    =
                  </span>
                )}
              </div>
            ))}

            {/* Equals RightMove */}
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white flex items-center gap-3 shadow-[0_0_35px_rgba(0,191,255,0.55)] border-glow-animated">
              <RightMoveLogo variant="mark" size="sm" />
              <div className="text-left">
                <p className="text-lg sm:text-2xl font-black tracking-wider uppercase leading-none">
                  RIGHTMOVE
                </p>
                <p className="text-[10px] uppercase font-mono tracking-widest text-cyan-100 mt-1">
                  Compound Scale
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Testimonials Carousel with Glassmorphism */}
        <div className="rounded-3xl border border-cyan-500/20 bg-[#07111F]/80 p-8 sm:p-12 relative overflow-hidden backdrop-blur-md">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,191,255,0.3)]">
                <Quote className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">
                  Executive Endorsement
                </p>
                <p className="text-xs text-slate-400">{current.industry}</p>
              </div>
            </div>

            {/* Testimonial Nav Magnetic Arrows */}
            <div className="flex items-center gap-2">
              <Magnetic strength={0.3}>
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-[#0B1220] border border-cyan-500/20 text-slate-300 hover:text-white hover:border-cyan-400 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-[#0B1220] border border-cyan-500/20 text-slate-300 hover:text-white hover:border-cyan-400 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </Magnetic>
            </div>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-100 leading-relaxed max-w-4xl">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Author info & verified metric */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-base font-bold text-white">{current.author}</p>
              <p className="text-xs text-slate-400">
                {current.role} • <span className="text-cyan-400 font-medium">{current.company}</span>
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-[#0B1220] border border-cyan-500/30 text-xs font-mono text-cyan-300 font-bold self-start sm:self-auto shadow-[0_0_15px_rgba(0,191,255,0.2)]">
              Verified Metric: {current.metric}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
