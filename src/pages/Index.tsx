
import { useState } from "react";
import { PricingModal } from "@/components/PricingModal";
import { Hero } from "@/components/Hero";
import { SolutionSection } from "@/components/SolutionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [pricingModalOpen, setPricingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Hero onPricingClick={() => setPricingModalOpen(true)} />
      <SolutionSection />
      <FeaturesSection onPricingClick={() => setPricingModalOpen(true)} />
      <Footer />
      <PricingModal open={pricingModalOpen} onOpenChange={setPricingModalOpen} />
    </div>
  );
};

export default Index;
