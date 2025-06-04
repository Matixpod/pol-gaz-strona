import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center overflow-hidden"
      style={{ 
        marginTop: 0, 
        paddingTop: 0,
        marginBottom: 0,
        paddingBottom: 0 
      }}
    >
      {/* Mobile i Desktop layout */}
      <div className="mobile-hero-container lg:diagonal-split-container">
        
        {/* Tekstowa część */}
        <div className="hero-content-section">
          <div className="container mx-auto px-4 py-6 lg:py-12 h-full flex items-center">
            <div className="max-w-xl w-full text-center lg:text-left">
              <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Ambasador firmy Beretta
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white leading-tight">
                <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl block text-blue-200 mb-2">Od 1994 roku</span>
                Profesjonalny<br />
                serwis kotłów
                <span className="block text-yellow-400 mt-2">Szczecin i okolice</span>
              </h1>
              
              <div className="space-y-3 mb-6 lg:mb-8 text-blue-100">
                <p className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
                  <span className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
                  Jakość i uczciwość od ponad 30 lat
                </p>
                <p className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
                  <span className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
                  Szybka pomoc w nagłych awariach
                </p>
                <p className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
                  <span className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
                  Specjaliści wielu renomowanych marek
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="tel:601418645"
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold text-base lg:text-lg transition-all transform hover:scale-105 text-center"
                >
                  Zadzwoń: 601 418 645
                </a>
                <Link 
                  href="#uslugi"
                  className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold text-base lg:text-lg transition-all text-center"
                >
                  Nasze usługi
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Obrazkowa część - UKRYTA NA MOBILE, pokazana tylko na desktop */}
        <div className="hero-image-section hidden md:block">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-team.jpg"
              alt="Zespół serwisowy Pol-Gaz"
              fill
              className="object-cover object-center"
              priority
              sizes="50vw"
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}
