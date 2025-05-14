
export const SolutionSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">La soluzione</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700">
            Carisma è la tua assistente personale AI che ti affianca nell'acquisto dell'auto, 
            fornendoti il supporto tecnico e la sicurezza necessari per ottenere il miglior prezzo possibile.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl overflow-hidden shadow-lg">
          <div className="md:flex items-center">
            <div className="md:w-1/2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4 text-purple-900">Come funziona</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Carisma utilizza l'intelligenza artificiale avanzata per analizzare, valutare 
                  e negoziare il prezzo dell'auto al posto tuo.
                </p>
                <p className="text-lg text-gray-700">
                  La nostra tecnologia ti dà accesso alle competenze di un esperto del settore 
                  automotive direttamente dal tuo smartphone, permettendoti di prendere decisioni 
                  informate e di negoziare con confidenza.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 bg-purple-900 text-white">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4">I vantaggi</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="mr-3">✓</div>
                    <span>Risparmia fino al 15% sul prezzo di acquisto</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">✓</div>
                    <span>Evita truffe e veicoli problematici</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">✓</div>
                    <span>Acquista con la sicurezza di un esperto al tuo fianco</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">✓</div>
                    <span>Elimina lo stress della negoziazione</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
