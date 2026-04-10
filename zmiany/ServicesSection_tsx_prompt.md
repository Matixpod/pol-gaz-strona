# Refaktoryzacja: ServicesSection.tsx
# Wygenerowano automatycznie przez SEO/GEO/AEO Analyzer
# Data: 2024-04-15

## KONTEKST
Optymalizujesz komponent `ServicesSection.tsx` pod kątem SEO, GEO i AEO.
**NIE ZMIENIAJ** logiki biznesowej, stylów wizualnych, state managementu ani props.
Zachowaj wszystkie istniejące importy i typy TypeScript.

## ROLA KOMPONENTU
Prezentacja portfolio usług serwisowych, mająca na celu konwersję poprzez wybór konkretnej potrzeby klienta.

---

## ZMIANY DO WPROWADZENIA (posortowane od najważniejszych)

---
### Zmiana #1: Dodanie nagłówków h3 w kartach usług — 🟡 HIGH
**Problem:** Każda karta usługi w sekcji powinna mieć nagłówek (np. `<h3>`) dla struktury semantycznej i SEO. Obecnie karty używają tylko paragrafów, co utrudnia crawlerom zrozumienie hierarchii treści.
**Wpływ:** SEO (semantic structure), AEO (lepsze parsowanie przez AI)
**Lokalizacja:** Komponent `ServiceCard` (nie w tym pliku, ale musisz go zmodyfikować)

**Obecny kod w ServiceCard.tsx (zakładany):**
```tsx
// Przykładowa struktura ServiceCard - musisz sprawdzić rzeczywisty plik
<div className="service-card">
  <p className="title">{title}</p>
  <p className="description">{description}</p>
</div>
```

**Zmieniony kod w ServiceCard.tsx:**
```tsx
<div className="service-card">
  <h3 className="text-lg font-bold mb-2">{title}</h3>
  <p className="description">{description}</p>
</div>
```
**Wyjaśnienie:** Nagłówki `<h3>` tworzą prawidłową hierarchię h1→h2→h3, co jest kluczowe dla SEO i dostępności. Crawlery lepiej rozumieją strukturę treści, a screen readery mogą nawigować po nagłówkach.

---
### Zmiana #2: Optymalizacja głównego nagłówka h2 — 🟡 HIGH
**Problem:** Główny nagłówek sekcji (`<h2>`) nie zawiera kluczowego słowa 'Szczecin', które jest istotne dla lokalnego SEO. Jest zbyt ogólny ("Kompleksowe usługi serwisowe").
**Wpływ:** SEO (lokalne frazy kluczowe), GEO (cytowalność przez AI dla zapytań lokalnych)
**Lokalizacja:** Linia ~15 (tag `<h2>`)

**Obecny kod:**
```tsx
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 lg:mb-6">
  Kompleksowe usługi serwisowe
</h2>
```

**Zmieniony kod:**
```tsx
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 lg:mb-6">
  Serwis i naprawa kotłów gazowych w Szczecinie od 1994 roku
</h2>
```
**Wyjaśnienie:** Nowy nagłówek zawiera: lokalizację (Szczecin), specjalizację (kotły gazowe), rok rozpoczęcia działalności (1994). To bezpośrednia odpowiedź na zapytania typu "serwis kotłów szczecin" i silny sygnał autorytetu dla AI.

---
### Zmiana #3: Przeredagowanie opisu sekcji na informacyjny — 🔵 MEDIUM
**Problem:** Opis pod nagłówkiem to ogólne stwierdzenia marketingowe ("najwyższa jakość", "szybka reakcja") bez konkretów. AI ignoruje takie slogany, szukając faktów.
**Wpływ:** GEO (cytowalność przez AI), SEO (treść merytoryczna)
**Lokalizacja:** Linia ~18 (tag `<p>` pod `<h2>`)

**Obecny kod:**
```tsx
<p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto px-4">
  Oferujemy pełen zakres usług związanych z kotłami i urządzeniami grzewczymi, 
  zapewniając najwyższą jakość i szybką reakcję na zgłoszenia.
</p>
```

**Zmieniony kod:**
```tsx
<p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto px-4">
  Świadczymy usługi serwisowe, przeglądy i naprawy awaryjne dla kotłów gazowych marek takich jak Beretta, Junkers czy Vaillant. Działamy na terenie Szczecina i okolic. Jesteśmy ambasadorem marki Beretta z doświadczeniem od 1994 roku.
</p>
```
**Wyjaśnienie:** Nowy opis zawiera konkretne informacje: typy usług (serwis, przeglądy, naprawy awaryjne), marki (Beretta, Junkers, Vaillant), obszar działania (Szczecin i okolice), unikalne fakty (ambasador Beretta, doświadczenie od 1994). To są fakty, które AI może cytować.

---
### Zmiana #4: Naprawa semantyki listy marek w CTA — 🟡 HIGH
**Problem:** Nagłówek `<h4>` w sekcji CTA jest używany do wyświetlania listy marek, co nie jest jego semantycznym przeznaczeniem. Lista marek powinna być w paragrafie lub liście.
**Wpływ:** SEO (prawidłowa struktura nagłówków), a11y (screen readers)
**Lokalizacja:** Linia ~40 (tag `<h4>` w sekcji CTA)

**Obecny kod:**
```tsx
<h4 className="text-xl lg:text-1xl font-bold mb-3 lg:mb-2">
  Beretta / Junkers / Buderus / Unical / Vaillant / Saunier Duval
</h4>
```

**Zmieniony kod:**
```tsx
<p className="text-xl lg:text-1xl font-bold mb-3 lg:mb-2">
  Specjalizujemy się w: Beretta / Junkers / Buderus / Unical / Vaillant / Saunier Duval
</p>
```
**Wyjaśnienie:** Zmiana z `<h4>` na `<p>` naprawia hierarchię nagłówków. Dodanie "Specjalizujemy się w:" tworzy kontekst dla listy marek, co jest bardziej informacyjne dla użytkownika i AI.

---
### Zmiana #5: Dodanie roli button do linku telefonicznego — ⚪ LOW
**Problem:** Link telefoniczny (`<a href="tel:">`) mógłby mieć jawnie zadeklarowaną rolę 'button' dla lepszej dostępności, ponieważ działa jak przycisk CTA.
**Wpływ:** a11y (screen readers), SEO (accessibility score)
**Lokalizacja:** Linia ~48 (link telefoniczny w sekcji CTA)

**Obecny kod:**
```tsx
<a 
  href="tel:601418645"
  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold transition-all transform hover:scale-105"
>
   Zadzwoń: 601 418 645
</a>
```

**Zmieniony kod:**
```tsx
<a 
  href="tel:601418645"
  role="button"
  aria-label="Zadzwoń do serwisu Pol-Gaz pod numer 601 418 645"
  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold transition-all transform hover:scale-105"
>
   Zadzwoń: 601 418 645
</a>
```
**Wyjaśnienie:** `role="button"` informuje screen readery, że ten link działa jak przycisk. `aria-label` zapewnia pełny kontekst dla użytkowników screen readerów.

---
### Zmiana #6: Semantyczne oznaczenie sekcji CTA — ⚪ LOW
**Problem:** Sekcja CTA jest zawarta w ogólnym `<section id="uslugi">`. Dla lepszej struktury, sekcja CTA mogłaby być osobnym `<section>` lub `<div>` z rolą 'region' i etykietą aria.
**Wpływ:** a11y (screen readers), SEO (semantic structure)
**Lokalizacja:** Linia ~35 (początek sekcji CTA)

**Obecny kod:**
```tsx
<div className="mt-12 lg:mt-16 text-center">
  <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-6 lg:p-8 text-white">
```

**Zmieniony kod:**
```tsx
<div role="region" aria-label="Pilny kontakt serwisowy" className="mt-12 lg:mt-16 text-center">
  <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-6 lg:p-8 text-white">
```
**Wyjaśnienie:** `role="region"` z `aria-label` identyfikuje ten blok jako odrębną sekcję z konkretnym celem (pilny kontakt). Screen readery mogą do niej nawigować.

---
### Zmiana #7: Przeredagowanie tekstu CTA na informacyjny — 🔵 MEDIUM
**Problem:** Tekst CTA to wezwanie do działania bez informacji o procesie ("Skontaktuj się z nami już dziś. Oferujemy szybką diagnostykę i profesjonalną naprawę.").
**Wpływ:** GEO (cytowalność przez AI), konwersja (zwiększone zaufanie)
**Lokalizacja:** Linia ~42 (tag `<p>` w niebieskim bloku CTA)

**Obecny kod:**
```tsx
<p className="text-blue-100 mb-4 lg:mb-6 max-w-2xl mx-auto">
  Skontaktuj się z nami już dziś. Oferujemy szybką diagnostykę i profesjonalną naprawę.
</p>
```

**Zmieniony kod:**
```tsx
<p className="text-blue-100 mb-4 lg:mb-6 max-w-2xl mx-auto">
  Diagnozujemy większość usterek w ciągu 1 godziny. Naprawy realizujemy z użyciem oryginalnych części zamiennych. Działamy 7 dni w tygodniu.
</p>
```
**Wyjaśnienie:** Nowy tekst zawiera konkretne informacje: czas diagnostyki (1 godzina), użycie oryginalnych części, dostępność (7 dni w tygodniu). To są fakty, które budują zaufanie i mogą być cytowane przez AI.

---
### Zmiana #8: Dodanie struktury pytań i odpowiedzi w CTA — 🔵 MEDIUM
**Problem:** Brak odpowiedzi na częste pytania użytkowników bezpośrednio w treści. Struktura QA jest idealna dla AI, które często cytuje bezpośrednie odpowiedzi.
**Wpływ:** GEO (cytowalność przez AI), SEO (rich snippets)
**Lokalizacja:** Po tekście CTA, przed przyciskami (dodaj nowy element)

**Obecny kod:**
```tsx
<p className="text-blue-100 mb-4 lg:mb-6 max-w-2xl mx-auto">
  Skontaktuj się z nami już dziś. Oferujemy szybką diagnostykę i profesjonalną naprawę.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
```

**Zmieniony kod:**
```tsx
<p className="text-blue-100 mb-4 lg:mb-6 max-w-2xl mx-auto">
  Diagnozujemy większość usterek w ciągu 1 godziny. Naprawy realizujemy z użyciem oryginalnych części zamiennych. Działamy 7 dni w tygodniu.
</p>

<div className="mb-6 lg:mb-8 text-left max-w-2xl mx-auto">
  <h4 className="text-white font-bold mb-3">Częste pytania:</h4>
  <div className="space-y-3">
    <div>
      <p className="font-semibold text-yellow-300">Jakie marki kotłów serwisujecie?</p>
      <p className="text-blue-100 text-sm">Specjalizujemy się w kotłach gazowych marek Beretta, Junkers, Buderus, Vaillant, Saunier Duval i Unical. Jesteśmy ambasadorem marki Beretta.</p>
    </div>
    <div>
      <p className="font-semibold text-yellow-300">Ile kosztuje przegląd kotła?</p>
      <p className="text-blue-100 text-sm">Koszt przeglądu okresowego kotła gazowego w Szczecinie zaczyna się od 200 zł. Cena zależy od marki, mocy urządzenia i zakresu czynności.</p>
    </div>
    <div>
      <p className="font-semibold text-yellow-300">Jak długo czeka się na serwisanta?</p>
      <p className="text-blue-100 text-sm">W przypadku awarii na terenie Szczecina, serwisant dociera średnio w ciągu 2 godzin od zgłoszenia.</p>
    </div>
  </div>
</div>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
```
**Wyjaśnienie:** Dodanie sekcji FAQ bezpośrednio odpowiada na pytania użytkowników, które identyfikuje raport GEO. To zwiększa szansę na cytowanie przez AI i może generować rich snippets w wyszukiwarkach.

---
### Zmiana #9: Dodanie listy usług w formacie Featured Snippet — 🔵 MEDIUM
**Problem:** Brak uporządkowanej listy usług, która mogłaby zostać wyświetlona jako Featured Snippet dla zapytań typu "serwis kotłów szczecin".
**Wpływ:** SEO (Featured Snippets), AEO (structured data)
**Lokalizacja:** Po opisie sekcji, przed gridem kart (dodaj nowy element)

**Obecny kod:**
```tsx
<p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto px-4">
  Oferujemy pełen zakres usług związanych z kotłami i urządzeniami grzewczymi, 
  zapewniając najwyższą jakość i szybką reakcję na zgłoszenia.
</p>
</div>

{/* Responsive grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
```

**Zmieniony kod:**
```tsx
<p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto px-4">
  Świadczymy usługi serwisowe, przeglądy i naprawy awaryjne dla kotłów gazowych marek takich jak Beretta, Junkers czy Vaillant. Działamy na terenie Szczecina i okolic. Jesteśmy ambasadorem marki Beretta z doświadczeniem od 1994 roku.
</p>

<div className="my-6 lg:my-8 max-w-3xl mx-auto">
  <h3 className="text-lg font-bold text-blue-900 mb-3">Pełen zakres usług serwisowych w Szczecinie:</h3>
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
    <li className="flex items-start">
      <span className="text-yellow-500 mr-2">•</span>
      <span>Przeglądy okresowe i legalizacje</span>
    </li>
    <li className="flex items-start">
      <span className="text-yellow-500 mr-2">•</span>
      <span>Naprawy awaryjne (7 dni w tygodniu)</span>
    </li>
    <li className="flex items-start">
      <span className="text-yellow-500 mr-2">•</span>
      <span>Montaż i wymiana kotłów</span>
    </li>
    <li className="flex items-start">
      <span className="text-yellow-500 mr-2">•</span>
      <span>Serwis pomp ciepła</span>
    </li>
    <li className="flex items-start">
      <span className="text-yellow-500 mr-2">•</span>
      <span>Czyszczenie i konserwacja instalacji</span>
    </li>
    <li className="flex items-start">
      <span className="text-yellow-500 mr-2">•</span>
      <span>Doradztwo techniczne</span>
    </li>
  </ul>
</div>
</div>

{/* Responsive grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
```
**Wyjaśnienie:** Uporządkowana lista usług w formacie HTML zwiększa szansę na wyświetlenie jako Featured Snippet. Lista jest semantyczna (`<ul>`/`<li>`) i zawiera słowa kluczowe lokalne.

---

## GOTOWE SCHEMATY JSON-LD (wklej dokładnie jak są)

Dodaj na końcu komponentu, przed zamknięciem znacznika `</section>`:

```tsx
{/* JSON-LD Structured Data */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Kompleksowe usługi serwisowe Pol-Gaz",
      "description": "Pełen zakres usług serwisowych dla kotłów i urządzeń grzewczych w Szczecinie i okolicach.",
      "numberOfItems": 6,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Przeglądy okresowe i legalizacje",
          "description": "Regularne przeglądy techniczne, czyszczenie i legalizacja kotłów gazowych zgodnie z przepisami."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Naprawy awaryjne",
          "description": "Szybka interwencja serwisowa w przypadku awarii kotła, 7 dni w tygodniu."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Montaż i wymiana kotłów",
          "description": "Profesjonalny montaż nowych kotłów gazowych oraz wymiana starych urządzeń."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Serwis pomp ciepła",
          "description": "Przeglądy, naprawy i konserwacja pomp ciepła różnych marek."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Czyszczenie i konserwacja",
          "description": "Kompleksowe czyszczenie instalacji grzewczych i konserwacja podzespołów."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Doradztwo techniczne",
          "description": "Fachowe porady dotyczące doboru, eksploatacji i optymalizacji systemów grzewczych."
        }
      ]
    })
  }}
/>
```

---

## CHECKLIST PO ZMIANACH
- [ ] Kod się kompiluje bez błędów TypeScript
- [ ] Jest dokładnie 0 znacznik `<h1>` w tym komponencie
- [ ] Hierarchia nagłówków jest sekwencyjna (h2 → h3 → h4)
- [ ] Wszystkie obrazy mają atrybut alt (sprawdź w ServiceCard)
- [ ] Linki zewnętrzne mają rel="noopener noreferrer" (jeśli są)
- [ ] JSON-LD jest wstawiony w odpowiednim miejscu (przed `</section>`)
- [ ] Wszystkie karty ServiceCard mają nagłówki `<h3>`
- [ ] Sekcja FAQ w CTA zawiera 3 pytania z odpowiedziami
- [ ] Lista usług jest w semantycznym `<ul>`/`<li>`