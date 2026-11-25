# Plan działań: polgaz-szczecin.pl

Stan na 24.11.2026. Szczegóły i dowody: `FULL-AUDIT-REPORT.md` i `findings/`.

## Krytyczne: przed wdrożeniem

| # | Co | Gdzie | Kto | Jak sprawdzić |
|---|---|---|---|---|
| 1 | Ustalić, kto kontroluje `pol-gaz.szczecin.pl`, i przekierować ją 301 na `polgaz-szczecin.pl` albo wyłączyć | hosting starej domeny | właściciel | stara domena zwraca 301 |
| 2 | Aktualny certyfikat Beretta i dokumenty autoryzacji pozostałych marek; do tego czasu nie podpisywać zdjęcia jako dowodu autoryzacji sześciu marek | `src/app/page.tsx`, `src/app/o-firmie/page.tsx`, `PasekZaufania` w `src/components/ui.tsx` | właściciel, potem kod | podpis zdjęcia zgadza się z tym, co na nim widać |
| 3 | Kody błędów: przepisać polecenia do klienta dotyczące wnętrza kotła na opis czynności serwisanta; nie pokazywać surowych tekstów typu „Patrz usterki blokujące…” | `src/data/bledy.json`, `src/app/bledy-kotlow/[slug]/page.tsx` | kod, przegląd właściciela | brak trybu rozkazującego przy czynnościach wewnątrz kotła |
| 4 | Kod A4: po krokach dopisać, że przy powtórce nie uruchamiać urządzenia i wezwać kominiarza oraz serwis | `kodyRozszerzone` w `src/data/bledy.ts` | kod | strona A4 nie kończy się na „Uruchom ponownie” |
| 5 | Rozstrzygnąć „do 60 km” wobec Chojny (62 km) i Myśliborza (68 km) | `src/data/firma.ts` | właściciel | promień i tabela są zgodne |
| 6 | Wyeksportować raport linków z Search Console i porównać z mapą nowych adresów | Search Console | Ty | każdy adres z linkiem zewnętrznym zwraca 200 albo 301 |

## Wysokie: w pierwszym tygodniu

| # | Co | Gdzie |
|---|---|---|
| 7 | Menu na telefonie: odsłonić pozycję „Kontakt” (wysokość panelu minus dolny pasek) | `src/components/Header.tsx` |
| 8 | Zarezerwować 330 px (telefon) i 362 px (komputer) na widżet opinii | `src/components/Opinie.tsx` |
| 9 | Węzeł `WebSite` w grafie każdej strony | `src/lib/seo.ts` i strony |
| 10 | Zdjąć plakietki „Autoryzowany serwis 6 marek” i „Ambasador Beretta” ze strony pomp ciepła | `src/app/[slug]/page.tsx` |
| 11 | Ujednolicić serie Beretty na stronie głównej i stronie marki; usunąć wzmianki o systemach solarnych | `oMarce` w `src/data/marki.ts` |
| 12 | Pierwszy akapit stron kodów: 40–60 słów z nazwą firmy i miastem | `kodyRozszerzone` w `src/data/bledy.ts` |
| 13 | Profil Google: przejąć lub założyć, wpisać adres do `firma.profilGoogle` | właściciel, `src/data/firma.ts` |
| 14 | Przekierowanie `www` na adres główny w Vercel | panel Vercel |
| 15 | Poprawić wpis pkt.pl 1815401, zgłosić błędny 747709, poprosić Berettę o aktualizację rekordu w wyszukiwarce instalatorów | właściciel |

## Średnie: w pierwszym miesiącu

| # | Co | Gdzie |
|---|---|---|
| 16 | Ceny „od … zł” w tabeli na stronach usług | `cena` w `src/data/uslugi.ts`, dane od właściciela |
| 17 | `fetchPriority="high"` na zdjęciu hero, potem ponowny pomiar | `src/app/page.tsx` |
| 18 | Strona 404: jeden znacznik robots i własny tytuł | `src/app/not-found.tsx` |
| 19 | Ostrzeżenie o zapachu gazu nad listą porad na stronie awarii | `src/app/[slug]/page.tsx` lub dane usługi |
| 20 | Porady F22, 224 i F0 ograniczyć do listy bezpiecznych czynności z `CLAUDE.md` albo potwierdzić u właściciela | `src/data/bledy.ts` |
| 21 | Bloki odpowiedzi poniżej 40 słów (Vaillant, Unical, Junkers, Saunier Duval, Buderus, strona główna) | `src/data/marki.ts`, `src/app/page.tsx` |
| 22 | Własna treść stron Saunier Duval i Unical (92–96% wspólnego tekstu) | `src/data/marki.ts`, fakty od właściciela |
| 23 | Okruszki w danych strukturalnych zgodne z widocznymi; pełniejsze `AboutPage` i `ContactPage` | `src/lib/seo.ts` |
| 24 | Cele dotykowe co najmniej 44 px: chipy kodów, linki w stopce | `src/app/globals.css`, `src/components/Footer.tsx` |
| 25 | Pasek logotypów: statyczny rząd zamiast animacji | `src/app/page.tsx`, `src/app/globals.css` |
| 26 | Opinie w HTML (3–5 cytatów) z linkiem do profilu Google | `src/components/Opinie.tsx`, po punkcie 13 |
| 27 | Sprawdzić ręcznie w Google wyniki dla „serwis pieców gazowych Szczecin” i „naprawa pieców gazowych Szczecin”; przy 7 wspólnych z 10 połączyć cel w jedną stronę | decyzja |

## Niskie: do kolejki

- Data aktualizacji osobna dla każdej strony zamiast jednej stałej.
- `TechArticle` na stronach kodów, `ItemList` na indeksie, katalog usług na stronie głównej.
- Wstępne ładowanie czcionek nagłówków.
- `llms.txt` według szkicu z `findings/geo.md`.
- Strona Goleniowa, gdy właściciel dostarczy unikalną treść.
- Strony kodów Buderus (1023, 2951, 2961) i Junkers EA, E9, H6 po przeglądzie właściciela.

## Pomiar po wdrożeniu

| Kiedy | Wskaźnik | Sygnał porażki |
|---|---|---|
| 2 tygodnie | 29 adresów zaindeksowanych w Search Console | mniej niż 20 |
| 4 tygodnie | CLS i LCP strony głównej w danych od użytkowników | CLS powyżej 0,1 albo LCP powyżej 2,5 s |
| 6–10 tygodni | wyświetlenia stron marek i usług na własne frazy; Beretta w pierwszej dziesiątce | brak wyświetleń strony na jej frazę |
| stale | pozycja `/bledy-kotlow/` (dziś 7,3) i kliknięcia na „2951 junkers” | spadek pozycji lub kliknięć po pojawieniu się stron kodów |
