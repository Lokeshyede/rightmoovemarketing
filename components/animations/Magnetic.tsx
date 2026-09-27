"use client";

import React, { useRef, useState } from "react";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  onClick?: () => void;
  "data-cursor"?: string;
}

export function Magnetic({
  children,
  strength = 0.35,
  className = "",
  onClick,
  "data-cursor": dataCursor,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-cursor={dataCursor}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 && position.y === 0 
          ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)" 
          : "transform 0.12s ease-out",
        willChange: "transform",
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </div>
  );
}
