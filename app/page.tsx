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

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ExpertiseSection />
      <ProcessSection />
      <EngagementModels />
      <TechStack />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
