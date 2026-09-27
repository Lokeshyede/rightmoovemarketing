"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatementSection } from "@/components/sections/StatementSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { VideoAdsSection } from "@/components/sections/VideoAdsSection";
import { SocialMediaSection } from "@/components/sections/SocialMediaSection";
import { MetaAdsSection } from "@/components/sections/MetaAdsSection";
import { LeadGenSection } from "@/components/sections/LeadGenSection";
import { PerformanceCommandCenter } from "@/components/sections/PerformanceCommandCenter";
import { TechSection } from "@/components/sections/TechSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { WhyRightMoveSection } from "@/components/sections/WhyRightMoveSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#0B5CFF] selection:text-white overflow-x-hidden">
      {/* Dynamic Navigation */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Content Flow */}
      <main className="relative flex flex-col w-full">
        {/* 1. Cinematic 100vh Hero with Three.js & Intro Orchestration */}
        <HeroSection
          onStartProject={scrollToContact}
          onExploreWork={scrollToWork}
        />

        {/* 2. Pinned ScrollTrigger Brand Statement Sequence */}
        <StatementSection />

        {/* 3. The Three Core Pillars: CREATE, GROW, BUILD */}
        <WhatWeDoSection />

        {/* 4. Cinematic Video Advertising Showcase */}
        <VideoAdsSection />

        {/* 5. Moving Social Media Continuous Stream */}
        <SocialMediaSection />

        {/* 6. Meta Ads Funnel & Interactive Live Campaign Dashboard */}
        <MetaAdsSection />

        {/* 7. Lead Generation Pipeline & Live ROI / Volume Simulator */}
        <LeadGenSection />

        {/* 8. Futuristic Performance Marketing Command Center */}
        <PerformanceCommandCenter />

        {/* 9. Scalable Technology & Software Infrastructure */}
        <TechSection />

        {/* 10. The RightMove Interactive Ecosystem Node Graph */}
        <EcosystemSection />

        {/* 11. 6-Step Execution Process Timeline */}
        <ProcessSection />

        {/* 12. Infinite Industries Marquee & Vertical Growth Playbooks */}
        <IndustriesSection />

        {/* 13. Campaign Case Studies with Detailed 6-Phase Modal */}
        <CaseStudiesSection />

        {/* 14. Why RightMove Equation & Executive Testimonials */}
        <WhyRightMoveSection />

        {/* 15. Cinematic Final CTA & Full Project Inquiry Form */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}
