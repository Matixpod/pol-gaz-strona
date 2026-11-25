// Strony marek. Frazy z Search Console: „serwis beretta szczecin”, „serwis buderus szczecin”,
// „naprawa junkersów szczecin”, „serwis saunier duval szczecin”, „serwis kotłów quadra szczecin”.
// Listy modeli to przykłady popularnych serii — TODO(właściciel): potwierdzić i uzupełnić.

import type { Pytanie } from './uslugi'

export type Marka = {
  slug: string
  nazwa: string
  bledySlug: string | null
  logo: string
  logoW: number
  logoH: number
  tytul: string
  opis: string
  h1: string
  lead: string
  odpowiedz: string
  modele: string[]
  akapity: string[]
  // Dodatkowe sekcje H2 pod warianty frazy (model, potoczna nazwa).
  sekcje?: { naglowek: string; akapity: string[] }[]
  pytania: Pytanie[]
}

// Tekst linku do strony marki. Przy Beretcie zawsze „kotłów Beretta” (samo „Beretta” to w Google broń).
export const etykietaSerwisu = (nazwa: string) => (nazwa === 'Beretta' ? 'Serwis kotłów Beretta' : `Serwis ${nazwa}`)

const wspolneAkapity = (marka: string) => [
  `Naprawiamy kotły ${marka} na gwarancji i po gwarancji. Używamy oryginalnych części zamiennych.`,
  `Wykonujemy też coroczne przeglądy kotłów ${marka} z wpisem do karty gwarancyjnej oraz pierwsze uruchomienia nowych urządzeń.`,
]

export const marki: Marka[] = [
  {
    slug: 'serwis-beretta',
    nazwa: 'Beretta',
    bledySlug: 'beretta',
    logo: '/images/brands/beretta.png',
    logoW: 168,
    logoH: 38,
    tytul: 'Serwis kotłów Beretta Szczecin – Ambasador marki | POL-GAZ',
    opis: 'Autoryzowany serwis kotłów Beretta w Szczecinie. Wojciech Podporski, Ambasador marki Beretta 2019, 2020, 2021 i 2025. Naprawy, przeglądy. Tel. 601 418 645',
    h1: 'Serwis kotłów Beretta w Szczecinie',
    lead: 'Autoryzowany serwis Beretta prowadzony przez Ambasadora marki. Naprawy, przeglądy gwarancyjne i pierwsze uruchomienia.',
    odpowiedz:
      'Autoryzowany serwis kotłów Beretta w Szczecinie prowadzi POL-GAZ Szczecin Wojciech Podporski. Właściciel otrzymał tytuł Ambasadora marki Beretta w latach 2019, 2020, 2021 i 2025. Serwis naprawia kotły Beretta na gwarancji i po gwarancji, wykonuje przeglądy i pierwsze uruchomienia w Szczecinie i do 70 km od miasta.',
    modele: ['Quadra', 'Ciao', 'Mynute', 'Exclusive', 'Power'],
    akapity: [
      'Beretta to marka, którą znamy najlepiej. Tytuł Ambasadora producent przyznaje serwisom za wyniki i jakość pracy; Wojciech Podporski otrzymał go czterokrotnie.',
      ...wspolneAkapity('Beretta'),
    ],
    sekcje: [
      {
        naglowek: 'Serwis kotłów Beretta Quadra',
        akapity: [
          'POL-GAZ Szczecin serwisuje kotły Beretta Quadra oraz pozostałe serie tej marki, zarówno kondensacyjne, jak i starsze modele. Zakres jest ten sam: naprawy, coroczne przeglądy i pierwsze uruchomienia.',
        ],
      },
    ],
    pytania: [
      {
        pytanie: 'Co oznacza błąd A01 w kotle Beretta?',
        odpowiedz:
          'Kod A01 w kotłach Beretta oznacza blokadę zapłonu: kocioł nie wykrył płomienia. Sprawdź, czy zawór gazu jest otwarty, i zresetuj kocioł jeden raz. Jeśli błąd wraca, potrzebny jest serwis.',
      },
    ],
  },
  {
    slug: 'serwis-junkers',
    nazwa: 'Junkers',
    bledySlug: 'junkers',
    logo: '/images/brands/junkers.png',
    logoW: 5000,
    logoH: 886,
    tytul: 'Serwis Junkers Szczecin – naprawa kotłów Bosch | POL-GAZ',
    opis: 'Serwis Junkers w Szczecinie: naprawa kotłów i piecyków Junkers oraz Bosch, przeglądy, kody błędów. Autoryzowany serwis od 1994 r. Tel. 601 418 645',
    h1: 'Serwis Junkers w Szczecinie',
    lead: 'Naprawa i przeglądy kotłów oraz piecyków gazowych Junkers, obecnie sprzedawanych pod marką Bosch.',
    odpowiedz:
      'Serwis Junkers w Szczecinie prowadzi POL-GAZ Szczecin Wojciech Podporski. Naprawiamy kotły gazowe i piecyki łazienkowe Junkers oraz nowsze urządzenia Bosch, wykonujemy przeglądy i usuwamy usterki sygnalizowane kodami błędów. Dojeżdżamy w Szczecinie i do 70 km od miasta, od poniedziałku do piątku w godzinach 8:00–18:00.',
    modele: ['Cerapur', 'Ceraclass', 'Cerastar', 'Euroline', 'Bosch Condens'],
    akapity: [
      'Junkers należy do grupy Bosch i nowe kotły tej marki sprzedawane są jako Bosch. Serwisujemy jedne i drugie.',
      ...wspolneAkapity('Junkers i Bosch'),
    ],
    pytania: [
      {
        pytanie: 'Co oznacza błąd 2951 w kotle Junkers?',
        odpowiedz:
          'Kod 2951 w kotłach Junkers i Bosch oznacza zbyt wiele zerwań płomienia podczas pracy. Kocioł blokuje się dla bezpieczeństwa. Przyczyny szuka serwisant: najczęściej chodzi o elektrodę, ciśnienie gazu, syfon kondensatu albo odprowadzenie spalin.',
      },
    ],
    sekcje: [
      {
        naglowek: 'Naprawa junkersów i piecyków gazowych',
        akapity: [
          'Naprawiamy przepływowe podgrzewacze wody, czyli piecyki łazienkowe potocznie nazywane junkersami, oraz kotły jedno- i dwufunkcyjne tej marki.',
        ],
      },
    ],
  },
  {
    slug: 'serwis-buderus',
    nazwa: 'Buderus',
    bledySlug: 'buderus',
    logo: '/images/brands/buderus.png',
    logoW: 960,
    logoH: 250,
    tytul: 'Serwis Buderus Szczecin – naprawa kotłów gazowych | POL-GAZ',
    opis: 'Serwis Buderus w Szczecinie: naprawy i przeglądy kotłów gazowych Buderus Logamax, kody błędów. Autoryzowany serwis od 1994 r. Tel. 601 418 645',
    h1: 'Serwis Buderus w Szczecinie',
    lead: 'Naprawy i przeglądy kotłów gazowych Buderus, w tym kondensacyjnych Logamax plus.',
    odpowiedz:
      'Serwis Buderus w Szczecinie prowadzi POL-GAZ Szczecin Wojciech Podporski. Naprawiamy i przeglądamy kotły gazowe Buderus, diagnozujemy kody błędów i wykonujemy pierwsze uruchomienia. Dojeżdżamy w Szczecinie i do 70 km od miasta, od poniedziałku do piątku w godzinach 8:00–18:00. Termin ustalamy telefonicznie: 601 418 645.',
    modele: ['Logamax plus GB062', 'Logamax plus GB072', 'Logamax plus GB172', 'Logamax plus GB192', 'Logamax U'],
    akapity: wspolneAkapity('Buderus'),
    pytania: [
      {
        pytanie: 'Co oznacza błąd 6L 229 w kotle Buderus?',
        odpowiedz:
          'Kod 6L 229 w kotłach Buderus oznacza brak sygnału jonizacji podczas pracy palnika, czyli zanik płomienia. Zresetuj kocioł jeden raz. Jeśli błąd wraca, serwisant sprawdzi elektrodę jonizacyjną, przewody i dopływ gazu.',
      },
    ],
  },
  {
    slug: 'serwis-vaillant',
    nazwa: 'Vaillant',
    bledySlug: 'vaillant',
    logo: '/images/brands/vaillant.png',
    logoW: 1440,
    logoH: 810,
    tytul: 'Serwis Vaillant Szczecin – naprawa kotłów gazowych | POL-GAZ',
    opis: 'Serwis Vaillant w Szczecinie: naprawy i przeglądy kotłów ecoTEC, atmoTEC i turboTEC, kody błędów F. Autoryzowany serwis od 1994 r. Tel. 601 418 645',
    h1: 'Serwis Vaillant w Szczecinie',
    lead: 'Naprawy i przeglądy kotłów gazowych Vaillant: kondensacyjnych ecoTEC i starszych atmoTEC oraz turboTEC.',
    odpowiedz:
      'Serwis Vaillant w Szczecinie prowadzi POL-GAZ Szczecin Wojciech Podporski. Naprawiamy i przeglądamy kotły gazowe Vaillant, usuwamy usterki sygnalizowane kodami F i wykonujemy pierwsze uruchomienia. Dojeżdżamy w Szczecinie i do 70 km od miasta, od poniedziałku do piątku w godzinach 8:00–18:00.',
    modele: ['ecoTEC plus', 'ecoTEC pro', 'atmoTEC', 'turboTEC'],
    akapity: wspolneAkapity('Vaillant'),
    pytania: [
      {
        pytanie: 'Co oznacza błąd F28 w kotle Vaillant?',
        odpowiedz:
          'Kod F28 w kotłach Vaillant oznacza nieudany zapłon: kocioł nie wykrył płomienia przy rozruchu. Sprawdź, czy zawór gazu jest otwarty, i zresetuj kocioł jeden raz. Jeśli błąd wraca, wezwij serwis.',
      },
      {
        pytanie: 'Co oznacza błąd F22 w kotle Vaillant?',
        odpowiedz:
          'Kod F22 oznacza zbyt niskie ciśnienie wody w instalacji. Uzupełnij wodę do około 1–1,5 bara. Jeśli ciśnienie znów spada, trzeba znaleźć przyczynę ubytku.',
      },
    ],
  },
  {
    slug: 'serwis-saunier-duval',
    nazwa: 'Saunier Duval',
    bledySlug: null,
    logo: '/images/brands/saunier-duval.png',
    logoW: 1280,
    logoH: 698,
    tytul: 'Serwis Saunier Duval Szczecin – naprawa kotłów | POL-GAZ',
    opis: 'Serwis Saunier Duval w Szczecinie: naprawy i przeglądy kotłów gazowych Thema, Isotwin i Semia. Autoryzowany serwis od 1994 r. Tel. 601 418 645',
    h1: 'Serwis Saunier Duval w Szczecinie',
    lead: 'Naprawy i przeglądy kotłów gazowych Saunier Duval.',
    odpowiedz:
      'Serwis Saunier Duval w Szczecinie prowadzi POL-GAZ Szczecin Wojciech Podporski. Naprawiamy i przeglądamy kotły gazowe Saunier Duval oraz wykonujemy pierwsze uruchomienia. Dojeżdżamy w Szczecinie i do 70 km od miasta, od poniedziałku do piątku w godzinach 8:00–18:00. Termin ustalamy telefonicznie: 601 418 645.',
    modele: ['Thema Condens', 'Isotwin Condens', 'ThemaFast', 'Semia Condens'],
    akapity: wspolneAkapity('Saunier Duval'),
    pytania: [],
  },
  {
    slug: 'serwis-unical',
    nazwa: 'Unical',
    bledySlug: null,
    logo: '/images/brands/unical.png',
    logoW: 690,
    logoH: 256,
    tytul: 'Serwis Unical Szczecin – naprawa kotłów gazowych | POL-GAZ',
    opis: 'Serwis Unical w Szczecinie: naprawy i przeglądy kotłów gazowych Unical. Autoryzowany serwis od 1994 r. Dojazd do 70 km. Tel. 601 418 645',
    h1: 'Serwis Unical w Szczecinie',
    lead: 'Naprawy i przeglądy kotłów gazowych Unical.',
    odpowiedz:
      'Serwis Unical w Szczecinie prowadzi POL-GAZ Szczecin Wojciech Podporski. Naprawiamy i przeglądamy kotły gazowe Unical oraz wykonujemy pierwsze uruchomienia. Dojeżdżamy w Szczecinie i do 70 km od miasta, od poniedziałku do piątku w godzinach 8:00–18:00. Termin ustalamy telefonicznie: 601 418 645.',
    modele: ['Alkon', 'KON'],
    akapity: wspolneAkapity('Unical'),
    pytania: [],
  },
]

export const markaPoSlugu = (slug: string) => marki.find((m) => m.slug === slug)

// Krótkie opisy producentów do kart na stronie głównej (przeniesione ze strony live).
export const oMarce: Record<string, string> = {
  'serwis-beretta': 'Włoski producent wysokoefektywnych kotłów kondensacyjnych, w tym serii Mythos, Aluxtra i RRT.',
  'serwis-junkers': 'Niemiecki producent kotłów gazowych i systemów grzewczych, część koncernu Bosch. Działa od 1895 roku.',
  'serwis-buderus': 'Niemiecka marka założona w 1731 roku, część grupy Bosch. Specjalizuje się w kotłach kondensacyjnych i systemach solarnych.',
  'serwis-vaillant': 'Niemiecki koncern założony w 1874 roku. Produkuje kotły kondensacyjne i pompy ciepła.',
  'serwis-saunier-duval': 'Francuski producent kotłów kondensacyjnych i systemów solarnych.',
  'serwis-unical': 'Włoski producent kotłów gazowych, pomp ciepła i systemów fotowoltaicznych. Działa od 1970 roku.',
}
