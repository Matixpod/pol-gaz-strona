# Wydajność / Core Web Vitals (audyt laboratoryjny)

Data: 2026-11-24. Cel: build produkcyjny `next start` na http://localhost:3977 (strona niewdrożona).
Narzędzia: Lighthouse 13.6.0 (CLI, symulowane throttling: mobile = Moto G Power / wolne 4G, preset desktop) oraz Playwright (Pixel 7 i desktop 1350 px, własny PerformanceObserver).

**To są wyłącznie dane laboratoryjne.** Nowa wersja nie ma danych terenowych (CrUX), więc żaden z poniższych wyników nie jest wynikiem Core Web Vitals w rozumieniu Google (75. percentyl odwiedzin). TBT jest tylko przybliżeniem INP, nie jego pomiarem.

## Wynik: 90/100 (ocena laboratoryjna, nie terenowa)

Strony szablonowe wypadają bardzo dobrze (Lighthouse 100). Obniżenie wynika z dwóch zmierzonych problemów na stronie głównej: LCP w symulacji mobilnej oraz CLS po załadowaniu widżetu Shapo.

## Zmierzone wartości (Lighthouse, jedno uruchomienie na stronę)

| Strona | Profil | Wynik | FCP | LCP | CLS | TBT | SI | Transfer | JS (transfer) | Żądania | DOM | Element LCP |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| / | mobile | 94 (3 powtórzenia: 94-96) | 0,9 s | 3,1 s (2,8-3,1) | 0 | 0 ms | 0,9 s | 409 KB | 117 KB | 36 | 432 | img statuetka-beretta |
| /naprawa-piecow-gazowych/ | mobile | 100 | 0,8 s | 0,8 s | 0 | 0 ms | 0,8 s | 302 KB | 117 KB | 21 | 316 | p.lead (tekst) |
| /serwis-beretta/ | mobile | 100 | 0,8 s | 0,8 s | 0 | 10 ms | 0,8 s | 302 KB | 117 KB | 22 | 261 | p.lead (tekst) |
| /bledy-kotlow/ | mobile | 100 | 0,9 s | 0,9 s | 0 | 0 ms | 0,9 s | 316 KB | 119 KB | 21 | 1365 | p.odpowiedz (tekst) |
| /bledy-kotlow/junkers-2951/ | mobile | 100 | 0,8 s | 0,8 s | 0,021 | 10 ms | 0,8 s | 304 KB | 119 KB | 22 | 243 | p.odpowiedz (tekst) |
| / | desktop | 100 | 0,2 s | 0,6 s | 0,006 | 0 ms | 0,3 s | 372 KB | 117 KB | 31 | 432 | img statuetka-beretta |
| /bledy-kotlow/ | desktop | 100 | 0,2 s | 0,2 s | 0 | 0 ms | 0,2 s | 400 KB | 119 KB | 34 | 1365 | p.odpowiedz (tekst) |

Uwagi do tabeli: Lighthouse nie przewija strony, więc widżet Shapo nie załadował się w tych przebiegach (CLS widżetu mierzono osobno, niżej). Transfer na desktopie jest wyższy, bo w widoku są dociągane obrazy i prefetch linków (żądania `_rsc`). Lighthouse nie zgłosił ostrzeżeń uruchomienia.

## Pomiar dodatkowy: Playwright (przewijanie strony głównej, widżet Shapo)

| Profil | CLS po przewinięciu i załadowaniu Shapo | Wysokość kontenera `#opinie` | Przesunięcia |
|---|---|---|---|
| mobile (Pixel 7) | 0,103 w pierwszym przebiegu, 0,197 w drugim (przesunięcie 0,093 zarejestrowane dwukrotnie) | 330 px (rezerwacja `min-h-[280px]`) | sekcja po opiniach, ok. 5,5 s po wejściu |
| desktop | 0,134 | 362 px | sekcja po opiniach, ok. 3,9 s |

CLS przed przewinięciem wynosił 0. Przebiegi nie były identyczne (0,103 vs 0,197), więc rząd wielkości jest pewny, dokładna liczba nie. Przesunięcie jest realne dla użytkownika, który przewinie do opinii.

Filtr na `/bledy-kotlow/` (Pixel 7, CPU spowolnione 4x, pisanie w polu i zmiana marki klawiaturą): żadna interakcja nie przekroczyła 32 ms (zdarzenia keydown/click), czyli daleko poniżej 200 ms. DOM spada z 1406 do 482 elementów po filtrowaniu. To pomiar labowy, nie INP terenowy.

## Co jest ładowane i jak

- Preload w `<head>` (strona główna): logo `pol-gaz-logo.WebP` (48/96 px) oraz obraz hero `statuetka-beretta.jpg` (srcset 640-3840 w). Brak `fetchpriority="high"` na obrazie i preloadzie (audyt `lcp-discovery`: priorityHinted = false). Brak preloadu czcionek.
- Blokujące renderowanie: jeden plik CSS `/_next/static/css/3a22f16595138c4f.css` (9,8 KB po kompresji, 48 KB surowo), szacowana strata 50-150 ms zależnie od strony. Skrypty mają `async`.
- Łańcuch zależności: HTML -> CSS -> 7 plików woff2 (łącznie 131 KB), obserwowane 184 ms. Czcionki z `font-display: swap`.
- Obrazy przez `/_next/image/`: obsługiwane jako WebP (hero 750 w: 22,7 KB z oryginału JPEG 187 KB; logo 2,8 KB). Loga marek PNG -> WebP 256 w i 384 w pobierane dwukrotnie w wariantach rozmiaru (łącznie ok. 60 KB). Audyt `image-delivery` bez uwag.
- JS: 117 KB transferu (React/Next, ok. 350 KB surowo). `legacy-javascript`: szac. 12 KiB oszczędności w chunku `255-*.js` (polyfille z Next, poza kontrolą kodu aplikacji).
- Nagłówki cache: `/_next/static/*` `public, max-age=31536000, immutable` (dobrze); HTML `s-maxage=31536000` z `x-nextjs-cache: HIT` (prerender); `/_next/image/` `public, max-age=60, must-revalidate`; pliki z `/public` (np. `/images/statuetka-beretta.jpg`) `public, max-age=0`.
- Kompresja: HTML po kompresji ma 17,9 KB (strona główna) i 27,8 KB (`/bledy-kotlow/`; surowo 172,8 KB, w tym ok. 75 KB ładunku RSC).
- Prefetch: na stronie głównej Next prefetchuje strony marek (`?_rsc=`, ok. 7,5 KB każda).

## Ustalenia

### Wysokie

1. **CLS po załadowaniu widżetu Shapo (`src/components/Opinie.tsx`).** Zmierzono 0,103-0,197 (mobile) i 0,134 (desktop), czyli powyżej progu 0,1 dla przeglądarki użytkownika, który przewinie do opinii. Rezerwa `min-h-[280px]` jest za niska: widżet ma 330 px (mobile) i 362 px (desktop). Naprawa: ustawić rezerwę na zmierzoną wysokość na każdej szerokości (np. `min-h-[340px] md:min-h-[370px]`), po ponownym zmierzeniu na docelowej wersji widżetu; opcjonalnie przypiąć kontener `overflow-hidden`. Sprawdzić też po wdrożeniu, bo Shapo może zmienić wysokość zależnie od liczby opinii.

### Średnie

2. **LCP strony głównej na mobile: 2,8-3,1 s w symulacji (próg dobrego wyniku 2,5 s).** Elementem LCP jest obraz hero (`src/app/page.tsx`, `<Image priority ... />`), położony w drugiej kolumnie, na mobile pod tekstem (górna krawędź ok. 525 px). Obserwowany (niesymulowany) LCP to 197 ms, więc różnica pochodzi z symulowanego wolnego łącza; podział symulowany to głównie czas ładowania obrazu. Na pozostałych stronach LCP to tekst, 0,8-0,9 s. Naprawa: dodać `fetchPriority="high"` do `<Image>` hero (preload i `<img>` go nie mają) oraz zawęzić `sizes`/zmniejszyć obraz; obraz 750 w ma już tylko 22,7 KB, więc dalsze zyski są małe. Ponownie zmierzyć po zmianie; nie obiecuję konkretnej liczby.
3. **7 plików czcionek (131 KB) na każdej stronie, bez preloadu, wykrywane dopiero po CSS** (`src/app/layout.tsx`: Barlow Semi Condensed 600/700, IBM Plex Sans 400/500/600, IBM Plex Mono 500, podzbiory latin i latin-ext). Wpływa na CLS przez podmianę czcionki (zob. 4). Naprawa: usunąć niepotrzebne grubości lub podzbiór `latin-ext` tam, gdzie polskie znaki są pokryte (latin-ext jest potrzebny dla ą, ę, ł itd., więc sprawdzić przed usunięciem), rozważyć `adjustFontFallback` (domyślnie włączone w next/font) i jedną rodzinę zmienną.

### Niskie

4. **CLS 0,021 na `/bledy-kotlow/junkers-2951/`**: nagłówek h2 "Co oznacza błąd 2951 w kotle Junkers?" przesuwa się przy podmianie czcionek (Lighthouse wskazuje cause "Web font"). Wartość poniżej progu 0,1. Pokrywa się z ustaleniem 3.
5. **DOM 1365 elementów na `/bledy-kotlow/`** (próg ostrożności 1500 z wytycznych). Obecnie bez wpływu zmierzonego (TBT 0 ms, interakcje filtra do 32 ms przy CPU 4x). Nie zmieniać; pełna lista kodów musi zostać na tym adresie (zasada projektu nr 5). Monitorować przy dodawaniu kodów.
6. **Cache obrazów i plików publicznych**: `/_next/image/` ma `max-age=60`, a `/images/*` `max-age=0`. Na Vercelu obrazy optymalizowane dostają długi cache na krawędzi, a `minimumCacheTTL` można podnieść w `next.config.ts` (obrazy rzadko się zmieniają). Dotyczy tylko powracających odwiedzin.
7. **Ok. 12 KiB starszego JS (polyfille)** w chunku frameworka; bez działania po stronie projektu.

### Bez uwag
TBT 0-10 ms na wszystkich stronach, brak ruchomych elementów powodujących przesunięcia (animacja paska logotypów używa `transform`), brak zasobów zewnętrznych przed przewinięciem do opinii, kompresja i cache statyków poprawne.

## Czego NIE zmierzono

- Danych terenowych (CrUX/PSI field): brak dla nowej wersji, brak poświadczeń Google API.
- Pozostałych podstron: `/serwis-piecow-gazowych/` i innych stron usług/marek/kodów poza pięcioma wymienionymi; Lighthouse desktop tylko dla `/` i `/bledy-kotlow/`.
- Pojedynczy przebieg Lighthouse na stronę (poza stroną główną mobile, 4 przebiegi: 94, 94, 96, 96). Wariancja pozostałych stron nie jest znana.
- Widżet Shapo w Lighthouse (nie przewija strony); jego CLS zmierzono tylko Playwrightem, a wysokość zależy od treści zwracanej przez Shapo w momencie pomiaru.
- Prawdziwe urządzenia, sieć komórkowa, INP terenowy.

## Wartości, które będą inne na Vercelu

- TTFB i opóźnienie dokumentu (localhost: ok. 0-4 ms): na Vercelu strony statyczne z CDN dodadzą realny RTT; wartości FCP/LCP wzrosną.
- Rozmiary transferu HTML/JS/CSS: Vercel używa Brotli (tu gzip z Next), więc bajty będą mniejsze.
- Protokół: tu HTTP/1.1, na Vercelu HTTP/2 (mniejszy koszt wielu żądań, w tym 7 czcionek). Audyt `modern-http` zniknie.
- Nagłówki cache: HTML i `/_next/image/` na Vercelu mają własne reguły CDN; `/public` i obrazy optymalizowane inaczej niż tu.
- Optymalizator obrazów (`/_next/image/`) na Vercelu działa na krawędzi i cache'uje wyniki; pierwsze żądanie może być wolniejsze (zimny cache).
- CLS Shapo zależy od sieci do `cdn.shapo.io`/`app.shapo.io`; czas doczytania widżetu będzie inny.
- Wyniki Lighthouse (symulacja) zależą od mocy tej maszyny; PSI na serwerach Google da inne liczby.
