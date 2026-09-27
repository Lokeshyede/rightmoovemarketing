"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, CheckCircle2, ArrowRight, Video, Target, Users, Zap, TrendingUp } from "lucide-react";

interface ProcessPhase {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  output: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TIMELINE_STEPS: ProcessPhase[] = [
  {
    step: "01",
    title: "CREATE",
    subtitle: "High-Impact Commercial Creative",
    description: "Our creative studio goes into production: scripting, filming, 3D animating, and editing commercial-grade ad creative and viral reels engineered to stop thumbs in under 2 seconds.",
    activities: [
      "Cinematic 4K Commercial Video Production",
      "Direct-Response Hook & Angle Matrix",
      "Viral-Engineered Instagram & TikTok Reels",
      "Brand Visual Identity & Motion Graphics",
    ],
    output: "A/B Ready Commercial Video Assets",
    icon: Video,
  },
  {
    step: "02",
    title: "ADVERTISE",
    subtitle: "Precision Media Architecture",
    description: "We deploy full-funnel paid media campaigns across Meta and Google with multi-tier audience segmentation, Advantage+ machine learning, and server-side CAPI tracking.",
    activities: [
      "Meta Ads (Instagram & Facebook) Campaigns",
      "Google Search Intent Interception",
      "Dynamic Creative Optimization (DCO)",
      "Server-Side CAPI & Pixel Verification",
    ],
    output: "Live Scalable Ad Architecture",
    icon: Target,
  },
  {
    step: "03",
    title: "GENERATE LEADS",
    subtitle: "Automated Lead Qualification",
    description: "Traffic is useless without filtration. We engineer multi-step qualification questionnaires and high-converting landing pages that weed out tire-kickers and capture high-intent inquiries.",
    activities: [
      "Sub-Second High-Conversion Landing Pages",
      "Multi-Step Questionnaires & Pre-Screening",
      "Spam & Tire-Kicker Disqualification Logic",
      "High-Intent Buyer Intent Capture",
    ],
    output: "Pre-Qualified Inbound Prospects",
    icon: Users,
  },
  {
    step: "04",
    title: "CONVERT",
    subtitle: "Zero-Lag Pipeline Velocity",
    description: "We connect lead capture directly to your sales reps and automated follow-ups via custom CRM pipelines and instant WhatsApp messaging so no opportunity goes cold.",
    activities: [
      "Sub-60s Automated WhatsApp Outreach",
      "Custom Sales CRM Pipeline Routing",
      "Instant SMS & Email Lead Notifications",
      "Calendar Appointment Self-Booking",
    ],
    output: "Sales-Ready Booked Deals",
    icon: Zap,
  },
  {
    step: "05",
    title: "GROW",
    subtitle: "Predictable Compounding Scale",
    description: "With proven unit economics and reliable customer acquisition cost, we systematically increase media budget, expand audiences, and compound revenue sustainably.",
    activities: [
      "Algorithmic Media Budget Scaling",
      "Omni-Channel Retargeting Matrices",
      "Customer Lifetime Value (LTV) Maximization",
      "Weekly Executive ROAS Briefings",
    ],
    output: "Dominant Market Share & Maximum ROAS",
    icon: TrendingUp,
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Synchronize progress line with scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.75;
      const progress = Math.max(0, Math.min(1, (start - rect.top) / (rect.height * 0.65)));
      setScrollProgress(progress);

      const stepIdx = Math.min(
        TIMELINE_STEPS.length - 1,
        Math.floor(progress * TIMELINE_STEPS.length)
      );
      setActiveStep(stepIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = TIMELINE_STEPS[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-32 bg-[#050608] overflow-hidden border-t border-cyan-500/15"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[500px] bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1220] border border-cyan-500/20 text-cyan-400 text-xs uppercase font-mono tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Rigorous Growth Framework</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
              HOW WE MOVE<br />
              <span className="rm-text-blue-gradient">YOUR BUSINESS.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-400 leading-relaxed">
            From creative production to aggressive market dominance, our 5-phase growth protocol replaces uncertainty with mathematical predictability.
          </p>
        </div>

        {/* 1. Horizontal Animated Timeline (01 CREATE → 02 ADVERTISE → 03 GENERATE LEADS → 04 CONVERT → 05 GROW) */}
        <div className="relative mb-16 px-4">
          {/* Base Background Track Line */}
          <div className="h-1.5 w-full bg-slate-800/80 rounded-full relative overflow-hidden">
            {/* Animated Blue Progress Line Travelling with Scroll */}
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-cyan-300 rounded-full transition-all duration-300 shadow-[0_0_20px_#00BFFF]"
              style={{
                width: `${Math.max(10, scrollProgress * 100)}%`,
              }}
            />
          </div>

          {/* Stepper Node Pins */}
          <div className="relative -top-4 flex items-center justify-between">
            {TIMELINE_STEPS.map((step, idx) => {
              const isPassed = idx <= activeStep;
              const isCurrent = idx === activeStep;
              const StepIcon = step.icon;

              return (
                <div key={step.step} className="flex flex-col items-center">
                  <button
                    onClick={() => setActiveStep(idx)}
                    data-cursor="PHASE"
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 cursor-pointer ${
                      isCurrent
                        ? "bg-cyan-400 text-black shadow-[0_0_25px_#00BFFF] scale-125 border-2 border-white"
                        : isPassed
                        ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(11,92,255,0.4)]"
                        : "bg-[#0B1220] border border-slate-700 text-slate-400 hover:border-cyan-400"
                    }`}
                  >
                    <StepIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  <div className="mt-3 text-center hidden sm:block">
                    <p className={`text-[10px] font-mono font-bold tracking-widest ${
                      isCurrent ? "text-cyan-400" : isPassed ? "text-white" : "text-slate-500"
                    }`}>
                      {step.step}
                    </p>
                    <p className={`text-xs font-bold uppercase tracking-wider mt-0.5 ${
                      isCurrent ? "text-white drop-shadow-[0_0_8px_#00BFFF]" : "text-slate-400"
                    }`}>
                      {step.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Active Step Feature Showcase Deck */}
        <div className="rounded-3xl border-2 border-cyan-500/30 bg-[#0B1220]/95 p-8 sm:p-12 shadow-[0_25px_60px_rgba(5,6,8,0.95)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Left Column: Phase Details */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_25px_rgba(0,191,255,0.4)]">
                  <CurrentIcon className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                    Phase {current.step} — {current.subtitle}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-slate-300 leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Milestone Checklist */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold mb-3">
                  Key Sprint Deliverables:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.activities.map((act) => (
                    <div key={act} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-xs text-slate-300 font-medium">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Output Deliverable Badge */}
              <div className="p-4 rounded-2xl bg-[#07111F] border border-cyan-500/25 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-400">Guaranteed Milestone Deliverable</p>
                  <p className="text-sm font-bold text-cyan-300 mt-0.5">{current.output}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </div>
            </div>

            {/* Right Column: Interactive Phase Switcher Grid */}
            <div className="flex flex-col gap-3">
              {TIMELINE_STEPS.map((s, i) => {
                const StepIcon = s.icon;
                const isSelected = activeStep === i;

                return (
                  <div
                    key={s.step}
                    onClick={() => setActiveStep(i)}
                    data-cursor="PHASE"
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-[#0e1d38] border-cyan-400 shadow-[0_0_25px_rgba(0,191,255,0.3)] scale-[1.02]"
                        : "bg-[#07111F]/60 border-white/5 hover:border-cyan-500/30 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-mono font-bold ${
                        isSelected ? "bg-cyan-400 text-black shadow-[0_0_10px_#00BFFF]" : "bg-[#0B1220] text-slate-400"
                      }`}>
                        {s.step}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase">{s.title}</h4>
                        <p className="text-[11px] text-slate-400">{s.subtitle}</p>
                      </div>
                    </div>

                    <StepIcon className={`w-4 h-4 ${isSelected ? "text-cyan-400" : "text-slate-600"}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
