# CLAUDE.md — POL-GAZ Szczecin

Strona firmowa serwisu pieców i kotłów gazowych: https://polgaz-szczecin.pl

Dokumenty powiązane: `DESIGN.md` (system wizualny), `PLAN-PRZEBUDOWY.md` (analiza SEO, dane z Search Console, dalsze etapy).

## Stan projektu (24.11.2026)

Projekt został odbudowany od zera jako strona wielopodstronowa pod Vercel. Poprzednie pliki źródłowe w tym folderze były nieczytelne, więc treści, kody błędów i grafiki przeniesiono z wersji live. Nowa wersja nie jest jeszcze wdrożona: live nadal działa stara strona na Hostingerze.

Folder nie jest repozytorium git. Przed wdrożeniem na Vercel trzeba je założyć.

## Zasady nienaruszalne

1. **`/protokol` zostaje bez zmian.** To narzędzie właściciela (drukowany protokół serwisowy). Jest wierną kopią wersji live w `public/protokol-app/` (HTML i skompilowane skrypty), podpiętą przez `rewrites` w `next.config.ts`. Nie edytuj tych plików, nie przenoś ich i nie przepisuj strony na nowy komponent. Protokół zapisuje podpowiedzi w `localStorage` przeglądarki właściciela (klucz `formSuggestions`), więc musi działać pod tym samym adresem i domeną.
2. **Nie wymyślaj faktów o firmie.** Ceny, uprawnienia, autoryzacje, liczby, godziny i opinie pochodzą wyłącznie od właściciela. Brakujący fakt oznacz `TODO(właściciel)` i zapytaj.
3. **Jedna wersja każdego faktu.** Dane firmy są w `src/data/firma.ts`. Treść, stopka i dane strukturalne czytają stamtąd.
4. **Bez widocznych gradientów**, bez animacji ozdobnych. Szczegóły w `DESIGN.md`.
5. **Adres `/bledy-kotlow/` zachowuje pełną listę kodów.** To strona z największym ruchem z Google (184 kliknięcia i 22 tys. wyświetleń w 12 miesięcy). Nie przenoś z niej treści na inne adresy.
6. **Plik `public/images/pol-gaz-logo.WebP` ma zostać z tą wielkością liter.** Odwołuje się do niego kopia `/protokol`, a Vercel rozróżnia wielkość liter.

## Firma (potwierdzone przez właściciela)

| | |
|---|---|
| Nazwa | POL-GAZ Szczecin Wojciech Podporski |
| NIP | 8521839815 |
| Działalność | serwis, naprawa, przeglądy i montaż pieców gazowych; dodatkowo serwis pomp ciepła |
| Poza zakresem | klimatyzacja, kolektory słoneczne |
| Od | 1994 roku (liczbę lat wylicza `lataNaRynku()`) |
| Wyróżnik | Wojciech Podporski, Ambasador marki Beretta w latach 2019, 2020, 2021 i 2025 |
| Marki | Beretta, Junkers/Bosch, Buderus, Vaillant, Unical, Saunier Duval; autoryzowany serwis, także gwarancyjny |
| Godziny | pon.–pt. 8:00–18:00; w weekendy tylko awarie, po uzgodnieniu telefonicznym. Nie pisać „całodobowo” ani „7 dni w tygodniu” |
| Dojazd | Szczecin ok. 20 minut; poza Szczecinem szacunki w `miejscowosci` (do 70 km) |
| Telefon | 601 418 645 |
| E-mail | polgazszczecin@wp.pl |
| Adres | brak punktu przyjęć; firma dojeżdża do klienta |

Do uzupełnienia (`TODO(właściciel)` w kodzie):

- cennik: przegląd, diagnoza, dojazd, montaż (`cena` w `src/data/uslugi.ts`),
- adres profilu Google i Facebooka (`firma.profilGoogle`, `firma.facebook`),
- rodzaj i numery uprawnień (gazowe, F-gaz),
- marki i typy serwisowanych pomp ciepła,
- potwierdzenie list modeli na stronach marek (`src/data/marki.ts`),
- przegląd opisów przyczyn na stronach kodów błędów (`kodyRozszerzone` w `src/data/bledy.ts`) oraz kodów z notatką w polu `uwagi` w `bledy.json`; pięć kodów nie ma źródła: Buderus 4A, IC, E0, Vaillant F37, Beretta D,
- prawdziwe zdjęcia z pracy i zdjęcia kotłów; do tego czasu jedynym zdjęciem jest `statuetka-beretta.jpg`,
- przegląd tekstu polityki prywatności.

Nieużywane, bo niepotwierdzone: „ponad 37 000 napraw”, „2 serwisantów”, „najstarszy serwis w Szczecinie”, ocena 5,0 z 47 opinii.

## Technologia

- Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4. Bez dodatkowych bibliotek.
- Hosting docelowy: Vercel. Adresy ze skośnikiem na końcu (`trailingSlash: true`).
- Nagłówki bezpieczeństwa i `X-Robots-Tag` dla `/protokol` są w `next.config.ts`.
- Czcionki z własnego serwera (`public/fonts`, definicje w `src/app/fonts.css`): Barlow Semi Condensed (nagłówki, telefon), IBM Plex Sans (tekst), IBM Plex Mono (kody błędów). Bez `next/font/google`, bo build na Vercelu wysypywał się przy pobieraniu czcionek z Google.
- Opinie: widżet Shapo doczytywany po przewinięciu do sekcji (`src/components/Opinie.tsx`).
- Strona działa bez JavaScriptu poza wyszukiwarką kodów i widżetem opinii. Menu mobilne to `<details>`, listy rozwijane w nagłówku otwiera `:hover` i `:focus-within`. JavaScript dokłada w menu tylko oznaczenie bieżącej strony (`src/components/LinkMenu.tsx`).

```bash
npm install
npm run dev      # serwer deweloperski
npm run build    # build produkcyjny
npm run start    # podgląd buildu
```

## Struktura

```
src/data/firma.ts        dane firmy, miejscowości, data aktualizacji
src/data/uslugi.ts       treść stron usług
src/data/marki.ts        treść stron marek
src/data/bledy.json      179 kodów błędów: opis, rozwiazanie (dla użytkownika), serwis (co sprawdza serwisant), zrodlo, uwagi
src/data/bledy.ts        strony pojedynczych kodów (kodyRozszerzone)
src/lib/seo.ts           metadane i dane strukturalne
src/components/ui.tsx    hero podstron, blok odpowiedzi, pytania, CTA, autor
src/app/[slug]/          szablon stron usług i marek
src/app/bledy-kotlow/    indeks kodów i strony pojedynczych kodów
public/protokol-app/     kopia /protokol — nie ruszać
```

Adresy:

```
/                              strona główna; fraza „serwis pieców gazowych Szczecin”
/naprawa-piecow-gazowych/      naprawa pieców, kotłów i piecyków (największe pojedyncze zapytanie)
/przeglad-pieca-gazowego/
/montaz-kotlow-gazowych/
/awaria-kotla-gazowego/
/serwis-pomp-ciepla/
/serwis-beretta/  /serwis-junkers/  /serwis-buderus/
/serwis-vaillant/  /serwis-saunier-duval/  /serwis-unical/
/bledy-kotlow/                 pełna lista kodów
/bledy-kotlow/{marka}-{kod}/   12 kodów wybranych z Search Console
/obszar-dzialania/  /o-firmie/  /kontakt/  /polityka-prywatnosci/
/protokol/                     bez zmian, noindex
```

Nową stronę usługi lub marki dodaje się wpisem w pliku danych; szablon, mapa witryny, stopka i menu zaktualizują się same. Nową stronę kodu dodaje się wpisem w `kodyRozszerzone`.

## Zasady SEO przy pisaniu i kodowaniu

Jedna podstrona = jedna główna fraza. Zanim dodasz stronę, sprawdź, czy fraza nie jest już przypisana. „Serwis pieców gazowych Szczecin” należy do strony głównej, „naprawa pieców gazowych Szczecin” do `/naprawa-piecow-gazowych/`; `/obszar-dzialania/` ma w H1 miejscowości, bez Szczecina.

**Cztery miejsca na frazę główną** (Kyle Roof): adres URL, `<title>`, H1 i treść akapitów. Warianty idą do H2, H3, atrybutów `alt` i tekstów linków. Bez upychania.

**Słownictwo z danych.** W Search Console klienci częściej wpisują „piec gazowy” niż „kocioł gazowy”, dlatego „piec” jest w adresach i tytułach stron naprawy i przeglądu, a „kocioł” w treści i przy montażu. Przy frazach z marką Beretta zawsze „kotłów Beretta” (samo „Beretta” zwraca wyniki o broni); teksty linków do stron marek bierz z `etykietaSerwisu()` w `src/data/marki.ts`.

**Strony usług są krótkie i sprzedażowe** (Edward Sturm, „compact keywords”): odpowiedź w pierwszym akapicie, zakres, cena, dowód, telefon. Bez wstępów.

**Długość i słownictwo wynikają z konkurencji.** Przed rozbudową strony sprawdź trzy najwyżej stojące strony firm (nie katalogi) na daną frazę.

**Odwrócony silos.** Artykuł poradnikowy linkuje do swojej strony usługowej i do 1–2 pokrewnych artykułów. Każda podstrona ma co najmniej 3 linki przychodzące.

**AEO i GEO.** H2 w formie pytań, pod spodem 40–60 słów bezpośredniej odpowiedzi z pełną nazwą firmy i miastem (pole `odpowiedz`, komponent `Odpowiedz`). Liczby w tabelach HTML. Data aktualizacji w `dataAktualizacji`.

**E-E-A-T.** Autor (komponent `Autor`) na stronach usług, marek i kodów. Twierdzenia o przepisach linkują do źródła.

**Dane strukturalne.** Graf JSON-LD z `src/lib/seo.ts`: `HVACBusiness`, `Person`, `WebPage` (autor i data, `schemaStrony`), `Service`, `BreadcrumbList`. Zakazane: `aggregateRating` wpisana na sztywno, `HowTo`, nowe `FAQPage`.

**Miejscowości.** Jedna strona `/obszar-dzialania/`. Osobną stronę miasta robimy dopiero, gdy jest unikalna treść; pierwszym kandydatem jest Goleniów (167 wyświetleń na „serwis pieców gazowych goleniów”).

## Styl pisania

- Po polsku, konkretnie, w pierwszej osobie liczby mnogiej („naprawiamy”, „dojeżdżamy”).
- Bez superlatyw bez pokrycia. Zamiast „najwyższa jakość” podaj, co dokładnie jest robione i co klient dostaje.
- Bezpieczeństwo gazowe: przy zapachu gazu zawsze kieruj do pogotowia gazowego 992. Porady „sprawdź sam” ograniczaj do czynności bezpiecznych: ciśnienie na manometrze, jeden reset, zawór gazu, zasilanie. Nigdy nie zalecaj zdejmowania obudowy ani omijania czujników. W `bledy.json` pole `rozwiazanie` zawiera wyłącznie czynności bezpieczne dla użytkownika, a czynności serwisowe są w polu `serwis` (zdanie zaczynające się od „Serwisant”). Kody bez `zrodlo` nie zostały potwierdzone w instrukcji producenta.
