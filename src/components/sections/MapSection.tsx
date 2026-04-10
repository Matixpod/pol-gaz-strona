import MapWrapper from '@/components/ui/MapWrapper'

export default function MapSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Obszar działania serwisu kotłów POL-GAZ - Szczecin i okolice 60km</h2>
            <p className="text-lg text-gray-700 mb-8">
              Świadczymy usługi serwisu kotłów gazowych w Szczecinie i promieniu <strong>60km</strong> od miasta. 
              Obszar ten obejmuje m.in. Police, Goleniów, Gryfino, Stargard, Myślibórz i Chojnę. 
              Średni czas dojazdu serwisanta do klientów w tym regionie wynosi do 90 minut.
              <span className="block mt-2 font-semibold">
                Obsługujemy region Szczecina i okolic nieprzerwanie od 1994 roku.
              </span>
            </p>
            
            {/* Lista okolicznych miejscowości */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Serwis kotłów w miejscowościach pod Szczecinem</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700 list-none p-0">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" aria-hidden="true"></span>
                  Police
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" aria-hidden="true"></span>
                  Goleniów
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" aria-hidden="true"></span>
                  Gryfino
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" aria-hidden="true"></span>
                  Stargard
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" aria-hidden="true"></span>
                  Myślibórz
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" aria-hidden="true"></span>
                  Chojna
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Uwaga:</strong> Za usługi serwisowe poza granicami Szczecina może obowiązywać dodatkowa opłata za dojazd. 
                Szczegóły kosztów dojazdu do konkretnej miejscowości należy uzgodnić telefonicznie pod numerem 601 418 645.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Godziny pracy</h3>
              <dl className="grid grid-cols-2 gap-2">
                <dt className="text-gray-700">Poniedziałek - Piątek</dt>
                <dd className="font-semibold">8:00 - 18:00</dd>
                <dt className="text-gray-700">Sobota</dt>
                <dd className="font-semibold">Na umówione zlecenia</dd>
                <dt className="text-gray-700">Niedziela</dt>
                <dd className="font-semibold">Nieczynne</dd>
              </dl>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg" role="region" aria-label="Kontakt w pilnych awariach">
                <div className="font-semibold text-blue-900">Pilne awarie</div>
                <address className="text-gray-700 not-italic">
                  Kontakt telefoniczny: <a href="tel:601418645" className="font-semibold text-blue-700 hover:underline">601 418 645</a>
                </address>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Pilną awarią kotła gazowego</strong> definiujemy sytuację całkowitej utraty ogrzewania lub ciepłej wody użytkowej w budynku, stanowiącą zagrożenie dla komfortu lub instalacji. Na takie zgłoszenia reagujemy w trybie priorytetowym.
                </p>
              </div>
            </div>
          </div>
          
          {/* Mapa przez wrapper */}
          <div className="bg-white rounded-lg shadow-xl p-2">
            <MapWrapper />
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Serwis kotłów gazowych w Szczecinie i okolicach",
            "description": "Świadczymy usługi serwisu, naprawy i przeglądów kotłów gazowych w Szczecinie i promieniu 60km od miasta. Obszar ten obejmuje m.in. Police, Goleniów, Gryfino, Stargard, Myślibórz i Chojnę. Średni czas dojazdu serwisanta do klientów w tym regionie wynosi do 90 minut.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Pol-Gaz",
              "url": "https://www.pol-gaz.com",
              "telephone": "+48601418645",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Szczecin",
                "addressCountry": "PL"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "00:00",
                  "closes": "00:00",
                  "description": "Na umówione zlecenia"
                }
              ]
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "53.4289",
                "longitude": "14.5530"
              },
              "geoRadius": "60000"
            },
            "serviceType": [
              "Serwis kotłów gazowych",
              "Naprawa pieców gazowych",
              "Przeglądy techniczne kotłów"
            ],
            "brand": "Beretta"
          })
        }}
      />
    </section>
  )
}
