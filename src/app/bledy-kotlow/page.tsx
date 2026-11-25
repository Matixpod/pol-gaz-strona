import Link from 'next/link'
import { bledy, markiBledow, slugKodu, maStrone, stronyKodow, serwisMarki, type Blad } from '@/data/bledy'
import { etykietaSerwisu } from '@/data/marki'
import { meta, graf, schemaFirmy, schemaOsoby, schemaStrony, schemaOkruszkow } from '@/lib/seo'
import { JsonLd, HeroPodstrony, Autor, Cta } from '@/components/ui'
import ListaBledow from '@/components/ListaBledow'

// Ten adres ma najwięcej ruchu z Google (kody Junkers). Pełna lista kodów zostaje na tej stronie.
const strona = {
  tytul: 'Kody błędów kotłów gazowych – Junkers, Buderus, Vaillant',
  opis: `Kody błędów kotłów gazowych: ${bledy.length} kodów Junkers, Buderus, Vaillant i Beretta z opisem i wskazówkami, co sprawdzić. Serwis Szczecin: 601 418 645`,
  sciezka: '/bledy-kotlow/',
}

export const metadata = meta(strona)

export default function BledyKotlow() {
  const grupy = markiBledow.map((marka) => ({
    marka,
    // Do komponentu klienckiego idą tylko pola widoczne na liście (bez źródeł i notatek z weryfikacji).
    kody: bledy
      .filter((b) => b.marka === marka)
      .map(({ marka, kod, opis, rozwiazanie, serwis }) => ({ marka, kod, opis, rozwiazanie, serwis, slug: maStrone({ marka, kod } as Blad) ? slugKodu(marka, kod) : null })),
  }))

  return (
    <>
      <JsonLd dane={graf(
          schemaFirmy(),
          schemaOsoby(),
          schemaStrony({ nazwa: strona.tytul, opis: strona.opis, sciezka: strona.sciezka }),
          schemaOkruszkow([{ nazwa: 'Kody błędów kotłów', sciezka: '/bledy-kotlow/' }]),
        )} />
      <HeroPodstrony
        okruszki={[{ nazwa: 'Kody błędów kotłów' }]}
        h1="Kody błędów kotłów gazowych"
        lead={`${bledy.length} kodów kotłów Junkers, Buderus, Vaillant i Beretta. Sprawdź, co oznacza kod na wyświetlaczu i co możesz zrobić sam.`}
      />

      <section className="sekcja">
        <div className="kontener">
          <p className="odpowiedz lead">
            Kod błędu na wyświetlaczu kotła gazowego wskazuje, który element zgłosił problem: zapłon, ciśnienie wody, czujnik albo
            odprowadzenie spalin. Znajdź swój kod poniżej. Jeśli po jednym resecie błąd wraca, zadzwoń do serwisu POL-GAZ Szczecin i podaj
            kod oraz model kotła.
          </p>

          <p className="mt-6 max-w-[68ch] rounded-[4px] border border-awaria p-4 text-[0.9375rem]">
            <strong className="text-awaria">Czujesz gaz?</strong> Zakręć zawór, otwórz okna, wyjdź z mieszkania i zadzwoń na pogotowie
            gazowe: 992.
          </p>

          <p className="mt-4 max-w-[68ch] rounded-[4px] border border-linia p-4 text-[0.9375rem]">
            <strong>Co możesz zrobić sam:</strong> sprawdzić ciśnienie na manometrze, zawór gazu i zasilanie oraz wykonać jeden reset.
            Przy każdym kodzie podajemy też, co sprawdza serwisant. Te prace wykonuje osoba z uprawnieniami. Nie zdejmuj obudowy kotła.
          </p>

          <h2 className="h3 mt-10">Najczęściej szukane kody</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {stronyKodow.map((k) => (
              <li key={k.slug}>
                <Link href={`/bledy-kotlow/${k.slug}/`} className="kod kod-link text-sm hover:underline">
                  {k.blad.marka} {k.blad.kod}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <ListaBledow grupy={grupy} />
          </div>

          <h2 className="h2 mt-14">Serwis kotłów w Szczecinie</h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {markiBledow.map((m) => (
              <li key={m}>
                <Link href={`/${serwisMarki[m]}/`} className="link">
                  {etykietaSerwisu(m)}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/awaria-kotla-gazowego/" className="link">
                Awaria kotła gazowego
              </Link>
            </li>
          </ul>
          <div className="mt-8">
            <Autor />
          </div>
        </div>
      </section>
      <Cta naglowek="Błąd wraca po resecie? Zadzwoń" tekst="Podaj markę, model i kod błędu. Przygotujemy właściwe części." />
    </>
  )
}
