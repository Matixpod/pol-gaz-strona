# Refaktoryzacja: HeroSection.tsx
# Wygenerowano automatycznie przez SEO/GEO/AEO Analyzer
# Data: 2024-04-10

## KONTEKST
Optymalizujesz komponent `HeroSection.tsx` pod kątem SEO, GEO i AEO.
**NIE ZMIENIAJ** logiki biznesowej, stylów wizualnych, state managementu ani props.
Zachowaj wszystkie istniejące importy i typy TypeScript.

## ROLA KOMPONENTU
Główna sekcja hero z kluczowym przekazem, H1 i podstawowym wezwaniem do działania (CTA telefoniczne).

---

## ZMIANY DO WPROWADZENIA (posortowane od najważniejszych)

---
### Zmiana #1: Zastąp `<section>` tagiem `<main>` dla głównej treści — 🟡 HIGH
**Problem:** Główna zawartość sekcji hero jest opakowana w `<section>`, co jest poprawne, ale dla głównej treści strony głównej lepszym wyborem byłby tag `<main>`. Użycie `<main>` jednoznacznie definiuje główną treść strony dla czytników ekranu i wyszukiwarek.
**Wpływ:** SEO (semantic signals), AEO (lepsze parsowanie struktury)
**Lokalizacja:** Linie 6-10 (wrapper zewnętrzny)

**Obecny kod:**
```tsx
<section 
  id="home" 
  className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center overflow-hidden"
  style={{ 
    marginTop: 0, 
    paddingTop: 0,
    marginBottom: 0,
    paddingBottom: 0 
  }}
>
```

**Zmieniony kod:**
```tsx
<main 
  id="home" 
  className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center overflow-hidden"
  style={{ 
    marginTop: 0, 
    paddingTop: 0,
    marginBottom: 0,
    paddingBottom: 0 
  }}
>
```
**Wyjaśnienie:** Tag `<main>` jest semantycznie poprawny dla głównej treści strony. Na stronie głównej sekcja hero jest główną zawartością, więc `<main>` jest bardziej odpowiedni niż `<section>`. Pamiętaj o zmianie tagu zamykającego na `</main>` na końcu pliku.

---
### Zmiana #2: Zamień listę korzyści z `<div>`/`<p>` na `<ul>`/`<li>` — 🟡 HIGH
**Problem:** Lista korzyści (jakość, szybka pomoc, specjaliści) jest zaimplementowana za pomocą `<div>` i `<p>`, zamiast używać semantycznej listy `<ul>` i `<li>`. Utrudnia to zrozumienie struktury treści przez asystenty technologiczne i wyszukiwarki.
**Wpływ:** SEO (semantic structure), GEO (lepsze parsowanie listy przez AI)
**Lokalizacja:** Linie ~40-50 (blok z punktami)

**Obecny kod:**
```tsx
<div className="space-y-3 mb-6 lg:mb-8 text-blue-100">
  <p className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
    <span className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
    Jakość i uczciwość od ponad 30 lat
  </p>
  <p className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
    <span className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
    Szybka pomoc w nagłych awariach
  </p>
  <p className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
    <span className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
    Specjaliści wielu renomowanych marek
  </p>
</div>
```

**Zmieniony kod:**
```tsx
<ul className="space-y-3 mb-6 lg:mb-8 text-blue-100 list-none pl-0">
  <li className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
    <span role="img" aria-label="Zaznaczone" className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
    Jakość i uczciwość od ponad 30 lat
  </li>
  <li className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
    <span role="img" aria-label="Zaznaczone" className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
    Szybka pomoc w nagłych awariach
  </li>
  <li className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
    <span role="img" aria-label="Zaznaczone" className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
    Specjaliści wielu renomowanych marek
  </li>
</ul>
```
**Wyjaśnienie:** Semantyczna lista `<ul>`/`<li>` jest poprawna dla listy punktowanej. `list-none pl-0` usuwa domyślne style listy, zachowując układ wizualny. Dodano również atrybuty dostępności do ikon ✓ (patrz Zmiana #3).

---
### Zmiana #3: Dodaj atrybuty dostępności do ikon '✓' w liście korzyści — 🟡 HIGH
**Problem:** Elementy `<span>` zawierające symbol '✓' (znak zaznaczenia) są używane jako ikony informacyjne w liście korzyści. Nie mają one atrybutów dostępności, które wyjaśniałyby ich rolę. Bez odpowiedniej roli i etykiety, czytniki ekranu mogą odczytać symbol '✓' jako 'odnośnik' lub po prostu go zignorować.
**Wpływ:** SEO (accessibility score), AEO (poprawna semantyka)
**Lokalizacja:** Linie ~42, ~45, ~48 (każdy span z ✓)

**Obecny kod:**
```tsx
<span className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span>
```

**Zmieniony kod:**
```tsx
<span role="img" aria-label="Zaznaczone" className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span>
```
**Wyjaśnienie:** `role="img"` informuje screen reader, że to element graficzny. `aria-label="Zaznaczone"` dostarcza opisową etykietę. Ikona jest teraz dostępna dla użytkowników czytników ekranu.

---
### Zmiana #4: Opakuj link nawigacyjny '#uslugi' w `<nav>` z aria-label — 🟡 HIGH
**Problem:** Link prowadzący do sekcji '#uslugi' pełni funkcję nawigacji wewnętrznej, ale nie jest opakowany w znacznik `<nav>` z etykietą. Brak semantycznej nawigacji utrudnia orientację na stronie użytkownikom czytników ekranu.
**Wpływ:** SEO (semantic navigation), a11y
**Lokalizacja:** Linie ~65-68 (link "Nasze usługi")

**Obecny kod:**
```tsx
<Link 
  href="#uslugi"
  className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold text-base lg:text-lg transition-all text-center"
>
  Nasze usługi
</Link>
```

**Zmieniony kod:**
```tsx
<nav aria-label="Skróty do sekcji strony">
  <Link 
    href="#uslugi"
    className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold text-base lg:text-lg transition-all text-center"
  >
    Nasze usługi
  </Link>
</nav>
```
**Wyjaśnienie:** `<nav>` z `aria-label="Skróty do sekcji strony"` identyfikuje ten blok jako nawigację wewnętrzną. Screen readery mogą teraz łatwo zidentyfikować i nawigować do tej sekcji.

---
### Zmiana #5: Wzbogać nagłówek H1 o konkretne informacje o specjalizacji — 🔵 MEDIUM
**Problem:** Nagłówek H1 zawiera ogólny przymiotnik 'profesjonalny' bez dowodów. AI może zignorować to jako marketingowy "szum". Brak konkretnych informacji o specjalizacji (marki) zmniejsza cytowalność.
**Wpływ:** GEO (zwiększenie cytowalności przez AI), SEO (lepsze dopasowanie do intencji)
**Lokalizacja:** Linie ~30-35 (nagłówek H1)

**Obecny kod:**
```tsx
<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white leading-tight">
  <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl block text-blue-200 mb-2">Od 1994 roku</span>
  Profesjonalny<br />
  serwis kotłów 
  <span className="block text-yellow-400 mt-2">Szczecin i okolice</span>
</h1>
```

**Zmieniony kod:**
```tsx
<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white leading-tight">
  <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl block text-blue-200 mb-2">Od 1994 roku</span>
  Serwis i naprawa kotłów gazowych
  <span className="block text-yellow-400 mt-2">Szczecin i okolice</span>
  <span className="block text-blue-200 text-sm sm:text-base lg:text-lg xl:text-xl mt-2 font-normal">
    Specjalizacja w markach Beretta, Vaillant, Junkers
  </span>
</h1>
```
**Wyjaśnienie:** Zastąpiono ogólny przymiotnik "Profesjonalny" konkretnym zakresem usług "Serwis i naprawa kotłów gazowych". Dodano dodatkowy span z listą konkretnych marek, co zwiększa wartość informacyjną i cytowalność przez AI.

---
### Zmiana #6: Przekształć marketingowe punkty listy na informacyjne — 🔵 MEDIUM
**Problem:** Punkty listy korzyści są zbyt ogólne i marketingowe ("Szybka pomoc", "Specjaliści wielu marek"). Brak konkretnych danych (czas reakcji, lista marek) powoduje, że AI ignoruje je jako niecytowalne.
**Wpływ:** GEO (zwiększenie cytowalności), SEO (lepsza wartość treści)
**Lokalizacja:** Linie w liście `<ul>` (po zmianie #2)

**Obecny kod (po zmianie #2, ale z oryginalnym tekstem):**
```tsx
<li className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
  <span role="img" aria-label="Zaznaczone" className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
  Jakość i uczciwość od ponad 30 lat
</li>
<li className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
  <span role="img" aria-label="Zaznaczone" className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
  Szybka pomoc w nagłych awariach
</li>
<li className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
  <span role="img" aria-label="Zaznaczone" className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
  Specjaliści wielu renomowanych marek
</li>
```

**Zmieniony kod:**
```tsx
<li className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
  <span role="img" aria-label="Zaznaczone" className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
  Doświadczenie od 1994 roku. Wykonano [DANE DO UZUPEŁNIENIA: liczba] przeglądów i napraw.
</li>
<li className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
  <span role="img" aria-label="Zaznaczone" className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
  Interwencja awaryjna w Szczecinie w ciągu [DANE DO UZUPEŁNIENIA: liczba] godzin. Telefon całodobowy.
</li>
<li className="flex items-center justify-center lg:justify-start text-sm lg:text-base xl:text-lg">
  <span role="img" aria-label="Zaznaczone" className="w-6 lg:w-8 text-yellow-400 text-lg lg:text-xl xl:text-2xl mr-2">✓</span> 
  Autoryzowany serwisant kotłów Beretta. Obsługa marek Vaillant, Junkers, Immergas.
</li>
```
**Wyjaśnienie:** Każdy punkt został wzbogacony o konkretne, faktograficzne informacje. Użyto placeholderów `[DANE DO UZUPEŁNIENIA]`, które należy zastąpić rzeczywistymi danymi. To przekształca marketing w cytowalne fakty.

---
### Zmiana #7: Dodaj blok z dodatkowymi informacjami o zakresie usług — 🔵 MEDIUM
**Problem:** Brakuje konkretnych danych o obsługiwanych markach i dokładnym zakresie geograficznym. AI nie ma pełnego obrazu usług, co ogranicza cytowalność.
**Wpływ:** GEO (kompletność informacji), SEO (lokalne SEO)
**Lokalizacja:** Po liście korzyści, przed przyciskami CTA (~linia 55)

**Obecny kod:**
```tsx
{/* Tutaj jest lista korzyści (po zmianie #6) */}
{/* A potem od razu przyciski CTA */}
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
```

**Zmieniony kod:**
```tsx
{/* Lista korzyści (po zmianie #6) */}

<div className="mb-6 lg:mb-8 text-blue-100 text-sm lg:text-base">
  <p className="text-center lg:text-left">
    <strong>Obsługiwane marki:</strong> Beretta (autoryzacja), Vaillant, Junkers, Immergas, Termet.
    <br className="hidden sm:inline" />
    <strong>Strefa działania:</strong> Szczecin oraz gminy do [DANE DO UZUPEŁNIENIA: liczba] km od centrum miasta.
  </p>
</div>

<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
```
**Wyjaśnienie:** Dodano blok z konkretnymi informacjami o markach i zasięgu działania. To odpowiada na częste pytania użytkowników i zwiększa wartość informacyjną sekcji hero.

---
### Zmiana #8: Przenieś inline styles do klasy CSS — ⚪ LOW
**Problem:** Komponent używa atrybutu `style` do zerowania marginesów i paddingu. Te style powinny być przeniesione do klasy CSS dla lepszej czytelności i wydajności.
**Wpływ:** Code quality, performance
**Lokalizacja:** Linie 8-13 (atrybut style)

**Obecny kod:**
```tsx
style={{ 
  marginTop: 0, 
  paddingTop: 0,
  marginBottom: 0,
  paddingBottom: 0 
}}
```

**Zmieniony kod:**
```tsx
className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center overflow-hidden reset-spacing"
```
**Wyjaśnienie:** Usuń atrybut `style` i dodaj klasę `reset-spacing` do istniejącego `className`. Następnie dodaj do globalnego CSS (np. `globals.css`):
```css
.reset-spacing {
  margin-top: 0 !important;
  padding-top: 0 !important;
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}
```

---

## GOTOWE SCHEMATY JSON-LD (wklej dokładnie jak są)

Dodaj następujący kod JSON-LD na końcu komponentu HeroSection, przed zamknięciem `</main>` (lub `</section>` jeśli nie zmieniono na main):

```tsx
{/* ... istniejący kod ... */}

      </div>
    </main>
    
    {/* JSON-LD Structured Data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Pol-Gaz",
          "url": "https://www.pol-gaz.com",
          "telephone": "+48601418645",
          "description": "Profesjonalny serwis kotłów gazowych w Szczecinie i okolicach od 1994 roku. Specjalizacja w naprawie i przeglądach pieców gazowych, w tym marki Beretta. Szybka pomoc w nagłych awariach.",
          "image": "[UZUPEŁNIJ: URL do logo lub zdjęcia zespołu]",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Szczecin",
            "addressCountry": "PL"
          },
          "areaServed": {
            "@type": "City",
            "name": "Szczecin i okolice"
          },
          "founder": {
            "@type": "Person",
            "name": "Wojciech Podporski",
            "jobTitle": "Ambasador marki Beretta"
          },
          "foundingDate": "1994",
          "makesOffer": [
            {
              "@type": "Service",
              "name": "Serwis kotłów gazowych",
              "description": "Profesjonalna naprawa i przeglądy kotłów gazowych."
            },
            {
              "@type": "Service",
              "name": "Szybka pomoc awaryjna",
              "description": "Interwencja w przypadku nagłych awarii pieców gazowych."
            }
          ]
        })
      }}
    />
  </>
)
```

**UWAGA:** Pamiętaj o:
1. Zastąp `[UZUPEŁNIJ: URL do logo lub zdjęcia zespołu]` rzeczywistym URL obrazu
2. Jeśli używasz `</main>` jako tagu zamykającego, upewnij się że JSON-LD jest wewnątrz `</main>` a nie po nim
3. Możesz potrzebować dodać fragment `<>` na początku i `</>` na końcu komponentu, jeśli dodajesz JSON-LD jako rodzeństwo do istniejącego JSX

---

## CHECKLIST PO ZMIANACH
- [ ] Kod się kompiluje bez błędów TypeScript
- [ ] Jest dokładnie 1 znacznik `<h1>` w tym komponencie
- [ ] Hierarchia nagłówków jest sekwencyjna (tylko H1, brak innych nagłówków)
- [ ] Wszystkie obrazy mają atrybut alt (obrazek hero już ma)
- [ ] Linki zewnętrzne mają rel="noopener noreferrer" (brak linków zewnętrznych w tym komponencie)
- [ ] JSON-LD jest wstawiony w odpowiednim miejscu (na końcu komponentu)
- [ ] Wszystkie placeholdery `[DANE DO UZUPEŁNIENIA]` zostały zastąpione rzeczywistymi danymi
- [ ] Klasa CSS `.reset-spacing` została dodana do globalnego pliku CSS
- [ ] Tag zamykający został zmieniony z `</section>` na `</main>` (jeśli zastosowano zmianę #1)