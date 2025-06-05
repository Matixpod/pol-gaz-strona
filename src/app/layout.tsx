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
  
  // Open Graph
  openGraph: {
    title: 'Pol-Gaz Szczecin - Serwis Kotłów od 1994',
    description: 'Profesojnalny serwis kotłów w Szczecinie od 1994 roku. Ambasador firmy Beretta.',
    url: 'https://polgaz-szczecin.pl',
    siteName: 'Pol-Gaz Szczecin',
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
    icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon-32x32.png' },
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
  return (
    <html lang="pl">
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
