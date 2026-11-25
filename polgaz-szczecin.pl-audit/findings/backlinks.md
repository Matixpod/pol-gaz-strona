# Profil linków zwrotnych: polgaz-szczecin.pl

Data analizy: 2026-11-24. Poziom danych: Tier 0 (tylko Common Crawl i crawler weryfikacyjny; brak kluczy Moz, Bing i DataForSEO).

**Wynik ogólny: BRAK WYSTARCZAJĄCYCH DANYCH (INSUFFICIENT DATA).** Wynik liczbowy Backlink Health Score nie jest podawany, bo na Tier 0 mamy dane dla mniej niż 4 z 7 czynników. Podanie liczby byłoby mylące.

## 1. Co zmierzono

| Metryka | Wartość | Źródło | Pewność |
|---|---|---|---|
| Domena w grafie Common Crawl (release cc-main-2026-jan-feb-mar) | nie znaleziona (`in_crawl: false`, `in_rankings: false`) | Common Crawl Web Graph, poziom domeny | 0,50 |
| PageRank, ranga PageRank | brak (null) | Common Crawl | 0,50 |
| Harmonic centrality i jej ranga | brak (null) | Common Crawl | 0,50 |
| Liczba hostów | brak (null) | Common Crawl | 0,50 |
| Zapytanie o `www.polgaz-szczecin.pl` | ten sam wynik (skrypt sprowadza do domeny głównej), brak danych | Common Crawl | 0,50 |
| Domeny odsyłające, in-degree | nieustalone | Common Crawl nie udostępnia ich w tym narzędziu (`--top-referrers` jest wyłączone) | brak danych |
| Odsyłające strony i anchory | nieustalone | brak źródła na Tier 0 | brak danych |
| Docelowe adresy URL linków | nieustalone | brak źródła na Tier 0 | brak danych |
| DA, PA, Spam Score | nieustalone | Moz niedostępny | brak danych |
| Weryfikacja znanych linków | niewykonana | nie podano listy znanych backlinków (`verify_backlinks.py` wymaga pliku `--links`) | nie dotyczy |

Świeżość: graf Common Crawl jest kwartalny i obejmuje okres styczeń–marzec 2026, czyli dane mają ok. 8 miesięcy. Brak domeny w grafie oznacza tylko tyle, że nie trafiła do tego wycinka (graf pokrywa się ze zbiorem crawlowanym, a mała lokalna strona często go nie obejmuje). To nie dowodzi braku linków.

## 2. Ograniczenia danych (ważne dla interpretacji)

- Brak dowodu nie jest dowodem braku. Fakt, że Common Crawl nie widzi domeny, nie znaczy, że nie ma linków. Mała lokalna firma może mieć linki z katalogów, a nie być w grafie.
- Nie ustalono żadnej odsyłającej domeny ani strony. Wszystkie wnioski o tym, które URL-e mają linki, są niezmierzone.
- Nie potwierdzono żadnego linku do adresów, które po przebudowie zwrócą 404. Nie potwierdzono też żadnego spamu. Nie zbadano tego, więc nie wolno przyjąć, że ich nie ma.
- Nie użyto narzędzi spoza zakresu zlecenia (Moz, Bing, DataForSEO). Nic nie instalowano.

## 3. Ustalenia

| # | Waga | Ustalenie | Pewność |
|---|---|---|---|
| 1 | Wysoka | Brak jakichkolwiek pomiarów linków przychodzących. Przed wdrożeniem nie wiemy, jakie linki trzeba chronić. Zalecenie: wyeksportować dane z Google Search Console (Linki > Najczęściej linkowane strony, Strony linkujące, Najczęstszy tekst linków) i z Bing Webmaster Tools (po zweryfikowaniu własności). To darmowe, pochodzą od właściciela i są pełniejsze niż Common Crawl. | wysoka (wynik pomiaru: brak danych) |
| 2 | Wysoka | Migracja Hostinger na Vercel bez znajomości profilu linków. Reguły przekierowań trzeba ustawić niezależnie od wyniku: `/index.html` na `/` (301), host `www` na host bez `www` (301, na poziomie hosta/domeny w Vercel, z zachowaniem ścieżki), http na https. Wymóg z `trailingSlash: true` oznacza, że warto sprawdzić też warianty bez końcowego ukośnika. | nie wynika z pomiaru, to wymóg migracji |
| 3 | Średnia | Zachować adresy `/` i `/bledy-kotlow/` (zgodnie z planem). Jeśli stary serwis ma inne adresy (np. stare podstrony, pliki, kotwice, parametry), nie zostały one tu wykryte; należy je porównać z listą z Search Console (strony z kliknięciami i wyświetleniami) oraz z eksportem linków z GSC. Każdy adres z linkiem zewnętrznym, który zniknie, powinien dostać 301 na najbliższą stronę. | nie wykryto, nie wykluczono |
| 4 | Niska | Brak widocznego spamu, ale to wynik braku danych, nie czystości profilu. | niska (0,50) |
| 5 | Niska | Nie wykonano weryfikacji znanych linków. Jeśli właściciel zna miejsca z linkiem (katalogi, strona Berettą itp.), można podać listę w formacie `[{"source_url": "..."}]` i uruchomić `verify_backlinks.py`. | nie dotyczy |

## 4. Czynniki Backlink Health Score

| Czynnik | Waga | Status |
|---|---|---|
| Liczba domen odsyłających | 20% | pominięty (brak źródła) |
| Rozkład jakości domen | 20% | pominięty |
| Naturalność anchorów | 15% | pominięty |
| Odsetek toksycznych linków | 20% | pominięty |
| Trend przyrostu linków | 10% | pominięty (tylko DataForSEO) |
| Follow/nofollow | 5% | pominięty |
| Znaczenie geograficzne | 10% | pominięty |

Ocenionych czynników: 0 z 7. Wynik liczbowy: nie podawany.

## 5. Sugestie możliwości pozyskania linków (nie są to dane pomiarowe)

Poniższe to propozycje oparte na ogólnej wiedzy o lokalnym rynku usług HVAC w Polsce. Nie sprawdzono, czy firma już w nich jest, ani czy dany serwis przyjmuje wpisy. Zgodnie z `CLAUDE.md` każdy fakt o firmie (uprawnienia, autoryzacje, tytuł Ambasadora Beretta) musi pochodzić od właściciela.

1. **Lokatory serwisów producentów.** Beretta, Junkers/Bosch, Buderus, Vaillant, Saunier Duval, Unical: firma deklaruje autoryzowany serwis, więc warto sprawdzić, czy jest na liście "znajdź serwis" na stronie danego producenta i czy wpis zawiera link do polgaz-szczecin.pl. Najmocniejszy i najbardziej trafny typ linku. Wymaga potwierdzenia statusu przez właściciela.
2. **Ambasador marki Beretta.** Wzmianka o Wojciechu Podporskim jako Ambasadorze Beretta (2019, 2020, 2021, 2025) na stronach lub w mediach Beretta/Riello Polska albo w aktualnościach dystrybutora, z linkiem do strony. Wymaga uzgodnienia z producentem.
3. **Wpis w Google Business Profile i Panoramie Firm / Pkt.pl / Oferia / Fixly i podobnych katalogach lokalnych.** Głównie cytowania NAP (nazwa, adres, telefon). Linki zwykle nofollow lub o małej wadze, ale wspierają lokalne SEO. Profil Google jest oznaczony w projekcie jako `TODO(właściciel)`.
4. **Izby i cechy rzemiosła.** Zachodniopomorska Izba Rzemiosła i Przedsiębiorczości w Szczecinie oraz cechy instalatorów, a także organizacje branżowe (np. stowarzyszenia instalatorów). Wpis członkowski z linkiem. Wymaga sprawdzenia, czy firma jest członkiem.
5. **Lokalne media i portale Szczecina.** Lokalne portale informacyjne i zachodniopomorskie serwisy o domu i budownictwie: komentarz eksperta przed sezonem grzewczym, poradnik o przeglądzie kotła, kodach błędów. Naturalnie wiąże się ze stroną `/bledy-kotlow/`, która ma największy ruch.

## 6. Następne kroki

1. Pobrać z Google Search Console eksport linków (źródła, strony docelowe, anchory) przed przełączeniem DNS i zapisać go jako kopię referencyjną.
2. Po otrzymaniu eksportu porównać adresy docelowe z mapą nowych adresów i dodać 301 dla wszystkich, które znikną.
3. Po wdrożeniu sprawdzić przekierowania `www`, `/index.html` i http.
4. Opcjonalnie: dodać klucz Moz (darmowy limit 2500 wierszy miesięcznie) lub Bing Webmaster API, aby uzyskać Tier 1/2.
5. Dla treści i techniki: `/seo content <url>` (E-E-A-T), `/seo technical <url>` (crawlability).

Uwaga: walidator `validate_backlink_report.py` nie został uruchomiony, bo nie powstał raport z danymi do weryfikacji (brak danych poza wynikiem Common Crawl).
