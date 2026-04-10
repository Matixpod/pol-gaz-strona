export default function ContactSection() {
  return (
    <section id="kontakt" aria-label="Dane kontaktowe serwisu kotłów POL-GAZ" className="py-20 bg-blue-900 text-white scroll-offset">
      <div className="container mx-auto px-4">
        {/* Usunięto grid lg:grid-cols-2 gap-12 - teraz tylko jedna kolumna */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Kontakt do serwisu kotłów POL-GAZ w Szczecinie</h2>
          <p className="text-xl text-blue-100 mb-12">
            <strong>Pol-Gaz</strong> to rodzinny, autoryzowany serwis kotłów gazowych działający w <strong>Szczecinie od 1994 roku</strong>. Specjalizujemy się w serwisie i naprawie pieców gazowych, w tym marki <strong>Beretta</strong>. Oferujemy przeglądy techniczne, naprawy awaryjne oraz konsultacje. Obsługujemy klientów indywidualnych w Szczecinie i okolicach. Wojciech Podporski, prowadzący serwis, jest <strong>Ambasadorem marki Beretta</strong>, co gwarantuje ekspercką wiedzę techniczną.
            <a href="/#uslugi" className="text-yellow-300 underline hover:text-yellow-200 ml-1">Zobacz szczegóły naszych usług serwisowych</a>.
          </p>
          
          {/* Dane kontaktowe w środku */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-800 rounded-lg p-8 hover:bg-blue-700 transition-colors">
              <div className="bg-blue-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center" aria-hidden="true">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Telefon</h3>
              <p className="text-blue-100 text-lg mb-4">601 418 645</p>
              <a 
                href="tel:601418645"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Zadzwoń teraz
              </a>
            </div>
            
            <div className="bg-blue-800 rounded-lg p-8 hover:bg-blue-700 transition-colors">
              <div className="bg-blue-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center" aria-hidden="true">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100 text-lg mb-4">polgazszczecin@wp.pl</p>
              <a 
                href="mailto:polgazszczecin@wp.pl"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Napisz email
              </a>
            </div>
            
            <div className="bg-blue-800 rounded-lg p-8 hover:bg-blue-700 transition-colors">
              <div className="bg-blue-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center" aria-hidden="true">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Godziny pracy</h3>
              <p className="text-blue-100 mb-2">Pon-Pt: 8:00 - 18:00</p>
              <p className="text-blue-100 text-sm">Sobota: Na umówione zlecenia</p>
            </div>
          </div>

          {/* Sekcja FAQ */}
          <div className="mt-16 text-left">
            <h3 className="text-3xl font-bold mb-8 text-center">Najczęściej zadawane pytania (FAQ)</h3>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div>
                <h4 className="text-xl font-semibold mb-2">Jakie są godziny pracy serwisu Pol-Gaz w Szczecinie?</h4>
                <p className="text-blue-100">Serwis Pol-Gaz w Szczecinie jest dostępny od poniedziałku do piątku w godzinach 8:00 - 18:00. W soboty przyjmujemy zlecenia na umówione wizyty.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Na jakim numerze telefonu mogę zgłosić awarię kotła gazowego w Szczecinie?</h4>
                <p className="text-blue-100">Awarię kotła gazowego w Szczecinie i okolicach można zgłosić pod numerem telefonu <strong>601 418 645</strong>. Oferujemy szybką interwencję w nagłych przypadkach.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Czy serwis Pol-Gaz naprawia kotły Beretta w Szczecinie?</h4>
                <p className="text-blue-100">Tak, serwis Pol-Gaz w Szczecinie specjalizuje się w naprawie i serwisie kotłów gazowych marki <strong>Beretta</strong>. Wojciech Podporski, prowadzący serwis, jest <strong>Ambasadorem marki Beretta</strong>.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Ile kosztuje przegląd kotła gazowego w Szczecinie?</h4>
                <p className="text-blue-100">Koszt przeglądu okresowego kotła gazowego w Szczecinie zaczyna się od około <strong>150 zł netto</strong>. Cena zależy od modelu kotła i zakresu prac. Dokładną wycenę można uzyskać telefonicznie.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Jak długo czeka się na naprawę awaryjną kotła w Szczecinie?</h4>
                <p className="text-blue-100">Staramy się reagować na awarie kotła w Szczecinie w ciągu <strong>2-4 godzin</strong> od zgłoszenia w godzinach pracy (pon-pt 8-18). W przypadku pilnych awarii możliwy jest dojazd w sobotę.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* JSON-LD dla danych kontaktowych */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "contactType": "customer service",
            "telephone": "+48 601 418 645",
            "email": "polgazszczecin@wp.pl",
            "availableLanguage": "Polish",
            "areaServed": "PL",
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            },
            "description": "Serwis kotłów gazowych w Szczecinie. Kontakt telefoniczny i mailowy w sprawach serwisu, napraw awaryjnych i przeglądów technicznych."
          })
        }}
      />
    </section>
  )
}
