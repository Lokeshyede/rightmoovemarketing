"use client";

import { useState } from "react";
import { Users, Filter, Calculator, HelpCircle } from "lucide-react";
import { Magnetic } from "@/components/animations/Magnetic";

function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function LeadGenSection() {
  const [budget, setBudget] = useState<number>(5000);

  // Dynamic calculated projections based on the illustrative ratio
  const impressions = Math.round((budget / 12) * 1000);
  const engagements = Math.round(impressions * 0.25);
  const inquiries = Math.round(engagements * 0.32);
  const qualifiedLeads = Math.round(inquiries * 0.44);
  const estimatedCustomers = Math.max(1, Math.round(qualifiedLeads * 0.28));

  const pipelineStages = [
    { count: "1,000", label: "PEOPLE SEE", desc: "Top-of-funnel targeted audience reaches the campaign.", color: "border-blue-500 text-blue-400" },
    { count: "250", label: "ENGAGE", desc: "View video past 50%, click link or explore carousel.", color: "border-cyan-500 text-cyan-300" },
    { count: "80", label: "INQUIRE", desc: "Initiate contact, fill questionnaire or trigger WhatsApp.", color: "border-cyan-400 text-cyan-200" },
    { count: "35", label: "QUALIFIED LEADS", desc: "Pass budget, location, and requirement filters.", color: "border-blue-400 text-white" },
    { count: "CUSTOMER", label: "SALES CLOSED", desc: "High-value revenue locked in without chasing bad leads.", color: "border-white text-cyan-400" },
  ];

  return (
    <section id="lead-engine" className="relative py-20 sm:py-28 lg:py-32 bg-[#050608] overflow-hidden border-t border-cyan-500/15">
      {/* Background glow and subtle grid */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-gradient-to-l from-blue-700/15 to-transparent blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1220] border border-cyan-500/20 text-cyan-400 text-xs uppercase font-mono tracking-widest mb-4 sm:mb-6">
              <Users className="w-3.5 h-3.5" />
              <span>Qualified Customer Pipeline</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.08] sm:leading-[1.05]">
              TURN ATTENTION<br />
              <span className="rm-text-blue-gradient">INTO OPPORTUNITY.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-400 leading-relaxed">
            Traffic is meaningless if it doesn&apos;t convert into bottom-line revenue. We build automated qualification funnels that filter out tire-kickers and deliver sales-ready prospects directly to your team.
          </p>
        </div>

        {/* 1. Animated Lead Pipeline with Glowing Laser Connector */}
        <div className="mb-12 sm:mb-20">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Filter className="w-5 h-5 text-cyan-400" />
              <span>The Qualification Engine</span>
            </h3>
            <span className="text-[10px] sm:text-[11px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/70 border border-cyan-500/30 px-2.5 sm:px-3 py-1 rounded-full">
              Illustrative Funnel Benchmark
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 relative">
            {pipelineStages.map((stage, idx) => (
              <div
                key={stage.label}
                data-cursor="LEAD"
                className="p-4 sm:p-5 lg:p-6 rounded-2xl bg-[#0B1220] border border-cyan-500/20 flex flex-col justify-between relative group hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,191,255,0.3)] hover:-translate-y-1 sm:hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Stage 0{idx + 1}
                  </span>
                  <p className="text-2xl sm:text-3xl font-black font-mono text-white mt-1 group-hover:text-cyan-400 transition-colors">
                    {stage.count}
                  </p>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mt-2">
                    {stage.label}
                  </h4>
                </div>

                <p className="text-xs text-slate-400 mt-3 sm:mt-4 pt-3 border-t border-white/5 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] sm:text-xs font-mono text-slate-500 mt-4 px-2">
            * Clearly labeled illustrative pipeline example. Actual conversion velocity varies according to industry, ticket size, and offer maturity.
          </p>
        </div>

        {/* 2. Interactive Lead & Volume Simulator */}
        <div className="rounded-2xl sm:rounded-3xl border-2 border-cyan-500/30 bg-[#0B1220]/95 p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(5,6,8,0.9)] backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-cyan-500/15">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                <Calculator className="w-4 h-4" />
                <span>Interactive Growth Simulator</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-white">
                Forecast Your Pipeline Potential
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Adjust monthly media investment to see estimated reach, inquiry volume, and qualified appointments.
              </p>
            </div>

            {/* Current budget display badge */}
            <div className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-[#07111F] border border-cyan-500/30 flex items-center gap-3 self-start sm:self-auto">
              <span className="text-xs font-mono text-slate-400 uppercase">Monthly Spend:</span>
              <span
                suppressHydrationWarning
                className="text-xl sm:text-3xl font-black font-mono text-cyan-400 drop-shadow-[0_0_12px_#00BFFF]"
              >
                ${formatNumber(budget)}
              </span>
            </div>
          </div>

          {/* Interactive Range Slider */}
          <div className="my-6 sm:my-8">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span>$1,000 / mo</span>
              <span className="text-cyan-400 font-bold">Slide to adjust scale</span>
              <span>$50,000+ / mo</span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="500"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-3 bg-[#07111F] rounded-lg appearance-none cursor-pointer accent-cyan-400 shadow-inner"
            />
          </div>

          {/* Calculated Output Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-cyan-500/15">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#07111F] border border-white/5 hover:border-cyan-500/30 transition-all">
              <p className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase truncate">Est. Monthly Reach</p>
              <p
                suppressHydrationWarning
                className="text-lg sm:text-2xl md:text-3xl font-black text-white font-mono mt-0.5 sm:mt-1 truncate"
              >
                ~{formatNumber(impressions)}
              </p>
              <p className="text-[10px] sm:text-[11px] text-cyan-400 font-mono mt-1 truncate">Targeted impressions</p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#07111F] border border-white/5 hover:border-cyan-500/30 transition-all">
              <p className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase truncate">Est. Engaged</p>
              <p
                suppressHydrationWarning
                className="text-lg sm:text-2xl md:text-3xl font-black text-cyan-300 font-mono mt-0.5 sm:mt-1 truncate"
              >
                ~{formatNumber(engagements)}
              </p>
              <p className="text-[10px] sm:text-[11px] text-cyan-400 font-mono mt-1 truncate">Interest signals</p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#07111F] border border-white/5 hover:border-cyan-500/30 transition-all">
              <p className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase truncate">Est. Qualified Leads</p>
              <p
                suppressHydrationWarning
                className="text-lg sm:text-2xl md:text-3xl font-black text-cyan-400 font-mono mt-0.5 sm:mt-1 truncate drop-shadow-[0_0_12px_#00BFFF]"
              >
                ~{formatNumber(qualifiedLeads)}
              </p>
              <p className="text-[10px] sm:text-[11px] text-cyan-400 font-mono mt-1 truncate">Pre-screened leads</p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#07111F] border border-white/5 hover:border-cyan-500/30 transition-all">
              <p className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase truncate">Est. Customers</p>
              <p
                suppressHydrationWarning
                className="text-lg sm:text-2xl md:text-3xl font-black text-white font-mono mt-0.5 sm:mt-1 truncate"
              >
                ~{formatNumber(estimatedCustomers)}
              </p>
              <p className="text-[10px] sm:text-[11px] text-cyan-400 font-mono mt-1 truncate">At 28% close rate</p>
            </div>
          </div>

          {/* Action Footer with Magnetic Button */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-cyan-500/10">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Includes end-to-end multi-variant creative, campaign architecture, and landing page engineering.</span>
            </div>

            <Magnetic strength={0.3} data-cursor="MOVE" className="w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(0,191,255,0.4)] transition-all whitespace-nowrap block text-center"
              >
                Lock In Strategy Call
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
