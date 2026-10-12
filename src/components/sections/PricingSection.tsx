import React from "react";
import { ScallopedBadge } from "@/components/ui/ShapesAndBadges";
import { useBookCall } from "@/context/BookCallContext";

const PricingCard = ({ title, subtitle, price, color, features }: { title: string; subtitle: string; price: string; color: string; features: string[] }) => {
  const { openModal } = useBookCall();
  return (
  <div className="relative w-full max-w-[400px] p-6 sm:p-8 rounded-xl shadow-xl transition-transform hover:-translate-y-2 duration-300" style={{ backgroundColor: color }}>
    {/* Full inset dashed border */}
    <div className="absolute inset-4 border border-dashed border-[#3B001B] pointer-events-none opacity-30 rounded-lg"></div>

    <div className="relative z-10 px-2 pt-2">
      <h3 className="text-2xl sm:text-3xl uppercase text-[#3B001B] mb-2 leading-none font-display ">{title}</h3>
      <p className="font-sans text-xs text-[#3B001B] font-medium leading-relaxed max-w-[260px] opacity-80 mb-6">{subtitle}</p>

      <div className="flex items-end gap-1 mb-4">
        <span className="text-4xl sm:text-5xl font-display  text-[#3B001B] leading-none">{price}</span>
        <span className="text-xs font-sans font-bold text-[#3B001B] mb-1">/MO<span className="text-[9px]"> USD</span></span>
      </div>

      <div className="h-[1px] w-[calc(100%+24px)] -ml-3 bg-[#3B001B] opacity-20 mb-6"></div>

      <h4 className="font-display  text-xs text-[#3B001B] uppercase tracking-wider mb-4">INCLUDES:</h4>

      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <svg className="w-4 h-4 text-[#3B001B] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
              <path d="M7 4 L7 12 L16 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 8 L16 12 L12 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-sans text-xs font-semibold text-[#3B001B] opacity-90">{feature}</span>
          </li>
        ))}
      </ul>

      <button onClick={openModal} className="w-full py-3.5 text-center text-xs font-display  uppercase tracking-widest hover:opacity-90 transition-opacity rounded-md shadow-sm bg-[#3B001B] text-[#F5F1E6] cursor-pointer">
        GET STARTED NOW
      </button>
    </div>
  </div>
  );
};

export function PricingSection() {
  return (
    <section id="pricing" className="bg-[#3B001B] relative py-20 md:py-28 lg:py-32 overflow-hidden px-4 sm:px-6 md:px-8">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20 relative">
          {/* PRICING Badge */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 -rotate-12 z-20">
            <ScallopedBadge text="PRICING" fill="#F26C17" width={115} height={34} fontSize={10} />
          </div>

          <h2 className="text-[44px] sm:text-[72px] md:text-[96px] leading-none text-[#F5F1E6] uppercase relative z-10 font-display ">
            FLEXIBLE PRICING
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#F5F1E6] mt-4 max-w-md mx-auto opacity-90 font-medium leading-relaxed">
            Simple, transparent pricing designed to fit businesses of every size. Select the plan that matches your goals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-8 w-full max-w-4xl px-2">
          <PricingCard
            title="STANDARD"
            subtitle="Perfect for startups and small businesses building a professional online presence."
            price="$5,995"
            color="#E8A5B3"
            features={[
              "Up to 5 Custom Website Pages",
              "Fully Responsive Across All Devices",
              "Modern & Professional Design",
              "Basic On-Page SEO Setup",
              "Speed & Performance Optimization",
              "30 Days of Free Technical Support"
            ]}
          />

          <PricingCard
            title="GROWTH"
            subtitle="Ideal for growing businesses that need advanced digital solutions seamlessly."
            price="$9,995"
            color="#D9B8FF"
            features={[
              "Up to 15 Custom Website Pages",
              "CMS Integration for Content Management",
              "Advanced SEO Optimization",
              "Performance & Speed Optimization",
              "Conversion Rate Optimization",
              "90 Days of Priority Support"
            ]}
          />
        </div>

      </div>
    </section>
  );
}
