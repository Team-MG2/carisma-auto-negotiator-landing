
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save form data to Supabase
      const { error } = await supabase
        .from('carisma_contattaci')
        .insert([{ nome: name, mail: email, messaggio: message }]);
      
      if (error) throw error;
      
      // Show success message
      toast({
        title: "Messaggio inviato!",
        description: "Ti risponderemo il prima possibile.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Errore",
        description: "Non è stato possibile inviare il messaggio. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4 text-center">Contattaci</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
            Nome
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Il tuo nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white/10 border-purple-700 text-white placeholder:text-purple-200"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="La tua email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 border-purple-700 text-white placeholder:text-purple-200"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
            Messaggio
          </label>
          <Textarea
            id="message"
            placeholder="Come possiamo aiutarti?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-white/10 border-purple-700 text-white placeholder:text-purple-200 min-h-[100px]"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Invio in corso..."
          ) : (
            <>
              <Mail className="mr-2 h-4 w-4" /> Invia messaggio
            </>
          )}
        </Button>
        
        <p className="text-xs text-center text-purple-200 mt-2">
          Il tuo messaggio verrà inviato direttamente al nostro team.
        </p>
      </form>
    </div>
  );
};
