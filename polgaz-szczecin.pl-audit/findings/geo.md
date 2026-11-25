# GEO / AI Search Readiness: POL-GAZ Szczecin Wojciech Podporski

Data audytu: 2026-11-24. Zakres: (A) nowa wersja lokalna http://localhost:3977 (29 adresów z `urls-local.txt`), (B) zewnętrzny ślad marki w sieci, plus zachowanie LIVE wobec botów.

## Wynik GEO: 59 / 100 (nowa wersja, przed wdrożeniem)

| Wymiar | Waga | Ocena | Punkty |
|---|---|---|---|
| Citability (cytowalność fragmentów) | 25% | 56% | 14 / 25 |
| Struktura i czytelność | 20% | 75% | 15 / 20 |
| Multimedia | 15% | 27% | 4 / 15 |
| Autorytet i sygnały marki | 20% | 45% | 9 / 20 |
| Dostępność techniczna | 20% | 85% | 17 / 20 |

Wynik jest oceną eksperta na podstawie zmierzonych cech strony, nie pomiarem widoczności w AI. Widoczności w ChatGPT/Perplexity/AIO nie mierzyłem (brak narzędzi DataForSEO w tej sesji).

Oceny platform (szacunek jakościowy, nie pomiar): Google AI Overviews 62, Perplexity 55, Bing Copilot 50, ChatGPT 48. Powód niższych wyników ChatGPT i Copilot: praktycznie zerowy ślad marki poza własną stroną (sekcja B).

## Status dostępu crawlerów AI

### robots.txt
- Nowa wersja (`http://localhost:3977/robots.txt`): `User-Agent: * / Allow: /` + Sitemap. Brak reguł per bot, więc GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, anthropic-ai, cohere-ai są dozwolone. Sitemapa ma 29 adresów.
- LIVE (`https://polgaz-szczecin.pl/robots.txt`): `*` Allow `/` z `Disallow: /api/ /admin/ /_next/`, osobny blok Googlebot, `Host:` (dyrektywa nieobsługiwana przez Google), Sitemap. Żaden bot AI nie jest zablokowany w robots.txt.

### Kody HTTP LIVE dla fałszowanych User-Agentów (3 próby po każdym UA, 24.11.2026)
UWAGA: to wyłącznie dowód z podszywania się pod UA z mojego adresu IP. NIE dowodzi, jak serwer traktuje prawdziwe boty z ich oficjalnych zakresów IP. Hostinger/LiteSpeed często weryfikuje boty po IP, więc prawdziwy Googlebot może być obsłużony inaczej.

| UA (spoof) | Kod |
|---|---|
| Chrome (kontrola) | 200, 200, 200 |
| GPTBot | 429, 429, 429 |
| OAI-SearchBot | 200 x3 |
| ClaudeBot | 200 x3 |
| PerplexityBot | 200 x3 |
| Google-Extended | 200 x3 |
| Bingbot | 403 x3 |
| Googlebot (dodatkowo) | 403 x3 |

Wniosek: wcześniejsza obserwacja 403/429 się potwierdza dla GPTBot (429), Bingbot i Googlebot (403) przy podszywaniu się. Że nawet spoof Googlebota dostaje 403, wskazuje na weryfikację IP (reverse DNS) po stronie hostingu, a nie na celowe blokowanie. Nie da się tego rozstrzygnąć bez logów serwera lub Search Console (statystyki indeksowania). Do sprawdzenia: GPTBot 429 po wdrożeniu na Vercel (zmiana hostingu usuwa ten problem, o ile nie włączy się tam Firewall/Bot Protection).

## Sekcja A: nowa wersja (localhost:3977)

### Co działa
- Cała treść jest w surowym HTML (Next.js SSR/SSG). Wszystkie 29 adresów zwraca 200. Strona działa bez JS poza wyszukiwarką kodów i widżetem Shapo. Kanoniczne adresy, `meta robots index,follow`, sitemapa.
- Spójna nazwa pełna "POL-GAZ Szczecin Wojciech Podporski" w odpowiedziach, stopce i JSON-LD. NIP 8521839815 w stopce każdej strony i w `taxID`, `vatID`, `foundingDate: 1994`.
- JSON-LD: HVACBusiness + Person (z `award`, `knowsAbout`) + WebPage (`author`, `reviewedBy`, `dateModified: 2026-11-24`) + Service + BreadcrumbList. Zgodne z zasadami projektu (brak `aggregateRating`, `HowTo`, `FAQPage`).
- Widoczny autor i data na stronach usług, marek i kodów: "Autor: Wojciech Podporski, serwisant kotłów gazowych od 1994 roku, Ambasador marki Beretta. Aktualizacja: 24 listopada 2026."
- Blok `odpowiedz` na 28 z 29 stron, z pełną nazwą firmy i miastem na stronach usług, marek, obszaru i o-firmie.
- H2/H3 w formie pytań na większości stron (np. 5/10 H2 na usługach, 5/7 na stronach kodów).
- Przegląd: źródło prawne podlinkowane (Prawo budowlane art. 62, ISAP). Dobra praktyka bezpieczeństwa: 992 przy zapachu gazu, brak zaleceń zdejmowania obudowy.
- Tabela HTML z czasami dojazdu na `/obszar-dzialania/` (jedyna tabela w serwisie).
- Pytanie "Czy serwis działa całodobowo?" ma jawną odpowiedź "Nie" na `/awaria-kotla-gazowego/`.

### Próbka 10 fragmentów `odpowiedz` (zmierzona liczba słów)

| # | Strona | Słów | Samodzielny | Nazwa + miasto | Konkretny fakt | 40-60 słów |
|---|---|---|---|---|---|---|
| 1 | `/` | 39 | tak | tak | 1994, 60 km, godziny | prawie (39) |
| 2 | `/naprawa-piecow-gazowych/` | 45 | tak | tak | 60 km, 8-18 | tak |
| 3 | `/przeglad-pieca-gazowego/` | 40 | tak | tak | zakres przeglądu, 1994 | tak |
| 4 | `/awaria-kotla-gazowego/` | 43 | tak | tak | tel., godziny, 20 min | tak |
| 5 | `/serwis-beretta/` | 46 | tak | tak | lata Ambasadora | tak |
| 6 | `/o-firmie/` | 42 | tak | tak | 32 lata, 6 marek, 4x | tak |
| 7 | `/obszar-dzialania/` | 40 | tak | tak | 60 km, 30-75 min | tak |
| 8 | `/bledy-kotlow/junkers-2951/` | 40 | tak | NIE | tak (płomień zgasł wielokrotnie) | tak |
| 9 | `/bledy-kotlow/junkers-f0/` | 12 | częściowo | NIE | nie | NIE (12) |
| 10 | `/bledy-kotlow/vaillant-f22/` | 13 | częściowo | NIE | nie | NIE (13) |

Dodatkowe pomiary: 227 = 28 słów, 1023 = 26, 224 = 30, A4 = 24, A7 = 19, 2961 = 20, 6L 229 = 18, F28 = 18, A01 = 12 słów. Odpowiedzi FAQ (zmierzone): 32, 19, 36, 25, 22 słów; tylko część zawiera nazwę firmy ("POL-GAZ"), żadna nie ma pełnej nazwy z miastem.

Wnioski:
- Średnia długość bloku `odpowiedz` na stronach usług i marek to ok. 40 słów: dolna granica wytycznej 40-60. Wytyczna "optymalnej długości fragmentu" 134-167 słów nie jest spełniona nigdzie, bo sekcje są krótkie z założenia (strony "compact"). To świadoma decyzja projektu; potencjalny zysk to jeden dłuższy, samodzielny akapit (ok. 130-160 słów) na stronach głównych usług, np. "Jak wygląda naprawa..." zapisany ciągłą prozą.
- 11 z 12 stron kodów ma odpowiedź 12-30 słów bez nazwy firmy i miasta. Są rzeczowe, ale zbyt krótkie jako samodzielny cytat.
- Dane liczbowe poza `/obszar-dzialania/` nie są w tabelach (np. ciśnienie 1-1,5 bara jest na liście, nie w tabeli).

### Ustalenia

**High**
1. Brak ceny w jakimkolwiek cytowalnym fragmencie. Każda strona usługi mówi tylko "Cenę podamy przez telefon" (np. `/przeglad-pieca-gazowego/`, `/awaria-kotla-gazowego/`, `/naprawa-piecow-gazowych/`). Zapytania cenowe są najczęstszym typem pytań do asystentów AI o usługi lokalne, a strona nie ma nic do zacytowania. To wynika z braku danych od właściciela (`TODO(właściciel)` w `src/data/uslugi.ts`), nie z błędu kodu. Nawet widełki lub opis co składa się na cenę (dojazd, diagnoza, części) dałyby fragment do cytowania. Nie wymyślać kwot.
2. Niespójność faktów o rodzinie modeli Beretta: strona główna podaje serie "Mythos, Aluxtra i RRT", a `/serwis-beretta/` serie "Quadra, Ciao, Mynute, Exclusive, Power". Dwie sprzeczne wersje w tej samej witrynie obniżają zaufanie modeli i są sprzeczne z zasadą "jedna wersja faktu". CLAUDE.md oznacza listy modeli jako niepotwierdzone. Do potwierdzenia przez właściciela przed wdrożeniem.
3. Brak adresów profili w `sameAs` (Google Business Profile, Facebook, ewentualnie LinkedIn). W JSON-LD HVACBusiness nie ma `sameAs`, więc modele nie mają jak powiązać strony z innymi bytami. Pole jest oznaczone `TODO(właściciel)`.

**Medium**
4. Odpowiedzi na stronach kodów są za krótkie i bez bytu (12-30 słów, bez "POL-GAZ Szczecin"). Te strony generują największy ruch (184 kliknięcia/12 mies.) i są najbardziej "cytowalnymi" pytaniami (np. "błąd 2951 Junkers"). Rekomendacja: dodać do `odpowiedz` drugie zdanie z objawem + pierwszą bezpieczną czynnością (jeden reset, zawór gazu) i nazwę firmy z miastem, do ok. 40-60 słów.
5. Brak pokrycia kodów, które pojawiają się w Search Console: Buderus 2961, 1023, 2951, 1017 (zapytania "buderus 2961", "buderus błąd 1023", "buderus 1017 error"), "błąd 128 zanik płomienia przy pracy" (poz. 1), "junkers błąd h6", "junkers cerapur midi kody błędów". Kod 1017 jest w indeksie tylko jako wiersz w sekcji Junkers; kodów 128 i H6 w indeksie nie znalazłem. Indeks `/bledy-kotlow/` ma 179 wierszy bez osobnych adresów (poza 12), a H3 to kody, nie pytania.
6. Tabele: liczby (czasy dojazdu) są w tabeli tylko na jednej stronie. Brak tabeli "kod → znaczenie → czy możesz coś zrobić sam" na stronach marek i w indeksie kodów. Tabele są łatwo wyciągane przez AI.
7. Niezweryfikowane twierdzenia na stronie głównej: "Dla klienta oznacza to serwis, który ... ma dostęp do szkoleń producenta i oryginalnych części" oraz definicja tytułu Ambasadora ("przyznaje serwisantom za wyniki i jakość pracy"; tak samo na `/o-firmie/` i `/serwis-beretta/`). W mojej weryfikacji strona Beretta (`beretta.pl/gala-ambasadora-marki-beretta-2026/`) mówi tylko, że w każdym województwie wybieranych jest "3-4 Ambasadorów", bez kryteriów i bez nazwisk. Właściciel powinien potwierdzić sformułowanie, najlepiej załączyć dyplom/zdjęcie statuetki z podpisem (jest już `statuetka-beretta.jpg`).
8. Opisy marek na stronie głównej wspominają "systemy solarne" (Buderus, Saunier Duval), a CLAUDE.md wyklucza kolektory słoneczne z zakresu. To opis producenta, nie oferta, ale dla modelu językowego może wyglądać jak oferta firmy. Zmienić na opis bez systemów solarnych.
9. Weekendy: odpowiedź "Czy naprawiacie piece gazowe w weekendy?" (19 słów) i podobne nie zawierają nazwy firmy ani miasta. Warto dodać "POL-GAZ Szczecin" do pierwszego zdania każdej odpowiedzi FAQ.

**Low**
10. Multimedia: jedyne zdjęcie realne to statuetka Beretta (wg CLAUDE.md), brak wideo, brak obecności w YouTube. Przy korelacji wzmianek YouTube (~0,74) z cytowaniami to największa luka marki, ale poza zakresem kodu. Nagranie 1-2 minutowe "co oznacza błąd 2951" na kanale firmy z linkiem do strony kodu byłoby najtańszym początkiem.
11. Daty: `/o-firmie/` i `/kontakt/` nie mają widocznej daty aktualizacji (JSON-LD ma). Pozostałe strony mają. Niski wpływ.
12. H2 w formie pytań: indeks kodów ma 1 z 7 H2 jako pytanie; `/obszar-dzialania/` 1 z 9 (H2 to "Serwis pieców gazowych Police" itd.). Zamiana na "Czy dojeżdżacie do Polic?" poprawiłaby dopasowanie do zapytań lokalnych, bez dopisywania treści.
13. Stray spacja przed znakiem zapytania w H2 stron marek i kodów ("Co oznacza błąd 2951 w kotle Junkers ?"): prawdopodobnie artefakt mojego ekstraktora tekstu przy zagnieżdżonym elemencie, ale warto sprawdzić w renderowanym DOM.

### Brakujące zapytania z Search Console (Zapytania.csv, 358 wierszy)
Strony są trafnie ustawione na główne frazy ("naprawa/serwis pieców gazowych szczecin", marki, kody). Bez cytowalnego fragmentu zostają:

| Zapytanie (wyświetlenia) | Stan na nowej stronie |
|---|---|
| ceny przeglądu/naprawy/dojazdu (brak w CSV jako fraza, ale typowe pytanie AI) | brak ceny, patrz High 1 |
| `serwis pieców gazowych szczecin 24h` (210) | tylko odpowiedź "Nie" w FAQ `/awaria-kotla-gazowego/`; brak fragmentu w pierwszej osobie "Czy jest serwis 24h?" na stronie serwisu. Zgodnie z CLAUDE.md nie pisać "całodobowo"; można napisać wprost, że nie jest całodobowo i jak zgłosić awarię w weekend. |
| `serwis beretta 24h` (12) | jak wyżej |
| `serwis kotłów quadra szczecin` (249), `kotły quadra szczecin` (10) | wzmianka w sekcji "Serwis kotłów Beretta Quadra" na `/serwis-beretta/`, bez pytania w H2 |
| `serwis saunier duval szczecin` (150), `serwis vaillant szczecin` (58) | są strony marek; brak konkretnych faktów (serie modeli niepotwierdzone) |
| `buderus 2961`, `buderus 1023`, `buderus błąd 2951`, `buderus 1017` | brak stron/fragmentów Buderus poza 6L 229 |
| `błąd 128 zanik płomienia przy pracy` (61, poz. 1) | brak w indeksie |
| `junkers błąd h6`, `junkers cerapur midi kody błędów` | brak H6; Cerapur wspomniane na jednej stronie |
| `serwis naprawa palników`, `kotły olejowe szczecin` (57) | poza zadeklarowanym zakresem lub niepotwierdzone (stara strona jest firmą "Kotły Gazowe i Olejowe"; właściciel musi potwierdzić, czy olej jest w ofercie) |
| `serwis immergas`, `serwis alko`, `instalacje gazowe`, `szczelność instalacji gazowych` | poza zakresem lub niepotwierdzone; nie dodawać bez potwierdzenia |
| `serwis pieców gazowych goleniów` (167) | sekcja H2 na `/obszar-dzialania/` (ok. 70 słów); osobna strona dopiero przy unikalnej treści, zgodnie z CLAUDE.md |

### llms.txt
Status: brak (`http://localhost:3977/llms.txt` = 404; LIVE też 404). Nie jest to uchybienie krytyczne: Google oficjalnie nie używa llms.txt, a brak dowodów, że główne silniki AI go czytają przy cytowaniu. Koszt jest niemal zerowy, więc można dodać (Low, 15 minut). Gotowy projekt, wyłącznie z faktów znalezionych na stronach:

```
# POL-GAZ Szczecin Wojciech Podporski

> Serwis, naprawa, przeglądy i montaż pieców i kotłów gazowych w Szczecinie od 1994 roku; dodatkowo serwis pomp ciepła. Autoryzowany serwis kotłów Beretta, Junkers (Bosch), Buderus, Vaillant, Unical i Saunier Duval. Wojciech Podporski jest Ambasadorem marki Beretta (2019, 2020, 2021, 2025). Dojazd w Szczecinie ok. 20 minut, poza Szczecinem do 60 km. NIP 8521839815. Telefon 601 418 645, polgazszczecin@wp.pl. Pon.-pt. 8:00-18:00; w weekendy tylko awarie po uzgodnieniu telefonicznym.

## Usługi
- [Naprawa pieców gazowych](https://polgaz-szczecin.pl/naprawa-piecow-gazowych/): naprawa pieców, kotłów i piecyków gazowych
- [Przegląd pieca gazowego](https://polgaz-szczecin.pl/przeglad-pieca-gazowego/): coroczny przegląd z protokołem
- [Montaż i wymiana kotłów gazowych](https://polgaz-szczecin.pl/montaz-kotlow-gazowych/)
- [Awaria kotła gazowego](https://polgaz-szczecin.pl/awaria-kotla-gazowego/): co zrobić przed przyjazdem serwisu
- [Serwis pomp ciepła](https://polgaz-szczecin.pl/serwis-pomp-ciepla/)

## Marki
- [Serwis kotłów Beretta](https://polgaz-szczecin.pl/serwis-beretta/)
- [Serwis Junkers](https://polgaz-szczecin.pl/serwis-junkers/)
- [Serwis Buderus](https://polgaz-szczecin.pl/serwis-buderus/)
- [Serwis Vaillant](https://polgaz-szczecin.pl/serwis-vaillant/)
- [Serwis Saunier Duval](https://polgaz-szczecin.pl/serwis-saunier-duval/)
- [Serwis Unical](https://polgaz-szczecin.pl/serwis-unical/)

## Kody błędów
- [Kody błędów kotłów gazowych (179 kodów)](https://polgaz-szczecin.pl/bledy-kotlow/)

## Firma
- [O firmie](https://polgaz-szczecin.pl/o-firmie/)
- [Obszar działania i czasy dojazdu](https://polgaz-szczecin.pl/obszar-dzialania/)
- [Kontakt](https://polgaz-szczecin.pl/kontakt/)
```

Uwaga: slug usługi to `/naprawa-piecow-gazowych/`, a CLAUDE.md w sekcji adresów wymienia `/serwis-piecow-gazowych/`. Lista `urls-local.txt` i serwer używają `/naprawa-piecow-gazowych/`; dokument i kod mają rozbieżność do wyjaśnienia (wpływa na linki w llms.txt i na przekierowania).

## Sekcja B: zewnętrzny ślad marki

Metodologia i ograniczenia: używałem WebFetch na publicznych stronach. Wyszukiwarki (Google, DuckDuckGo) zwróciły zgodę/CAPTCHA, panoramafirm.pl i cylex były za Anubis lub nieosiągalne, Aleo i fixly zwróciły 403, beretta.pl ma lokalizator ładowany dynamicznie, a Facebook zwrócił 404 dla zapytania wyszukiwania. NIE sprawdziłem: Google Business Profile, Facebooka, YouTube, Reddit, LinkedIn, Wikipedia/Wikidata, lokalizatorów Junkers/Bosch, Buderus, Vaillant, Saunier Duval i Unical (wszystkie dynamiczne lub niedostępne), oferteo (brak wyników w zapytaniu). Brak wyniku nie oznacza braku wzmianki; to brak weryfikacji.

### Gdzie marka jest znaleziona
| Źródło | Co | NAP |
|---|---|---|
| pkt.pl (`/firma/pol-gaz-naprawa-piecow-gazowych-podporski-w-1815401`) | "Pol-Gaz. Naprawa pieców gazowych. Podporski W." | Szczecin, **Chłodna 114**; tel. 601 418 645; WWW: `www.pol-gaz.szczecin.pl`; 0 opinii; brak godzin i opisu |
| pkt.pl (`/firma/pol-gaz-747709`) | "Pol-Gaz", kategoria Sklepy z artykułami sanitarnymi | Szczecin, **Reymonta 80b**; tel. **91 487 15 78**; WWW: `polgaz-szczecin.pl` (!); pon.-pt. 8:00-17:00, sob. 9:00-13:00; 0 opinii |
| pol-gaz.szczecin.pl (stary WordPress, nadal live, status 200, kanoniczny sam do siebie) | "Pol-Gaz Kotły Gazowe i Olejowe, Wojciech Podporski", "© 2017-2025" | **ul. Chłodna 114, 71-493 Szczecin**; tel. +48 601 418 645; deklaruje "uprawnienia gazowe i elektryczne" oraz montaż "systemów solarnych, pomp ciepła, klimatyzatorów"; nie wspomina o Beretcie ani o Ambasadorze |

### Gdzie marki nie znaleziono lub nie zweryfikowano
- Bing (zapytanie `"POL-GAZ Szczecin" Podporski`): brak jakiejkolwiek wzmianki w 10 wynikach (wyniki o słowie "pol"). Sygnał, że marka praktycznie nie ma niezależnych wzmianek, ale to jedno zapytanie, nie pełny audyt.
- firmy.net: brak wpisu dla POL-GAZ Szczecin (zapytanie "pol-gaz szczecin" zwróciło inne firmy).
- beretta.pl: strona "Serwis" jest chroniona hasłem; lokalizator instalatorów nie pokazuje wyników w treści strony (dynamiczny), więc nie potwierdzam ani nie wykluczam wpisu. Strona gali Ambasadorów 2026 nie podaje nazwisk. Tytuł Ambasadora marki Beretta (2019, 2020, 2021, 2025) NIE jest potwierdzony żadnym zewnętrznym źródłem, które znalazłem. Opiera się wyłącznie na informacji od właściciela.
- Pozostali producenci, Facebook, Google Business, YouTube, Reddit, LinkedIn, Wikipedia: niezweryfikowane (patrz wyżej).

### Spójność NAP: konflikty
1. Adres: stara strona i pkt.pl podają Chłodna 114 jako adres firmy, a CLAUDE.md i nowa strona mówią "brak punktu przyjęć, dojazd do klienta"; nowy JSON-LD ma tylko `addressLocality: Szczecin`. Nie wiem, czy Chłodna 114 jest adresem zarejestrowanym firmy (NIP/CEIDG) czy dawnym. Do wyjaśnienia z właścicielem; jeśli to adres rejestrowy, warto go podać w stopce i `PostalAddress` (zmiana tego, co "firma ma adres", wymaga potwierdzenia, nie wymyślam).
2. Nazwa: trzy warianty w obiegu: "POL-GAZ Szczecin Wojciech Podporski" (nowa strona, NIP), "Pol-Gaz Kotły Gazowe i Olejowe Wojciech Podporski" (stara strona WordPress) i "Pol-Gaz. Naprawa pieców gazowych. Podporski W." (pkt.pl).
3. Dwie domeny z tą samą treścią biznesową: `pol-gaz.szczecin.pl` (stary WordPress, nadal działa) i `polgaz-szczecin.pl`. Brak przekierowania 301 ze starej domeny. To dzieli sygnały, a katalogi wskazują starą domenę. Po wdrożeniu: 301 `pol-gaz.szczecin.pl` na `polgaz-szczecin.pl` (jeśli właściciel kontroluje DNS tej domeny i chce zachować starą).
4. Obcy wpis używa domeny `polgaz-szczecin.pl`: pkt.pl "Pol-Gaz" (Sklepy z artykułami sanitarnymi, Reymonta 80b, tel. 91 487 15 78) wskazuje `polgaz-szczecin.pl` jako WWW. Nie wiem, czy to ten sam właściciel (inny telefon i adres, inna kategoria). Wygląda na błędny lub starszy wpis. Wymaga zgłoszenia korekty w pkt.pl i potwierdzenia z właścicielem.

### Gaz-Expres Roman Podporski (osobny podmiot)
pkt.pl: trzy wpisy "Gaz-Expres Roman Podporski", kategoria Instalacje gazowe, Szczecin (Haliny Gaińskiej 14; Dąbrowszczaków 14; Przestrzenna 13), tel. 601 415 080, WWW `gaz-expres.pl`, ocena 4,4 z 46 opinii (główny wpis). Inna nazwa, inny telefon, inna domena. Nie ma powiązania z POL-GAZ w znalezionych źródłach, ale wspólne nazwisko, miasto i branża ("Podporski", gazownictwo Szczecin) mogą mylić modele językowe. Opinie 4,4/46 należą do Gaz-Expres, nie do POL-GAZ; nie wolno ich przenosić na nową stronę (zgodnie z CLAUDE.md "ocena 5,0 z 47 opinii" jest oznaczona jako niepotwierdzona). Środek zaradczy: spójne pełne "Wojciech Podporski" + "POL-GAZ Szczecin" w każdym wpisie, NIP w katalogach, `sameAs` i unikanie samego nazwiska "Podporski".

### 5 najcenniejszych wzmianek do zdobycia (od najważniejszej)
1. Google Business Profile (z kategorią "Serwis kotłów grzewczych", godzinami, obszarem obsługi, zdjęciami, opiniami) i wpisanie URL do `firma.profilGoogle` / `sameAs`. Główne źródło dla Google AI Overviews i Maps; widżet Shapo już zakłada opinie Google. Wysiłek: 1-2 godz. + zbieranie opinii.
2. Wpis w lokalizatorze serwisów/instalatorów Beretta (beretta.pl) i listach serwisów Junkers/Bosch, Buderus, Vaillant, Saunier Duval, Unical z linkiem do strony marki. Bezpośrednie potwierdzenie autoryzacji i Ambasadora od producenta, najsilniejszy sygnał autorytetu. Wymaga kontaktu właściciela z przedstawicielami marek (nie sprawdziłem, które wpisy już istnieją).
3. Kanał YouTube (lub krótkie nagrania) z 3-5 filmami o najczęstszych kodach (2951, 227, 1023 Junkers) z linkami do stron kodów; największa korelacja wzmianek z cytowaniami AI (~0,74), a firma ma ślad zerowy (niezweryfikowany). Wysiłek: średni.
4. Poprawione i uzupełnione wpisy w katalogach lokalnych (pkt.pl, panoramafirm.pl, Aleo, oferteo, fixly, cylex, firmy.net): jedna nazwa, NIP, ten sam telefon, nowa domena, jeden adres. Konkretnie: poprawić wpis pkt.pl 1815401 (stara domena) i zgłosić błędny wpis 747709. Wysiłek: 2-3 godz.
5. Lokalna publikacja lub partner z linkiem: prasa/portal lokalny szczeciński o Ambasadorze Beretta lub wywiad z serwisantem; wpis w Wikipedii/Wikidata raczej niemożliwy (brak ogólnej istotności), więc zamiast tego Facebook firmy (`firma.facebook`) i post/dyskusje na Reddit (r/szczecin) tylko jako rzetelna odpowiedź na pytania, nie reklama. Wysiłek: zmienny.

## Priorytetowa lista zmian (Top 5, nakład)
1. Cena lub zasady wyceny w pierwszym zdaniu sekcji "Cena" (wymaga danych od właściciela). Nakład: 30 min po otrzymaniu danych.
2. Usunąć sprzeczność o seriach Beretta (strona główna vs `/serwis-beretta/`) po potwierdzeniu przez właściciela. Nakład: 15 min + pytanie.
3. Uzupełnić `sameAs` (Google, Facebook) i ujednolicić NAP w katalogach, wraz z 301 ze starej domeny. Nakład: 2-4 godz.
4. Wydłużyć `odpowiedz` na 12 stronach kodów do 40-60 słów z nazwą firmy i miastem; dodać brakujące kody Buderus 2961/1023/2951/1017, 128, H6. Nakład: 3-4 godz.
5. Dodać tabele (kod, znaczenie, co możesz zrobić sam) i zamienić H2 lokalne na pytania. Nakład: 2 godz.

## Czego nie mogłem zweryfikować
- Widoczność w ChatGPT/Perplexity/AIO oraz stan DataForSEO (nie użyto).
- Prawdziwe zachowanie LIVE dla botów z oficjalnych IP (tylko podszywanie się pod UA z jednego adresu).
- Lokalizatory producentów, Google Business Profile, Facebook, YouTube, Reddit, LinkedIn, Wikipedia, panoramafirm.pl, Aleo, fixly, cylex, oferteo.
- Czy Chłodna 114 to aktualny adres rejestrowy, czy 91 487 15 78 / Reymonta 80b należą do właściciela.
- Czy tytuł Ambasadora Beretta jest potwierdzony publicznie przez producenta.
