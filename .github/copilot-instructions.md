# GitHub Copilot: instrukcje repozytorium

## Kontekst projektu

Adres produkcyjny:

```text
https://goldentalentfocus.vercel.app/
```

Projekt jest publicznym, dwujęzycznym portfolio Patryka Jabłońskiego, DevOps, Cloud & Systems Engineera specjalizującego się w Microsoft Azure.

Przed rozpoczęciem implementacji, refaktoryzacji lub większej zmiany **przeczytaj w całości**:

```text
docs/portfolio-spec.md
```

Plik `docs/portfolio-spec.md` jest źródłem wymagań produktowych, treści, designu, dostępności, SEO, testów i deploymentu.

W przypadku rozbieżności stosuj kolejność:

1. aktualne polecenie użytkownika,
2. `.github/copilot-instructions.md`,
3. `docs/portfolio-spec.md`,
4. istniejąca implementacja.

---

## Rola i sposób pracy

Pracuj jak doświadczony Frontend Engineer, UI Engineer i Accessibility Engineer.

1. Najpierw przeanalizuj całe repozytorium.
2. Sprawdź istniejące pliki, zależności, workflowy i konfigurację.
3. Zachowaj historię Git, ale nie utrzymuj starego kodu tylko dlatego, że już istnieje.
4. Nie twórz zagnieżdżonego repozytorium ani dodatkowego katalogu projektu wewnątrz repozytorium.
5. Projekt React + TypeScript ma znajdować się bezpośrednio w katalogu głównym.
6. Nie kończ pracy po wygenerowaniu szkieletu.
7. Nie pozostawiaj:
   - `Lorem ipsum`,
   - pustych komponentów,
   - niedziałających przycisków,
   - sekcji `Coming soon`,
   - fikcyjnych statystyk,
   - niepodłączonych elementów UI,
   - zakomentowanego starego kodu,
   - zbędnych `console.log`.
8. Po każdej większej zmianie uruchamiaj odpowiednie testy i walidację.
9. Naprawiaj znalezione błędy zamiast jedynie je opisywać.
10. Nie zmieniaj potwierdzonych treści, nazw, dat ani adresów URL bez wyraźnej potrzeby.

---

## Definicja ukończenia

Zmiana jest ukończona dopiero wtedy, gdy:

- implementacja odpowiada `docs/portfolio-spec.md`,
- widok działa na mobile, tablet i desktop,
- polska i angielska wersja są kompletne,
- nie ma treści hardcoded, które powinny być tłumaczone,
- dostępność klawiaturowa działa,
- nie ma błędów TypeScript,
- ESLint przechodzi,
- Prettier przechodzi,
- testy przechodzą,
- build produkcyjny przechodzi,
- nie dodano danych prywatnych,
- GitHub Pages nadal może poprawnie opublikować katalog `dist`.

Nie uznawaj zadania za zakończone, gdy build lub wymagane testy nie przechodzą.

---

## Wymagany stos technologiczny

Używaj:

- React,
- TypeScript,
- Vite,
- Tailwind CSS,
- Motion for React,
- i18next,
- react-i18next,
- Lucide React,
- Vitest,
- React Testing Library,
- ESLint,
- Prettier,
- GitHub Actions,
- GitHub Pages,
- Node.js 24 LTS,
- npm i `package-lock.json`.

Nie wprowadzaj bez wyraźnego polecenia:

- Next.js,
- SSR,
- backendu,
- React Routera,
- Three.js,
- ciężkiego canvasu,
- Service Workera,
- zewnętrznych trackerów,
- Google Analytics,
- zewnętrznego API wymaganego do pierwszego renderu.

Nową zależność dodawaj tylko wtedy, gdy przynosi wyraźną wartość i jest zgodna z wymaganiami bezpieczeństwa oraz licencji.

---

## Architektura kodu

1. Utrzymuj małe, czytelne i wielokrotnego użytku komponenty.
2. Nie duplikuj markupów i logiki.
3. Treści domenowe przechowuj w `src/data`.
4. Wszystkie teksty interfejsu przechowuj w plikach tłumaczeń.
5. Nie przechowuj adresów URL w tłumaczeniach: umieszczaj je w danych.
6. Projekty, certyfikaty, kursy, doświadczenie, edukację i publikacje generuj z danych.
7. Dodanie kolejnego projektu, certyfikatu lub kursu nie może wymagać przebudowy JSX sekcji.
8. Stosuj TypeScript w trybie `strict`.
9. Unikaj `any`; jeżeli jest konieczne, uzasadnij je komentarzem.
10. Preferuj jawne interfejsy i typy domenowe.
11. Używaj semantycznego HTML.
12. Rozróżniaj:
    - nawigację: `<a>`,
    - akcję interfejsu: `<button>`.
13. Nie używaj `dangerouslySetInnerHTML`, z wyjątkiem kontrolowanego JSON-LD.
14. Nie renderuj HTML pochodzącego z tłumaczeń.
15. Dekoracje oznaczaj `aria-hidden="true"`.

---

## Internacjonalizacja

Obsługa PL/EN jest wymaganiem krytycznym.

1. Wszystkie widoczne teksty muszą pochodzić z i18next.
2. Dotyczy to również:
   - `aria-label`,
   - tekstów alternatywnych,
   - etykiet ikon,
   - menu,
   - przycisków,
   - opisów,
   - dat,
   - metadanych.
3. Wspierane języki:

```ts
type SupportedLanguage = "pl" | "en";
```

4. Kolejność wyboru języka:
   - `?lang=pl` lub `?lang=en`,
   - `localStorage` pod kluczem `portfolio.language`,
   - język przeglądarki,
   - domyślnie `pl`.
5. Zmiana języka:
   - nie przeładowuje strony,
   - aktualizuje `html[lang]`,
   - aktualizuje parametr URL przez `history.replaceState`,
   - aktualizuje tytuł i meta description,
   - nie resetuje scrolla,
   - nie uruchamia ponownie wszystkich animacji.
6. Nie duplikuj adresów URL w plikach tłumaczeń.
7. Nazw technologii, firm i produktów nie tłumacz.

---

## Prywatność: zasady bezwzględne

W żadnym pliku repozytorium, kodzie, tłumaczeniu, teście, komentarzu, metadanych, JSON-LD ani danych przykładowych nie umieszczaj:

- numeru telefonu,
- linku `tel:`,
- adresu e-mail,
- linku `mailto:`,
- formularza kontaktowego,
- pełnego CV zawierającego dane prywatne,
- danych kontaktowych skopiowanych z CV.

Głównym i jedynym kanałem kontaktu jest LinkedIn:

```text
https://www.linkedin.com/in/patryk-jablonski
```

GitHub i ORCID są profilami zewnętrznymi, a nie alternatywnymi kanałami kontaktowymi.

Nie dodawaj pól `phone` ani `email` do modeli danych.

---

## Design, animacje i responsywność

1. Używaj marki `PJ / AZURE DEVOPS` i kierunku `Azure Cloud Engineering Portfolio`.
2. Stosuj design tokens oraz zmienne CSS opisane w specyfikacji.
3. Projektuj mobile-first.
4. Nie ukrywaj ważnej treści wyłącznie pod hover.
5. Przyciski dotykowe mają mieć co najmniej 44 × 44 px.
6. Nie dopuszczaj do poziomego scrolla.
7. Animuj głównie `transform` i `opacity`.
8. Używaj `LazyMotion`.
9. Ograniczaj animacje poza viewportem.
10. Obsłuż `prefers-reduced-motion`.
11. Przy reduced motion wszystkie treści muszą być natychmiast dostępne.
12. Nie dodawaj fikcyjnych danych operacyjnych ani KPI.
13. Nie symuluj live statusu infrastruktury.
14. Dodaj krótki ekran startowy w stylistyce Azure Cloud, ale nie osadzaj filmu referencyjnego.
15. Kolejne sekcje ujawniaj podczas przewijania tylko raz.
16. Wszystkie karty mają czytelne stany hover i focus, z różnymi wariantami zależnymi od sekcji.
17. Wszystkie przyciski mają spójne stany hover, focus i active.
18. Dla interakcji wymagających hover używaj `@media (hover: hover) and (pointer: fine)`.
19. Nie uzależniaj treści ani funkcjonalności od hover.
20. Przyciski języka i wszystkie aktywne kontrolki używają standardowego `cursor: pointer`.

---

### Reguły hero

- Używaj komponentu `HeroTechnologyOrbit`.
- Fotografia ma być idealnie okrągła i znajdować się w centrum układu.
- Wokół fotografii zastosuj jedną lub dwie responsywne orbity technologii.
- Na desktopie preferuj dwie orbity obracające się powoli w przeciwnych kierunkach.
- Wszystkie etykiety technologii mają być stale poziome i czytelne.
- Obliczaj pozycję kafelków przez współrzędne `x` i `y` albo użyj `offset-rotate: 0deg`.
- Nie obracaj kafelków, ikon ani napisów razem z orbitą.
- Nie używaj pionowego tekstu, `writing-mode`, pochylonych kart ani etykiet nachodzących na twarz.
- Na mobile zachowaj orbitę w kwadratowym kontenerze i umieść ją po treści tekstowej.
- Hero na mobile działa w normalnym przepływie dokumentu, bez sztywnej wysokości i bez poziomego scrolla.

## Ekran startowy i globalny system interakcji

### PortfolioPreloader

1. Wzoruj zachowanie na przesłanym filmie, ale nie kopiuj marki, ikon, treści ani kolorów 1:1.
2. Nie osadzaj filmu i nie dodawaj dźwięku.
3. Użyj monogramu `PJ`, ikon Microsoft Azure lub neutralnych ikon chmurowych.
4. Pokaż trzy etapy:
   - inicjalizacja Azure Cloud,
   - ładowanie automatyzacji i CI/CD,
   - uruchamianie interfejsu portfolio.
5. Dodaj progressbar i wartość od 0 do 100 procent.
6. Całość kończy się maksymalnie w około 3.5 sekundy.
7. Pokaż intro raz na sesję karty i zapisz wyłącznie `portfolio.intro.seen` w `sessionStorage`.
8. Zmiana języka ani nawigacja kotwicowa nie uruchamiają intro ponownie.
9. Dodaj przycisk pominięcia, obsługę Escape, blokadę scrolla i bezpieczny timeout.
10. Przy reduced motion pomiń intro.
11. Po wyjściu intro płynnie ujawnij hero.
12. Ekran startowy nie jest rzeczywistym monitoringiem i nie może udawać prawdziwego stanu zasobów.
13. Loader ma `position: fixed`, `inset: 0`, `z-index: 9999` oraz całkowicie nieprzezroczyste tło `var(--color-bg)`.
14. Nie używaj półprzezroczystego tła, `backdrop-filter` ani nakładki pokazującej stronę pod spodem.
15. Podczas intro nie mogą być widoczne header, hero, fotografia ani inne elementy aplikacji.
16. Pokazuj wyłącznie jednolite tło i centralne, nieprzezroczyste okno ładowania.
17. Główna aplikacja pozostaje `inert`, `aria-hidden` i niewidoczna do końcowego crossfade.
18. Ujawnij aplikację dopiero w ostatnich około 200 do 300 ms animacji.

### Ujawnianie sekcji

1. Rozszerz `AnimatedSection` albo utwórz `SectionReveal`.
2. Animuj główne sekcje tylko przy pierwszym wejściu do viewportu.
3. Po ujawnieniu treść pozostaje widoczna.
4. Używaj krótkich przejść, bez opóźniania czytania.
5. Zróżnicuj kierunek i stagger w zależności od sekcji.
6. Przy reduced motion pokaż wszystko natychmiast.
7. Zmiana PL i EN nie uruchamia ponownie całej strony.

### Karty

1. Każdy kafelek w O mnie, kompetencjach, certyfikatach, kursach, doświadczeniu, projektach, nauce i kontakcie ma stan hover i `focus-visible`.
2. Nie używaj jednego identycznego efektu wszędzie.
3. Dopuszczalne są: lift od 3 do 6 px, border glow, gradient sweep, delikatny spotlight, minimalny zoom obrazu oraz ruch ikony.
4. Efekt projektu może używać maksymalnie około 1 stopnia perspektywy tylko na `pointer: fine`.
5. Nie powoduj layout shift.
6. Na urządzeniach dotykowych zachowaj pełną treść i spokojny stan statyczny.
7. Przy reduced motion usuń lift, tilt, magnetic motion i zoom.

### Przyciski

1. Utrzymuj wspólne warianty primary, secondary i icon.
2. Hover może używać gradientu, glow i przesunięcia ikony o kilka pikseli.
3. Active może używać skali około `0.98`.
4. Focus ring musi pozostać wyraźny.
5. Wszystkie aktywne przyciski, w tym `PL` i `EN`, mają `cursor: pointer`.
6. Nie twórz własnego kursora ani animowanej ręki.
7. Opcjonalny efekt magnetyczny stosuj wyłącznie do głównych CTA, maksymalnie 3 px i tylko na desktopie.

---

## Dostępność

Cel: WCAG 2.2 AA.

Wymagane są:

- semantyczne landmarki,
- jeden główny `h1`,
- logiczna hierarchia nagłówków,
- skip link,
- pełna obsługa klawiatury,
- wyraźny focus ring,
- poprawne `aria-current`,
- poprawne `aria-expanded`,
- poprawne `aria-pressed`,
- poprawne etykiety przełącznika języka,
- dostępny modal galerii,
- focus trap wyłącznie w otwartym modalu lub menu,
- powrót focusu po zamknięciu modala,
- kontrast co najmniej AA,
- brak informacji przekazywanej wyłącznie kolorem,
- brak migania,
- brak treści dostępnej wyłącznie na hover.

---

## Wydajność i bezpieczeństwo

1. Używaj lokalnych, zoptymalizowanych obrazów.
2. Podawaj jawne `width` i `height`.
3. Stosuj `loading="lazy"` poniżej hero.
4. Nie pobieraj grafik projektu z `raw.githubusercontent.com` w produkcji.
5. Nie importuj całej biblioteki ikon.
6. Nie dodawaj sekretów, tokenów ani danych prywatnych.
7. Zewnętrzne linki otwierane w nowej karcie muszą mieć:

```html
rel="noopener noreferrer"
```

8. Nie zapisuj w `localStorage` niczego poza kodem wybranego języka.
9. W `sessionStorage` można zapisać wyłącznie techniczną flagę `portfolio.intro.seen`.
10. Dodaj Dependabot dla npm i GitHub Actions.
11. Nie ignoruj automatycznie podatności wysokiego lub krytycznego poziomu.
12. Nie dodawaj bibliotek o niejasnej licencji.
13. Nie pobieraj na żywo statystyk GitHub.
14. Nie osadzaj filmu referencyjnego ani audio.
15. Intro nie może sztucznie opóźniać ładowania strony ani trwać dłużej niż około 3.5 sekundy.

---

## GitHub Pages

Repozytorium użytkownika działa w katalogu głównym domeny.

W Vite używaj:

```ts
base: "/";
```

Nie używaj:

```ts
base: "/goldentalentfocus.vercel.app";
```

Deployment ma:

- budować projekt do `dist`,
- używać oficjalnego mechanizmu GitHub Pages,
- mieć minimalne uprawnienia,
- uruchamiać testy jakości przed publikacją,
- działać dla gałęzi `main`,
- wspierać `workflow_dispatch`.

Nie commituj katalogu `dist`, chyba że użytkownik wyraźnie zmieni strategię deploymentu.

---

## Testy i polecenia walidacyjne

Utrzymuj skrypty:

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
npm run format:check
npm run test
npm run test:run
npm run check
```

Przed zakończeniem większej implementacji uruchom:

```bash
npm run check
npm audit --audit-level=high
```

Minimalny zakres testów jest opisany w `docs/portfolio-spec.md` i musi obejmować między innymi:

- render polskiej wersji,
- zmianę PL/EN,
- aktualizację `html[lang]`,
- aktualizację `?lang=`,
- zapis języka do `localStorage`,
- inicjalizację języka z URL,
- poprawny link LinkedIn,
- brak `tel:` i `mailto:`,
- brak numeru telefonu w tłumaczeniach,
- dostępność menu mobilnego,
- obecność ID sekcji,
- poprawne linki obu repozytoriów,
- działanie galerii i modala,
- obecność certyfikatów i kursów,
- brak znaków pauzy i półpauzy w treściach widocznych dla użytkownika.
- obecność wszystkich dziesięciu technologii w hero,
- poziome i czytelne etykiety technologii,
- brak starego, wadliwego `TechnologyOrbit` i `HeroTechnologyShowcase`,
- obecność `HeroTechnologyOrbit`,
- zachowanie statycznych orbit przy reduced motion,
- brak obracania etykiet technologii,
- działanie intro, jego trzech etapów i progressbara,
- pomijanie intro przez Escape i przycisk,
- zapisywanie `portfolio.intro.seen` w `sessionStorage`,
- brak ponownego intro w tej samej sesji,
- ujawnianie sekcji tylko raz,
- dostępne stany focus kart i przycisków,
- `cursor: pointer` dla PL i EN,
- brak osadzonego filmu oraz dźwięku.

---

## Kolejność pracy

Realizuj zmiany w logicznych etapach:

1. analiza repozytorium,
2. konfiguracja projektu i narzędzi,
3. design system i layout,
4. i18n,
5. sekcje,
6. animacje i grafika,
7. SEO i pliki publiczne,
8. testy oraz dostępność,
9. CI i GitHub Pages,
10. README i końcowa walidacja.

Nie wykonuj dużej przebudowy bez wcześniejszego sprawdzenia, które pliki i funkcje już istnieją.

---

---

## Aktualny kierunek produktu

Istniejąca aplikacja jest już wdrożona. Rozwijaj ją iteracyjnie i nie inicjalizuj projektu od początku.

Wymagania obowiązujące przy kolejnych zmianach:

1. Usuń aktualny `HeroTechnologyShowcase` oraz pozostałości wadliwego `TechnologyOrbit`.
2. Utwórz komponent `HeroTechnologyOrbit`.
3. Przytnij prawdziwą fotografię z `public/images/profile.webp` do idealnego koła.
4. Umieść fotografię w centrum responsywnego układu orbitalnego.
5. Wokół fotografii pokazuj: Microsoft Azure, Docker, CI/CD, Terraform, Ansible, PowerShell, Bash, Grafana, Prometheus i Git.
6. Na desktopie stosuj dwie orbity po pięć technologii, poruszające się powoli w przeciwnych kierunkach.
7. Pozycje kafelków obliczaj przez `x` i `y` na podstawie kąta i promienia albo rozwiązanie z `offset-rotate: 0deg`.
8. Wszystkie etykiety muszą być poziome i nie mogą obracać się razem z orbitą.
9. Technologie nie mogą nachodzić na twarz ani wychodzić poza kontener.
10. Na mobile tekst hero znajduje się przed orbitą, a cały układ działa w normalnym przepływie dokumentu.
11. Mobile nie używa sztywnego `100vh`, negatywnych marginesów ani pozycji absolutnych poza kontenerem orbity.
12. Dla szerokości około 360 px kompaktuj promienie, etykiety i rozkład wciąż zachowując orbitę oraz poziome napisy.
13. Przy reduced motion zatrzymaj orbity, ale pozostaw wszystkie elementy widoczne na okręgach.
14. Nie używaj dawnej wizualizacji `CloudTopology`.
15. Marka w nagłówku to `PJ / AZURE DEVOPS`.
16. Etykieta hero to `AZURE CLOUD • DEVOPS • SYSTEMS`.
17. Sekcja projektów ma nazywać się `Projekty` oraz `Projects`.
18. Portfolio zawiera dwa projekty:
    - `Azure Terraform Docker Guestbook`,
    - `Azure Network Infrastructure Lab` z repozytorium `https://github.com/goldentalent626/zis-azure-terraform`.
19. Drugi projekt jest projektem dydaktycznym przygotowanym dla studentów zarządzania infrastrukturą sieciową.
20. Galeria projektu Guestbook jest domyślnie ukryta i rozwija cztery małe kafelki.
21. Powiększenie obrazu działa w dostępnym modalu zajmującym niemal cały ekran.
22. Nie używaj dawnej wizualizacji pipeline ani kafelków procesu w sekcji projektów.
23. Dodaj sekcję `Certyfikaty i ukończone kursy` oraz `Certifications and completed courses`.
24. Dane certyfikatów i kursów przechowuj w `src/data/credentials.ts`.
25. Każda z trzech pozycji doświadczenia ma własne kapsuły technologii lub obszarów.
26. W sekcji akademickiej używaj nawiasów w nazwach kierunków i nagłówka `Prowadzone zajęcia` oraz `Courses taught`.
27. Stopka zawiera `© rok Patryk Jabłoński`, profile zewnętrzne i link powrotu na górę.
28. Nie umieszczaj w stopce opisu o React ani GitHub Actions.
29. Wszystkie zmiany muszą być kompletne w języku polskim i angielskim.
30. `PortfolioPreloader` całkowicie zasłania stronę nieprzezroczystym tłem.
31. Podczas intro widoczne są wyłącznie jednolite tło i centralne okno ładowania.
32. Header, hero i fotografia pod loaderem pozostają niewidoczne oraz niedostępne dla focusu.
33. Intro pokazuje monogram `PJ`, trzy etapy, progressbar i wartość procentową.
34. Intro działa raz na sesję karty, można je pominąć i nie uruchamia się przy zmianie języka.
35. Nie osadzaj filmu ani dźwięku.
36. Każda sekcja po hero ujawnia się interaktywnie podczas pierwszego wejścia do viewportu.
37. Wszystkie karty otrzymują hover i focus dopasowany do charakteru sekcji.
38. Karty projektów, certyfikatów, kompetencji, doświadczenia, nauki, kursów i kontaktu nie używają jednej identycznej animacji.
39. Wszystkie CTA i przyciski ikonowe otrzymują spójne animacje hover, focus i active.
40. Przyciski `PL` i `EN` używają standardowego kursora pointer.
41. Nie inicjalizuj projektu od początku.

## Styl redakcyjny

W tekstach widocznych na stronie nie używaj znaków pauzy `-` ani półpauzy `-`.

Zamiast nich używaj przecinków, kropek, dwukropków, nawiasów albo naturalnych konstrukcji z `od`, `do`, `since` i `to`.

Myślniki są dozwolone wyłącznie tam, gdzie stanowią część oficjalnej nazwy, kodu certyfikatu, składni technicznej albo adresu URL.

Po każdej zmianie przeszukaj pliki tłumaczeń i dane widoczne dla użytkownika pod kątem znaków `-` oraz `-`.

## Fotografia i orbity technologii

1. Nie generuj fikcyjnego zdjęcia użytkownika.
2. Oczekiwany plik to `public/images/profile.webp`.
3. Jeżeli pliku brakuje, zachowaj okrągły fallback `PJ` i wskaż brak w podsumowaniu.
4. Użyj komponentu `HeroTechnologyOrbit`.
5. Fotografia ma mieć proporcję `1 / 1`, `object-fit: cover` i pełne zaokrąglenie.
6. Ikony technologii przechowuj lokalnie albo implementuj jako małe komponenty SVG.
7. Nie korzystaj z zewnętrznego CDN podczas renderowania.
8. Dla CI/CD użyj neutralnej ikony przepływu, na przykład `Workflow` z Lucide.
9. Na desktopie stosuj dwie współśrodkowe orbity z pięcioma elementami na każdej.
10. Orbity mogą obracać się powoli w przeciwnych kierunkach.
11. Elementy poruszają się po okręgu przez zmianę współrzędnych `x` i `y`.
12. Każdy kafelek zachowuje `rotate: 0` i poziomy układ ikona plus nazwa.
13. Nie używaj pionowych napisów, `writing-mode`, pochylonych kart ani rotacji kafelków.
14. Nie dopuszczaj do nachodzenia technologii na twarz.
15. Przy reduced motion zatrzymaj ruch, zachowując elementy na orbitach.
16. Na mobile umieść orbitę po treści hero, w kwadratowym kontenerze `clamp(300px, 92vw, 380px)`.
17. Na mobile nie przenoś technologii do rozciągniętej listy pod fotografią.
18. Hero na mobile nie może używać sztywnej wysokości powodującej ucięcie następnej sekcji.

## Galeria projektu

1. Galeria jest domyślnie zamknięta.
2. Przycisk używa `aria-expanded` i `aria-controls`.
3. Rozwinięcie pokazuje cztery małe kafelki.
4. Hover i focus pokazują przyciemnienie oraz ikonę lupy.
5. Modal obrazu obsługuje Escape, backdrop, focus trap i powrót focusu.
6. Drugi projekt z pustym `images` nie renderuje galerii ani placeholdera.
7. Galeria, modal i wszystkie etykiety muszą działać w PL i EN.

## Certyfikaty i kursy

Publikuj wyłącznie pozycje wskazane w `docs/portfolio-spec.md`.

Nie dodawaj:

- niepotwierdzonych dat,
- numerów poświadczeń,
- dat ważności,
- statusu aktywny lub ważny bez źródła,
- procentowych ocen kompetencji.

Kursy grupuj w dostępne akordeony, a certyfikaty pokazuj jako kompaktowe karty.

## Kontrola systemu animacji

Przed zakończeniem:

1. sprawdź intro na czystym `sessionStorage`,
2. sprawdź ponowne wejście z ustawioną flagą sesji,
3. sprawdź pominięcie przez Escape i przycisk,
4. sprawdź PL oraz EN,
5. sprawdź `prefers-reduced-motion`,
6. sprawdź `hover: none` oraz `pointer: coarse`,
7. sprawdź wszystkie rodzaje kart,
8. sprawdź wszystkie przyciski i linki wyglądające jak przyciski,
9. sprawdź, że sekcje nie pozostają przezroczyste po ujawnieniu,
10. sprawdź brak poziomego scrolla i layout shift,
11. sprawdź, że standardowy kursor pointer pojawia się nad PL i EN,
12. sprawdź brak filmu, audio, AWS, starego `TechnologyOrbit` oraz `HeroTechnologyShowcase`.

---

## Odpowiedź końcowa Copilota

Po zakończeniu pracy podaj krótkie, konkretne podsumowanie:

- utworzone i zmodyfikowane elementy,
- najważniejsze decyzje techniczne,
- uruchomione polecenia,
- wynik lintowania, testów, buildu i audytu,
- pozostałe elementy do ręcznej podmiany, np. zdjęcie profilowe,
- znane ograniczenia, jeżeli faktycznie istnieją.

Nie deklaruj powodzenia testów lub buildu, jeżeli nie zostały uruchomione albo zakończyły się błędem.
