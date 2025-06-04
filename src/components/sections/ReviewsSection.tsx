import ShapoReviews from '@/components/ui/ShapoReviews'

export default function ReviewsSection() {
  return (
    <section id="opinie" className="py-20 bg-white scroll-offset">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">
          Opinie naszych klientów z Google
        </h2>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Prawdziwe opinie z Google My Business - sprawdź co mówią o nas klienci z <strong>31-letnim</strong> doświadczeniem
        </p>
        
        {/* Widget Shapo */}
        <div className="max-w-6xl mx-auto mb-12">
          <ShapoReviews />
        </div>
        
        {/* Statystyki i przycisk */}
        <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">5.0</div>
              <div className="text-yellow-400 text-xl mb-1">★★★★★</div>
              <div className="text-gray-600">Średnia ocen Google</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">47+</div>
              <div className="text-gray-600">Zadowolonych klientów</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">29</div>
              <div className="text-gray-600">Lat budowania zaufania</div>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="https://g.page/r/CXoLzRTb2935EAE/review" 
              target="_blank"
              className="inline-flex items-center bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Oceń nas na Google
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
