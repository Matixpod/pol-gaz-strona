import type { Metadata, Viewport } from 'next'
import { Barlow_Semi_Condensed, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { firma } from '@/data/firma'

const barlow = Barlow_Semi_Condensed({
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})
const plex = IBM_Plex_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-plex',
  display: 'swap',
})
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-plex-mono',
  display: 'swap',
  preload: false,
})

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
    <html lang="pl" className={`${barlow.variable} ${plex.variable} ${plexMono.variable}`}>
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
