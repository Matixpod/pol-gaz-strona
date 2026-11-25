import Image from 'next/image'
import { firma } from '@/data/firma'
import { uslugi } from '@/data/uslugi'
import { marki, etykietaSerwisu } from '@/data/marki'
import LinkMenu from './LinkMenu'

const AWARIA = '/awaria-kotla-gazowego/'

const listy = [
  { nazwa: 'Usługi', pozycje: uslugi.map((u) => ({ nazwa: u.nazwa, sciezka: `/${u.slug}/` })) },
  { nazwa: 'Marki', pozycje: marki.map((m) => ({ nazwa: etykietaSerwisu(m.nazwa), sciezka: `/${m.slug}/` })) },
]

// „Obszar działania” pojawia się dopiero na szerokich ekranach; niżej jest w stopce.
const proste = [
  { nazwa: 'Kody błędów', sciezka: '/bledy-kotlow/', klasa: '' },
  { nazwa: 'Obszar działania', sciezka: '/obszar-dzialania/', klasa: 'hidden xl:block' },
  { nazwa: 'Kontakt', sciezka: '/kontakt/', klasa: '' },
]

const firmowe = [
  { nazwa: 'Obszar działania', sciezka: '/obszar-dzialania/' },
  { nazwa: 'O firmie', sciezka: '/o-firmie/' },
  { nazwa: 'Kontakt', sciezka: '/kontakt/' },
]

const linkGlowny =
  'flex h-11 items-center gap-1 text-tekst hover:text-granat aria-[current=page]:font-semibold aria-[current=page]:text-granat aria-[current=page]:underline aria-[current=page]:decoration-zolty aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8'

const linkListy =
  'block rounded-[4px] px-3 py-2 text-tekst hover:bg-tlo-alt hover:text-granat aria-[current=page]:bg-tlo-alt aria-[current=page]:font-semibold aria-[current=page]:text-granat'

const linkMobilny = 'block py-2 font-medium aria-[current=page]:font-bold aria-[current=page]:text-granat'

// Nagłówek działa bez JavaScriptu: listy rozwijane otwiera :hover i :focus-within, menu mobilne to <details>.
// JavaScript dokłada tylko oznaczenie bieżącej strony (LinkMenu).
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-linia bg-white shadow-[0_2px_12px_rgb(11_23_56/0.08)]">
      <div className="kontener flex h-[60px] items-center justify-between gap-4 md:h-[72px]">
        <a href="/" className="flex items-center gap-3" aria-label="POL-GAZ Szczecin, strona główna">
          <Image src="/images/pol-gaz-logo.WebP" alt="" width={48} height={48} priority className="h-10 w-10 md:h-12 md:w-12" />
          <span className="text-sm leading-tight text-tekst-2">
            <span className="block whitespace-nowrap font-naglowek text-lg font-bold text-granat">{firma.krotka}</span>
            <span className="hidden sm:block lg:hidden xl:block">Serwis od {firma.rokZalozenia} roku</span>
          </span>
        </a>

        <nav aria-label="Główna" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-[0.9375rem] font-medium">
            {listy.map((l) => (
              <li key={l.nazwa} className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="flex h-11 cursor-default items-center gap-1 text-tekst group-hover:text-granat group-has-[[aria-current=page]]:font-semibold group-has-[[aria-current=page]]:text-granat"
                >
                  {l.nazwa}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                    <path d="M2.5 4.5 6 8l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="invisible absolute -left-3 top-full z-50 pt-2 opacity-0 transition-opacity duration-100 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="w-max min-w-56 rounded-[4px] border border-linia bg-white p-2 font-normal shadow-[0_8px_24px_rgb(11_23_56/0.14)]">
                    {l.pozycje.map((p) => (
                      <li key={p.sciezka}>
                        <LinkMenu href={p.sciezka} className={linkListy}>
                          {p.nazwa}
                        </LinkMenu>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
            {proste.map((l) => (
              <li key={l.sciezka} className={l.klasa}>
                <LinkMenu href={l.sciezka} className={linkGlowny}>
                  {l.nazwa}
                </LinkMenu>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 lg:gap-4">
          <LinkMenu
            href={AWARIA}
            className="hidden h-11 items-center gap-2 font-semibold text-awaria hover:underline hover:underline-offset-4 aria-[current=page]:underline aria-[current=page]:underline-offset-4 lg:flex"
          >
            <span className="h-2 w-2 rounded-full bg-awaria" aria-hidden="true" />
            Masz awarię?
          </LinkMenu>

          <a
            href={firma.telefonHref}
            className="hidden rounded-[4px] bg-zolty px-4 py-2 text-center text-granat-ciemny transition-colors hover:bg-zolty-ciemny md:block"
          >
            <span className="sr-only">Zadzwoń: </span>
            <span className="block font-naglowek text-2xl font-bold leading-none tabular-nums">{firma.telefon}</span>
            <span className="mt-1 block text-xs font-medium leading-none">{firma.godziny.krotko}</span>
          </a>

          <details className="group lg:hidden">
            <summary className="flex h-11 cursor-pointer list-none items-center gap-2 rounded-[4px] border border-linia px-3 font-medium text-tekst [&::-webkit-details-marker]:hidden">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" className="group-open:hidden" />
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" className="hidden group-open:block" />
              </svg>
              <span className="group-open:hidden">Menu</span>
              <span className="hidden group-open:inline">Zamknij</span>
            </summary>
            <nav
              aria-label="Menu"
              className="absolute inset-x-0 top-full max-h-[calc(100dvh-116px)] overflow-y-auto border-b border-linia bg-white shadow-[0_2px_12px_rgb(11_23_56/0.12)] md:max-h-[calc(100dvh-72px)]"
            >
              <div className="kontener py-5">
                <ul className="grid grid-cols-2 gap-3">
                  <li>
                    <LinkMenu
                      href={AWARIA}
                      className="flex h-12 items-center justify-center gap-2 rounded-[4px] border-2 border-awaria font-semibold text-awaria aria-[current=page]:bg-awaria aria-[current=page]:text-white"
                    >
                      Awaria kotła
                    </LinkMenu>
                  </li>
                  <li>
                    <LinkMenu
                      href="/bledy-kotlow/"
                      className="flex h-12 items-center justify-center rounded-[4px] border-2 border-granat font-semibold text-granat aria-[current=page]:bg-granat aria-[current=page]:text-white"
                    >
                      Kody błędów
                    </LinkMenu>
                  </li>
                </ul>

                <div className="mt-6 grid gap-6 sm:grid-cols-3">
                  {listy.map((l) => (
                    <div key={l.nazwa}>
                      <p className="text-sm font-semibold text-tekst-2">{l.nazwa}</p>
                      <ul className="mt-2">
                        {l.pozycje.map((p) => (
                          <li key={p.sciezka}>
                            <LinkMenu href={p.sciezka} className={linkMobilny}>
                              {p.nazwa}
                            </LinkMenu>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div>
                    <p className="text-sm font-semibold text-tekst-2">Firma</p>
                    <ul className="mt-2">
                      {firmowe.map((p) => (
                        <li key={p.sciezka}>
                          <LinkMenu href={p.sciezka} className={linkMobilny}>
                            {p.nazwa}
                          </LinkMenu>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm text-tekst-2">
                      Telefon: {firma.godziny.krotko}
                      <br />
                      {firma.godziny.weekend}
                    </p>
                  </div>
                </div>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
