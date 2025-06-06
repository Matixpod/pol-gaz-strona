import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="o-nas" className="py-16 lg:py-20 bg-white scroll-offset">
      <div className="container mx-auto px-4">
        
        {/* Nagłówek sekcji */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 lg:mb-6">
            O firmie POL-GAZ
          </h2>
          <p className="text-base lg:text-lg text-gray-700 max-w-3xl mx-auto">
            Poznaj historię rodzinnej firmy, która od ponad 30 lat dba o komfort 
            i bezpieczeństwo mieszkańców Szczecina i okolic
          </p>
        </div>

        {/* Główna treść - grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Lewa strona - tekst */}
          <div>
            <div className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
              Od 1994 roku w branży grzewczej
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-6">
              POL-GAZ - Twój komfort cieplny
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>POL-GAZ</strong> to serwis kotłów gazowych, który swoją działalność 
                rozpoczął w 1994 roku. Przez ponad 30 lat zbudowaliśmy pozycję najstarszego 
                i najbardziej doświadczonego serwisu kotłów w Szczecinie.
              </p>
              
              <p>
                Naszą największą dumą jest otrzymanie prestiżowego tytułu <strong>Oficjalnego 
                Ambasadora marki Beretta</strong> - wyróżnienia przyznawanego tylko nielicznym 
                firmom w Polsce, które spełniają najwyższe standardy jakości i profesjonalizmu.
              </p>
              
              <p>
                Specjalizujemy się w serwisie kotłów gazowych wszystkich renomowanych marek: 
                Beretta, Junkers, Buderus, Vaillant, Unical oraz Saunier Duval. Nasza wiedza 
                i doświadczenie pozwalają nam skutecznie diagnozować i naprawiać nawet 
                najbardziej skomplikowane awarie.
              </p>
            </div>
          </div>

          {/* Prawa strona - zdjęcie statuetki */}
          <div className="lg:order-last">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center">
              <h4 className="text-xl font-semibold text-blue-900 mb-4">
                Oficjalny Ambasador Beretta
              </h4>
              
              {/* MIEJSCE NA ZDJĘCIE STATUETKI */}
              <div className="bg-white rounded-lg p-6 shadow-lg mb-4 min-h-[300px] flex items-center justify-center">
                <div className="text-center">
                <Image
                  src="/images/statuetka-beretta.jpg"
                  alt="Statuetka Oficjalnego Ambasadora Beretta"
                  width={500}
                  height={900}
                  className="object-contain rounded-lg"
                />
                </div>

              </div>
              
              <p className="text-sm text-gray-600">
                Prestiżowe wyróżnienie otrzymywane przez nieliczne 
                firmy serwisowe w Polsce
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
