import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { firma, miejscowosci } from '@/data/firma'
import { uslugi, uslugaPoSlugu, type Usluga } from '@/data/uslugi'
import { marki, markaPoSlugu, etykietaSerwisu, type Marka } from '@/data/marki'
import { bledy, slugKodu, maStrone } from '@/data/bledy'
import { meta, graf, schemaFirmy, schemaOsoby, schemaStrony, schemaOkruszkow, schemaUslugi } from '@/lib/seo'
import { JsonLd, CtaBledy, HeroPodstrony, Odpowiedz, PasekZaufania, Pytania, Autor, Cena, Cta, ListaLinkow } from '@/components/ui'

// Jeden szablon dla stron usług i stron marek. Treść: src/data/uslugi.ts i src/data/marki.ts.
export const dynamicParams = false

export function generateStaticParams() {
  return [...uslugi, ...marki].map((s) => ({ slug: s.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const s = uslugaPoSlugu(slug) ?? markaPoSlugu(slug)
  if (!s) return {}
  return meta({ tytul: s.tytul, opis: s.opis, sciezka: `/${s.slug}/` })
}

export default async function Strona({ params }: Props) {
  const { slug } = await params
  const usluga = uslugaPoSlugu(slug)
  if (usluga) return <StronaUslugi u={usluga} />
  const marka = markaPoSlugu(slug)
  if (marka) return <StronaMarki m={marka} />
  notFound()
}

function Obszar() {
  return (
    <section className="sekcja">
      <div className="kontener">
        <h2 className="h2">Gdzie dojeżdżamy?</h2>
        <p className="akapit mt-4">
          Szczecin (dojazd zwykle ok. {firma.dojazdSzczecinMin} minut) oraz {miejscowosci.map((m) => m.nazwa).join(', ')} i okolice do{' '}
          {firma.promienKm} km.{' '}
          <Link href="/obszar-dzialania/" className="link">
            Zobacz obszar działania i czasy dojazdu
          </Link>
          .
        </p>
        <div className="mt-10 max-w-3xl">
          <CtaBledy liczba={bledy.length} />
        </div>
        <div className="mt-8">
          <Autor />
        </div>
      </div>
    </section>
  )
}

function StronaUslugi({ u }: { u: Usluga }) {
  const sciezka = `/${u.slug}/`
  const powiazane = u.powiazane.map((s) => uslugaPoSlugu(s)).filter((x): x is Usluga => Boolean(x))
  return (
    <>
      <JsonLd
        dane={graf(
          schemaFirmy(),
          schemaOsoby(),
          schemaStrony({ nazwa: u.tytul, opis: u.opis, sciezka }),
          schemaUslugi({ nazwa: u.nazwa, opis: u.opis, sciezka }),
          schemaOkruszkow([{ nazwa: u.nazwa, sciezka }]),
        )}
      />
      <HeroPodstrony
        okruszki={[{ nazwa: u.nazwa }]}
        plakietka={u.bezPlakietki ? undefined : 'Autoryzowany serwis · Ambasador Beretta'}
        h1={u.h1}
        lead={u.lead}
      />
      <PasekZaufania />

      <section className="sekcja">
        <div className="kontener">
          {u.ostrzezenieGaz ? (
            <p className="mb-8 max-w-[68ch] rounded-[4px] border border-awaria p-4">
              <strong className="text-awaria">Czujesz gaz?</strong> Nie włączaj światła ani urządzeń elektrycznych, zakręć zawór gazu,
              otwórz okna, wyjdź z mieszkania i zadzwoń na pogotowie gazowe: 992. Serwis kotła wzywa się dopiero po usunięciu zagrożenia.
            </p>
          ) : null}
          <Odpowiedz>{u.odpowiedz}</Odpowiedz>

          <h2 className="h2 mt-14">{u.zakresNaglowek}</h2>
          <ul className="mt-6 grid max-w-4xl gap-x-10 gap-y-3 sm:grid-cols-2">
            {u.zakres.map((z) => (
              <li key={z} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.6em] h-2 w-2 shrink-0 rounded-[2px] bg-zolty" />
                {z}
              </li>
            ))}
          </ul>

          {u.sekcje.map((s) => (
            <div key={s.naglowek} className="mt-14">
              <h2 className="h2">{s.naglowek}</h2>
              {s.akapity.map((a) => (
                <p key={a} className="akapit mt-4">
                  {a}
                </p>
              ))}
            </div>
          ))}

          <div className="mt-14">
            <Cena cena={u.cena} />
          </div>
        </div>
      </section>

      <section className="sekcja bg-tlo-alt">
        <div className="kontener">
          <h2 className="h2">Jakie marki obsługujemy?</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {marki.map((m) => (
              <li key={m.slug}>
                <Link href={`/${m.slug}/`} className="karta block px-4 py-2 font-medium text-granat hover:border-granat">
                  {etykietaSerwisu(m.nazwa)}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="h2 mt-14">Powiązane usługi</h2>
          <div className="mt-6">
            <ListaLinkow
              linki={[
                ...powiazane.map((p) => ({ nazwa: p.nazwa, sciezka: `/${p.slug}/`, opis: p.lead })),
                { nazwa: 'Kody błędów kotłów', sciezka: '/bledy-kotlow/', opis: 'Sprawdź, co oznacza kod na wyświetlaczu kotła.' },
              ]}
            />
          </div>
        </div>
      </section>

      <Obszar />
      <Pytania pytania={u.pytania} />
      <Cta naglowek="Zadzwoń i umów termin" />
    </>
  )
}

function StronaMarki({ m }: { m: Marka }) {
  const sciezka = `/${m.slug}/`
  const kody = bledy.filter((b) => b.marka === m.nazwa)
  // Na stronie marki: najpierw kody z własną stroną, potem pozostałe potwierdzone w instrukcji producenta.
  // Pełna lista z opisem czynności zostaje na /bledy-kotlow/.
  const pokazane = [...kody.filter(maStrone), ...kody.filter((b) => !maStrone(b) && b.zrodlo)].slice(0, 12)
  return (
    <>
      <JsonLd
        dane={graf(
          schemaFirmy(),
          schemaOsoby(),
          schemaStrony({ nazwa: m.tytul, opis: m.opis, sciezka }),
          schemaUslugi({ nazwa: `Serwis kotłów ${m.nazwa}`, opis: m.opis, sciezka }),
          schemaOkruszkow([{ nazwa: etykietaSerwisu(m.nazwa), sciezka }]),
        )}
      />
      <HeroPodstrony okruszki={[{ nazwa: etykietaSerwisu(m.nazwa) }]} plakietka="Autoryzowany serwis" h1={m.h1} lead={m.lead} />
      <PasekZaufania />

      <section className="sekcja">
        <div className="kontener grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Odpowiedz>{m.odpowiedz}</Odpowiedz>
            <h2 className="h2 mt-14">Co robimy przy kotłach {m.nazwa}?</h2>
            {m.akapity.map((a) => (
              <p key={a} className="akapit mt-4">
                {a}
              </p>
            ))}
            {m.sekcje?.map((s) => (
              <div key={s.naglowek} className="mt-14">
                <h2 className="h2">{s.naglowek}</h2>
                {s.akapity.map((a) => (
                  <p key={a} className="akapit mt-4">
                    {a}
                  </p>
                ))}
              </div>
            ))}
            <ul className="mt-6 space-y-3">
              {[
                ['Naprawa pieców gazowych', '/naprawa-piecow-gazowych/'],
                ['Coroczny przegląd', '/przeglad-pieca-gazowego/'],
                ['Montaż i pierwsze uruchomienie', '/montaz-kotlow-gazowych/'],
              ].map(([n, s]) => (
                <li key={s}>
                  <Link href={s} className="link">
                    {n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <aside className="karta h-fit p-6">
            <Image
              src={m.logo}
              alt={`Logo ${m.nazwa}`}
              width={m.logoW}
              height={m.logoH}
              sizes="160px"
              className="h-12 w-auto max-w-[160px] object-contain object-left"
            />
            <h2 className="h3 mt-6">Serwisowane serie {m.nazwa}</h2>
            <ul className="mt-3 space-y-1">
              {m.modele.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-tekst-2">Masz inny model? Zadzwoń i podaj nazwę z tabliczki znamionowej.</p>
          </aside>
        </div>
      </section>

      {kody.length > 0 ? (
        <section className="sekcja bg-tlo-alt">
          <div className="kontener">
            <h2 className="h2">Kody błędów kotłów {m.nazwa}</h2>
            <p className="akapit mt-4">
              {pokazane.length < kody.length
                ? `Poniżej ${pokazane.length} z ${kody.length} kodów ${m.nazwa}, które mamy w bazie.`
                : `W bazie mamy ${kody.length} kodów ${m.nazwa}.`}{' '}
              Wybierz kod, żeby zobaczyć, co możesz zrobić sam i co sprawdza serwisant.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pokazane.map((b) => (
                <li key={b.kod}>
                  <Link
                    href={
                      maStrone(b)
                        ? `/bledy-kotlow/${slugKodu(b.marka, b.kod)}/`
                        : `/bledy-kotlow/?marka=${encodeURIComponent(b.marka)}&q=${encodeURIComponent(b.kod)}`
                    }
                    className="karta group flex h-full items-center gap-4 p-4 transition-colors duration-150 hover:border-granat"
                  >
                    <span className="wyswietlacz shrink-0 px-3 py-2 text-lg">{b.kod}</span>
                    <span className="text-[0.9375rem] font-medium leading-snug group-hover:text-granat">{b.opis.split(/ – | [(]/)[0]}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <Link href={`/bledy-kotlow/?marka=${encodeURIComponent(m.nazwa)}#${m.nazwa.toLowerCase()}`} className="link">
                Zobacz wszystkie kody {m.nazwa} ({kody.length})
              </Link>
            </p>
          </div>
        </section>
      ) : null}

      <Obszar />
      <Pytania pytania={m.pytania} naglowek={`Pytania o kotły ${m.nazwa}`} />
      <Cta naglowek={`${etykietaSerwisu(m.nazwa)}: zadzwoń`} />
    </>
  )
}
