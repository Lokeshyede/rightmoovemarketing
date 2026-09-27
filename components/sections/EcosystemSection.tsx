"use client";

import { useState } from "react";
import { RightMoveLogo } from "@/components/brand/RightMoveLogo";
import { ECOSYSTEM_NODES, ECOSYSTEM_CONNECTIONS } from "@/data/content";
import { Network } from "lucide-react";

export function EcosystemSection() {
  const [activeNodeId, setActiveNodeId] = useState<string>("rightmove");

  const activeNode = ECOSYSTEM_NODES.find((n) => n.id === activeNodeId) || ECOSYSTEM_NODES[0];

  return (
    <section id="ecosystem" className="relative py-32 bg-[#050608] overflow-hidden border-t border-cyan-500/15">
      {/* Background glow and subtle grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-r from-blue-700/10 via-cyan-500/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1220] border border-cyan-500/20 text-cyan-400 text-xs uppercase font-mono tracking-widest mb-6">
            <Network className="w-3.5 h-3.5" />
            <span>Harmonized Growth Network</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
            THE RIGHTMOVE<br />
            <span className="rm-text-blue-gradient">GROWTH ECOSYSTEM.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed">
            Every marketing asset, advertising campaign, qualification funnel, and software layer operates as a unified interconnected network.
          </p>
        </div>

        {/* Interactive Node Graph Container */}
        <div className="relative rounded-3xl border-2 border-cyan-500/25 bg-[#07111F]/90 p-4 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(5,6,8,0.9)]">
          {/* Active Node Info Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0B1220] border border-cyan-500/20 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <div>
                <p className="text-[11px] font-mono uppercase text-slate-400">Selected Node Focus</p>
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">
                  {activeNode.label}
                </h4>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              {activeNode.desc}
            </p>
          </div>

          {/* Graphical Orbit Canvas */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] min-h-[480px] flex items-center justify-center overflow-hidden rounded-2xl bg-[#050608]/80 border border-white/5">
            {/* Ambient concentric circular orbits */}
            <div className="absolute w-[75%] aspect-square rounded-full border border-cyan-500/10 pointer-events-none" />
            <div className="absolute w-[50%] aspect-square rounded-full border border-blue-500/15 pointer-events-none animate-pulse-subtle" />
            <div className="absolute w-[25%] aspect-square rounded-full border border-cyan-400/20 pointer-events-none" />

            {/* SVG Connecting Laser Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {ECOSYSTEM_CONNECTIONS.map((conn, i) => {
                const source = ECOSYSTEM_NODES.find((n) => n.id === conn.from);
                const target = ECOSYSTEM_NODES.find((n) => n.id === conn.to);
                if (!source || !target) return null;

                const isConnectedToActive =
                  conn.from === activeNodeId || conn.to === activeNodeId;

                return (
                  <line
                    key={i}
                    x1={`${source.x}%`}
                    y1={`${source.y}%`}
                    x2={`${target.x}%`}
                    y2={`${target.y}%`}
                    stroke={isConnectedToActive ? "#00BFFF" : "#0B5CFF"}
                    strokeOpacity={isConnectedToActive ? 0.9 : 0.15}
                    strokeWidth={isConnectedToActive ? 2.5 : 1}
                    strokeDasharray={isConnectedToActive ? "4 4" : "none"}
                    className={isConnectedToActive ? "animate-laser" : ""}
                  />
                );
              })}
            </svg>

            {/* Render Nodes */}
            {ECOSYSTEM_NODES.map((node) => {
              const isActive = activeNodeId === node.id;
              const isCore = node.type === "core";

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  onMouseEnter={() => setActiveNodeId(node.id)}
                  data-cursor="NODE"
                  style={{
                    position: "absolute",
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className={`cursor-pointer transition-all duration-300 z-20 flex flex-col items-center ${
                    isActive ? "scale-110 z-30" : "hover:scale-105"
                  }`}
                >
                  {isCore ? (
                    /* Central RIGHTMOVE Core Node */
                    <div
                      className={`relative p-4 rounded-3xl flex flex-col items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-[0_0_40px_rgba(0,191,255,0.7)]"
                          : "bg-[#0B1220] border-2 border-cyan-400 text-white shadow-[0_0_25px_rgba(11,92,255,0.5)]"
                      }`}
                    >
                      <RightMoveLogo variant="mark" size="sm" />
                      <span className="text-xs font-black tracking-widest mt-1 uppercase">
                        RightMove
                      </span>
                    </div>
                  ) : (
                    /* Satellite Service Node */
                    <div
                      className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl flex items-center gap-2 transition-all duration-300 ${
                        isActive
                          ? "bg-cyan-400 text-black font-black shadow-[0_0_25px_#00BFFF]"
                          : "bg-[#0B1220]/90 border border-cyan-500/25 text-slate-200 hover:text-white hover:border-cyan-400"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isActive ? "bg-black" : "bg-cyan-400"
                        }`}
                      />
                      <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                        {node.label}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-center text-xs font-mono text-slate-500 mt-4">
            Hover or tap any node to illuminate its interconnected synergies across campaigns, creative, and software.
          </p>
        </div>
      </div>
    </section>
  );
}
