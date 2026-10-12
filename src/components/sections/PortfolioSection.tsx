import React from "react";
import { FourPointStar, EightPointStar, LaurelWreath } from "@/components/ui/ShapesAndBadges";

const MarqueeStar = () => (
  <div className="inline-block mx-6">
    <FourPointStar size={18} color="#F5F1E6" />
  </div>
);

export function PortfolioSection() {
  const tickerItems = [
    "EXPERIENCED DIGITAL EXPERTS",
    "CUSTOMIZED MARKETING STRATEGIES",
    "TRANSPARENT COMMUNICATION",
    "DATA-DRIVEN DECISIONS",
    "AFFORDABLE PRICING"
  ];

  return (
    <section id="about" className="bg-[#F5F1E6] relative overflow-hidden pt-24 md:pt-32 flex flex-col items-center">

      {/* "Since 2012" Oval Seal Badge */}
      <div className="relative mb-6 transform -rotate-12 z-20 flex justify-center w-full">
        <div className="border border-[#3B001B] rounded-full px-5 py-1 bg-transparent flex items-center justify-center shadow-xs">
          <span className="font-archivo text-xs font-bold text-[#3B001B] tracking-wider uppercase">
            Since 2012
          </span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 relative z-10 w-full mb-20 md:mb-24">

        {/* Smiling star top right */}
        <div className="absolute -top-10 right-4 md:right-32 transform rotate-12 z-20">
          <svg width="44" height="44" viewBox="0 0 50 50" fill="none">
            <polygon
              points="25.00,2.00 28.83,15.76 41.27,8.73 34.24,21.17 48.00,25.00 34.24,28.83 41.27,41.27 28.83,34.24 25.00,48.00 21.17,34.24 8.73,41.27 15.76,28.83 2.00,25.00 15.76,21.17 8.73,8.73 21.17,15.76"
              fill="#869DFF"
            />
            <circle cx="19" cy="22" r="3" fill="white" />
            <circle cx="31" cy="22" r="3" fill="white" />
            <path d="M 19 31 Q 25 37 31 31" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        <h2 className="text-[28px] sm:text-[38px] md:text-[40px] lg:text-[40px] leading-[1.05] text-[#3B001B] uppercase tracking-tighter flex flex-col items-center gap-1 md:gap-2 font-display ">

          <div className="flex items-center justify-center flex-wrap gap-x-2 md:gap-x-3 relative">
            <span>OUR EXPERIENCED</span>
            <div className="bg-[#e4c979] overflow-hidden rounded-md w-8 h-8 md:w-12 md:h-12 flex items-center justify-center -mt-1 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                alt="Avatar"
                className="w-full h-full object-cover mix-blend-multiply opacity-90"
              />
            </div>
            <span>TEAM COMBINES</span>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-x-2 md:gap-x-3">
            <span>CREATIVITY TECHNOLOGY DATA-DRIVEN</span>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-x-2 md:gap-x-3">
            <span>STRATEGIES</span>
            {/* Orange clover icon */}
            <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g fill="#F26C17">
                <circle cx="17" cy="9" r="8" />
                <circle cx="25" cy="17" r="8" />
                <circle cx="17" cy="25" r="8" />
                <circle cx="9" cy="17" r="8" />
                <circle cx="17" cy="17" r="5" />
              </g>
            </svg>

            <span>DELIVER IMPACT</span>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-x-2 md:gap-x-3 relative">
            <span>SOLUTIONS THAT INCREASE</span>
            {/* Plum Asterisk */}
            <div className="inline-block transform rotate-12">
              <EightPointStar size={36} color="#A0325A" />
            </div>
          </div>
        </h2>
      </div>

      {/* Floating Polaroids */}
      <div className="absolute left-[4%] md:left-[10%] top-[28%] transform -rotate-12 z-0 hidden lg:block hover:rotate-0 hover:scale-110 transition-transform duration-300">
        <div className="bg-white p-2.5 pb-6 shadow-xl rounded-sm border border-gray-200">
          <img src="https://images.unsplash.com/photo-1552554766-2efec7d2fc0e?q=80&w=200&auto=format&fit=crop" alt="Puffin" className="w-24 h-24 md:w-32 md:h-32 object-cover" />
          <p className="font-sans text-center text-[9px] md:text-[10px] mt-2 font-bold text-[#3B001B] uppercase tracking-widest">2026</p>
        </div>
      </div>

      <div className="absolute right-[4%] md:right-[10%] top-[32%] transform rotate-12 z-0 hidden lg:block hover:-rotate-0 hover:scale-110 transition-transform duration-300">
        <div className="bg-white p-2.5 pb-6 shadow-xl rounded-sm border border-gray-200">
          <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=200&auto=format&fit=crop" alt="Workspace" className="w-24 h-24 md:w-32 md:h-32 object-cover" />
          <p className="font-sans text-center text-[9px] md:text-[10px] mt-2 font-bold text-[#3B001B] uppercase tracking-widest">Work Space</p>
        </div>
      </div>

      {/* Awards Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-4 relative z-10 w-full px-4">
        <LaurelWreath title="ULTRA PRESTIGIOUS" subtitle="BEST OF THE WORLD WINNER" stars={5} />
        <LaurelWreath title="ULTIMATE WINNER" subtitle="100TH BEST PORTFOLIOS" stars={5} isCircular={true} />
        <LaurelWreath title="HYPER BEST" subtitle="AWARD WINNING" stars={5} />
      </div>

      {/* Image Grid (Staggered heights, bottom aligned, with gaps) */}
      <div className="w-full mt-20 md:mt-24 flex items-end justify-between gap-2 px-2 sm:px-4 md:px-6 relative z-10 h-[220px] md:h-[320px]">
        {/* Image 1 */}
        <div className="flex-1 h-[45%] overflow-hidden relative rounded-t-sm shadow-md">
          <img src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=400&auto=format&fit=crop" alt="Shoes" className="w-full h-full object-cover" />
        </div>

        {/* Image 2 */}
        <div className="flex-1 h-[75%] overflow-hidden relative rounded-t-sm shadow-md">
          <img src="https://images.unsplash.com/photo-1518987048-93e29699e79a?q=80&w=400&auto=format&fit=crop" alt="Mint Car" className="w-full h-full object-cover" />
        </div>

        {/* Image 3 */}
        <div className="flex-1 h-[40%] overflow-hidden relative rounded-t-sm shadow-md">
          <img src="https://images.unsplash.com/photo-1587391993414-0694e9dd8e66?q=80&w=400&auto=format&fit=crop" alt="Yellow Flower" className="w-full h-full object-cover" />
        </div>

        {/* Image 4 */}
        <div className="flex-[1.2] h-[100%] overflow-hidden relative rounded-t-sm shadow-md">
          <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop" alt="Book of Hope" className="w-full h-full object-cover" />
        </div>

        {/* Image 5 */}
        <div className="flex-1 h-[55%] overflow-hidden relative rounded-t-sm shadow-md">
          <img src="https://images.unsplash.com/photo-1584464522939-9524fb94017a?q=80&w=400&auto=format&fit=crop" alt="Water Slide" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Marquee Section */}
      <div className="w-full flex flex-col z-20 relative space-y-3 mt-4">
        {/* Top Ticker */}
        <div className="w-full bg-[#2D7864] py-3.5 md:py-4 overflow-hidden flex">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                {tickerItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <span className="text-[#F5F1E6] font-archivo  text-xs md:text-sm uppercase tracking-widest">
                      {item}
                    </span>
                    <MarqueeStar />
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Ticker */}
        <div className="w-full bg-[#F26C17] py-3.5 md:py-4 overflow-hidden flex">
          <div className="flex whitespace-nowrap animate-marquee-reverse">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                {tickerItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <span className="text-[#F5F1E6] font-archivo  text-xs md:text-sm uppercase tracking-widest">
                      {item}
                    </span>
                    <MarqueeStar />
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
