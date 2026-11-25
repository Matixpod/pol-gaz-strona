# POL-GAZ Szczecin

Strona firmowa (Next.js 15, App Router). Opis projektu i zasady: `CLAUDE.md`.

## Wdrożenie na Vercel

1. Wejdź na https://vercel.com/new i zaloguj się kontem GitHub.
2. Wybierz repozytorium `pol-gaz-strona` (Import).
3. Framework wykryje się sam (Next.js). Nie zmieniaj ustawień, kliknij **Deploy**.
4. Produkcja buduje się z gałęzi `main`. Sprawdź w Settings → Git → Production Branch.
5. Domena: Settings → Domains → dodaj `polgaz-szczecin.pl` i `www.polgaz-szczecin.pl`, potem ustaw rekordy DNS podane przez Vercel.

Zmienne środowiskowe nie są wymagane.

Przed przepięciem domeny z Hostingera sprawdź podgląd pod adresem `*.vercel.app`, w tym `/protokol/` i `/bledy-kotlow/`.

## Lokalnie

```bash
npm install
npm run dev
npm run build
```
