"use client";

import { useState } from "react";
import { CASE_STUDIES, CaseStudy } from "@/data/content";
import { Sparkles, ArrowUpRight, X } from "lucide-react";
import { Magnetic } from "@/components/animations/Magnetic";

export function CaseStudiesSection() {
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="work" className="relative py-32 bg-[#050608] overflow-hidden border-t border-cyan-500/15">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[750px] h-[550px] bg-gradient-to-r from-blue-700/10 via-cyan-500/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1220] border border-cyan-500/20 text-cyan-400 text-xs uppercase font-mono tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Campaign Architectures</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
              PROOF OF WORK.<br />
              <span className="rm-text-blue-gradient">MEASURED RESULTS.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-400 leading-relaxed">
            Every case study represents a bespoke convergence of high-impact creative, precision ad targeting, and custom qualification infrastructure.
          </p>
        </div>

        {/* 3 Cinematic Case Study Deep-Dive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={study.id}
                onClick={() => setActiveModalStudy(study)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                data-cursor="VIEW"
                className={`group relative rounded-3xl p-8 bg-[#0B1220] border transition-all duration-500 flex flex-col justify-between cursor-pointer overflow-hidden ${
                  isHovered
                    ? "border-cyan-400 shadow-[0_20px_50px_rgba(0,191,255,0.35)] -translate-y-2 border-glow-animated"
                    : "border-cyan-500/15 hover:border-cyan-400/50"
                }`}
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                      {study.industry}
                    </span>
                    <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                  </div>

                  <h3 className={`text-2xl font-bold text-white transition-all duration-300 ${
                    isHovered ? "translate-x-1 text-cyan-300" : ""
                  }`}>
                    {study.client}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-2">
                    &ldquo;{study.tagline}&rdquo;
                  </p>

                  {/* Cinematic Campaign Visual Box with Zoom and Grid */}
                  <div className="my-6 aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-[#07111F] via-blue-950/40 to-[#050608] border border-white/10 relative p-5 flex flex-col justify-between group">
                    <div className="absolute inset-0 rm-grid-bg opacity-30" />
                    
                    {/* Glowing Aurora inside card */}
                    <div
                      className={`absolute inset-0 bg-radial from-cyan-500/20 via-blue-600/10 to-transparent transition-transform duration-700 pointer-events-none ${
                        isHovered ? "scale-125 opacity-100" : "scale-100 opacity-40"
                      }`}
                    />

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 relative z-10">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-slate-300 bg-black/70 px-2.5 py-0.5 rounded border border-white/10 backdrop-blur-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Breakthrough stat footer */}
                    <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">
                        Key Breakthrough
                      </span>
                      <span className="text-base font-black font-mono text-white drop-shadow-[0_0_8px_#00BFFF]">
                        {study.stats[0].value}
                      </span>
                    </div>
                  </div>

                  {/* Metrics Ribbon */}
                  <div className="grid grid-cols-2 gap-3 py-4 border-y border-white/10">
                    {study.stats.slice(0, 2).map((st) => (
                      <div key={st.label}>
                        <p className="text-[10px] font-mono text-slate-400 uppercase">{st.label}</p>
                        <p className="text-lg font-black font-mono text-cyan-400 mt-0.5">{st.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="mt-6 flex items-center justify-between">
                  <span className={`text-xs uppercase font-bold transition-colors ${
                    isHovered ? "text-cyan-400" : "text-slate-400"
                  }`}>
                    View Case Study
                  </span>
                  
                  <Magnetic strength={0.35}>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isHovered ? "bg-cyan-400 text-black shadow-[0_0_15px_#00BFFF]" : "bg-white/5 text-slate-400"
                    }`}>
                      <ArrowUpRight className={`w-4 h-4 transition-transform ${isHovered ? "translate-x-0.5 -translate-y-0.5" : ""}`} />
                    </div>
                  </Magnetic>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Full Breakdown Cinematic Modal */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0B1220] border-2 border-cyan-400 p-6 sm:p-10 shadow-[0_0_60px_rgba(0,191,255,0.4)]">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-6 border-b border-cyan-500/20">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  {activeModalStudy.industry}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeModalStudy.client}
                </h3>
                <p className="text-sm text-cyan-200 mt-1 font-medium">
                  {activeModalStudy.tagline}
                </p>
              </div>

              <button
                onClick={() => setActiveModalStudy(null)}
                className="p-2 rounded-full bg-[#07111F] text-slate-400 hover:text-white border border-cyan-500/20 cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-3 gap-4 my-6 p-4 rounded-2xl bg-[#07111F] border border-cyan-500/20">
              {activeModalStudy.stats.map((st) => (
                <div key={st.label} className="text-center">
                  <p className="text-[11px] font-mono text-slate-400 uppercase">{st.label}</p>
                  <p className="text-xl sm:text-2xl font-black font-mono text-cyan-400 mt-1">
                    {st.value}
                  </p>
                </div>
              ))}
            </div>

            {/* 6-Phase Case Study Architecture */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-[#07111F]/80 border border-white/5">
                <span className="text-xs font-mono uppercase text-red-400 font-bold">01. The Problem</span>
                <p className="text-slate-300 mt-2 leading-relaxed">{activeModalStudy.problem}</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#07111F]/80 border border-white/5">
                <span className="text-xs font-mono uppercase text-blue-400 font-bold">02. Strategic Angle</span>
                <p className="text-slate-300 mt-2 leading-relaxed">{activeModalStudy.strategy}</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#07111F]/80 border border-white/5">
                <span className="text-xs font-mono uppercase text-cyan-400 font-bold">03. Creative Execution</span>
                <p className="text-slate-300 mt-2 leading-relaxed">{activeModalStudy.creative}</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#07111F]/80 border border-white/5">
                <span className="text-xs font-mono uppercase text-indigo-400 font-bold">04. Campaign Mechanics</span>
                <p className="text-slate-300 mt-2 leading-relaxed">{activeModalStudy.campaign}</p>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-blue-950/60 to-cyan-950/40 border border-cyan-500/30">
              <span className="text-xs font-mono uppercase text-cyan-300 font-bold">05. Commercial Result</span>
              <p className="text-sm text-slate-200 mt-2 leading-relaxed font-medium">
                {activeModalStudy.result}
              </p>
            </div>

            {/* Action Footer */}
            <div className="mt-8 flex justify-end">
              <a
                href="#contact"
                onClick={() => setActiveModalStudy(null)}
                className="px-6 py-3 rounded-full bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-colors shadow-[0_0_20px_#00BFFF]"
              >
                Discuss Similar Campaign
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
