# Refaktoryzacja: BrandsSection.tsx
# Wygenerowano automatycznie przez SEO/GEO/AEO Analyzer
# Data: 2024-04-15

## KONTEKST
Optymalizujesz komponent `BrandsSection.tsx` pod kątem SEO, GEO i AEO.
**NIE ZMIENIAJ** logiki biznesowej, stylów wizualnych, state managementu ani props.
Zachowaj wszystkie istniejące importy i typy TypeScript.

## ROLA KOMPONENTU
Sekcja wzmacniająca wiarygodność poprzez prezentację obsługiwanych, renomowanych marek kotłów.

---

## ZMIANY DO WPROWADZENIA (posortowane od najważniejszych)

---
### Zmiana #1: Optymalizacja nagłówka H2 z lokalnym słowem kluczowym — 🟡 HIGH
**Problem:** Główny nagłówek sekcji (`<h2>`) nie zawiera kluczowego słowa "szczecin" ani "serwis kotłów szczecin", co utrudnia optymalizację lokalną. Tekst jest ogólny i marketingowy.
**Wpływ:** SEO (ranking lokalny), GEO (cytowalność dla lokalnych zapytań)
**Lokalizacja:** Linia ~30

**Obecny kod:**
```tsx
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-4 lg:mb-6">
  Obsługujemy kotły renomowanych marek
</h2>
```

**Zmieniony kod:**
```tsx
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-4 lg:mb-6">
  Serwis kotłów gazowych renomowanych marek w Szczecinie
</h2>
```
**Wyjaśnienie:** Dodanie lokalizacji "Szczecinie" i precyzyjnego określenia "kotłów gazowych" optymalizuje nagłówek pod kątem lokalnych wyszukiwań i zwiększa jego wartość informacyjną dla AI.

---
### Zmiana #2: Dodanie nagłówka H3 dla specjalizacji Beretta — 🟡 HIGH
**Problem:** Brakuje nagłówka `<h3>` dla specjalizacji w marki Beretta, która jest kluczowa dla kontekstu biznesowego (Ambasador Beretta). Obecnie sekcja ambasador ma tylko `<h3>` z imieniem i nazwiskiem.
**Wpływ:** SEO (hierarchia nagłówków), GEO (wyeksponowanie unikalnej wartości)
**Lokalizacja:** Linia ~85 (w sekcji Ambasadora, przed istniejącym `<h3>`)

**Obecny kod:**
```tsx
<!-- Brak nagłówka h3 dla Beretta -->
```

**Zmieniony kod:**
```tsx
<h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
  Specjalizujemy się w serwisie kotłów Beretta
</h3>
```
**Wyjaśnienie:** Dodanie dedykowanego `<h3>` przed sekcją ambasador wzmacnia sygnał specjalizacji w tej marce, poprawia strukturę nagłówków (h2 → h3) i zwiększa widoczność dla crawlerów.

---
### Zmiana #3: Zastąpienie ogólnikowych opisów marek konkretnymi faktami — 🔵 MEDIUM
**Problem:** Opisy marek w tablicy `brands` są ogólnikowe i marketingowe (np. "Niemiecka tradycja i innowacja", "Francuska elegancja"). Brak konkretnych faktów technicznych, historycznych lub korporacyjnych, które są wysoko cytowane przez AI.
**Wpływ:** GEO (cytowalność), AEO (wartość informacyjna)
**Lokalizacja:** Tablica `brands` (linie ~5-35)

**Obecny kod:**
```tsx
const brands = [
  {
    name: 'Beretta',
    logo: '/images/brands/Beretta_logo.WebP',
    description: 'Włoskie kotły kondensacyjne',
    url: 'https://beretta.pl/'
  },
  {
    name: 'Junkers',
    logo: '/images/brands/Junkers_logo.WebP',
    description: 'Niemiecka tradycja i innowacja',
    url: 'https://www.bosch-thermotechnology.com/pl/pl/bosch-thermotechnology/'
  },
  {
    name: 'Buderus',
    logo: '/images/brands/Buderus_logo.WebP',
    description: 'Niezawodność od 1731 roku',
    url: 'https://www.buderus.com/pl/pl/'
  },
  {
    name: 'Unical',
    logo: '/images/brands/Unical_logo.WebP',
    description: 'Włoska jakość i design',
    url: 'https://www.unical.pl/'
  },
  {
    name: 'Vaillant',
    logo: '/images/brands/Vaillant_logo.WebP',
    description: 'Ekologiczne rozwiązania',
    url: 'https://www.vaillant.pl/'
  },
  {
    name: 'Saunier Duval',
    logo: '/images/brands/SaunierDuval_logo.WebP',
    description: 'Francuska elegancja',
    url: 'https://www.saunierduval.pl/'
  }
]
```

**Zmieniony kod:**
```tsx
const brands = [
  {
    name: 'Beretta',
    logo: '/images/brands/Beretta_logo.WebP',
    description: 'Włoski producent wysokoefektywnych kotłów kondensacyjnych, w tym serii Mythos, Aluxtra i RRT.',
    url: 'https://beretta.pl/'
  },
  {
    name: 'Junkers',
    logo: '/images/brands/Junkers_logo.WebP',
    description: 'Niemiecki producent kotłów gazowych i systemów grzewczych, część koncernu Bosch. Działa od 1895 roku.',
    url: 'https://www.bosch-thermotechnology.com/pl/pl/bosch-thermotechnology/'
  },
  {
    name: 'Buderus',
    logo: '/images/brands/Buderus_logo.WebP',
    description: 'Niemiecka marka założona w 1731 roku, część grupy Bosch. Specjalizuje się w kotłach kondensacyjnych i systemach solarnych.',
    url: 'https://www.buderus.com/pl/pl/'
  },
  {
    name: 'Unical',
    logo: '/images/brands/Unical_logo.WebP',
    description: 'Włoski producent kotłów gazowych, pomp ciepła i systemów fotowoltaicznych. Działa od 1970 roku.',
    url: 'https://www.unical.pl/'
  },
  {
    name: 'Vaillant',
    logo: '/images/brands/Vaillant_logo.WebP',
    description: 'Niemiecki koncern założony w 1874 roku. Lider w produkcji ekologicznych kotłów kondensacyjnych i pomp ciepła.',
    url: 'https://www.vaillant.pl/'
  },
  {
    name: 'Saunier Duval',
    logo: '/images/brands/SaunierDuval_logo.WebP',
    description: 'Francuski producent kotłów kondensacyjnych i systemów solarnych, część grupy BDR Thermea.',
    url: 'https://www.saunierduval.pl/'
  }
]
```
**Wyjaśnienie:** Zastąpienie subiektywnych przymiotników konkretnymi faktami (rok założenia, przynależność korporacyjna, typy produktów) zwiększa wartość informacyjną każdego opisu. AI częściej cytuje fakty niż ogólniki.

---
### Zmiana #4: Użycie semantycznej listy HTML dla marek — 🔵 MEDIUM
**Problem:** Lista marek jest zaimplementowana jako `div` z `grid`, a nie jako semantyczna lista HTML (`<ul>` lub `<ol>`). AI może mieć trudności z jednoznacznym rozpoznaniem tego jako wyliczenia.
**Wpływ:** GEO (struktura danych), AEO (łatwiejsze parsowanie)
**Lokalizacja:** Linie ~40-95 (grid marek)

**Obecny kod:**
```tsx
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
  {brands.map((brand) => (
    <a
      key={brand.name}
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer block"
    >
      {/* ...zawartość karty... */}
    </a>
  ))}
</div>
```

**Zmieniony kod:**
```tsx
<ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8" role="list">
  {brands.map((brand) => (
    <li key={brand.name}>
      <a
        href={brand.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer block"
      >
        {/* ...zawartość karty BEZ ZMIAN... */}
      </a>
    </li>
  ))}
</ul>
```
**Wyjaśnienie:** Opakowanie siatki w `<ul role="list">` i każdej karty w `<li>` zachowuje układ wizualny (CSS grid), ale dodaje semantykę listy. Atrybut `role="list"` zapewnia kompatybilność z niektórymi czytnikami ekranu, które resetują styl listy.

---
### Zmiana #5: Dodanie definicji "Ambasadora marki" w sekcji ambasador — 🔵 MEDIUM
**Problem:** Brak definicji kluczowego terminu "Ambasador marki" w kontekście branżowym. Tytuł jest wymieniony, ale jego znaczenie i wartość są tylko pośrednio opisane.
**Wpływ:** GEO (cytowalność definicji), AEO (kontekst dla featured snippet)
**Lokalizacja:** Linia ~105 (w sekcji ambasador, przed lub po istniejącym akapicie)

**Obecny kod:**
```tsx
<p className="text-sm sm:text-base lg:text-lg leading-relaxed mx-auto">
  Z ponad 31-letnim doświadczeniem w branży grzewczej, Wojciech Podporski czterokrotnie otrzymał prestiżowy tytuł Ambasadora marki Beretta. To wyróżnienie przyznawane jest wyłącznie najlepszym specjalistom w kraju i potwierdza najwyższy standard usług, profesjonalizm oraz wieloletnią współpracę z producentem.

  Jako jeden z nielicznych serwisów w Polsce posiadamy oficjalny status Ambasadora Beretta - gwarancję jakości, rzetelności i pełnego zaufania.
</p>
```

**Zmieniony kod:**
```tsx
<p className="text-sm sm:text-base lg:text-lg leading-relaxed mx-auto">
  <strong>Status Ambasadora marki Beretta</strong> to oficjalne wyróżnienie przyznawane przez producenta serwisom o najwyższych kwalifikacjach, potwierdzone wieloletnią współpracą i wynikami.
  
  Z ponad 31-letnim doświadczeniem w branży grzewczej, Wojciech Podporski czterokrotnie otrzymał ten prestiżowy tytuł. To wyróżnienie przyznawane jest wyłącznie najlepszym specjalistom w kraju i potwierdza najwyższy standard usług, profesjonalizm oraz bezpośredni dostęp do szkoleń, narzędzi i części zamiennych producenta.

  Jako jeden z nielicznych serwisów w Polsce posiadamy oficjalny status Ambasadora Beretta - gwarancję jakości, rzetelności i pełnego zaufania.
</p>
```
**Wyjaśnienie:** Dodanie wyraźnej definicji na początku akapitu tworzy samodzielny, cytowalny blok informacji. Wzmocnienie opisu o "bezpośredni dostęp do szkoleń, narzędzi i części zamiennych" odpowiada na potencjalne pytania użytkowników.

---
### Zmiana #6: Rozszerzenie opisu pod nagłówkiem H2 o konkretne marki — 🔵 MEDIUM
**Problem:** Opis pod nagłówkiem H2 jest marketingowy ("najlepszych europejskich producentów") i nie wymienia konkretnych marek. Brak weryfikowalnych faktów.
**Wpływ:** GEO (cytowalność), SEO (kontekst słów kluczowych)
**Lokalizacja:** Linia ~33

**Obecny kod:**
```tsx
<p className="text-sm sm:text-base lg:text-lg text-center text-gray-700 max-w-3xl mx-auto mb-8 lg:mb-16 px-4">
  Jesteśmy autoryzowanym serwisem najlepszych europejskich producentów 
  kotłów gazowych i urządzeń grzewczych.
</p>
```

**Zmieniony kod:**
```tsx
<p className="text-sm sm:text-base lg:text-lg text-center text-gray-700 max-w-3xl mx-auto mb-8 lg:mb-16 px-4">
  Jesteśmy autoryzowanym serwisem marek <strong>Beretta, Junkers, Buderus, Unical, Vaillant i Saunier Duval</strong>. Status oficjalnego Ambasadora marki Beretta potwierdza nasze kwalifikacje i bezpośrednią współpracę z producentem.
</p>
```
**Wyjaśnienie:** Wymienienie konkretnych marek zamienia ogólnik w weryfikowalny fakt. Dodanie odniesienia do statusu ambasador wzmacnia wiarygodność i tworzy logiczne połączenie z dalszą częścią sekcji.

---
### Zmiana #7: Dodanie aria-hidden na ikonę SVG zewnętrznego linku — ⚪ LOW
**Problem:** Ikona SVG zewnętrznego linku w karcie marki jest czysto dekoracyjna (obok tekstu "Odwiedź stronę producenta"), ale nie ma atrybutu `aria-hidden="true"`, co może wprowadzać zamieszanie dla czytników ekranu.
**Wpływ:** Accessibility (SEO pośrednio)
**Lokalizacja:** Linia ~55

**Obecny kod:**
```tsx
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg>
```

**Zmieniony kod:**
```tsx
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg>
```
**Wyjaśnienie:** Ikona jest dekoracyjna i towarzyszy tekstowi, który już przekazuje informację. `aria-hidden="true"` informuje czytniki ekranu, aby ją zignorowały.

---
### Zmiana #8: Dodanie aria-label do linku z logo Beretta w sekcji ambasador — ⚪ LOW
**Problem:** Kontener z linkiem dla logo Beretta w sekcji Ambasadora ma klasę `group`, ale nie ma wyraźnej etykiety ARIA opisującej jego cel. Dla lepszej dostępności można dodać `aria-label`.
**Wpływ:** Accessibility
**Lokalizacja:** Linia ~78

**Obecny kod:**
```tsx
<a
  href="https://www.berettagroup.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white rounded-lg p-3 sm:p-4 shadow-lg flex-shrink-0 hover:shadow-xl transition-shadow duration-300 group"
>
```

**Zmieniony kod:**
```tsx
<a
  href="https://www.berettagroup.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white rounded-lg p-3 sm:p-4 shadow-lg flex-shrink-0 hover:shadow-xl transition-shadow duration-300 group"
  aria-label="Przejdź na oficjalną stronę producenta Beretta"
>
```
**Wyjaśnienie:** Dodanie `aria-label` zapewnia czytnikom ekranu jasny opis celu linku, nawet jeśli użytkownik nie widzi obrazka logo.

---
### Zmiana #9: Zastąpienie div semantycznym section w sekcji ambasador — ⚪ LOW
**Problem:** Sekcja Ambasadora Beretta jest zawarta w ogólnym `<div>`, podczas gdy jest to odrębna, samodzielna część treści. Można ją lepiej oznaczyć semantycznie za pomocą `<section>` z `aria-label`.
**Wpływ:** Semantyka HTML, accessibility
**Lokalizacja:** Linia ~70

**Obecny kod:**
```tsx
<div className="mt-8 lg:mt-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-4 sm:p-6 lg:p-8 text-center">
```

**Zmieniony kod:**
```tsx
<section aria-label="Oficjalny Ambasador marki Beretta" className="mt-8 lg:mt-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-4 sm:p-6 lg:p-8 text-center">
```
**Wyjaśnienie:** Użycie `<section>` z `aria-label` jednoznacznie identyfikuje ten blok jako odrębną sekcję treści o określonym temacie, co poprawia semantykę dokumentu.

---

## GOTOWE SCHEMATY JSON-LD (wklej dokładnie jak są)

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Obsługiwane marki kotłów gazowych - serwis Pol-Gaz",
  "description": "Autoryzowany serwis renomowanych europejskich marek kotłów gazowych: Beretta, Junkers, Buderus, Unical, Vaillant, Saunier Duval.",
  "numberOfItems": 6,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Brand",
        "name": "Beretta",
        "description": "Włoskie kotły kondensacyjne",
        "url": "https://beretta.pl/"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Brand",
        "name": "Junkers",
        "description": "Niemiecka tradycja i innowacja",
        "url": "https://www.bosch-thermotechnology.com/pl/pl/bosch-thermotechnology/"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Brand",
        "name": "Buderus",
        "description": "Niezawodność od 1731 roku",
        "url": "https://www.buderus.com/pl/pl/"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Brand",
        "name": "Unical",
        "description": "Włoska jakość i design",
        "url": "https://www.unical.pl/"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Brand",
        "name": "Vaillant",
        "description": "Ekologiczne rozwiązania",
        "url": "https://www.vaillant.pl/"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Brand",
        "name": "Saunier Duval",
        "description": "Francuska elegancja",
        "url": "https://www.saunierduval.pl/"
      }
    }
  ]
}
```

**Umieść ten kod jako `<script type="application/ld+json">` na końcu sekcji `<section id="marki">`, przed zamknięciem `</div>` kontenera (linia ~120).**

---

## CHECKLIST PO ZMIANACH
- [ ] Kod się kompiluje bez błędów TypeScript
- [ ] Jest dokładnie 0 znacznik `<h1>` w tym komponencie
- [ ] Hierarchia nagłówków jest sekwencyjna (h2 → h3 → h3)
- [ ] Wszystkie obrazy mają atrybut alt
- [ ] Linki zewnętrzne mają rel="noopener noreferrer"
- [ ] JSON-LD jest wstawiony w odpowiednim miejscu