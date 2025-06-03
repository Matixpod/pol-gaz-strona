'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { href: '#home', label: 'Strona główna', id: 'home' },
    { href: '#marki', label: 'Marki', id: 'marki' },
    { href: '#uslugi', label: 'Usługi', id: 'uslugi' },
    { href: '#opinie', label: 'Opinie', id: 'opinie' },
    { href: '#kontakt', label: 'Kontakt', id: 'kontakt' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const sections = navLinks.map(link => link.id)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo jako obraz + wstążka */}
          <div className="flex items-center space-x-4">
            {/* Logo - ZMIANA: z tekstu na obraz */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center"
            >
              <div className={`relative transition-all duration-300 ${
                isScrolled ? 'w-12 h-12' : 'w-16 h-16'
              }`}>
                <Image
                  src="/images/LOGO.png" // Ścieżka do Twojego logo
                  alt="Pol-Gaz Logo"
                  fill
                  className="object-contain hover:scale-105 transition-transform"
                  priority
                />
              </div>
            </button>

            {/* Wstążka z latami doświadczenia */}
            <div className={`relative transition-all duration-300 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}>
              <div className="ribbon-container">
                <div className="ribbon bg-yellow-400 text-blue-900 px-6 py-2 font-bold text-lg relative">
                  <span className="text-2xl font-black">29 LAT</span>
                  <div className="text-xs font-semibold mt-1 leading-tight">
                    Najstarszy rodzinny serwis<br />kotłów w Szczecinie
                  </div>
                  <div className="ribbon-left"></div>
                  <div className="ribbon-right"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Reszta navbar - bez zmian */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map(({ href, label, id }) => {
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

          <div className="flex items-center space-x-4">
            <div className={`text-right hidden md:block transition-all duration-300 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}>
              <div className="text-2xl font-bold text-blue-900">601 418 645</div>
              <div className="text-sm text-gray-600">polgazszczecin@wp.pl</div>
            </div>

            <a
              href="tel:601418645"
              className={`bg-blue-900 hover:bg-blue-800 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'
              }`}
            >
              Zadzwoń teraz
            </a>

            <MobileMenu 
              navLinks={navLinks} 
              activeSection={activeSection} 
              scrollToSection={scrollToSection} 
            />
          </div>
        </div>
      </div>
    </header>
  )
}

// Komponent menu mobilnego - bez zmian
function MobileMenu({ navLinks, activeSection, scrollToSection }: any) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 hover:text-blue-900 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
          <nav className="container mx-auto px-4 py-4">
            {navLinks.map(({ id, label }: any) => {
              const isActive = activeSection === id
              return (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id)
                    setIsOpen(false)
                  }}
                  className={`block w-full text-left py-3 px-4 border-b border-gray-100 last:border-b-0 transition-colors ${
                    isActive 
                      ? 'text-blue-900 bg-yellow-50 border-l-4 border-l-yellow-400 font-semibold' 
                      : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </nav>
        </div>
      )}
    </div>
  )
}
