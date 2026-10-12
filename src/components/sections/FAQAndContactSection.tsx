import React from "react";
import { ArrowRight } from "lucide-react";
import { ScallopedBadge } from "@/components/ui/ShapesAndBadges";
import { useBookCall } from "@/context/BookCallContext";

const FAQBubble = ({ color, alignRight = false, textColor = "#3B001B", question, answer }: { color: string; alignRight?: boolean; textColor?: string; question: string; answer: string }) => (
  <div className={`relative w-full max-w-sm md:max-w-md ${alignRight ? 'ml-auto' : 'mr-auto'} mb-14 shadow-lg transition-transform hover:-translate-y-1 duration-300`}>
    {/* Bubble Body */}
    <div className="p-6 md:p-8 rounded-2xl" style={{ backgroundColor: color }}>
      <h4 className="font-display  text-base md:text-lg uppercase mb-3 leading-tight" style={{ color: textColor }}>
        {question}
      </h4>
      <p className="font-sans text-xs md:text-sm font-medium leading-relaxed opacity-95" style={{ color: textColor }}>
        {answer}
      </p>
    </div>

    {/* Bubble Tail */}
    <div className={`absolute -bottom-5 ${alignRight ? 'right-10' : 'left-10'}`}>
      <svg width="36" height="24" viewBox="0 0 36 24" fill={color}>
        <path d={alignRight ? "M 8 0 L 36 0 L 32 22 Z" : "M 0 0 L 28 0 L 4 22 Z"} />
      </svg>
    </div>
  </div>
);

const HandArrow = ({ reverse = false }: { reverse?: boolean }) => {
  return (
    <div className={`absolute top-1/2 transform -translate-y-1/2 w-32 hidden md:block z-0 ${reverse ? 'left-[-110px]' : 'right-[-110px]'}`}>
      <svg width="110" height="50" viewBox="0 0 110 50" fill="none">
        {reverse ? (
          <>
            <path d="M 10 10 Q 55 5 100 25" stroke="#3B001B" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
            <path d="M 90 25 L 100 25 L 93 17" stroke="#3B001B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </>
        ) : (
          <>
            <path d="M 100 10 Q 55 5 10 25" stroke="#3B001B" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
            <path d="M 17 17 L 10 25 L 20 25" stroke="#3B001B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </>
        )}
      </svg>
    </div>
  );
};

export function FAQAndContactSection() {
  const { openModal } = useBookCall();
  const faqs = [
    {
      question: "HOW DO I GET STARTED WITH YOUR AGENCY?",
      answer: "Simply contact us for a free consultation, and we'll discuss your goals and recommend the best tailored digital solutions for your business.",
      color: "#C1E1C1",
      alignRight: true
    },
    {
      question: "WHAT SERVICES DO YOU OFFER?",
      answer: "We offer end-to-end web development, digital branding, social media marketing, SEO optimization, and strategic performance growth campaigns.",
      color: "#526123",
      textColor: "#F5F1E6",
      alignRight: false
    },
    {
      question: "HOW LONG DOES A TYPICAL PROJECT TAKE?",
      answer: "Most custom website projects take between 2 to 6 weeks depending on scope, features, content readiness, and client feedback cycles.",
      color: "#D9B8FF",
      alignRight: true
    },
    {
      question: "DO YOU PROVIDE ONGOING SUPPORT?",
      answer: "Yes! All our packages include dedicated post-launch support, speed maintenance, technical updates, and strategy check-ins.",
      color: "#A0325A",
      textColor: "#F5F1E6",
      alignRight: false
    }
  ];

  return (
    <section id="contact" className="bg-[#F5F1E6] relative pt-20 md:pt-28 lg:pt-32 overflow-hidden border-t border-[#3B001B]/10">
      {/* Background doodles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #3B001B 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 mb-20 md:mb-28">
        {/* Header */}
        <div className="relative mb-16 md:mb-20 inline-block">
          <h2 className="text-[52px] sm:text-[76px] md:text-[96px] leading-[0.88] text-[#3B001B] uppercase tracking-tighter font-display ">
            QUICK<br />ANSWERS?
          </h2>
          {/* QUESTIONS? Badge */}
          <div className="absolute top-[40%] right-0 md:-right-8 transform translate-x-1/2 -translate-y-1/2 -rotate-12 z-20">
            <ScallopedBadge text="QUESTIONS?" fill="#869DFF" width={130} height={36} fontSize={10} />
          </div>
        </div>

        {/* FAQ Bubbles */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
          {faqs.map((faq, index) => (
            <div key={index} className="relative w-full">
              <FAQBubble
                question={faq.question}
                answer={faq.answer}
                color={faq.color}
                textColor={faq.textColor}
                alignRight={faq.alignRight}
              />
              <HandArrow reverse={faq.alignRight} />
            </div>
          ))}
        </div>
      </div>

      {/* Contact Banner */}
      <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[580px] relative z-10">

        {/* Left Side: Blue Banner */}
        <div className="flex-1 bg-[#869DFF] p-8 sm:p-12 md:p-20 flex flex-col justify-center relative">

          {/* BUILD & GROW Badge */}
          <div className="absolute top-8 left-8 sm:top-12 sm:left-12 transform -rotate-12 z-20">
            <ScallopedBadge text="BUILD & GROW" fill="#F26C17" width={135} height={36} fontSize={10} />
          </div>

          <h2 className="text-[48px] sm:text-[68px] md:text-[88px] leading-[0.88] text-white uppercase tracking-tighter mb-6 relative z-10 mt-8 font-display ">
            LET'S BUILD<br />TOGETHER
          </h2>
          <p className="font-sans text-xs sm:text-sm text-white opacity-95 max-w-sm mb-8 font-medium leading-relaxed">
            Let's Build Together and turn your ambitious ideas into high-converting digital solutions. We collaborate closely with you at every step.
          </p>

          <button
            onClick={openModal}
            className="bg-white text-[#3B001B] px-8 py-4 font-sans font-bold uppercase text-xs tracking-widest inline-flex items-center gap-2 w-max hover:bg-[#3B001B] hover:text-white transition-colors rounded-sm shadow-md cursor-pointer"
          >
            BOOK A FREE CALL <ArrowRight size={16} strokeWidth={3} />
          </button>
        </div>

        {/* Right Side: Photo */}
        <div className="flex-1 relative overflow-hidden h-[360px] lg:h-full bg-[#f4e616]">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop"
            className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
            alt="Creative Professional"
          />

          {/* Red Lightning Bolt */}
          <div className="absolute top-10 left-10 transform -rotate-12 drop-shadow-md">
            <svg width="50" height="70" viewBox="0 0 60 80" fill="none">
              <path d="M 36 4 L 8 42 L 28 42 L 18 76 L 52 34 L 32 34 Z" fill="white" stroke="#e11d48" strokeWidth="3" strokeLinejoin="miter" />
            </svg>
          </div>

          {/* Doodles Top Right */}
          <div className="absolute top-8 right-12 flex items-start gap-4">
            <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
              <path d="M 5 25 L 25 5 M 10 28 L 28 10 M 2 18 L 18 2" stroke="#3B001B" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform rotate-12">
              <path d="M12 2 L12 22 M2 12 L22 12 M5 5 L19 19 M5 19 L19 5" stroke="#3B001B" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Center overlapping circular badge */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 hidden lg:block">
          <div className="w-28 h-28 rounded-full bg-[#D9B8FF] border-2 border-[#3B001B] flex items-center justify-center p-2 shadow-2xl animate-[spin_25s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path id="circleBadgeContact" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
              <text className="font-sans font-bold text-[8px] fill-[#3B001B] uppercase tracking-widest">
                <textPath href="#circleBadgeContact" startOffset="0%">
                  WE BUILD BRANDS • WEBSITES & GROWTH •
                </textPath>
              </text>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
