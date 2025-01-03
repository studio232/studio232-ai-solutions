import { Hero } from "@/components/Hero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ExpertiseSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
};

export default Index;