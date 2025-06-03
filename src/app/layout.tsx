import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header' // lub Header3D

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pol-Gaz Szczecin - Serwis Kotłów od 1996 | Beretta Junkers Buderus',
  description: 'Rodzinny serwis kotłów w Szczecinie od 1996 roku. Ambasador firmy Beretta. 29 lat doświadczenia. Tel: 601 418 645',
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
      </body>
    </html>
  )
}
