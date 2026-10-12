import React from "react";
import { PixelPulseLogo } from "@/components/ui/PixelPulseLogo";

export function Footer() {
  return (
    <footer className="bg-[#F5F1E6] relative pt-16 pb-8 border-t border-[#3B001B]/10">
      {/* Background doodles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #3B001B 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">

        {/* Left Side: Logo & Copyright */}
        <div className="flex flex-col h-full justify-between gap-8 md:gap-12">
          {/* Logo icon */}
          <a href="#home">
            <PixelPulseLogo size={44} showText={true} />
          </a>

          <p className="font-sans font-bold text-[#3B001B] text-[10px] sm:text-xs tracking-wider uppercase opacity-85">
            &copy; 2026 PIXELPULSE DIGITAL AGENCY. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Right Side: Links & Socials */}
        <div className="flex flex-col gap-8 md:gap-10 flex-1 max-w-2xl w-full">

          <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-6 w-full">

            {/* Quick Links */}
            <div>
              <h4 className="font-sans font-bold text-xs text-[#3B001B] uppercase tracking-wider mb-4 opacity-70">Quick Links</h4>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                <li><a href="#home" className="font-display text-xs sm:text-sm uppercase text-[#3B001B] hover:text-[#F26C17] transition-colors">HOME</a></li>
                <li><a href="#about" className="font-display text-xs sm:text-sm uppercase text-[#3B001B] hover:text-[#F26C17] transition-colors">ABOUT US</a></li>
                <li><a href="#services" className="font-display text-xs sm:text-sm uppercase text-[#3B001B] hover:text-[#F26C17] transition-colors">SERVICES</a></li>
                <li><a href="#work" className="font-display text-xs sm:text-sm uppercase text-[#3B001B] hover:text-[#F26C17] transition-colors">OUR WORK</a></li>
                <li><a href="#reviews" className="font-display text-xs sm:text-sm uppercase text-[#3B001B] hover:text-[#F26C17] transition-colors">REVIEWS</a></li>
                <li><a href="#pricing" className="font-display text-xs sm:text-sm uppercase text-[#3B001B] hover:text-[#F26C17] transition-colors">PRICING</a></li>
                <li><a href="#contact" className="font-display text-xs sm:text-sm uppercase text-[#3B001B] hover:text-[#F26C17] transition-colors">CONTACT</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="max-w-xs">
              <h4 className="font-sans font-bold text-xs text-[#3B001B] uppercase tracking-wider mb-4 opacity-70">Contact Info</h4>
              <ul className="space-y-2.5">
                <li><a href="tel:+12125557890" className="font-display  text-sm uppercase text-[#3B001B] hover:text-[#F26C17] transition-colors">+1 (212) 555-7890</a></li>
                <li>
                  <p className="font-display  text-xs sm:text-sm uppercase text-[#3B001B] leading-snug">
                    1234 MADISON AVE, NEW YORK,<br />NY 10010, USA
                  </p>
                </li>
              </ul>
            </div>

          </div>

          {/* Social Buttons */}
          <div className="flex w-full mt-2 rounded-sm overflow-hidden shadow-sm">
            <a href="#" className="flex-1 py-3.5 text-center font-display  text-[10px] sm:text-xs text-[#3B001B] uppercase tracking-widest hover:opacity-90 transition-opacity bg-[#D9B8FF]">INSTAGRAM</a>
            <a href="#" className="flex-1 py-3.5 text-center font-display  text-[10px] sm:text-xs text-[#3B001B] uppercase tracking-widest hover:opacity-90 transition-opacity bg-[#E8A5B3]">TWITTER</a>
            <a href="#" className="flex-1 py-3.5 text-center font-display  text-[10px] sm:text-xs text-[#3B001B] uppercase tracking-widest hover:opacity-90 transition-opacity bg-[#C1E1C1]">FACEBOOK</a>
          </div>

        </div>

      </div>
    </footer>
  );
}
