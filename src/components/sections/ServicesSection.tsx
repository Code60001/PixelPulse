import React from "react";
import { ArrowRight } from "lucide-react";
import { StarburstSmileyBadge, ScallopedBadge } from "@/components/ui/ShapesAndBadges";
import { useBookCall } from "@/context/BookCallContext";

export function ServicesSection() {
  const { openModal } = useBookCall();
  return (
    <section id="services" className="bg-[#F5F1E6] relative py-20 md:py-28 lg:py-32 overflow-hidden flex flex-col items-center border-t border-[#3B001B]/20">

      {/* Top Right Purple & Green Starburst Smiley Badge */}
      <div className="absolute right-6 md:right-16 top-6 md:top-8 z-20">
        <StarburstSmileyBadge size={58} />
      </div>

      {/* Background doodles */}
      <div className="absolute left-8 sm:left-12 top-20 md:left-24 transform -rotate-12 pointer-events-none opacity-80">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
          <path d="M 16 80 Q 36 20 56 40 T 84 16" stroke="#869DFF" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* Fan of Images */}
      <div className="relative w-full max-w-4xl mx-auto h-[380px] md:h-[480px] flex justify-center items-center mt-8 mb-16 px-4">

        {/* Card 1 (Far Left) */}
        <div className="absolute w-[180px] h-[270px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[340px] bg-[#d9b8ff] p-2 shadow-xl transform -rotate-12 -translate-x-[110px] sm:-translate-x-[140px] md:-translate-x-[190px] origin-bottom hover:-translate-y-4 transition-transform z-10 rounded-sm">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Service 1" />
        </div>

        {/* Card 2 (Mid Left) */}
        <div className="absolute w-[190px] h-[280px] sm:w-[220px] sm:h-[320px] md:w-[260px] md:h-[360px] bg-[#F26C17] p-2 shadow-xl transform -rotate-6 -translate-x-[55px] sm:-translate-x-[70px] md:-translate-x-[95px] origin-bottom hover:-translate-y-4 transition-transform z-20 rounded-sm">
          <img src="https://images.unsplash.com/photo-1512418490979-9ce792d0e722?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Service 2" />
        </div>

        {/* Card 4 (Mid Right) */}
        <div className="absolute w-[190px] h-[280px] sm:w-[220px] sm:h-[320px] md:w-[260px] md:h-[360px] bg-[#F26C17] p-2 shadow-xl transform rotate-6 translate-x-[55px] sm:translate-x-[70px] md:translate-x-[95px] origin-bottom hover:-translate-y-4 transition-transform z-20 rounded-sm">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Service 4" />
        </div>

        {/* Card 5 (Far Right) */}
        <div className="absolute w-[180px] h-[270px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[340px] bg-[#d9b8ff] p-2 shadow-xl transform rotate-12 translate-x-[110px] sm:translate-x-[140px] md:translate-x-[190px] origin-bottom hover:-translate-y-4 transition-transform z-10 rounded-sm">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Service 5" />
        </div>

        {/* Card 3 (Center Main) */}
        <div className="absolute w-[220px] h-[320px] sm:w-[250px] sm:h-[360px] md:w-[300px] md:h-[420px] bg-[#869DFF] p-2.5 shadow-2xl transform origin-bottom hover:-translate-y-4 transition-transform z-30 rounded-sm">
          <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Social Media Marketing" />

          {/* Promotion Badge */}
          <div className="absolute -top-5 -right-5 transform rotate-12 z-40">
            <ScallopedBadge text="PROMOTION" fill="#F26C17" width={125} height={34} fontSize={10} />
          </div>

          {/* CUTE Badge */}
          <div className="absolute bottom-20 -left-10 transform -rotate-12 z-40">
            <span
              className="text-3xl md:text-5xl font-display  text-[#F26C17]"
              style={{
                WebkitTextStroke: '4px white',
                paintOrder: 'stroke fill',
                textShadow: '3px 3px 0px #2D7864'
              }}
            >
              CUTE
            </span>
          </div>

          {/* Social Media Badge */}
          <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 z-40">
            <ScallopedBadge text="SOCIAL MEDIA MARKETING" fill="#869DFF" width={200} height={38} fontSize={9} />
          </div>
        </div>
      </div>

      <div className="text-center relative z-20   max-w-2xl px-4 flex flex-col items-center">
        <h2 className="text-2xl sm:text-2xl md:text-2xl text-[#3B001B] leading-tight font-display  uppercase tracking-tighter text-center">
          COMPREHENSIVE DIGITAL<br />SOLUTIONS FOR EVERY BUSINESS
        </h2>
        <button
          onClick={openModal}
          className="inline-flex items-center gap-2 mt-6 font-sans font-bold text-[#F26C17] uppercase tracking-widest text-xs border-b-2 border-[#F26C17] pb-0.5 hover:opacity-80 transition-opacity cursor-pointer"
        >
          VIEW ALL SERVICES <ArrowRight size={14} strokeWidth={3} />
        </button>
      </div>

    </section>
  );
}
