import Link from 'next/link'
import { useId } from 'react'
import { markiBledow } from '@/data/bledy'
import { firma, lataSlownie, ambasadorLata, dataAktualizacji } from '@/data/firma'
import type { Pytanie } from '@/data/uslugi'

export function JsonLd({ dane }: { dane: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dane).replace(/</g, '\\u003c') }} />
}

function IkonaTelefonu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02z" />
    </svg>
  )
}

export function Strzalka() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-granat transition-transform duration-150 group-hover:translate-x-1"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function Tel({ etykieta }: { etykieta?: string }) {
  return (
    <a href={firma.telefonHref} className="btn-tel">
      <IkonaTelefonu />
      <span>
        {etykieta ? <span className="sr-only">{etykieta} </span> : null}
        {firma.telefon}
      </span>
    </a>
  )
}

export function Okruszki({ elementy }: { elementy: { nazwa: string; sciezka?: string }[] }) {
  return (
    <nav aria-label="Ścieżka nawigacji" className="text-sm text-[#c9d2ea]">
      <ol className="flex flex-wrap gap-x-2">
        <li>
          <Link href="/" className="underline underline-offset-4 hover:text-white">
            Strona główna
          </Link>
        </li>
        {elementy.map((e) => (
          <li key={e.nazwa} className="flex gap-x-2">
            <span aria-hidden="true">/</span>
            {e.sciezka ? (
              <Link href={e.sciezka} className="underline underline-offset-4 hover:text-white">
                {e.nazwa}
              </Link>
            ) : (
              <span aria-current="page">{e.nazwa}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Hero podstron: granatowe tło, H1, jedno zdanie, telefon, godziny.
export function HeroPodstrony(p: {
  okruszki: { nazwa: string; sciezka?: string }[]
  plakietka?: string
  h1: string
  lead: string
  // Strony kodów: kod pokazany jak na wyświetlaczu kotła.
  wyswietlacz?: { marka: string; kod: string }
  children?: React.ReactNode
}) {
  return (
    <section className="na-granacie bg-granat text-white">
      <div className="kontener py-10 md:py-16">
        <Okruszki elementy={p.okruszki} />
        {p.plakietka ? <p className="plakietka mt-6">{p.plakietka}</p> : null}
        {p.wyswietlacz ? (
          <p className="wyswietlacz mt-6 inline-flex flex-col gap-2 px-5 py-4 md:float-right md:ml-10 md:mt-4 md:px-8 md:py-6" aria-hidden="true">
            <span className="font-sans text-xs font-medium tracking-normal text-[#d5dcf0] md:text-sm">Wyświetlacz kotła {p.wyswietlacz.marka}</span>
            <span className="text-4xl md:text-7xl">{p.wyswietlacz.kod}</span>
          </p>
        ) : null}
        <h1 className="h1 mt-4 max-w-[22ch] !text-white">{p.h1}</h1>
        <p className="lead mt-4 max-w-[58ch] text-[#d5dcf0]">{p.lead}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Tel etykieta="Zadzwoń:" />
          <p className="text-sm text-[#d5dcf0]">
            {firma.godziny.dniRobocze}
            <br />
            dojazd w Szczecinie ok. {firma.dojazdSzczecinMin} minut
          </p>
        </div>
        {p.children}
      </div>
    </section>
  )
}

export function Odpowiedz({ children }: { children: React.ReactNode }) {
  return <p className="odpowiedz lead">{children}</p>
}

export function PasekZaufania() {
  const fakty = [
    `Serwis od ${firma.rokZalozenia} roku (${lataSlownie()})`,
    `Ambasador marki Beretta ${ambasadorLata}`,
    'Autoryzowany serwis 6 marek',
    `Dojazd do ${firma.promienKm} km od Szczecina`,
  ]
  return (
    <div className="border-b border-linia bg-tlo-alt">
      <ul className="kontener grid gap-x-8 gap-y-2 py-5 text-sm font-medium sm:grid-cols-2 lg:grid-cols-4">
        {fakty.map((f) => (
          <li key={f} className="flex gap-2">
            <span aria-hidden="true" className="mt-[0.55em] h-2 w-2 shrink-0 rounded-[2px] bg-zolty" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Pytania({ pytania, naglowek = 'Najczęstsze pytania' }: { pytania: Pytanie[]; naglowek?: string }) {
  if (!pytania.length) return null
  return (
    <section className="sekcja bg-tlo-alt">
      <div className="kontener">
        <h2 className="h2">{naglowek}</h2>
        <div className="mt-8 max-w-3xl space-y-8">
          {pytania.map((p) => (
            <div key={p.pytanie}>
              <h3 className="h3">{p.pytanie}</h3>
              <p className="akapit mt-2">
                {p.odpowiedz}
                {p.zrodlo ? (
                  <>
                    {' '}
                    Źródło:{' '}
                    <a href={p.zrodlo.url} className="link" rel="noopener">
                      {p.zrodlo.nazwa}
                    </a>
                    .
                  </>
                ) : null}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Autor() {
  const data = new Date(dataAktualizacji).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })
  return (
    <p className="text-sm text-tekst-2">
      Autor:{' '}
      <Link href="/o-firmie/" className="link">
        {firma.wlasciciel}
      </Link>
      , serwisant kotłów gazowych od {firma.rokZalozenia} roku, Ambasador marki Beretta. Aktualizacja:{' '}
      <time dateTime={dataAktualizacji}>{data}</time>.
    </p>
  )
}

export function Cena({ cena }: { cena: string | null }) {
  // TODO(właściciel): cennik. Do czasu uzupełnienia pokazujemy informację o wycenie telefonicznej.
  return (
    <div className="karta max-w-3xl p-6">
      <h2 className="h3">Cena</h2>
      <p className="akapit mt-2">
        {cena ?? 'Cenę podamy przez telefon, po krótkim opisie urządzenia i usterki.'} Koszt znasz, zanim zaczniemy pracę. Za dojazd poza
        Szczecin może obowiązywać dopłata.
      </p>
    </div>
  )
}

export function Cta({ naglowek, tekst }: { naglowek: string; tekst?: string }) {
  return (
    <section className="na-granacie bg-granat text-white">
      <div className="kontener flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="h2 !text-white">{naglowek}</h2>
          <p className="mt-2 max-w-[58ch] text-[#d5dcf0]">
            {tekst ?? `Odbieramy ${firma.godziny.dniRobocze}. W weekendy tylko awarie, po uzgodnieniu.`}
          </p>
        </div>
        <Tel etykieta="Zadzwoń:" />
      </div>
    </section>
  )
}

export function ListaLinkow({ linki }: { linki: { nazwa: string; sciezka: string; opis?: string }[] }) {
  return (
    <ul className="max-w-3xl divide-y divide-linia border-y border-linia">
      {linki.map((l) => (
        <li key={l.sciezka}>
          <Link href={l.sciezka} className="group flex items-center justify-between gap-6 py-4">
            <span>
              <span className="font-naglowek text-xl font-semibold text-granat group-hover:underline">{l.nazwa}</span>
              {l.opis ? <span className="mt-1 block text-tekst-2">{l.opis}</span> : null}
            </span>
            <Strzalka />
          </Link>
        </li>
      ))}
    </ul>
  )
}

// Jasne CTA do wyszukiwarki kodów błędów. Zwykły formularz GET: działa bez JavaScriptu,
// a /bledy-kotlow/ odczytuje parametr ?q= i filtruje listę.
export function CtaBledy({ kody, liczba, szeroki }: { kody?: { etykieta: string; sciezka: string }[]; liczba: number; szeroki?: boolean }) {
  const id = useId()
  return (
    <div className="na-granacie rounded-lg bg-granat p-6 text-white md:p-10">
      <div className={szeroki ? 'grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-x-14 lg:gap-y-6' : 'grid gap-6'}>
        <div>
          <h2 className="h2 !text-white">Kocioł pokazuje kod błędu?</h2>
          <p className="mt-3 max-w-[48ch] text-[#d5dcf0]">
            Wybierz markę i wpisz kod z wyświetlacza. Sprawdzisz, co oznacza i co możesz zrobić sam. W bazie jest {liczba} kodów kotłów{' '}
            {markiBledow.slice(0, -1).join(', ')} i {markiBledow.at(-1)}.
          </p>
        </div>
        <form action="/bledy-kotlow/" method="get" role="search" className={szeroki ? 'lg:col-start-2 lg:row-span-2 lg:row-start-1' : ''}>
          <fieldset>
            <legend className="text-sm font-medium text-[#d5dcf0]">1. Marka kotła</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {['', ...markiBledow].map((m) => (
                <label
                  key={m}
                  className="flex h-11 cursor-pointer items-center rounded-[4px] border border-[#4a5c94] px-4 font-medium has-[:checked]:border-zolty has-[:checked]:bg-zolty has-[:checked]:text-granat-ciemny has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-zolty"
                >
                  <input type="radio" name="marka" value={m} defaultChecked={m === ''} className="sr-only" />
                  {m || 'Nie wiem'}
                </label>
              ))}
            </div>
          </fieldset>
          <label htmlFor={id} className="mt-5 block text-sm font-medium text-[#d5dcf0]">
            2. Kod z wyświetlacza
          </label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <input
              id={id}
              type="search"
              name="q"
              required
              autoComplete="off"
              autoCapitalize="characters"
              spellCheck={false}
              placeholder="np. 2951"
              className="wyswietlacz block h-16 w-full min-w-0 flex-1 px-4 text-3xl"
            />
            <button
              type="submit"
              className="h-16 rounded-[4px] bg-zolty px-6 font-naglowek text-xl font-bold text-granat-ciemny transition-colors duration-150 hover:bg-zolty-ciemny"
            >
              Sprawdź kod
            </button>
          </div>
        </form>
        {kody?.length ? (
          <ul className="flex flex-wrap items-center gap-2">
            <li className="mr-1 w-full text-sm text-[#d5dcf0]">Często szukane:</li>
            {kody.map((k) => (
              <li key={k.sciezka}>
                <Link href={k.sciezka} className="kod kod-link text-sm hover:underline">
                  {k.etykieta}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
