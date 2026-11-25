import Link from 'next/link'
import { firma, miejscowosci } from '@/data/firma'
import { meta, graf, schemaFirmy, schemaOsoby, schemaStrony, schemaOkruszkow } from '@/lib/seo'
import { JsonLd, HeroPodstrony } from '@/components/ui'

export const metadata = meta({
  tytul: 'Kontakt – POL-GAZ Szczecin, serwis pieców gazowych',
  opis: 'Kontakt z serwisem POL-GAZ Szczecin: tel. 601 418 645, polgazszczecin@wp.pl. Poniedziałek–piątek 8:00–18:00, w weekendy awarie po uzgodnieniu.',
  sciezka: '/kontakt/',
})

export default function Kontakt() {
  return (
    <>
      <JsonLd
        dane={graf(schemaFirmy(), schemaOsoby(), schemaStrony({ nazwa: 'Kontakt z serwisem POL-GAZ Szczecin', opis: 'Telefon, e-mail, godziny pracy i obszar działania serwisu POL-GAZ Szczecin.', sciezka: '/kontakt/', typ: 'ContactPage' }), schemaOkruszkow([{ nazwa: 'Kontakt', sciezka: '/kontakt/' }]))}
      />
      <HeroPodstrony
        okruszki={[{ nazwa: 'Kontakt' }]}
        h1="Kontakt z serwisem POL-GAZ"
        lead="Najszybciej przez telefon. Podaj markę i model kotła oraz kod błędu, jeśli się wyświetla."
      />
      <section className="sekcja">
        <div className="kontener grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="h2">Dane kontaktowe</h2>
            <dl className="mt-6 grid grid-cols-[8rem_1fr] gap-y-3">
              <dt className="text-tekst-2">Telefon</dt>
              <dd>
                <a href={firma.telefonHref} className="link tabular-nums">
                  {firma.telefon}
                </a>
              </dd>
              <dt className="text-tekst-2">E-mail</dt>
              <dd>
                <a href={`mailto:${firma.email}`} className="link">
                  {firma.email}
                </a>
              </dd>
              <dt className="text-tekst-2">Firma</dt>
              <dd>{firma.nazwa}</dd>
              <dt className="text-tekst-2">NIP</dt>
              <dd className="tabular-nums">{firma.nip}</dd>
            </dl>
          </div>
          <div>
            <h2 className="h2">Godziny pracy</h2>
            <dl className="mt-6 grid grid-cols-[10rem_1fr] gap-y-3">
              <dt className="text-tekst-2">Poniedziałek–piątek</dt>
              <dd className="tabular-nums">8:00–18:00</dd>
              <dt className="text-tekst-2">Sobota i niedziela</dt>
              <dd>tylko awarie, po uzgodnieniu telefonicznym</dd>
            </dl>
            <h2 className="h2 mt-12">Gdzie dojeżdżamy?</h2>
            <p className="akapit mt-4">
              Nie prowadzimy punktu przyjęć: przyjeżdżamy do klienta. Szczecin, {miejscowosci.map((m) => m.nazwa).join(', ')} i okolice do{' '}
              {firma.promienKm} km.{' '}
              <Link href="/obszar-dzialania/" className="link">
                Czasy dojazdu
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="kontener mt-12">
          <p className="max-w-[68ch] rounded-[4px] border border-awaria p-4">
            <strong className="text-awaria">Czujesz gaz?</strong> Zakręć zawór, otwórz okna, wyjdź z mieszkania i zadzwoń na pogotowie
            gazowe: 992.
          </p>
        </div>
      </section>
    </>
  )
}
