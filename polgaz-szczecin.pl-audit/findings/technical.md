# Audyt techniczny SEO (przed wdrożeniem) – POL-GAZ Szczecin

Data: 2026-11-24. Cel: build produkcyjny Next.js 15 na http://localhost:3977 (29 adresów z `urls-local.txt`). Wszystko poniżej sprawdzone poleceniem curl/node na lokalnym buildzie, chyba że oznaczono „niezweryfikowane”.

## Wynik techniczny: 88/100

| Kategoria | Status |
|---|---|
| Crawlability (robots, sitemapa, 404) | PASS (1 uwaga) |
| Indexability (canonical, robots meta, duplikaty) | PASS (1 uwaga) |
| Security (nagłówki) | PASS z uwagami (HSTS doda Vercel) |
| Struktura URL i przekierowania | PASS (uwagi do migracji) |
| Mobile (viewport) | PASS |
| Renderowanie JS | PASS (treść w surowym HTML) |
| Dane strukturalne | PASS |
| Ryzyka case-sensitive hosta | PASS |

## Co działa

- 29/29 adresów zwraca 200; każdy ma jeden `<link rel="canonical">` wskazujący na siebie (domena produkcyjna, ze slashem), `robots: index, follow`, `lang="pl"`, `viewport`, dokładnie jeden H1.
- Tytuły 39–60 znaków, opisy 86–154 znaków; zero zduplikowanych tytułów i opisów (29 unikalnych).
- `sitemap.xml`: 29 `<loc>`, zbiór identyczny z listą 29 adresów (diff pusty), wszystkie ze slashem, zero URL-i spoza witryny; `/protokol/` celowo pominięty.
- `robots.txt`: `User-agent: *`, `Allow: /`, `Sitemap: https://polgaz-szczecin.pl/sitemap.xml` (poprawny, absolutny).
- Linki wewnętrzne: wszystkie unikalne `href` prowadzą do któregoś z 29 adresów (brak martwych, brak osieroconych). Każda podstrona ma co najmniej 3 linki przychodzące. Kotwice `/bledy-kotlow/#junkers|#buderus|#vaillant|#beretta` mają odpowiadające `id` na stronie (po 1). `#tresc` (skip link) istnieje.
- Obrazy: `/_next/image/?url=%2Fimages%2Fpol-gaz-logo.WebP` zwraca 200; wariant `.webp` małymi literami zwraca 400/404, więc wielkość liter jest zachowana wszędzie (`src/components/Header.tsx:23` używa `.WebP`, `public/images/pol-gaz-logo.WebP` istnieje, kopia `/protokol` odwołuje się do `pol-gaz-logo.WebP`). Na Vercelu będzie działać. Ikony, manifest i `/opengraph-image/` zwracają 200.
- Treść nie zależy od JS: strona główna ~790 słów, `/bledy-kotlow/` ~3850 słów, wszystkie 179 opisów kodów (sprawdzone dla każdego z `bledy.json`) są w surowym HTML. JS potrzebuje tylko wyszukiwarka kodów i widżet Shapo (ładowany po przewinięciu).
- Przekierowania slash: `/kontakt` -> 308 -> `/kontakt/`; `/bledy-kotlow/junkers-2951` -> 308 -> z slashem; `//kontakt/` -> 308 -> `/kontakt/`; `/index.html` -> 308 -> `/`. Brak łańcuchów (jeden skok).
- Prawdziwe 404: `/nie-ma/`, `/bledy-kotlow/junkers-9999/`, `/wp-admin/`, `/feed/`, `/bledy-kotlow/index.html` zwracają status 404.
- `/protokol` -> 308 -> `/protokol/` (200), `X-Robots-Tag: noindex, nofollow` także na `/protokol-app/index.html`.
- Nagłówki wysyłane: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: SAMEORIGIN`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`. Statyczne zasoby `_next/static`: `Cache-Control: public, max-age=31536000, immutable`.
- JSON-LD poprawnie się parsuje na wszystkich próbkowanych stronach (HVACBusiness, Person, WebSite/WebPage, Service, BreadcrumbList, ContactPage); brak `aggregateRating`, `HowTo`, `FAQPage`; brak odwołań do localhost.
- Brak hreflang (strona jednojęzyczna, poprawnie; delegacja do `seo-hreflang` niepotrzebna).
- Brak `noindex` na żadnej z 29 stron.

## Znaleziska

### Medium

**M1. Strona 404 ma dwa sprzeczne znaczniki robots**
- Dowód: `curl -s http://localhost:3977/nie-ma/ | grep 'meta name="robots"'` zwraca `noindex` oraz `index, follow`. Tytuł 404 to tytuł strony głównej.
- Skutek: Google przyjmie najbardziej restrykcyjny (noindex) i status 404 jest poprawny, więc ryzyko niskie, ale to niespójny sygnał.
- Poprawka: w `src/app/not-found.tsx` wyeksportować `metadata` z własnym `title` (np. „Nie ma takiej strony – POL-GAZ”) i `robots: { index: false, follow: true }`; sprawdzić, czy wpis `robots` z `src/app/layout.tsx:32` nie jest doklejany drugi raz.

**M2. Rozjazd między dokumentacją a adresem głównej strony usługowej**
- Dowód: `CLAUDE.md` wymienia `/serwis-piecow-gazowych/` (fraza z największą liczbą wyświetleń), a build ma `/naprawa-piecow-gazowych/` (`src/data/uslugi.ts:26`). `curl /serwis-piecow-gazowych/` zwraca 404 (bez slasha: 308 -> adres ze slashem -> 404). Tytuł strony: „Naprawa pieców gazowych Szczecin – kotły, piecyki | POL-GAZ”.
- Skutek: reguła „4 miejsca na frazę główną” nie dotyczy frazy „serwis pieców gazowych”; jeśli któryś stary adres z Hostingera lub link zewnętrzny wskazuje `/serwis-piecow-gazowych/`, dostanie 404.
- Poprawka: świadoma decyzja właściciela. Albo zmienić slug na `serwis-piecow-gazowych` (i zaktualizować `src/app/not-found.tsx`, linki), albo poprawić `CLAUDE.md`. Niezależnie od wyboru sprawdzić w Search Console listę wszystkich adresów z ruchem na starej stronie i dodać `redirects()` w `next.config.ts` dla każdego, który nie istnieje w nowym buildzie (niezweryfikowane: nie mam listy starych URL-i).

**M3. Migracja Hostinger -> Vercel: www bez przekierowania i brak weryfikacji domeny na produkcji**
- Dowód: podany przez Ciebie stan live (www zwraca 200 bez redirectu). Lokalnie nie da się tego zweryfikować (nagłówek `Host: www...` zwraca 200 bez przekierowania, bo `next.config.ts` nie ma reguły hosta).
- Skutek: ryzyko duplikacji apex/www; canonical na apex łagodzi, ale nie zastępuje 301.
- Poprawka: w Vercel dodać oba domeny (`polgaz-szczecin.pl` jako główna, `www` z przekierowaniem 308/301 na apex) albo reguła `redirects()` w `next.config.ts` z `has: [{ type: 'host', value: 'www.polgaz-szczecin.pl' }]`. Po wdrożeniu: sprawdzić `curl -sI https://www.polgaz-szczecin.pl/`, `http://` -> `https://` i HSTS (niezweryfikowane, wymaga produkcji).

### Low

**L1. Obrazy logotypów marek bez `sizes`**
- Dowód: w HTML `srcSet` ma 16 szerokości (16–3840w), a `src` to `...brands/beretta.png&w=3840&q=75`; brak atrybutu `sizes` (tylko `statuetka-beretta.jpg` i logo nagłówka mają sensowny zestaw). Odpowiedź obrazu jest mała (np. ~1,1 KB dla `beretta.png` w=3840), więc realny koszt niski, ale zbędne warianty w cache optymalizatora.
- Poprawka: dodać `sizes="96px"` (lub faktyczną szerokość) do `<Image>` logotypów marek (komponent renderujący `marki.ts`, ścieżki `images/brands/*`); lub `unoptimized` dla małych PNG.

**L2. Wszystkie `lastmod` identyczne**
- Dowód: każdy z 29 wpisów ma `<lastmod>2026-11-24</lastmod>` (`src/app/sitemap.ts` używa jednej stałej `dataAktualizacji`).
- Skutek: Google ignoruje niewiarygodne `lastmod`; nie szkodzi, ale nie pomaga.
- Poprawka: przy większej edycji dodać pole `zaktualizowano` per strona w `src/data/uslugi.ts`, `marki.ts`, `bledy.ts` i używać go w sitemapie.

**L3. Wyciek technologii i brak CSP**
- Dowód: nagłówek `X-Powered-By: Next.js` na każdej odpowiedzi; brak `Content-Security-Policy`. HSTS nie jest wysyłany lokalnie (dodaje Vercel na produkcji, niezweryfikowane).
- Poprawka: `poweredByHeader: false` w `next.config.ts`. CSP opcjonalnie (trzeba dopuścić `cdn.shapo.io` i inline skrypty JSON-LD).

**L4. Zachowanie wielkości liter w adresach (niezweryfikowane na Linuksie)**
- Dowód: lokalnie na Windowsie pierwsze żądanie `/SERWIS-JUNKERS/`, `/bledy-kotlow/Beretta-A01/` i `/Naprawa-Piecow-Gazowych/` zwróciło 200, kolejne 404. To prawdopodobnie artefakt systemu plików bez rozróżniania wielkości liter (pliki w `.next/server/app` są małymi literami). `dynamicParams = false` w `src/app/[slug]/page.tsx:12` i `src/app/bledy-kotlow/[slug]/page.tsx:9`.
- Poprawka: po wdrożeniu na Vercel (Linux) sprawdzić, że warianty z wielkimi literami dają 404 i nie ma duplikatów; canonical i tak jest zawsze małymi literami.

**L5. Parametry zapytania nie są ujednolicone**
- Dowód: `/kontakt/?utm=1` zwraca 200 z canonicalem na czysty adres. To poprawne zachowanie; odnotowane tylko jako informacja, bez działania.

## Ryzyka wdrożeniowe (Hostinger -> Vercel)

1. Na live zaindeksowane są tylko `/` i `/bledy-kotlow/`; pozostałe 27 adresów jest nowych. Po wdrożeniu zgłosić sitemapę w Search Console i użyć „Sprawdzenie adresu URL” dla `/`, `/bledy-kotlow/` i głównych stron usług.
2. `/bledy-kotlow/` musi zostać pod tym samym adresem ze slashem (jest) i zachować pełną listę 179 kodów (jest w surowym HTML).
3. `/protokol` działa przez rewrite i `localStorage` (klucz `formSuggestions`): produkcja musi być pod tą samą domeną (`polgaz-szczecin.pl`), inaczej właściciel straci zapisane podpowiedzi. Po wdrożeniu sprawdzić `curl -sI https://polgaz-szczecin.pl/protokol/` pod kątem `X-Robots-Tag: noindex, nofollow`.
4. Zmiana DNS: ustawić niski TTL przed przełączeniem, zachować pocztę `@wp.pl` (nie dotyczy DNS strony, ale sprawdzić rekordy MX jeśli domena ma własną pocztę; niezweryfikowane).
5. Folder nie jest jeszcze repozytorium z historią (brak commitów); przed wdrożeniem zrobić commit i sprawdzić, że `public/images/pol-gaz-logo.WebP` jest w repo z oryginalną wielkością liter (`git config core.ignorecase false` na Windowsie, bo Git domyślnie może zmienić wielkość liter przy zmianie nazwy).
6. Wszystkie canonicale, `og:url` i sitemapa wskazują już na `https://polgaz-szczecin.pl` (oczekiwane). Do czasu przełączenia DNS ten build nie może być indeksowany pod innym adresem (np. `*.vercel.app` preview): dodać `X-Robots-Tag: noindex` dla hostów `*.vercel.app` (Vercel robi to dla preview domyślnie, domenę produkcyjną `*.vercel.app` trzeba sprawdzić; niezweryfikowane).

## Otwarte TODO z kodu (wpływają na treść, nie na techniczne SEO)

`TODO(właściciel)` w: `src/data/firma.ts` (profil Google, Facebook, uprawnienia), `src/data/uslugi.ts` (cennik, pompy ciepła), `src/data/marki.ts` (listy modeli), `src/data/bledy.ts` (opisy przyczyn), `src/app/polityka-prywatnosci/page.tsx` (przegląd polityki), `src/components/Opinie.tsx`. Przed wdrożeniem upewnić się, że żaden komentarz TODO nie trafia do widocznego HTML (sprawdzone: `grep TODO` w 29 wynikowych stronach nie zwrócił trafień).
