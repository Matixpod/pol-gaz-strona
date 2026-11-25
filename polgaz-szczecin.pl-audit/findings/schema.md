# Audyt danych strukturalnych: POL-GAZ Szczecin (build lokalny, localhost:3977)

Data: 2026-11-24. Zakres: 29 adresów z `urls-local.txt`, kod: `src/lib/seo.ts`, `src/data/firma.ts`, `page.tsx` poszczególnych tras. Tylko odczyt.

## Wynik: 78 / 100

| Obszar | Ocena |
|---|---|
| Poprawność składni i typów | 95 |
| Kompletność wymaganych/zalecanych pól | 70 |
| Spójność ze stroną widoczną | 75 |
| Spójność grafu (referencje @id) | 65 |
| Wykorzystane możliwości (potwierdzone fakty) | 70 |

## Wykrycie

- Format: wyłącznie JSON-LD, jeden blok `<script type="application/ld+json">` na stronę (28 stron z danymi, 1 bez: `/polityka-prywatnosci/`). Brak Microdata/RDFa. Brak duplikatów bloków.
- Wszystkie 28 bloków parsują się poprawnie, `@context` = `https://schema.org`, wszystkie URL-e bezwzględne (`https://polgaz-szczecin.pl/...`, ze skośnikiem na końcu, zgodne z canonical).
- Zakazane typy: brak `aggregateRating`, `HowTo`, `FAQPage`. Zgodne z CLAUDE.md.

| Grupa stron | Węzły |
|---|---|
| `/` | HVACBusiness, Person, WebSite |
| 5 usług + 6 marek (11) | HVACBusiness, Person, WebPage, Service, BreadcrumbList |
| `/bledy-kotlow/` , `/obszar-dzialania/` | HVACBusiness, Person, WebPage, BreadcrumbList |
| 12 stron kodów | HVACBusiness, Person, WebPage, BreadcrumbList |
| `/o-firmie/` | HVACBusiness, Person, AboutPage, BreadcrumbList |
| `/kontakt/` | HVACBusiness, ContactPage, BreadcrumbList |
| `/polityka-prywatnosci/` | brak |

Uwaga: lista URL zawiera `/naprawa-piecow-gazowych/`, a `CLAUDE.md` i opis zadania mówią o `/serwis-piecow-gazowych/`. Slug w kodzie to `naprawa-piecow-gazowych` (`src/data/uslugi.ts:26`), więc to CLAUDE.md jest nieaktualny (patrz Low-6).

## Co działa dobrze

- HVACBusiness jest poprawnym podtypem LocalBusiness. Pola: `name`, `url`, `telephone` (E.164 `+48601418645`), `email`, `address` (PostalAddress z miastem, regionem, krajem), `openingHoursSpecification` (pon.-pt. 08:00-18:00, format HH:MM), `areaServed`, `logo`, `image`, `foundingDate` ("1994", poprawny ISO 8601), `founder`, `taxID`.
- Telefon, godziny i nazwa firmy w schema zgadzają się z widoczną treścią (8:00-18:00 pon.-pt., 601 418 645, pełna nazwa w `<dd>` na /kontakt/ i /o-firmie/). Weekendowe awarie "po uzgodnieniu" słusznie NIE trafiły do `openingHoursSpecification`.
- Logo: `web-app-manifest-512x512.png` ma 512x512 px, kwadrat, granatowy znak na białym tle, napis POL-GAZ. Spełnia wymagania Google (min. 112x112, 1:1, czytelne na białym tle). Pod URL zwraca 200.
- Zdjęcie `statuetka-beretta.jpg` 1067x800 (4:3) jako `image` jest poprawne.
- Brak sztucznie podanego adresu ulicy ani `geo`: dobrze dla firmy dojazdowej (nie wymyśla faktów).
- BreadcrumbList: poprawne `position` od 1, `name`, `item` jako URL bezwzględny; nazwy i URL zgadzają się z widocznymi okruszkami na 11 stronach usług/marek, indeksie kodów, /obszar-dzialania/, /o-firmie/, /kontakt/ (wyjątek: strony kodów, patrz Medium-2).
- `WebPage.name` identyczne z `<title>` na wszystkich 26 stronach, gdzie istnieje WebPage; `url` = canonical.
- `dateModified` = `2026-11-24` (ISO 8601), zgodne z widocznym "Aktualizacja: 24 listopada 2026" w `<time dateTime>` i z `lastmod` w sitemap.
- Referencje @id wewnątrz grafu rozwiązują się: `#firma`, `#wojciech-podporski`, `#strona`, `#usluga`. Autor/reviewedBy/founder/worksFor wskazują istniejący węzeł Person.
- Widoczny autor (komponent `Autor`) jest na stronach, na których schema deklaruje `author` (usługi, marki, kody, indeks kodów, /obszar-dzialania/).
- Person: `award` ("Ambasador marki Beretta (2019, 2020, 2021, 2025)") i `knowsAbout` oparte na potwierdzonych faktach.

## Zablokowane (czeka na właściciela, nie liczone jako błędy)

- `sameAs` (profil Google, Facebook): kod już obsługuje pusty przypadek (`.filter(Boolean)`), po uzupełnieniu `firma.ts` pojawi się samo.
- Uprawnienia/licencje (`hasCredential`, `Person.hasCredential`), numery uprawnień gazowych i F-gaz.
- `priceRange`, ceny (`Offer.price`, `PriceSpecification`).
- `streetAddress`, `postalCode`, `geo` (brak punktu przyjęć; nie dodawać).
- Typy i marki serwisowanych pomp ciepła (blokuje doprecyzowanie `Service` pomp ciepła).
- Wartość `datePublished` (brak potwierdzonych dat pierwszej publikacji treści).

## Błędy i problemy walidacji

Brak błędów Critical. Brak błędów składniowych.

### High

**H1. Węzeł WebSite występuje tylko na stronie głównej, a `WebPage.isPartOf` na 26 stronach wskazuje na `#witryna`**
- Dowód: `/naprawa-piecow-gazowych/#strona` -> `isPartOf: {"@id": "https://polgaz-szczecin.pl/#witryna"}`, a graf tej strony nie zawiera węzła `#witryna` (jest tylko w grafie `/`). Dotyczy 11 usług/marek, 2 indeksów, 12 kodów, /obszar-dzialania/ (26 WebPage).
- Skutek: referencja wiszeca w obrębie dokumentu. Google nie łączy `@id` między osobnymi stronami, więc `isPartOf` nie niesie żadnej informacji; walidatory (Schema.org Validator, Rich Results Test w trybie graf) zgłaszają niedefiniowany węzeł. Brak szkody dla rich results, ale to najczęstszy znak niedbałego grafu. Podobnie `author`/`publisher`/`about` są wewnątrz dokumentu rozwiązane tylko dlatego, że `schemaFirmy()` i `schemaOsoby()` są dołączane wszędzie.
- Poprawka: kod w sekcji "Propozycje" (P1): wspólny `schemaWitryny()` dodawany do każdego `graf(...)`.

### Medium

**M1. AboutPage i ContactPage są "gołe"**
- Dowód: `{"@type":"ContactPage","url":"https://polgaz-szczecin.pl/kontakt/"}` i `{"@type":"AboutPage","url":...,"mainEntity":{"@id":"#firma"}}` w `src/app/kontakt/page.tsx:418`, `src/app/o-firmie/page.tsx:493`. Brak `@id`, `name`, `description`, `inLanguage`, `isPartOf`, `dateModified`, `publisher`. Kontakt nie ma też `schemaOsoby()` ani `mainEntity`.
- Skutek: niespójne z pozostałymi stronami (tam WebPage z pełnym zestawem pól), mniej sygnałów E-E-A-T na stronie /o-firmie/ (najważniejszej dla autora). Brak rich result, więc priorytet średni.
- Poprawka: P2 (parametr `typ` w `schemaStrony`).

**M2. Nazwy okruszków na stronach kodów różnią się od widocznych**
- Dowód: `/bledy-kotlow/junkers-a4/`: schema `"Błąd A4 Junkers"`, widoczne okruszki `Junkers A4` (`src/app/bledy-kotlow/[slug]/page.tsx:300` vs `:305`). Dotyczy 12 stron.
- Skutek: Google porównuje okruszki w danych z widocznymi; rozbieżność nie jest błędem krytycznym, ale w tej witrynie to jedyne miejsce, gdzie okruszki nie są tożsame.
- Poprawka: ujednolić jedno źródło nazwy (np. zmienna `etykieta`) i użyć jej w obu miejscach. Zalecane: widoczne i w schema `Błąd A4 Junkers` (zawiera frazę "błąd").

**M3. `dateModified` to jedna stała globalna**
- Dowód: `dataAktualizacji = '2026-11-24'` w `firma.ts:54` służy jednocześnie do `WebPage.dateModified`, widocznej daty, `<time>` i `sitemap.lastmod` dla wszystkich 29 stron.
- Skutek: dziś zgodne i poprawne. Ryzyko: ręczna zmiana stałej przy poprawce jednej strony deklaruje zmianę na wszystkich stronach, w tym /bledy-kotlow/, która ma największy ruch. Google ignoruje `lastmod`, gdy widzi, że jest zawsze zmieniane.
- Poprawka: opcjonalna per-strona data (pole `zaktualizowano?: string` w danych usług/marek/kodów, fallback na globalną). Nie dotyczy blokady, ale warto przed wdrożeniem.

**M4. Obszar działania w schema (Chojna 62 km, Myślibórz 68 km) przeczy widocznemu "do 60 km"**
- Dowód: `firma.promienKm = 60`, treść /obszar-dzialania/ i stopka: "w promieniu 60 km", "okolice do 60 km"; a tabela na /obszar-dzialania/ pokazuje "Chojna ok. 62 km", "Myślibórz ok. 68 km"; `areaServed` w HVACBusiness i w każdym Service wylicza obie miejscowości.
- Skutek: sprzeczność liczbowa, którą widzi także czytelnik (AEO/GEO cytuje ją jako fakt). To nie błąd składni, ale niespójność fakt-schema-treść (zasada 3 z CLAUDE.md: jedna wersja faktu).
- Poprawka: zapytać właściciela, czy granica to "ok. 70 km", i zmienić `promienKm` (wtedy treść i schema same się zgodzą), albo usunąć Chojnę i Myślibórz z listy. Nie zmieniać samodzielnie.

### Low

**L1. `WebPage.about` wskazuje na firmę także na stronach kodów błędów i marek**
- Dowód: `about: {"@id": ".../#firma"}` na /bledy-kotlow/junkers-a4/. Strona jest o kodzie błędu, nie o firmie. Na stronach usług lepsze jest `mainEntity` -> `#usluga`.
- Poprawka: P2 (parametry `about`/`mainEntity`).

**L2. `WebPage.reviewedBy` = autor**
- Dowód: `author` i `reviewedBy` to ten sam `#wojciech-podporski`. Samorecenzja nie wzmacnia sygnału, a `reviewedBy` jest używane głównie dla treści medycznych/YMYL ze wskazaniem niezależnego eksperta. Można usunąć bez straty. Wskazane zostawić `author`.

**L3. `Service.description` zawiera numer telefonu i hasło sprzedażowe**
- Dowód: `"description": "Naprawa pieców gazowych w Szczecinie: ... Od 1994 r. Tel. 601 418 645"` (to meta description użyte 1:1 jako opis usługi i WebPage). W opisie usługi telefon jest zbędny.
- Poprawka: osobne pole `opisUslugi` bez telefonu, albo `.replace(/\s*Tel\..*$/, '')`.

**L4. `vatID: "PL8521839815"` wyprowadzone z NIP**
- Dowód: `seo.ts:61`. CLAUDE.md potwierdza tylko NIP. Status czynnego podatnika VAT UE nie jest potwierdzony. Jeśli firma nie jest zarejestrowana w VIES, `vatID` jest nieprawdziwe. Do potwierdzenia przez właściciela albo usunąć (zostawić `taxID`).

**L5. /polityka-prywatnosci/ bez danych strukturalnych**
- Dowód: 0 bloków JSON-LD, mimo widocznych okruszków (`Strona główna / Polityka prywatności`) i nagłówka firmy w stopce.
- Ocena: dla rich results bez znaczenia. Dla spójności grafu (okruszki w SERP) warto dodać WebPage + BreadcrumbList (P7), bez Person/autora, bo strona nie pokazuje autora.

**L6. Dokumentacja: CLAUDE.md wymienia `/serwis-piecow-gazowych/`, kod ma `/naprawa-piecow-gazowych/`**
- Dowód: `src/data/uslugi.ts:26` (`slug: 'naprawa-piecow-gazowych'`), sitemap, canonical i schema są spójne z kodem. Nieaktualny jest tylko tekst CLAUDE.md i PLAN-PRZEBUDOWY. Przy migracji z live (stare URL-e) sprawdzić przekierowania, osobno od schema.

**L7. Strona główna bez WebPage i BreadcrumbList**
- Ocena: BreadcrumbList na stronie głównej nie ma sensu (jeden element, Google go nie wyświetla). Brak WebPage na `/` jest niespójnością, nie błędem. Strona główna ma natomiast najlepsze miejsce na `hasOfferCatalog` (P4). Dodać WebPage razem z P1 (węzeł `#strona` z `isPartOf`), bez znaczenia dla rich results.

**L8. Brak `datePublished`**
- Strony kodów i usług mają tylko `dateModified`. Dla WebPage to w porządku. Jeśli zostanie dodany TechArticle (P5), `datePublished` jest zalecane przez Google dla Article; wymaga daty od właściciela (TODO(właściciel)), nie wymyślać.

## Możliwości (tylko potwierdzone fakty)

Wszystkie fragmenty pasują do stylu `seo.ts` (funkcje zwracające węzły, `abs()`, stałe `ID_*`). Wymaga dodania `import { uslugi } from '@/data/uslugi'` tam, gdzie wskazano.

### P1 (High). WebSite w każdym grafie

W `seo.ts` dodać obok stałych:

```ts
export function schemaWitryny() {
  return {
    '@type': 'WebSite',
    '@id': ID_WITRYNY,
    url: firma.url,
    name: firma.krotka,
    inLanguage: 'pl-PL',
    publisher: { '@id': ID_FIRMY },
  }
}
```

W `src/app/page.tsx` zamienić literał na `schemaWitryny()`:

```tsx
<JsonLd dane={graf(schemaFirmy(), schemaOsoby(), schemaWitryny())} />
```

W pozostałych trasach dopisać `schemaWitryny()` do `graf(...)` (w `[slug]/page.tsx` dwa miejsca, `bledy-kotlow/page.tsx`, `bledy-kotlow/[slug]/page.tsx`, `obszar-dzialania/page.tsx`, `o-firmie`, `kontakt`). Koszt: około 150 bajtów na stronę. Efekt: wszystkie `isPartOf` rozwiązują się lokalnie.

Nie dodawać `potentialAction: SearchAction`: Google wycofał pole wyszukiwania w wynikach, a wyszukiwarka kodów działa po stronie klienta.

### P2 (Medium). Jeden helper strony dla WebPage / AboutPage / ContactPage / CollectionPage

Zastąpić `schemaStrony`:

```ts
type TypStrony = 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage'

export function schemaStrony(o: {
  nazwa: string
  opis: string
  sciezka: string
  typ?: TypStrony
  // Domyślnie strona jest „o” firmie. Przy usłudze podać mainEntity z #usluga, przy kodzie błędu podać about.
  about?: object
  mainEntity?: object
  autor?: boolean
}) {
  const { typ = 'WebPage', autor = true } = o
  return {
    '@type': typ,
    '@id': `${abs(o.sciezka)}#strona`,
    url: abs(o.sciezka),
    name: o.nazwa,
    description: o.opis,
    inLanguage: 'pl-PL',
    isPartOf: { '@id': ID_WITRYNY },
    about: o.about ?? { '@id': ID_FIRMY },
    ...(o.mainEntity ? { mainEntity: o.mainEntity } : {}),
    ...(autor ? { author: { '@id': ID_OSOBY } } : {}),
    publisher: { '@id': ID_FIRMY },
    dateModified: dataAktualizacji,
  }
}
```

Usunięto `reviewedBy` (L2). Wywołania:

```tsx
// o-firmie/page.tsx (zamiast literału AboutPage)
schemaStrony({ nazwa: 'O firmie POL-GAZ Szczecin – Wojciech Podporski, od 1994 r.', opis: <ten sam opis co w meta>, sciezka: '/o-firmie/', typ: 'AboutPage', mainEntity: { '@id': `${firma.url}/#firma` } })

// kontakt/page.tsx (zamiast literału ContactPage); dodać schemaWitryny()
schemaStrony({ nazwa: 'Kontakt – POL-GAZ Szczecin, serwis pieców gazowych', opis: <ten sam opis co w meta>, sciezka: '/kontakt/', typ: 'ContactPage', autor: false })

// [slug]/page.tsx, strona usługi
schemaStrony({ nazwa: u.tytul, opis: u.opis, sciezka, mainEntity: { '@id': `${abs(sciezka)}#usluga` } })
```

Dla `mainEntity` na usługach potrzebny eksport `abs` lub zbudowanie ID w miejscu (`${firma.url}${sciezka}#usluga`). Dla /bledy-kotlow/ użyć `typ: 'CollectionPage'`.

### P3 (Medium). Service: serviceType, brand, kanał kontaktu, granularność areaServed

W `seo.ts` zastąpić `schemaUslugi` (parametry opcjonalne, wywołania dotychczasowe działają bez zmian):

```ts
const miastaObslugi = () =>
  [firma.miasto, ...miejscowosci.map((m) => m.nazwa)].map((name) => ({
    '@type': 'City',
    name,
    containedInPlace: { '@type': 'AdministrativeArea', name: `województwo ${firma.wojewodztwo}` },
  }))

export function schemaUslugi(o: {
  nazwa: string
  opis: string
  sciezka: string
  rodzaj?: string // serviceType, np. 'Naprawa kotłów gazowych'
  marka?: string // dla stron marek
}) {
  return {
    '@type': 'Service',
    '@id': `${abs(o.sciezka)}#usluga`,
    name: o.nazwa,
    description: o.opis,
    url: abs(o.sciezka),
    ...(o.rodzaj ? { serviceType: o.rodzaj } : {}),
    ...(o.marka ? { brand: { '@type': 'Brand', name: o.marka } } : {}),
    provider: { '@id': ID_FIRMY },
    areaServed: miastaObslugi(),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: abs('/kontakt/'),
      servicePhone: { '@type': 'ContactPoint', telephone: firma.telefonE164, contactType: 'customer service', availableLanguage: 'pl' },
    },
  }
}
```

Wywołania: usługi `rodzaj: 'Naprawa pieców gazowych'` itp. (jedno pole `rodzaj` do dopisania w `uslugi.ts`, treść z już istniejącej nazwy), marki `marka: m.nazwa, rodzaj: 'Serwis kotłów gazowych'`. Wpis `serviceType` pochodzi z istniejących nazw, nie wprowadza nowych faktów.

Uwaga: `areaServed` to City bez współrzędnych. Nie dodawać `GeoCircle` z promieniem 60 km, dopóki M4 nie jest rozstrzygnięte.

### P4 (Medium). hasOfferCatalog w HVACBusiness łączy usługi z firmą

Dołączyć do `schemaFirmy` na stronie głównej (Offer bez ceny jest dopuszczalny w katalogu):

```ts
export function schemaKatalogu(lista: { nazwa: string; slug: string }[]) {
  return {
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Usługi POL-GAZ Szczecin',
      itemListElement: lista.map((u) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: u.nazwa, url: abs(`/${u.slug}/`) },
      })),
    },
  }
}
```

Użycie tylko na `/` (dane z `uslugi`):

```tsx
graf({ ...schemaFirmy(), ...schemaKatalogu(uslugi) }, schemaOsoby(), schemaWitryny())
```

Efekt: encja firmy ma jawną listę 5 usług z adresami (korzyść dla wyszukiwarek AI/GEO i grafu wiedzy, brak rich result). Nie dodawać cen.

### P5 (Medium). Strony kodów błędów: TechArticle zamiast gołego WebPage

Google nie ma rich result dla TechArticle, ale typ lepiej opisuje treść i nadaje się do cytowania. Dla 12 stron kodów (nie dla indeksu):

```ts
export function schemaArtykuluKodu(o: { naglowek: string; opis: string; sciezka: string; marka: string }) {
  return {
    '@type': 'TechArticle',
    '@id': `${abs(o.sciezka)}#artykul`,
    headline: o.naglowek,
    description: o.opis,
    url: abs(o.sciezka),
    inLanguage: 'pl-PL',
    mainEntityOfPage: { '@id': `${abs(o.sciezka)}#strona` },
    about: { '@type': 'Brand', name: o.marka },
    author: { '@id': ID_OSOBY },
    publisher: { '@id': ID_FIRMY },
    dateModified: dataAktualizacji,
    // TODO(właściciel): datePublished po potwierdzeniu daty pierwszej publikacji
  }
}
```

Wywołanie w `bledy-kotlow/[slug]/page.tsx` po `schemaStrony`: `schemaArtykuluKodu({ naglowek: m.tytul, opis: m.opis, sciezka: m.sciezka, marka })`; w `schemaStrony` tej strony podać `about: { '@type': 'Brand', name: marka }` (L1). Uwaga: nagłówek `headline` do 110 znaków (tytuły mają ok. 50). Zastrzeżenie: strony zawierają porady bezpieczeństwa. Schema nie może nic dodawać do treści ani sugerować "naprawy samodzielnej". Priorytet średni/niski: korzyść pośrednia.

### P6 (Low). Person: rozszerzenie knowsAbout o potwierdzone marki

```ts
knowsAbout: ['kotły gazowe', 'kotły kondensacyjne', 'pompy ciepła', ...marki.map((m) => m.nazwa)],
```

(`marki` z `@/data/marki`). Albo bez nowego importu: `'Beretta', 'Junkers', 'Bosch', 'Buderus', 'Vaillant', 'Unical', 'Saunier Duval'`. Przy konflikcie nazw "Beretta" (broń) dodać kontekst: `'kotły Beretta'`. `award` jako tablica daje czystszy parsing:

```ts
award: firma.ambasadorBerettaLata.map((r) => `Ambasador marki Beretta ${r}`),
```

Nie dodawać `hasCredential`, `alumniOf`, `image` (blokada: brak uprawnień i zdjęcia właściciela).

### P7 (Low). /polityka-prywatnosci/

```tsx
<JsonLd dane={graf(
  schemaFirmy(),
  schemaWitryny(),
  schemaStrony({ nazwa: 'Polityka prywatności – POL-GAZ Szczecin', opis: <opis z meta>, sciezka: '/polityka-prywatnosci/', autor: false }),
  schemaOkruszkow([{ nazwa: 'Polityka prywatności', sciezka: '/polityka-prywatnosci/' }]),
)} />
```

(`JsonLd` do zaimportowania z komponentów, jak w pozostałych trasach.)

### P8 (Low). Indeks kodów: lista 12 stron szczegółowych

Dla `/bledy-kotlow/` jako `CollectionPage` (P2) z `mainEntity: ItemList` zawierającym tylko 12 stron podrzędnych (nie 179 kodów, które są na jednej stronie):

```ts
mainEntity: {
  '@type': 'ItemList',
  itemListElement: stronyKodow.map((k, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(`/bledy-kotlow/${k.slug}/`), name: `Błąd ${k.blad.kod} ${k.blad.marka}` })),
},
```

Pola kodu i marki dostosować do struktury `stronyKodow` (patrz `src/data/bledy.ts`; w `page.tsx` używane są `k.blad.marka`). Bez rich result, tylko wewnętrzne powiązanie encji.

### Niezalecane

- `speakable`: nieobsługiwane w PL.
- `FAQPage`, `HowTo`: zakazane/wycofane. Strony kodów nie mają realnych pytań użytkowników, więc `QAPage` też nie.
- `aggregateRating`/`Review`: opinie pochodzą z widżetu Shapo, bez potwierdzonych danych (zakaz CLAUDE.md).
- `geo`, `streetAddress`, `hasMap`: brak punktu przyjęć.
- `SearchAction` w WebSite: Google je wycofał.

## Rekomendowana kolejność wdrożenia

1. P1 (WebSite wszędzie): usuwa jedyną systemową wadę grafu (H1).
2. M4 (decyzja właściciela o promieniu), L4 (VAT).
3. P2 + M2 (spójne WebPage/AboutPage/ContactPage, okruszki kodów).
4. P3, P4 (Service/katalog).
5. P5, P6, P7, P8 (niski priorytet).

Po wdrożeniu zweryfikować w Rich Results Test (BreadcrumbList, LocalBusiness) oraz w Schema Markup Validator (graf, referencje).
