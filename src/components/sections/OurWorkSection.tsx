import React from "react";
import { ArrowRight } from "lucide-react";
import { ScallopedBadge, EightPointStar, EightPetalFlower } from "@/components/ui/ShapesAndBadges";
import { useBookCall } from "@/context/BookCallContext";

const ProjectCard = ({
  number,
  title,
  description,
  color,
  imageSrc,
  decorations
}: {
  number: string;
  title: string;
  description: string;
  color: string;
  imageSrc: string;
  decorations: React.ReactNode;
}) => {
  const { openModal } = useBookCall();
  return (
  <div className="w-full mb-16 sm:mb-20 relative">
    {/* Folder Tab */}
    <div className="w-32 md:w-40 h-10 md:h-12 ml-12 sm:ml-20 md:ml-24 rounded-t-xl flex items-center justify-center relative z-10" style={{ backgroundColor: color }}>
      <div className="absolute -left-3 top-0 w-6 h-full skew-x-[-20deg] rounded-tl-xl" style={{ backgroundColor: color }}></div>
      <div className="absolute -right-3 top-0 w-6 h-full skew-x-[20deg] rounded-tr-xl" style={{ backgroundColor: color }}></div>

      <span className="text-white font-sans text-[10px] md:text-xs font-bold tracking-widest z-10 uppercase">
        <span className="italic mr-1">//</span> {number} Project
      </span>
    </div>

    {/* Folder Body */}
    <div className="w-full rounded-2xl rounded-tl-[3rem] p-6 sm:p-8 md:p-12 relative overflow-visible shadow-2xl flex flex-col md:flex-row gap-8 items-center" style={{ backgroundColor: color }}>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none rounded-2xl" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      {/* Text Content */}
      <div className="flex-1 text-white relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <span className="font-sans text-xs uppercase tracking-wider opacity-90 font-semibold">Mar 12, 2026</span>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase leading-tight mb-4 font-display font-black">
          {title}
        </h3>
        <p className="font-sans text-sm md:text-base opacity-90 max-w-md mb-8 leading-relaxed font-medium">
          {description}
        </p>

        <button onClick={openModal} className="inline-flex items-center gap-2 font-sans font-bold text-white uppercase tracking-wider text-xs md:text-sm border-b-2 border-white pb-1 hover:opacity-80 transition-opacity cursor-pointer">
          VIEW PROJECT <ArrowRight size={16} strokeWidth={3} />
        </button>
      </div>

      {/* Image Content */}
      <div className="flex-1 w-full max-w-lg relative z-10">
        <div className="bg-white p-3 shadow-2xl rounded-sm transform rotate-1 hover:rotate-0 transition-transform duration-300">
          <img src={imageSrc} alt={title} className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover rounded-xs" />
        </div>

        {/* Absolute Decorations */}
        {decorations}
      </div>
    </div>
  </div>
  );
};

export function OurWorkSection() {
  return (
    <section id="work" className="bg-[#3B001B] relative py-20 md:py-28 lg:py-32 overflow-hidden px-4 sm:px-6 md:px-8 w-full">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Header */}
      <div className="relative mb-20 md:mb-24 max-w-7xl mx-auto flex flex-col items-center">

        <div className="absolute left-6 md:left-20 top-0 hidden md:block">
          <span className="font-sans text-white text-xs sm:text-sm italic transform -rotate-12 inline-block font-semibold">Our Project</span>
          <svg className="ml-2 inline-block transform translate-y-2" width="44" height="22" viewBox="0 0 50 24" fill="none">
            <path d="M 4 16 Q 24 2 44 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 38 6 L 44 14 L 34 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        <h2 className="text-[52px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-none text-white uppercase relative z-10 font-display ">
          OUR WORK
          {/* Portfolio Badge */}
          <div className="absolute -top-6 md:-top-10 left-1/2 transform -translate-x-1/2 -rotate-12 z-20">
            <ScallopedBadge text="WORKS" fill="#F26C17" width={140} height={38} fontSize={11} />
          </div>
        </h2>
      </div>

      {/* Projects Container */}
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Project 1 */}
        <ProjectCard
          number="01"
          title="E-COMMERCE WEBSITE DEVELOPMENT"
          description="Built a high-converting online store with secure payment integration and seamless checkout flow."
          color="#A0325A"
          imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
          decorations={
            <>
              <div className="absolute -left-10 -bottom-8 z-20 transform -rotate-12 drop-shadow-md">
                <EightPetalFlower size={88} fill="#E8A5B3" stroke="#3B001B" strokeWidth={4}>
                  <circle cx="35" cy="42" r="4.5" fill="#3B001B" />
                  <circle cx="65" cy="42" r="4.5" fill="#3B001B" />
                  <path d="M 35 58 Q 50 72 65 58" stroke="#3B001B" strokeWidth="4" strokeLinecap="round" fill="none" />
                </EightPetalFlower>
              </div>
              <div className="absolute -right-6 -top-10 z-20 transform rotate-12 drop-shadow-md">
                <svg width="76" height="76" viewBox="0 0 100 100" fill="#F26C17">
                  <path d="M 50 8 C 76 8 92 24 92 50 C 92 76 76 92 50 92 C 24 92 8 76 8 50 C 8 24 24 8 50 8 Z" stroke="#3B001B" strokeWidth="4" />
                  <path d="M 32 40 L 40 50 L 32 60" stroke="#3B001B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M 68 40 L 60 50 L 68 60" stroke="#3B001B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            </>
          }
        />

        {/* Project 2 */}
        <ProjectCard
          number="02"
          title="CORPORATE BRANDING PROJECT"
          description="Created a complete brand identity including logo color system and guidelines for international expansion."
          color="#526123"
          imageSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=600&auto=format&fit=crop"
          decorations={
            <>
              <div className="absolute -left-8 -bottom-6 z-20">
                <EightPointStar size={72} color="#E8A5B3" />
              </div>
              <div className="absolute -right-6 top-4 z-20 drop-shadow-md">
                <svg width="76" height="76" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="44" fill="#D9B8FF" stroke="#3B001B" strokeWidth="4" />
                  <circle cx="34" cy="38" r="4.5" fill="#3B001B" />
                  <circle cx="66" cy="38" r="4.5" fill="#3B001B" />
                  <path d="M 34 60 Q 50 74 66 60" stroke="#3B001B" strokeWidth="4" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </>
          }
        />

        {/* Project 3 */}
        <ProjectCard
          number="03"
          title="SOCIAL MEDIA MARKETING CAMPAIGN"
          description="Managed content strategy, viral creative campaigns, and ad spend across major social platforms."
          color="#F26C17"
          imageSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop"
          decorations={
            <>
              <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-20 drop-shadow-md">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="#C1E1C1">
                  <path d="M 50 8 C 76 8 92 24 92 50 C 92 76 76 92 50 92 C 24 92 8 76 8 50 C 8 24 24 8 50 8 Z" stroke="#3B001B" strokeWidth="4" />
                  <circle cx="34" cy="38" r="4.5" fill="#3B001B" />
                  <circle cx="66" cy="38" r="4.5" fill="#3B001B" />
                  <path d="M 35 58 Q 50 70 65 58" stroke="#3B001B" strokeWidth="4" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <div className="absolute -right-6 -top-6 z-20">
                <EightPointStar size={72} color="#A0325A" />
              </div>
            </>
          }
        />

        {/* Project 4 */}
        <ProjectCard
          number="04"
          title="SEO OPTIMIZATION CAMPAIGN"
          description="Improved search rankings, organic traffic, and lead acquisition for growing tech business."
          color="#2D7864"
          imageSrc="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop"
          decorations={
            <>
              <div className="absolute -left-12 bottom-0 z-20 transform -rotate-12 drop-shadow-md">
                <EightPetalFlower size={86} fill="white" stroke="#3B001B" strokeWidth={4}>
                  <circle cx="50" cy="50" r="14" fill="#3B001B" />
                </EightPetalFlower>
              </div>
              <div className="absolute -right-6 -top-6 z-20 transform rotate-12">
                <EightPointStar size={78} color="#869DFF" />
              </div>
            </>
          }
        />

      </div>
    </section>
  );
}
