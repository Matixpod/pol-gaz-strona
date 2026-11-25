import Link from 'next/link'
import { firma, miejscowosci, wykonawca } from '@/data/firma'
import { uslugi } from '@/data/uslugi'
import { marki, etykietaSerwisu } from '@/data/marki'

export default function Footer() {
  return (
    <footer className="na-granacie bg-granat-ciemny pb-24 text-[#d5dcf0] md:pb-0">
      <div className="kontener grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-naglowek text-xl font-bold text-white">{firma.krotka}</p>
          <p className="mt-3 text-sm">
            {firma.nazwa}
            <br />
            NIP {firma.nip}
          </p>
          <p className="mt-4">
            <a href={firma.telefonHref} className="font-naglowek text-2xl font-bold tabular-nums text-zolty">
              {firma.telefon}
            </a>
            <br />
            <a href={`mailto:${firma.email}`} className="text-sm underline underline-offset-4">
              {firma.email}
            </a>
          </p>
          <p className="mt-4 text-sm">
            {firma.godziny.dniRobocze}
            <br />
            {firma.godziny.weekend}
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Usługi</p>
          <ul className="mt-1 text-sm">
            {uslugi.map((u) => (
              <li key={u.slug}>
                <Link href={`/${u.slug}/`} className="inline-block py-2 hover:underline">
                  {u.nazwa}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/bledy-kotlow/" className="inline-block py-2 hover:underline">
                Kody błędów kotłów
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Marki</p>
          <ul className="mt-1 text-sm">
            {marki.map((m) => (
              <li key={m.slug}>
                <Link href={`/${m.slug}/`} className="inline-block py-2 hover:underline">
                  {etykietaSerwisu(m.nazwa)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Obszar działania</p>
          <p className="mt-3 text-sm">
            Szczecin, {miejscowosci.map((m) => m.nazwa).join(', ')} i okolice do {firma.promienKm} km.
          </p>
          <ul className="mt-1 text-sm">
            <li>
              <Link href="/obszar-dzialania/" className="inline-block py-2 hover:underline">
                Obszar działania i czas dojazdu
              </Link>
            </li>
            <li>
              <Link href="/o-firmie/" className="inline-block py-2 hover:underline">
                O firmie
              </Link>
            </li>
            <li>
              <Link href="/kontakt/" className="inline-block py-2 hover:underline">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/polityka-prywatnosci/" className="inline-block py-2 hover:underline">
                Polityka prywatności
              </Link>
            </li>
            <li>
              <Link href="/o-stronie/" className="inline-block py-2 hover:underline">
                O tej stronie
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="kontener flex flex-wrap justify-between gap-x-6 gap-y-2 py-5 text-sm">
          <p>
            © {new Date().getFullYear()} {firma.nazwa}
          </p>
          <p>
            Projekt i wykonanie:{' '}
            <a href={wykonawca.url} className="underline underline-offset-4">
              {wykonawca.nazwa}
            </a>
          </p>
        </div>
      </div>

      {/* Pasek telefonu na telefonach */}
      <a
        href={firma.telefonHref}
        className="fixed inset-x-0 bottom-0 z-40 flex h-14 items-center justify-center gap-2 bg-zolty font-naglowek text-2xl font-bold tabular-nums text-granat-ciemny shadow-[0_-2px_12px_rgb(11_23_56/0.18)] md:hidden"
      >
        Zadzwoń {firma.telefon}
      </a>
    </footer>
  )
}
