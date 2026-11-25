# Audyt jakości treści i E-E-A-T — POL-GAZ Szczecin (build lokalny, 2026-11-24)

Zakres: 29 adresów z `urls-local.txt` (localhost:3977), treść z `<main>`, kod z `src/data/`. Pomiary skryptem Node (liczba słów, 5-gramy po zamaskowaniu nazw marek). Znane i zaakceptowane braki (ceny, 1 zdjęcie, uprawnienia, opinie przez widżet, cienkie Unical/Saunier Duval, krótkie kody) są tylko wymienione.

## Wynik

| Miara | Wynik |
|---|---|
| **Ocena treści (0-100)** | **58** |
| E-E-A-T łącznie (model wagowy skilla) | 57,5 |
| Experience (20%) | 45 |
| Expertise (25%) | 60 |
| Authoritativeness (25%) | 62 |
| Trustworthiness (30%) | 60 |
| Gotowość do cytowania przez AI | 52 |

Uwaga do adresów: lista URL zawiera `/naprawa-piecow-gazowych/`. CLAUDE.md opisuje `/serwis-piecow-gazowych/`, a ten adres zwraca 404 (zob. L1).

## Co działa

- Pierwszy akapit usług odpowiada na zapytanie, zawiera pełną nazwę firmy i miasto (5 usług, 6 marek).
- Fraza główna jest w URL, `<title>`, H1 i treści; bez upychania. Jeden H1 na każdej stronie.
- Dane firmy są spójne w całym serwisie: telefon, godziny, 20 min, 1994, 4 lata Ambasadora, 6 marek. Brak „całodobowo", brak 37 000 napraw i innych zakazanych twierdzeń; strona wprost zaprzecza całodobowości (FAQ na `/awaria-kotla-gazowego/`).
- Bezpieczeństwo gazowe: „992" jest na stronie kontaktu, w indeksie kodów i na każdej z 12 stron kodów; każda ma „Nie zdejmuj obudowy kotła".
- Adres `/bledy-kotlow/` zachował pełne 179 kodów (liczba spójna: Junkers 142 + Buderus 12 + Vaillant 14 + Beretta 11).
- Certyfikat i statuetki na zdjęciu są realnym dowodem doświadczenia. Autor (Podporski) jest podpisany z datą aktualizacji na usługach, markach, kodach i obszarze.
- Treść stron kodów różni się między sobą: wspólne 5-gramy po odjęciu szablonu to średnio 6%.

## Pomiary

**Liczba słów (z `<main>`, wraz z powtarzanymi blokami) a minima**

| Typ | Słów | Minimum | Ocena |
|---|---|---|---|
| Strona główna | 624 | 500 | OK |
| Usługi (5) | 470 / 517 / 520 / 610 / 381 | 800 | poniżej wszystkich; zamierzone (Sturm), ale poniżej bramki |
| Marki (6) | Beretta 370, Junkers 362, Vaillant 335, Buderus 318, S. Duval 252, Unical 237 | 800 (jak usługa) | poniżej |
| Indeks kodów | 3679 | n/d | OK |
| Kody (12) | 213-290 | n/d | zaakceptowane |
| Obszar | 482 | 500-600 (lokalna) | tuż poniżej |
| O firmie / Kontakt | 173 / 100 | n/d | cienkie |

**Bloki odpowiedzi (słowa; F = nazwa firmy, M = miasto)**

| Strona | Słów | F/M |
|---|---|---|
| naprawa | 45 | F+M |
| przegląd | 40 | F+M |
| montaż | 40 | F+M |
| awaria | 43 | F+M |
| pompy ciepła | 41 | F+M |
| Beretta | 46 | F+M |
| Junkers | 37 | F+M |
| Buderus | 38 | F+M |
| Vaillant | 33 | F+M |
| Saunier Duval | 37 | F+M |
| Unical | 35 | F+M |
| Strona główna | 39 | F+M |
| Obszar | brak (2 słowa) | brak |
| Kody (12) | 12-40, średnio ok. 22 | brak firmy i miasta |

Pytania FAQ (akapity odpowiedzi) mają 17-36 słów; firma i miasto występują tylko w części. Przykład: odpowiedź o przeglądzie (26 słów) nie ma firmy ani miasta.

**Powielanie (udział wspólnych 5-gramów, nazwy marek zamaskowane)**

| Zbiór | Surowo | Po odjęciu szablonu |
|---|---|---|
| Strony marek (średnia) | 66% | 43% |
| Beretta/Junkers | — | po ok. 24% wspólnych |
| Buderus / Vaillant | — | 45% / 37% |
| Saunier Duval ↔ Unical | 96% | 92% (unikalnych słów: 123 i 108) |
| Strony kodów | 45% | 6% (maks. 30%) |
| Usługi | 44% | 26% |

## Ustalenia

### High

**H1. Porady przy kodach w indeksie `/bledy-kotlow/` łamią regułę „nie zdejmuj obudowy”.** Około 40 wierszy z JSON-a jest zapisanych jako polecenia do klienta, a dotyczą wnętrza kotła. Przykłady: „Wyczyść elektrodę jonizacyjną, sprawdź połączenia i stan przewodów” (Buderus), „Sprawdź i oczyść elektrodę jonizacyjną… ewentualnie wymień elektrodę”, „Sprawdź wentylator i jego sterowanie, ewentualnie wymień wentylator”, „Sprawdź drożność przewodu powietrzno-spalinowego, wymień filtr powietrza”, „Sprawdź pompę, czujnik NTC oraz bezpieczniki” (Junkers E9). Ogólny dopisek u góry strony nie neutralizuje poleceń w wierszach. Plik: `src/data/bledy.json` (pole `rozwiazanie`), render w `src/app/bledy-kotlow/page.tsx`. Poprawka: przy czynnościach wewnątrz kotła zamienić polecenie na „Serwisant: …” albo „Czynność serwisowa — zadzwoń”; dla klienta zostawić manometr, zawór, zasilanie, jeden reset. Pełną listę kodów zachować (zasada 5). Wymaga decyzji właściciela, które wiersze są bezpieczne.

**H2. Sekcja „Co sprawdza serwisant?” na 12 stronach kodów to surowy tekst z bazy, w złym trybie i czasem bez sensu.** Przykłady: Junkers 2951: „Patrz usterki blokujące, które wywołują blokadę”; Junkers 1023: „Przeprowadzić przegląd.”; Junkers 2961: „Sprawdzić urządzenie, ew. wyłączyć je.”; Vaillant F22: „Uzupełnij wodę w instalacji do poziomu ok. 1–1,5 bara, odpowietrz kocioł.” (polecenie do klienta pod nagłówkiem o serwisancie); Beretta A01: „…wyczyść elektrody zapłonowe i jonizacyjne, … zresetuj kocioł”; Buderus 6L 229: „Wyczyść elektrodę jonizacyjną…”. Niżej stoi zdanie „Prace wewnątrz kotła … wykonuje serwisant”, więc strona sama sobie przeczy. Dodatkowo mieszają się tryby: bezokolicznik (227, 224) i rozkaźnik (A01, 6L 229). Plik: `src/data/bledy.ts` (`kodyRozszerzone`) i fallback na `rozwiazanie`. Poprawka: napisać jedną spójną wersję w 3. osobie („Serwisant sprawdza elektrodę jonizacyjną, ciśnienie gazu…”), akceptacja właściciela (TODO(właściciel) już w pliku).

**H3. Kod A4 (czujnik spalin) kończy się poradą „uruchom ponownie”.** Strona `/bledy-kotlow/junkers-a4/`: „Przewietrz pomieszczenie i odczekaj około 10 minut… Uruchom urządzenie ponownie.” Strona ostrzega przed czadem i zakazuje omijania czujnika, ale ponowne uruchamianie po cofaniu spalin jest ryzykowne. Brak wzmianki o czujniku CO. Poprawka: „Jeśli A4 wróci, nie używaj urządzenia, wezwij serwis i kominiarza.” Do potwierdzenia przez właściciela. Ten sam tekst jest w indeksie (A4).

**H4. Obietnica zasięgu „do 60 km” przeczy własnej tabeli.** Strona główna, usługi, obszar, kontakt: „do 60 km”, „w promieniu 60 km”; tabela na `/obszar-dzialania/`: Chojna „ok. 62 km”, Myślibórz „ok. 68 km”. Hero obszaru: „Dojeżdżamy do 60 km od Szczecina: Police, … Chojna, Myślibórz”. Plik: `src/data/firma.ts` (`promienKm: 60`, `miejscowosci`). Poprawka: „do ok. 70 km” albo usunąć Chojnę i Myślibórz; do potwierdzenia przez właściciela.

**H5. Dowód autoryzacji dotyczy tylko Beretta i jest przeterminowany.** Zdjęcie `public/images/statuetka-beretta.jpg`: „Ukończył szkolenie z zakresu montażu, konfiguracji i serwisu kotłów gazowych marki Beretta do mocy 50kW. Uprawnienia ważne są przez rok od daty wydania”, data „…06.2025”. Strona pisze „Autoryzowany serwis 6 marek” i podpis pod zdjęciem „certyfikat autoryzowanego serwisu” (wyświetlany 24.11.2026, po upływie roku). Zakres (montaż, serwis, do 50 kW) nie obejmuje pozostałych marek. CLAUDE.md zaznacza autoryzację jako potwierdzoną, więc nie uznaję tego za błąd faktu, ale to ryzyko zaufania. Poprawka: TODO(właściciel): aktualny certyfikat Beretta i dokumenty autoryzacji pozostałych 5 marek; do tego czasu opisać podpis jako „certyfikat szkoleniowy Beretta Service z czerwca 2025”.

**H6. Strona pomp ciepła sugeruje autoryzację i kompetencje, których nie potwierdzono.** `/serwis-pomp-ciepla/` ma odznaki „Autoryzowany serwis · Ambasador Beretta” i „Autoryzowany serwis 6 marek”, a zakres („czyszczenie wymiennika jednostki zewnętrznej”, „krzywa grzewcza”) oraz sekcja „Jakie pompy ciepła serwisujemy? Zadzwoń…” nie mają żadnej marki. CLAUDE.md: marki i typy pomp oraz uprawnienia F-gaz to TODO. Poprawka: zdjąć odznaki z tej podstrony i dodać po potwierdzeniu: marki i uprawnienia (F-gaz). Strona ma 1 pytanie w FAQ i blok „Kocioł pokazuje kod błędu?”, nietrafiony dla pomp.

**H7. Strony kodów nie mają bloku odpowiedzi nadającego się do cytowania.** Pierwszy akapit (12-40 słów, średnio ok. 22) nie zawiera nazwy firmy ani miasta: „Kod A01 w kotłach Beretta oznacza blokadę zapłonu: kocioł nie wykrył płomienia.” (12 słów); F0: 12 słów; F22: 13 słów. Tylko 2951 ma 40. Naruszenie reguły AEO z CLAUDE.md (40-60 słów, firma i miasto). Plik: `src/app/bledy-kotlow/[slug]/page.tsx`. Poprawka: pole `odpowiedz` 40-60 słów w stylu „Kod A01 w kotłach Beretta oznacza… Jeśli błąd wraca po jednym resecie, POL-GAZ Szczecin Wojciech Podporski sprawdzi kocioł w Szczecinie i okolicach.”

### Medium

**M1. Twierdzenia niepotwierdzone przez właściciela (zasada 2).** Do oznaczenia TODO(właściciel) albo usunięcia:
- „Używamy oryginalnych części zamiennych” (wszystkie 6 marek; „z użyciem oryginalnych części” na naprawie).
- „Najczęściej montujemy kotły Beretta, bo znamy je najlepiej” (`/montaz-kotlow-gazowych/`); „Beretta to marka, którą znamy najlepiej” (`/serwis-beretta/`).
- „ma dostęp do szkoleń producenta i oryginalnych części” (home, sekcja Ambasadora).
- „Jako autoryzowany serwis Beretta mamy części do tych kotłów” (A01).
- Czasy: „Przegląd … trwa zwykle od 45 do 90 minut”, wymiana kotła „zwykle jeden dzień roboczy”.
- „naprawa u nas nie powoduje utraty gwarancji producenta”.
- „Producenci wymagają, aby pierwsze uruchomienie … wykonał autoryzowany serwis”, „Większość producentów uzależnia od tego gwarancję” (uogólnienia bez źródła; zasada E-E-A-T: przepisy i warunki z linkiem).
- „Tytuł Ambasadora producent przyznaje … za wyniki i jakość pracy” (opis kryterium).
- Rok założenia marek na stronie głównej (Junkers 1895, Buderus 1731, Vaillant 1874, Unical 1970) i serie modeli na stronach marek (Quadra, Ciao, Mynute… Logamax… Alkon, KON) bez źródeł i potwierdzenia właściciela (lista modeli to TODO w CLAUDE.md).
- Niespójne: Beretta „producent przyznaje serwisom”, home/o-firmie „serwisantom”.

**M2. Usługi i marki poniżej minimum słów.** Usługi 381-610 vs. 800; marki 237-370. To zgodne z zasadą „kompaktowych” stron, ale poniżej bramki jakości. Zalecenie: nie dopisywać waty; dodać tylko to, co ma dowód (1-2 prawdziwe opisy napraw od właściciela, zdjęcia z pracy, konkretne kody dla marki). Źródłem decyzji powinna być konkurencja (CLAUDE.md).

**M3. Saunier Duval i Unical są prawie identyczne: 92-96% wspólnych 5-gramów** (123 i 108 unikalnych słów). Akapity różnią się wyłącznie nazwą marki i listą serii. Ryzyko traktowania jako szablon (QRG: powtarzalna struktura). Plik: `src/data/marki.ts`, szablon `src/app/[slug]/page.tsx`. Poprawka: albo dodać treść unikalną (TODO(właściciel): doświadczenia z tymi markami, typowe usterki, kody), albo scalić/noindex do czasu uzupełnienia. Zbiorczo strony marek: średnio 43% wspólnego tekstu po odjęciu bloków globalnych.

**M4. Bloki odpowiedzi poniżej 40 słów na 6 stronach** (Vaillant 33, Unical 35, Junkers 37, Saunier Duval 37, Buderus 38, home 39); `/obszar-dzialania/` ma 0 (brak bloku odpowiedzi; pierwszy akapit nie pada w polu `odpowiedz`). Poprawka: dopisać po 5-10 słów (konkret: zakres i godziny).

**M5. Odpowiedzi FAQ są krótkie (17-36 słów) i często bez nazwy firmy/miasta.** Przykład: „Raz w roku. Większość producentów uzależnia od tego gwarancję…” (przegląd). Samodzielnie nie nadają się do cytowania. Poprawka: w pierwszym zdaniu powtórzyć „POL-GAZ Szczecin”/„w Szczecinie”.

**M6. Strona usług przeglądu, montażu i awarii powtarzają zdanie „Cenę podamy przez telefon, po krótkim opisie urządzenia i usterki.”** Na przeglądzie i montażu „usterki” jest nietrafione („po krótkim opisie urządzenia i usterki”), a pytanie „Ile kosztuje…” dostaje odpowiedź bez liczby (zaakceptowany brak cen, ale tekst warto dopasować: „zakresu przeglądu”, „zakresu montażu”). Plik: `src/data/uslugi.ts` (pole `cena`).

**M7. Układ strony awarii: ostrzeżenie o gazie pod listą porad.** Na `/awaria-kotla-gazowego/` kolejność: „Co zrobić, zanim przyjedzie serwis?” → dopiero potem „Czujesz gaz?”. Przy YMYL ostrzeżenie „Czujesz gaz? … 992” powinno być pierwsze, nad listą. Instrukcja jest merytorycznie poprawna, choć „zakręć zawór” stoi przed „wyjdź”; wystarczy dopisać „zadzwoń z zewnątrz”.

**M8. Niespójność trybu i polecenia spoza listy „bezpiecznych” (CLAUDE.md).** Porady poza listą (manometr, jeden reset, zawór, zasilanie): „Uzupełnij wodę zaworem napełniania do około 1–1,5 bara” (F22, strona Vaillant, FAQ), „Odpowietrz grzejniki”, „Otwórz głowice termostatyczne” (224), „Odłącz kocioł od zasilania na minutę” (F0; to zasilanie, ale razem z „zresetuj” daje dwa resety). Nie wymagają zdejmowania obudowy, więc Medium; do zaakceptowania przez właściciela i dopisania do listy bezpiecznych czynności.

**M9. Eksperckość i wiarygodność: o-firmie jest cienka (173 słowa).** Brak: rodzaju uprawnień (TODO), liczby serwisantów (zakazana, niepotwierdzona), historii, zdjęć z pracy, linku do profilu Google/Facebooka (`firma.profilGoogle`, `firma.facebook` puste, więc nie ma `sameAs`). Jedyny dowód to zdjęcie z certyfikatem. Sugestia: TODO(właściciel): 3-5 zdań o tym, jak wygląda wizyta, jakie naprawy wykonuje najczęściej, rok pierwszej autoryzacji; zdjęcia z pracy.

### Low

**L1. Rozbieżność dokumentacji z kodem: slug.** CLAUDE.md wymienia `/serwis-piecow-gazowych/` (fraza z największą liczbą wyświetleń), a build ma `/naprawa-piecow-gazowych/`; stary adres daje 404. W Search Console: „naprawa pieców gazowych szczecin” 547 wyświetleń (poz. 38,8), „serwis pieców gazowych szczecin” 416. Strona główna ma w tytule „Serwis pieców gazowych Szczecin”, więc frazy nie kanibalizują się, ale dokument trzeba poprawić albo zdecydować o adresie. Sprawdzić przekierowania ze starej wersji live.

**L2. Tytuł `/serwis-beretta/`: „Serwis kotłów Beretta Szczecin”.** Zgodne z regułą „kotłów Beretta”, ale dwie najczęstsze frazy z Search Console to „beretta serwis szczecin” (614 wyświetleń) i „beretta szczecin” (512). Wariant bez „kotłów” jest tylko w URL (`serwis-beretta`). Świadomy kompromis; warto dodać wariant w H2 lub tekście linków.

**L3. Nagłówek H2 „Serwis kotłów Beretta Quadra” (strona Beretta)** zawęża stronę do jednej serii, mimo zdania „oraz pozostałe serie”. W Search Console jest „serwis kotłów quadra szczecin” (249 wyświetleń), więc intencja jest, ale potwierdzić z właścicielem, że Quadra to seria Beretta, którą serwisują.

**L4. Zdania brzmiące szablonowo.** „Naprawą pieców gazowych w Szczecinie i do 60 km od miasta zajmuje się POL-GAZ Szczecin Wojciech Podporski.” (szyk wymuszony pod frazę, powtórzony w 12 wariantach); „Serwis Junkers w Szczecinie prowadzi POL-GAZ…” (identyczny szkielet na 6 markach); „Kocioł nie grzeje albo nie ma ciepłej wody? Zadzwoń.”; strony miejscowości na `/obszar-dzialania/`: 6 akapitów różniących się tylko nazwą, km i minutami (ryzyko „doorway”; CLAUDE.md słusznie ogranicza do jednej strony). „Najczęstsze przyczyny” dla 1023 ma jeden punkt.

**L5. Liczba lat jest liczona dynamicznie** (`lataNaRynku()`, dziś 32). Przy statycznym buildzie wartość zmieni się dopiero po kolejnym wdrożeniu (np. w styczniu 2027 strona będzie mówić 32, choć jest 33); `dataAktualizacji` jest stałą. Zalecenie: rewalidacja lub przebudowa co rok.

**L6. Kontakt (100 słów) i polityka prywatności.** Kontakt nie wspomina o formularzu ani adresie profilu; zostaje telefon i e-mail. Polityka bez daty wejścia w życie (TODO(właściciel): przegląd tekstu; już w CLAUDE.md). Atrybut `alt` logo w nagłówku jest pusty (dopuszczalne dla dekoracji).

## Sprzeczności z CLAUDE.md i między stronami

- „Do 60 km” a tabela 62/68 km (H4).
- Godziny, 20 minut, 1994, Ambasador 2019/2020/2021/2025, 6 marek: spójne we wszystkich stronach; brak „całodobowo/7 dni”.
- „Autoryzowany serwis” na stronie pomp ciepła (H6) i „Ambasador Beretta” jako odznaka na każdej usłudze, także nie-Beretta (to prawdziwy wyróżnik, ale na stronach Saunier Duval/Unical/pomp ciepła mało trafny).
- Niewymienione w CLAUDE.md, a obecne: „oryginalne części”, „45-90 minut”, „jeden dzień roboczy”, lata założenia marek (M1).
- Superlatywy bez pokrycia: nie znaleziono „najlepszy/najwyższa jakość”; najbliższe to „znamy je najlepiej” (M1) i „Kocioł … zna od środka” (home).

## Priorytety napraw (kolejność)

1. H1, H2, H3: bezpieczeństwo i spójność treści kodów (największy ruch, YMYL).
2. H4, H5, H6: fakty do potwierdzenia przez właściciela (zasięg, certyfikaty, pompy ciepła).
3. H7, M4, M5: bloki odpowiedzi 40-60 słów z nazwą firmy i miastem (strony kodów, marki, obszar).
4. M1: usunąć lub oznaczyć niepotwierdzone twierdzenia.
5. M3: Saunier Duval/Unical: unikalna treść albo scalenie.
