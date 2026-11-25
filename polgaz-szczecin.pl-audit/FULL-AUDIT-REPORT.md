# Audyt SEO: polgaz-szczecin.pl (nowa wersja przed wdrożeniem)

Data: 24.11.2026. Przedmiot: build produkcyjny nowej wersji (Next.js 15, 29 adresów) serwowany lokalnie, po poprawkach z tego samego dnia. Strona live to nadal stara wersja na Hostingerze; była sprawdzana tylko tam, gdzie to zaznaczono.

Typ firmy: usługi lokalne z dojazdem do klienta (serwis kotłów gazowych, bez punktu przyjęć).

## Wynik: 73/100

| Kategoria | Waga | Wynik | Źródło |
|---|---|---|---|
| Technika | 22% | 88 | `findings/technical.md` |
| Treść | 23% | 58 | `findings/content.md` |
| On-page | 20% | 78 | ocena zbiorcza z pomiaru tytułów, H1 i linków |
| Dane strukturalne | 10% | 78 | `findings/schema.md` |
| Wydajność | 10% | 90 | `findings/performance.md` (pomiar laboratoryjny) |
| Widoczność w AI | 10% | 59 | `findings/geo.md` |
| Zdjęcia | 5% | 40 | jedno prawdziwe zdjęcie w całej witrynie |

Poza wagą: SEO lokalne 49/100 (`findings/local.md`), dopasowanie do wyników wyszukiwania 65/100 (`findings/sxo.md`), wygląd i telefon 82/100 (`findings/visual.md`), linki przychodzące: brak danych (`findings/backlinks.md`).

Wyniki kategorii to oceny specjalistów na podstawie pomiarów, nie odczyty z jednego narzędzia. Wydajność to dane laboratoryjne z Lighthouse na localhost, nie Core Web Vitals od użytkowników.

## Pięć najważniejszych problemów

1. **Druga działająca witryna firmy: `pol-gaz.szczecin.pl`.** Stary WordPress z tym samym telefonem, nazwą „Pol-Gaz Kotły Gazowe i Olejowe Wojciech Podporski”, adresem ul. Chłodna 114 oraz ofertą klimatyzatorów i solarów. Wpis w pkt.pl i w wyszukiwarce instalatorów Beretta prowadzą do tych danych. Nowa strona mówi „brak punktu przyjęć” i wyklucza klimatyzację. Sprawdzone bezpośrednio (HTTP 200, bez przekierowania).
2. **Certyfikat na jedynym zdjęciu nie pokrywa tego, co podpisuje strona.** Na zdjęciu: „Autoryzowany serwis kotłów gazowych Beretta”, do 50 kW, data z czerwca 2025, „uprawnienia ważne przez rok od daty wydania”. Strona pokazuje je przy haśle „Autoryzowany serwis 6 marek” w listopadzie 2026. Sprawdzone na pliku `public/images/statuetka-beretta.jpg`.
3. **Porady przy kodach błędów.** Około 40 wierszy listy kodów zwraca się do klienta poleceniami dotyczącymi wnętrza kotła („Wyczyść elektrodę jonizacyjną”). Na 12 stronach kodów sekcja „Co sprawdza serwisant?” pokazuje surowy tekst z bazy („Patrz usterki blokujące…”, „Przeprowadzić przegląd.”). Strona kodu A4 (cofanie spalin) kończy listę kroków słowami „Uruchom urządzenie ponownie”.
4. **„Do 60 km” przeczy własnej tabeli.** Chojna ma 62 km, Myślibórz 68 km; obie są w obszarze działania i w danych strukturalnych.
5. **Profil Google jest niepodpięty i niezweryfikowany.** Brak adresu profilu oznacza brak linku do opinii, brak `sameAs` i brak opinii w HTML. To najmocniejszy czynnik lokalny i nie da się go ocenić bez właściciela.

## Pięć szybkich poprawek

1. Menu na telefonie: ostatnia pozycja („Kontakt”) chowa się pod dolnym paskiem z numerem. Poprawka w `src/components/Header.tsx` (wysokość panelu).
2. Widżet opinii przesuwa układ po doczytaniu (CLS 0,10–0,20 na telefonie). Zarezerwować 330/362 px zamiast 280 px w `src/components/Opinie.tsx`.
3. Zdjęcie hero: `fetchPriority="high"` w `src/app/page.tsx` (LCP na telefonie 2,8–3,1 s przy progu 2,5 s w symulacji).
4. Węzeł `WebSite` dodać do grafu na każdej stronie: dziś 26 stron odwołuje się do `#witryna`, którego na nich nie ma (`src/lib/seo.ts`).
5. Strona 404 ma dwa sprzeczne znaczniki robots i tytuł strony głównej (`src/app/not-found.tsx`).

## Technika (88)

Działa: 29 adresów zwraca 200, każdy ma własny adres kanoniczny, unikalny tytuł i opis, jeden H1; mapa witryny zgadza się z listą stron; brak martwych linków i stron osieroconych; cała treść, w tym 179 kodów, jest w surowym HTML; `/protokol/` ma `noindex` i jest poza mapą; `/index.html` przekierowuje na `/`.

Do poprawy:

- Średnie: strona 404 ze sprzecznymi znacznikami robots.
- Średnie: przekierowanie `www` na adres główny trzeba ustawić w Vercel; na live `www` zwraca 200.
- Niskie: logotypy marek bez `sizes` w części miejsc, jeden `lastmod` dla wszystkich adresów, nagłówek `X-Powered-By`, brak CSP.
- Do sprawdzenia po wdrożeniu: zachowanie adresów pisanych wielkimi literami na Vercel, indeksowanie hostów `*.vercel.app`.

## Treść i E-E-A-T (58)

E-E-A-T: doświadczenie 45, wiedza 60, autorytet 62, zaufanie 60.

Działa: pierwsze akapity stron usług i marek zawierają nazwę firmy i miasto; fakty o firmie są spójne między stronami; numer 992 jest na wszystkich stronach kodów; pełna lista kodów zachowana.

Do poprawy:

- Wysokie: punkty 2, 3 i 4 z listy najważniejszych problemów.
- Wysokie: `/serwis-pomp-ciepla/` nosi plakietki „Autoryzowany serwis 6 marek” i „Ambasador Beretta”, choć marki pomp i uprawnienia nie są potwierdzone.
- Wysokie: pierwszy akapit stron kodów ma 12–40 słów (średnio ok. 22) i nie zawiera nazwy firmy ani miasta.
- Średnie: strony usług mają 381–610 słów, marek 237–370; Saunier Duval i Unical dzielą 92–96% tekstu.
- Średnie: bloki odpowiedzi poniżej 40 słów na pięciu stronach marek i stronie głównej; odpowiedzi w pytaniach mają 17–36 słów.
- Średnie: strona główna podaje inne serie Beretty („Mythos, Aluxtra, RRT”) niż strona marki („Quadra, Ciao, Mynute, Exclusive, Power”) i wspomina systemy solarne przy Buderusie i Saunier Duval.
- Średnie: ostrzeżenie o zapachu gazu na stronie awarii stoi pod listą porad, nie nad nią.
- Średnie: porady spoza listy bezpiecznych czynności: dolewanie wody (F22), odpowietrzanie grzejników (224), odłączanie zasilania (F0).
- Do potwierdzenia przez właściciela: lata założenia marek w opisach, „najczęściej montujemy Berettę”.

## On-page (78)

Tytuły mieszczą się w 60 znakach, opisy w 155, frazy główne są w adresie, tytule, H1 i treści. Każda strona ma co najmniej 3 linki przychodzące.

Nierozstrzygnięte: czy „serwis pieców gazowych Szczecin” (strona główna) i „naprawa pieców gazowych Szczecin” (`/naprawa-piecow-gazowych/`) to jedna intencja. Porównanie wyników dało 6 wspólnych pozycji na 10, ale narzędzie nie było polskim Google, więc wiarygodność jest niska. W tych wynikach miejsca zajmują katalogi (oferteo, pkt, panoramafirm), nie strony firm. Decyzję trzeba oprzeć na ręcznym sprawdzeniu w Google.

Fraza „beretta serwis szczecin” (614 wyświetleń, pozycja 8,8, 1 kliknięcie): przyczyny niskiej klikalności nie udało się ustalić; nowy tytuł i opis wymagają pomiaru po wdrożeniu.

## Dane strukturalne (78)

Działa: 28 bloków JSON-LD parsuje się poprawnie; brak `aggregateRating`, `HowTo` i `FAQPage`; dane zgadzają się z widoczną treścią; logo spełnia wymagania.

Do poprawy:

- Wysokie: brak węzła `WebSite` poza stroną główną.
- Średnie: `AboutPage` i `ContactPage` są szczątkowe; okruszki w danych („Błąd A4 Junkers”) różnią się od widocznych („Junkers A4”); jedna data aktualizacji dla wszystkich stron.
- Niskie: `reviewedBy` równe `author`, telefon w `Service.description`, `vatID` wyprowadzony z NIP bez potwierdzenia rejestracji VAT UE, brak danych na stronie polityki prywatności.
- Możliwości z gotowym kodem w `findings/schema.md`: `Service.serviceType`, katalog usług na stronie głównej, `TechArticle` na stronach kodów, `ItemList` na indeksie kodów.
- Zablokowane do czasu danych od właściciela: `sameAs`, uprawnienia, ceny.

## Wydajność (90, pomiar laboratoryjny)

| Strona | Profil | Wynik | LCP | CLS | TBT | Transfer |
|---|---|---|---|---|---|---|
| / | telefon | 94 | 3,1 s | 0 | 0 ms | 409 KB |
| /naprawa-piecow-gazowych/ | telefon | 100 | 0,8 s | 0 | 0 ms | 302 KB |
| /serwis-beretta/ | telefon | 100 | 0,8 s | 0 | 10 ms | 302 KB |
| /bledy-kotlow/ | telefon | 100 | 0,9 s | 0 | 0 ms | 316 KB |
| /bledy-kotlow/junkers-2951/ | telefon | 100 | 0,8 s | 0,021 | 10 ms | 304 KB |
| / | komputer | 100 | 0,6 s | 0,006 | 0 ms | 372 KB |
| /bledy-kotlow/ | komputer | 100 | 0,2 s | 0 | 0 ms | 400 KB |

- Wysokie: widżet opinii przesuwa układ po przewinięciu (CLS 0,103 i 0,197 na telefonie, 0,134 na komputerze; zmierzone Playwrightem, Lighthouse tego nie widzi).
- Średnie: LCP strony głównej na telefonie 2,8–3,1 s w symulacji wolnej sieci.
- Średnie: 7 plików czcionek (131 KB) bez wstępnego ładowania.
- Na Vercel zmienią się: czas odpowiedzi serwera, kompresja, HTTP/2 i nagłówki cache.

## Wygląd i telefon (82)

Działa: H1 i przycisk telefonu są widoczne bez przewijania na telefonie na wszystkich sprawdzonych stronach; brak poziomego przewijania przy 390 i 320 px; brak błędów w konsoli; filtr kodów i parametr `?q=` działają.

Do poprawy:

- Wysokie: niedostępna pozycja „Kontakt” w menu na telefonie.
- Średnie: nagłówek na telefonie bez nazwy firmy; cele dotykowe poniżej 44 px (chipy kodów 36 px, linki w stopce 18 px); pusta luka 280 px w sekcji opinii bez JavaScriptu.
- Niskie: przesuwający się pasek logotypów jest animacją ozdobną, czego `DESIGN.md` zabrania; na komputerze logo Beretta jest ucięte.

Zrzuty: `screenshots/`. Część zrzutów powstała, ale nie była oglądana (lista w `findings/visual.md`).

## Widoczność w AI (59)

Działa: `robots.txt` dopuszcza wszystkie roboty, treść jest w HTML, autor i data są widoczne, dane firmy są jednoznaczne.

Do poprawy:

- Wysokie: brak cen, więc nie ma czego zacytować na pytania o koszt.
- Wysokie: brak `sameAs` i brak zewnętrznego potwierdzenia tytułu Ambasadora.
- Średnie: 11 z 12 stron kodów ma odpowiedź 12–30 słów bez nazwy firmy; liczby poza tabelami (tabela jest tylko na stronie obszaru).
- Pytania z Search Console bez fragmentu do zacytowania: ceny, „24h” (210 wyświetleń), kody Buderus 2961, 1023, 2951, „błąd 128 zanik płomienia” (61), Junkers H6.
- Stara strona live, zapytania z podmienionym nagłówkiem robota: GPTBot 429, Bingbot i Googlebot 403, pozostałe 200. To nie dowodzi, jak serwer traktuje prawdziwe roboty.
- Szkic `llms.txt` jest w `findings/geo.md`; dodanie jest opcjonalne.

## SEO lokalne (49, warunkowo)

Na stronie: nazwa, telefon, e-mail, NIP i godziny są identyczne na wszystkich stronach; dane strukturalne pasują do firmy bez lokalu.

Poza stroną, stan sprawdzenia:

| Miejsce | Stan | Co widać |
|---|---|---|
| pkt.pl (wpis 1815401) | znaleziono | „Pol-Gaz. Naprawa pieców gazowych. Podporski W.”, Chłodna 114, 601 418 645, strona pol-gaz.szczecin.pl |
| pkt.pl (wpis 747709) | znaleziono | „Pol-Gaz” (sklepy sanitarne), Reymonta 80b, inny telefon, strona polgaz-szczecin.pl; nie wiadomo, czy to ta sama firma |
| Wyszukiwarka instalatorów Beretta | znaleziono | „POL – GAZ”, Chłodna 114, 601418645; pole „ambasador” puste (znaczenie pola wywnioskowane z nazwy) |
| pol-gaz.szczecin.pl | znaleziono | osobna, działająca witryna |
| firmy.net | nie znaleziono | wyszukiwanie tylko po nazwie |
| Profil Google, panoramafirm, aleo, fixly, cylex, oferteo, Facebook | brak dostępu | blokady i zgody; istnienia profilu Google nie potwierdzono |
| Lokalizatory Junkers/Bosch, Buderus, Vaillant, Saunier Duval, Unical | nie sprawdzano | |

Gaz-Expres Roman Podporski to inna firma (inny NIP, telefon 601 415 080, strona gaz-expres.pl) z tej samej branży i miasta. Ryzyko pomyłek jest realne; relacji między firmami nie ustalano.

Strona Goleniowa: warunkowo tak, niski priorytet; potrzebuje 300–400 słów treści, której dostarczyć może tylko właściciel. Lista kontrolna profilu Google jest w `findings/local.md`.

## Linki przychodzące

Brak danych: domeny nie ma w grafie Common Crawl, a kluczy do płatnych źródeł nie skonfigurowano. Nie wiadomo, które adresy mają linki z zewnątrz. Przed przepięciem domeny trzeba wyeksportować raport linków z Search Console.

## Ograniczenia

- Brak danych od użytkowników (CrUX) i z Google API.
- Polskich wyników Google nie odczytano bezpośrednio.
- Profil Google i większość katalogów była niedostępna dla automatu.
- Pięciu specjalistów zatrzymało się na limicie kroków i dokończyło raporty po wznowieniu; ich listy „nie sprawdzono” są w plikach `findings/`.
- Kilka raportów cząstkowych podaje, że `CLAUDE.md` wskazuje `/serwis-piecow-gazowych/`. To nieaktualne: plik ma już `/naprawa-piecow-gazowych/`.
