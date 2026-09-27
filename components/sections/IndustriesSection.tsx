"use client";

import { useState } from "react";
import { INDUSTRIES, IndustryItem } from "@/data/content";
import { Building2, ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/animations/Magnetic";

export function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES[0]);

  return (
    <section id="industries" className="relative py-20 sm:py-28 lg:py-32 bg-[#050608] overflow-hidden border-t border-cyan-500/15">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-[100vw] h-[500px] bg-gradient-to-r from-blue-700/10 via-cyan-500/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0B1220] border border-cyan-500/20 text-cyan-400 text-[11px] sm:text-xs uppercase font-mono tracking-widest mb-4 sm:mb-6">
            <Building2 className="w-3.5 h-3.5" />
            <span>Cross-Vertical Playbooks</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
            BUILT FOR BUSINESSES<br />
            <span className="rm-text-blue-gradient">THAT WANT TO MOVE.</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed">
            Every sector has unique customer buying psychology and regulatory boundaries. We build tailored acquisition strategies engineered specifically for your industry economics.
          </p>
        </div>

        {/* Infinite Horizontal Marquee */}
        <div className="relative w-full overflow-hidden py-3 sm:py-4 mb-10 sm:mb-16">
          {/* Edge gradient masks */}
          <div className="absolute left-0 inset-y-0 w-12 sm:w-32 bg-gradient-to-r from-[#050608] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-12 sm:w-32 bg-gradient-to-l from-[#050608] to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee flex gap-3 sm:gap-4 items-center">
            {[...INDUSTRIES, ...INDUSTRIES].map((ind, idx) => (
              <button
                key={`${ind.slug}-${idx}`}
                onClick={() => setSelectedIndustry(ind)}
                data-cursor="INSPECT"
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
                  selectedIndustry.slug === ind.slug
                    ? "bg-cyan-400 text-black shadow-[0_0_25px_#00BFFF] scale-105"
                    : "bg-[#0B1220] text-slate-300 border border-cyan-500/20 hover:border-cyan-400 hover:text-white"
                }`}
              >
                <span>{ind.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </button>
            ))}
          </div>
        </div>

        {/* Active Industry Strategy Playbook Detail Card */}
        <div className="rounded-2xl sm:rounded-3xl border-2 border-cyan-500/30 bg-[#0B1220]/95 p-5 sm:p-8 lg:p-12 shadow-[0_20px_50px_rgba(5,6,8,0.9)] backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-cyan-500/15">
            <div>
              <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                Tailored Acquisition Playbook
              </span>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white mt-1">
                {selectedIndustry.name}
              </h3>
            </div>

            <div className="w-full sm:w-auto">
              <Magnetic strength={0.25} data-cursor="MOVE">
                <a
                  href="#contact"
                  className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition-all whitespace-nowrap block"
                >
                  Get Custom Playbook
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8">
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#07111F] border border-white/5 hover:border-red-500/30 transition-colors">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-red-400 font-bold">The Bottleneck</span>
              <h4 className="text-sm sm:text-base font-bold text-white mt-1.5 sm:mt-2">Primary Industry Challenge</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {selectedIndustry.challenge}
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#07111F] border border-white/5 hover:border-cyan-500/30 transition-colors">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-cyan-400 font-bold">The RightMove Solution</span>
              <h4 className="text-sm sm:text-base font-bold text-white mt-1.5 sm:mt-2">Engineered Campaign Angle</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {selectedIndustry.solution}
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#07111F] border border-cyan-500/30 bg-gradient-to-br from-[#07111F] to-blue-950/40">
              <span className="text-[11px] sm:text-xs font-mono uppercase text-cyan-300 font-bold">The Commercial Driver</span>
              <h4 className="text-sm sm:text-base font-bold text-white mt-1.5 sm:mt-2">Realized Bottom-Line Growth</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {selectedIndustry.growthDriver}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
