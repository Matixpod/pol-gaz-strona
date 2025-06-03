'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Strona główna' },
    { href: '/uslugi', label: 'Usługi' },
    { href: '/marki', label: 'Marki' },
    { href: '/opinie', label: 'Opinie' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <div className="lg:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 hover:text-blue-900 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
          <nav className="container mx-auto px-4 py-4">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 border-b border-gray-100 last:border-b-0 transition-colors ${
                    isActive 
                      ? 'text-blue-900 bg-yellow-50 border-l-4 border-l-yellow-400 font-semibold' 
                      : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </div>
  )
}
