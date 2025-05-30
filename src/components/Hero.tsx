
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onPricingClick: () => void;
}

export const Hero = ({ onPricingClick }: HeroProps) => {
  return (
    <div className="relative bg-purple-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Carisma
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            L'AI che ti aiuta a negoziare l'acquisto dell'auto
          </p>
          <p className="text-lg md:text-xl mb-12 opacity-90">
            Riduci il prezzo della tua prossima auto di seconda mano in tranquillità, senza bisogno di esperienza negoziale
          </p>
          <Button 
            onClick={onPricingClick} 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 h-auto"
          >
            Vedi i piani d'acquisto <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
