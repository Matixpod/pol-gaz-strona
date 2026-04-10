import Script from 'next/script'

export default function ReviewsSection() {
  return (
    <section id="opinie" className="py-20 bg-gray-50 scroll-offset">
      <div className="container mx-auto px-4">
        {/* SEO Optymalizacja Nagłówka */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-8">
          Opinie klientów o serwisie kotłów POL-GAZ
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 text-lg">
          Zaufały nam tysiące klientów ze Szczecina i okolic. Od 1994 roku budujemy naszą reputację na rzetelności, profesjonalizmie i szybkim czasie reakcji. Sprawdź, co mówią o nas klienci.
        </p>

        {/* Shapo Widget - zaimplementowany asynchronicznie, aby nie blokować renderowania */}
        <div className="w-full max-w-6xl mx-auto mt-16 min-h-[400px]">
          <div id="shapo-widget-4c3efbbd82f017e5593f"></div>
          <Script 
            id="shapo-embed-js" 
            src="https://cdn.shapo.io/js/embed.js" 
            strategy="lazyOnload" 
          />
        </div>
      </div>
    </section>
  )
}
