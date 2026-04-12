import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <>
      <main 
        id="home" 
        className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center overflow-hidden reset-spacing"
      >
        {/* Mobile i Desktop layout */}
        <div className="mobile-hero-container lg:diagonal-split-container">
          
          {/* Tekstowa część */}
          <div className="hero-content-section">
            <div className="container mx-auto px-4 py-6 lg:py-12 h-full flex items-center">
              <div className="max-w-xl w-full text-center lg:text-left">
                <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Wojciech Podporski - Ambasador marki Beretta
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white leading-tight">
                  {/* <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl block text-blue-200 mb-2">Od 1994 roku</span> */}
                  Serwis, naprawa i montaż kotłów gazowych
                  <span className="block text-yellow-400 mt-2">Szczecin i okolice</span>
                  <span className="block text-blue-200 text-sm sm:text-base lg:text-lg xl:text-xl mt-2 font-normal">
                    Specjalizacja w markach Beretta, Vaillant, Junkers
                  </span>
                </h1>
                
                <ul className="space-y-3 mb-6 lg:mb-8 text-blue-100 list-none pl-0">
                  <li className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
                    <span role="img" aria-label="Zaznaczone" className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
                    Doświadczenie od 1994 roku. Wykonano ponad 37 000 napraw, montaży i przeglądów.
                  </li>
                  <li className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
                    <span role="img" aria-label="Zaznaczone" className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
                    Wymiana i montaż nowych pieców gazowych. Profesjonalne doradztwo.
                  </li>
                  <li className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
                    <span role="img" aria-label="Zaznaczone" className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
                    Interwencja awaryjna w Szczecinie w ciągu 1-3 godzin. Telefon całodobowy.
                  </li>
                  <li className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
                    <span role="img" aria-label="Zaznaczone" className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
                    Autoryzowany serwisant kotłów Beretta. Obsługa 6 wiodących marek.
                  </li>
                </ul>

                <div className="mb-6 lg:mb-8 text-blue-100 text-sm lg:text-base">
                  <p className="text-center lg:text-left">
                    <strong>Obsługiwane marki:</strong> 6 wiodących marek: Beretta (autoryzacja), Vaillant, Junkers, Buderus, Unical, Saunier Duval.
                    <br className="hidden sm:inline" />
                    <strong>Strefa działania:</strong> Szczecin oraz gminy do 60 km od centrum miasta.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="tel:601418645"
                    className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold text-base lg:text-lg transition-all transform hover:scale-105 text-center"
                  >
                    Zadzwoń: 601 418 645
                  </a>
                  <nav aria-label="Skróty do sekcji strony">
                    <Link 
                      href="#uslugi"
                      className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold text-base lg:text-lg transition-all text-center flex items-center justify-center h-full w-full sm:w-auto"
                    >
                      Nasze usługi
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          
          {/* Obrazkowa część - UKRYTA NA MOBILE, pokazana tylko na desktop */}
          <div className="hero-image-section hidden md:block">
            <div className="relative w-full h-full">
              <Image
                src="/images/hero-team.WebP"
                alt="Zespół serwisowy Pol-Gaz"
                fill
                className="object-cover object-center"
                priority
                sizes="50vw"
              />
            </div>
          </div>
          
        </div>
      </main>
    </>
  )
}
