export default function ContactSection() {
  return (
    <section id="kontakt" className="py-20 bg-blue-900 text-white scroll-offset">
      <div className="container mx-auto px-4">
        {/* Usunięto grid lg:grid-cols-2 gap-12 - teraz tylko jedna kolumna */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Skontaktuj się z nami</h2>
          <p className="text-xl text-blue-100 mb-12">
            Potrzebujesz serwisu kotła, konsultacji lub wyceny? Skontaktuj się z nami już dziś.
            Rodzinny serwis z prawie 30-letnim doświadczeniem jest do Twojej dyspozycji.
          </p>
          
          {/* Dane kontaktowe w środku */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-800 rounded-lg p-8 hover:bg-blue-700 transition-colors">
              <div className="bg-blue-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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
              <div className="bg-blue-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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
              <div className="bg-blue-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Godziny pracy</h3>
              <p className="text-blue-100 mb-2">Pon-Pt: 8:00 - 18:00</p>
              <p className="text-blue-100 text-sm">Sobota: Na umówione zlecenia</p>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
