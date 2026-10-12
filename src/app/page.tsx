"use client";

import { BookCallProvider } from "@/context/BookCallContext";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { OurWorkSection } from "@/components/sections/OurWorkSection";
import { ReviewsAndCTASection } from "@/components/sections/ReviewsAndCTASection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQAndContactSection } from "@/components/sections/FAQAndContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <BookCallProvider>
      <main className="min-h-screen">
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <OurWorkSection />
        <ReviewsAndCTASection />
        <PricingSection />
        <FAQAndContactSection />
        <Footer />
      </main>
    </BookCallProvider>
  );
}
