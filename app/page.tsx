"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProcessSection from "@/components/ProcessSection";
import EngagementModels from "@/components/EngagementModels";
import TechStack from "@/components/TechStack";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openModal = () => setIsContactModalOpen(true);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar onContactClick={openModal} />
      <HeroSection onContactClick={openModal} />
      <ProblemSection />
      <SolutionSection />
      <ExpertiseSection />
      <ProcessSection />
      <EngagementModels onContactClick={openModal} />
      <TechStack />
      <TestimonialsSection />
      <CTASection onContactClick={openModal} />
      <Footer />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  );
}
