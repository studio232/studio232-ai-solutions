import { Hero } from "@/components/Hero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <Hero />
      <ExpertiseSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
};

export default Index;