import { firma, wykonawca } from '@/data/firma'
import { meta, graf, schemaFirmy, schemaOsoby, schemaStrony, schemaOkruszkow } from '@/lib/seo'
import { JsonLd, HeroPodstrony } from '@/components/ui'

const opis = 'Kto zaprojektował i wykonał stronę POL-GAZ Szczecin, w czym jest zbudowana i jak zgłosić zauważony na niej błąd.'

export const metadata = meta({ tytul: 'O tej stronie | POL-GAZ', opis, sciezka: '/o-stronie/' })

// Jedyny link do wykonawcy w treści serwisu (drugi jest w stopce). Fakty techniczne tylko z package.json i vercel.json.
export default function OStronie() {
  return (
    <>
      <JsonLd
        dane={graf(
          schemaFirmy(),
          schemaOsoby(),
          schemaStrony({ nazwa: 'O tej stronie', opis, sciezka: '/o-stronie/' }),
          schemaOkruszkow([{ nazwa: 'O tej stronie', sciezka: '/o-stronie/' }]),
        )}
      />
      <HeroPodstrony okruszki={[{ nazwa: 'O tej stronie' }]} h1="O tej stronie" lead="Kto ją wykonał, w czym działa i jak zgłosić błąd." />
      <section className="sekcja">
        <div className="kontener">
          <h2 className="h3">Kto wykonał stronę?</h2>
          <p className="akapit mt-2">
            Stronę zaprojektował i wykonał dla nas Mateusz Podporski. W swojej jednoosobowej firmie {wykonawca.nazwa} tworzy{' '}
            <a href={wykonawca.url} className="link">
              strony internetowe i systemy dla firm ze Szczecina
            </a>
            , zajmuje się też pozycjonowaniem i wdrożeniami AI.
          </p>

          <h2 className="h3 mt-10">W czym jest zbudowana?</h2>
          <p className="akapit mt-2">
            Strona powstała w Next.js i React, z kodem w TypeScript i wyglądem w Tailwind CSS. Działa na platformie Vercel. Czcionki
            wczytujemy z własnego serwera, a nie z zewnętrznych usług.
          </p>

          <h2 className="h3 mt-10">Co to daje odwiedzającym?</h2>
          <p className="akapit mt-2">
            Podstrony otwierają się szybko, także na telefonie przy słabszym zasięgu. Układ dopasowuje się do ekranu, a na telefonie
            przycisk z numerem jest zawsze na dole. Treść da się czytać bez JavaScriptu i przeglądać samą klawiaturą, a tekst ma wyraźny
            kontrast z tłem.
          </p>

          <h2 className="h3 mt-10">Jak zgłosić błąd na stronie?</h2>
          <p className="akapit mt-2">
            Jeśli coś nie działa albo widzisz pomyłkę w treści, napisz na{' '}
            <a href={`mailto:${firma.email}`} className="link">
              {firma.email}
            </a>{' '}
            lub zadzwoń pod{' '}
            <a href={firma.telefonHref} className="link">
              {firma.telefon}
            </a>{' '}
            ({firma.godziny.krotko}). Podaj adres podstrony i opisz, co jest nie tak, a poprawimy to.
          </p>
        </div>
      </section>
    </>
  )
}
