"use client";

import { useState } from "react";
import { INDUSTRIES, IndustryItem } from "@/data/content";
import { Building2, ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/animations/Magnetic";

export function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES[0]);

  return (
    <section id="industries" className="relative py-32 bg-[#050608] overflow-hidden border-t border-cyan-500/15">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[500px] bg-gradient-to-r from-blue-700/10 via-cyan-500/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1220] border border-cyan-500/20 text-cyan-400 text-xs uppercase font-mono tracking-widest mb-6">
            <Building2 className="w-3.5 h-3.5" />
            <span>Cross-Vertical Playbooks</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
            BUILT FOR BUSINESSES<br />
            <span className="rm-text-blue-gradient">THAT WANT TO MOVE.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed">
            Every sector has unique customer buying psychology and regulatory boundaries. We build tailored acquisition strategies engineered specifically for your industry economics.
          </p>
        </div>

        {/* Infinite Horizontal Marquee */}
        <div className="relative w-full overflow-hidden py-4 mb-16">
          {/* Edge gradient masks */}
          <div className="absolute left-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-r from-[#050608] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-l from-[#050608] to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee flex gap-4 items-center">
            {[...INDUSTRIES, ...INDUSTRIES].map((ind, idx) => (
              <button
                key={`${ind.slug}-${idx}`}
                onClick={() => setSelectedIndustry(ind)}
                data-cursor="INSPECT"
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer ${
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
        <div className="rounded-3xl border-2 border-cyan-500/30 bg-[#0B1220]/95 p-8 sm:p-12 shadow-[0_20px_50px_rgba(5,6,8,0.9)] backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-cyan-500/15">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                Tailored Acquisition Playbook
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-white mt-1">
                {selectedIndustry.name}
              </h3>
            </div>

            <Magnetic strength={0.25} data-cursor="MOVE">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition-all whitespace-nowrap block"
              >
                Get Custom Playbook
              </a>
            </Magnetic>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="p-6 rounded-2xl bg-[#07111F] border border-white/5 hover:border-red-500/30 transition-colors">
              <span className="text-xs font-mono uppercase text-red-400 font-bold">The Bottleneck</span>
              <h4 className="text-base font-bold text-white mt-2">Primary Industry Challenge</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {selectedIndustry.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#07111F] border border-white/5 hover:border-cyan-500/30 transition-colors">
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold">The RightMove Solution</span>
              <h4 className="text-base font-bold text-white mt-2">Engineered Campaign Angle</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {selectedIndustry.solution}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#07111F] border border-cyan-500/30 bg-gradient-to-br from-[#07111F] to-blue-950/40">
              <span className="text-xs font-mono uppercase text-cyan-300 font-bold">The Commercial Driver</span>
              <h4 className="text-base font-bold text-white mt-2">Realized Bottom-Line Growth</h4>
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
