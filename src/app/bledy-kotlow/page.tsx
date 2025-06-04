'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import errorCodes from '@/data/error-codes.json'

// Typy dla TypeScript
interface ErrorCode {
  Kod_błędu: string
  Opis_błędu: string
  Rozwiązanie: string
}

interface ErrorCodesData {
  [brand: string]: ErrorCode[]
}

const brandColors: { [key: string]: string } = {
  "Beretta": "from-green-400 to-green-600",
  "Junkers": "from-purple-600 to-purple-700", 
  "Buderus": "from-blue-600 to-blue-700",
  "Unical": "from-green-600 to-green-700",
  "Vaillant": "from-gray-500 to-gray-600",
  "Saunier Duval": "from-red-600 to-red-700"
}

export default function BledyKotlowPage() {
  const [selectedBrand, setSelectedBrand] = useState<string>('wszystkie')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const brands = Object.keys(errorCodes as ErrorCodesData)

  // Filtrowanie błędów na podstawie wybranej marki i wyszukiwania
  const filteredErrors = useMemo(() => {
    const data = errorCodes as ErrorCodesData
    let filtered: { brand: string; error: ErrorCode }[] = []

    // Wybierz marki do wyświetlenia
    const brandsToShow = selectedBrand === 'wszystkie' ? brands : [selectedBrand]

    // Dodaj błędy z wybranych marek
    brandsToShow.forEach(brand => {
      if (data[brand]) {
        data[brand].forEach(error => {
          filtered.push({ brand, error })
        })
      }
    })

    // Filtruj po wyszukiwanej frazie
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.error.Kod_błędu.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.error.Opis_błędu.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.error.Rozwiązanie.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return filtered
  }, [selectedBrand, searchTerm, brands])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl lg:text-5xl font-bold mb-6">
              Kody Błędów Kotłów
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 mb-8">
              Znajdź kod błędu swojego kotła i dowiedz się, jak rozwiązać problem
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:601418645"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
              >
                 Zadzwoń: 601 418 645
              </a>
              <Link 
                href="/#kontakt"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Skontaktuj się
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filtry i wyszukiwanie */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Wybór marki */}
              <div>
                <label htmlFor="brand-select" className="block text-sm font-medium text-gray-700 mb-2">
                  Wybierz markę kotła:
                </label>
                <select
                  id="brand-select"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="wszystkie">Wszystkie marki</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              {/* Wyszukiwanie */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Wyszukaj kod lub opis błędu:
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="np. EA, brak płomienia, czujnik..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Statystyki */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm text-gray-600">
              <div>
                <span className="font-semibold">Wybrana marka:</span> {selectedBrand === 'wszystkie' ? 'Wszystkie' : selectedBrand}
              </div>
              <div>
                <span className="font-semibold">Znalezionych błędów:</span> {filteredErrors.length}
              </div>
              {searchTerm && (
                <div>
                  <span className="font-semibold">Wyszukiwanie:</span> {searchTerm}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lista błędów */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Komunikat gdy brak wyników */}
            {filteredErrors.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Nie znaleziono błędów
                </h3>
                <p className="text-gray-500">
                  Spróbuj zmienić kryteria wyszukiwania lub wybierz inną markę
                </p>
              </div>
            )}

            {/* Grid z błędami */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredErrors.map((item, index) => (
                <div 
                  key={`${item.brand}-${item.error.Kod_błędu}-${index}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border"
                >
                  {/* Header z marką i kodem */}
                  <div className={`bg-gradient-to-r ${brandColors[item.brand]} p-4 text-white`}>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium opacity-90">{item.brand}</span>
                      <span className="text-2xl font-bold">{item.error.Kod_błędu}</span>
                    </div>
                  </div>
                  
                  {/* Zawartość błędu */}
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                      {item.error.Opis_błędu}
                    </h3>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2 text-sm uppercase tracking-wide">
                        Rozwiązanie:
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.error.Rozwiązanie}
                      </p>
                    </div>
                    
                    {/* Przycisk kontaktu */}
                    <div className="pt-4 border-t border-gray-100">
                      <a 
                        href="tel:601418645"
                        className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors text-white bg-gradient-to-r ${brandColors[item.brand]} hover:opacity-90`}
                      >
                        Pomoc z kodem {item.error.Kod_błędu}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Informacja o braku kodu */}
            {filteredErrors.length > 0 && (
              <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Nie znajdujesz swojego kodu błędu?
                </h3>
                <p className="text-blue-700 mb-4">
                  Zadzwoń do nas - pomożemy zdiagnozować problem i znajdziemy rozwiązanie
                </p>
                <a 
                  href="tel:601418645"
                  className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                   Zadzwoń: 601 418 645
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
