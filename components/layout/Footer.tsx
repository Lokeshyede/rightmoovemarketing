"use client";

import { RightMoveLogo } from "@/components/brand/RightMoveLogo";
import { ArrowUp, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";
import { BRAND_INFO, ALL_SERVICES } from "@/data/content";
import { Magnetic } from "@/components/animations/Magnetic";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const marketingServices = ALL_SERVICES.filter(s => s.category !== "BUILD").slice(0, 6);
  const techServices = ALL_SERVICES.filter(s => s.category === "BUILD").slice(0, 6);

  return (
    <footer className="relative bg-[#050608] text-white pt-16 sm:pt-24 pb-8 sm:pb-12 border-t border-cyan-500/15 overflow-hidden">
      {/* Background glow ambiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-[100vw] h-48 bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Block */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 pb-10 sm:pb-16 border-b border-white/10">
          <div className="flex flex-col gap-3.5 sm:gap-4 max-w-xl">
            <div className="max-w-[240px] sm:max-w-none">
              <RightMoveLogo variant="horizontal" size="lg" />
            </div>
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-400">
              {BRAND_INFO.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {BRAND_INFO.promise}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Magnetic strength={0.3} data-cursor="TOP">
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-5 py-3 rounded-full bg-[#0B1220] border border-cyan-500/20 text-xs font-bold tracking-wider uppercase text-slate-200 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] transition-all duration-300 cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
              </button>
            </Magnetic>
          </div>
        </div>

        {/* 4-Column Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 py-10 sm:py-16 border-b border-white/10">
          {/* Col 1: Performance Marketing */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-cyan-400 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5" />
              Growth & Advertising
            </h4>
            <ul className="flex flex-col gap-2.5">
              {marketingServices.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-xs text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-cyan-400 transition-colors shrink-0" />
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Technology & Infrastructure */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-cyan-400 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              Technology & Scale
            </h4>
            <ul className="flex flex-col gap-2.5">
              {techServices.map((service) => (
                <li key={service.id}>
                  <a
                    href="#technology"
                    className="text-xs text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-cyan-400 transition-colors shrink-0" />
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-cyan-400">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "Services Overview", href: "#services" },
                { name: "Video Showcase", href: "#videos" },
                { name: "Meta Ads & Funnel", href: "#campaigns" },
                { name: "Lead Calculator", href: "#lead-engine" },
                { name: "Process Timeline", href: "#process" },
                { name: "Industries", href: "#industries" },
                { name: "Case Studies", href: "#work" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Connect & Channels */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-cyan-400">
              Connect
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "Instagram", href: "https://instagram.com" },
                { name: "Facebook", href: "https://facebook.com" },
                { name: "LinkedIn", href: "https://linkedin.com" },
                { name: "YouTube", href: "https://youtube.com" },
                { name: "WhatsApp Business", href: "https://whatsapp.com" },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-cyan-300 transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-xl bg-[#0B1220] border border-cyan-500/10">
              <p className="text-[11px] font-semibold text-slate-300">Campaign Operations Center</p>
              <p className="text-[11px] text-cyan-400 mt-0.5">{BRAND_INFO.contact.hours}</p>
              <p className="text-[11px] text-slate-400 mt-1 break-all">{BRAND_INFO.contact.email}</p>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Attribution */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-500 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {BRAND_INFO.legalName}. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400 font-mono tracking-wider text-[11px]">
              {BRAND_INFO.corePhilosophy}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
