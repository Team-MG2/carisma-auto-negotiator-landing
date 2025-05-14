
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@supabase/supabase-js";

interface PricingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const PricingModal = ({ open, onOpenChange }: PricingModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save email to Supabase
      const { error } = await supabase
        .from('carisma_emails')
        .insert([{ email }]);
      
      if (error) throw error;
      
      toast({
        title: "Grazie per il tuo interesse!",
        description: "Ti invieremo un'email quando i nostri piani saranno disponibili.",
      });
      
      setEmail("");
      onOpenChange(false);
    } catch (error) {
      console.error("Error saving email:", error);
      toast({
        title: "Si è verificato un errore",
        description: "Non è stato possibile salvare la tua email. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Piani di acquisto in arrivo</DialogTitle>
        </DialogHeader>
        <div className="p-4 md:p-6">
          <div className="mb-8">
            <div className="bg-purple-100 text-purple-800 p-4 rounded-lg mb-6">
              <p className="font-medium">🚀 Siamo in fase di lancio!</p>
              <p className="mt-2">Stiamo lavorando al prossimo roll-out di Carisma.</p>
            </div>
            <p className="text-gray-700">
              Lascia la tua email e ti ricontatteremo appena i nostri piani saranno disponibili. 
              <span className="font-bold text-purple-700"> Riceverai uno sconto del 10%</span> sul tuo primo acquisto.
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="La tua email"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Invio in corso..." : "Ottieni il 10% di sconto"}
              </Button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                Non condivideremo mai la tua email con terze parti.
              </p>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
