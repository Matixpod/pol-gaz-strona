import ServiceCard from '@/components/ui/ServiceCard'
import servicesData from '@/data/services.json'

export default function ServicesSection() {
  return (
    <section id="uslugi" className="py-12 lg:py-20 bg-white scroll-offset">
      <div className="container mx-auto px-4">
        
        {/* Responsive nagłówek */}
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 lg:mb-6">
            Kompleksowe usługi serwisowe
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            Oferujemy pełen zakres usług związanych z kotłami i urządzeniami grzewczymi, 
            zapewniając najwyższą jakość i szybką reakcję na zgłoszenia.
          </p>
        </div>
        
        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
        
        {/* Call to action section */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-6 lg:p-8 text-white">
            <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">
              Potrzebujesz pomocy z kotłem?
            </h3>
            <h4 className="text-xl lg:text-1xl font-bold mb-3 lg:mb-2">
              Beretta / Junkers / Buderus / Unical / Vaillant / Saunier Duval
            </h4>
            <p className="text-blue-100 mb-4 lg:mb-6 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś. Oferujemy szybką diagnostykę i profesjonalną naprawę.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:601418645"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold transition-all transform hover:scale-105"
              >
                 Zadzwoń: 601 418 645
              </a>

            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
