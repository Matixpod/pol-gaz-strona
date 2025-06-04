import Image from 'next/image'

export default function BrandsSection() {
  const brands = [
    {
      name: 'Beretta',
      logo: '/images/brands/Beretta_logo.WebP',
      description: 'Włoskie kotły kondensacyjne',
      url: 'https://beretta.pl/'
    },
    {
      name: 'Junkers',
      logo: '/images/brands/Junkers_logo.WebP',
      description: 'Niemiecka tradycja i innowacja',
      url: 'https://www.bosch-thermotechnology.com/pl/pl/bosch-thermotechnology/'
    },
    {
      name: 'Buderus',
      logo: '/images/brands/Buderus_logo.WebP',
      description: 'Niezawodność od 1731 roku',
      url: 'https://www.buderus.com/pl/pl/'
    },
    {
      name: 'Unical',
      logo: '/images/brands/Unical_logo.WebP',
      description: 'Włoska jakość i design',
      url: 'https://www.unical.pl/'
    },
    {
      name: 'Vaillant',
      logo: '/images/brands/Vaillant_logo.WebP',
      description: 'Ekologiczne rozwiązania',
      url: 'https://www.vaillant.pl/'
    },
    {
      name: 'Saunier Duval',
      logo: '/images/brands/SaunierDuval_logo.WebP',
      description: 'Francuska elegancja',
      url: 'https://www.saunierduval.pl/'
    }
  ]

  return (
    <section id="marki" className="py-12 lg:py-20 bg-gray-50 scroll-offset">
      <div className="container mx-auto px-4">
        
        {/* Responsive nagłówek */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-4 lg:mb-6">
          Obsługujemy kotły renomowanych marek
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-center text-gray-700 max-w-3xl mx-auto mb-8 lg:mb-16 px-4">
          Jesteśmy autoryzowanym serwisem najlepszych europejskich producentów 
          kotłów gazowych i urządzeń grzewczych.
        </p>
        
        {/* Responsive grid dla marek z linkami */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer block"
            >
              {/* Responsive logo container */}
              <div className="h-16 sm:h-20 lg:h-24 flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 relative overflow-hidden">
                <Image
                  src={brand.logo}
                  alt={`Logo ${brand.name} - przejdź na stronę producenta`}
                  width={120}
                  height={80}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
                />
                
                {/* Ikona zewnętrznego linku - pojawia się przy hover */}
                <div className="absolute top-1 right-1 bg-blue-900 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
              
              {/* Responsive typography */}
              <h3 className="text-sm sm:text-base lg:text-xl font-semibold text-blue-900 mb-1 sm:mb-2 group-hover:text-blue-700 transition-colors">
                {brand.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight group-hover:text-gray-800 transition-colors">
                {brand.description}
              </p>
              
              {/* Tekst zachęcający do kliknięcia */}
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-blue-900 font-medium">
                  Odwiedź stronę producenta →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Responsive sekcja Ambasadora Beretta - też z linkiem */}
        <div className="mt-8 lg:mt-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-4 sm:p-6 lg:p-8 text-center">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
            
            {/* Logo Beretta z linkiem */}
            <a
              href="https://www.berettagroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-3 sm:p-4 shadow-lg flex-shrink-0 hover:shadow-xl transition-shadow duration-300 group"
            >
              <Image
                src="/images/brands/Beretta_logo.WebP"
                alt="Logo Beretta - przejdź na stronę producenta"
                width={100}
                height={60}
                className="object-contain w-16 h-10 sm:w-20 sm:h-12 lg:w-24 lg:h-14 group-hover:scale-105 transition-transform"
                sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 100px"
              />
            </a>
            
            {/* Tekst */}
            <div className="text-blue-900 flex-1 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                Oficjalny Ambasador Beretta
              </h3>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mx-auto">
                Jesteśmy dumni, że jako jeden z niewielu serwisów w Polsce otrzymaliśmy 
                wyróżnienie i tytuł Ambasadora marki Beretta, co potwierdza najwyższe 
                standardy naszych usług oraz długoletnią współpracę z producentem.
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  )
}
