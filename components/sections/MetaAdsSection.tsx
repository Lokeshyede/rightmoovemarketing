"use client";

import { useEffect, useRef, useState } from "react";
import { FUNNEL_STAGES } from "@/data/content";
import { Target, Activity, MousePointer, ShieldCheck, ChevronRight, Zap } from "lucide-react";

function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function MetaAdsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState<number>(0);
  const [timeframe, setTimeframe] = useState<"7D" | "30D" | "LIFETIME">("30D");
  const [lineProgress, setLineProgress] = useState(0);

  // Animated counter states
  const [animatedReach, setAnimatedReach] = useState(0);
  const [animatedLeads, setAnimatedLeads] = useState(0);
  const [animatedConversions, setAnimatedConversions] = useState(0);
  const [animatedRoas, setAnimatedRoas] = useState(0);

  // Target metrics map
  const targetMetrics = {
    "7D": { reach: 482100, ctr: "4.82%", leads: 318, cpl: "$14.20", conversions: 89, roas: 5.4, spend: "$4,515" },
    "30D": { reach: 1894500, ctr: "5.16%", leads: 1248, cpl: "$13.80", conversions: 342, roas: 5.8, spend: "$17,222" },
    "LIFETIME": { reach: 6410000, ctr: "5.40%", leads: 4620, cpl: "$12.90", conversions: 1290, roas: 6.1, spend: "$59,598" },
  };

  const currentMetrics = targetMetrics[timeframe];

  // Draw lines & scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the section the user has scrolled (0 to 1)
      const start = windowHeight * 0.8;
      const progress = Math.max(0, Math.min(1, (start - rect.top) / (rect.height * 0.7)));
      setLineProgress(progress);

      // Sequentially activate funnel stage based on scroll progress
      const stageIdx = Math.min(
        FUNNEL_STAGES.length - 1,
        Math.floor(progress * FUNNEL_STAGES.length)
      );
      setActiveStage(stageIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animated counting up on timeframe switch or scroll
  useEffect(() => {
    let startTime: number;
    const duration = 1200; // ms
    const targetR = currentMetrics.reach;
    const targetL = currentMetrics.leads;
    const targetC = currentMetrics.conversions;
    const targetRo = currentMetrics.roas;

    let animId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min(1, (timestamp - startTime) / duration);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      setAnimatedReach(Math.floor(ease * targetR));
      setAnimatedLeads(Math.floor(ease * targetL));
      setAnimatedConversions(Math.floor(ease * targetC));
      setAnimatedRoas(parseFloat((ease * targetRo).toFixed(1)));

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [currentMetrics.reach, currentMetrics.leads, currentMetrics.conversions, currentMetrics.roas]);

  return (
    <section
      id="campaigns"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-32 bg-[#050608] overflow-hidden border-t border-cyan-500/15"
    >
      {/* Background glow and radial lighting */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/15 to-cyan-500/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1220] border border-cyan-500/20 text-cyan-400 text-xs uppercase font-mono tracking-widest mb-4 sm:mb-6">
              <Target className="w-3.5 h-3.5" />
              <span>Full-Funnel Paid Media Engine</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.08] sm:leading-[1.05]">
              WE DON&apos;T JUST RUN ADS.<br />
              <span className="rm-text-blue-gradient">WE BUILD CAMPAIGNS.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-400 leading-relaxed">
            Meta Ads is our core battleground. We design full-lifecycle acquisition architectures that transform cold, anonymous social media users into high-intent paying customers.
          </p>
        </div>

        {/* 1. Animated Conversion Funnel: AD → ATTENTION → CLICK → LEAD → CUSTOMER → GROWTH */}
        <div className="mb-12 sm:mb-20">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              <span>The RightMove Conversion Funnel</span>
            </h3>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest hidden sm:inline">
              Lines Draw with Scroll Progress
            </span>
          </div>

          {/* SVG Connecting Flow Line That Draws Itself During Scroll */}
          <div className="relative w-full mb-6 hidden lg:block">
            <svg className="w-full h-4 overflow-visible">
              <line
                x1="4%"
                y1="8"
                x2="96%"
                y2="8"
                stroke="#0f244a"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="4%"
                y1="8"
                x2={`${4 + lineProgress * 92}%`}
                y2="8"
                stroke="#00BFFF"
                strokeWidth="3"
                strokeLinecap="round"
                style={{
                  filter: "drop-shadow(0 0 8px #00BFFF)",
                  transition: "x2 0.2s ease-out",
                }}
              />
            </svg>
          </div>

          {/* 6 Funnel Cards with Sequential Travel Glow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {FUNNEL_STAGES.map((item, idx) => {
              const isPassed = idx <= activeStage;
              const isCurrent = idx === activeStage;

              return (
                <div
                  key={item.stage}
                  onClick={() => setActiveStage(idx)}
                  data-cursor="STAGE"
                  className={`p-4 sm:p-5 lg:p-6 rounded-2xl border transition-all duration-500 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                    isCurrent
                      ? "bg-[#0e1d38] border-cyan-400 shadow-[0_0_35px_rgba(0,191,255,0.4)] -translate-y-1 sm:-translate-y-2 scale-[1.02] border-glow-animated"
                      : isPassed
                      ? "bg-[#0B1220] border-cyan-500/40 text-slate-200"
                      : "bg-[#07111F]/70 border-white/5 hover:border-cyan-500/30 opacity-70"
                  }`}
                >
                  {/* Top indicator & Arrow */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span
                      className={`text-xl sm:text-2xl font-black font-mono transition-colors duration-300 ${
                        isCurrent ? "text-cyan-300 drop-shadow-[0_0_10px_#00BFFF]" : "text-cyan-400"
                      }`}
                    >
                      {item.stage}
                    </span>
                    {idx < FUNNEL_STAGES.length - 1 && (
                      <ChevronRight
                        className={`w-4 h-4 hidden lg:block transition-colors ${
                          isPassed ? "text-cyan-400 animate-pulse" : "text-slate-700"
                        }`}
                      />
                    )}
                  </div>

                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white uppercase">{item.name}</h4>
                    <p className="text-[11px] font-mono text-cyan-300 mt-0.5 font-semibold">{item.sub}</p>
                    <p className="text-xs text-slate-400 mt-2 sm:mt-3 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Metric Badge */}
                  <div className="mt-3 sm:mt-4 pt-3 border-t border-white/10">
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border inline-block transition-all ${
                        isCurrent
                          ? "bg-cyan-400 text-black border-cyan-300 shadow-[0_0_15px_#00BFFF]"
                          : "text-cyan-400 bg-cyan-950/60 border-cyan-500/30"
                      }`}
                    >
                      {item.metric}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Interactive Campaign Command Dashboard with Live Counting Numbers */}
        {/* 2. Interactive Campaign Command Dashboard with Live Counting Numbers */}
        <div className="rounded-2xl sm:rounded-3xl border-2 border-cyan-500/30 bg-[#0B1220]/95 p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(5,6,8,0.9)] backdrop-blur-xl">
          {/* Dashboard Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-cyan-500/15">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping shrink-0" />
              <div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                    Meta Ads Command Center
                  </h3>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase bg-cyan-500/10 text-cyan-400 px-2.5 sm:px-3 py-0.5 rounded-full border border-cyan-500/30 font-bold">
                    Telemetry Stream
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Multi-variant direct attribution • Live campaign architecture
                </p>
              </div>
            </div>

            {/* Timeframe switch */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#07111F] border border-cyan-500/20 text-xs font-mono self-start sm:self-auto">
              {(["7D", "30D", "LIFETIME"] as const).map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1 rounded-lg transition-colors font-bold cursor-pointer ${
                    timeframe === tf
                      ? "bg-cyan-400 text-black shadow-[0_0_12px_#00BFFF]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          {/* Metric KPI Cards Grid with Count-Up Numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 my-6 sm:my-8">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#07111F] border border-white/5 hover:border-cyan-500/30 transition-all">
              <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase truncate">Campaign Reach</p>
              <p
                suppressHydrationWarning
                className="text-lg sm:text-xl md:text-2xl font-black text-white font-mono mt-0.5 sm:mt-1 truncate"
              >
                {formatNumber(animatedReach)}
              </p>
              <span className="text-[10px] text-cyan-400 font-mono">+38% vs prev</span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#07111F] border border-white/5 hover:border-cyan-500/30 transition-all">
              <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase truncate">Link CTR</p>
              <p
                suppressHydrationWarning
                className="text-lg sm:text-xl md:text-2xl font-black text-cyan-300 font-mono mt-0.5 sm:mt-1 truncate"
              >
                {currentMetrics.ctr}
              </p>
              <span className="text-[10px] text-cyan-400 font-mono">Top 2% benchmark</span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#07111F] border border-white/5 hover:border-cyan-500/30 transition-all">
              <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase truncate">Qualified Leads</p>
              <p
                suppressHydrationWarning
                className="text-lg sm:text-xl md:text-2xl font-black text-white font-mono mt-0.5 sm:mt-1 truncate"
              >
                {formatNumber(animatedLeads)}
              </p>
              <span className="text-[10px] text-cyan-400 font-mono">Verified inquiries</span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#07111F] border border-white/5 hover:border-cyan-500/30 transition-all">
              <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase truncate">Cost Per Lead</p>
              <p
                suppressHydrationWarning
                className="text-lg sm:text-xl md:text-2xl font-black text-cyan-400 font-mono mt-0.5 sm:mt-1 truncate"
              >
                {currentMetrics.cpl}
              </p>
              <span className="text-[10px] text-cyan-400 font-mono">-42% reduction</span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#07111F] border border-white/5 hover:border-cyan-500/30 transition-all">
              <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase truncate">Conversions</p>
              <p
                suppressHydrationWarning
                className="text-lg sm:text-xl md:text-2xl font-black text-white font-mono mt-0.5 sm:mt-1 truncate"
              >
                {formatNumber(animatedConversions)}
              </p>
              <span className="text-[10px] text-cyan-400 font-mono">Closed revenue</span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#07111F] border border-white/5 hover:border-cyan-500/30 transition-all">
              <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase truncate">Target ROAS</p>
              <p
                suppressHydrationWarning
                className="text-lg sm:text-xl md:text-2xl font-black text-cyan-400 font-mono mt-0.5 sm:mt-1 truncate drop-shadow-[0_0_10px_#00BFFF]"
              >
                {animatedRoas}x
              </p>
              <span className="text-[10px] text-cyan-400 font-mono">Compounding</span>
            </div>
          </div>

          {/* Campaign Architecture Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pt-6 border-t border-cyan-500/15">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
              <div>
                <h5 className="text-xs font-bold uppercase text-white tracking-wider">Broad + Advantage+ Targeting</h5>
                <p className="text-[11px] text-slate-400 mt-1">Leveraging machine learning affinity signals rather than restrictive narrow interests.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MousePointer className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
              <div>
                <h5 className="text-xs font-bold uppercase text-white tracking-wider">Direct Server-Side CAPI</h5>
                <p className="text-[11px] text-slate-400 mt-1">100% conversion match rate bypassing browser cookie loss and iOS privacy gaps.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-cyan-300 mt-1 shrink-0" />
              <div>
                <h5 className="text-xs font-bold uppercase text-white tracking-wider">Aggressive Creative Rotation</h5>
                <p className="text-[11px] text-slate-400 mt-1">New hook variations deployed weekly before creative fatigue degrades account ROAS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
