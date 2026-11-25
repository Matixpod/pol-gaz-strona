import Image from 'next/image'
import Link from 'next/link'
import { firma, lataSlownie, ambasadorLata, miejscowosci } from '@/data/firma'
import { uslugi } from '@/data/uslugi'
import { marki, oMarce, etykietaSerwisu } from '@/data/marki'
import { bledy, stronyKodow } from '@/data/bledy'
import { meta, graf, schemaFirmy, schemaOsoby } from '@/lib/seo'
import { JsonLd, Tel, Strzalka, CtaBledy, PasekZaufania, Pytania, Cta } from '@/components/ui'
import Opinie from '@/components/Opinie'

export const metadata = meta({
  tytul: 'Serwis pieców gazowych Szczecin – POL-GAZ, od 1994 r.',
  opis: 'Serwis, naprawa, przeglądy i montaż pieców gazowych w Szczecinie od 1994 r. Autoryzowany serwis 6 marek, Ambasador Beretta. Tel. 601 418 645',
  sciezka: '/',
})

const pytania = [
  {
    pytanie: 'Jakie marki pieców gazowych serwisuje POL-GAZ w Szczecinie?',
    odpowiedz:
      'POL-GAZ Szczecin Wojciech Podporski jest autoryzowanym serwisem kotłów Beretta, Junkers (Bosch), Buderus, Vaillant, Unical i Saunier Duval. Właściciel jest Ambasadorem marki Beretta.',
  },
  {
    pytanie: 'W jakich godzinach pracuje serwis?',
    odpowiedz:
      'Serwis pracuje od poniedziałku do piątku w godzinach 8:00–18:00. W soboty i niedziele przyjmujemy tylko awarie, po uzgodnieniu telefonicznym pod numerem 601 418 645.',
  },
  {
    pytanie: 'Jak szybko przyjeżdża serwisant?',
    odpowiedz:
      'Na terenie Szczecina dojazd zajmuje zwykle około 20 minut. Do Polic, Gryfina, Goleniowa i Stargardu jedziemy orientacyjnie 30–45 minut, do Chojny i Myśliborza ponad godzinę.',
  },
  {
    pytanie: 'Czy serwisujecie także pompy ciepła?',
    odpowiedz: 'Tak. Główną częścią pracy są piece i kotły gazowe, ale wykonujemy też przeglądy i naprawy pomp ciepła.',
  },
]

// Cztery najczęściej szukane kody Junkers oraz kody pozostałych marek, żeby każda strona kodu miała link ze strony głównej.
const czestoSzukane = [
  ...stronyKodow.filter((k) => k.blad.marka === 'Junkers').slice(0, 4),
  ...stronyKodow.filter((k) => k.blad.marka !== 'Junkers'),
]

export default function StronaGlowna() {
  return (
    <>
      <JsonLd
        dane={graf(schemaFirmy(), schemaOsoby())}
      />

      {/* Hero: tekst po lewej; po prawej zdjęcie statuetek Ambasadora, pod nim przesuwający się pasek logotypów marek. */}
      <section className="na-granacie bg-granat text-white">
        <div className="kontener grid items-center gap-10 py-10 md:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div>
            <p className="plakietka">Ambasador marki Beretta</p>
            <h1 className="h1 mt-4 max-w-[20ch] !text-white">Serwis pieców gazowych w Szczecinie</h1>
            <p className="lead mt-4 max-w-[52ch] text-[#d5dcf0]">
              Naprawiamy, przeglądamy i montujemy kotły gazowe od {firma.rokZalozenia} roku. Autoryzowany serwis marek Beretta, Junkers,
              Buderus, Vaillant, Unical i Saunier Duval.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Tel etykieta="Zadzwoń:" />
              <p className="text-sm text-[#d5dcf0]">
                {firma.godziny.dniRobocze}
                <br />
                dojazd w Szczecinie ok. {firma.dojazdSzczecinMin} minut
              </p>
            </div>
          </div>

          <div className="min-w-0">
            <figure className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/statuetka-beretta.jpg"
                alt="Statuetki Ambasadora marki Beretta i certyfikat autoryzowanego serwisu kotłów Beretta wystawiony dla POL-GAZ Wojciech Podporski"
                width={1067}
                height={800}
                priority
                fetchPriority="high"
                sizes="(min-width: 1024px) 540px, 100vw"
                className="aspect-[16/10] w-full object-cover object-[50%_60%]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-granat-ciemny/85 px-4 py-3 text-sm">
                <span className="font-naglowek text-lg font-bold text-zolty">Ambasador marki Beretta</span>
                <span className="ml-2 text-[#d5dcf0]">
                  {firma.wlasciciel}, {ambasadorLata}
                </span>
              </figcaption>
            </figure>

            {/* Lista jest powielona, żeby przesuw był płynny; kopia jest ukryta przed czytnikami i klawiaturą. */}
            <div className="pasek-marek mt-3" aria-label="Obsługiwane marki">
              <div className="pasek-marek-tor">
                {[false, true].map((kopia) => (
                  <ul key={String(kopia)} className="flex shrink-0 gap-3 pr-3" aria-hidden={kopia || undefined}>
                    {marki.map((m) => (
                      <li key={m.slug}>
                        <Link
                      href={`/${m.slug}/`}
                      aria-label={etykietaSerwisu(m.nazwa)}
                      tabIndex={kopia ? -1 : undefined}
                      className="flex h-16 w-36 items-center justify-center rounded-lg bg-white px-4 transition-shadow hover:shadow-[0_0_0_3px_var(--color-zolty)] sm:h-20 sm:w-44 sm:px-6"
                    >
                      <Image src={m.logo} alt={kopia ? '' : `Logo ${m.nazwa}`} width={m.logoW} height={m.logoH} sizes="140px" className="h-auto max-h-10 w-auto max-w-full object-contain sm:max-h-12" />
                    </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PasekZaufania />

      <section className="sekcja">
        <div className="kontener">
          <h2 className="h2">Czym zajmuje się serwis POL-GAZ?</h2>
          <p className="odpowiedz lead mt-6">
            POL-GAZ Szczecin Wojciech Podporski to serwis pieców i kotłów gazowych działający w Szczecinie od {firma.rokZalozenia} roku.
            Naprawiamy usterki, wykonujemy coroczne przeglądy i montujemy nowe kotły kondensacyjne. Dojeżdżamy do {firma.promienKm} km od
            Szczecina, od poniedziałku do piątku w godzinach 8:00–18:00. Termin ustalamy telefonicznie: {firma.telefon}.
          </p>
          <ul className="mt-10 max-w-3xl divide-y divide-linia border-y border-linia">
            {uslugi.map((u) => (
              <li key={u.slug}>
                <Link href={`/${u.slug}/`} className="group flex items-center justify-between gap-6 py-5">
                  <span>
                    <span className="font-naglowek text-2xl font-semibold text-granat group-hover:underline">{u.nazwa}</span>
                    <span className="mt-1 block text-tekst-2">{u.lead}</span>
                  </span>
                  <Strzalka />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sekcja bg-tlo-alt" id="marki">
        <div className="kontener xl:!max-w-[86rem]">
          <h2 className="h2">Autoryzowany serwis sześciu marek</h2>
          <p className="akapit mt-4">
            Naprawiamy kotły na gwarancji i po gwarancji. Wybierz markę, żeby zobaczyć obsługiwane modele i najczęstsze kody błędów.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:gap-4 md:grid-cols-3 xl:grid-cols-6 xl:gap-5">
            {marki.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/${m.slug}/`}
                  className="karta group flex h-full flex-col items-center p-3 text-center md:p-5 transition duration-200 hover:-translate-y-2 hover:border-granat hover:shadow-[0_12px_24px_rgb(11_23_56/0.14)] focus-visible:-translate-y-2"
                >
                  <span className="flex h-16 w-full items-center justify-center md:h-24">
                    <Image
                      src={m.logo}
                      alt={`Logo ${m.nazwa}`}
                      width={m.logoW}
                      height={m.logoH}
                      sizes="160px"
                      className="max-h-11 w-auto max-w-[120px] object-contain md:max-h-16 md:max-w-[150px]"
                    />
                  </span>
                  <span className="mt-1 flex items-center gap-1 font-naglowek text-xl font-semibold text-granat md:mt-2 md:text-2xl">
                    {m.nazwa}
                    <span className="md:hidden">
                      <Strzalka />
                    </span>
                  </span>
                  <span className="mt-2 hidden text-sm leading-snug text-tekst-2 md:block">{oMarce[m.slug]}</span>
                  <span className="mt-auto hidden items-center gap-1 pt-4 text-sm font-medium text-granat opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100 md:flex">
                    {etykietaSerwisu(m.nazwa)}
                    <Strzalka />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sekcja">
        <div className="kontener">
          <div>
            <h2 className="h2">Kim jest Ambasador marki Beretta?</h2>
            <p className="akapit mt-4">
              To tytuł, który producent kotłów Beretta przyznaje serwisantom za wyniki i jakość pracy. {firma.wlasciciel}, właściciel
              POL-GAZ, otrzymał go czterokrotnie: w latach {ambasadorLata}.
            </p>
            <p className="akapit mt-4">
              Dla klienta oznacza to serwis, który zna kotły Beretta od środka, ma dostęp do szkoleń producenta i oryginalnych części.
            </p>
            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/serwis-beretta/" className="link">
                Serwis kotłów Beretta
              </Link>
              <Link href="/o-firmie/" className="link">
                O firmie
              </Link>
            </p>
          </div>
          <div className="mt-14 md:mt-20">
            <CtaBledy
              szeroki
              liczba={bledy.length}
              kody={czestoSzukane.map((k) => ({ etykieta: `${k.blad.marka} ${k.blad.kod}`, sciezka: `/bledy-kotlow/${k.slug}/` }))}
            />
          </div>
        </div>
      </section>

      <section className="sekcja bg-tlo-alt">
        <div className="kontener">
          <h2 className="h2">Gdzie dojeżdżamy?</h2>
          <p className="akapit mt-4">
            Szczecin i miejscowości do {firma.promienKm} km. W Szczecinie jesteśmy zwykle w około {firma.dojazdSzczecinMin} minut. Czasy
            poniżej są orientacyjne.
          </p>
          <ul className="mt-6 flex max-w-3xl flex-wrap gap-x-8 gap-y-2">
            {miejscowosci.map((m) => (
              <li key={m.nazwa}>
                <span className="font-medium">{m.nazwa}</span> <span className="text-tekst-2">ok. {m.min} min</span>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/obszar-dzialania/" className="link">
              Obszar działania i dojazd
            </Link>
          </p>
        </div>
      </section>

      <Opinie />
      <Pytania pytania={pytania} />
      <Cta naglowek="Umów serwis lub przegląd" tekst={`${lataSlownie()} doświadczenia. Odbieramy ${firma.godziny.dniRobocze}.`} />
    </>
  )
}
