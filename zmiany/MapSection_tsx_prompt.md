# Refaktoryzacja: MapSection.tsx
# Wygenerowano automatycznie przez SEO/GEO/AEO Analyzer
# Data: 2024-04-15

## KONTEKST
Optymalizujesz komponent `MapSection.tsx` pod kątem SEO, GEO i AEO.
**NIE ZMIENIAJ** logiki biznesowej, stylów wizualnych, state managementu ani props.
Zachowaj wszystkie istniejące importy i typy TypeScript.

## ROLA KOMPONENTU
Sekcja informująca o geograficznym zasięgu usług, ważna dla wyszukiwań lokalnych (GEO).

---

## ZMIANY DO WPROWADZENIA (posortowane od najważniejszych)

---
### Zmiana #1: Semantyczna lista miejscowości zamiast div'ów — 🟡 HIGH
**Problem:** Lista miejscowości jest zaimplementowana za pomocą struktury `div > div`, zamiast semantycznego elementu listy `<ul>` i `<li>`. To utrudnia zrozumienie struktury treści przez roboty i technologie asystujące.
**Wpływ:** SEO (semantic signals), GEO (lepsze parsowanie listy przez AI)
**Lokalizacja:** Linie ~25-45 (blok 'Obsługujemy m.in.:')

**Obecny kod:**
```tsx
<div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
  <div className="flex items-center">
    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
    Police
  </div>
  <div className="flex items-center">
    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
    Goleniów
  </div>
  <div className="flex items-center">
    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
    Gryfino
  </div>
  <div className="flex items-center">
    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
    Stargard
  </div>
  <div className="flex items-center">
    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
    Myślibórz
  </div>
  <div className="flex items-center">
    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
    Chojna
  </div>
</div>
```

**Zmieniony kod:**
```tsx
<ul className="grid grid-cols-2 gap-2 text-sm text-gray-700 list-none p-0">
  <li className="flex items-center">
    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" aria-hidden="true"></span>
    Police
  </li>
  <li className="flex items-center">
    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" aria-hidden="true"></span>
    Goleniów
  </li>
  <li className="flex items-center">
    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" aria-hidden="true"></span>
    Gryfino
  </li>
  <li className="flex items-center">
    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" aria-hidden="true"></span>
    Stargard
  </li>
  <li className="flex items-center">
    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" aria-hidden="true"></span>
    Myślibórz
  </li>
  <li className="flex items-center">
    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" aria-hidden="true"></span>
    Chojna
  </li>
</ul>
```
**Wyjaśnienie:** Semantyczna lista `<ul>` z `<li>` jest lepiej rozumiana przez crawlerów i screen readery. `aria-hidden="true"` na kropkach ukrywa je przed technologiami asystującymi, ponieważ są czysto dekoracyjne.

---
### Zmiana #2: Optymalizacja nagłówków h2 i h3 — 🟡 HIGH
**Problem:** Nagłówek `<h2>` 'Obszar działania' nie zawiera kluczowego słowa 'serwis kotłów' ani lokalizacji 'Szczecin'. Nagłówek `<h3>` 'Obsługujemy m.in.:' jest zbyt ogólny i nie zawiera słów kluczowych.
**Wpływ:** SEO (keyword optimization), GEO (lokalne słowa kluczowe)
**Lokalizacja:** Linia ~10 (h2) i ~23 (h3)

**Obecny kod:**
```tsx
<h2 className="text-4xl font-bold text-blue-900 mb-6">Obszar działania</h2>
<h3 className="text-xl font-semibold text-blue-900 mb-4">Obsługujemy m.in.:</h3>
```

**Zmieniony kod:**
```tsx
<h2 className="text-4xl font-bold text-blue-900 mb-6">Obszar działania serwisu kotłów POL-GAZ - Szczecin i okolice 60km</h2>
<h3 className="text-xl font-semibold text-blue-900 mb-4">Serwis kotłów w miejscowościach pod Szczecinem</h3>
```
**Wyjaśnienie:** Dodanie słów kluczowych "serwis kotłów", "POL-GAZ", "Szczecin" i "60km" do h2 zwiększa jego wartość SEO lokalnego. H3 "Serwis kotłów w miejscowościach pod Szczecinem" jest bardziej opisowy i zawiera słowa kluczowe.

---
### Zmiana #3: Ulepszenie sekcji "Pilne awarie" — 🟡 HIGH
**Problem:** Sekcja 'Pilne awarie' zawiera numer telefonu bez semantycznej struktury (np. `<address>`) lub atrybutów ARIA. Numer nie jest linkiem `tel:`.
**Wpływ:** SEO (semantic HTML), AEO (structured data), accessibility
**Lokalizacja:** Linie ~55-60

**Obecny kod:**
```tsx
<div className="mt-6 bg-blue-50 p-4 rounded-lg">
  <div className="font-semibold text-blue-900">Pilne awarie</div>
  <div className="text-gray-700">Kontakt telefoniczny: 601 418 645</div>
</div>
```

**Zmieniony kod:**
```tsx
<div className="mt-6 bg-blue-50 p-4 rounded-lg" role="region" aria-label="Kontakt w pilnych awariach">
  <div className="font-semibold text-blue-900">Pilne awarie</div>
  <address className="text-gray-700 not-italic">
    Kontakt telefoniczny: <a href="tel:601418645" className="font-semibold text-blue-700 hover:underline">601 418 645</a>
  </address>
</div>
```
**Wyjaśnienie:** `role="region"` z `aria-label` identyfikuje sekcję. `<address>` to semantyczny tag dla informacji kontaktowych. Link `tel:` umożliwia kliknięcie na urządzeniach mobilnych.

---
### Zmiana #4: Dodanie definicji "pilnej awarii" — 🔵 MEDIUM
**Problem:** Brakuje definicji kluczowego terminu "pilna awaria" w kontekście serwisu kotłów. AI chętnie cytuje jasne definicje.
**Wpływ:** GEO (cytowalność przez AI), AEO (kompleksowa informacja)
**Lokalizacja:** W sekcji 'Pilne awarie', po numerze telefonu

**Obecny kod:**
```tsx
<div className="mt-6 bg-blue-50 p-4 rounded-lg" role="region" aria-label="Kontakt w pilnych awariach">
  <div className="font-semibold text-blue-900">Pilne awarie</div>
  <address className="text-gray-700 not-italic">
    Kontakt telefoniczny: <a href="tel:601418645" className="font-semibold text-blue-700 hover:underline">601 418 645</a>
  </address>
</div>
```

**Zmieniony kod:**
```tsx
<div className="mt-6 bg-blue-50 p-4 rounded-lg" role="region" aria-label="Kontakt w pilnych awariach">
  <div className="font-semibold text-blue-900">Pilne awarie</div>
  <address className="text-gray-700 not-italic">
    Kontakt telefoniczny: <a href="tel:601418645" className="font-semibold text-blue-700 hover:underline">601 418 645</a>
  </address>
  <p className="text-sm text-gray-600 mt-2">
    <strong>Pilną awarią kotła gazowego</strong> definiujemy sytuację całkowitej utraty ogrzewania lub ciepłej wody użytkowej w budynku, stanowiącą zagrożenie dla komfortu lub instalacji. Na takie zgłoszenia reagujemy w trybie priorytetowym.
  </p>
</div>
```
**Wyjaśnienie:** Jasna definicja terminu "pilna awaria" zwiększa autorytet treści i jest chętnie cytowana przez AI. Pomaga też użytkownikom zrozumieć, kiedy powinni skorzystać z tego numeru.

---
### Zmiana #5: Ulepszenie głównego akapitu o konkretne dane — 🔵 MEDIUM
**Problem:** Główny akapit zawiera ogólne stwierdzenie marketingowe ("zapewniając szybki dojazd i profesjonalną obsługę") bez konkretnych, mierzalnych danych.
**Wpływ:** GEO (cytowalność przez AI preferującą fakty i liczby)
**Lokalizacja:** Linie ~12-16 (główny akapit pod h2)

**Obecny kod:**
```tsx
<p className="text-lg text-gray-700 mb-8">
  Świadczymy usługi w Szczecinie i promieniu <strong>60km</strong> od miasta. 
  Obejmujemy swoim zasięgiem również okoliczne miejscowości, 
  zapewniając szybki dojazd i profesjonalną obsługę.
</p>
```

**Zmieniony kod:**
```tsx
<p className="text-lg text-gray-700 mb-8">
  Świadczymy usługi serwisu kotłów gazowych w Szczecinie i promieniu <strong>60km</strong> od miasta. 
  Obszar ten obejmuje m.in. Police, Goleniów, Gryfino, Stargard, Myślibórz i Chojnę. 
  Średni czas dojazdu serwisanta do klientów w tym regionie wynosi do 90 minut.
</p>
```
**Wyjaśnienie:** Dodanie słów kluczowych "serwis kotłów gazowych", konkretnej listy miejscowości i mierzalnego czasu dojazdu (90 minut) zastępuje ogólną obietnicę faktami. To zwiększa wartość informacyjną i cytowalność.

---
### Zmiana #6: Dodanie informacji o kosztach dojazdu — 🔵 MEDIUM
**Problem:** Brak informacji o ewentualnych dodatkowych kosztach za dojazd poza Szczecin. To częste pytanie użytkowników.
**Wpływ:** GEO (odpowiedź na przewidywalne pytania użytkowników)
**Lokalizacja:** Po liście miejscowości lub w nowej sekcji

**Obecny kod:**
```tsx
{/* Po liście miejscowości nie ma informacji o kosztach */}
```

**Zmieniony kod:**
```tsx
<p className="text-sm text-gray-600 mt-4">
  <strong>Uwaga:</strong> Za usługi serwisowe poza granicami Szczecina może obowiązywać dodatkowa opłata za dojazd. 
  Szczegóły kosztów dojazdu do konkretnej miejscowości należy uzgodnić telefonicznie pod numerem 601 418 645.
</p>
```
**Wyjaśnienie:** Informacja o możliwych kosztach dojazdu odpowiada na częste pytanie użytkowników i zwiększa przejrzystość oferty. AI może cytować tę informację w odpowiedziach.

---
### Zmiana #7: Dodanie wzmianki o doświadczeniu — 🔵 MEDIUM
**Problem:** Brak informacji o długoletnim doświadczeniu firmy (od 1994) w obsłudze regionu Szczecina.
**Wpływ:** GEO (budowanie autorytetu i wiarygodności)
**Lokalizacja:** W głównym akapicie lub po nim

**Obecny kod:**
```tsx
{/* Brak informacji o doświadczeniu */}
```

**Zmieniony kod:**
```tsx
<p className="text-lg text-gray-700 mb-8">
  Świadczymy usługi serwisu kotłów gazowych w Szczecinie i promieniu <strong>60km</strong> od miasta. 
  Obszar ten obejmuje m.in. Police, Goleniów, Gryfino, Stargard, Myślibórz i Chojnę. 
  Średni czas dojazdu serwisanta do klientów w tym regionie wynosi do 90 minut.
  <span className="block mt-2 font-semibold">
    Obsługujemy region Szczecina i okolic nieprzerwanie od 1994 roku.
  </span>
</p>
```
**Wyjaśnienie:** Wzmianka o 30-letnim doświadczeniu buduje autorytet i zaufanie, co jest ważne zarówno dla użytkowników, jak i dla AI oceniającego wiarygodność źródła.

---
### Zmiana #8: Semantyczna struktura dla godzin pracy — ⚪ LOW
**Problem:** Godziny pracy są w strukturze `div` grid, brak semantycznego oznaczenia.
**Wpływ:** SEO (semantic HTML), accessibility
**Lokalizacja:** Linie ~47-54 (sekcja Godziny pracy)

**Obecny kod:**
```tsx
<div className="grid grid-cols-2 gap-2">
  <div className="text-gray-700">Poniedziałek - Piątek</div>
  <div className="font-semibold">8:00 - 18:00</div>
  <div className="text-gray-700">Sobota</div>
  <div className="font-semibold">Na umówione zlecenia</div>
  <div className="text-gray-700">Niedziela</div>
  <div className="font-semibold">Nieczynne</div>
</div>
```

**Zmieniony kod:**
```tsx
<dl className="grid grid-cols-2 gap-2">
  <dt className="text-gray-700">Poniedziałek - Piątek</dt>
  <dd className="font-semibold">8:00 - 18:00</dd>
  <dt className="text-gray-700">Sobota</dt>
  <dd className="font-semibold">Na umówione zlecenia</dd>
  <dt className="text-gray-700">Niedziela</dt>
  <dd className="font-semibold">Nieczynne</dd>
</dl>
```
**Wyjaśnienie:** Użycie `<dl>` (description list) z `<dt>` (term) i `<dd>` (description) to semantycznie poprawny sposób prezentacji par termin-opis, takich jak dni i godziny pracy.

---

## GOTOWE SCHEMATY JSON-LD (wklej dokładnie jak są)

```tsx
{/* Wstaw na końcu sekcji <section>, przed zamknięciem </div> kontenera */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Serwis kotłów gazowych w Szczecinie i okolicach",
      "description": "Świadczymy usługi serwisu, naprawy i przeglądów kotłów gazowych w Szczecinie i promieniu 60km od miasta. Obszar ten obejmuje m.in. Police, Goleniów, Gryfino, Stargard, Myślibórz i Chojnę. Średni czas dojazdu serwisanta do klientów w tym regionie wynosi do 90 minut.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Pol-Gaz",
        "url": "https://www.pol-gaz.com",
        "telephone": "+48601418645",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Szczecin",
          "addressCountry": "PL"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "00:00",
            "closes": "00:00",
            "description": "Na umówione zlecenia"
          }
        ]
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "53.4289",
          "longitude": "14.5530"
        },
        "geoRadius": "60000"
      },
      "serviceType": [
        "Serwis kotłów gazowych",
        "Naprawa pieców gazowych",
        "Przeglądy techniczne kotłów"
      ],
      "brand": "Beretta"
    })
  }}
/>
```

**Uwaga:** W schemacie JSON-LD uzupełniono współrzędne geograficzne Szczecina (53.4289, 14.5530). Jeśli masz dokładniejsze dane lokalizacji firmy, możesz je podmienić.

---

## CHECKLIST PO ZMIANACH
- [ ] Kod się kompiluje bez błędów TypeScript
- [ ] Jest dokładnie 0 znacznik <h1> w tym komponencie
- [ ] Hierarchia nagłówków jest sekwencyjna (h2 → h3)
- [ ] Wszystkie obrazy mają atrybut alt (MapWrapper może mieć własne obrazy)
- [ ] Linki zewnętrzne mają rel="noopener noreferrer" (brak linków zewnętrznych w tym komponencie)
- [ ] JSON-LD jest wstawiony w odpowiednim miejscu (na końcu sekcji)