# Plan przebudowy polgaz-szczecin.pl

## Aktualizacja 24.11.2026: co już zrobiono i co zmieniły dane z Search Console

Ta sekcja jest nowsza niż reszta dokumentu. Tam, gdzie się różnią, obowiązuje ona oraz `CLAUDE.md`.

**Zrobione.** Projekt odbudowany od zera pod Vercel: 29 adresów w mapie witryny (strona główna, 5 usług, 6 marek, indeks kodów, 12 stron kodów, obszar działania, o firmie, kontakt, polityka prywatności), nowy system wizualny z czcionkami A, dane strukturalne, nagłówki bezpieczeństwa, wierna kopia `/protokol`. Etapy 0–2 z sekcji 8 oraz część etapów 3 i 4.

**Dane z Search Console (12 miesięcy, 313 kliknięć, 36 tys. wyświetleń):**

| Wniosek | Liczby | Decyzja |
|---|---|---|
| Klienci wpisują „piec”, nie „kocioł” | „naprawa pieców gazowych szczecin” 547 wyświetleń, „serwis pieców gazowych szczecin” 416, „serwis kotłów gazowych szczecin” 333; wszystkie na pozycjach 34–41 | adresy `/naprawa-piecow-gazowych/` i `/przeglad-pieca-gazowego/` zamiast wersji z „kotłów”; frazę „serwis pieców gazowych Szczecin” przejęła strona główna |
| Beretta jest tuż za pierwszą stroną | „beretta serwis szczecin” 614 wyświetleń, pozycja 8,8; „beretta szczecin” 512, pozycja 11,6 | osobna strona `/serwis-beretta/` z wyeksponowanym tytułem Ambasadora |
| Buderus i Junkers też blisko | „serwis buderus szczecin” pozycja 10,5; „naprawa junkersów szczecin” 322 wyświetlenia, pozycja 24 | strony `/serwis-buderus/` i `/serwis-junkers/` |
| Awaria to osobna intencja | „awaria kotła gazowego szczecin” 309, „serwis pieców gazowych szczecin 24h” 210 | strona `/awaria-kotla-gazowego/`, bez obietnicy pracy całodobowej |
| Ruch dają kody Junkers | strona kodów: 184 kliknięcia, pozycja 7,3; najczęściej 2951, 227, 1023, 224, A4, A7 | pełna lista zostaje pod starym adresem; 12 kodów dostało własne strony |
| Model Quadra | „serwis kotłów quadra szczecin” 249 wyświetleń | Quadra wymieniona na stronie Beretta |
| Goleniów | „serwis pieców gazowych goleniów” 167 wyświetleń, pozycja 24,5 | pierwszy kandydat na osobną stronę miejscowości |
| Pompy ciepła | 1 wyświetlenie | strona jest, ale to temat na później |

**Zmiany względem pierwotnego planu:** huby marek dla kodów błędów zostały pominięte (dublowałyby treść strony, która już ma pozycje); strony klimatyzacji i kolektorów usunięte z planu (poza zakresem firmy); cennik czeka na ceny.

**Zostało do zrobienia:**

1. Repozytorium git, projekt na Vercel, przepięcie domeny z Hostingera (w Vercel ustawić przekierowanie `www` na adres główny).
2. Po wdrożeniu: zgłosić mapę witryny w Search Console, sprawdzić `/protokol/` na komputerze właściciela.
3. Uzupełnienia od właściciela wymienione w `CLAUDE.md` (ceny, profil Google, uprawnienia, zdjęcia, weryfikacja opisów kodów).
4. Poradnik (sekcja 3) i strona Goleniowa.
5. Działania poza stroną (sekcja 7).

---

Stan na 24.11.2026. Analiza wykonana na wersji live skillami claude-seo (audyt techniczny, lokalny i GEO, klastry fraz) oraz przeglądem stylu w przeglądarce. System wizualny opisuje `DESIGN.md`.

## 1. Najważniejsze wnioski

1. **Strona ma dwa adresy w indeksie i celuje jedną stroną we wszystkie frazy.** Serwis, naprawa, przegląd, montaż, sześć marek i sześć miejscowości konkurują o jeden `<title>` i jedno H1. Rozdzielenie na podstrony to największa pojedyncza zmiana w tym planie.
2. **Konkurencja w Szczecinie jest słaba.** W wynikach na frazy lokalne dominują katalogi (oferteo, pkt.pl, panoramafirm), a sprawdzone strony konkurentów mają po 3–4 podstrony usług, bez stron marek, cennika i poradnika.
3. **Firma ma mocne dowody, których strona nie wykorzystuje:** działalność od 1994 roku, czterokrotny tytuł Ambasadora Beretta, statuetki i certyfikat, baza 179 kodów błędów.
4. **Wiarygodność podkopują sprzeczności w treści** (godziny, czas dojazdu, liczba lat, autoryzacje) i ocena 5,0/47 wpisana w dane strukturalne bez źródła.
5. **Lokalna kopia kodu jest niekompletna.** Pięć plików źródłowych jest nieczytelnych, brakuje sekcji, stylów i podstrony `/protokol`. Wdrożenie wymaga aktualnego kodu (patrz sekcja 9).

Szacunkowa ocena kondycji SEO: ok. 50/100. To szacunek z przeglądu, bez danych z Google Search Console i bez pomiaru Core Web Vitals.

| Obszar | Ocena | Główny powód |
|---|---|---|
| Technika | średnia | martwe ikony i logo (404), brak przekierowania z `www`, brak nagłówków bezpieczeństwa |
| Treść | słaba | jedna strona na wszystko, sprzeczne fakty, ogólniki |
| On-page | słaba | jedno H1 i jeden tytuł na kilkanaście intencji |
| Dane strukturalne | średnia | bogaty graf, ale z ryzykowną oceną i niedziałającym logo |
| Wydajność | niezmierzona | zdjęcie hero 382 KB bez wariantów; reszta lekka |
| Widoczność w AI | słaba | brak stron pod pytania, opinie i mapa poza HTML |
| Lokalnie | niezweryfikowana | profilu Google i katalogów nie dało się sprawdzić automatycznie |

## 2. Metoda: jak łączymy Kyle'a Roofa, Edwarda Sturma, AEO, GEO i E-E-A-T

| Źródło | Zasada | Jak ją stosujemy |
|---|---|---|
| Kyle Roof | Fraza główna w czterech miejscach: URL, tytuł, H1, treść | Każda podstrona ma jedną frazę i stały schemat tych czterech pól (sekcja 4) |
| Kyle Roof | Objętość i słownictwo dopasowane do stron, które już wygrywają | Przed napisaniem strony sprawdzamy trzy najlepsze strony firmowe na frazę; nie zakładamy z góry liczby słów |
| Kyle Roof | Odwrócony silos | Artykuły poradnikowe linkują do strony usługowej i między sobą; moc trafia na strony, które zarabiają |
| Kyle Roof | Strony zaufania | „O firmie”, „Kontakt”, polityka prywatności, pełne dane firmy w stopce |
| Edward Sturm | „Compact keywords”: krótkie strony pod frazy z intencją zakupu | Strony usług i marek są zwięzłe, bez wstępów: odpowiedź, zakres, cena, dowód, telefon |
| Edward Sturm | Wiele wąskich stron zamiast jednej ogólnej | Osobne strony: usługa, marka, kod błędu, pytanie o cenę |
| Edward Sturm | Marka wyszukiwana z nazwy i wzmianki poza własną stroną | Profil Google, katalogi, wzmianka u producenta, spójna nazwa wszędzie |
| AEO | Odpowiedź wprost pod pytaniem | H2 jako pytanie, pod nim 40–60 słów odpowiedzi |
| GEO | Fragmenty zrozumiałe po wyrwaniu z kontekstu, fakty i liczby, wzmianki zewnętrzne | Pełna nazwa firmy i miasto w odpowiedziach, tabele, daty aktualizacji, dostęp dla robotów AI |
| E-E-A-T | Doświadczenie i autor | Wojciech Podporski jako autor, prawdziwe zdjęcia, uprawnienia, protokół przeglądu, opinie z linkiem do źródła |

Tam, gdzie zasady się rozchodzą (Sturm: krótko, Roof: tyle, ile ma konkurencja), rozstrzyga wynik wyszukiwania dla danej frazy. Przy słabej lokalnej konkurencji oba podejścia prowadzą tu do krótkich, konkretnych stron.

## 3. Architektura adresów

Decyzje o łączeniu i rozdzielaniu wynikają z porównania wyników wyszukiwania (te same wyniki dla dwóch fraz = jedna strona). Wolumenów nie podaję, bo nie mam dostępu do płatnego narzędzia ani do danych Search Console; priorytety są względne.

### Strony usług i marek

| Adres | Fraza główna | Warianty na tej samej stronie | Priorytet |
|---|---|---|---|
| `/` | serwis kotłów gazowych Szczecin + marka POL-GAZ | autoryzowany serwis, od 1994 | wysoki |
| `/serwis-kotlow-gazowych/` | serwis kotłów gazowych Szczecin | naprawa kotłów gazowych, naprawa pieca gazowego, serwis pieców gazowych, awaria kotła | wysoki |
| `/przeglad-kotla-gazowego/` | przegląd kotła gazowego Szczecin | coroczny przegląd, konserwacja, przegląd gwarancyjny | wysoki |
| `/montaz-i-wymiana-kotla-gazowego/` | montaż kotła gazowego Szczecin | wymiana pieca gazowego, kocioł kondensacyjny | wysoki |
| `/serwis-beretta/` | serwis kotłów Beretta Szczecin | autoryzowany serwis Beretta, Ambasador Beretta | wysoki |
| `/serwis-junkers-bosch/` | serwis Junkers Szczecin | serwis Bosch | wysoki |
| `/serwis-vaillant/` | serwis Vaillant Szczecin | | średni |
| `/serwis-buderus/` | serwis Buderus Szczecin | | średni |
| `/serwis-unical/`, `/serwis-saunier-duval/` | serwis [marka] Szczecin | | niski, etap 3 |
| `/serwis-pomp-ciepla/` | serwis pomp ciepła Szczecin | przegląd pompy ciepła | wysoki, jeśli zakres potwierdzony |
| `/serwis-klimatyzacji/` | serwis klimatyzacji domowej Szczecin | | średni, jeśli zakres potwierdzony |
| `/obszar-dzialania/` | serwis kotłów gazowych Police, Stargard, Goleniów, Gryfino | Myślibórz, Chojna | średni |
| `/cennik/` | cennik serwisu kotłów gazowych Szczecin | | wysoki, jeśli właściciel poda ceny |

Uzasadnienie decyzji:

- **Serwis, naprawa, „piec” i „kocioł” razem.** Cztery frazy zwracają praktycznie te same wyniki, więc osobne strony konkurowałyby ze sobą. Różnice w słownictwie obsługują nagłówki H2.
- **Przegląd osobno.** Wyniki zawierają dodatkowo artykuły o cenach i obowiązku, a intencja to coroczna rezerwacja terminu.
- **Montaż i wymiana razem.** Wspólne wyniki; formalności i dopłaty idą do artykułu.
- **Marki osobno.** Wyniki dla fraz z marką pokrywają się z ogólnymi tylko w niewielkiej części. Fraza „serwis Beretta Szczecin” bez słowa „kotłów” zwraca wyniki o broni, dlatego w tytule zawsze „kotłów Beretta”.
- **Miejscowości: jedna strona, nie sześć kopii.** Dla Polic i Stargardu Google pokazuje te same katalogi co dla Szczecina. Sklonowane strony miast byłyby stronami-przejściówkami. Osobną stronę dla miejscowości robimy dopiero, gdy Search Console pokaże wyświetlenia i będzie unikalna treść (realizacje, zdjęcia, czas dojazdu).
- **Kolektory słoneczne** zostają jako akapit na stronie montażu, bez własnego adresu.

### Kody błędów

Obecnie 179 kodów na jednym adresie, w tym 142 Junkers, z jednym H1 i 179 nagłówkami H3.

| Adres | Zawartość |
|---|---|
| `/bledy-kotlow/` | indeks: wyszukiwarka, linki do marek, najczęstsze kody. Adres zostaje |
| `/bledy-kotlow/junkers/`, `/beretta/`, `/vaillant/`, `/buderus/` | pełna tabela kodów marki, H2 dla grup kodów |
| `/bledy-kotlow/junkers-ea/`, `/vaillant-f28/` itd. | osobna strona dla 10–15 najczęściej szukanych kodów |

Polskie wyniki na pojedyncze kody to głównie wątki z forów, więc uporządkowana strona kodu ma realną szansę. Nie robimy 179 stron: kody opisane jednym zdaniem („stan normalny”) zostają w tabeli marki. Kody pilotażowe wybieramy z zapytań w Search Console, a nie na wyczucie.

Strona kodu: co oznacza (odpowiedź w pierwszym akapicie), najczęstsze przyczyny, co można bezpiecznie sprawdzić samemu, kiedy dzwonić, orientacyjny koszt naprawy, telefon. Ok. 300–500 słów własnej treści.

### Poradnik (treści wspierające)

| Adres | Pytanie | Linkuje do |
|---|---|---|
| `/poradnik/ile-kosztuje-przeglad-kotla-gazowego/` | ile kosztuje przegląd w 2026 roku | przegląd, cennik |
| `/poradnik/czy-przeglad-kotla-gazowego-jest-obowiazkowy/` | czy jest obowiązkowy, jak często, co grozi | przegląd |
| `/poradnik/kociol-gazowy-traci-cisnienie/` | dlaczego spada ciśnienie | serwis |
| `/poradnik/piec-gazowy-brak-cieplej-wody/` | grzeje kaloryfery, nie grzeje wody | serwis |
| `/poradnik/wymiana-kotla-gazowego-przepisy-i-dofinansowanie/` | przepisy i dopłaty, aktualizowane co roku | montaż, pompy ciepła |
| `/poradnik/przeglad-instalacji-gazowej/` | przegląd instalacji a przegląd kotła | przegląd |

Artykuł o przepisach i dopłatach wymaga starannych źródeł, bo publikacje w sieci są ze sobą sprzeczne.

### Strony zaufania

`/o-firmie/` (historia od 1994, Wojciech Podporski, uprawnienia, statuetki), `/kontakt/` (telefon, e-mail, godziny, obszar, dane rejestrowe), `/polityka-prywatnosci/`.

### Linkowanie wewnętrzne

```
Strona główna ──► wszystkie usługi, marki, błędy kotłów, obszar, poradnik
Serwis (filar) ◄─► przegląd, montaż, strony marek
Strona marki   ◄─► tabela kodów tej marki ◄─► strony pojedynczych kodów
Artykuł        ──► swoja strona usługowa + 1–2 pokrewne artykuły
Usługa         ──► swoje artykuły, obszar działania, cennik
```

Stopka zawiera linki do wszystkich usług i marek. Każda strona ma okruszki (`BreadcrumbList`).

## 4. Szablon podstrony usługi

| Pole | Wzór | Przykład |
|---|---|---|
| URL | fraza bez miasta | `/przeglad-kotla-gazowego/` |
| `<title>` (do 60 znaków) | fraza + miasto, marka firmy na końcu | Przegląd kotła gazowego Szczecin – POL-GAZ |
| H1 | fraza + miasto | Przegląd kotła gazowego w Szczecinie |
| Opis (do 155 znaków) | co, dla kogo, dowód, telefon | Coroczny przegląd kotła gazowego z analizą spalin i protokołem. Serwis od 1994 r., Ambasador Beretta. Tel. 601 418 645 |

Kolejność sekcji:

1. Hero: H1, jedno zdanie, telefon, godziny.
2. Odpowiedź w 40–60 słowach: co obejmuje usługa, ile trwa, ile kosztuje.
3. Zakres w punktach (co dokładnie robi serwisant).
4. Cena w tabeli albo „od … zł”, z informacją o dopłacie za dojazd poza Szczecin.
5. Dowód: zdjęcie z pracy, statuetki, 2–3 opinie dotyczące tej usługi.
6. Obsługiwane marki z linkami do stron marek.
7. Trzy do pięciu pytań (H2 lub H3 jako pytania) z krótkimi odpowiedziami.
8. Obszar działania z linkiem do `/obszar-dzialania/`.
9. Autor, data aktualizacji, telefon.

Do zaplanowania treści każdej podstrony przed pisaniem służy skill `planowanie-podstrony`.

## 5. Poprawki techniczne

### Pilne, do zrobienia na obecnej stronie

| # | Problem | Poprawka |
|---|---|---|
| 1 | `/logo.png` z danych strukturalnych zwraca 404 | wskazać istniejący plik PNG, min. 112×112 |
| 2 | 404: `favicon-32x32.png`, `favicon-96x96.png`, `favicon-192x192.png`, `favicon-512x512.png`, `favicon.svg`, `apple-touch-icon.png`, `site.webmanifest` | dodać pliki do `public/` albo usunąć znaczniki; w manifeście jest nazwa „MyW…” do zmiany |
| 3 | `www.polgaz-szczecin.pl` i `/index.html` zwracają 200 | przekierowania 301 w `.htaccess` |
| 4 | `aggregateRating` 5,0/47 wpisana na sztywno | usunąć z danych strukturalnych; Google nie dopuszcza ocen wystawianych sobie przez firmę lokalną |
| 5 | Sprzeczne godziny, czas dojazdu, liczba lat | ustalić z właścicielem i ujednolicić w treści, danych strukturalnych i profilu Google |
| 6 | Zapytania z nagłówkiem Googlebota i Bingbota dostają 403, GPTBota 429 | sprawdzić w Search Console (test adresu na żywo) i w ustawieniach zapory Hostinger. Niezweryfikowane: prawdziwy Googlebot może przechodzić, bo jest rozpoznawany po adresie IP |
| 7 | `robots.txt`: `Disallow: /_next/`, nieobsługiwany wpis `Host:` | usunąć oba |
| 8 | `meta keywords` (ok. 600 znaków) | usunąć |
| 9 | Stopka „© 2025”, wstążka „31 LAT” | rok i liczba lat wyliczane automatycznie |

### Przy przebudowie

- Zdjęcie hero: warianty 480/800/1200/1600 px, `fetchpriority="high"`, bez wstępnego ładowania logo.
- Nagłówki w `.htaccess`: `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`; `Cache-Control: max-age=31536000, immutable` dla `/_next/static/`.
- Opinie w HTML zamiast widżetu doczytywanego skryptem; mapa doczytywana po kliknięciu.
- Mapa witryny generowana z listy stron, `lastmod` z rzeczywistej daty zmiany treści, bez `/protokol`.
- Obraz podglądu JPG 1200×630 dla każdej podstrony.
- Dane strukturalne: `Service` na stronach usług, `Person` dla właściciela, `BreadcrumbList`, `Article` w poradniku, `sameAs` do profilu Google i Facebooka, wszystkie miejscowości w `areaServed`, prawdziwy `priceRange`. Istniejącego `FAQPage` nie trzeba usuwać, ale nie daje już wyniku rozszerzonego.
- `/protokol`: kod bez zmian. Opcjonalnie nagłówek `X-Robots-Tag: noindex` dla tej ścieżki w `.htaccess`, co nie dotyka samej strony.
- `llms.txt`: opcjonalny, krótki opis firmy i lista stron usług. Google go nie używa; koszt jest znikomy.

## 6. E-E-A-T: co dodać

| Element | Gdzie |
|---|---|
| Prawdziwe zdjęcia Wojciecha Podporskiego i pracy serwisu | hero, „O firmie”, strony usług |
| Uprawnienia gazowe i energetyczne (rodzaj, numer świadectwa), certyfikat F-gaz przy klimatyzacji i pompach ciepła | „O firmie”, stopka |
| Autoryzacje producentów z dokładnym zakresem dla każdej marki | strony marek |
| Lata przyznania tytułu Ambasadora Beretta | „O firmie”, `/serwis-beretta/` |
| NIP, pełna nazwa z CEIDG | „Kontakt”, stopka |
| Ocena i liczba opinii z linkiem do profilu Google | pasek zaufania |
| Przykładowy protokół przeglądu (zdjęcie lub PDF) | `/przeglad-kotla-gazowego/` |
| Autor i data aktualizacji | strony usług, poradnik, kody błędów |
| Źródła przepisów | poradnik |

## 7. Poza stroną

Tego obszaru nie dało się sprawdzić automatycznie (Google i część katalogów blokują odczyt), więc pozycje poniżej to lista kontrolna, a nie wynik audytu.

1. **Profil Firmy w Google:** czy istnieje, czy jest zweryfikowany, kategoria główna, obszar działania zamiast adresu, godziny zgodne ze stroną, lista usług, zdjęcia, link do strony. Sprawdzić duplikaty.
2. **Opinie:** stały sposób proszenia o opinię po wizycie (link lub kod QR na protokole), odpowiedź na każdą.
3. **Katalogi z identyczną nazwą, telefonem i obszarem:** Panorama Firm, pkt.pl, Aleo, Oferteo, Fixly, Firmy.net, Cylex, Facebook. W pkt.pl na frazę „serwis kotłów gazowych Szczecin” firmy nie było w pierwszych 25 wynikach.
4. **Wzmianka u producenta:** wpis w wyszukiwarce serwisów Beretta i, jeśli to możliwe, publiczne potwierdzenie tytułu Ambasadora. To najmocniejsza zewnętrzna wzmianka, jaką firma może zdobyć.
5. **Podobna nazwa w wynikach:** w pkt.pl występuje „Gaz-Expres Roman Podporski” (to samo nazwisko, podobny numer telefonu). Warto wiedzieć, czy to firma powiązana, i dbać o pełną nazwę „POL-GAZ Szczecin Wojciech Podporski” we wszystkich wpisach.
6. **Search Console i Bing Webmaster Tools:** zgłosić nową mapę witryny po wdrożeniu.

## 8. Etapy

| Etap | Zakres | Efekt |
|---|---|---|
| 0 | Odzyskanie aktualnego kodu, git, pilne poprawki z sekcji 5, odpowiedzi właściciela (sekcja 9) | strona bez błędów 404 i sprzeczności |
| 1 | Fundament: plik danych firmy, nowy układ, nagłówek i stopka, system z `DESIGN.md`, szablon podstrony, dane strukturalne, mapa witryny | szkielet wielostronicowy |
| 2 | Strona główna, serwis, przegląd, montaż, Beretta, Junkers/Bosch, „O firmie”, „Kontakt”, polityka prywatności | 9 stron pod frazy o najwyższym priorytecie |
| 3 | Vaillant, Buderus, Unical, Saunier Duval, obszar działania, cennik, pompy ciepła i klimatyzacja po potwierdzeniu | komplet stron sprzedażowych |
| 4 | Kody błędów: indeks, 4 huby marek, 10–15 stron kodów | ruch z fraz problemowych |
| 5 | Poradnik: 6 artykułów | wsparcie stron usług, cytowania w AI |
| stale | Profil Google, opinie, katalogi, wzmianka u producenta | widoczność w mapach |

Po każdym etapie: build, sprawdzenie tytułów, kanonicznych adresów i danych strukturalnych, zgłoszenie mapy witryny.

Jak sprawdzimy, że działa: w Search Console liczba zaindeksowanych stron rośnie z 2 do liczby wdrożonych, a w ciągu 6–10 tygodni pojawiają się wyświetlenia na frazy z marką i usługą. Jeśli po 10 tygodniach strona usługi nie ma wyświetleń na swoją frazę, wracamy do porównania z konkurencją dla tej strony.

## 9. Co jest potrzebne od Ciebie i właściciela

**Blokuje wdrożenie:**

1. Aktualny kod źródłowy (z repozytorium albo komputera, z którego szedł build z kwietnia 2026). W tym folderze pięć plików jest nieczytelnych, a wielu brakuje.
2. Sposób wgrywania strony na Hostinger.

**Blokuje treść:**

3. Godziny i zasady awaryjne: czy telefon jest całodobowy, czy są wyjazdy w weekendy.
4. Realny czas dojazdu w Szczecinie i poza nim.
5. Zakres autoryzacji dla każdej z sześciu marek.
6. Czy firma serwisuje pompy ciepła, klimatyzację i kolektory, i z jakimi uprawnieniami.
7. Ceny albo widełki: przegląd, diagnoza, dojazd, montaż.
8. Uprawnienia (rodzaj i numery), NIP, lata tytułu Ambasadora.
9. Adres profilu Google i aktualna liczba opinii.
10. Zdjęcia z pracy; potwierdzenie, czy obecne zdjęcie w hero jest prawdziwe.
11. Dostęp do Google Search Console (wybór kodów pilotażowych i pomiar efektów). W narzędziu SEO Gets witryna jest na darmowym planie, więc nie mogłem odczytać danych.

## 10. Ograniczenia tej analizy

- Brak danych o wolumenach wyszukiwań i brak danych Search Console.
- Wyniki lokalne (mapy) i profil Google nie zostały odczytane.
- Core Web Vitals nie były mierzone.
- Blokada robotów (403/429) została stwierdzona dla zapytań z podmienionym nagłówkiem, nie dla prawdziwych robotów.
- Zapytania dla marek Buderus, Unical i Saunier Duval nie były testowane osobno.
