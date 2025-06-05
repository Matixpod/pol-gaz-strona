import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pol-Gaz Szczecin - Serwis Kotłów Beretta Junkers Buderus',
  description: 'Wojciech Podporski Serwis kotłów Beretta Junkers Buderus Vaillant Unical Saunier Duval w Szczecinie. Ambasador firmy Beretta. 31 lat doświadczenia. Tel: 601 418 645',
  keywords: [
    // Główne usługi
    'serwis kotłów Szczecin',
    'naprawa kotłów Szczecin',
    'montaż kotłów Szczecin',
    'przeglądy kotłów Szczecin',
    'awarie kotłów Szczecin',
    
    // Marki kotłów
    'serwis Beretta Szczecin',
    'naprawa Junkers Szczecin',
    'serwis Buderus Szczecin',
    'naprawa Vaillant Szczecin',
    'serwis Unical Szczecin',
    'naprawa Saunier Duval Szczecin',
    
    // Lokalizacja
    'serwis kotłów Police',
    'naprawa kotłów Goleniów',
    'serwis kotłów Gryfino',
    'naprawa kotłów Stargard',
    
    // Specjalizacja
    'ambasador Beretta',
    'autoryzowany serwis Beretta',
    'kotły kondensacyjne serwis',
    'kotły gazowe naprawa',
    
    // Długie frazy
    'serwis kotłów 24h Szczecin',
    'naprawa kotłów weekend Szczecin',
    'przeglądy kotłów gwarancyjne',
    'wymiana części kotłów Szczecin',
    
    // Rodzaj usług
    'konserwacja kotłów',
    'modernizacja kotłów',
    'diagnostyka kotłów',
    'czyszczenie kotłów',
    
    // Inne
    'Pol-Gaz Szczecin',
    'rodzinny serwis kotłów',
    'doświadczony serwisant'
  ].join(', '),
  
  authors: [{ name: 'Pol-Gaz Szczecin' }],
  creator: 'Pol-Gaz Szczecin',
  publisher: 'Pol-Gaz Szczecin',
  
  // Canonical URL
  metadataBase: new URL('https://polgaz-szczecin.pl'),
  alternates: {
    canonical: '/',
  },
  
  // Open Graph
  openGraph: {
    title: 'Pol-Gaz Szczecin - Serwis Kotłów od 1994',
    description: 'Profesjonalny serwis kotłów w Szczecinie od 1994 roku. Ambasador firmy Beretta.', // Poprawiona literówka
    url: 'https://polgaz-szczecin.pl',
    siteName: 'Pol-Gaz Szczecin',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        
        url: '../../public/images/pol-gaz-logo.WebP', // Dodaj obrazek Open Graph jeśli masz
        width: 1200,
        height: 630,
        alt: 'Pol-Gaz Szczecin - Serwis Kotłów',
      },
    ],
  },
  
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification - dodaj gdy utworzysz Google Search Console
  verification: {
    google: 'google-site-verification=j2TDkWkmC7lfa-89Wt-bjcb-3PupsBBxf1ZmVAwImMY',
  },
  
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon-32x32.ico' },
      { rel: 'icon', url: '/favicon-192x192.png' },
      { rel: 'icon', url: '/favicon-512x512.png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Structured Data JSON-LD
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pol-Gaz Szczecin",
    "alternateName": "Pol-Gaz",
    "url": "https://polgaz-szczecin.pl",
    "telephone": "601-418-645",
    "description": "Profesjonalny serwis kotłów w Szczecinie od 1994 roku. Ambasador firmy Beretta.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Szczecin",
      "addressCountry": "PL"
    },
    "areaServed": ["Szczecin", "Police", "Goleniów", "Gryfino", "Stargard"],
    "serviceType": "Serwis kotłów",
    "founder": "Wojciech Podporski",
    "foundingDate": "1994"
  }

  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
