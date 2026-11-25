# Audyt Local SEO: POL-GAZ Szczecin Wojciech Podporski

Data audytu: 2026-11-24. Typ firmy: SAB (dojazd do klienta, brak punktu przyjęć). Branża: usługi domowe / HVAC (serwis kotłów gazowych).
Zakres A: przebudowana, jeszcze niewdrożona wersja (http://localhost:3977, 29 adresów z urls-local.txt, kod w src/). Zakres B: publiczny internet (WebFetch/curl).

## Wynik: 49 / 100 (ocena warunkowa, część wymiarów niezweryfikowana)

| Wymiar | Waga | Punkty | Uwagi |
|---|---|---|---|
| Sygnały GBP | 25% | 8/25 | Nie udało się zweryfikować istnienia profilu. Brak linku do profilu na stronie, `sameAs` puste (TODO właściciel). |
| Opinie i reputacja | 20% | 8/20 | Widżet Shapo tylko na stronie głównej, brak treści opinii w HTML, brak linku do Google. Oceny/liczby nie zweryfikowano. |
| Local on-page | 20% | 14/20 | Poprawne title/H1 z "Szczecin", click-to-call, strona obszaru; ale szablonowe akapity miejscowości i sprzeczność "60 km". |
| NAP i cytowania | 15% | 7/15 | Spójne w nowej witrynie, niespójne w sieci (nazwy, adres, domena). |
| Schema lokalna | 10% | 8/10 | HVACBusiness bez ulicy, bez geo, z areaServed i godzinami: właściwe dla SAB. |
| Linki i autorytet lokalny | 10% | 4/10 | Brak zweryfikowanych cytowań poza pkt.pl i lokalizatorem Beretta. |

## Co działa (zweryfikowane lokalnie)

- NAP identyczny na wszystkich 29 stronach i w stopce: nazwa "POL-GAZ Szczecin Wojciech Podporski", tel. 601 418 645, e-mail polgazszczecin@wp.pl, NIP 8521839815; godziny pon.–pt. 8:00–18:00, weekend tylko awarie po uzgodnieniu. Każdy `tel:` to `tel:+48601418645` (145 wystąpień), każdy `mailto:` to ten sam adres.
- Click-to-call: link w nagłówku (desktop), przyciski `btn-tel` w treści, stopka, pływający pasek "Zadzwoń" na dole ekranu (tylko mobile, `md:hidden`). Brak pomiaru kliknięć (brak GA/GTM/analityki w HTML): nie wiadomo, ile telefonów generuje strona.
- Schema `HVACBusiness` (src/lib/seo.ts): `address` tylko z miejscowością, regionem i krajem (bez ulicy), `areaServed` jako 7 węzłów City, `openingHoursSpecification` pon.–pt., telefon w E.164, bez `geo`, bez `aggregateRating`. To poprawny wzorzec dla SAB (Google nie wymaga ulicy; fałszywe `geo` byłoby gorsze niż brak). Typ HVACBusiness pasuje do kotłów i pomp ciepła.
- Brak osadzonej mapy: dla SAB poprawne i zgodne z faktami ("Nie prowadzimy punktu przyjęć"). Mapa z pinezką sugerowałaby lokal.
- Tytuły i H1 z frazą + "Szczecin" na stronach usług i marek; canonicale poprawne; sitemap zawiera 29 adresów; robots.txt otwarty.
- Wyróżnik (Ambasador Beretta 2019, 2020, 2021, 2025) widoczny na stronie głównej, "O firmie" i w schema Person.

## Ustalenia

### Krytyczne

**C1. Stara wersja live i jej schema przeczą nowej treści (zweryfikowane curl, https://polgaz-szczecin.pl).** Stara strona ma w JSON-LD `aggregateRating` 5.0 / 47 opinii wpisane na sztywno, `geo` 53.4285 / 14.5528, sobotę 9:00–15:00, a w treści "Telefon całodobowy", "Działamy 7 dni w tygodniu", "ponad 37 000 napraw", "2 serwisantów". CLAUDE.md zakazuje tych twierdzeń. Do wdrożenia nowej wersji trzeba je zastąpić (nowa wersja ich nie zawiera). Ryzyko: rozbieżność godzin między starą stroną, Google a katalogami.

**C2. Nieznany stan profilu Google (nie zweryfikowano).** Google Search/Maps przekierowują na consent.google.com, DuckDuckGo wyświetla captchę, Bing zwrócił nietrafione wyniki. Nie wiem, czy profil istnieje, jaką ma kategorię, godziny i adres. Pośrednio: stara strona pisze "5★ na Google", a nowa ładuje widżet Shapo "Opinie klientów z Google", co sugeruje istnienie profilu z opiniami (wniosek, nie potwierdzenie). `firma.profilGoogle` jest puste, więc ani link, ani `sameAs`, ani przycisk "Zobacz opinie" nie działają.

### Wysokie

**H1. Rozbieżność adresu i nazw w sieci (zweryfikowane).**
- pkt.pl pokazuje ul. Chłodna 114, 71-493 Szczecin, NIP 8521839815 (zgodny z firmą), 0 opinii, wygląda na nieprzejęty ("Jesteś właścicielem tej firmy?"), strona www: pol-gaz.szczecin.pl.
- Lokalizator Beretta (beretta.pl/instalatorzy/) pokazuje "POL – GAZ", Chłodna 114, Szczecin, tel. 601418645, osoba Wojciech Podporski.
- Nowa strona deklaruje brak adresu. To nie musi być błąd (adres może być adresem rejestrowym/domowym), ale właściciel musi zdecydować, który adres jest publiczny. Dla SAB w GBP adres się ukrywa. Nie ustalono, czy Chłodna 114 jest adresem rejestrowym; nie wpisywać go na stronie bez zgody właściciela.

**H2. Druga, działająca domena: https://pol-gaz.szczecin.pl (zweryfikowane curl).** HTTP 200, Apache, Last-Modified 2025-01-29, title "Serwis kotłów gazowych – POL-GAZ - Szczecin", nazwa "Pol-Gaz Kotły Gazowe i Olejowe Wojciech Podporski", ul. Chłodna 114, tel. (+48) 601 418 645, w treści m.in. "systemy solarne, pompy ciepła, klimatyzatory" (CLAUDE.md: klimatyzacja i kolektory poza zakresem). Brak przekierowania na polgaz-szczecin.pl. Ta domena jest podana w pkt.pl. Duplikat treści/marki, rozbija sygnały i podaje sprzeczne fakty. Po wdrożeniu: 301 na nową domenę lub świadome wygaszenie.

**H3. Wpis w lokalizatorze Beretta bez statusów (zweryfikowane przez dane lokalizatora).** Rekord "POL – GAZ" (id 111902) ma puste pola `ambasador` i `autoryzacja`; inne wpisy mają `ambasador: TAK`. Znaczenie pól wywnioskowane z nazw; nie potwierdzone przez Beretta. Brak adresu strony i e-maila. Właściciel (Ambasador 2019, 2020, 2021, 2025) powinien poprosić Beretta o aktualizację: nazwa, www, e-mail, oznaczenie ambasadora/autoryzacji.

**H4. Brak opinii w HTML i dowodu społecznego poza stroną główną.** Shapo wczytuje się dopiero po przewinięciu (IntersectionObserver), na stronach usług i marek nie ma sekcji opinii, w HTML brak jakiejkolwiek opinii, brak linku do Google. Dla robotów i AI strona nie ma żadnej widocznej oceny. Nie wpisywać 5,0/47 bez potwierdzenia właściciela.

**H5. Sprzeczność "do 60 km" (zweryfikowane).** Strona obszaru: Chojna ok. 62 km, Myślibórz ok. 68 km, a hero, schema i wszystkie strony mówią "do 60 km". Ujednolicić ("do ok. 70 km" lub usunąć dwie miejscowości); w GBP obszar musi się zgadzać.

### Średnie

**M1. Strona obszaru: sześć szablonowych akapitów (src/app/obszar-dzialania/page.tsx).** Każdy ma ok. 45 słów; zmieniają się tylko nazwa, km i minuty. Test zamiany nazwy miejscowości: akapity są wymienialne. Ryzyko doorway jest niskie, bo to jedna strona, czasy dojazdu to realna informacja, a firma faktycznie dojeżdża; ale unikalnej wartości lokalnej prawie nie ma (brak nazw dzielnic, typowych kotłów, realizacji). H2 "Serwis pieców gazowych {miasto}" ×6 powiela ten sam wzorzec. Nie dodawać kolejnych szablonowych sekcji.

**M2. Niedopasowanie nazw adresów w dokumentacji.** CLAUDE.md wskazuje /serwis-piecow-gazowych/ jako stronę z największą liczbą wyświetleń; w kodzie istnieje /naprawa-piecow-gazowych/ (lokalnie 200), a /serwis-piecow-gazowych/ daje 404. Fraza "serwis pieców gazowych szczecin" (416 wyśw., poz. 36,2) jest przypisana stronie głównej (H1 "Serwis pieców gazowych w Szczecinie"), "naprawa pieców gazowych szczecin" (547, poz. 38,8) stronie /naprawa/. Zaktualizować CLAUDE.md, żeby uniknąć błędnych linków lub kanibalizacji.

**M3. Frazy z Search Console bez pokrycia na stronie (Zapytania.csv).** Łącznie 11 944 wyświetleń i 28 kliknięć; zapytania z "szczecin" to ok. 8 107 wyświetleń i 8 kliknięć (pozycje głównie 25–50). Marki bez strony: Quadra ("serwis kotłów quadra szczecin" 249 wyśw., poz. 24,9), Immergas (78), Alko (19). Czy firma je serwisuje, wie tylko właściciel (TODO właściciel). Fraza "szczecin 24h" (210 wyśw.) nie może być obsłużona hasłem całodobowości.

**M4. Zapytania lokalne marki Beretta mają bardzo niski CTR** ("beretta serwis szczecin" 614 wyśw., 1 klik, poz. 8,8; "beretta szczecin" 512, poz. 11,6). Po wdrożeniu sprawdzić, czy strona /serwis-beretta/ i profil GBP przejmują to zapytanie. Zależy też od kategorii i opisów w GBP.

**M5. Sama nazwa "POL-GAZ" jest niejednoznaczna.** Zapytania brandowe ("pol gaz szczecin" poz. 3,4; "pol-gaz" poz. 2,3) są nieliczne (ok. 60 wyświetleń łącznie), więc ranking marki jest dobry, ale w katalogach istnieją inne firmy z "Gaz-Pol" w nazwie (np. wyniki firmy.net spoza Szczecina). Zawsze używać pełnej nazwy z "Szczecin".

### Niskie

**L1.** `Person.award` i `ContactPage` bez `contactPoint`; opcjonalnie dodać `contactPoint` (telefon, godziny) i `hasMap` dopiero po otrzymaniu URL profilu.
**L2.** Atrybut alt zdjęć używa wariantu nazwy "POL-GAZ Wojciech Podporski" (strona główna i "O firmie"): drobna niespójność, zastąpić pełną nazwą.
**L3.** Brak analityki zdarzeń `tel:` i `mailto:`; ustawić pomiar przez GBP (połączenia) lub zdarzenia.
**L4.** Brak zdjęć z realizacji poza statuetką Beretta (TODO właściciel); wpływa na GBP i zaufanie.

## Dedykowana strona Goleniów: werdykt

**Warunkowo tak, ale niski priorytet i dopiero z unikalną treścią od właściciela.** Dane: jedno zapytanie ("serwis pieców gazowych goleniów"), 167 wyświetleń w 12 miesięcy, 0 kliknięć, poz. 24,5. To mały wolumen, ale jedyne zapytanie miejscowości poza Szczecinem z realnym zasięgiem i poz. 24,5 (druga strona wyników) to nie jest widoczność, ale blisko. Strona wykonana szablonowo (zamiana nazwy miasta) nie jest uzasadniona i grozi karą za doorway. Wymagana unikalna treść (min. ok. 300–400 słów, wszystko potwierdzone przez właściciela):
- realne zlecenia w Goleniowie i okolicy (rodzaj kotła, marka, usterka; bez danych osobowych), liczba tylko jeśli właściciel ją poda;
- czas dojazdu i ewentualna dopłata (ceny dopiero po ustaleniu przez właściciela);
- zdjęcie z pracy w okolicy;
- typowe pytania mieszkańców (dom jednorodzinny, kocioł w kotłowni, wymiana pieca) zamiast ogólników;
- opinie klientów z Goleniowa, jeśli są w Google;
- link z /obszar-dzialania/, usług i strony głównej oraz H1 z frazą docelową.
Do czasu dostarczenia treści rozbudować wpisy Goleniów/Police na stronie obszaru o fakty właściciela i sprawdzić w Search Console, czy poz. się poprawia.

## Cytowania i zewnętrzne źródła (stany rozdzielone)

| Źródło | Stan | Szczegóły |
|---|---|---|
| Google Business Profile | NIE UDAŁO SIĘ ZWERYFIKOWAĆ (brak dostępu) | Google Search i Maps zwróciły przekierowanie na consent.google.com. DuckDuckGo: captcha. Bing: wyniki bez związku. Wymaga ręcznego sprawdzenia przez właściciela. |
| pkt.pl | ZNALEZIONO | https://www.pkt.pl/firma/pol-gaz-naprawa-piecow-gazowych-podporski-w-1815401. Nazwa: "Pol-Gaz. Naprawa pieców gazowych. Podporski W."; adres: ul. Chłodna 114, 71-493 Szczecin; tel. 601 418 645; www.pol-gaz.szczecin.pl; NIP 8521839815; REGON 810609079; PKD 43.22.Z; 0 opinii; kategoria "Instalacje gazowe"; wygląda na nieprzejęty. |
| Lokalizator Beretta (beretta.pl/instalatorzy/, dane z admin-ajax store_search) | ZNALEZIONO | Nazwa "POL – GAZ"; Chłodna 114, Szczecin; tel. 601418645; imię "Wojciech Podporski"; pola ambasador i autoryzacja puste; brak www/e-mail. Pobrano ok. 41 wpisów w okolicy; lista nie jest wyczerpująca. Dodatkowo wpis "Jakub Podporski", Jantarowa 4, Szczecin, tel. 505263376 (pokrewieństwo z firmą NIE ustalone). |
| Panoramafirm.pl | NIE UDAŁO SIĘ ZWERYFIKOWAĆ (brak dostępu) | Ochrona Anubis, treść nie załadowana (dwa adresy). |
| Aleo.com | NIE UDAŁO SIĘ ZWERYFIKOWAĆ (brak dostępu) | HTTP 403. |
| Oferteo.pl | NIE UDAŁO SIĘ ZWERYFIKOWAĆ | Zgadnięte adresy zwróciły 404; nie znam właściwego adresu wyszukiwania. |
| Fixly.pl | NIE UDAŁO SIĘ ZWERYFIKOWAĆ (brak dostępu) | HTTP 403. |
| Cylex | NIE UDAŁO SIĘ ZWERYFIKOWAĆ (brak dostępu) | Przekierowanie na cylex-polska.pl, następnie HTTP 403. |
| Firmy.net | NIE ZNALEZIONO w wynikach wyszukiwania | Zapytanie "POL-GAZ Szczecin" zwróciło 6 firm z innych miast (np. GAZ-POL, Marcinkowice); żadnej z POL-GAZ/Podporski. Wyszukiwanie tylko po nazwie, wyniki skrócone; nie dowodzi braku wpisu pod inną nazwą. |
| Facebook | NIE UDAŁO SIĘ ZWERYFIKOWAĆ | Adres wyszukiwania zwrócił 404; strona nie linkuje do profilu (`firma.facebook` puste). Istnienie profilu nieustalone. |
| Lokalizatory Junkers/Bosch, Vaillant, Buderus, Saunier Duval, Unical | NIE SPRAWDZANO | Poza czasem audytu. |
| pol-gaz.szczecin.pl | ZNALEZIONO (druga witryna) | Patrz H2. |

## Konflikty NAP

| Element | Nowa strona (lokalnie) | Inne źródła |
|---|---|---|
| Nazwa | POL-GAZ Szczecin Wojciech Podporski | "Pol-Gaz Kotły Gazowe i Olejowe Wojciech Podporski" (pol-gaz.szczecin.pl); "Pol-Gaz. Naprawa pieców gazowych. Podporski W." (pkt.pl); "POL – GAZ" (Beretta) |
| Adres | brak (SAB) | ul. Chłodna 114, 71-493 Szczecin (pkt.pl, Beretta, pol-gaz.szczecin.pl) |
| Telefon | 601 418 645 | taki sam wszędzie, gdzie znaleziono firmę |
| WWW | polgaz-szczecin.pl | pol-gaz.szczecin.pl (pkt.pl) |
| Godziny | pon.–pt. 8–18, weekend awarie | stara strona: sobota 9–15, "całodobowo", "7 dni" |
| Zakres | gaz, pompy ciepła; bez klimatyzacji i solarów | pol-gaz.szczecin.pl wymienia solary i klimatyzatory |
| Zasięg | "do 60 km", ale Chojna 62, Myślibórz 68 | stara strona: 60 km |

Telefon i NIP są spójne; niespójne są nazwa, adres, domena, godziny i zakres.

## Gaz-Expres Roman Podporski (zweryfikowane na pkt.pl i gaz-expres.pl)

- To inna firma: NIP 8512056539, REGON 810725495, tel. 601 415 080, www gaz-expres.pl, na pkt.pl trzy wpisy z różnymi adresami (Haliny Gaińskiej 14; Dąbrowszczaków 14; Przestrzenna 13), kategoria "Instalacje gazowe", założona 1990 wg pkt.pl, godziny pon.–pt. 9–20, sob. 9–14.
- Działa w tym samym mieście, w tej samej branży (serwis, przeglądy, montaż kotłów), obsługuje m.in. Vaillant, Saunier Duval, Beretta, Junkers, Buderus. Nazwisko takie samo, a numery telefonów różnią się od 601 418 645 tylko końcówką (601 41x xxx).
- Oceny sprzeczne w samym pkt.pl: wynik wyszukiwania 4.4 z 46 opinii, strona wpisu 5.0 z 2 opiniami (2013 i 2022). Nie rozstrzygnięto.
- Ani strona gaz-expres.pl, ani wpis pkt.pl nie wspomina POL-GAZ. Relacja między firmami (rodzina, współpraca) nie jest ustalona i nie należy jej sugerować.
- Ryzyko pomyłek jest realne: wspólne nazwisko, ta sama branża i miasto, podobne numery, ryzyko pomylonych opinii, zgłoszeń i przypisania wpisów w katalogach. Zalecenia: zawsze pełna nazwa "POL-GAZ Szczecin" z numerem 601 418 645 i NIP w katalogach; nie używać samego "Podporski" jako nazwy; przy zgłaszaniu wpisów sprawdzać, czy nie łączą się z numerem 601 415 080; w GBP nazwa dokładnie jak na szyldzie/dokumentach (bez dopisków z frazami).

## Lista kontrolna GBP dla właściciela (HVAC, SAB, Polska)

Wszystkie punkty do potwierdzenia przez właściciela; poniżej bez zgadywania faktów.

1. Najpierw sprawdzić, czy profil już istnieje (wyszukać nazwę i telefon w Mapach, zalogować się na business.google.com). Nie zakładać duplikatu: jeśli istnieje, przejąć/zweryfikować go.
2. Nazwa: dokładnie "POL-GAZ Szczecin" lub nazwa używana w rzeczywistości (zgodna z CEIDG i szyldem), bez fraz i miast dopisanych dla SEO.
3. Typ: firma obsługująca klientów u nich (SAB); adres ukryty. Zdecydować, czy Chłodna 114 jest adresem do weryfikacji (weryfikacja zwykle wymaga adresu), ale ukryć go publicznie.
4. Kategoria główna: wybrać jedną kategorię zgodną z głównym zarobkiem. To najważniejszy czynnik rankingu lokalnego (Whitespark); zły wybór szkodzi. Kandydat do rozważenia i sprawdzenia w panelu: "Serwis kotłów grzewczych" (nazwa w polskim interfejsie do potwierdzenia). Nie przesądzam dokładnej nazwy kategorii.
5. Kategorie dodatkowe (tylko prawdziwe usługi): np. instalator ogrzewania/gazowy, serwis pomp ciepła; nie dodawać klimatyzacji ani solarów (poza zakresem).
6. Usługi: lista zgodna ze stronami (naprawa pieców gazowych, przegląd, montaż i wymiana kotłów, awaria kotła, serwis pomp ciepła); ceny dopiero po ustaleniu przez właściciela.
7. Obszar obsługi: Szczecin, Police, Gryfino, Goleniów, Stargard, Chojna, Myślibórz (spójnie z promieniem po decyzji w H5; w GBP limit liczby obszarów).
8. Godziny: pon.–pt. 8:00–18:00; sob.–niedz. zamknięte. Awarie weekendowe opisać w opisie ("po uzgodnieniu telefonicznym"), nie jako godziny pracy. Nie "24h".
9. Telefon główny: 601 418 645; strona: https://polgaz-szczecin.pl (po wdrożeniu); dodać linkowanie z `firma.profilGoogle` i `sameAs`.
10. Opis (do 750 znaków): od 1994 r., marki, Ambasador Beretta 2019, 2020, 2021, 2025, dojazd; bez superlatyw.
11. Zdjęcia: logo, statuetki i certyfikat (są), zdjęcia z pracy (serwis, montaż), zdjęcie właściciela; regularnie nowe.
12. Atrybuty i marki: autoryzowany serwis tylko tych marek, które właściciel potwierdzi dokumentem.
13. Proces zbierania opinii: link do formularza opinii z GBP wysyłany SMS-em po każdej wizycie (do 24 h), kod QR na protokole serwisowym i fakturze; cel stały napływ opinii (reguła 18 dni: nie dopuścić do trzytygodniowej przerwy); odpowiadać na każdą opinię, także negatywną; nie kupować opinii, nie filtrować klientów.
14. Wpisy z katalogów: przejąć pkt.pl (wpis 1815401), zaktualizować nazwę, www, godziny, usługi; poprosić Beretta o aktualizację rekordu "POL – GAZ"; zadbać o 301 z pol-gaz.szczecin.pl.
15. Posty i pytania: co najmniej raz w miesiącu post (przegląd przed sezonem, kody błędów), odpowiedzi w Pytaniach i odpowiedziach.

## Top 10 działań

1. (Krytyczne) Sprawdzić i przejąć profil Google; wpisać `firma.profilGoogle`.
2. (Krytyczne) Przy wdrożeniu usunąć ze starej wersji live fałszywe twierdzenia (aggregateRating 5.0/47, całodobowo, 7 dni, sobota 9–15, geo).
3. (Wysoki) Zdecydować o adresie publicznym (Chłodna 114) i ujednolicić we wszystkich źródłach.
4. (Wysoki) 301 z pol-gaz.szczecin.pl na polgaz-szczecin.pl (zachować zasady dotyczące /protokol).
5. (Wysoki) Przejąć wpis pkt.pl i zaktualizować dane w Beretta (www, ambasador).
6. (Wysoki) Sekcja opinii poza stroną główną; link do Google; kilka opinii w HTML za zgodą.
7. (Wysoki) Ujednolicić zasięg (60 km vs 62/68 km).
8. (Średni) Rozbudować wpisy miejscowości faktami od właściciela; rozważyć stronę Goleniów po dostarczeniu treści.
9. (Średni) Zweryfikować, czy obsługiwane są Quadra/Immergas/Alko; ewentualnie strony marek.
10. (Niski) Pomiar kliknięć w numer telefonu.

## Ograniczenia (niezweryfikowane)

Nie sprawdzono: istnienia i parametrów profilu Google (kategorie, opinie, liczba, tempo, odpowiedzi), Facebooka, panoramafirm.pl, aleo.com, oferteo.pl, fixly.pl, cylex (blokady 403/Anubis/404), lokalizatorów innych producentów, rankingu w lokalnym pakiecie, danych DataForSEO (narzędzie niedostępne), linków przychodzących. Lokalizator Beretta sprawdzono tylko próbką ok. 41 wpisów w okolicy Szczecina. Znaczenie pól "ambasador" i "autoryzacja" jest wnioskiem. Bliskość (ok. 55% wariancji rankingu lokalnego) jest poza kontrolą firmy; SAB z ukrytym adresem zależy od obszaru obsługi. Nie sprawdzono, czy adres Chłodna 114 jest adresem rejestrowym.
