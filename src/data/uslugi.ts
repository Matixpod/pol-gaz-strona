// Strony usług. Jedna strona = jedna fraza główna (URL, title, H1, pierwszy akapit).
// Frazy dobrane z danych Search Console (12 miesięcy do 24.11.2026).
// Ceny: TODO(właściciel) — pole `cena` zostaje puste do czasu podania cennika.

// `zrodlo`: link do przepisu lub dokumentu, na który powołuje się odpowiedź.
export type Pytanie = { pytanie: string; odpowiedz: string; zrodlo?: { nazwa: string; url: string } }

export type Usluga = {
  slug: string
  nazwa: string
  tytul: string
  opis: string
  h1: string
  lead: string
  odpowiedz: string
  zakresNaglowek: string
  zakres: string[]
  sekcje: { naglowek: string; akapity: string[] }[]
  pytania: Pytanie[]
  cena: string | null
  powiazane: string[]
  // Ramka „Czujesz gaz?” nad treścią strony (strony o awariach).
  ostrzezenieGaz?: boolean
  // Plakietka autoryzacji w hero dotyczy kotłów gazowych; na innych urządzeniach ją pomijamy.
  bezPlakietki?: boolean
}

export const uslugi: Usluga[] = [
  {
    slug: 'naprawa-piecow-gazowych',
    nazwa: 'Naprawa pieców gazowych',
    tytul: 'Naprawa pieców gazowych Szczecin – kotły, piecyki | POL-GAZ',
    opis: 'Naprawa pieców gazowych w Szczecinie: kotły i piecyki gazowe. Dojazd ok. 20 minut, oryginalne części, 6 marek. Od 1994 r. Tel. 601 418 645',
    h1: 'Naprawa pieców gazowych w Szczecinie',
    lead: 'Naprawiamy piece, kotły i piecyki gazowe marek Beretta, Junkers, Buderus, Vaillant, Unical i Saunier Duval. W Szczecinie dojeżdżamy zwykle w około 20 minut.',
    odpowiedz:
      'Naprawą pieców gazowych w Szczecinie i do 70 km od miasta zajmuje się POL-GAZ Szczecin Wojciech Podporski. Serwisant przyjeżdża od poniedziałku do piątku w godzinach 8:00–18:00, diagnozuje usterkę na miejscu i naprawia kocioł z użyciem oryginalnych części. W weekendy przyjmujemy tylko awarie, po uzgodnieniu telefonicznym.',
    zakresNaglowek: 'Co naprawiamy w piecach gazowych?',
    zakres: [
      'brak zapłonu i zanik płomienia',
      'brak ciepłej wody lub ogrzewania',
      'spadki i skoki ciśnienia w instalacji',
      'kody błędów na wyświetlaczu',
      'nieszczelności i wycieki z kotła',
      'głośna praca: stuki, szumy, gwizdy',
      'usterki pompy, wentylatora, zaworu gazowego i elektroniki',
      'kotły kondensacyjne i starsze kotły atmosferyczne',
    ],
    sekcje: [
      {
        naglowek: 'Jak wygląda naprawa kotła gazowego?',
        akapity: [
          'Zaczynamy od rozmowy telefonicznej. Podaj markę i model kotła, kod błędu z wyświetlacza i opisz, co się dzieje. Często już na tym etapie wiadomo, jaką część zabrać.',
          'Na miejscu serwisant sprawdza zapłon, ciśnienie gazu i wody, czujniki oraz odprowadzenie spalin. Po znalezieniu przyczyny mówi, co trzeba zrobić i ile to będzie kosztować, zanim zacznie naprawę.',
          'Po naprawie uruchamiamy kocioł, sprawdzamy szczelność i parametry spalania.',
        ],
      },
      {
        naglowek: 'Naprawa piecyków gazowych',
        akapity: [
          'Naprawiamy też piecyki gazowe, czyli przepływowe podgrzewacze wody, potocznie nazywane junkersami. Przy zgłoszeniu podaj markę i model z tabliczki znamionowej.',
        ],
      },
      {
        naglowek: 'Naprawa gwarancyjna i pogwarancyjna',
        akapity: [
          'Jesteśmy autoryzowanym serwisem, więc naprawa u nas nie powoduje utraty gwarancji producenta. Naprawiamy też kotły po gwarancji, w tym starsze modele, do których części trzeba zamówić.',
        ],
      },
    ],
    pytania: [
      {
        pytanie: 'Jak szybko przyjedzie serwisant do awarii pieca gazowego w Szczecinie?',
        odpowiedz:
          'Na terenie Szczecina dojazd serwisu POL-GAZ zajmuje zwykle około 20 minut od wyjazdu. Termin wizyty ustalamy telefonicznie pod numerem 601 418 645. Poza Szczecinem czas dojazdu zależy od odległości, orientacyjnie 30–75 minut.',
      },
      {
        pytanie: 'Czy naprawiacie piece gazowe w weekendy?',
        odpowiedz:
          'Pracujemy od poniedziałku do piątku w godzinach 8:00–18:00. W soboty i niedziele przyjmujemy wyłącznie awarie, po wcześniejszym uzgodnieniu telefonicznym.',
      },
      {
        pytanie: 'Czy warto naprawiać stary piec gazowy?',
        odpowiedz:
          'Zależy od usterki i dostępności części. Wymiana elektrody, czujnika czy naczynia przeponowego zwykle się opłaca. Jeśli uszkodzony jest wymiennik albo płyta główna w kilkunastoletnim kotle, serwisant porówna koszt naprawy z kosztem wymiany na nowy kocioł kondensacyjny.',
      },
    ],
    cena: null,
    powiazane: ['awaria-kotla-gazowego', 'przeglad-pieca-gazowego', 'montaz-kotlow-gazowych'],
  },
  {
    slug: 'przeglad-pieca-gazowego',
    nazwa: 'Przegląd pieca gazowego',
    tytul: 'Przegląd pieca gazowego Szczecin – kotły gazowe | POL-GAZ',
    opis: 'Przegląd pieca gazowego w Szczecinie: czyszczenie, kontrola szczelności, analiza spalin, protokół. Autoryzowany serwis od 1994 r. Tel. 601 418 645',
    h1: 'Przegląd pieca gazowego w Szczecinie',
    lead: 'Coroczny przegląd kotła gazowego z czyszczeniem, kontrolą szczelności i analizą spalin. Po przeglądzie dostajesz protokół.',
    odpowiedz:
      'Przegląd pieca gazowego w Szczecinie wykonuje POL-GAZ Szczecin Wojciech Podporski, autoryzowany serwis działający od 1994 roku. Przegląd obejmuje czyszczenie palnika i wymiennika, kontrolę szczelności połączeń gazowych, sprawdzenie zabezpieczeń i analizę spalin. Wizytę kończy protokół, którego producenci wymagają do utrzymania gwarancji.',
    zakresNaglowek: 'Co obejmuje przegląd kotła gazowego?',
    zakres: [
      'czyszczenie palnika i wymiennika ciepła',
      'czyszczenie syfonu kondensatu w kotłach kondensacyjnych',
      'kontrola szczelności połączeń gazowych',
      'sprawdzenie zabezpieczeń i czujników',
      'kontrola ciśnienia w naczyniu przeponowym',
      'analiza spalin i regulacja spalania',
      'sprawdzenie elektrod zapłonowej i jonizacyjnej',
      'protokół z przeglądu',
    ],
    sekcje: [
      {
        naglowek: 'Jak często robić przegląd pieca gazowego?',
        akapity: [
          'Raz w roku. Większość producentów uzależnia od tego gwarancję, a regularnie czyszczony kocioł zużywa mniej gazu i rzadziej się psuje.',
          'Najlepszy termin to wiosna i lato. Poza sezonem grzewczym łatwiej o dogodny termin, a ewentualną usterkę można usunąć, zanim zrobi się zimno.',
        ],
      },
      {
        naglowek: 'Przegląd gwarancyjny',
        akapity: [
          'Przeglądy gwarancyjne wykonujemy jako autoryzowany serwis. Wpis w karcie gwarancyjnej i protokół dostajesz na miejscu.',
        ],
      },
    ],
    pytania: [
      {
        pytanie: 'Ile trwa przegląd pieca gazowego?',
        odpowiedz:
          'Przegląd kotła gazowego trwa zwykle od 45 do 90 minut. Czas zależy od typu kotła i stopnia zabrudzenia wymiennika. Kotły kondensacyjne wymagają dodatkowo czyszczenia syfonu kondensatu.',
      },
      {
        pytanie: 'Ile kosztuje przegląd pieca gazowego w Szczecinie?',
        odpowiedz:
          'Cena przeglądu zależy od marki i typu kotła. Dokładną kwotę podamy przez telefon: 601 418 645. Za dojazd poza Szczecin może obowiązywać dopłata.',
      },
      {
        pytanie: 'Czy przegląd kotła to to samo co przegląd instalacji gazowej?',
        odpowiedz:
          'Nie. Przegląd kotła dotyczy samego urządzenia i wykonuje go serwisant. Okresowa kontrola instalacji gazowej w budynku to osobny obowiązek właściciela lub zarządcy, wynikający z Prawa budowlanego.',
        zrodlo: { nazwa: 'Prawo budowlane, art. 62 (ISAP)', url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19940890414' },
      },
    ],
    cena: null,
    powiazane: ['naprawa-piecow-gazowych', 'montaz-kotlow-gazowych'],
  },
  {
    slug: 'montaz-kotlow-gazowych',
    nazwa: 'Montaż i wymiana kotłów gazowych',
    tytul: 'Montaż kotłów gazowych Szczecin – wymiana pieca | POL-GAZ',
    opis: 'Montaż kotłów gazowych w Szczecinie i wymiana starego pieca na kondensacyjny. Dobór mocy, uruchomienie, gwarancja producenta. Tel. 601 418 645',
    h1: 'Montaż kotłów gazowych w Szczecinie',
    lead: 'Montujemy nowe kotły kondensacyjne i wymieniamy stare piece gazowe. Dobieramy moc do budynku, uruchamiamy kocioł i wpisujemy pierwsze uruchomienie do karty gwarancyjnej.',
    odpowiedz:
      'Montaż kotłów gazowych w Szczecinie i okolicach wykonuje POL-GAZ Szczecin Wojciech Podporski. Zakres obejmuje dobór kotła do budynku, demontaż starego pieca, podłączenie do instalacji gazowej, wodnej i spalinowej, pierwsze uruchomienie oraz regulację. Jako autoryzowany serwis potwierdzamy uruchomienie w karcie gwarancyjnej.',
    zakresNaglowek: 'Co obejmuje montaż kotła gazowego?',
    zakres: [
      'oględziny i dobór mocy kotła',
      'demontaż starego pieca',
      'podłączenie do instalacji c.o., wody i gazu',
      'wykonanie odprowadzenia spalin i kondensatu',
      'płukanie instalacji i montaż filtra',
      'pierwsze uruchomienie z analizą spalin',
      'wpis do karty gwarancyjnej',
      'omówienie obsługi sterownika',
    ],
    sekcje: [
      {
        naglowek: 'Wymiana pieca gazowego na kondensacyjny',
        akapity: [
          'Nowe kotły gazowe to urządzenia kondensacyjne. Przy wymianie starego kotła atmosferycznego trzeba zwykle przerobić odprowadzenie spalin (wkład kominowy) i doprowadzić odpływ kondensatu. Sprawdzamy to podczas oględzin, żeby koszt był znany przed montażem.',
        ],
      },
      {
        naglowek: 'Jakie kotły montujemy?',
        akapity: [
          'Najczęściej montujemy kotły Beretta, bo znamy je najlepiej: Wojciech Podporski jest Ambasadorem tej marki. Montujemy też kotły Junkers (Bosch), Buderus, Vaillant, Unical i Saunier Duval.',
        ],
      },
    ],
    pytania: [
      {
        pytanie: 'Ile trwa wymiana pieca gazowego?',
        odpowiedz:
          'Wymiana kotła gazowego na nowy w tym samym miejscu zajmuje zwykle jeden dzień roboczy. Jeśli trzeba przerobić komin albo instalację, prace mogą potrwać dłużej. Termin i zakres ustalamy po oględzinach.',
      },
      {
        pytanie: 'Czy montaż przez autoryzowany serwis ma znaczenie dla gwarancji?',
        odpowiedz:
          'Tak. Producenci wymagają, aby pierwsze uruchomienie kotła wykonał autoryzowany serwis i potwierdził je w karcie gwarancyjnej. POL-GAZ Szczecin robi to w ramach montażu.',
      },
      {
        pytanie: 'Ile kosztuje montaż kotła gazowego w Szczecinie?',
        odpowiedz:
          'Koszt zależy od modelu kotła i zakresu przeróbek instalacji oraz komina. Wycenę przygotowujemy po oględzinach. Zadzwoń: 601 418 645.',
      },
    ],
    cena: null,
    powiazane: ['przeglad-pieca-gazowego', 'serwis-pomp-ciepla', 'naprawa-piecow-gazowych'],
  },
  {
    slug: 'awaria-kotla-gazowego',
    nazwa: 'Awaria kotła gazowego',
    tytul: 'Awaria kotła gazowego Szczecin – szybki dojazd | POL-GAZ',
    opis: 'Awaria kotła gazowego w Szczecinie? Dojazd ok. 20 minut w dni robocze 8–18, w weekendy po uzgodnieniu. Serwis od 1994 r. Zadzwoń: 601 418 645',
    h1: 'Awaria kotła gazowego w Szczecinie',
    lead: 'Kocioł nie grzeje albo nie ma ciepłej wody? Zadzwoń. W Szczecinie dojeżdżamy zwykle w około 20 minut.',
    odpowiedz:
      'Awarie kotłów gazowych w Szczecinie usuwa POL-GAZ Szczecin Wojciech Podporski. Zgłoszenia przyjmujemy pod numerem 601 418 645 od poniedziałku do piątku w godzinach 8:00–18:00. W soboty i niedziele przyjeżdżamy do awarii po uzgodnieniu telefonicznym. Dojazd na terenie Szczecina zajmuje zwykle około 20 minut.',
    zakresNaglowek: 'Co zrobić, zanim przyjedzie serwis?',
    zakres: [
      'zapisz kod błędu z wyświetlacza kotła',
      'sprawdź ciśnienie na manometrze (zwykle powinno wynosić 1–1,5 bara)',
      'sprawdź, czy zawór gazu przy kotle jest otwarty',
      'sprawdź, czy kocioł ma zasilanie',
      'spróbuj jednego resetu przyciskiem na panelu',
      'nie zdejmuj obudowy i nie resetuj kotła wielokrotnie',
    ],
    sekcje: [
      {
        naglowek: 'Co uznajemy za awarię?',
        akapity: [
          'Całkowity brak ogrzewania lub ciepłej wody, wyciek z kotła, powtarzającą się blokadę z kodem błędu. Takie zgłoszenia mają pierwszeństwo przed przeglądami.',
        ],
      },
    ],
    pytania: [
      {
        pytanie: 'Czy serwis kotłów POL-GAZ działa całodobowo?',
        odpowiedz:
          'Nie. Serwis POL-GAZ Szczecin pracuje od poniedziałku do piątku w godzinach 8:00–18:00. W weekendy przyjmujemy tylko awarie, po uzgodnieniu telefonicznym pod numerem 601 418 645.',
      },
      {
        pytanie: 'Kocioł pokazuje kod błędu. Co on oznacza?',
        odpowiedz:
          'Znaczenie kodu sprawdzisz w naszej bazie kodów błędów kotłów Junkers, Beretta, Vaillant i Buderus. Jeśli po jednym resecie błąd wraca, zadzwoń i podaj kod: ułatwi to przygotowanie części.',
      },
    ],
    cena: null,
    powiazane: ['naprawa-piecow-gazowych', 'przeglad-pieca-gazowego'],
    ostrzezenieGaz: true,
  },
  {
    slug: 'serwis-pomp-ciepla',
    nazwa: 'Serwis pomp ciepła',
    tytul: 'Serwis pomp ciepła Szczecin – przeglądy i naprawy | POL-GAZ',
    opis: 'Serwis pomp ciepła w Szczecinie i okolicach: przeglądy, diagnostyka błędów, naprawy. Serwis urządzeń grzewczych od 1994 r. Tel. 601 418 645',
    h1: 'Serwis pomp ciepła w Szczecinie',
    lead: 'Oprócz kotłów gazowych serwisujemy pompy ciepła: przeglądy, diagnostyka błędów i naprawy.',
    odpowiedz:
      'Serwis pomp ciepła w Szczecinie i do 70 km od miasta prowadzi POL-GAZ Szczecin Wojciech Podporski. Wykonujemy przeglądy okresowe, diagnozujemy kody błędów i usuwamy usterki. Termin wizyty ustalamy telefonicznie pod numerem 601 418 645, od poniedziałku do piątku w godzinach 8:00–18:00.',
    zakresNaglowek: 'Co obejmuje serwis pompy ciepła?',
    zakres: [
      'przegląd okresowy',
      'kontrola ciśnień i parametrów pracy',
      'czyszczenie wymiennika jednostki zewnętrznej i filtrów',
      'sprawdzenie układu hydraulicznego i naczynia przeponowego',
      'diagnostyka kodów błędów',
      'kontrola ustawień sterownika i krzywej grzewczej',
    ],
    sekcje: [
      {
        naglowek: 'Jakie pompy ciepła serwisujemy?',
        akapity: [
          // TODO(właściciel): lista marek i typów pomp ciepła oraz uprawnienia (F-gaz).
          'Zadzwoń i podaj markę oraz model urządzenia. Od razu powiemy, czy je obsługujemy.',
        ],
      },
    ],
    pytania: [
      {
        pytanie: 'Jak często serwisować pompę ciepła?',
        odpowiedz:
          'Przegląd pompy ciepła wykonuje się zwykle raz w roku, a warunki gwarancji producenta mogą tego wymagać. Regularny przegląd pozwala wcześnie wykryć spadek wydajności.',
      },
    ],
    cena: null,
    powiazane: ['montaz-kotlow-gazowych', 'naprawa-piecow-gazowych'],
    bezPlakietki: true,
  },
]

export const uslugaPoSlugu = (slug: string) => uslugi.find((u) => u.slug === slug)
