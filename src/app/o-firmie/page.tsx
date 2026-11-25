import Image from 'next/image'
import Link from 'next/link'
import { firma, lataNaRynku, ambasadorLata } from '@/data/firma'
import { meta, graf, schemaFirmy, schemaOsoby, schemaStrony, schemaOkruszkow } from '@/lib/seo'
import { JsonLd, HeroPodstrony, Odpowiedz, Cta } from '@/components/ui'

export const metadata = meta({
  tytul: 'O firmie POL-GAZ Szczecin – Wojciech Podporski, od 1994 r.',
  opis: 'POL-GAZ Szczecin: serwis kotłów gazowych prowadzony od 1994 roku przez Wojciecha Podporskiego, Ambasadora marki Beretta 2019, 2020, 2021 i 2025.',
  sciezka: '/o-firmie/',
})

export default function OFirmie() {
  return (
    <>
      <JsonLd
        dane={graf(schemaFirmy(), schemaOsoby(), schemaStrony({ nazwa: 'O firmie POL-GAZ Szczecin', opis: 'Serwis kotłów gazowych prowadzony od 1994 roku przez Wojciecha Podporskiego.', sciezka: '/o-firmie/', typ: 'AboutPage' }), schemaOkruszkow([{ nazwa: 'O firmie', sciezka: '/o-firmie/' }]))}
      />
      <HeroPodstrony
        okruszki={[{ nazwa: 'O firmie' }]}
        h1="O firmie POL-GAZ Szczecin"
        lead={`Serwis kotłów gazowych prowadzony przez Wojciecha Podporskiego od ${firma.rokZalozenia} roku.`}
      />
      <section className="sekcja">
        <div className="kontener grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Odpowiedz>
              POL-GAZ Szczecin Wojciech Podporski to serwis pieców i kotłów gazowych działający w Szczecinie od {firma.rokZalozenia} roku,
              czyli od {lataNaRynku()} lat. Firma jest autoryzowanym serwisem marek Beretta, Junkers, Buderus, Vaillant, Unical i Saunier
              Duval, a jej właściciel czterokrotnie otrzymał tytuł Ambasadora marki Beretta.
            </Odpowiedz>

            <h2 className="h2 mt-14">Kto prowadzi serwis?</h2>
            <p className="akapit mt-4">
              {firma.wlasciciel} naprawia kotły gazowe od {firma.rokZalozenia} roku. Serwisuje też pompy ciepła.
            </p>

            <h2 className="h2 mt-14">Ambasador marki Beretta</h2>
            <p className="akapit mt-4">
              Tytuł Ambasadora producent kotłów Beretta przyznaje serwisantom za wyniki i jakość pracy. {firma.wlasciciel} otrzymał go w
              latach {ambasadorLata}.
            </p>

            <h2 className="h2 mt-14">Autoryzacje</h2>
            <p className="akapit mt-4">
              Jako autoryzowany serwis wykonujemy pierwsze uruchomienia, przeglądy i naprawy gwarancyjne kotłów sześciu marek:
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {[
                ['Beretta', '/serwis-beretta/'],
                ['Junkers', '/serwis-junkers/'],
                ['Buderus', '/serwis-buderus/'],
                ['Vaillant', '/serwis-vaillant/'],
                ['Saunier Duval', '/serwis-saunier-duval/'],
                ['Unical', '/serwis-unical/'],
              ].map(([n, s]) => (
                <li key={s}>
                  <Link href={s} className="link">
                    {n}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="h2 mt-14">Dane firmy</h2>
            <dl className="mt-4 grid max-w-xl grid-cols-[8rem_1fr] gap-y-2">
              <dt className="text-tekst-2">Nazwa</dt>
              <dd>{firma.nazwa}</dd>
              <dt className="text-tekst-2">NIP</dt>
              <dd className="tabular-nums">{firma.nip}</dd>
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
            </dl>
          </div>
          <figure>
            <Image
              src="/images/statuetka-beretta.jpg"
              alt="Statuetki Ambasadora marki Beretta i certyfikat autoryzowanego serwisu kotłów Beretta wystawiony dla POL-GAZ Wojciech Podporski"
              width={1067}
              height={800}
              sizes="(min-width: 1024px) 460px, 100vw"
              className="rounded-lg"
            />
            <figcaption className="mt-3 text-sm text-tekst-2">Statuetki Ambasadora Beretta i certyfikat autoryzowanego serwisu kotłów Beretta.</figcaption>
          </figure>
        </div>
      </section>
      <Cta naglowek="Porozmawiaj z serwisantem" />
    </>
  )
}
