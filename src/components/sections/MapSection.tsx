import MapWrapper from '@/components/ui/MapWrapper'

export default function MapSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Obszar działania</h2>
            <p className="text-lg text-gray-700 mb-8">
              Świadczymy usługi w Szczecinie i promieniu <strong>60km</strong> od miasta. 
              Obejmujemy swoim zasięgiem również okoliczne miejscowości, 
              zapewniając szybki dojazd i profesjonalną obsługę.
            </p>
            
            {/* Lista okolicznych miejscowości */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Obsługujemy m.in.:</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Police
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Goleniów
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Gryfino
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Stargard
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Myślibórz
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Chojna
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Godziny pracy</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-700">Poniedziałek - Piątek</div>
                <div className="font-semibold">8:00 - 18:00</div>
                <div className="text-gray-700">Sobota</div>
                <div className="font-semibold">Na umówione zlecenia</div>
                <div className="text-gray-700">Niedziela</div>
                <div className="font-semibold">Nieczynne</div>
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold text-blue-900">Pilne awarie</div>
                <div className="text-gray-700">Kontakt telefoniczny: 601 418 645</div>
              </div>
            </div>
          </div>
          
          {/* Mapa przez wrapper */}
          <div className="bg-white rounded-lg shadow-xl p-2">
            <MapWrapper />
          </div>
        </div>
      </div>
    </section>
  )
}
