
import { Button } from "@/components/ui/button";

interface FeaturesSectionProps {
  onPricingClick: () => void;
}

export const FeaturesSection = ({ onPricingClick }: FeaturesSectionProps) => {
  const features = [
    {
      id: 1,
      title: "Analisi della documentazione",
      description: "Carisma analizza la documentazione online per capire la storia del veicolo e scoprire possibili incidenti non dichiarati.",
      icon: "📄"
    },
    {
      id: 2,
      title: "Valutazione in tempo reale",
      description: "Raccoglie video e audio della macchina in moto durante la tua visita per capirne lo stato di salute in quel momento.",
      icon: "🎥"
    },
    {
      id: 3,
      title: "Negoziazione assistita",
      description: "Gestisce la negoziazione del prezzo via messaggio o chiamata dopo la visita al veicolo col proprietario.",
      icon: "💬"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Caratteristiche principali</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-xl shadow-md p-8 transition-transform hover:scale-105">
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Pronto a risparmiare sul tuo prossimo acquisto?</h3>
          <Button 
            onClick={onPricingClick} 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg"
          >
            Vedi i piani d'acquisto
          </Button>
        </div>
      </div>
    </div>
  );
};
