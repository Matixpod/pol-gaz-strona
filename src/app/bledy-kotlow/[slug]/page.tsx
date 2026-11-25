import Link from 'next/link'
import { notFound } from 'next/navigation'
import { firma } from '@/data/firma'
import { stronyKodow, serwisMarki } from '@/data/bledy'
import { etykietaSerwisu } from '@/data/marki'
import { meta, graf, schemaFirmy, schemaOsoby, schemaStrony, schemaOkruszkow } from '@/lib/seo'
import { JsonLd, HeroPodstrony, Odpowiedz, Autor, Cta } from '@/components/ui'

// Osobne strony dla kodów z ruchem w Search Console. Treść: src/data/bledy.ts.
export const dynamicParams = false

export function generateStaticParams() {
  return stronyKodow.map((k) => ({ slug: k.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const k = stronyKodow.find((x) => x.slug === slug)
  if (!k) return {}
  return meta(metaKodu(k))
}

// Opis mieści się w 155 znakach: przy długim opisie kodu wybierana jest krótsza końcówka.
function metaKodu(k: (typeof stronyKodow)[number]) {
  const { marka, kod, opis } = k.blad
  // Długie opisy (z dopowiedzeniem po myślniku lub w nawiasie) skracamy do pierwszej części.
  const krotki = opis.split(/ – | [(]/)[0]
  const poczatek = `Błąd ${kod} ${marka}: ${krotki.toLowerCase()}.`
  const koncowki = [
    ' Przyczyny, co sprawdzić samemu i kiedy wezwać serwis. Szczecin: 601 418 645',
    ' Przyczyny i co sprawdzić. Serwis Szczecin: 601 418 645',
    ' Serwis Szczecin: 601 418 645',
  ]
  const koncowka = koncowki.find((x) => (poczatek + x).length <= 155) ?? ''
  return {
    tytul: `Błąd ${kod} ${marka} – co oznacza i jak naprawić | POL-GAZ`,
    opis: poczatek + koncowka,
    sciezka: `/bledy-kotlow/${k.slug}/`,
  }
}

export default async function StronaKodu({ params }: Props) {
  const { slug } = await params
  const k = stronyKodow.find((x) => x.slug === slug)
  if (!k) notFound()
  const { marka, kod, opis, serwis, zrodlo } = k.blad
  const inne = stronyKodow.filter((x) => x.blad.marka === marka && x.slug !== slug)
  const m = metaKodu(k)

  return (
    <>
      <JsonLd
        dane={graf(
          schemaFirmy(),
          schemaOsoby(),
          schemaStrony({ nazwa: m.tytul, opis: m.opis, sciezka: m.sciezka }),
          schemaOkruszkow([
            { nazwa: 'Kody błędów kotłów', sciezka: '/bledy-kotlow/' },
            { nazwa: `Błąd ${kod} ${marka}`, sciezka: `/bledy-kotlow/${slug}/` },
          ]),
        )}
      />
      <HeroPodstrony
        okruszki={[{ nazwa: 'Kody błędów kotłów', sciezka: '/bledy-kotlow/' }, { nazwa: `Błąd ${kod} ${marka}` }]}
        h1={`Błąd ${kod} ${marka}`}
        lead={opis}
        wyswietlacz={{ marka, kod }}
      />

      <section className="sekcja">
        <div className="kontener">
          <h2 className="h2">Co oznacza błąd {kod} w kotle {marka}?</h2>
          <div className="mt-6">
            <Odpowiedz>
              {k.znaczenie} Kotły {marka} w Szczecinie i do {firma.promienKm} km od miasta serwisuje {firma.nazwa}, tel. {firma.telefon}.
            </Odpowiedz>
          </div>

          {k.uwaga ? (
            <p className="mt-8 max-w-[68ch] rounded-[4px] border border-awaria p-4">
              <strong className="text-awaria">Uwaga.</strong> {k.uwaga}
            </p>
          ) : null}

          <h2 className="h2 mt-14">Najczęstsze przyczyny</h2>
          <ul className="mt-6 max-w-[68ch] list-disc space-y-2 pl-5">
            {k.przyczyny.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="karta border-t-4 !border-t-zolty p-6 md:p-8">
              <h2 className="h3">Co możesz sprawdzić samodzielnie?</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5">
                {k.sprawdz.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              <p className="mt-4 text-[0.9375rem] text-tekst-2">
                Nie zdejmuj obudowy kotła i nie ingeruj w instalację gazową. Przy zapachu gazu zakręć zawór, wyjdź z mieszkania i zadzwoń na
                pogotowie gazowe: 992.
              </p>
            </div>
            <div className="rounded-lg bg-tlo-alt p-6 md:p-8">
              <h2 className="h3">Co sprawdza serwisant?</h2>
              <p className="mt-4">{serwis ?? 'Serwisant ustala przyczynę na miejscu, po sprawdzeniu kotła i instalacji.'}</p>
              <p className="mt-3 text-[0.9375rem] text-tekst-2">
                Prace wewnątrz kotła i wymianę części wykonuje serwisant z uprawnieniami.
                {zrodlo ? (
                  <>
                    {' '}
                    Znaczenie kodu sprawdziliśmy w{' '}
                    <a href={zrodlo} className="link" rel="noopener nofollow">
                      instrukcji urządzenia
                    </a>
                    .
                  </>
                ) : null}
              </p>
            </div>
          </div>

          <h2 className="h2 mt-14">Kiedy wezwać serwis?</h2>
          <p className="akapit mt-4">{k.kiedyDzwonic}</p>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href={`/${serwisMarki[marka]}/`} className="link">
                {etykietaSerwisu(marka)} w Szczecinie
              </Link>
            </li>
            <li>
              {k.przeglad ? (
                <Link href="/przeglad-pieca-gazowego/" className="link">
                  Przegląd pieca gazowego
                </Link>
              ) : (
                <Link href="/naprawa-piecow-gazowych/" className="link">
                  Naprawa pieców gazowych
                </Link>
              )}
            </li>
            <li>
              <Link href={`/bledy-kotlow/#${marka.toLowerCase()}`} className="link">
                Wszystkie kody błędów {marka}
              </Link>
            </li>
            <li>
              <Link href="/awaria-kotla-gazowego/" className="link">
                Awaria kotła gazowego
              </Link>
            </li>
          </ul>

          {inne.length > 0 ? (
            <>
              <h2 className="h3 mt-10">Inne kody {marka}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {inne.map((x) => (
                  <li key={x.slug}>
                    <Link href={`/bledy-kotlow/${x.slug}/`} className="kod kod-link text-sm hover:underline">
                      {x.blad.kod}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <div className="mt-10">
            <Autor />
          </div>
        </div>
      </section>
      <Cta naglowek={`Błąd ${kod} wraca? Zadzwoń`} tekst="Podaj model kotła i kod błędu. Dojazd w Szczecinie zajmuje zwykle około 20 minut." />
    </>
  )
}
