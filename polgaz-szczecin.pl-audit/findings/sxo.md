# SXO – POL-GAZ Szczecin (wersja lokalna, niewdrożona) – 2026-11-24

SXO Gap Score: **65/100** (ocena szacunkowa, patrz "Ograniczenia"). Wynik jest oddzielny od SEO Health Score.

## 0. Ograniczenia (czytać najpierw)

- Narzędzie WebSearch to NIE jest Google. Zwraca zestaw wyników bez pozycji, bez lokalnego pakietu, bez PAA, bez AI Overview i bez reklam. Domeny są polskie (oferteo.pl, pkt.pl, panoramafirm.pl), ale zestaw zawiera szum (PDF-y gov.pl, oferty pracy), więc nie traktuję go jako zlokalizowanej polskiej SERP. Kolejność na liście to kolejność zwrotu narzędzia, nie ranking Google.
- Próby uzyskania prawdziwej SERP: DuckDuckGo html zablokowany captchą; Bing przez WebFetch zwrócił wyniki niezwiązane z zapytaniem (nie użyte).
- W żadnym z zestawów nie pojawiła się strona główna żadnej firmy. To może być skutek uboczny narzędzia (indeks), nie dowód, że Google ich nie pokazuje. Nie zweryfikowano.
- Nie renderowałem stron w widoku mobilnym; "jeden ekran" oceniam z kodu HTML, nie ze zrzutu. Nie zweryfikowano.
- Dane popytu: Zapytania.csv (12 mies.). Nasza strona stoi dziś na pozycjach 29-45 dla fraz usługowych (stara wersja), więc dane o CTR dla tych fraz nie istnieją.

## 1. Nakładanie się SERP (decyzja: Strona główna vs /naprawa-piecow-gazowych/)

Listy (top 10 wg kolejności zwrotu narzędzia; skrót: pkt = pkt.pl/szukaj/..., ofe = oferteo.pl/...):

**A. serwis pieców gazowych Szczecin**: 1 ofe kotly-i-piece-gazowe/szczecin; 2 pkt serwis-piecow-gazowych; 3 panoramafirm gazowe/szczecin; 4 pkt instalacje-piecow-gazowych; 5 ofe karo-therm-instalacje; 6 ofe piece-i-kotly-co/szczecin; 7 pkt instalacja-gazowa; 8 pracodawcy.pracuj.pl/company/20291997; 9 pkt montaz-kotlow-gazowych; 10 ofe instalatorstwo-sanitarne-rafal-kolecki.

**B. naprawa pieców gazowych Szczecin**: 1 pkt serwis-piecow-gazowych; 2 pkt instalacje-piecow-gazowych; 3 muratordom.pl (cennik naprawy i przeglądu piecyka); 4 pkt instalacja-gazowa; 5 ofe kotly-i-piece-gazowe/szczecin; 6 panoramafirm gazowe/szczecin; 7 ofe gazownik/szczecin; 8 pkt montaz-kotlow-gazowych; 9 pkt montaz-centralnego-ogrzewania; 10 gov.pl (załącznik PDF).

**C. serwis kotłów gazowych Szczecin**: 1 ofe kotly-i-piece-gazowe/szczecin; 2 pracuj.pl oferta serwisant; 3 pracodawcy.pracuj.pl; 4 pkt serwis-piecow-gazowych; 5 pkt montaz-kotlow-gazowych; 6 ofe karo-therm; 7 panoramafirm gazowe; 8 ofe piece-i-kotly-co; 9 ofe geotherm; 10 pkt instalacja-gazowa.

Nakładanie (identyczne URL-e w top 10):
- A i B: **6/10** (pkt x4, ofe kotly-i-piece, panoramafirm). Na poziomie domen: oferteo/pkt/panoramafirm występują w obu.
- A i C: **8/10** (pkt serwis, pkt montaz-kotlow, pkt instalacja-gazowa, ofe kotly, ofe karo-therm, ofe piece-i-kotly-co, panoramafirm, pracodawcy.pracuj).
- B i C: **5/10**.

Typy stron: katalogi i agregatory dominują (oferteo, pkt, panoramafirm = 6-8 z 10). Strony głównych witryn firm: 0 w zestawach. Podstrony usługowe firm: 0. Poza katalogami: poradnik cenowy (muratordom), oferty pracy, PDF-y urzędowe.

**Werdykt:** zestawy A/B/C są w dużej mierze tym samym zbiorem katalogów, więc intencja jest jedna (lokalny wybór wykonawcy). Dowód wspiera tezę "jedna fraza = jeden docelowy adres" dla serwis/naprawa/kotły. Wiarygodność: NISKA do UMIARKOWANEJ. Liczba 6/10 i 8/10 to rząd wielkości dla zestawu narzędzia, nie pomiar Google; przy prawdziwej SERP wartość może być wyższa lub niższa, szczególnie że lokalny pakiet i firmowe strony nie były widoczne. Zalecenie: nie rozdzielać "serwis" i "naprawa" na dwa konkurujące adresy bez sprawdzenia w Google (incognito, ustawienie Szczecin) lub w Ahrefs/Search Console po wdrożeniu. Dowód z własnych danych: obie frazy mają 0 kliknięć na pozycjach 36-39 (547 i 416 wyświetleń), czyli brak sygnału, która strona Google woli.

Obserwacja pomocnicza: pkt.pl pokazuje w katalogu firmę "Pol-Gaz. Naprawa pieców gazowych. Podporski W." pod adresem **pol-gaz.szczecin.pl**, który odpowiada 200 jako osobna, działająca strona (593 słowa, ten sam telefon 601 418 645, adres ul. Chłodna 114, 71-493 Szczecin, stopka 2017-2025). Patrz ustalenie F2.

## 2. Werdykty para zapytanie -> strona

Sprawdzone (treść lokalnej strony przeczytana + zestaw SERP z narzędzia, z zastrzeżeniami z sekcji 0):

1. **"serwis pieców gazowych szczecin" -> /** (416 wyświetleń, poz. 36,2). SERP nagradza katalogi z listą wykonawców, ocenami i porównaniem. Strona główna (ok. 620 słów, H1 zawiera frazę, telefon w hero, 6 marek, FAQ, opinie Shapo) jest stroną firmową, nie katalogiem. Dopasowanie typu: CZĘŚCIOWE (brak danych, czy Google miesza wyniki firmowe; w zestawie ich nie było). Braki: brak ceny, brak zdjęć z pracy, opinie ładowane po przewinięciu (niewidoczne bez JS). Werdykt: MEDIUM.
2. **"naprawa pieców gazowych szczecin" -> /naprawa-piecow-gazowych/** (547 wyświetleń, poz. 38,8). Ten sam zestaw co wyżej (6/10). Strona ok. 610 słów, 1 obraz, brak liczb. Ryzyko kanibalizacji ze stroną główną, bo oba teksty mówią niemal to samo (marki, 20 minut, godziny). Werdykt: MEDIUM-HIGH; decyzja o jednym celu zależy od weryfikacji w Google.
3. **"przegląd pieca gazowego szczecin" -> /przeglad-pieca-gazowego/** (305 wyświetleń, poz. 39,3). Zestaw z narzędzia: katalogi + poradniki ogólnopolskie (link4, kb.pl, castorama o obowiązku i cenie przeglądu) + cenauslug.pl. Sygnał: użytkownik chce wiedzieć, czy to obowiązek i ile kosztuje. Nasza strona odpowiada na obowiązek (źródło ISAP, rozróżnienie kotła od instalacji), ale cena = "podamy przez telefon". Braki: widełki cenowe (nie wymyślam; TODO(właściciel)). Werdykt: MEDIUM.
4. **"awaria kotła gazowego szczecin" i "serwis pieców gazowych szczecin 24h" -> /awaria-kotla-gazowego/**. Dla "awaria" zestaw z narzędzia to katalogi, PDF-y i wiadomości o awarii elektrociepłowni (intencja mieszana). Dla "24h" jedyny wynik z deklaracją "7 dni w tygodniu 24H" to profil w oferteo.pl (Marek Pniewski; nie zweryfikowano treści poza streszczeniem narzędzia). Strona poprawnie mówi "Nie" (FAQ: nie całodobowo), ale H1/title "szybki dojazd" i brak godzin awarii wieczorem oznaczają, że użytkownik z awarią o 21:00 nie dostaje rozwiązania. Werdykt: MEDIUM; to ograniczenie biznesowe, nie błąd strony. Nie obiecywać 24h.
5. **"beretta serwis szczecin" -> /serwis-beretta/** (614 wyświetleń, poz. 8,8, 1 klik, CTR 0,16%). SERP: NIE ZWERYFIKOWANY. Narzędzie zwróciło broń Beretta, Samsunga i warsztaty samochodowe; wynik bezużyteczny. Co można powiedzieć z kodu: title "Serwis kotłów Beretta Szczecin – Ambasador marki | POL-GAZ" i opis (Ambasador 2019, 2020, 2021 i 2025, tel.) są konkretne i lepsze niż "pusty" snippet, ale: (a) słowo "kotłów" jest w tytule, jednak zapytanie brzmi "beretta serwis" (kolejność); (b) opis nie mówi nic o gwarancji w pierwszym zdaniu, cenie ani dostępności; (c) hipoteza (niezweryfikowana): poz. 8,8 plus wyniki katalogowe/mapowe nad nami tłumaczą niski CTR bardziej niż sam snippet; nowy tytuł może pomóc nieznacznie. Test po wdrożeniu: Search Console, zapytanie "beretta serwis szczecin", CTR po 4 tygodniach. Werdykt: nie rozstrzygnięty.
6. **"2951 junkers", "junkers błąd 2951 jak naprawić" -> /bledy-kotlow/junkers-2951/ vs /bledy-kotlow/** (369 wyświetleń, poz. 7,6, 5 kliknięć; łącznie ok. 900 wyświetleń na wariantach 2951). Zapytanie standardowe nie dało wyników; "extended" zwróciło: forum.info-ogrzewanie.pl (wątek "Junkers cerapur błąd 2951", ok. 1900 słów, GC2200W), elektroda.pl (wątki 227 po 2951), instal-serwis.pl/kody-bledow (firma, lista 6599 słów, 2951 = "Zbyt dużo zerwań płomienia"), systemgaz.com.pl (lista kodów Bosch, to samo znaczenie), serwisjunkers.pl/kody-bledow-junkers.html (firma serwisowa, ok. 1690 słów, osobny H3 dla 2951, telefon 662 33 44 33), energiaibudynek.pl, kanbudwawrzyniak.pl (blog, Buderus), troubleatlas.com. Wniosek: SERP to mieszanka forów, list kodów i stron firm serwisowych; strona firmy z samym kodem to format dopasowany. Streszczenie narzędzia mówi, że serwisjunkers.pl opisuje 2951 jako błąd komunikacji eBUS, czyli inaczej niż reszta; NIE sprawdziłem tej sekcji (wydruk nie powiódł się). Nasz opis ("zbyt dużo zerwań płomienia") zgadza się z instal-serwis i systemgaz.
   Ryzyko konkurencji dwóch adresów: indeks zawiera wiersz 2951 z tym samym opisem i linkiem do podstrony; to normalny układ (indeks jako hub), ryzyko niskie, jeśli indeks nie dostanie 2951 w title/H1. Istotniejsze: podstrona ma ok. 350 słów i w sekcji "Co sprawdza serwisant?" pokazuje tekst z bazy: "Patrz usterki blokujące, które wywołują blokadę" (usterka treści, F1).
7. **"serwis pieców gazowych goleniów" -> /obszar-dzialania/** (167 wyświetleń, poz. 24,5). Zestaw z narzędzia: katalogi regionalne i firmy ze Szczecina; żadna firma z Goleniowa. Strona ma tabelę czasów dojazdu (Goleniów ok. 36 km, ok. 40 min) i akapit na miasto. Dopasowanie: DOBRE jak na lukę w SERP, ale akapit Goleniowa jest szablonem identycznym z pozostałymi miastami (zmienia się tylko miasto i km) i nie ma dowodu lokalnego. Werdykt: LOW-MEDIUM. Osobna strona Goleniowa dopiero z unikalną treścią (zgodnie z CLAUDE.md).

**Pary NIE sprawdzone / niezweryfikowane:** prawdziwa SERP Google dla żadnej frazy (cechy: lokalny pakiet, AI Overview, PAA, reklamy); "serwis kotłów gazowych szczecin" -> brak przypisanej strony (sprawdzono tylko zestaw); "serwis beretta szczecin" i "serwis beretta" (SERP); "junkers błąd 2951 jak naprawić" bezpośrednio na stronie firmowej poza listą powyżej; "montaż kotłów gazowych szczecin" (330 wyświetleń) i pozostałe strony marek (buderus, vaillant, unical, saunier-duval) w ogóle; strony kodów poza 2951; widok mobilny wszystkich stron.

## 3. Benchmark konkurencji (strony firm, pobrane curl; liczby to słowa tekstu bez nawigacji/stopki)

| Strona | Słowa | Zdjęcia (img) | Ceny | Opinie | Uwagi |
|---|---|---|---|---|---|
| https://www.gaz-expres.pl/ (Szczecin) | ok. 455 | 7 | brak cen (wzmianka "cennik" w kodzie, nie sprawdzona) | nagłówek "Opinie klientów" | H1 + 5 H2, telefon 601 415 080, formularz awarii |
| https://alfagaz.pl/ (Stargard) | ok. 940 | 7 | brak | brak | w tekście strony wstrzyknięty spam kasynowy (strona prawdopodobnie zhakowana); brak H1/H2 |
| https://www.margaz.info/ | ok. 130 | 10 | brak | brak | skrajnie cienka |
| https://vaillant.szczecin.pl/ | ok. 70 | 1 | brak | brak | skrajnie cienka |
| https://pol-gaz.szczecin.pl/ (nasza stara strona) | ok. 590 | 23 | brak | wzmianka w tekście | adres Chłodna 114 |
| https://www.bv-serwis.pl/ | nie pobrano (błąd połączenia) | - | - | - | niezweryfikowane |
| Katalog: https://www.oferteo.pl/kotly-i-piece-gazowe/szczecin | ok. 3000-3500 (szacunek WebFetch) | - | tylko ogólny szacunek 10 293-18 976 zł netto za kocioł (montaż, nie serwis) | oceny 5,0, 62 firmy | brak cen indywidualnych |
| Katalog: https://www.pkt.pl/szukaj/serwis-piec%C3%B3w-gazowych/szczecin | lista 25 firm | - | brak cen | - | m.in. Gaz-Expres, Alfagaz, B.V. Serwis, Margaz, Pol-Gaz |

Benchmark kodu 2951 (firmy/serwisy): https://www.serwisjunkers.pl/kody-bledow-junkers.html ok. 1690 słów, H2/H3, telefon, bez cen; https://instal-serwis.pl/kody-bledow/ ok. 6600 słów (lista kodów wielu marek), 12 wzmianek o zł/cenniku; https://systemgaz.com.pl/bosch,40,164.htm ok. 2040 słów (sama lista); forum https://forum.info-ogrzewanie.pl/topic/46887-junkers-cerapur-b%C5%82%C4%85d-2951/ ok. 1900 słów.
Nasze strony (HTML lokalny, tekst `main`): / ok. 620; /naprawa-piecow-gazowych/ ok. 610; /przeglad-pieca-gazowego/ ok. 520; /awaria-kotla-gazowego/ ok. 470; /bledy-kotlow/junkers-2951/ ok. 350 (szacunek z długości tekstu); każda ma jeden obraz poza stroną główną.
Wniosek: długość stron usług (470-620 słów) jest na poziomie lub powyżej konkurencji firmowej w zestawie (70-940). Konkurenci firmowi nie pokazują cen, więc cena na naszej stronie byłaby wyróżnikiem, ale tylko jeśli właściciel ją poda. Strona kodu 2951 jest cieńsza niż firmowe/serwisowe listy (1690+ słów), ale nie musi ich dorównywać pod względem objętości; potrzebuje głębi (model, kiedy dzwonić, co zrobi serwisant).

## 4. Persony (przejście przez lokalne strony; ocena z kodu, nie z zrzutu mobilnego)

1. **Brak ogrzewania, zimowy wieczór, telefon** -> /awaria-kotla-gazowego/. Ma: telefon w hero, lista bezpiecznych kroków (manometr, zawór, reset), osobny blok "Czujesz gaz? 992", uczciwe "nie całodobowo". Brakuje: odpowiedzi "czy ktoś przyjedzie dziś/dziś wieczorem" (po 18:00 tylko "po uzgodnieniu"), numeru do zadzwonienia po godzinach (brak ustaleń; TODO(właściciel)), ceny dojazdu. Zadzwonić może od razu (tel: w hero). Odpowiedź na główne pytanie: częściowa.
2. **Wynajmujący rezerwuje coroczny przegląd** -> /przeglad-pieca-gazowego/. Ma: zakres (8 punktów), czas 45-90 min, protokół, wiosna/lato. Brakuje: ceny (kluczowe dla zarządcy porównującego oferty), możliwości przeglądu kilku lokali, faktury, terminu najbliższego. Zadzwoni, ale bez ceny odpada część porównujących katalogi.
3. **Właściciel Beretty na gwarancji** -> /serwis-beretta/. Ma: autoryzacja, Ambasador, przeglądy do karty gwarancyjnej, serie. Brakuje: wyjaśnienia, czy naprawa u nich zachowuje gwarancję w tej konkretnej sytuacji (jest na stronie naprawy, nie na stronie Beretta), dowodu autoryzacji (zdjęcie certyfikatu jest tylko na stronie głównej), listy serii potwierdzonej przez właściciela (znane TODO).
4. **Osoba z błędem 2951** -> /bledy-kotlow/junkers-2951/. Ma: znaczenie w pierwszym akapicie, przyczyny, bezpieczne kroki (zawór, jeden reset, 992), telefon na górze i na dole. Brakuje: sensownej sekcji "Co sprawdza serwisant?" (wyświetla tekst z bazy, patrz F1), informacji o modelach (Cerapur/Bosch Condens) i o związku z kodem 227, ceny naprawy. Zadzwoni; zdąży przeczytać odpowiedź bez przewijania.

## 5. Ocena (SXO Gap Score, szacunek)

Typ strony 11/15; głębokość treści 10/15; UX 12/15 (telefon w hero i na dole, `tel:` 5 razy na stronie, menu bez JS); schema 12/15 (JSON-LD: HVACBusiness, Person, Service, BreadcrumbList; sprawdzone wyrażeniem regularnym, nie walidatorem); media 5/15 (jedno zdjęcie na stronę usługową, brak zdjęć z pracy); autorytet 8/15 (autor, Ambasador, źródło ISAP, ale brak widocznych opinii bez JS i brak uprawnień, bo TODO); świeżość 7/10 (data aktualizacji 24 listopada 2026). Suma 65.

## 6. Ustalenia

**High**
- F1. Strona /bledy-kotlow/junkers-2951/: sekcja "Co sprawdza serwisant?" zawiera surowy tekst z bazy "Patrz usterki blokujące, które wywołują blokadę" (ten sam tekst w indeksie, wiersz 2951). To strona z największym popytem (łącznie ok. 900 wyświetleń na wariantach 2951). Poprawić przed wdrożeniem (źródło: src/data/bledy.json lub kodyRozszerzone w src/data/bledy.ts); treść merytoryczną zatwierdza właściciel.
- F2. Druga działająca witryna firmy: https://pol-gaz.szczecin.pl/ (200 OK, nie przekierowanie; telefon 601 418 645; adres Chłodna 114; wymieniona w pkt.pl). Konflikt NAP (nowa strona: "brak punktu przyjęć"), ryzyko duplikacji encji i rozproszenia sygnałów. Nie zweryfikowano, kto ją kontroluje; zapytać właściciela (TODO(właściciel)) i po wdrożeniu rozważyć przekierowanie 301 / ujednolicenie danych w katalogach.
- F3. Brak cen na wszystkich stronach usług ("Cenę podamy przez telefon"). SERP to katalogi i poradniki cenowe (muratordom podaje dla Szczecina 180-350 zł naprawa, 250-400 zł przegląd wg streszczenia narzędzia; nie pobrano strony). Firmowi konkurenci też cen nie pokazują, więc to szansa wyróżnienia. Wymaga danych właściciela: TODO(właściciel). Nie wpisywać cen z poradników.
- F4. Nie rozstrzygnięta intencja serwis/naprawa: strona główna i /naprawa-piecow-gazowych/ mają zbliżoną treść, a zestawy SERP nakładają się 6/10 (A/B) i 8/10 (A/C). Zalecenie warunkowe: jedna fraza = jeden adres; przed wdrożeniem sprawdzić prawdziwą SERP Google i zdecydować, który adres jest celem "serwis", a który "naprawa" (różnicować treść, nie klonować).

**Medium**
- F5. Dla fraz usługowych SERP jest zdominowany przez katalogi (6-8/10); strona firmowa nie wygra z nimi typem, tylko lokalnością i dowodami. Potrzebne: widoczne opinie bez JS (obecnie Shapo po przewinięciu), prawdziwe zdjęcia, uprawnienia (TODO(właściciel)).
- F6. /serwis-beretta/: niski CTR (0,16%) nieudowodniony; snippet nie mówi o gwarancji ani dostępności. Test A/B po wdrożeniu. SERP nie zweryfikowany.
- F7. /awaria-kotla-gazowego/: intencja "24h"/wieczór nie jest obsłużona (nie wolno obiecywać 24h). Dodać wyraźnie: co zrobić po 18:00 i w weekend, jeśli właściciel potwierdzi zasady (TODO(właściciel)).
- F8. Strona 2951 jest cienka (ok. 350 słów) wobec stron serwisowych z 1690+ słowami; dodać model-specyficzne wskazówki i związek z kodem 227 (po akceptacji właściciela). Konflikt źródeł (serwisjunkers.pl: eBUS wg streszczenia narzędzia) niezweryfikowany; sprawdzić w dokumentacji Bosch/Junkers.
- F9. Media: jedno zdjęcie na stronę usługową; w CLAUDE.md jedyne zdjęcie to statuetka; brak zdjęć kotłów i pracy.

**Low**
- F10. /obszar-dzialania/: akapity miast są szablonowe; przy Goleniowie brak dowodu lokalnego (przy 167 wyświetleniach i braku firm z Goleniowa w SERP to dobry kandydat na osobną stronę, gdy będzie unikalna treść).
- F11. Strona główna: zdanie "ma dostęp do szkoleń producenta i oryginalnych części" to twierdzenie bez potwierdzenia właściciela; oznaczyć TODO(właściciel) lub usunąć.
- F12. Kafelki marek na stronie głównej mają zduplikowane linki z pustym `alt` (logotypy powtórzone dwa razy); drobna poprawka dostępności.
- F13. Widok mobilny i szybkość nie sprawdzone.

## 7. Rekomendacje międzyusługowe

- Treść/E-E-A-T (uprawnienia): `/seo content` po uzupełnieniu danych właściciela.
- Lokalnie (profil Google, spójność NAP z pol-gaz.szczecin.pl): `/seo local`.
- Raport PDF: `/seo google report`.

Źródła użyte: oferteo.pl/kotly-i-piece-gazowe/szczecin; pkt.pl/szukaj/serwis-piecow-gazowych/szczecin; panoramafirm.pl/gazowe/zachodniopomorskie,,szczecin; muratordom.pl (poradnik cen); forum.info-ogrzewanie.pl/topic/46887; serwisjunkers.pl/kody-bledow-junkers.html; instal-serwis.pl/kody-bledow/; systemgaz.com.pl/bosch,40,164.htm; gaz-expres.pl; alfagaz.pl; margaz.info; vaillant.szczecin.pl; pol-gaz.szczecin.pl; lokalnie http://localhost:3977 (adresy z urls-local.txt).
