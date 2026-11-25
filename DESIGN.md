# DESIGN.md — POL-GAZ Szczecin

System wizualny strony polgaz-szczecin.pl. Część 1 opisuje stan obecny (pomiary z wersji live, 24.11.2026), część 2 to docelowy system do wdrożenia przy przebudowie. Podgląd czcionek i kolorów: `design-specimen.html`.

Podstrony `/protokol` ten dokument nie dotyczy. Zostaje bez zmian.

## 1. Stan obecny

### Co zmierzono

| Element | Obecnie |
|---|---|
| Czcionka | Inter (jedna rodzina, wagi 400/600/700), w mapie Leaflet Helvetica |
| Skala pisma | 12, 14, 16, 18, 20, 22, 24, 30, 36, 60 px; H1 60/75 px, na telefonie 32 px |
| Kolor główny | granat Tailwind `blue-900` (`oklch(0.379 0.146 265.5)`) |
| Akcent | żółty Tailwind `yellow-400` (`oklch(0.852 0.199 91.9)`) |
| Tekst | czysta czerń `rgb(0,0,0)` w 135 elementach, szarości `gray-600/700` |
| Czerwień | obramowany przycisk „Błędy Kotłów” w nawigacji |
| Zaokrąglenia | 8 px (32 elementy), pełne pigułki (8), 12 px, 16 px, 4 px |
| Cienie | jeden poziom na 28 kartach |
| Gradienty | 4 widoczne: hero (granat 135°), żółta ramka Beretta, niebieski baner CTA, kremowa ramka „Ambasador” |
| Animacje | `ribbonAnimation`, `float`, `pulse`, `gradientAnimation`, `slideInLeft/Right`, skalowanie przy najechaniu |
| Wysokość strony | 8 525 px na komputerze, 13 306 px na telefonie |

### Ocena (Refactoring UI, 8 pytań kontrolnych)

Wynik: 5 z 8 spełnionych, czyli 6/10.

| Pytanie | Wynik | Uwaga |
|---|---|---|
| Hierarchia czytelna po rozmyciu | tak | Hero i nagłówki sekcji się bronią |
| Działa w skali szarości | tak | |
| Wystarczająco dużo światła | nie | Hero jest przeładowane (plakietka, H1, podtytuł, 4 punkty, 2 linie drobnego tekstu, 2 przyciski), a sekcje „O firmie” i „Opinie” mają puste pasy po 150–200 px |
| Etykiety słabsze od wartości | tak | |
| Odstępy ze spójnej skali | tak | Skala Tailwind |
| Ograniczona szerokość tekstu | nie | Żółta ramka Beretta ma wiersze po ok. 130 znaków; akapity wyśrodkowane w 3 linie |
| Kontrast | tak | Do poprawy czysta czerń tekstu |
| Cienie dopasowane do wysokości | nie | Wszystko ma ten sam cień, więc nic się nie wyróżnia |

### Co jest dobrym kierunkiem i zostaje

- Granat i żółty. Granat jest w logo, a żółty to w Polsce kolor oznaczeń instalacji gazowych, więc ma uzasadnienie w branży.
- Numer telefonu jako główne wezwanie do działania, widoczny w nagłówku.
- Zdjęcie statuetek i certyfikatu Beretta. To jedyny prawdziwy materiał zdjęciowy na stronie.
- Zwięzłe karty usług z trzema punktami.

### Co wymaga zmiany

1. **Gradienty.** Cztery widoczne, każdy w innym kierunku i kolorze. Do zastąpienia płaskimi wypełnieniami.
2. **Wstążka „31 LAT”.** Przekrzywiona, animowana, z cieniem, zmienia rozmiar przy przewijaniu. Liczba jest wpisana na sztywno i już nieaktualna (1994 → 2026 to 32 lata).
3. **Zdjęcie w hero.** Wygląda na zdjęcie stockowe lub wygenerowane, a jest podpisane „Zespół serwisowy Pol-Gaz”. To osłabia wiarygodność, na której opiera się cała firma. Do potwierdzenia z właścicielem i zastąpienia prawdziwym zdjęciem.
4. **Wszystko wyśrodkowane.** Nagłówki, akapity, statystyki, FAQ. Wyśrodkowany tekst wielowierszowy czyta się wolniej.
5. **Sześć identycznych kart** z tym samym linkiem „Zadzwoń w sprawie serwisu →”. Po przebudowie każda usługa prowadzi do własnej podstrony.
6. **Czerwony przycisk „Błędy Kotłów”** w nawigacji. Czerwień sygnalizuje błąd lub awarię, a tu oznacza zwykły link, i konkuruje z przyciskiem „Zadzwoń teraz”.
7. **Inter.** Poprawny, ale to domyślna czcionka połowy internetu. Szeroki krój sprawia też, że H1 łamie się na 4 wiersze.
8. **Sekcja statystyk „31 / 2 / 60 km / 5★”.** Szablonowy układ wielkich liczb; „2 serwisantów” jako wielka liczba nie buduje przewagi.
9. **Nagłówek zmieniający rozmiar** przy przewijaniu (logo, wstążka, telefon, przycisk skalują się jednocześnie).

## 2. System docelowy

Stan na 24.11.2026: system jest wdrożony w kodzie z wariantem czcionek A. Zdjęcie wygenerowane w hero zostało usunięte; do czasu dostarczenia prawdziwych zdjęć w hero strony głównej jest fotografia statuetek i certyfikatu Beretta, a marki reprezentują logotypy. Nie zrealizowano jeszcze: listy cen, statycznych opinii w HTML i chowania paska telefonu, gdy widać przycisk w hero.

### Zasady

1. **Telefon jest bohaterem.** Strona ma jedno zadanie: doprowadzić do rozmowy. Numer 601 418 645 jest najmocniejszym elementem każdego ekranu.
2. **Dowody zamiast ozdób.** Prawdziwe zdjęcia, statuetki, certyfikat, protokół przeglądu, opinie z Google. Żadnych ilustracji stockowych.
3. **Płasko.** Brak widocznych gradientów. Głębię budują kontrast tła, linie i jeden poziom cienia dla elementów przyklejonych.
4. **Do lewej.** Tekst wyrównany do lewej. Wyśrodkowanie tylko w krótkich banerach z jednym przyciskiem.
5. **Jedna odważna rzecz:** numer telefonu złożony zwężonym krojem na żółtej tabliczce. Reszta jest spokojna.

### Typografia

Trzy warianty są w `design-specimen.html`. Wszystkie mają pełne polskie znaki (`latin-ext`).

| Wariant | Nagłówki | Tekst | Charakter |
|---|---|---|---|
| **A, rekomendowany** | Barlow Semi Condensed 600/700 | IBM Plex Sans 400/500/600 | Techniczny, jak tabliczka znamionowa urządzenia |
| B | Sofia Sans Semi Condensed 700/800 | Sofia Sans 400/500/600 | Cieplejszy, bardziej „rodzinny” |
| C | Archivo, szerokość 80% | Archivo, szerokość 100% | Jedna rodzina zmienna, najlżejsza do wczytania |

Dlaczego A:

- Zwężony krój rozwiązuje realny problem. Polskie nagłówki są długie („Serwis kotłów kondensacyjnych”, „Montaż i wymiana kotła gazowego”) i w Interze H1 zajmuje 4 wiersze.
- Barlow nawiązuje do oznaczeń technicznych i tablic, co pasuje do serwisu urządzeń.
- IBM Plex Sans ma czytelne cyfry tabelaryczne (telefon, ceny, kody) i wyraźne polskie ogonki.
- IBM Plex Mono 500 tylko dla kodów błędów (`F28`, `EA`). To kody z wyświetlacza kotła, więc krój o stałej szerokości niesie tu informację.

Wczytywanie: pliki woff2 z `public/fonts` (definicje w `src/app/fonts.css`), podzbiory latin i latin-ext, `font-display: swap`, tylko użyte wagi. IBM Plex Mono wczytywać wyłącznie w `/bledy-kotlow/`.

Skala (px):

| Rola | Komputer | Telefon | Interlinia | Krój |
|---|---|---|---|---|
| H1 | 56 | 36 | 1,05 | Barlow SC 700 |
| H2 | 36 | 28 | 1,15 | Barlow SC 700 |
| H3 | 24 | 22 | 1,2 | Barlow SC 600 |
| Lead | 20 | 18 | 1,5 | Plex Sans 400 |
| Tekst | 17 | 16 | 1,6 | Plex Sans 400 |
| Drobny | 14 | 14 | 1,5 | Plex Sans 400/500 |
| Telefon (CTA) | 30 | 26 | 1 | Barlow SC 700, cyfry tabelaryczne |

Szerokość akapitu: do 68 znaków (`max-w-[68ch]`). Bez wersalików w etykietach.

### Kolor

| Nazwa | Hex | Zastosowanie |
|---|---|---|
| Granat | `#12245B` | Tło hero i nagłówki, linki |
| Granat ciemny | `#0B1738` | Stopka, tekst na żółtym |
| Żółty gazowy | `#FFC61A` | Wyłącznie przycisk telefonu i jedna plakietka na ekran |
| Żółty ciemny | `#E9B000` | Stan po najechaniu |
| Tło | `#FFFFFF` | |
| Tło alternatywne | `#F2F4F8` | Co druga sekcja zamiast gradientu |
| Tekst | `#131A2B` | Zastępuje czystą czerń |
| Tekst drugorzędny | `#4B5672` | |
| Linia | `#D7DCE7` | Obramowania kart i tabel |
| Awaria | `#C2301C` | Tylko komunikaty o awarii i zagrożeniu (np. zapach gazu) |

Kontrast: granat ciemny na żółtym ok. 11:1, biały na granacie ok. 14:1, tekst drugorzędny na białym ok. 7:1. Do ponownego sprawdzenia narzędziem przy wdrożeniu.

Żółty nie jest tłem sekcji. Im rzadziej się pojawia, tym mocniej działa przycisk telefonu.

### Kształt, głębia, ruch

- **Zaokrąglenia:** 4 px dla przycisków, pól i plakietek, 8 px dla kart i zdjęć. Bez pigułek.
- **Cienie:** karty mają obramowanie 1 px zamiast cienia. Jeden cień (`0 2px 12px rgb(11 23 56 / 0.12)`) dla przyklejonego nagłówka i paska telefonu na telefonie.
- **Odstępy:** skala 4, 8, 16, 24, 32, 48, 64, 96 px. Sekcje 96 px na komputerze, 64 px na telefonie.
- **Ruch:** usunąć `ribbonAnimation`, `float`, `pulse`, `gradientAnimation`, `slideIn*` i skalowanie przy najechaniu. Zostaje zmiana koloru przycisków (150 ms) i rozwijanie odpowiedzi FAQ. Respektować `prefers-reduced-motion`.
- **Fokus:** widoczny obrys 2 px granatem (na granatowym tle żółtym), odsunięty o 2 px.

### Komponenty

**Nagłówek.** Stała wysokość (72 px, telefon 60 px), bez zmiany rozmiaru przy przewijaniu. Logo, nawigacja (Usługi, Marki, Błędy kotłów, Poradnik, O firmie, Kontakt), numer telefonu jako przycisk. „Usługi” i „Marki” rozwijane. Wszystkie pozycje to zwykłe linki `<a>` do podstron, nie przyciski z JavaScriptem.

**„Od 1994” zamiast wstążki.** Płaska plakietka przy logo: „Serwis od 1994 roku”. Liczba lat wyliczana z roku założenia, nie wpisywana ręcznie.

**Hero strony głównej i podstron usług.**

```
┌───────────────────────────────────────────────┬──────────────────┐
│ [Ambasador marki Beretta]                     │                  │
│ H1: usługa + miasto (2 wiersze)               │  prawdziwe       │
│ Jedno zdanie: co, dla jakich marek, gdzie     │  zdjęcie         │
│ [ 601 418 645 ]   Zobacz cennik               │  z pracy         │
│ Pon–pt 8:00–18:00 · dojazd do 60 km           │                  │
└───────────────────────────────────────────────┴──────────────────┘
```

Bez listy czterech punktów. Fakty z listy przechodzą do paska zaufania pod hero.

**Pasek zaufania.** Jeden wiersz pod hero: od 1994 roku, Ambasador Beretta, ocena Google z liczbą opinii i linkiem do profilu, 6 marek. Zwykły tekst z ikonami, bez wielkich liczb.

**Lista usług.** Wiersze zamiast identycznych kart: nazwa usługi (link do podstrony), jedno zdanie, cena „od”, jeśli właściciel ją poda. Na telefonie ułożone pionowo.

**Blok odpowiedzi.** Pierwszy akapit pod każdym nagłówkiem H2 w formie pytania: 40–60 słów bezpośredniej odpowiedzi, wyróżniony lewą linią 3 px w kolorze granatu. Ten sam blok służy cytowaniu przez wyszukiwarki AI.

**Tabela cen i zakresu.** Prawdziwa tabela HTML (`<table>`), linie poziome, bez pasków zebry.

**Kod błędu.** Kod w IBM Plex Mono na ciemnym granacie żółtymi znakami, obok marka, znaczenie, „co możesz sprawdzić sam” i „kiedy dzwonić”.

**Autor i weryfikacja.** Na podstronach usług i w poradniku: zdjęcie Wojciecha Podporskiego, nazwisko, „Ambasador Beretta, serwisant od 1994 roku”, data aktualizacji.

**Opinie.** Trzy do sześciu opinii wyrenderowanych w HTML jako statyczna siatka, z linkiem do profilu Google. Karuzela Shapo do usunięcia albo doczytywana dopiero po przewinięciu.

**Mapa.** Statyczny obraz obszaru działania z listą miejscowości. Leaflet doczytywany dopiero po kliknięciu „Pokaż mapę”.

**Pasek telefonu na telefonie.** Przyklejony do dołu ekranu: „Zadzwoń 601 418 645”, wysokość 56 px. Znika, gdy widoczny jest przycisk telefonu w hero.

**Stopka.** Granat ciemny. Pełne dane firmy (nazwa, NIP, adres lub obszar działania, telefon, e-mail, godziny), linki do wszystkich usług, marek i miejscowości, rok wyliczany automatycznie.

### Zdjęcia

Potrzebne od właściciela, najlepiej jedna sesja przy pracy:

- Wojciech Podporski przy kotle (hero strony głównej i „O firmie”),
- zbliżenia pracy: analizator spalin, czyszczenie wymiennika, pomiar szczelności,
- samochód serwisowy,
- statuetki i certyfikaty (jest już `statuetka-beretta.jpg`),
- po jednym zdjęciu kotła każdej z sześciu marek z realizacji.

Format: WebP lub AVIF, kilka szerokości (480, 800, 1200, 1600), `width` i `height` w znaczniku, zdjęcie hero z `fetchpriority="high"`. Eksport statyczny nie optymalizuje obrazów, więc rozmiary trzeba przygotować przy budowaniu.

Obraz podglądu dla mediów społecznościowych: osobny plik JPG 1200×630 z logo, nazwą usługi i telefonem. Obecnie wskazane jest kwadratowe logo WebP.

### Tekst w interfejsie

- Przyciski mówią, co się stanie: „Zadzwoń 601 418 645”, „Zobacz cennik przeglądu”, „Sprawdź kod błędu”.
- Bez superlatyw bez pokrycia („prestiżowy”, „najwyższe standardy”, „tysiące zadowolonych klientów”). Zamiast nich liczby i fakty, które da się sprawdzić.
- Jedna wersja każdego faktu na całej stronie: godziny, czas dojazdu, liczba lat, liczba opinii. Wartości trzymane w jednym pliku danych.
