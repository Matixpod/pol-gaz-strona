// Kody błędów. `bledy.json` to 179 kodów ze strony live. 24.11.2026 opisy i rozwiązania sprawdzono w instrukcjach
// producentów (adres w polu `zrodlo`) i przepisano tak, by użytkownik dostawał tylko czynności bezpieczne.
// `kodyRozszerzone` to osobne strony dla kodów, które mają wyświetlenia w Search Console
// (Junkers 2951, 227, 1023, 224, A4, A7, F0, 2961; Buderus 6L 229) oraz najczęstsze kody
// Vaillant i Beretta. TODO(właściciel): przejrzeć opisy przyczyn jako autor.

import dane from './bledy.json'

// `rozwiazanie`: co może zrobić użytkownik (tylko czynności bezpieczne). `serwis`: co sprawdza serwisant.
// `zrodlo`: dokument, w którym potwierdzono znaczenie kodu; brak oznacza kod do weryfikacji przez właściciela.
// `uwagi`: notatki z weryfikacji (rozbieżności między modelami, poprawki opisu). Nie są pokazywane na stronie.
export type Blad = { marka: string; kod: string; opis: string; rozwiazanie: string; serwis?: string; zrodlo?: string | null; uwagi?: string }

export const bledy = dane as Blad[]

export const markiBledow = ['Junkers', 'Buderus', 'Vaillant', 'Beretta'] as const

export const serwisMarki: Record<string, string> = {
  Junkers: 'serwis-junkers',
  Buderus: 'serwis-buderus',
  Vaillant: 'serwis-vaillant',
  Beretta: 'serwis-beretta',
}

export const slugKodu = (marka: string, kod: string) =>
  `${marka}-${kod}`.toLowerCase().replace(/\s+/g, '-')

type Rozszerzenie = {
  znaczenie: string
  przyczyny: string[]
  sprawdz: string[]
  kiedyDzwonic: string
  uwaga?: string
  // Kod jest przypomnieniem o przeglądzie: strona linkuje do przeglądu zamiast do naprawy.
  przeglad?: boolean
}

const resetRaz = 'Zresetuj kocioł jeden raz przyciskiem na panelu. Nie powtarzaj resetu wielokrotnie.'
const zaworGazu = 'Sprawdź, czy zawór gazu przy kotle i przy gazomierzu jest otwarty.'
const inneUrzadzenia = 'Sprawdź, czy działa kuchenka gazowa. Jeśli nie, przyczyną może być przerwa w dostawie gazu.'

export const kodyRozszerzone: Record<string, Rozszerzenie> = {
  'junkers-2951': {
    znaczenie:
      'Kod 2951 w kotłach Junkers i Bosch oznacza, że płomień zgasł podczas pracy zbyt wiele razy z rzędu. Sterownik blokuje wtedy kocioł dla bezpieczeństwa. Sam kod nie wskazuje jednej części: mówi, że kocioł wielokrotnie tracił płomień, a przyczynę trzeba znaleźć.',
    przyczyny: [
      'zabrudzona lub zużyta elektroda jonizacyjna',
      'zbyt niskie ciśnienie gazu',
      'zatkany syfon kondensatu',
      'niedrożny lub oblodzony przewód powietrzno-spalinowy',
      'rozregulowane spalanie po długim czasie bez przeglądu',
    ],
    sprawdz: [zaworGazu, inneUrzadzenia, 'Zimą obejrzyj z zewnątrz wylot przewodu spalinowego: czy nie jest oblodzony lub zasłonięty.', resetRaz],
    kiedyDzwonic:
      'Jeśli po jednym resecie kod 2951 wraca, potrzebny jest serwis. Serwisant sprawdzi elektrodę, ciśnienie gazu, syfon i parametry spalania.',
  },
  'junkers-227': {
    znaczenie:
      'Kod 227 (często z literami EA) w kotłach Junkers i Bosch oznacza, że kocioł próbował się zapalić, ale nie wykrył płomienia. Po kilku nieudanych próbach kocioł się blokuje.',
    przyczyny: [
      'zamknięty zawór gazu lub przerwa w dostawie gazu',
      'zużyte elektrody zapłonowa i jonizacyjna albo uszkodzony przewód',
      'zatkany syfon kondensatu',
      'usterka zaworu gazowego',
      'niedrożne odprowadzenie spalin',
    ],
    sprawdz: [zaworGazu, inneUrzadzenia, resetRaz],
    kiedyDzwonic: 'Jeśli gaz jest, a po resecie kocioł znów pokazuje 227, zadzwoń po serwis.',
  },
  'junkers-1023': {
    znaczenie:
      'Kod 1023 w kotłach Junkers i Bosch nie oznacza usterki. To przypomnienie o przeglądzie: kocioł przepracował ustawiony czas od ostatniej wizyty serwisu. Kocioł zwykle działa dalej.',
    przyczyny: ['upłynął ustawiony w sterowniku czas do następnego przeglądu'],
    sprawdz: ['Sprawdź, kiedy był ostatni przegląd kotła.', 'Umów przegląd. Komunikat kasuje serwisant po jego wykonaniu.'],
    kiedyDzwonic: 'Zadzwoń, aby umówić przegląd. Nie jest to zgłoszenie awaryjne.',
    przeglad: true,
  },
  'junkers-224': {
    znaczenie:
      'Kod 224 w kotłach Junkers i Bosch oznacza, że zadziałał ogranicznik temperatury: kocioł się przegrzał i wyłączył palnik. Najczęściej woda nie odbiera ciepła z wymiennika, bo słabo krąży w instalacji.',
    przyczyny: [
      'zbyt niskie ciśnienie wody w instalacji',
      'zapowietrzona instalacja lub kocioł',
      'zamknięte zawory przy kotle lub wszystkie głowice termostatyczne',
      'niesprawna pompa obiegowa',
      'zakamieniony wymiennik ciepła',
    ],
    sprawdz: [
      'Sprawdź ciśnienie na manometrze. Zwykle powinno wynosić 1–1,5 bara na zimnej instalacji.',
      'Otwórz głowice termostatyczne na kilku grzejnikach.',
      resetRaz,
    ],
    kiedyDzwonic: 'Jeśli ciśnienie jest prawidłowe, a kod 224 wraca, serwisant musi sprawdzić pompę, czujniki i wymiennik.',
  },
  'junkers-a4': {
    znaczenie:
      'Kod A4 w piecykach i kotłach Junkers z otwartą komorą spalania oznacza, że zadziałał czujnik spalin: spaliny zamiast do komina cofały się do pomieszczenia.',
    przyczyny: [
      'słaby ciąg kominowy, np. przy silnym wietrze lub niżu',
      'niedrożny przewód kominowy',
      'brak dopływu powietrza do pomieszczenia (szczelne okna, zasłonięta kratka)',
      'pracujący okap lub wentylator wyciągowy',
    ],
    sprawdz: [
      'Przewietrz pomieszczenie i odczekaj około 10 minut.',
      'Odsłoń kratkę nawiewną i wyłącz okap.',
      'Jeśli po przewietrzeniu urządzenie uruchomi się i kod nie wraca, obserwuj je przy kolejnych użyciach.',
      'Jeśli A4 pojawi się ponownie, wyłącz urządzenie i nie używaj go do czasu kontroli komina.',
    ],
    kiedyDzwonic: 'Jeśli A4 się powtarza, wezwij kominiarza do sprawdzenia przewodu i serwis do kontroli urządzenia. Do tego czasu nie korzystaj z urządzenia.',
    uwaga: 'Cofające się spaliny mogą zawierać tlenek węgla (czad). Nie odłączaj i nie omijaj czujnika spalin.',
  },
  'junkers-a7': {
    znaczenie: 'Kod A7 w kotłach Junkers oznacza usterkę czujnika temperatury ciepłej wody: czujnik jest uszkodzony albo ma przerwę w podłączeniu.',
    przyczyny: ['uszkodzony czujnik temperatury ciepłej wody (NTC)', 'poluzowana wtyczka lub uszkodzony przewód czujnika'],
    sprawdz: [resetRaz],
    kiedyDzwonic: 'Czujnik wymienia serwisant. Zadzwoń i podaj model kotła, żeby można było zabrać właściwą część.',
  },
  'junkers-f0': {
    znaczenie: 'Kod F0 w kotłach Junkers oznacza błąd wewnętrzny elektroniki sterującej (płyty głównej).',
    przyczyny: ['zakłócenie pracy sterownika', 'wilgoć lub zalanie elektroniki', 'luźne wtyczki na płycie', 'uszkodzona płyta główna'],
    sprawdz: ['Sprawdź, czy kocioł ma zasilanie.', resetRaz],
    kiedyDzwonic: 'Jeśli F0 wraca, serwisant sprawdzi połączenia i płytę główną.',
  },
  'junkers-2961': {
    znaczenie: 'Kod 2961 w kotłach Junkers i Bosch oznacza brak sygnału z wentylatora: sterownik nie dostaje informacji, że wentylator się obraca.',
    przyczyny: ['uszkodzony wentylator', 'uszkodzony przewód lub wtyczka wentylatora', 'nieprawidłowe napięcie zasilania'],
    sprawdz: ['Sprawdź, czy kocioł ma zasilanie.', resetRaz],
    kiedyDzwonic: 'Wentylator i jego okablowanie sprawdza serwisant. Zadzwoń, jeśli kod wraca po resecie.',
  },
  'buderus-6l-229': {
    znaczenie: 'Kod 6L 229 w kotłach Buderus oznacza brak sygnału jonizacji podczas pracy palnika: płomień zgasł w trakcie grzania.',
    przyczyny: ['zabrudzona lub zużyta elektroda jonizacyjna', 'spadek ciśnienia gazu', 'zatkany syfon kondensatu', 'niedrożne odprowadzenie spalin'],
    sprawdz: [zaworGazu, inneUrzadzenia, resetRaz],
    kiedyDzwonic: 'Jeśli błąd 6L 229 wraca, serwisant sprawdzi elektrodę, przewody i parametry spalania.',
  },
  'vaillant-f28': {
    znaczenie: 'Kod F28 w kotłach Vaillant oznacza nieudany zapłon: po kilku próbach kocioł nie wykrył płomienia i się zablokował.',
    przyczyny: ['zamknięty zawór gazu lub przerwa w dostawie gazu', 'zużyta elektroda zapłonowa', 'usterka zaworu gazowego', 'zatkany syfon kondensatu'],
    sprawdz: [zaworGazu, inneUrzadzenia, resetRaz],
    kiedyDzwonic: 'Jeśli gaz jest, a F28 wraca po resecie, wezwij serwis.',
  },
  'vaillant-f22': {
    znaczenie: 'Kod F22 w kotłach Vaillant oznacza zbyt niskie ciśnienie wody w instalacji grzewczej.',
    przyczyny: ['ubytek wody w instalacji', 'nieszczelność grzejnika, zaworu lub połączenia', 'uszkodzone naczynie przeponowe', 'usterka czujnika ciśnienia'],
    sprawdz: [
      'Sprawdź ciśnienie na wyświetlaczu lub manometrze.',
      'Jeśli jest poniżej 1 bara, uzupełnij wodę w instalacji zgodnie z instrukcją obsługi kotła, do około 1–1,5 bara.',
      'Obejrzyj grzejniki i widoczne połączenia pod kątem wycieków.',
    ],
    kiedyDzwonic: 'Jeśli ciśnienie spada ponownie w ciągu kilku dni, trzeba znaleźć przyczynę ubytku. Zadzwoń po serwis.',
  },
  'beretta-a01': {
    znaczenie: 'Kod A01 w kotłach Beretta oznacza blokadę zapłonu: kocioł nie wykrył płomienia.',
    przyczyny: ['zamknięty zawór gazu lub przerwa w dostawie gazu', 'zabrudzone elektrody zapłonowa i jonizacyjna', 'zatkany odpływ kondensatu'],
    sprawdz: [zaworGazu, inneUrzadzenia, resetRaz],
    kiedyDzwonic: 'Jeśli A01 wraca, zadzwoń. Jako autoryzowany serwis Beretta mamy części do tych kotłów.',
  },
}

export const stronyKodow = Object.keys(kodyRozszerzone)
  .map((slug) => {
    const blad = bledy.find((b) => slugKodu(b.marka, b.kod) === slug)
    return blad ? { slug, blad, ...kodyRozszerzone[slug] } : null
  })
  .filter((x): x is NonNullable<typeof x> => x !== null)

export const maStrone = (b: Blad) => slugKodu(b.marka, b.kod) in kodyRozszerzone
