
export const ProblemSection = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Il problema</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <p className="text-lg text-gray-700 mb-6">
              Molti di noi, soprattutto alla prima esperienza di acquisto di un'auto, si trovano in difficoltà:
            </p>
            
            <ul className="space-y-4 text-gray-700 mb-6">
              <li className="flex">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-600 font-bold text-sm">✓</span>
                </div>
                <span className="text-lg">
                  <strong>Mancanza di competenze tecniche</strong> per valutare correttamente il valore di un veicolo
                </span>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-600 font-bold text-sm">✓</span>
                </div>
                <span className="text-lg">
                  <strong>Difficoltà a mantenere il "sangue freddo"</strong> durante la fase di trattativa
                </span>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-600 font-bold text-sm">✓</span>
                </div>
                <span className="text-lg">
                  <strong>Perdita di opportunità di risparmio</strong> per inesperienza nella negoziazione
                </span>
              </li>
            </ul>
            
            <p className="text-lg text-gray-700">
              Questi ostacoli si traducono spesso in un prezzo d'acquisto più elevato del necessario e in una scarsa fiducia nelle proprie decisioni.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
