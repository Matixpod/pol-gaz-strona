'use client'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Strona główna', id: 'home' },
    { href: '#marki', label: 'Marki', id: 'marki' },
    { href: '#uslugi', label: 'Usługi', id: 'uslugi' },
    { href: '#opinie', label: 'Opinie', id: 'opinie' },
    { href: '#kontakt', label: 'Kontakt', id: 'kontakt' },
  ]

  // Intersection Observer dla wykrywania aktywnej sekcji
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0% -80% 0%', // Trigger when section is 20% visible from top
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

    // Obserwuj wszystkie sekcje
    navLinks.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [navLinks]) // Added navLinks to dependency array

  // Scroll detection dla navbar blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = window.innerWidth < 768 ? 70 : 80
      
      // Specjalne traktowanie dla sekcji "home" - scroll do góry
      if (sectionId === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      } else {
        const elementPosition = element.offsetTop - headerHeight
        
        // Maksymalna pozycja scrolla - zapobiega drganiu
        const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
        
        // Ogranicz pozycję scrolla do dostępnego zakresu
        const scrollPosition = Math.min(Math.max(0, elementPosition), maxScroll)
        
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        })
      }
    }
    setIsMobileMenuOpen(false)
  }, [])

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
          
          {/* Logo i wstążka - responsive */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <button 
              onClick={() => scrollToSection('home')}
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
            </button>

            {/* Wstążka - responsive na scroll */}
            <div className={`hidden sm:block transition-all duration-300 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}>
              <div className="ribbon-container">
                <div className={`ribbon bg-yellow-400 text-blue-900 font-bold relative ${
                  isScrolled ? 'px-2 lg:px-4 py-1 text-xs lg:text-sm scrolled' : 'px-3 lg:px-6 py-1 lg:py-2 text-sm lg:text-lg'
                }`}>
                  <span className={`font-black ${
                    isScrolled ? 'text-sm lg:text-lg' : 'text-lg lg:text-2xl'
                  }`}>31 LAT</span>
                  <div className={`font-semibold mt-1 leading-tight hidden lg:block ${
                    isScrolled ? 'text-xs' : 'text-xs'
                  }`}>
                    Najstarszy rodzinny serwis<br />kotłów w Szczecinie
                  </div>
                  <div className="ribbon-left"></div>
                  <div className="ribbon-right"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop nawigacja z dynamicznym podkreśleniem */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map(({ label, id }) => { // Removed unused 'href'
              const isActive = activeSection === id
              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`nav-link relative py-2 font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-blue-900 active-link' 
                      : 'text-gray-700 hover:text-blue-900'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </nav>

          {/* Telefon i przycisk - responsive */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Telefon - ukryty na mobile */}
            <div className={`text-right hidden md:block transition-all duration-300 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}>
              <div className="text-lg lg:text-2xl font-bold text-blue-900">601 418 645</div>
              <div className="text-xs lg:text-sm text-gray-600 hidden lg:block">polgazszczecin@wp.pl</div>
            </div>

            {/* ZMIANA: Mobile - numer telefonu zamiast ikony */}
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

        {/* Mobile menu z aktywnym podkreśleniem */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t mt-2 py-4 rounded-b-lg shadow-lg">
            <nav className="space-y-2">
              {navLinks.map(({ id, label }) => {
                const isActive = activeSection === id
                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                      isActive 
                        ? 'text-blue-900 bg-yellow-50 border-l-4 border-l-yellow-400 font-semibold' 
                        : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                    }`}
                  >
                    {label}
                  </button>
                )
              })}
              {/* Telefon w mobile menu */}
              <div className="px-4 py-3 border-t">
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