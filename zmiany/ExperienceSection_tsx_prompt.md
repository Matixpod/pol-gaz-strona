# Refaktoryzacja: ExperienceSection.tsx
# Wygenerowano automatycznie przez SEO/GEO/AEO Analyzer
# Data: 2024-04-15

## KONTEKST
Optymalizujesz komponent `ExperienceSection.tsx` pod kątem SEO, GEO i AEO.
**NIE ZMIENIAJ** logiki biznesowej, stylów wizualnych, state managementu ani props.
Zachowaj wszystkie istniejące importy i typy TypeScript.

## ROLA KOMPONENTU
Wizualne podsumowanie kluczowych statystyk firmy (doświadczenie, zasięg, oceny) w formie liczb.

---

## ZMIANY DO WPROWADZENIA (posortowane od najważniejszych)

---
### Zmiana #1: Dodanie nagłówka H2 i etykiety ARIA do sekcji — 🟡 HIGH
**Problem:** Sekcja nie posiada żadnego nagłówka HTML (h2-h6). Liczby i opisy są prezentowane w div-ach, co jest nieoptymalne dla semantyki, dostępności i SEO. Brak nagłówka utrudnia zrozumienie struktury treści przez wyszukiwarki i AI.
**Wpływ:** SEO (semantic signals), GEO (AI lepiej kategoryzuje treść), AEO (lepsze parsowanie)
**Lokalizacja:** Linie 3-6, na początku sekcji.

**Obecny kod:**
```tsx
<section className="py-12 lg:py-2 bg-white">
  <div className="container mx-auto px-4">
    {/* Grid responsywny - 2 kolumny na mobile, 4 na desktop */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 mb-12 lg:mb-2">
```

**Zmieniony kod:**
```tsx
<section className="py-12 lg:py-2 bg-white" aria-label="Statystyki firmy">
  <div className="container mx-auto px-4">
    <h2 className="text-center text-2xl lg:text-3xl font-bold text-blue-900 mb-8 lg:mb-12">
      Doświadczenie serwisu POL-GAZ w liczbach
    </h2>
    {/* Grid responsywny - 2 kolumny na mobile, 4 na desktop */}
    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 mb-12 lg:mb-2" role="list">
```
**Wyjaśnienie:** Dodanie `<h2>` nadaje sekcji semantyczny kontekst i naprawia hierarchię nagłówków. `aria-label` na `<section>` informuje użytkowników czytników ekranu o celu sekcji. Zmiana gridu na `<ul>` poprawia semantykę listy statystyk.

---
### Zmiana #2: Semantyczna lista statystyk zamiast div-ów — 🟡 HIGH
**Problem:** Lista statystyk (liczb z opisami) jest zaimplementowana jako grid div-ów. Dla lepszej semantyki i dostępności powinna być oznaczona jako lista (np. `<ul>` z `<li>`).
**Wpływ:** SEO (semantic HTML), AEO (lepsze parsowanie struktury)
**Lokalizacja:** Linie 6-33, główny kontener grid i wszystkie elementy statystyk.

**Obecny kod:**
```tsx
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 mb-12 lg:mb-2">
  <div className="text-center p-4 lg:p-6">
    <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">31</div>
    <div className="text-sm lg:text-base text-gray-600">Lat doświadczenia<br/>na rynku</div>
  </div>
  
  <div className="text-center p-4 lg:p-6">
    <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">2</div>
    <div className="text-sm lg:text-base text-gray-600">Serwisantów</div>
  </div>
  
  <div className="text-center p-4 lg:p-6">
    <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">60km</div>
    <div className="text-sm lg:text-base text-gray-600">zasięgu<br/>wokół Szczecina</div>
  </div>
  
  <div className="text-center p-4 lg:p-6">
    <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">5★</div>
    <div className="text-sm lg:text-base text-gray-600">Ocen na Google<br/>Zadowoleni klienci</div>
  </div>
</div>
```

**Zmieniony kod:**
```tsx
<ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 mb-12 lg:mb-2" role="list">
  <li className="text-center p-4 lg:p-6">
    <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">31</div>
    <div className="text-sm lg:text-base text-gray-600">Lat doświadczenia<br/>na rynku</div>
  </li>
  
  <li className="text-center p-4 lg:p-6">
    <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">2</div>
    <div className="text-sm lg:text-base text-gray-600">Wykwalifikowanych serwisantów</div>
  </li>
  
  <li className="text-center p-4 lg:p-6">
    <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">60km</div>
    <div className="text-sm lg:text-base text-gray-600">zasięgu<br/>wokół Szczecina</div>
  </li>
  
  <li className="text-center p-4 lg:p-6">
    <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">5★</div>
    <div className="text-sm lg:text-base text-gray-600">Średnia ocena na Google<br/>Zadowoleni klienci</div>
  </li>
</ul>
```
**Wyjaśnienie:** Zmiana na `<ul>` z `<li>` poprawia semantykę HTML, co jest lepiej rozumiane przez crawlerów i screen readery. Dodano "Wykwalifikowanych" do opisu serwisantów (wzmocnienie autorytetu) i "Średnia ocena" do statystyki 5★ (zwiększenie precyzji).

---
### Zmiana #3: Dodanie konkretnej liczby recenzji do statystyki 5★ — 🔵 MEDIUM
**Problem:** Statystyka "5★ Ocen na Google Zadowoleni klienci" jest zbyt ogólna. Brak konkretnej liczby recenzji zmniejsza wiarygodność i cytowalność przez AI.
**Wpływ:** GEO (zwiększa wiarygodność danych), SEO (konkretne dane są lepiej indeksowane)
**Lokalizacja:** Linia 30-33, ostatni element listy statystyk.

**Obecny kod:**
```tsx
<li className="text-center p-4 lg:p-6">
  <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">5★</div>
  <div className="text-sm lg:text-base text-gray-600">Ocen na Google<br/>Zadowoleni klienci</div>
</li>
```

**Zmieniony kod:**
```tsx
<li className="text-center p-4 lg:p-6">
  <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">5★</div>
  <div className="text-sm lg:text-base text-gray-600">
    Średnia ocena na Google<br/>
    <span className="font-semibold">[DANE DO UZUPEŁNIENIA: liczba] recenzji</span>
  </div>
</li>
```
**Wyjaśnienie:** Dodanie miejsca na konkretną liczbę recenzji zwiększa wiarygodność statystyki. AI częściej cytuje dane z konkretnymi liczbami niż ogólne stwierdzenia. Użytkownik musi uzupełnić `[DANE DO UZUPEŁNIENIA: liczba]` rzeczywistą wartością.

---
### Zmiana #4: Dodanie akapitu kontekstowego z unikalnymi danymi — 🔵 MEDIUM
**Problem:** Sekcja zawiera tylko 4 statystyki bez żadnego opisu kontekstowego. Brakuje unikalnych danych o liczbie usług, specjalizacjach markowych, które zwiększyłyby wartość informacyjną i cytowalność.
**Wpływ:** GEO (wypełnia luki w danych, tworzy bogatszy blok tekstowy), SEO (dodaje treść z słowami kluczowymi)
**Lokalizacja:** Po zamknięciu `<ul>` z statystykami, przed zamknięciem `<div className="container">`.

**Obecny kod:**
```tsx
</ul>


      </div>
    </section>
```

**Zmieniony kod:**
```tsx
</ul>

      <div className="text-center text-gray-700 max-w-3xl mx-auto mt-8 lg:mt-12">
        <p className="text-base lg:text-lg mb-4">
          Od 1994 roku zrealizowaliśmy ponad <span className="font-semibold">[DANE DO UZUPEŁNIENIA: liczba]</span> przeglądów i napraw kotłów gazowych. Specjalizujemy się w serwisie <span className="font-semibold">[DANE DO UZUPEŁNIENIA: liczba]</span> marek, w tym Beretta, Vaillant, Junkers.
        </p>
        <p className="text-sm lg:text-base text-gray-600">
          W przypadku awarii nagłych, nasz serwis dojeżdża na miejsce w Szczecinie średnio w ciągu <span className="font-semibold">[DANE DO UZUPEŁNIENIA: liczba]</span> godzin. W obszarze 60 km od miasta czas dojazdu wynosi do <span className="font-semibold">[DANE DO UZUPEŁNIENIA: liczba]</span> godzin.
        </p>
      </div>

      </div>
    </section>
```
**Wyjaśnienie:** Dodanie akapitu z konkretnymi danymi (liczba usług, marki, czas reakcji) tworzy bogatszy, bardziej informacyjny blok tekstu, który AI może wyciągnąć jako fragment. Wypełnia luki w danych zidentyfikowane w raporcie GEO. Użytkownik musi uzupełnić wszystkie `[DANE DO UZUPEŁNIENIA: ...]` rzeczywistymi wartościami.

---
### Zmiana #5: Dodanie struktury FAQ w komentarzu dla przyszłej implementacji — ⚪ LOW
**Problem:** Sekcja zawiera dane, które idealnie nadają się na odpowiedzi w FAQ, ale nie są oznaczone jako takie. W raporcie AEO zidentyfikowano 4 potencjalne pytania i odpowiedzi.
**Wpływ:** AEO (przygotowanie pod przyszłe schematy FAQPage), GEO (struktura Q&A jest wysoce cytowalna)
**Lokalizacja:** Na końcu komponentu, przed zamknięciem `</section>`.

**Obecny kod:**
```tsx
      </div>
    </section>
```

**Zmieniony kod:**
```tsx
      </div>

      {/* POTENCJALNE FAQ DO PRZYSZŁEJ IMPLEMENTACJI SCHEMATU FAQPage
      <div className="mt-12 max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">Najczęściej zadawane pytania o nasze doświadczenie</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg">Od ilu lat działa serwis kotłów Pol-Gaz w Szczecinie?</h4>
            <p className="text-gray-700">Serwis kotłów Pol-Gaz działa na rynku od 31 lat, od 1994 roku, zdobywając bogate doświadczenie w naprawie i serwisie pieców gazowych.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Ilu serwisantów pracuje w Pol-Gaz?</h4>
            <p className="text-gray-700">W serwisie Pol-Gaz pracuje dwóch wykwalifikowanych serwisantów, co zapewnia szybką reakcję na zgłoszenia awaryjne.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Jaki jest zasięg działania serwisu Pol-Gaz?</h4>
            <p className="text-gray-700">Serwis Pol-Gaz działa w promieniu 60 kilometrów wokół Szczecina, obsługując klientów z miasta i okolicznych miejscowości.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Jakie oceny ma serwis Pol-Gaz?</h4>
            <p className="text-gray-700">Serwis Pol-Gaz ma doskonałe, 5-gwiazdkowe oceny na Google, co potwierdza zadowolenie klientów z jakości usług.</p>
          </div>
        </div>
      </div>
      */}

    </section>
```
**Wyjaśnienie:** Dodanie zakomentowanej sekcji FAQ przygotowuje komponent do przyszłej implementacji schematu JSON-LD `FAQPage`. AI może lepiej zrozumieć strukturę pytanie-odpowiedź, a użytkownik ma gotowy szablon do odkomentowania i wdrożenia.

---

## GOTOWE SCHEMATY JSON-LD (wklej dokładnie jak są)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Od ilu lat działa serwis kotłów Pol-Gaz w Szczecinie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Serwis kotłów Pol-Gaz działa na rynku od 31 lat, od 1994 roku, zdobywając bogate doświadczenie w naprawie i serwisie pieców gazowych."
      }
    },
    {
      "@type": "Question",
      "name": "Ilu serwisantów pracuje w Pol-Gaz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "W serwisie Pol-Gaz pracuje dwóch wykwalifikowanych serwisantów, co zapewnia szybką reakcję na zgłoszenia awaryjne."
      }
    },
    {
      "@type": "Question",
      "name": "Jaki jest zasięg działania serwisu Pol-Gaz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Serwis Pol-Gaz działa w promieniu 60 kilometrów wokół Szczecina, obsługując klientów z miasta i okolicznych miejscowości."
      }
    },
    {
      "@type": "Question",
      "name": "Jakie oceny ma serwis Pol-Gaz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Serwis Pol-Gaz ma doskonałe, 5-gwiazdkowe oceny na Google, co potwierdza zadowolenie klientów z jakości usług."
      }
    }
  ]
}
```

---

## CHECKLIST PO ZMIANACH
- [ ] Kod się kompiluje bez błędów TypeScript
- [ ] Jest dokładnie 0 znacznik <h1> w tym komponencie
- [ ] Hierarchia nagłówków jest sekwencyjna (h2 → brak dalszych nagłówków w tym komponencie)
- [ ] Wszystkie obrazy mają atrybut alt (brak obrazów w tym komponencie)
- [ ] Linki zewnętrzne mają rel="noopener noreferrer" (brak linków w tym komponencie)
- [ ] JSON-LD jest wstawiony w odpowiednim miejscu (do wstawienia w layout/head strony, nie w tym komponencie)

**UWAGA:** Schemat JSON-LD `FAQPage` powinien być wstawiony w `<head>` strony lub w głównym layout, a nie bezpośrednio w tym komponencie. Komponent zawiera jedynie zakomentowaną wersję HTML na potrzeby przyszłej implementacji.