import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden scroll-offset">
      {/* Kontener dla całej sekcji */}
      <div className="diagonal-split-container">
        
        {/* Lewa strona - tekst */}
        <div className="left-section">
          <div className="container mx-auto px-4 py-8 h-full flex items-center">
            <div className="max-w-xl">
              <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Ambasador firmy Beretta
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                <span className="text-2xl lg:text-3xl block text-blue-200 mb-2">Od 1996 roku</span>
                Profesjonalny<br />
                serwis kotłów
                <span className="block text-yellow-400 mt-2">Szczecin i okolice</span>
              </h1>
              
              <div className="space-y-3 mb-6 text-blue-100">
                <p className="flex items-center text-sm lg:text-base">
                  <span className="w-6 text-yellow-400 text-lg">✓</span> 
                  Jakość i uczciwość od prawie 30 lat
                </p>
                <p className="flex items-center text-sm lg:text-base">
                  <span className="w-6 text-yellow-400 text-lg">✓</span> 
                  Szybka pomoc w nagłych awariach
                </p>
                <p className="flex items-center text-sm lg:text-base">
                  <span className="w-6 text-yellow-400 text-lg">✓</span> 
                  Specjaliści wielu renomowanych marek
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <a 
                  href="tel:601418645"
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-bold text-base transition-all transform hover:scale-105"
                >
                  Zadzwoń: 601 418 645
                </a>
                <Link 
                  href="#uslugi"
                  className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg font-bold text-base transition-all"
                >
                  Nasze usługi
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Prawa strona - zmniejszone zdjęcie */}
        <div className="right-section">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero_img_1.png"
              alt="Zespół serwisowy Pol-Gaz"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}
