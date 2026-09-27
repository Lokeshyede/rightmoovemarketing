"use client";

import { useState, useRef } from "react";
import { ALL_SERVICES, ServiceItem } from "@/data/content";
import { Globe, Smartphone, Database, Layers, BarChart3, Zap, Cpu, ArrowUpRight, Code2 } from "lucide-react";
import { Magnetic } from "@/components/animations/Magnetic";

interface TechCardProps {
  service: ServiceItem;
  idx: number;
  icon: React.ComponentType<{ className?: string }>;
}

function TechInteractiveCard({ service, idx, icon: Icon }: TechCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTilt({
      x: ((y - centerY) / centerY) * -8,
      y: ((x - centerX) / centerX) * 8,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      data-cursor="SYSTEM"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        willChange: "transform",
      }}
      className={`group relative rounded-3xl p-8 bg-[#0B1220] border transition-colors duration-300 flex flex-col justify-between cursor-pointer ${
        isHovered
          ? "border-cyan-400 shadow-[0_20px_50px_rgba(0,191,255,0.25)] border-glow-animated"
          : "border-cyan-500/15 hover:border-cyan-400/50"
      }`}
    >
      <div>
        {/* Subtle top indicator */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#07111F] border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black group-hover:shadow-[0_0_20px_#00BFFF] transition-all duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
            SYS-0{idx + 1}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
          {service.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed font-normal">
          {service.shortDescription}
        </p>

        {/* Deliverables pill chips */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {service.deliverables.slice(0, 3).map((d) => (
            <span
              key={d}
              className="text-[10px] font-mono text-slate-400 bg-[#07111F] px-2.5 py-1 rounded-md border border-white/5"
            >
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Metric & Action */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-[11px] font-mono font-semibold text-cyan-400">
          {service.metricsHighlight}
        </span>
        <Magnetic strength={0.3}>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </Magnetic>
      </div>
    </div>
  );
}

export function TechSection() {
  const techServices = ALL_SERVICES.filter((s) => s.category === "BUILD");

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    "business-websites": Globe,
    "landing-pages": Code2,
    "mobile-applications": Smartphone,
    "crm-systems": Database,
    "management-systems": Layers,
    "business-dashboards": BarChart3,
    "custom-software": Code2,
    "business-automation": Zap,
    "whatsapp-automation": Zap,
    "ai-solutions": Cpu,
  };

  return (
    <section id="technology" className="relative py-32 bg-[#050608] overflow-hidden border-t border-cyan-500/15">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[700px] h-[500px] bg-gradient-to-l from-blue-600/10 via-cyan-500/5 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 rm-grid-bg opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1220] border border-cyan-500/20 text-cyan-400 text-xs uppercase font-mono tracking-widest mb-6">
              <Cpu className="w-3.5 h-3.5" />
              <span>Scalable Infrastructure</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
              WHEN MARKETING<br />
              <span className="rm-text-blue-gradient">NEEDS TECHNOLOGY.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-400 leading-relaxed">
            From high-conversion websites to internal business management systems, we build the digital infrastructure that helps growing businesses operate better and scale without breaking.
          </p>
        </div>

        {/* Tech Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techServices.map((service, idx) => {
            const Icon = iconMap[service.id] || Globe;
            return (
              <TechInteractiveCard
                key={service.id}
                service={service}
                idx={idx}
                icon={Icon}
              />
            );
          })}
        </div>

        {/* Technology Synergy Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-[#0B1220] to-cyan-950/30 border border-cyan-500/25 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(5,6,8,0.9)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0">
              <Zap className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Marketing Powers the Demand. Technology Powers the Scale.</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Never lose another customer to slow page load, lost leads, or manual administrative delay.</p>
            </div>
          </div>

          <Magnetic strength={0.25} data-cursor="MOVE">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,191,255,0.5)] transition-all whitespace-nowrap block"
            >
              Build Scalable Tech
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
