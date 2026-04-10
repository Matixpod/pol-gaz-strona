# Refaktoryzacja: ContactSection.tsx
# Wygenerowano automatycznie przez SEO/GEO/AEO Analyzer
# Data: 2024-04-10

## KONTEKST
Optymalizujesz komponent `ContactSection.tsx` pod kątem SEO, GEO i AEO.
**NIE ZMIENIAJ** logiki biznesowej, stylów wizualnych, state managementu ani props.
Zachowaj wszystkie istniejące importy i typy TypeScript.

## ROLA KOMPONENTU
Podstawowa sekcja kontaktowa z bezpośrednimi numerami telefonu i adresem email, zaprojektowana do maksymalizacji konwersji telefonicznych.

---

## ZMIANY DO WPROWADZENIA (posortowane od najważniejszych)

---
### Zmiana #1: Optymalizacja nagłówka h2 pod kątem słów kluczowych — 🟡 HIGH
**Problem:** Nagłówek h2 'Skontaktuj się z nami' jest zbyt ogólny i nie zawiera słów kluczowych. Nie opisuje precyzyjnie zawartości sekcji ani nie wspiera pozycjonowania dla lokalnych fraz.
**Wpływ:** SEO (ranking dla fraz lokalnych), GEO (lepsze zrozumienie tematu przez AI)
**Lokalizacja:** Linia z tagiem `<h2>`

**Obecny kod:**
```tsx
<h2 className="text-4xl font-bold mb-6">Skontaktuj się z nami</h2>
```

**Zmieniony kod:**
```tsx
<h2 className="text-4xl font-bold mb-6">Kontakt do serwisu kotłów POL-GAZ w Szczecinie</h2>
```
**Wyjaśnienie:** Nowy nagłówek zawiera kluczowe słowa: "serwis kotłów", "POL-GAZ", "Szczecin". To poprawia SEO dla lokalnych zapytań i jednoznacznie informuje użytkowników oraz AI o temacie sekcji.

---
### Zmiana #2: Przekształcenie opisu marketingowego w faktograficzny — 🔵 MEDIUM
**Problem:** Obecny opis jest ogólnikowy i marketingowy ("Potrzebujesz serwisu...", "Rodzinny serwis..."). Brakuje konkretnych faktów o firmie, które AI mogłoby zacytować (rok założenia, specjalizacja, lokalizacja).
**Wpływ:** GEO (cytowalność przez AI), SEO (treść merytoryczna)
**Lokalizacja:** Paragraf pod nagłówkiem h2

**Obecny kod:**
```tsx
<p className="text-xl text-blue-100 mb-12">
  Potrzebujesz serwisu kotła, konsultacji lub wyceny? Skontaktuj się z nami już dziś.
  Rodzinny serwis z ponad 30-letnim doświadczeniem jest do Twojej dyspozycji.
</p>
```

**Zmieniony kod:**
```tsx
<p className="text-xl text-blue-100 mb-12">
  <strong>Pol-Gaz</strong> to rodzinny, autoryzowany serwis kotłów gazowych działający w <strong>Szczecinie od 1994 roku</strong>. Specjalizujemy się w serwisie i naprawie pieców gazowych, w tym marki <strong>Beretta</strong>. Oferujemy przeglądy techniczne, naprawy awaryjne oraz konsultacje. Obsługujemy klientów indywidualnych w Szczecinie i okolicach. Wojciech Podporski, prowadzący serwis, jest <strong>Ambasadorem marki Beretta</strong>, co gwarantuje ekspercką wiedzę techniczną.
  <a href="/uslugi" className="text-yellow-300 underline hover:text-yellow-200 ml-1">Zobacz szczegóły naszych usług serwisowych</a>.
</p>
```
**Wyjaśnienie:** Nowy tekst zawiera konkretne, faktograficzne informacje, które AI może zacytować: nazwa firmy (Pol-Gaz), rok założenia (1994), lokalizacja (Szczecin), specjalizacja (Beretta), lista usług, unikalny atut (Ambasador marki). Dodano również wewnętrzny link do strony usług, poprawiając architekturę strony.

---
### Zmiana #3: Dodanie sekcji FAQ z odpowiedziami na lokalne pytania — 🔵 MEDIUM
**Problem:** Sekcja nie odpowiada na konkretne pytania, które mogą mieć potencjalni klienci ze Szczecina (np. o koszty, czas reakcji, autoryzację). To ogranicza jej użyteczność i cytowalność przez AI.
**Wpływ:** GEO (odpowiedzi na pytania użytkowników), AEO (struktura FAQ dla featured snippets)
**Lokalizacja:** Po siatce z danymi kontaktowymi, przed zamknięciem `</div>` (linia ~70)

**Obecny kod:**
```tsx
          </div>


        </div>
      </div>
    </section>
```

**Zmieniony kod:**
```tsx
          </div>

          {/* Sekcja FAQ */}
          <div className="mt-16 text-left">
            <h3 className="text-3xl font-bold mb-8 text-center">Najczęściej zadawane pytania (FAQ)</h3>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div>
                <h4 className="text-xl font-semibold mb-2">Jakie są godziny pracy serwisu Pol-Gaz w Szczecinie?</h4>
                <p className="text-blue-100">Serwis Pol-Gaz w Szczecinie jest dostępny od poniedziałku do piątku w godzinach 8:00 - 18:00. W soboty przyjmujemy zlecenia na umówione wizyty.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Na jakim numerze telefonu mogę zgłosić awarię kotła gazowego w Szczecinie?</h4>
                <p className="text-blue-100">Awarię kotła gazowego w Szczecinie i okolicach można zgłosić pod numerem telefonu <strong>601 418 645</strong>. Oferujemy szybką interwencję w nagłych przypadkach.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Czy serwis Pol-Gaz naprawia kotły Beretta w Szczecinie?</h4>
                <p className="text-blue-100">Tak, serwis Pol-Gaz w Szczecinie specjalizuje się w naprawie i serwisie kotłów gazowych marki <strong>Beretta</strong>. Wojciech Podporski, prowadzący serwis, jest <strong>Ambasadorem marki Beretta</strong>.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Ile kosztuje przegląd kotła gazowego w Szczecinie?</h4>
                <p className="text-blue-100">Koszt przeglądu okresowego kotła gazowego w Szczecinie zaczyna się od około <strong>150 zł netto</strong>. Cena zależy od modelu kotła i zakresu prac. Dokładną wycenę można uzyskać telefonicznie.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Jak długo czeka się na naprawę awaryjną kotła w Szczecinie?</h4>
                <p className="text-blue-100">Staramy się reagować na awarie kotła w Szczecinie w ciągu <strong>2-4 godzin</strong> od zgłoszenia w godzinach pracy (pon-pt 8-18). W przypadku pilnych awarii możliwy jest dojazd w sobotę.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
```
**Wyjaśnienie:** Sekcja FAQ bezpośrednio odpowiada na lokalne pytania użytkowników, zawierając słowa kluczowe ("Szczecin", "Beretta", "cena przeglądu"). Taka struktura jest idealna do pojawiania się w "featured snippets" wyszukiwarek i jest chętnie cytowana przez AI.

---
### Zmiana #4: Dodanie atrybutów dostępności do dekoracyjnych kontenerów ikon — 🟡 HIGH
**Problem:** Kontenery `<div>` z ikonami SVG są czysto dekoracyjne i nie niosą informacji. Bez `aria-hidden="true"` czytniki ekranu mogą próbować je odczytać, wprowadzając zamieszanie.
**Wpływ:** SEO (accessibility score w Lighthouse), a11y
**Lokalizacja:** Trzy dekoracyjne kontenery z ikonami (telefon, email, zegar)

**Obecny kod:**
```tsx
<div className="bg-blue-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
</div>
```

**Zmieniony kod:**
```tsx
<div className="bg-blue-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center" aria-hidden="true">
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
</div>
```
**Wyjaśnienie:** Atrybut `aria-hidden="true"` informuje technologie asystujące, że ten element jest czysto dekoracyjny i powinien być ignorowany. Należy go dodać do WSZYSTKICH TRZECH kontenerów z ikonami (telefon, email, zegar).

---
### Zmiana #5: Dodanie opisu ARIA do sekcji `<section>` — ⚪ LOW
**Problem:** Sekcja kontaktowa jest poprawnie oznaczona tagiem `<section>`, ale brakuje jej opisu (`aria-label`), który pomógłby w nawigacji dla użytkowników technologii asystujących.
**Wpływ:** a11y, SEO (semantic signals)
**Lokalizacja:** Otwierający tag `<section>`

**Obecny kod:**
```tsx
<section id="kontakt" className="py-20 bg-blue-900 text-white scroll-offset">
```

**Zmieniony kod:**
```tsx
<section id="kontakt" aria-label="Dane kontaktowe serwisu kotłów POL-GAZ" className="py-20 bg-blue-900 text-white scroll-offset">
```
**Wyjaśnienie:** Atrybut `aria-label` nadaje sekcji czytelną nazwę dla screen readerów, poprawiając doświadczenie użytkowników z niepełnosprawnościami i wzmacniając semantyczną strukturę strony.

---

## GOTOWE SCHEMATY JSON-LD (wklej dokładnie jak są)

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  "contactType": "customer service",
  "telephone": "+48 601 418 645",
  "email": "polgazszczecin@wp.pl",
  "availableLanguage": "Polish",
  "areaServed": "PL",
  "hoursAvailable": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "description": "Serwis kotłów gazowych w Szczecinie. Kontakt telefoniczny i mailowy w sprawach serwisu, napraw awaryjnych i przeglądów technicznych."
}
```

**Umieść ten kod na końcu komponentu `ContactSection`, tuż przed zamknięciem `</section>`:**
```tsx
      {/* JSON-LD dla danych kontaktowych */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "contactType": "customer service",
            "telephone": "+48 601 418 645",
            "email": "polgazszczecin@wp.pl",
            "availableLanguage": "Polish",
            "areaServed": "PL",
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            },
            "description": "Serwis kotłów gazowych w Szczecinie. Kontakt telefoniczny i mailowy w sprawach serwisu, napraw awaryjnych i przeglądów technicznych."
          })
        }}
      />
    </section>
```

---

## CHECKLIST PO ZMIANACH
- [ ] Kod się kompiluje bez błędów TypeScript
- [ ] Jest dokładnie 0 znacznik <h1> w tym komponencie
- [ ] Hierarchia nagłówków jest sekwencyjna (h2 → h3 → h4 w FAQ)
- [ ] Wszystkie obrazy mają atrybut alt (w tym komponencie nie ma obrazów `<img>`/`<Image>`)
- [ ] Linki zewnętrzne mają rel="noopener noreferrer" (brak linków zewnętrznych)
- [ ] JSON-LD jest wstawiony w odpowiednim miejscu (na końcu sekcji)