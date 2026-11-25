import Link from 'next/link'
import type { Metadata } from 'next'
import { Tel } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Nie ma takiej strony – POL-GAZ Szczecin',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="sekcja">
      <div className="kontener">
        <h1 className="h1">Nie ma takiej strony</h1>
        <p className="akapit lead mt-4">Adres mógł się zmienić po przebudowie serwisu. Wybierz, czego szukasz:</p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {[
            ['Strona główna', '/'],
            ['Naprawa pieców gazowych', '/naprawa-piecow-gazowych/'],
            ['Przegląd pieca gazowego', '/przeglad-pieca-gazowego/'],
            ['Kody błędów kotłów', '/bledy-kotlow/'],
            ['Kontakt', '/kontakt/'],
          ].map(([n, s]) => (
            <li key={s}>
              <Link href={s} className="link">
                {n}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Tel etykieta="Zadzwoń:" />
        </div>
      </div>
    </section>
  )
}
