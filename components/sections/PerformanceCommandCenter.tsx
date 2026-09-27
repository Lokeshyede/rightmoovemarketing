"use client";

import { useState } from "react";
import { COMMAND_CENTER_MODULES } from "@/data/content";
import { Cpu, Terminal } from "lucide-react";
import { Magnetic } from "@/components/animations/Magnetic";

export function PerformanceCommandCenter() {
  const [selectedModule, setSelectedModule] = useState(0);

  const activeModule = COMMAND_CENTER_MODULES[selectedModule];

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-[#050608] overflow-hidden border-t border-cyan-500/15">
      {/* Background glow ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-blue-700/10 via-cyan-500/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1220] border border-cyan-500/20 text-cyan-400 text-xs uppercase font-mono tracking-widest mb-4 sm:mb-6">
              <Terminal className="w-3.5 h-3.5" />
              <span>Futuristic Marketing Telemetry</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.08] sm:leading-[1.05]">
              PERFORMANCE MARKETING<br />
              <span className="rm-text-blue-gradient">COMMAND CENTER.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-400 leading-relaxed">
            Data without execution is noise. Our command deck unifies continuous algorithmic audience discovery, rapid creative iteration, and real-time capital allocation to safeguard profitability.
          </p>
        </div>

        {/* The 8-Engine Interactive Command Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {COMMAND_CENTER_MODULES.map((mod, idx) => {
            const isSelected = selectedModule === idx;

            return (
              <div
                key={mod.id}
                onClick={() => setSelectedModule(idx)}
                data-cursor="TELEMETRY"
                className={`p-4 sm:p-5 lg:p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                  isSelected
                    ? "bg-[#0B1220] border-cyan-400 shadow-[0_0_35px_rgba(0,191,255,0.35)] scale-[1.02] z-20 border-glow-animated"
                    : "bg-[#07111F]/70 border-white/5 hover:border-cyan-500/30"
                }`}
              >
                {/* Status indicator pill */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {mod.category}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                      isSelected
                        ? "bg-cyan-400 text-black shadow-[0_0_10px_#00BFFF]"
                        : "bg-cyan-950/60 text-cyan-400 border border-cyan-500/30"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
                    {mod.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {mod.title}
                  </h4>
                  <p className="text-xs font-mono text-cyan-300 mt-1 sm:mt-2 font-semibold">
                    {mod.stat}
                  </p>
                </div>

                <p className="text-xs text-slate-400 mt-3 sm:mt-4 pt-3 border-t border-white/5 line-clamp-2">
                  {mod.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Engine Inspection Console */}
        <div className="rounded-2xl sm:rounded-3xl border-2 border-cyan-500/30 bg-[#0B1220]/95 p-4 sm:p-6 lg:p-8 backdrop-blur-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-[0_20px_50px_rgba(5,6,8,0.9)]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_20px_rgba(0,191,255,0.3)]">
              <Cpu className="w-6 h-6 sm:w-7 sm:h-7 animate-pulse" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
                  Active Subsystem Telemetry
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-mono text-slate-400">{activeModule.category}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {activeModule.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                {activeModule.description}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-white/10">
            <div className="text-left sm:text-right">
              <p className="text-[11px] font-mono text-slate-400">Current Output</p>
              <p className="text-sm font-mono font-bold text-cyan-300">{activeModule.stat}</p>
            </div>

            <Magnetic strength={0.3} data-cursor="MOVE" className="w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 hover:shadow-[0_0_25px_#00BFFF] transition-all whitespace-nowrap block text-center"
              >
                Deploy This Engine
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
