"use client";

import React from "react";
import Image from "next/image";

interface RightMoveLogoProps {
  className?: string;
  variant?: "horizontal" | "mark" | "badge" | "full";
  size?: "sm" | "md" | "lg" | "xl";
  priority?: boolean;
}

export function RightMoveLogo({
  className = "",
  variant = "horizontal",
  size = "md",
  priority = false,
}: RightMoveLogoProps) {
  // Dimensions map
  const sizeMap = {
    sm: { width: 140, height: 38, markSize: 32 },
    md: { width: 190, height: 50, markSize: 44 },
    lg: { width: 260, height: 68, markSize: 60 },
    xl: { width: 340, height: 90, markSize: 84 },
  };

  const dim = sizeMap[size];

  if (variant === "mark") {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <Image
          src="/brand/logo-mark-transparent.png"
          alt="RightMove Official Mark"
          width={dim.markSize}
          height={dim.markSize}
          style={{ width: "auto", height: "auto" }}
          priority={priority}
          className="object-contain filter drop-shadow-[0_0_16px_rgba(0,191,255,0.4)] transition-transform duration-300 hover:scale-105"
        />
      </div>
    );
  }

  if (variant === "badge") {
    return (
      <div className={`relative inline-flex items-center justify-center rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(11,92,255,0.4)] ${className}`}>
        <Image
          src="/brand/logo-app-icon.png"
          alt="RightMove App Badge"
          width={dim.markSize * 1.2}
          height={dim.markSize * 1.2}
          style={{ width: "auto", height: "auto" }}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div className={`relative inline-flex flex-col items-start ${className}`}>
        <Image
          src="/brand/logo-full-transparent.png"
          alt="RightMove Performance Marketing & Strategy"
          width={dim.width * 1.4}
          height={dim.height * 1.4}
          style={{ width: "auto", height: "auto" }}
          priority={priority}
          className="object-contain filter drop-shadow-[0_0_24px_rgba(0,191,255,0.3)]"
        />
      </div>
    );
  }

  // Default horizontal
  return (
    <div className={`relative inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/brand/logo-horizontal-transparent.png"
        alt="RightMove - Performance Marketing & Strategy"
        width={dim.width}
        height={dim.height}
        style={{ width: "auto", height: "auto" }}
        priority={priority}
        className="object-contain filter drop-shadow-[0_0_20px_rgba(11,92,255,0.3)] transition-transform duration-300 hover:brightness-110"
      />
    </div>
  );
}

export function RightMoveSymbol({
  className = "w-6 h-6",
}: {
  className?: string;
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <Image
        src="/brand/logo-mark-transparent.png"
        alt="RightMove Mark"
        fill
        className="object-contain"
      />
    </div>
  );
}
