import Link from 'next/link'
import { firma, miejscowosci } from '@/data/firma'
import { meta, graf, schemaFirmy, schemaOsoby, schemaStrony, schemaOkruszkow } from '@/lib/seo'
import { JsonLd, HeroPodstrony, Odpowiedz, Autor, Cta } from '@/components/ui'

const strona = {
  tytul: 'Serwis pieców gazowych Police, Goleniów, Stargard, Gryfino',
  opis: 'Obszar działania POL-GAZ: Szczecin oraz Police, Gryfino, Goleniów, Stargard, Chojna i Myślibórz. Orientacyjne czasy dojazdu serwisu. Tel. 601 418 645',
  sciezka: '/obszar-dzialania/',
}

export const metadata = meta(strona)

export default function ObszarDzialania() {
  return (
    <>
      <JsonLd dane={graf(
          schemaFirmy(),
          schemaOsoby(),
          schemaStrony({ nazwa: strona.tytul, opis: strona.opis, sciezka: strona.sciezka }),
          schemaOkruszkow([{ nazwa: 'Obszar działania', sciezka: '/obszar-dzialania/' }]),
        )} />
      <HeroPodstrony
        okruszki={[{ nazwa: 'Obszar działania' }]}
        h1="Obszar działania: Police, Goleniów, Stargard, Gryfino i okolice"
        lead={`Dojeżdżamy do ${firma.promienKm} km od Szczecina: Police, Gryfino, Goleniów, Stargard, Chojna, Myślibórz i miejscowości po drodze.`}
      />
      <section className="sekcja">
        <div className="kontener">
          <Odpowiedz>
            POL-GAZ Szczecin Wojciech Podporski serwisuje piece i kotły gazowe w Szczecinie oraz w promieniu {firma.promienKm} km od miasta.
            Na terenie Szczecina dojazd zajmuje zwykle około {firma.dojazdSzczecinMin} minut. Do miejscowości poza Szczecinem czas dojazdu
            wynosi orientacyjnie od 30 do 75 minut.
          </Odpowiedz>

          <h2 className="h2 mt-14">Ile trwa dojazd serwisu?</h2>
          <div className="mt-6 max-w-2xl overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-linia text-sm text-tekst-2">
                  <th className="py-3 pr-4 font-medium">Miejscowość</th>
                  <th className="py-3 pr-4 font-medium">Odległość od Szczecina</th>
                  <th className="py-3 font-medium">Dojazd (orientacyjnie)</th>
                </tr>
              </thead>
              <tbody className="tabular-nums">
                <tr className="border-b border-linia">
                  <td className="py-3 pr-4 font-medium">Szczecin</td>
                  <td className="py-3 pr-4">na miejscu</td>
                  <td className="py-3">ok. {firma.dojazdSzczecinMin} min</td>
                </tr>
                {miejscowosci.map((m) => (
                  <tr key={m.nazwa} className="border-b border-linia">
                    <td className="py-3 pr-4 font-medium">{m.nazwa}</td>
                    <td className="py-3 pr-4">ok. {m.km} km</td>
                    <td className="py-3">ok. {m.min} min</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="akapit mt-4 text-sm text-tekst-2">
            Czasy poza Szczecinem to szacunek z odległości drogowej. Rzeczywisty czas zależy od ruchu i od tego, gdzie akurat pracuje
            serwisant. Termin potwierdzamy przez telefon.
          </p>

          {miejscowosci.map((m) => (
            <div key={m.nazwa} className="mt-12">
              <h2 className="h2">Serwis pieców gazowych {m.nazwa}</h2>
              <p className="akapit mt-4">
                Naprawy, przeglądy i montaż kotłów gazowych {m.miejscownik} wykonujemy z dojazdem ze Szczecina: około {m.km} km,
                orientacyjnie {m.min} minut. Obsługujemy kotły Beretta, Junkers, Buderus, Vaillant, Unical i Saunier Duval. Za dojazd poza
                Szczecin może obowiązywać dopłata, którą podajemy przy umawianiu wizyty.
              </p>
            </div>
          ))}

          <h2 className="h2 mt-14">Usługi z dojazdem</h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {[
              ['Naprawa pieców gazowych', '/naprawa-piecow-gazowych/'],
              ['Przegląd pieca gazowego', '/przeglad-pieca-gazowego/'],
              ['Montaż kotłów gazowych', '/montaz-kotlow-gazowych/'],
              ['Awaria kotła gazowego', '/awaria-kotla-gazowego/'],
            ].map(([n, s]) => (
              <li key={s}>
                <Link href={s} className="link">
                  {n}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Autor />
          </div>
        </div>
      </section>
      <Cta naglowek="Sprawdź termin dojazdu" />
    </>
  )
}
