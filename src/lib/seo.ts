import type { Metadata } from 'next'
import { firma, miejscowosci, ambasadorLata, dataAktualizacji, wykonawca } from '@/data/firma'

const abs = (sciezka: string) => `${firma.url}${sciezka}`

export function meta(o: { tytul: string; opis: string; sciezka: string }): Metadata {
  return {
    title: o.tytul,
    description: o.opis,
    alternates: { canonical: o.sciezka },
    openGraph: {
      title: o.tytul,
      description: o.opis,
      url: o.sciezka,
      siteName: firma.krotka,
      locale: 'pl_PL',
      type: 'website',
      // Obraz z src/app/opengraph-image.tsx. Bez tego wpisu podstrony gubią obraz podglądu,
      // bo własny obiekt openGraph zastępuje ten odziedziczony ze strony głównej.
      images: [{ url: '/opengraph-image/', width: 1200, height: 630, alt: `${firma.krotka} – serwis pieców i kotłów gazowych` }],
    },
    twitter: { card: 'summary_large_image' },
  }
}

const ID_FIRMY = `${firma.url}/#firma`
const ID_OSOBY = `${firma.url}/#wojciech-podporski`
const ID_WITRYNY = `${firma.url}/#witryna`

export function schemaWitryny() {
  return {
    '@type': 'WebSite',
    '@id': ID_WITRYNY,
    url: firma.url,
    name: firma.krotka,
    inLanguage: 'pl-PL',
    publisher: { '@id': ID_FIRMY },
    creator: { '@type': 'ProfessionalService', '@id': wykonawca.id, name: wykonawca.nazwa, url: wykonawca.url },
  }
}

// Węzeł strony: łączy treść z autorem i datą aktualizacji (E-E-A-T). Używać razem z schemaOsoby().
export function schemaStrony(o: { nazwa: string; opis: string; sciezka: string; typ?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' }) {
  return {
    '@type': o.typ ?? 'WebPage',
    '@id': `${abs(o.sciezka)}#strona`,
    url: abs(o.sciezka),
    name: o.nazwa,
    description: o.opis,
    inLanguage: 'pl-PL',
    isPartOf: { '@id': ID_WITRYNY },
    about: { '@id': ID_FIRMY },
    author: { '@id': ID_OSOBY },
    publisher: { '@id': ID_FIRMY },
    dateModified: dataAktualizacji,
  }
}

export function schemaFirmy() {
  const sameAs = [firma.profilGoogle, firma.facebook].filter(Boolean)
  return {
    '@type': 'HVACBusiness',
    '@id': ID_FIRMY,
    name: firma.nazwa,
    alternateName: firma.krotka,
    url: firma.url,
    logo: abs('/web-app-manifest-512x512.png'),
    image: abs('/images/statuetka-beretta.jpg'),
    telephone: firma.telefonE164,
    email: firma.email,
    taxID: firma.nip,
    vatID: `PL${firma.nip}`,
    foundingDate: String(firma.rokZalozenia),
    founder: { '@id': ID_OSOBY },
    address: {
      '@type': 'PostalAddress',
      addressLocality: firma.miasto,
      addressRegion: firma.wojewodztwo,
      addressCountry: 'PL',
    },
    areaServed: [firma.miasto, ...miejscowosci.map((m) => m.nazwa)].map((name) => ({ '@type': 'City', name })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: firma.godziny.otwarcie,
        closes: firma.godziny.zamkniecie,
      },
    ],
    ...(sameAs.length ? { sameAs } : {}),
  }
}

export function schemaOsoby() {
  return {
    '@type': 'Person',
    '@id': ID_OSOBY,
    name: firma.wlasciciel,
    url: abs('/o-firmie/'),
    jobTitle: 'Serwisant kotłów gazowych, właściciel',
    worksFor: { '@id': ID_FIRMY },
    award: `Ambasador marki Beretta (${ambasadorLata})`,
    knowsAbout: ['kotły gazowe', 'kotły kondensacyjne', 'pompy ciepła', 'Beretta'],
  }
}

export function schemaOkruszkow(elementy: { nazwa: string; sciezka: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ nazwa: 'Strona główna', sciezka: '/' }, ...elementy].map((e, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: e.nazwa,
      item: abs(e.sciezka),
    })),
  }
}

export function schemaUslugi(o: { nazwa: string; opis: string; sciezka: string }) {
  return {
    '@type': 'Service',
    '@id': `${abs(o.sciezka)}#usluga`,
    name: o.nazwa,
    description: o.opis,
    url: abs(o.sciezka),
    provider: { '@id': ID_FIRMY },
    areaServed: [firma.miasto, ...miejscowosci.map((m) => m.nazwa)].map((name) => ({ '@type': 'City', name })),
  }
}

// Węzeł witryny trafia do każdego grafu, bo strony odwołują się do niego przez isPartOf.
export function graf(...wezly: object[]) {
  return { '@context': 'https://schema.org', '@graph': [schemaWitryny(), ...wezly] }
}
