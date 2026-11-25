'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { firma } from '@/data/firma'
import type { Blad } from '@/data/bledy'

type Wiersz = Blad & { slug: string | null }

const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ')

// 0: kod zaczyna się od frazy, 1: kod zawiera frazę, 2: fraza jest tylko w opisie.
const waga = (k: Wiersz, f: string) => {
  const kod = k.kod.toLowerCase()
  return kod.startsWith(f) ? 0 : kod.includes(f) ? 1 : 2
}

// Dwie części opisu kodu: czynności bezpieczne dla użytkownika i praca serwisanta.
function Czesci({ k, duze }: { k: Wiersz; duze?: boolean }) {
  return (
    <dl className={`grid gap-x-8 gap-y-3 ${k.serwis ? 'lg:grid-cols-2' : ''} ${duze ? 'mt-4' : 'mt-3'}`}>
      <div>
        <dt className="text-sm font-semibold text-granat">Co możesz zrobić sam</dt>
        <dd className="mt-1 text-tekst">{k.rozwiazanie}</dd>
      </div>
      {k.serwis ? (
        <div>
          <dt className="text-sm font-semibold text-tekst-2">Co sprawdza serwisant</dt>
          <dd className="mt-1 text-[0.9375rem] text-tekst-2">{k.serwis}</dd>
        </div>
      ) : null}
    </dl>
  )
}

// Pełna lista kodów jest w HTML (renderowana na serwerze). Skrypt tylko filtruje i porządkuje widok.
export default function ListaBledow({ grupy }: { grupy: { marka: string; kody: Wiersz[] }[] }) {
  const [fraza, setFraza] = useState('')
  const [marka, setMarka] = useState('')

  // Fraza i marka z panelu na innych stronach: /bledy-kotlow/?marka=Junkers&q=2951
  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    const q = p.get('q')
    const m = p.get('marka')
    if (m && grupy.some((g) => g.marka === m)) setMarka(m)
    if (q) setFraza(q)
    if (q || m) document.getElementById('wyszukiwarka')?.scrollIntoView()
  }, [grupy])

  // Na telefonie przyciski marek przewijają się w poziomie: wybrana marka ma być widoczna.
  useEffect(() => {
    document.querySelector('#wyszukiwarka [aria-pressed="true"]')?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
  }, [marka])

  const f = norm(fraza)

  // Wyniki dla frazy we wszystkich markach: z nich biorą się liczniki na przyciskach marek.
  const poFrazie = useMemo(
    () =>
      grupy.map((g) => ({
        ...g,
        kody: f
          ? g.kody
              .filter((k) => `${k.kod} ${k.opis} ${k.rozwiazanie} ${k.serwis ?? ''}`.toLowerCase().includes(f))
              .sort((a, b) => waga(a, f) - waga(b, f))
          : g.kody,
      })),
    [grupy, f],
  )

  const wMarce = poFrazie.filter((g) => !marka || g.marka === marka)
  const trafienia = f ? wMarce.flatMap((g) => g.kody.filter((k) => k.kod.toLowerCase() === f)) : []
  const reszta = wMarce.map((g) => ({ ...g, kody: g.kody.filter((k) => !trafienia.includes(k)) }))
  const liczba = wMarce.reduce((a, g) => a + g.kody.length, 0)
  const wszystkie = poFrazie.reduce((a, g) => a + g.kody.length, 0)

  const przycisk =
    'flex h-10 shrink-0 items-center gap-2 rounded-[4px] border border-linia px-3 text-[0.9375rem] font-medium text-tekst hover:border-granat aria-pressed:border-granat aria-pressed:bg-granat aria-pressed:text-white'

  return (
    <div>
      <div
        id="wyszukiwarka"
        className="sticky top-[60px] z-30 -mx-5 scroll-mt-24 border-b border-linia bg-white px-5 py-3 shadow-[0_6px_12px_-8px_rgb(11_23_56/0.25)] md:top-[72px] md:mx-0 md:rounded-b-lg md:border-x md:p-5"
        role="search"
      >
        <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="group" aria-label="Marka kotła">
          <button type="button" className={przycisk} aria-pressed={marka === ''} onClick={() => setMarka('')}>
            Wszystkie <span className="text-sm opacity-70">{wszystkie}</span>
          </button>
          {poFrazie.map((g) => (
            <button key={g.marka} type="button" className={przycisk} aria-pressed={marka === g.marka} onClick={() => setMarka(g.marka)}>
              {g.marka} <span className="text-sm opacity-70">{g.kody.length}</span>
            </button>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-4 md:mt-3">
          <label className="min-w-0 flex-1">
            <span className="sr-only">Kod lub opis błędu</span>
            <input
              type="search"
              value={fraza}
              onChange={(e) => setFraza(e.target.value)}
              autoComplete="off"
              spellCheck={false}
              placeholder="Kod lub opis, np. 2951, ciśnienie"
              className="wyswietlacz block h-12 w-full px-3 text-xl md:h-14 md:px-4 md:text-2xl"
            />
          </label>
          <p className="shrink-0 text-sm text-tekst-2" aria-live="polite">
            Wyniki: <strong className="text-tekst">{liczba}</strong>
          </p>
        </div>
      </div>

      {trafienia.length > 0 ? (
        <section className="mt-8" aria-label="Znaleziony kod">
          <ul className="grid gap-5">
            {trafienia.map((k) => (
              <li key={`${k.marka}-${k.kod}`} className="karta grid overflow-hidden !border-2 !border-granat md:grid-cols-[14rem_1fr]">
                <div className="flex items-center gap-4 bg-granat p-5 text-white md:flex-col md:items-start md:justify-center md:p-6">
                  <span className="font-naglowek text-xl font-semibold md:text-2xl">{k.marka}</span>
                  <span className="wyswietlacz px-4 py-3 text-3xl md:text-5xl">{k.kod}</span>
                </div>
                <div className="p-5 md:p-6">
                  <h2 className="h3">{k.opis}</h2>
                  <Czesci k={k} duze />
                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <a
                      href={firma.telefonHref}
                      className="inline-flex h-12 items-center rounded-[4px] bg-zolty px-5 font-naglowek text-xl font-bold tabular-nums text-granat-ciemny transition-colors hover:bg-zolty-ciemny"
                    >
                      Zadzwoń {firma.telefon}
                    </a>
                    {k.slug ? (
                      <Link href={`/bledy-kotlow/${k.slug}/`} className="link">
                        Błąd {k.kod} {k.marka}: przyczyny i co sprawdzić
                      </Link>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {liczba > trafienia.length ? <p className="mt-10 text-sm font-semibold text-tekst-2">Pozostałe wyniki: {liczba - trafienia.length}</p> : null}
        </section>
      ) : null}

      {liczba === 0 ? (
        <div className="karta mt-8 p-6 md:p-8">
          <h2 className="h3">Nie mamy tego kodu w bazie</h2>
          <p className="akapit mt-2">
            Sprawdź, czy kod jest wpisany tak jak na wyświetlaczu, albo wybierz inną markę. Jeśli kod się zgadza, zadzwoń i podaj markę oraz
            model kotła.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={firma.telefonHref}
              className="inline-flex h-12 items-center rounded-[4px] bg-zolty px-5 font-naglowek text-xl font-bold tabular-nums text-granat-ciemny transition-colors hover:bg-zolty-ciemny"
            >
              Zadzwoń {firma.telefon}
            </a>
            <button
              type="button"
              className="link"
              onClick={() => {
                setFraza('')
                setMarka('')
              }}
            >
              Pokaż wszystkie kody
            </button>
          </div>
        </div>
      ) : null}

      {reszta.map((g) =>
        g.kody.length === 0 ? null : (
          <section key={g.marka} id={g.marka.toLowerCase()} className="mt-12 scroll-mt-52">
            <h2 className="h2">Kody błędów {g.marka}</h2>
            <ul className="mt-6 divide-y divide-linia border-y border-linia">
              {g.kody.map((k) => (
                <li key={k.kod} className="grid gap-x-6 gap-y-3 py-5 md:grid-cols-[8rem_1fr]">
                  <div>
                    <span className="wyswietlacz inline-block px-3 py-2 text-lg">{k.kod}</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-[1.0625rem] font-semibold leading-snug text-tekst">{k.opis}</h3>
                    <Czesci k={k} />
                    {k.slug ? (
                      <p className="mt-3">
                        <Link href={`/bledy-kotlow/${k.slug}/`} className="link">
                          Błąd {k.kod} {g.marka}: przyczyny i co sprawdzić
                        </Link>
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ),
      )}
    </div>
  )
}
