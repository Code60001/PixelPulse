import React from "react";

export function PixelPulseLogo({
  size = 38,
  showText = true,
  showSubtitle = true,
  subtitle = "WEB SERVICES",
  className = ""
}: {
  size?: number;
  showText?: boolean;
  showSubtitle?: boolean;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icon Badge: Web Services Browser & Pulse Frame */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={size}
          height={size}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm transition-transform hover:scale-105 duration-200"
        >
          {/* Outer Rounded Badge Frame */}
          <rect
            x="3"
            y="3"
            width="38"
            height="38"
            rx="10"
            fill="#F26C17"
            stroke="#3B001B"
            strokeWidth="3"
          />

          {/* Web Browser Top Header Line */}
          <line
            x1="3"
            y1="13"
            x2="41"
            y2="13"
            stroke="#3B001B"
            strokeWidth="2"
          />

          {/* Web Browser 3 Controls */}
          <circle cx="8" cy="8" r="1.5" fill="#F5F1E6" />
          <circle cx="13" cy="8" r="1.5" fill="#F5F1E6" />
          <circle cx="18" cy="8" r="1.5" fill="#F5F1E6" />

          {/* Top-Right Pixel Accent Block */}
          <rect
            x="31"
            y="5.5"
            width="5.5"
            height="5.5"
            rx="1"
            fill="#F5F1E6"
            stroke="#3B001B"
            strokeWidth="1.2"
          />

          {/* Left Code Bracket: < */}
          <path
            d="M 11 22 L 7 26 L 11 30"
            stroke="#F5F1E6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Dynamic Pulse Wavefront Path */}
          <path
            d="M 14 26 L 17 26 L 20 18 L 24 34 L 27 21 L 30 26"
            stroke="#F5F1E6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right Code Bracket: > */}
          <path
            d="M 33 22 L 37 26 L 33 30"
            stroke="#F5F1E6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Name & Web Services Tag */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-2xl sm:text-3xl font-display text-[#3B001B] tracking-tight">
            Pixel<span className="text-[#F26C17]">Pulse</span>
          </span>
          {showSubtitle && (
            <span className="font-sans font-black text-[8px] sm:text-[9px] tracking-[0.24em] text-[#3B001B]/80 uppercase mt-1">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

