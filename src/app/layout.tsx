import type { Metadata, Viewport } from 'next'
import './fonts.css'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { firma } from '@/data/firma'

// Czcionki są w public/fonts (definicje w fonts.css). Wczytujemy z wyprzedzeniem te z tekstu nad zgięciem;
// polskie znaki są w plikach latin-ext.
const czcionkiNaStart = [
  'ibm-plex-sans-400-600-latin',
  'ibm-plex-sans-400-600-latin-ext',
  'barlow-semi-condensed-700-latin',
  'barlow-semi-condensed-700-latin-ext',
]

export const metadata: Metadata = {
  metadataBase: new URL(firma.url),
  title: 'Serwis pieców gazowych Szczecin – POL-GAZ, od 1994 r.',
  description: 'Serwis, przeglądy i montaż pieców gazowych w Szczecinie od 1994 roku. Ambasador marki Beretta. Tel. 601 418 645',
  robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large', 'max-snippet': -1 } },
  verification: { google: 'j2TDkWkmC7lfa-89Wt-bjcb-3PupsBBxf1ZmVAwImMY' },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = { themeColor: '#12245b' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        {czcionkiNaStart.map((c) => (
          <link key={c} rel="preload" href={`/fonts/${c}.woff2`} as="font" type="font/woff2" crossOrigin="anonymous" />
        ))}
      </head>
      <body className="font-sans antialiased">
        <a href="#tresc" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-3">
          Przejdź do treści
        </a>
        <Header />
        <main id="tresc">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
