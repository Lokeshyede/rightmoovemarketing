"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { RightMoveLogo } from "@/components/brand/RightMoveLogo";
import { Sparkles, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { BRAND_INFO } from "@/data/content";
import { Magnetic } from "@/components/animations/Magnetic";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    businessType: "E-Commerce / Retail",
    budgetRange: "$5,000 - $10,000 / mo",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Meta Ads",
    "Video Production",
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const serviceOptions = [
    "Advertising",
    "Social Media",
    "Meta Ads",
    "Lead Generation",
    "Video Production",
    "Website",
    "App",
    "Management System",
    "Automation",
    "Other",
  ];

  const budgetOptions = [
    "Under $3,000 / mo",
    "$3,000 - $5,000 / mo",
    "$5,000 - $10,000 / mo",
    "$10,000 - $25,000 / mo",
    "$25,000+ / mo",
  ];

  const businessTypes = [
    "E-Commerce / Retail",
    "Real Estate / Development",
    "Healthcare / Clinic",
    "Restaurant / Hospitality",
    "Professional Services / B2B",
    "Education / Academy",
    "Startup / Tech",
    "Local Service Business",
  ];

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("Please enter your contact phone number.");
      return;
    }
    if (selectedServices.length === 0) {
      setErrorMessage("Please select at least one service you need.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#0B5CFF", "#00BFFF", "#FFFFFF"],
        });
      } else {
        setErrorMessage("Something went wrong while submitting. Please call our direct line.");
      }
    } catch {
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        colors: ["#0B5CFF", "#00BFFF"],
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-[#050608] overflow-hidden border-t border-cyan-500/15"
    >
      {/* 1. Moving Blue Light Beam Traveling Across the Section */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none animate-light-sweep"
        style={{ animationDuration: "4s" }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl pointer-events-none animate-aurora" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cinematic Final Call-to-Action Banner */}
        <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
          
          {/* Continuously Animating RightMove Arrow / Logo Symbol */}
          <div className="mb-6 relative flex items-center justify-center">
            <div className="relative p-3 rounded-2xl bg-[#0B1220] border border-cyan-500/30 shadow-[0_0_35px_rgba(0,191,255,0.4)] animate-pulse-subtle">
              <RightMoveLogo variant="mark" size="md" />
            </div>
            {/* Traveling Light Ring */}
            <div className="absolute -inset-2 rounded-3xl border border-cyan-400/40 animate-ping opacity-25 pointer-events-none" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1220] border border-cyan-500/30 text-cyan-400 text-xs uppercase font-mono tracking-widest mb-6 shadow-[0_0_20px_rgba(0,191,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Yield Partnership Sprints</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[1.02]">
            READY TO<br />
            <span className="rm-text-blue-gradient drop-shadow-[0_0_40px_rgba(0,191,255,0.5)]">
              MOVE YOUR BUSINESS?
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Let&apos;s create attention, generate demand, and build what&apos;s next. Take the right move today.
          </p>
        </div>

        {/* Project Inquiry Deck Container */}
        <div className="rounded-3xl border-2 border-cyan-500/30 bg-[#0B1220]/95 p-8 sm:p-14 shadow-[0_25px_60px_rgba(5,6,8,0.95)] backdrop-blur-2xl">
          {isSubmitted ? (
            /* Success confirmation */
            <div className="py-16 text-center flex flex-col items-center gap-6 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-cyan-400/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_35px_#00BFFF]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black uppercase text-white">
                Brief Received. We Are Moving.
              </h3>
              <p className="text-base text-slate-300 max-w-lg leading-relaxed">
                Our strategic media director and lead architect are analyzing your requirements. You will receive an initial campaign diagnostic within 4 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#07111F] border border-cyan-500/30 text-xs font-mono text-cyan-300 uppercase tracking-widest hover:border-cyan-400 cursor-pointer"
              >
                Submit Additional Brief
              </button>
            </div>
          ) : (
            /* Inquiry Form */
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              {/* Form Intro Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-white/10">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
                    Project Inquiry & Strategy Brief
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Fill in your details below to lock in a diagnostic strategy session.
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-[11px] font-mono uppercase text-slate-400">Direct Priority Line</p>
                  <p className="text-sm font-mono font-bold text-cyan-400">{BRAND_INFO.contact.phone}</p>
                </div>
              </div>

              {/* Error Notice */}
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/50 flex items-center gap-3 text-red-200 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* 1. Services Selector Multi-select Chips */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3">
                  What Do You Need? (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {serviceOptions.map((srv) => {
                    const isSelected = selectedServices.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-cyan-400 text-black shadow-[0_0_15px_#00BFFF] font-bold scale-105"
                            : "bg-[#07111F] text-slate-300 border border-cyan-500/20 hover:border-cyan-400/50"
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Text Input Fields Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-cyan-500/20 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vance Global Enterprises"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-cyan-500/20 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Direct Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-cyan-500/20 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="david@vanceglobal.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-cyan-500/20 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                  />
                </div>
              </div>

              {/* 3. Business Type & Budget Range Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Business Sector
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-cyan-500/20 text-white focus:outline-none focus:border-cyan-400 text-sm"
                  >
                    {businessTypes.map((bt) => (
                      <option key={bt} value={bt} className="bg-[#0B1220] text-white">
                        {bt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Monthly Marketing / Project Budget
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-cyan-500/20 text-white focus:outline-none focus:border-cyan-400 text-sm"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0B1220] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 4. Message Area */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                  Project Scope & Current Growth Bottleneck
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you're looking to achieve (e.g. scaling lead flow, new commercial ad videos, high-converting website, WhatsApp automation)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-cyan-500/20 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-sm"
                />
              </div>

              {/* Submit Magnetic CTA Button with Glow Effect */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Strict confidentiality guaranteed. We never sell your contact info.</span>
                </p>

                <Magnetic strength={0.3} data-cursor="MOVE">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-black text-xs uppercase tracking-widest shadow-[0_0_35px_rgba(11,92,255,0.6)] hover:shadow-[0_0_55px_rgba(0,191,255,0.85)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 border-glow-animated"
                  >
                    {isSubmitting ? (
                      <span>Submitting Brief...</span>
                    ) : (
                      <>
                        <span>LET&apos;S MOVE</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </Magnetic>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
