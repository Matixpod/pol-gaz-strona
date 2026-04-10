# Refaktoryzacja: ReviewsSection.tsx
# Wygenerowano automatycznie przez SEO/GEO/AEO Analyzer
# Data: 2024-11-20

## KONTEKST
Optymalizujesz komponent `ReviewsSection.tsx` pod kątem SEO, GEO i AEO.
**NIE ZMIENIAJ** logiki biznesowej, stylów wizualnych, state managementu ani props.
Zachowaj wszystkie istniejące importy i typy TypeScript.

## ROLA KOMPONENTU
Sekcja dowodów społecznych (social proof) prezentująca opinie klientów z Google.

---

## ZMIANY DO WPROWADZENIA (posortowane od najważniejszych)

---
### Zmiana #1: Dodanie schematów JSON-LD (Review i AggregateRating) — 🟡 HIGH
**Problem:** Brak strukturalnych danych JSON-LD, które są kluczowe dla wyróżnienia w wynikach wyszukiwania (rich snippets) i budowania zaufania. Google nie może wyświetlić gwiazdek recenzji w SERP bez AggregateRating.
**Wpływ:** AEO (widoczność w wynikach), SEO (klikalność)
**Lokalizacja:** Na końcu komponentu, przed zamknięciem `</section>`

**Obecny kod:**
```tsx
        </div>
      </div>
    </section>
  )
}
```

**Zmieniony kod:**
```tsx
        </div>
      </div>
      {/* Strukturalne dane dla wyszukiwarek */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Pol-Gaz",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "ul. Przykładowa 123",
                  "addressLocality": "Szczecin",
                  "postalCode": "70-001",
                  "addressCountry": "PL"
                },
                "telephone": "+48 123 456 789",
                "url": "https://www.pol-gaz.com"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5.0",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Klient Pol-Gaz"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Google"
              },
              "description": "Prawdziwe opinie z Google My Business firmy Pol-Gaz, specjalisty od serwisu kotłów gazowych w Szczecinie."
            },
            {
              "@context": "https://schema.org",
              "@type": "AggregateRating",
              "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Pol-Gaz",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "ul. Przykładowa 123",
                  "addressLocality": "Szczecin",
                  "postalCode": "70-001",
                  "addressCountry": "PL"
                },
                "telephone": "+48 123 456 789",
                "url": "https://www.pol-gaz.com"
              },
              "ratingValue": "5.0",
              "bestRating": "5",
              "ratingCount": "47",
              "reviewCount": "47"
            }
          ])
        }}
      />
    </section>
  )
}
```
**Wyjaśnienie:** Dwa schematy JSON-LD (Review i AggregateRating) umożliwiają Google wyświetlenie gwiazdek recenzji w wynikach wyszukiwania, zwiększając klikalność. Dane adresu i telefonu należy uzupełnić zgodnie z rzeczywistymi danymi firmy.

---
### Zmiana #2: Optymalizacja nagłówka h2 pod SEO i GEO — 🟡 HIGH
**Problem:** Nagłówek h2 "Opinie naszych klientów z Google" jest zbyt ogólny, nie zawiera głównego słowa kluczowego "serwis kotłów szczecin" ani nie precyzuje specjalizacji firmy. To ogranicza jego wartość SEO i cytowalność przez AI.
**Wpływ:** SEO (ranking słów kluczowych), GEO (precyzja informacji)
**Lokalizacja:** Linia ~8

**Obecny kod:**
```tsx
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">
          Opinie naszych klientów z Google
        </h2>
```

**Zmieniony kod:**
```tsx
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">
          Opinie klientów o serwisie kotłów POL-GAZ w Szczecinie
        </h2>
```
**Wyjaśnienie:** Nowy nagłówek zawiera kluczowe słowa "serwis kotłów", "POL-GAZ" i "Szczecin", co bezpośrednio odpowiada na intencje wyszukiwania użytkowników. Jest bardziej opisowy i stanowi lepszy anchor dla cytowań przez AI.

---
### Zmiana #3: Przekształcenie opisu na faktograficzny i dodanie kontekstu — 🔵 MEDIUM
**Problem:** Obecny opis zawiera marketingowe wezwanie do działania ("sprawdź") i nieprecyzyjne powiązanie doświadczenia z opiniami. Brakuje konkretnego roku rozpoczęcia działalności (1994) oraz kontekstu lokalnego i specjalizacji, co obniża cytowalność przez AI.
**Wpływ:** GEO (wiarygodność faktów), AEO (kompletność informacji)
**Lokalizacja:** Linia ~12

**Obecny kod:**
```tsx
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Prawdziwe opinie z Google My Business - sprawdź co mówią o nas klienci z <strong>31-letnim</strong> doświadczeniem
        </p>
```

**Zmieniony kod:**
```tsx
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Poniższe recenzje pochodzą z oficjalnego profilu Google My Business firmy Pol-Gaz, która specjalizuje się w serwisie kotłów gazowych (m.in. Beretta) w Szczecinie i działa na rynku od 1994 roku.
        </p>
```
**Wyjaśnienie:** Nowy tekst jest czysto informacyjny. Podaje konkretny rok rozpoczęcia działalności, lokalizację (Szczecin) i specjalizację (serwis kotłów, Beretta), co stanowi wartościowe, cytowalne fakty dla AI i odpowiada na potencjalne pytania użytkowników.

---
### Zmiana #4: Semantyczna i faktograficzna prezentacja statystyk — 🔵 MEDIUM
**Problem:** Statystyki są prezentowane w niesemantycznych `<div>`, bez nagłówka opisującego grupę. Teksty "Zadowolonych klientów" i "Lat budowania zaufania" są subiektywne i marketingowe, co AI może ignorować. Brakuje kontekstu dla liczby "47+" oraz definicji "średniej ocen Google".
**Wpływ:** GEO (cytowalność faktów), SEO (semantyka), A11y (dostępność)
**Lokalizacja:** Linie ~22-40

**Obecny kod:**
```tsx
          <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">5.0</div>
              <div className="text-yellow-400 text-xl mb-1">★★★★★</div>
              <div className="text-gray-600">Średnia ocen Google</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">47+</div>
              <div className="text-gray-600">Zadowolonych klientów</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">31</div>
              <div className="text-gray-600">Lat budowania zaufania</div>
            </div>
          </div>
```

**Zmieniony kod:**
```tsx
          <h3 className="sr-only">Statystyki zaufania klientów</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center mb-6" role="group" aria-labelledby="stats-heading">
            <div role="listitem">
              <div className="text-3xl font-bold text-blue-900 mb-2">5.0</div>
              <div className="text-yellow-400 text-xl mb-1" aria-label="5 gwiazdek">★★★★★</div>
              <div className="text-gray-600">Średnia ocen Google</div>
              <p className="text-xs text-gray-500 mt-1">(Skala: 1-5 gwiazdek)</p>
            </div>
            <div role="listitem">
              <div className="text-3xl font-bold text-blue-900 mb-2">47+</div>
              <div className="text-gray-600">Pozytywnych opinii w Google</div>
            </div>
            <div role="listitem">
              <div className="text-3xl font-bold text-blue-900 mb-2">31</div>
              <div className="text-gray-600">Lat doświadczenia na rynku</div>
              <p className="text-xs text-gray-500 mt-1">(od 1994 roku)</p>
            </div>
          </div>
```
**Wyjaśnienie:** Dodano semantyczny nagłówek `h3` (ukryty wizualnie) oraz role ARIA (`group`, `listitem`) dla lepszej dostępności. Zastąpiono marketingowe sformułowania obiektywnymi faktami ("Pozytywnych opinii", "Lat doświadczenia"). Dodano wyjaśnienia w małym druku, które są wysoce cytowalne przez AI (definicja skali, konkretny rok).

---
### Zmiana #5: Bezpieczeństwo linku zewnętrznego i dostępność ikony — 🔵 MEDIUM
**Problem:** Link do dodania opinii na Google nie ma atrybutu `rel="noopener noreferrer"`, co jest luką w bezpieczeństwie. Ikona SVG wewnątrz linka nie ma atrybutu `aria-hidden="true"`, co może powodować zbędne ogłoszenia przez czytniki ekranu.
**Wpływ:** SEO (bezpieczeństwo), A11y (dostępność)
**Lokalizacja:** Linie ~44 i ~45

**Obecny kod:**
```tsx
            <a 
              href="https://g.page/r/CXoLzRTb2935EAE/review" 
              target="_blank"
              className="inline-flex items-center bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Oceń nas na Google
            </a>
```

**Zmieniony kod:**
```tsx
            <a 
              href="https://g.page/r/CXoLzRTb2935EAE/review" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Oceń nas na Google
            </a>
```
**Wyjaśnienie:** `rel="noopener noreferrer"` zapobiega atakom typu tabnabbing. `aria-hidden="true"` na ikonie SVG informuje czytniki ekranu, aby ją zignorowały, ponieważ jej znaczenie jest już przekazane przez widoczny tekst "Oceń nas na Google".

---

## GOTOWE SCHEMATY JSON-LD (wklej dokładnie jak są)

```json
[
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Pol-Gaz",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ul. Przykładowa 123",
        "addressLocality": "Szczecin",
        "postalCode": "70-001",
        "addressCountry": "PL"
      },
      "telephone": "+48 123 456 789",
      "url": "https://www.pol-gaz.com"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5.0",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Klient Pol-Gaz"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Google"
    },
    "description": "Prawdziwe opinie z Google My Business firmy Pol-Gaz, specjalisty od serwisu kotłów gazowych w Szczecinie."
  },
  {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Pol-Gaz",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ul. Przykładowa 123",
        "addressLocality": "Szczecin",
        "postalCode": "70-001",
        "addressCountry": "PL"
      },
      "telephone": "+48 123 456 789",
      "url": "https://www.pol-gaz.com"
    },
    "ratingValue": "5.0",
    "bestRating": "5",
    "ratingCount": "47",
    "reviewCount": "47"
  }
]
```
**Uwaga:** W powyższych schematach należy zastąpić dane `address` i `telephone` rzeczywistymi danymi firmy Pol-Gaz.

---

## CHECKLIST PO ZMIANACH
- [ ] Kod się kompiluje bez błędów TypeScript
- [ ] Jest dokładnie 0 znacznik `<h1>` w tym komponencie
- [ ] Hierarchia nagłówków jest sekwencyjna (h2 -> h3)
- [ ] Wszystkie obrazy mają atrybut alt (dotyczy komponentu ShapoReviews, którego nie modyfikujemy)
- [ ] Linki zewnętrzne mają rel="noopener noreferrer" (dodano)
- [ ] JSON-LD jest wstawiony w odpowiednim miejscu (na końcu sekcji)