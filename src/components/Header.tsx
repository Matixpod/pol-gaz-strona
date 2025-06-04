'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Sprawdź czy jesteśmy na stronie głównej
  const isHomePage = pathname === '/'

  const navLinks = [
    { href: '#home', label: 'Strona główna', id: 'home', type: 'anchor' },
    { href: '#marki', label: 'Marki', id: 'marki', type: 'anchor' },
    { href: '#uslugi', label: 'Usługi', id: 'uslugi', type: 'anchor' },
    { href: '#opinie', label: 'Opinie', id: 'opinie', type: 'anchor' },
    { href: '/bledy-kotlow', label: 'Błędy Kotłów', id: 'bledy', type: 'page' },
  ]

  // Intersection Observer tylko na stronie głównej
  useEffect(() => {
    if (!isHomePage) return

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0% -80% 0%',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navLinks.forEach(({ id, type }) => {
      if (type === 'anchor') {
        const element = document.getElementById(id)
        if (element) {
          observer.observe(element)
        }
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [isHomePage])

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = useCallback((href: string, id: string, type: string) => {
    setIsMobileMenuOpen(false)

    if (type === 'page') {
      // Link do podstrony
      window.location.href = href
    } else if (type === 'anchor') {
      if (isHomePage) {
        // Na stronie głównej - scroll do sekcji
        const element = document.getElementById(id)
        if (element) {
          const headerHeight = window.innerWidth < 768 ? 70 : 80
          
          if (id === 'home') {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          } else {
            const elementPosition = element.offsetTop - headerHeight
            const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
            const scrollPosition = Math.min(Math.max(0, elementPosition), maxScroll)
            
            window.scrollTo({
              top: scrollPosition,
              behavior: 'smooth'
            })
          }
        }
      } else {
        // Na podstronie - przejdź na główną i potem scroll
        window.location.href = `/${href}`
      }
    }
  }, [isHomePage])

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-2 lg:py-3">
        <div className="flex justify-between items-center">
          
          {/* Logo i wstążka - zawsze link do strony głównej */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <Link 
              href="/"
              className="flex items-center"
            >
              <div className={`relative transition-all duration-300 ${
                isScrolled ? 'w-8 h-8 lg:w-12 lg:h-12' : 'w-10 h-10 lg:w-16 lg:h-16'
              }`}>
                <Image
                  src="/images/pol-gaz-logo.WebP"
                  alt="Pol-Gaz Logo"
                  fill
                  className="object-contain hover:scale-105 transition-transform"
                  priority
                />
              </div>
            </Link>

            {/* Wstążka */}
            <div className={`hidden sm:block transition-all duration-300 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}>
              <div className="ribbon-container">
                <div className={`ribbon bg-yellow-400 text-blue-900 font-bold relative ${
                  isScrolled ? 'px-2 lg:px-4 py-1 text-xs lg:text-sm' : 'px-3 lg:px-6 py-1 lg:py-2 text-sm lg:text-lg'
                }`}>
                  <span className={`font-black ${
                    isScrolled ? 'text-sm lg:text-lg' : 'text-lg lg:text-2xl'
                  }`}>31 LAT</span>
                  <div className={`font-semibold mt-1 leading-tight hidden lg:block ${
                    isScrolled ? 'text-xs' : 'text-xs'
                  }`}>
                    Najstarszy serwis<br />kotłów w Szczecinie
                  </div>
                  <div className="ribbon-left"></div>
                  <div className="ribbon-right"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop nawigacja */}
          <nav className="hidden lg:flex space-x-6">
            {navLinks.map(({ href, label, id, type }) => {
              const isActive = isHomePage && activeSection === id
              const isCurrentPage = pathname === href
              
              if (type === 'page') {
                // Link do podstrony z wyróżnieniem
                return (
                  <Link
                    key={id}
                    href={href}
                    className={`nav-link-page relative py-2 px-3 font-medium transition-all duration-300 rounded-lg border-2 ${
                      isCurrentPage 
                        ? 'text-white bg-red-600 border-red-600' 
                        : 'text-red-600 hover:text-red-700 border-red-600 hover:border-red-700 hover:bg-red-50'
                    }`}
                  >
                     {label}
                  </Link>
                )
              } else {
                // Anchor linki
                return (
                  <button
                    key={id}
                    onClick={() => handleNavClick(href, id, type)}
                    className={`nav-link relative py-2 font-medium transition-all duration-300 ${
                      isActive 
                        ? 'text-blue-900 active-link' 
                        : 'text-gray-700 hover:text-blue-900'
                    }`}
                  >
                    {label}
                  </button>
                )
              }
            })}
          </nav>

          {/* Prawa strona */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            
            {/* Informacje kontaktowe */}
            <div className={`text-right hidden md:block transition-all duration-300 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}>
              <div className="text-lg lg:text-2xl font-bold text-blue-900">601 418 645</div>
              <div className="text-xs lg:text-sm text-gray-600 hidden lg:block">polgazszczecin@wp.pl</div>
            </div>

            {/* Przycisk CTA */}
            <a
              href="tel:601418645"
              className={`bg-blue-900 hover:bg-blue-800 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                isScrolled ? 'px-2 lg:px-4 py-1 lg:py-2 text-xs lg:text-sm' : 'px-3 lg:px-6 py-2 lg:py-3 text-sm lg:text-base'
              }`}
            >
              <span className="hidden sm:inline">Zadzwoń teraz</span>
              <span className="sm:hidden">601 418 645</span>
            </a>

            {/* Menu hamburgerowe */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t mt-2 py-4 rounded-b-lg shadow-lg">
            <nav className="space-y-2">
              {navLinks.map(({ href, label, id, type }) => {
                const isActive = isHomePage && activeSection === id
                const isCurrentPage = pathname === href
                
                if (type === 'page') {
                  return (
                    <Link
                      key={id}
                      href={href}
                      className={`block w-full text-left py-3 px-4 rounded-lg transition-colors font-semibold ${
                        isCurrentPage
                          ? 'text-white bg-red-600'
                          : 'text-red-600 bg-red-50 border-l-4 border-l-red-400'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                       {label}
                    </Link>
                  )
                } else {
                  return (
                    <button
                      key={id}
                      onClick={() => handleNavClick(href, id, type)}
                      className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                        isActive 
                          ? 'text-blue-900 bg-yellow-50 border-l-4 border-l-yellow-400 font-semibold' 
                          : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                      }`}
                    >
                      {label}
                    </button>
                  )
                }
              })}
              
              {/* Kontakt w mobile menu */}
              <div className="px-4 py-3 border-t mt-2">
                <div className="text-lg font-bold text-blue-900">601 418 645</div>
                <div className="text-sm text-gray-600">polgazszczecin@wp.pl</div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
