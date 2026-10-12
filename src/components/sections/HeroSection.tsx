"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import {
  ScallopedBadge,
  FourPointStar,
  EightPointStar,
  SpinningCircularBadge,
  HeroCharacterIllustration
} from "@/components/ui/ShapesAndBadges";
import { PixelPulseLogo } from "@/components/ui/PixelPulseLogo";
import { useBookCall } from "@/context/BookCallContext";

export function HeroSection() {
  const { openModal } = useBookCall();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -10;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenTalkModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    openModal();
  };

  return (
    <div id="home" className="min-h-screen bg-[#F5F1E6] relative overflow-hidden flex flex-col border-b-[20px] border-[#526123]">

      {/* Background Grid Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#526123 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      {/* Checkered Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-5 w-full z-20 flex" style={{
        backgroundImage: 'conic-gradient(#526123 90deg, transparent 90deg 180deg, #526123 180deg 270deg, transparent 270deg)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0'
      }}></div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-6 max-w-6xl mx-auto w-full relative z-30">
        <a href="#home" onClick={(e) => scrollTo(e, 'home')}>
          <PixelPulseLogo size={38} showText={true} />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-6 font-sans font-bold text-[#3B001B] text-[11px] uppercase tracking-widest border-2 border-[#3B001B] px-6 py-3.5 bg-white shadow-sm relative">
            <a href="#home" onClick={(e) => scrollTo(e, 'home')} className="hover:text-[#F26C17] transition-colors">Home</a>
            <a href="#about" onClick={(e) => scrollTo(e, 'about')} className="hover:text-[#F26C17] transition-colors">About Us</a>
            <a href="#services" onClick={(e) => scrollTo(e, 'services')} className="hover:text-[#F26C17] transition-colors">Services</a>
            <a href="#work" onClick={(e) => scrollTo(e, 'work')} className="hover:text-[#F26C17] transition-colors">Our Work</a>
            <a href="#pricing" onClick={(e) => scrollTo(e, 'pricing')} className="hover:text-[#F26C17] transition-colors">Pricing</a>


            <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="hover:text-[#F26C17] transition-colors">Contact</a>
          </div>

          <button
            onClick={handleOpenTalkModal}
            className="flex items-center gap-2 bg-[#3B001B] text-[#F5F1E6] px-6 py-3.5 font-sans font-bold text-[11px] uppercase tracking-widest hover:bg-[#F26C17] transition-colors border-y-2 border-r-2 border-[#3B001B] shadow-sm cursor-pointer"
          >
            Let's Talk <ArrowRight size={14} strokeWidth={3} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-11 h-11 bg-white border-2 border-[#3B001B] flex items-center justify-center text-[#3B001B] shadow-xs"
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
        </button>

        {/* Mobile Dropdown Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-4 right-4 bg-white border-4 border-[#3B001B] shadow-[8px_8px_0px_0px_#3B001B] p-6 z-50 flex flex-col gap-4 font-sans font-bold text-xs uppercase tracking-wider text-[#3B001B] lg:hidden">
            <a href="#home" onClick={(e) => scrollTo(e, 'home')} className="py-2 border-b border-[#3B001B]/10 hover:text-[#F26C17]">Home</a>
            <a href="#about" onClick={(e) => scrollTo(e, 'about')} className="py-2 border-b border-[#3B001B]/10 hover:text-[#F26C17]">About Us</a>
            <a href="#services" onClick={(e) => scrollTo(e, 'services')} className="py-2 border-b border-[#3B001B]/10 hover:text-[#F26C17]">Services</a>
            <a href="#work" onClick={(e) => scrollTo(e, 'work')} className="py-2 border-b border-[#3B001B]/10 hover:text-[#F26C17]">Our Work</a>
            <a href="#reviews" onClick={(e) => scrollTo(e, 'reviews')} className="py-2 border-b border-[#3B001B]/10 hover:text-[#F26C17]">Reviews</a>
            <a href="#pricing" onClick={(e) => scrollTo(e, 'pricing')} className="py-2 border-b border-[#3B001B]/10 hover:text-[#F26C17]">Pricing</a>
            <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="py-2 border-b border-[#3B001B]/10 hover:text-[#F26C17]">Contact</a>

            <button
              onClick={handleOpenTalkModal}
              className="mt-2 w-full py-4 bg-[#3B001B] text-white font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 rounded-sm hover:bg-[#F26C17]"
            >
              Let's Talk <ArrowRight size={14} strokeWidth={3} />
            </button>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 pt-8 md:pt-12 pb-24 md:pb-32 relative flex flex-col md:flex-row items-end z-10">

        {/* Left Side: Typography */}
        <div className="w-full md:w-[72%] relative z-10 pt-4 md:pt-8">
          <h1 className="text-[64px] sm:text-[96px] md:text-[116px] lg:text-[136px] leading-[0.85] text-[#3B001B] uppercase relative tracking-tighter font-display ">

            {/* Row 1 */}
            <div className="relative inline-block whitespace-nowrap">
              {/* Orange Cross/Asterisk */}
              <div className="absolute -left-8 sm:-left-11 top-1 transform -rotate-12">
                <EightPointStar size={34} color="#F26C17" />
              </div>

              {/* Blue Development Badge */}
              <div className="absolute -top-8 sm:-top-10 right-1/4 z-20 transform -rotate-2">
                <ScallopedBadge text="DEVELOPMENT" fill="#869DFF" width={130} height={30} fontSize={10} />
              </div>

              TRANSFORM
            </div>

            <br />

            {/* Row 2 - Single Row */}
            <div className="relative inline-flex items-center flex-nowrap whitespace-nowrap gap-2 sm:gap-3 mt-2 ml-2 sm:ml-4">
              {/* Spinning Circular Badge */}
              <div className="relative z-20 shrink-0 -ml-10 sm:-ml-14 mr-1">
                <SpinningCircularBadge size={120} className="w-[88px] h-[88px] sm:w-[110px] sm:h-[110px] md:w-[125px] md:h-[125px]" />
              </div>

              <span className="relative inline-block whitespace-nowrap">
                YOUR DIGITAL
                {/* Orange Badge */}
                <div className="absolute -top-5 sm:-top-6 right-8 sm:right-16 transform rotate-6 z-20">
                  <ScallopedBadge text="EXPERIENCE" fill="#F26C17" width={115} height={30} fontSize={10} />
                </div>
                {/* Blue Spark */}
                <div className="absolute -top-5 left-1/3 z-10">
                  <FourPointStar size={28} color="#869DFF" />
                </div>
              </span>
            </div>

            <br />

            {/* Row 3 */}
            <div className="relative inline-block mt-2">
              PRESENCE

              {/* Plum Spark */}
              <div className="absolute bottom-5 -left-10 sm:-left-12">
                <FourPointStar size={28} color="#A0325A" />
              </div>

              {/* Green GUIDELINES Badge */}
              <div className="absolute -bottom-8 sm:-bottom-10 right-8 sm:right-12 transform -rotate-6 z-20">
                <ScallopedBadge text="GUIDELINES" fill="#2D7864" width={125} height={32} fontSize={10} />
              </div>
            </div>
          </h1>

          <div className="mt-16 md:mt-20 max-w-sm">
            <p className="font-sans text-[#3B001B] text-xs sm:text-sm md:text-base mb-8 font-medium leading-relaxed">
              A results-driven digital agency helping startups<br className="hidden sm:block" />and businesses grow online through strategy,<br className="hidden sm:block" />development, and marketing.
            </p>
            <button
              onClick={handleOpenTalkModal}
              className="inline-flex items-center gap-3 bg-[#F26C17] text-[#F5F1E6] px-8 py-4 font-sans font-bold text-xs uppercase tracking-widest hover:bg-[#3B001B] transition-colors border-2 border-transparent shadow-md cursor-pointer"
            >
              Book a Free Call <ArrowRight size={14} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>

      {/* Character Illustration */}
      <HeroCharacterIllustration />

    </div>
  );
}

