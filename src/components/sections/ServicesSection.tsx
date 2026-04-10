import ServiceCard from '@/components/ui/ServiceCard'
import servicesData from '@/data/services.json'

export default function ServicesSection() {
  return (
    <section id="uslugi" className="py-12 lg:py-20 bg-white scroll-offset">
      <div className="container mx-auto px-4">
        
        {/* Responsive nagłówek */}
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 lg:mb-6">
            Serwis i naprawa kotłów gazowych w Szczecinie od 1994 roku
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            Świadczymy usługi serwisowe, przeglądy i naprawy awaryjne dla kotłów gazowych marek takich jak Beretta, Junkers czy Vaillant. Działamy na terenie Szczecina i okolic. Jesteśmy ambasadorem marki Beretta z doświadczeniem od 1994 roku.
          </p>

          <div className="my-6 lg:my-8 max-w-3xl mx-auto text-left">
            <h3 className="text-lg font-bold text-blue-900 mb-3">Pełen zakres usług serwisowych w Szczecinie:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Przeglądy okresowe i legalizacje</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Naprawy awaryjne (7 dni w tygodniu)</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Montaż i wymiana kotłów</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Serwis pomp ciepła</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Czyszczenie i konserwacja instalacji</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Doradztwo techniczne</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
        
        {/* Call to action section */}
        <div role="region" aria-label="Pilny kontakt serwisowy" className="mt-12 lg:mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-6 lg:p-8 text-white">
            <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">
              Potrzebujesz pomocy z kotłem?
            </h3>
            <p className="text-xl lg:text-1xl font-bold mb-3 lg:mb-2">
              Specjalizujemy się w: Beretta / Junkers / Buderus / Unical / Vaillant / Saunier Duval
            </p>
            <p className="text-blue-100 mb-4 lg:mb-6 max-w-2xl mx-auto">
              Diagnozujemy większość usterek w ciągu 1 godziny. Naprawy realizujemy z użyciem oryginalnych części zamiennych. Działamy 7 dni w tygodniu.
            </p>
            

            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:601418645"
                role="button"
                aria-label="Zadzwoń do serwisu Pol-Gaz pod numer 601 418 645"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold transition-all transform hover:scale-105"
              >
                 Zadzwoń: 601 418 645
              </a>

            </div>
          </div>
        </div>
        
      </div>
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Kompleksowe usługi serwisowe Pol-Gaz",
            "description": "Pełen zakres usług serwisowych dla kotłów i urządzeń grzewczych w Szczecinie i okolicach.",
            "numberOfItems": 6,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Przeglądy okresowe i legalizacje",
                "description": "Regularne przeglądy techniczne, czyszczenie i legalizacja kotłów gazowych zgodnie z przepisami."
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Naprawy awaryjne",
                "description": "Szybka interwencja serwisowa w przypadku awarii kotła, 7 dni w tygodniu."
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Montaż i wymiana kotłów",
                "description": "Profesjonalny montaż nowych kotłów gazowych oraz wymiana starych urządzeń."
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Serwis pomp ciepła",
                "description": "Przeglądy, naprawy i konserwacja pomp ciepła różnych marek."
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Czyszczenie i konserwacja",
                "description": "Kompleksowe czyszczenie instalacji grzewczych i konserwacja podzespołów."
              },
              {
                "@type": "ListItem",
                "position": 6,
                "name": "Doradztwo techniczne",
                "description": "Fachowe porady dotyczące doboru, eksploatacji i optymalizacji systemów grzewczych."
              }
            ]
          })
        }}
      />
    </section>
  )
}
