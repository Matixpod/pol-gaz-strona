import Image from 'next/image'

export default function BrandsSection() {
  const brands = [
    {
      name: 'Beretta',
      logo: '/images/brands/Beretta_logo.png',
      description: 'Włoskie kotły kondensacyjne'
    },
    {
      name: 'Junkers',
      logo: '/images/brands/Junkers_logo.png',
      description: 'Niemiecka tradycja i innowacja'
    },
    {
      name: 'Buderus',
      logo: '/images/brands/Buderus_logo.png',
      description: 'Niezawodność od 1731 roku'
    },
    {
      name: 'Unical',
      logo: '/images/brands/Unical_logo.png',
      description: 'Włoska jakość i design'
    },
    {
      name: 'Vaillant',
      logo: '/images/brands/Vaillant_logo.png',
      description: 'Ekologiczne rozwiązania'
    },
    {
      name: 'Saunier Duval',
      logo: '/images/brands/SaunierDuval_logo.png',
      description: 'Francuska elegancja'
    }
  ]

  return (
    <section id="marki" className="py-20 bg-gray-50 scroll-offset">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">
          Obsługujemy kotły renomowanych marek
        </h2>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Jesteśmy autoryzowanym serwisem najlepszych europejskich producentów 
          kotłów gazowych i urządzeń grzewczych.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <div 
              key={brand.name} 
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="h-24 flex items-center justify-center mb-4 relative overflow-hidden">
                <Image
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  width={120}
                  height={80}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{brand.name}</h3>
              <p className="text-sm text-gray-600">{brand.description}</p>
            </div>
          ))}
        </div>

        {/* Sekcja wyróżnienia Ambasadora Beretta */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <Image
                src="/images/brands/Beretta_logo.png"
                alt="Logo Beretta"
                width={100}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="text-blue-900">
              <h3 className="text-2xl font-bold mb-2">Oficjalny Ambasador Beretta</h3>
              <p className="text-lg">
                Jesteśmy dumni, że jako jeden z niewielu serwisów w Polsce otrzymaliśmy wyróżnienie i tytuł Ambasadora marki Beretta, co potwierdza najwyższe standardy naszych usług oraz długoletnią współpracę z producentem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
