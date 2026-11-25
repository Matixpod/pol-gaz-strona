import { firma } from '@/data/firma'
import { meta, graf, schemaFirmy, schemaOsoby, schemaStrony, schemaOkruszkow } from '@/lib/seo'
import { JsonLd, HeroPodstrony } from '@/components/ui'

export const metadata = meta({
  tytul: 'Polityka prywatności – POL-GAZ Szczecin',
  opis: 'Informacja o przetwarzaniu danych osobowych przez POL-GAZ Szczecin Wojciech Podporski.',
  sciezka: '/polityka-prywatnosci/',
})

// TODO(właściciel): tekst wymaga przejrzenia. Zaktualizować, jeśli dojdzie formularz lub analityka.
export default function PolitykaPrywatnosci() {
  const sekcje: [string, string][] = [
    ['Kto jest administratorem danych?', `Administratorem danych osobowych jest ${firma.nazwa}, NIP ${firma.nip}. Kontakt: ${firma.telefon}, ${firma.email}.`],
    ['Jakie dane przetwarzamy?', 'Dane, które podajesz, kontaktując się z nami telefonicznie lub e-mailem: imię i nazwisko, numer telefonu, adres e-mail, adres wykonania usługi oraz informacje o urządzeniu.'],
    ['W jakim celu?', 'Aby odpowiedzieć na zapytanie, umówić i wykonać usługę serwisową, wystawić dokument sprzedaży oraz obsłużyć gwarancję. Podstawą jest art. 6 ust. 1 lit. b, c i f RODO.'],
    ['Jak długo?', 'Przez czas realizacji usługi i okres gwarancji, a dane z dokumentów księgowych przez okres wymagany przepisami podatkowymi.'],
    ['Twoje prawa', 'Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu oraz skargi do Prezesa Urzędu Ochrony Danych Osobowych.'],
    ['Pliki cookie i usługi zewnętrzne', 'Strona nie używa własnych plików cookie do śledzenia. Sekcja opinii korzysta z zewnętrznego widżetu Shapo, który wczytuje opinie z Google i może zapisywać własne pliki cookie.'],
  ]
  return (
    <>
      <JsonLd
        dane={graf(
          schemaFirmy(),
          schemaOsoby(),
          schemaStrony({ nazwa: 'Polityka prywatności – POL-GAZ Szczecin', opis: 'Informacja o przetwarzaniu danych osobowych przez POL-GAZ Szczecin Wojciech Podporski.', sciezka: '/polityka-prywatnosci/' }),
          schemaOkruszkow([{ nazwa: 'Polityka prywatności', sciezka: '/polityka-prywatnosci/' }]),
        )}
      />
      <HeroPodstrony okruszki={[{ nazwa: 'Polityka prywatności' }]} h1="Polityka prywatności" lead="Jak przetwarzamy dane osób, które się z nami kontaktują." />
      <section className="sekcja">
        <div className="kontener">
          {sekcje.map(([n, t], i) => (
            <div key={n} className={i ? 'mt-10' : ''}>
              <h2 className="h3">{n}</h2>
              <p className="akapit mt-2">{t}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
