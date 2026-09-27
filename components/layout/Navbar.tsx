"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RightMoveLogo } from "@/components/brand/RightMoveLogo";
import { ArrowUpRight, Menu, X, Sparkles, PhoneCall } from "lucide-react";
import { Magnetic } from "@/components/animations/Magnetic";

export function Navbar({ onOpenContact }: { onOpenContact?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Campaigns", href: "#campaigns" },
    { label: "Lead Engine", href: "#lead-engine" },
    { label: "Technology", href: "#technology" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Process", href: "#process" },
  ];

  const handleCtaClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "py-2.5 bg-[#07111F]/85 backdrop-blur-2xl shadow-[0_10px_35px_rgba(5,6,8,0.9)] border-b border-cyan-500/20"
            : "py-6 bg-transparent"
        }`}
      >
        {/* Animated Electric Border Beam when scrolled */}
        {scrolled && (
          <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-light-sweep pointer-events-none" />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with magnetic attraction */}
          <Magnetic strength={0.2} data-cursor="RIGHTMOVE">
            <Link
              href="/"
              className="group relative flex items-center gap-2 transition-transform duration-300 hover:scale-[1.02]"
            >
              <RightMoveLogo variant="horizontal" size="md" priority />
            </Link>
          </Magnetic>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full px-5 py-1.5 bg-[#0B1220]/75 border border-cyan-500/15 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white transition-colors duration-200 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-4/5 transition-all duration-300 rounded-full shadow-[0_0_8px_#00BFFF]" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <Magnetic strength={0.25} data-cursor="MOVE">
              <button
                onClick={handleCtaClick}
                className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,191,255,0.6)] cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 animate-marquee" />
                <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#050608] text-white transition-colors duration-300 group-hover:bg-[#07111F]">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </button>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#0B1220] border border-cyan-500/25 text-slate-200 hover:text-cyan-400 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer with Cinematic Curtain Reveal */}
      <div
        className={`fixed inset-0 z-30 bg-[#050608]/98 backdrop-blur-3xl transition-all duration-500 lg:hidden flex flex-col justify-between px-6 pt-28 pb-10 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-8"
        }`}
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col gap-6 relative z-10">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
            Navigation Index
          </p>
          <div className="flex flex-col gap-3">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold tracking-tight text-slate-100 hover:text-cyan-300 transition-colors flex items-center justify-between py-2 border-b border-white/10"
                style={{
                  transitionDelay: mobileMenuOpen ? `${idx * 45}ms` : "0ms",
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(-15px)",
                }}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-cyan-400/60" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 border-t border-cyan-500/20 relative z-10">
          <button
            onClick={handleCtaClick}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,191,255,0.5)] cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="tel:+18008406683"
            className="w-full py-3 rounded-xl bg-[#0B1220] border border-cyan-500/20 text-slate-300 font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:border-cyan-400 transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-cyan-400" />
            <span>Direct Growth Hotline</span>
          </a>
        </div>
      </div>
    </>
  );
}
