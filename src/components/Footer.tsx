
import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">Carisma</h2>
            <p className="text-purple-200 mt-2">L'AI che ti aiuta a negoziare l'acquisto dell'auto</p>
          </div>
          
          <div className="md:w-1/2 lg:w-2/5">
            <ContactForm />
          </div>
        </div>
        
        <div className="mt-8 border-t border-purple-800 pt-8 text-sm text-center text-purple-300">
          <p>© {new Date().getFullYear()} Carisma. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};
