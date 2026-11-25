# Audyt wizualny: POL-GAZ Szczecin (build lokalny, localhost:3977)

Wynik: **82/100**. Zrodlo: zrzuty ekranu i pomiary Playwright (Chromium). Wszystkie zrzuty w `screenshots/`.

## Co dziala
- Mobile 390x844: H1 i zolty przycisk telefonu widoczne bez przewijania na wszystkich 8 stronach. Dla `/` H1 ma y=147-223 px, CTA y=379-433 px (fold = 844). Zrzut: `home-mobile-fold.png`. Pozostale strony: H1 do y=288 px, CTA wyzej niz 480 px.
- Brak poziomego przewijania: scrollWidth = innerWidth dla 390 px i 320 px na wszystkich 8 stronach, rowniez z otwartym menu (320 px). Zrzut: `home-320-fold.png`, `home-320-menu.png`.
- Kontrast na granacie (tlo rgb(18,36,91)): H1 biale, akapit rgb(213,220,240), godziny 14 px w tym samym kolorze. Na zrzutach czytelne; wysoki kontrast.
- Dlugi H1 `Obszar dzialania: Police, Goleniow, Stargard, Gryfino i okolice` lamie sie na 4 liniach bez ucinania ("Stargard," sam w linii). Czytelny. Zrzut: `obszar-mobile-fold.png`.
- Tabela dojazdu na `/obszar-dzialania/`: 350 px w kontenerze 350 px, 3 kolumny, bez przewijania, czytelna. Zrzut: `obszar-mobile-table.png`.
- Wyszukiwarka kodow: pole 48 px wysokosci, font 16 px (brak zoomu iOS), z etykieta. Wpisanie "2951" daje "Znaleziono: 1" (Junkers 2951). `/bledy-kotlow/?q=2951` wstepnie wypelnia pole wartoscia 2951 i filtruje identycznie. Zrzuty: `bledy-mobile-filter-2951.png`, `bledy-mobile-q2951.png`.
- Opinie: widzet Shapo laduje sie po przewinieciu i renderuje (iframe 330 px, gwiazdki, tekst opinii). Zrzut: `home-mobile-reviews-12s.png`.
- Bledy konsoli i nieudane zadania: brak (0) na wszystkich 8 stronach, mobile i desktop, oraz na `/bledy-kotlow/` po filtrowaniu.
- Dolny pasek "Zadzwon 601 418 645": 56 px, zolty, na calej szerokosci; stopka ma 96 px dolnego paddingu, wiec nie zaslania copyrightu. Zrzut: `home-mobile-bottom.png`.
- Bez JS: `/` i `/bledy-kotlow/` wygladaja identycznie na pierwszym ekranie (menu to `<details>`). Zrzuty: `home-mobile-nojs-fold.png`, `bledy-mobile-nojs-fold.png`.

## Problemy

### Wysoki
**H-1. Ostatnia pozycja menu mobilnego ("Kontakt") jest ukryta pod dolnym paskiem telefonu.** Panel `nav` ma max-height 784 px (od y=60 do 844), czyli siega pod pasek (788-844). Po przewinieciu panelu do konca ostatnia widoczna pozycja to "O firmie", a "Kontakt" nie da sie dotknac (pomiar: scrollHeight 820, clientHeight 783; zrzut `home-mobile-menu-scrolled.png`). Na ekranie 360x640 panel ma scrollHeight 820 vs clientHeight 579, wiec problem jest wiekszy. Poprawka: `max-height: calc(100dvh - 60px - 56px)` albo `padding-bottom` >= 72 px w panelu; dodatkowo przycisk "Zadzwon" na gorze menu.

### Sredni
**M-1. Naglowek mobilny nie pokazuje numeru telefonu ani nazwy firmy** (tylko male logo 40x40 i hamburger). Telefon jest w hero i na dolnym pasku, wiec konwersja nie jest zagrozona, ale nazwa "POL-GAZ Szczecin" jest na pierwszym ekranie tylko w logo. Zrzut: `home-mobile-fold.png`. Poprawka: obok logo dodac tekst "POL-GAZ Szczecin" (desktop go ma).

**M-2. Male cele dotykowe w tresci i stopce (pomiar, minimum 44 px).** Chipy kodow na `/bledy-kotlow/` maja 36 px wysokosci (np. Junkers 2951 125x36), linki w stopce 18 px wysokosci (np. "Serwis Junkers" 95x18, "Kontakt" 49x18, "Polityka prywatnosci" 130x18), linki "O firmie" 58x26, "Serwis kotlow Beretta" 161x26, "Obszar dzialania i dojazd" 182x20, linki pelnych tytulow kodow w liscie 20 px, telefon w stopce 122x29, email 141x18. Poprawka: `py-3`/`min-h-[44px]` dla linkow w stopce i chipow oraz `inline-flex items-center`.

**M-3. Pusty obszar 280 px w sekcji opinii bez JS i przed zaladowaniem.** Z HTML: `<div class="mt-8 min-h-[280px]"><div id="shapo-widget-..."></div></div>`. Bez JS pod naglowkiem "Opinie klientow z Google" zostaje biala luka. W trakcie ladowania (4 s po przewinieciu) tez bylo bialo (`home-mobile-reviews.png`); tresc pojawila sie dopiero po kilku sekundach (`home-mobile-reviews-12s.png`). Poprawka: ukryc sekcje bez JS (`<noscript>` + klasa ustawiana skryptem) lub dac zastepcze zdanie z linkiem do profilu Google; skrocic min-height do realnej wysokosci iframe (ok. 330 px na mobile, wiec obecna luka przeskakuje o 50 px, CLS).

### Niski
**L-1. Pasek marek na stronie glownej** jest czytelny (biale kafelki z logo Beretta, Junkers, Buderus), ale na mobile ucina go dolny pasek telefonu na pierwszym ekranie (tylko gorna polowa logo, `home-mobile-fold.png`), wiec wyglada na blad. Animacja `pasek-marek` trwa 36 s, nieskonczona, na elemencie `.pasek-marek-tor`. To ruch dekoracyjny, wiec narusza zasade z DESIGN.md ("bez animacji ozdobnych"); jest wolna i nie rozprasza, ale logo Beretta jest ucinane po lewej na desktopie (`home-desktop-fold.png`). Poprawka: statyczny rzad logo (zawijany) lub co najmniej `prefers-reduced-motion: reduce` z `animation: none`; potwierdzenia, ze regula reduced-motion istnieje, nie sprawdzalem.

**L-2. Panel menu nie ma przycisku telefonu**, a naglowek tez nie, dlatego telefon na mobile to tylko hero i dolny pasek. Zrzut: `home-mobile-menu.png`.

**L-3. Dolny pasek ma cien** (`0 -2px 12px rgba(11,23,56,.18)`), zgodny z DESIGN.md (jeden poziom cienia dla elementow przyklejonych). Na zrzutach tresc jest przycieta pod paskiem, co jest normalne dla fixed.

**L-4. Pomiar na 320 px:** elementy zamknietego menu (`NAV.absolute`) maja prawa krawedz 349 px, ale sa ukryte w zamknietym `<details>` i nie powoduja przewijania (scrollWidth 320). Informacyjnie.

**L-5. Rozmiar tekstu bazowego** 16 px; opisy pod godzinami w hero 14 px. Akceptowalne, ale na granacie 14 px warto podniesc do 16.

## Zgodnosc z DESIGN.md
- Widocznych gradientow nie znalazlem: pomiar `background-image` nie zwrocil zadnego gradientu na stronie glownej (jedyny wynik dla animacji: `pasek-marek`). Gradient przy dolnym pasku to cien, nie gradient tla.
- Animacje: tylko `pasek-marek` (patrz L-1).

## Nie sprawdzono
- Zrzuty desktop pozostalych stron wykonane (`*-desktop-fold.png`), ale dokladnie obejrzalem tylko `home-desktop-fold.png`. Zrzuty `naprawa`, `beretta`, `junkers2951`, `ofirmie`, `kontakt` zmierzylem (H1/CTA/overflow), nie ogladalem wizualnie.
- `home-mobile-nojs-reviews.png` i `bledy-mobile-nojs-filter.png` wykonane, nieobejrzane; wniosek o braku JS w sekcji opinii pochodzi z HTML. Pole wyszukiwania jest w HTML bez `disabled`, ale jego zachowanie bez JS nie bylo sprawdzane.
- Kontrast liczony tylko na podstawie kolorow i wygladu zrzutow, bez narzedzia WCAG.
