import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'POL-GAZ Szczecin - Serwis Kotłów Beretta Junkers Buderus',
  description: 'Wojciech Podporski Serwis kotłów Beretta Junkers Buderus Vaillant Unical Saunier Duval w Szczecinie. Ambasador firmy Beretta. Tel: 601 418 645',
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
    'POL-GAZ Szczecin',
    'rodzinny serwis kotłów',
    'doświadczony serwisant'
  ].join(', '),
  
  authors: [{ name: 'POL-GAZ Szczecin' }],
  creator: 'POL-GAZ Szczecin',
  publisher: 'POL-GAZ Szczecin',
  
  // Canonical URL
  metadataBase: new URL('https://polgaz-szczecin.pl'),
  alternates: {
    canonical: '/',
  },
  
  // Open Graph
  openGraph: {
    title: 'POL-GAZ Szczecin - Serwis Kotłów od 1994',
    description: 'Profesjonalny serwis kotłów w Szczecinie od 1994 roku. Ambasador firmy Beretta.', // Poprawiona literówka
    url: 'https://polgaz-szczecin.pl',
    siteName: 'POL-GAZ Szczecin',
    locale: 'pl_PL',
    type: 'website',
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
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
      { rel: 'manifest', url: '/site.webmanifest' },
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
    "@graph": [
      {
        "@type": "HVACBusiness",
        "@id": "https://polgaz-szczecin.pl/#organization",
        "name": "POL-GAZ Szczecin Wojciech Podporski",
        "alternateName": "Szczecin Serwis Kotłów Beretta",
        "url": "https://polgaz-szczecin.pl",
        "logo": "https://polgaz-szczecin.pl/logo.png",
        "image": "https://polgaz-szczecin.pl/logo.png",
        "telephone": "+48601418645",
        "email": "polgazszczecin@wp.pl",
        "priceRange": "$$",
        "description": "Autoryzowany serwis, naprawa i montaż kotłów gazowych w Szczecinie. Ambasador firmy Beretta. Naprawiamy również: Junkers, Buderus, Vaillant.",
        "foundingDate": "1994",
        "founder": {
          "@type": "Person",
          "name": "Wojciech Podporski",
          "jobTitle": "Ambasador Beretta / Główny Serwisant"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Szczecin",
          "addressRegion": "Zachodniopomorskie",
          "addressCountry": "PL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 53.4285,
          "longitude": 14.5528
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "09:00",
            "closes": "15:00"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "Szczecin" },
          { "@type": "City", "name": "Police" },
          { "@type": "City", "name": "Goleniów" },
          { "@type": "City", "name": "Gryfino" },
          { "@type": "City", "name": "Stargard" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "47"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Usługi serwisowe kotłów HVAC",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Autoryzowany serwis Beretta",
                "description": "Profesjonalna naprawa i przeglądy kotłów marki Beretta w Szczecinie."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Przeglądy i konserwacja kotłów",
                "description": "Regularne przeglądy kotłów gazowych gwarantujące bezpieczeństwo."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://polgaz-szczecin.pl/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Jakie marki pieców i kotłów gazowych naprawia POL-GAZ w Szczecinie?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "POL-GAZ Szczecin Wojciech Podporski specjalizuje się w serwisie kotłów Beretta (jako Ambasador Marki), a także naprawia urządzenia marek: Junkers, Buderus, Vaillant, Unical i Saunier Duval."
            }
          },
          {
            "@type": "Question",
            "name": "Gdzie dojeżdża serwis kotłów POL-GAZ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Obsługujemy klientów na terenie całego Szczecina, a także w sąsiednich miejscowościach takich jak Police, Goleniów, Gryfino oraz Stargard."
            }
          }
        ]
      }
    ]
  }

  return (
    <html lang="pl">
      <head>
        {/* Ustawienie kodowania znaków */}
        <meta charSet="UTF-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {/* Shapo dynamiczny schemat JSON-LD na potrzeby opinii (AEO/GEO) */}
        <script type="application/ld+json" id="shapo-ratingschema-05ab1699c4"></script>
        <script id="shapo-embed-js" type="text/javascript" src="https://cdn.shapo.io/js/embed.js" defer></script>
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