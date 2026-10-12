import React from "react";
import { ArrowRight } from "lucide-react";
import { WavyReviewCard, ScallopedBadge, FourPointStar, EightPointStar } from "@/components/ui/ShapesAndBadges";
import { useBookCall } from "@/context/BookCallContext";

export function ReviewsAndCTASection() {
  const { openModal } = useBookCall();
  return (
    <section id="reviews" className="bg-[#F5F1E6] relative py-20 md:py-28 lg:py-32 overflow-hidden flex flex-col items-center z-10 border-t border-[#3B001B]/10">

      {/* Background doodles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #3B001B 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

      {/* Testimonials Header */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-16 md:mb-20 relative z-10 flex flex-col md:flex-row justify-between items-start">
        <div className="relative">
          <h2 className="text-[52px] sm:text-[76px] md:text-[96px] lg:text-[112px] leading-[0.88] text-[#3B001B] uppercase tracking-tighter font-display ">
            OUR CLIENT<br />REVIEWS
          </h2>
          {/* Testimonials Badge */}
          <div className="absolute -top-4 left-20 md:-top-6 md:left-40 transform -rotate-12 z-20">
            <ScallopedBadge text="TESTIMONIALS" fill="#869DFF" width={140} height={36} fontSize={10} />
          </div>

          <div className="absolute -right-20 bottom-0 transform rotate-12 hidden md:block">
            <span className="font-sans text-[#3B001B] text-[11px] font-bold italic block mb-1 tracking-wider">Our Clients Say</span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M 8 6 Q 28 8 20 34" stroke="#3B001B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 12 27 L 20 34 L 27 26" stroke="#3B001B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </div>

        {/* Speech Bubble Icon Outline */}
        <div className="mt-8 md:mt-0 transform rotate-12 translate-y-4">
          <svg width="160" height="130" viewBox="0 0 200 180" fill="none">
            <path d="M 55 10 L 145 10 C 168 10 182 24 182 48 C 182 72 168 86 145 86 L 85 86 L 45 116 C 48 98 44 90 28 80 C 18 70 18 60 18 48 C 18 24 32 10 55 10 Z" stroke="#F26C17" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M 52 38 L 148 38" stroke="#F26C17" strokeWidth="6" strokeLinecap="round" />
            <path d="M 52 60 L 112 60" stroke="#F26C17" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Review Cards Fan */}
      <div className="relative w-full max-w-5xl mx-auto h-[360px] md:h-[400px] flex justify-center items-center mb-16 md:mb-20 z-20 px-4">
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center -space-x-4 md:-space-x-10">
          <WavyReviewCard
            color="#D9B8FF"
            rotation="-rotate-[10deg] -translate-y-4"
            zIndex="z-10"
            quote="They completely transformed our online presence. The website looks modern, fast, and professional. Highly recommended!"
            name="SARAH JOHNSON"
            role="Business Owner"
          />
          <WavyReviewCard
            color="#526123"
            rotation="-rotate-[2deg] translate-y-4"
            zIndex="z-20"
            quote="After launching our new e-commerce site, store sales doubled. Excellent design strategy work!"
            name="MICHAEL LEE"
            role="Entrepreneur"
          />
          <WavyReviewCard
            color="#E8A5B3"
            rotation="rotate-[6deg] translate-y-2"
            zIndex="z-30"
            quote="Our SEO rankings improved within a few months, and we started getting consistent leads. The team is very responsive."
            name="DAVID SMITH"
            role="CEO"
          />
          <WavyReviewCard
            color="#F26C17"
            rotation="rotate-[12deg] -translate-y-6"
            zIndex="z-40"
            quote="Outstanding design, smooth communication, and exceptional results from beginning to project completion."
            name="OLIVIA DAVIS"
            role="Startup Founder"
            hasAvatar={true}
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full relative py-12 md:py-16 flex flex-col items-center mb-8">

        {/* Blue Doodle */}
        <div className="absolute left-10 md:left-28 top-0 transform -rotate-[20deg] hidden md:block pointer-events-none opacity-80">
          <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
            <path d="M 16 80 Q 28 10 50 34 T 74 12 Q 90 40 90 20" stroke="#869DFF" strokeWidth="12" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        <h2 className="text-[48px] sm:text-[76px] md:text-[96px] lg:text-[116px] leading-[0.85] text-[#3B001B] uppercase text-center relative z-10 tracking-tighter font-display ">

          <div className="relative inline-block">
            {/* Small purple star */}
            <div className="absolute -top-5 -left-6 z-0">
              <EightPointStar size={28} color="#D9B8FF" />
            </div>
            TRANSFORM
          </div><br />

          <div className="relative inline-block">
            YOUR DIGITAL
            {/* Small blue spark */}
            <div className="absolute -top-2 -right-6 z-0">
              <FourPointStar size={24} color="#869DFF" />
            </div>
          </div><br />

          <div className="flex items-center justify-center flex-wrap sm:flex-nowrap gap-2 sm:gap-4">
            <div className="relative">
              {/* Brown spark on left of START */}
              <div className="absolute bottom-2 -left-10 z-0">
                <EightPointStar size={28} color="#8B4513" />
              </div>
              START
            </div>
            {/* Monster Figurines Image */}
            <div className="w-[180px] sm:w-[240px] md:w-[300px] bg-transparent -mt-6 sm:-mt-10 relative z-20">
              <img src="/Colorful Monster Figurines (1).png" className="w-full h-auto object-contain mix-blend-multiply drop-shadow-md" alt="Colorful Monster Figurines" />
            </div>
            <div className="relative">
              TODAY
              {/* Brown spark on right of TODAY */}
              <div className="absolute bottom-2 -right-10 z-0">
                <EightPointStar size={28} color="#8B4513" />
              </div>
            </div>
          </div>
        </h2>

        {/* Green Star Badge */}
        <div className="absolute right-12 bottom-28 hidden md:block z-30">
          <EightPointStar size={68} color="#526123" />
        </div>

        <div className="mt-8 md:mt-10 text-center z-10 max-w-2xl px-4">
          <p className="font-display  text-xs md:text-sm text-[#3B001B] uppercase leading-relaxed tracking-tight">
            TRANSFORM YOUR DIGITAL PRESENCE WITH INNOVATIVE STRATEGIES & CREATIVE SOLUTIONS
          </p>
          <button onClick={openModal} className="inline-flex items-center gap-2 mt-6 font-sans font-bold text-[#F26C17] uppercase tracking-widest text-xs border-b-2 border-[#F26C17] pb-1 hover:opacity-80 transition-opacity cursor-pointer">
            BOOK A FREE CALL <ArrowRight size={14} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Web Services We Provide Footer Row */}
      <div className="w-full py-8 md:py-10 relative z-10 overflow-hidden border-t border-[#3B001B]/10 mt-6">
        {/* Section Micro-Header */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-4 sm:mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F26C17] animate-pulse"></span>
            <span className="font-sans font-black text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#3B001B]">
              WEB SERVICES WE PROVIDE
            </span>
          </div>
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-wider text-[#3B001B]/60 font-semibold hidden sm:inline">
            // Full-Cycle Digital Engineering & Design
          </span>
        </div>

        {/* 6 Chamfered Web Service Cards */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 px-4 sm:px-6">
          {[
            {
              type: "WEB_DEV",
              title: "WEB DEV",
              subtitle: "FULL-STACK & APPS",
              pattern: "B",
              accent: "#F26C17",
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3B001B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                  <line x1="14" y1="4" x2="10" y2="20" stroke="#F26C17" strokeWidth="2.5" />
                </svg>
              )
            },
            {
              type: "MOBILE_APPS",
              title: "MOBILE APPS",
              subtitle: "IOS & ANDROID",
              pattern: "A",
              accent: "#869DFF",
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3B001B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="3" />
                  <line x1="12" y1="18" x2="12.01" y2="18" stroke="#869DFF" strokeWidth="3" />
                  <line x1="9" y1="5" x2="15" y2="5" stroke="#3B001B" strokeWidth="2" />
                </svg>
              )
            },
            {
              type: "ECOMMERCE",
              title: "E-COMMERCE",
              subtitle: "STORES & CART",
              pattern: "B",
              accent: "#D9B8FF",
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3B001B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 L3 6 v14 a2 2 0 0 0 2 2 h14 a2 2 0 0 0 2 -2 V6 l-3 -4 Z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10 a4 4 0 0 1 -8 0" stroke="#F26C17" strokeWidth="2.5" />
                </svg>
              )
            },
            {
              type: "CLOUD_API",
              title: "CLOUD & API",
              subtitle: "BACKEND / CMS",
              pattern: "A",
              accent: "#526123",
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3B001B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                  <path d="M12 12v4m-2-2h4" stroke="#526123" strokeWidth="2.5" />
                </svg>
              )
            },
            {
              type: "SEO_GROWTH",
              title: "SEO & SPEED",
              subtitle: "100% OPTIMIZED",
              pattern: "B",
              accent: "#E8A5B3",
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3B001B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" stroke="#F26C17" strokeWidth="2.5" />
                  <circle cx="19" cy="9" r="2" fill="#F26C17" />
                </svg>
              )
            },
            {
              type: "MAINTENANCE",
              title: "MAINTENANCE",
              subtitle: "24/7 SUPPORT",
              pattern: "A",
              accent: "#C1E1C1",
              icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3B001B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" stroke="#2D7864" strokeWidth="2.5" />
                </svg>
              )
            }
          ].map((card, i) => (
            <div
              key={i}
              onClick={openModal}
              title={`Inquire about ${card.title}`}
              className="group relative min-w-0 h-24 sm:h-28 md:h-32 flex flex-col items-center justify-center p-3 sm:p-4 transition-all duration-300 hover:scale-[1.04] hover:-translate-y-1 cursor-pointer select-none"
            >
              {/* SVG Card Chamfered Frame */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-300" preserveAspectRatio="none" viewBox="0 0 200 100">
                {card.pattern === "A" ? (
                  <path
                    d="M 20 0 L 200 0 L 200 80 L 180 100 L 0 100 L 0 20 Z"
                    className="fill-white/60 group-hover:fill-white transition-colors duration-300"
                    stroke="#3B001B"
                    strokeWidth="1.5"
                    strokeOpacity="0.35"
                  />
                ) : (
                  <path
                    d="M 0 0 L 180 0 L 200 20 L 200 100 L 20 100 L 0 80 Z"
                    className="fill-white/60 group-hover:fill-white transition-colors duration-300"
                    stroke="#3B001B"
                    strokeWidth="1.5"
                    strokeOpacity="0.35"
                  />
                )}
              </svg>

              {/* Web Service Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-1.5 transition-transform duration-300 group-hover:scale-110">
                  {card.icon}
                </div>
                <span className="font-display text-xs sm:text-sm font-black text-[#3B001B] tracking-tight uppercase group-hover:text-[#F26C17] transition-colors">
                  {card.title}
                </span>
                <span className="font-sans text-[8px] sm:text-[9px] font-bold tracking-widest text-[#3B001B]/70 uppercase mt-0.5">
                  {card.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
