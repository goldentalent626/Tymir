# Portfolio Patryka Jabłońskiego: specyfikacja produktu i wykonania

> Ten dokument definiuje kompletny zakres witryny: cel, treść, design, funkcjonalność, dostępność, testy, SEO oraz deployment.
>
> Zasady pracy GitHub Copilota znajdują się w:
>
> ```text
> .github/copilot-instructions.md
> ```
>
> Witryna ma być rozwijana jako kompletna, działająca aplikacja. Nie traktuj jej jako makiety ani tymczasowego szkieletu.

---

## 1. Cel witryny

Stwórz nowoczesną, dwujęzyczną stronę wizytówkę przedstawiającą:

- Patryka Jabłońskiego,
- jego specjalizację w Azure Cloud, DevOps, chmurze i administracji systemami,
- doświadczenie zawodowe,
- kompetencje techniczne,
- certyfikaty i ukończone kursy,
- działalność akademicką i naukową,
- dwa rzeczywiste projekty portfolio,
- profile GitHub, LinkedIn i ORCID.

Witryna ma wyglądać jak dopracowany produkt techniczny, a nie jak szablon CV.

Główna koncepcja wizualna:

> **Azure Cloud Engineering Portfolio**: elegancka strona osobista z fotografią, subtelnymi motywami technicznymi, kartami typu bento, animowanymi ikonami technologii i dopracowanymi case studies projektów.

Strona ma być atrakcyjna dla:

- rekruterów technicznych,
- engineering managerów,
- cloud i DevOps leadów,
- klientów zainteresowanych konsultacjami,
- uczelni i organizatorów konferencji.

Witryna ma komunikować wiarygodność przez prawdziwe doświadczenie, technologie, projekty, certyfikaty, kursy i publikacje. Nie pokazuj fikcyjnych KPI ani pozorowanych danych operacyjnych.

---

## 2. Bezwzględne wymagania prywatności

### Nie wolno publikować

- numeru telefonu,
- odnośnika `tel:`,
- adresu e-mail,
- odnośnika `mailto:`,
- formularza kontaktowego.

Kontakt ma odbywać się **wyłącznie przez LinkedIn**.

Przycisk kontaktowy:

```text
https://www.linkedin.com/in/patryk-jablonski
```

GitHub i ORCID mogą być pokazane jako profile zewnętrzne, ale nie jako alternatywne kanały kontaktowe.

W kodzie, metadanych SEO, JSON-LD, testach, komentarzach i przykładowych danych nie umieszczaj numeru telefonu ani adresu e-mail.

---

## 3. Wybrany stos technologiczny

Zastosuj:

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Motion for React**
- **i18next + react-i18next**
- **Lucide React**
- **Vitest**
- **React Testing Library**
- **ESLint**
- **Prettier**
- **GitHub Actions**
- **GitHub Pages**

Wymagany runtime:

- Node.js 24 LTS,
- npm,
- plik `package-lock.json`.

### Dlaczego ten stos

- GitHub Pages publikuje statyczne pliki, więc Vite jest odpowiedni i nie wymaga serwera.
- React i TypeScript ułatwią późniejsze dodawanie projektów, publikacji i kolejnych sekcji.
- `react-i18next` zapewni pełną obsługę języka polskiego i angielskiego.
- Motion umożliwi płynne animacje bez ciężkiego silnika 3D.
- Tailwind ułatwi spójny responsive design.
- Nie używaj Next.js, SSR ani backendu. Na tym etapie nie są potrzebne.
- Nie używaj Three.js. Efekt ma być nowoczesny, ale szybki i dostępny.

### Instalacja bazowa

Utwórz projekt React + TypeScript bezpośrednio w katalogu głównym repozytorium:

```bash
npm create vite@latest . -- --template react-ts
npm install
```

Zainstaluj zależności:

```bash
npm install motion i18next react-i18next lucide-react clsx
npm install @fontsource-variable/inter @fontsource-variable/jetbrains-mono
```

Zainstaluj narzędzia developerskie:

```bash
npm install -D tailwindcss @tailwindcss/vite
npm install -D vitest jsdom
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
npm install -D eslint-plugin-jsx-a11y prettier
```

Używaj aktualnych stabilnych wersji kompatybilnych z Node.js 24. Zapisz dokładne wersje w `package-lock.json`.

---

## 4. Architektura aplikacji

Witryna ma być pojedynczą stroną z sekcjami i płynnym przewijaniem.

Nie używaj routera w pierwszej wersji. Dzięki temu nie będzie problemów z odświeżaniem ścieżek na GitHub Pages.

Docelowa struktura:

```text
.
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy-pages.yml
├── public/
│   ├── .nojekyll
│   ├── favicon.svg
│   ├── manifest.webmanifest
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── og-cover.png
│   ├── images/
│   │   ├── profile.webp
│   │   ├── profile-fallback.svg
│   │   └── technologies/
│   │       ├── azure.svg
│   │       ├── docker.svg
│   │       ├── terraform.svg
│   │       ├── ansible.svg
│   │       ├── powershell.svg
│   │       ├── bash.svg
│   │       ├── grafana.svg
│   │       ├── prometheus.svg
│   │       └── git.svg
│   └── projects/
│       ├── guestbook/
│       │   ├── azure-architecture-overview.webp
│       │   ├── github-actions-pipeline.webp
│       │   ├── guestbook-application.webp
│       │   └── terraform-guestbook-architecture.svg
│       └── network-lab/
│           └── project-overview.webp
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── AnimatedSection.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── ExternalLink.tsx
│   │   │   ├── IconButton.tsx
│   │   │   ├── InteractiveButton.tsx
│   │   │   ├── InteractiveCard.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── SectionReveal.tsx
│   │   │   ├── SkipLink.tsx
│   │   │   └── TechChip.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── PortfolioPreloader.tsx
│   │   │   └── ScrollProgress.tsx
│   │   ├── hero/
│   │   │   ├── HeroTechnologyOrbit.tsx
│   │   │   ├── HeroActions.tsx
│   │   │   └── StatusBadge.tsx
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectGallery.tsx
│   │   │   └── ProjectImageModal.tsx
│   │   └── ui/
│   │       ├── LanguageSwitcher.tsx
│   │       ├── BentoCard.tsx
│   │       ├── TimelineItem.tsx
│   │       ├── CourseAccordion.tsx
│   │       └── SocialLinks.tsx
│   ├── data/
│   │   ├── profile.ts
│   │   ├── navigation.ts
│   │   ├── expertise.ts
│   │   ├── credentials.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── publications.ts
│   │   └── projects.ts
│   ├── hooks/
│   │   ├── useActiveSection.ts
│   │   ├── useIntroLoader.ts
│   │   ├── useLanguage.ts
│   │   └── usePrefersReducedMotion.ts
│   ├── i18n/
│   │   ├── index.ts
│   │   └── locales/
│   │       ├── pl.json
│   │       └── en.json
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExpertiseSection.tsx
│   │   ├── CredentialsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── AcademicSection.tsx
│   │   └── ContactSection.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── effects.css
│   ├── test/
│   │   └── setup.ts
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── README.md
└── LICENSE
```

Drobne różnice w podziale plików są dozwolone, ale:

- treści nie mogą być porozrzucane po komponentach,
- projekty, certyfikaty, kursy, doświadczenie, edukacja i publikacje muszą być generowane z danych,
- wszystkie teksty interfejsu muszą pochodzić z systemu tłumaczeń,
- dodanie kolejnego projektu, certyfikatu lub kursu nie może wymagać przebudowy JSX sekcji,
- usuń nieużywane komponenty dawnej topologii, poprzedni wadliwy `TechnologyOrbit`, `HeroTechnologyShowcase` oraz nieużywaną wizualizację pipeline, jeżeli po zmianach nie są wykorzystywane.

---

## 5. Konfiguracja Vite i GitHub Pages

Repozytorium nazywa się dokładnie `goldentalentfocus.vercel.app`, dlatego witryna działa w katalogu głównym domeny.

W `vite.config.ts` ustaw:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  build: {
    sourcemap: false,
    target: "es2022",
  },
});
```

Nie ustawiaj:

```ts
base: "/goldentalentfocus.vercel.app/";
```

To byłoby błędne dla repozytorium użytkownika GitHub Pages.

---

## 6. Koncepcja wizualna

### 6.1. Ogólny styl

Strona ma być:

- ciemna,
- profesjonalna,
- techniczna,
- elegancka,
- przestronna,
- nowoczesna,
- lekko futurystyczna,
- bez przesadnego klimatu hackerskiego.

Połącz następujące cechy:

- mocny i czytelny hero z profesjonalną fotografią,
- okrągła profesjonalna fotografia umieszczona w centrum dwóch responsywnych orbit technologii z zawsze poziomymi etykietami,
- techniczne karty bento,
- subtelne elementy terminalowe,
- wyraźne sekcje kompetencji, doświadczenia, certyfikatów i projektów,
- przyjemne animacje podczas przewijania,
- dobry balans pomiędzy wizerunkiem inżyniera a działalnością akademicką.

Nie kopiuj układu, grafiki ani kodu żadnej strony 1:1.

### 6.2. Paleta kolorów

Użyj zmiennych CSS:

```css
:root {
  --color-bg: #050b14;
  --color-bg-elevated: #0a1422;
  --color-surface: #0d1929;
  --color-surface-strong: #101f32;
  --color-border: rgba(151, 169, 194, 0.18);
  --color-border-active: rgba(72, 165, 255, 0.52);

  --color-text: #f3f7fb;
  --color-text-muted: #9daec3;
  --color-text-subtle: #718299;

  --color-azure: #2f8cff;
  --color-azure-strong: #0078d4;
  --color-cyan: #2dd4bf;
  --color-lime: #a3ff73;
  --color-violet: #9f7aea;

  --shadow-glow-azure: 0 0 40px rgba(47, 140, 255, 0.2);
  --shadow-glow-lime: 0 0 36px rgba(163, 255, 115, 0.12);
}
```

Dominują:

- granat,
- bardzo ciemny niebieski,
- grafit.

Akcenty:

- Azure blue,
- jasny cyan,
- oszczędnie użyta limonka.

Nie używaj wielu przypadkowych neonowych kolorów.

### 6.3. Typografia

Użyj lokalnie bundlowanych fontów:

- `Inter Variable` dla tekstu i nagłówków,
- `JetBrains Mono Variable` dla etykiet technicznych, małych statusów i identyfikatorów sekcji.

Przykładowy stos:

```css
font-family: "Inter Variable", Inter, system-ui, sans-serif;
```

Dla elementów technicznych:

```css
font-family: "JetBrains Mono Variable", ui-monospace, monospace;
```

Nagłówki mają korzystać z `clamp()` i nie powodować przepełnienia na telefonie.

### 6.4. Tło

Zbuduj tło bez zewnętrznego obrazu:

- subtelna siatka CSS,
- dwa lub trzy radialne gradienty,
- delikatny noise jako mały inline SVG lub CSS,
- bardzo wolno przemieszczające się plamy światła,
- cienkie linie inspirowane topologią sieci.

Tło nie może utrudniać czytania.

### 6.5. Karty

Karty typu bento:

- półprzezroczyste ciemne tło,
- delikatny border,
- zaokrąglenie od 18 do 24 px,
- miękki cień,
- na hover lekkie uniesienie, aktywny border i subtelny glow,
- bez przesadnego glassmorphism.

Karty nie mogą być używane mechanicznie do każdego fragmentu treści. Stosuj je tam, gdzie poprawiają hierarchię informacji.

### 6.6. Ekran startowy i język interakcji

Przy pierwszym otwarciu strony pokaż krótki, pełnoekranowy ekran startowy inspirowany załączonym materiałem referencyjnym. Nie osadzaj filmu i nie kopiuj jego grafiki. Odtwórz wyłącznie koncepcję etapowego uruchamiania portfolio.

Ekran startowy ma:

- całkowicie zasłaniać aplikację nieprzezroczystym tłem,
- korzystać z obecnego ciemnego tła i akcentów Azure, cyan oraz violet,
- używać monogramu `PJ`,
- pokazywać niewielką wizualizację aktywności chmurowej,
- wskazywać trzy kolejne etapy,
- zawierać płynny pasek postępu i wartość procentową,
- pokazywać wyłącznie centralne okno ładowania na jednolitym tle,
- po ukończeniu przechodzić w hero przez krótki crossfade,
- nie odtwarzać dźwięku,
- nie wykorzystywać AWS ani ikon AWS,
- nie blokować wejścia dłużej niż około 3 sekundy.

Podczas intro nie mogą być widoczne header, hero, fotografia ani żaden inny element strony znajdujący się pod nakładką. Nie stosuj półprzezroczystego tła, `backdrop-filter` ani efektu przyciemnienia odsłaniającego aplikację.

Elementy interaktywne całej witryny mają sprawiać wrażenie spójnego systemu, ale poszczególne sekcje mogą używać różnych, subtelnych wariantów hover i focus. Efekty nie mogą utrudniać czytania ani powodować przesuwania układu.

Szczegółowe wymagania znajdują się w sekcji 18.

## 7. Nawigacja

Sticky header z lekkim blur.

### Polska wersja

- Start
- O mnie
- Kompetencje
- Certyfikaty
- Doświadczenie
- Projekty
- Nauka
- Kontakt

### English version

- Home
- About
- Expertise
- Credentials
- Experience
- Projects
- Academic
- Contact

Po lewej użyj marki:

```text
PJ | DEVOPS
```

Można użyć monogramu `PJ` w zaokrąglonym kwadracie, a pełny napis pokazywać od większych szerokości.

Po prawej:

- linki sekcji,
- przełącznik języka `PL | EN`,
- ikona GitHub,
- na mobile przycisk menu.

Przyciski `PL` i `EN` muszą mieć `cursor: pointer`. Nie twórz niestandardowej grafiki kursora. Użyj standardowej przeglądarkowej rączki dla elementów klikalnych.

Aktywna sekcja ma być zaznaczona animowaną linią lub kapsułą.

Kliknięcie pozycji:

- płynnie przewija do sekcji,
- uwzględnia wysokość sticky header,
- aktualizuje focus w dostępny sposób,
- nie usuwa parametru języka z URL.

Po dodaniu pozycji `Certyfikaty` przełącz menu na wersję mobilną wcześniej, jeżeli pełna nawigacja nie mieści się bez ściskania. Nie zmniejszaj tekstu do nieczytelnego rozmiaru.

Dodaj link `Przejdź do treści`, widoczny po uzyskaniu focusu klawiaturą.

---

## 8. Pełna obsługa języka polskiego i angielskiego

To jest wymaganie krytyczne.

### 8.1. Zasady

- Wszystkie widoczne teksty muszą pochodzić z `pl.json` lub `en.json`.
- Dotyczy to również menu, przycisków, opisów, dat, tekstów alternatywnych, `aria-label`, podpisów ikon, etykiet osi czasu, komunikatów błędów i metadanych strony.
- Nazwy technologii, firm, certyfikatów i oficjalne nazwy kursów mogą pozostać w oryginalnym brzmieniu, jeżeli jest to nazwa własna.
- Przełączenie języka nie przeładowuje strony.
- Język jest zapamiętywany.
- Język jest możliwy do udostępnienia przez URL.
- Wszystkie nowe elementy, w tym hero, galeria, drugi projekt, certyfikaty, kursy i stopka, muszą mieć kompletną wersję polską i angielską.

### 8.2. Styl językowy

W tekstach widocznych na stronie nie używaj znaków pauzy `-` ani półpauzy `-`.

Zamiast nich używaj:

- przecinka,
- kropki,
- dwukropka,
- nawiasów,
- naturalnego sformułowania z `od`, `do`, `since` lub `to`.

Przykłady:

```text
Studia podyplomowe (DevOps)
Magister zarządzania (Zarządzanie projektami)
PhD Studies (Management and Quality)
October 2025 to present (part-time)
```

Nie twórz zdań z nadmiarem technicznych sloganów. Tekst ma brzmieć naturalnie, konkretnie i profesjonalnie.

### 8.3. Źródło wyboru języka

Kolejność:

1. parametr URL `?lang=pl` lub `?lang=en`,
2. `localStorage` pod kluczem `portfolio.language`,
3. język przeglądarki,
4. domyślnie `pl`.

Przykładowe adresy:


### 8.4. Zachowanie przełącznika

Po kliknięciu języka:

1. wywołaj `i18n.changeLanguage(language)`,
2. ustaw `document.documentElement.lang`,
3. zapisz wybór w `localStorage`,
4. zaktualizuj parametr `lang` przez `history.replaceState`,
5. zaktualizuj `document.title`,
6. zaktualizuj meta description,
7. nie resetuj scrolla,
8. nie zamykaj przypadkowo aktywnej sekcji,
9. nie odtwarzaj ponownie wszystkich animacji.

### 8.5. Kontrakt hooka

```ts
type SupportedLanguage = "pl" | "en";

interface UseLanguageResult {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => Promise<void>;
}
```

### 8.6. Dostępność przełącznika

Użyj grupy przycisków:

- `aria-label="Wybór języka"` lub `aria-label="Language selection"`,
- aktywny język ma `aria-pressed="true"`,
- minimum 44 na 44 px na urządzeniach dotykowych,
- wyraźny focus ring.

---

## 9. Sekcja Hero

ID:

```text
home
```

Hero ma zajmować około 85 do 95% wysokości pierwszego viewportu na desktopie, ale nie wymuszaj pełnej wysokości na małych ekranach.

### 9.1. Lewa kolumna

Elementy:

1. Mała techniczna etykieta w obu językach:

```text
AZURE • DEVOPS • SYSTEMS
```

2. Powitanie:

Polski:

```text
Cześć, jestem
```

Angielski:

```text
Hi, I'm
```

3. Imię i nazwisko:

```text
Patryk Jabłoński
```

4. Główny tytuł:

Polski:

```text
Inżynier DevOps i systemów specjalizujący się w Microsoft Azure..
```

Angielski:

```text
DevOps & Systems Engineer focused on Microsoft Azure.
```

5. Role:

Polski:

```text
Inżynier
Wykładowca akademicki
Doktorant
```

Angielski:

```text
Engineer
Academic Lecturer
PhD Student
```

Wyświetl role jako trzy spokojne kapsuły albo czytelną listę. Tekst ma pozostać cały czas obecny w DOM i dostępny dla czytników ekranu. Nie stosuj agresywnego efektu maszyny do pisania.

6. Opis:

Polski:

```text
Łączę ponad 7 lat doświadczenia w IT z praktyką w Azure Cloud, Infrastructure as Code, CI/CD, systemach Windows i Linux oraz automatyzacji. Buduję rozwiązania, które są powtarzalne, bezpieczne i łatwe w utrzymaniu.
```

Angielski:

```text
I combine over 7 years of IT experience with hands-on work in Azure Cloud, Infrastructure as Code, CI/CD, Windows and Linux systems, and automation. I build solutions that are repeatable, secure and maintainable.
```

7. CTA:

Główny przycisk:

- PL: `Zobacz projekty`
- EN: `View projects`
- prowadzi do `#projects`.

Drugi przycisk:

- PL: `Napisz na LinkedIn`
- EN: `Message me on LinkedIn`
- prowadzi do LinkedIn,
- otwiera nową kartę,
- ma `rel="noopener noreferrer"`.

8. Mini linki:

- GitHub,
- LinkedIn,
- ORCID.

9. Niewielki badge:

Polski:

```text
Nowy Sącz, Polska
```

Angielski:

```text
Nowy Sącz, Poland
```

Nie pokazuj statusu `available for work`, jeżeli nie został jawnie ustawiony w danych.

### 9.2. Prawa kolumna: responsywna orbita technologii

Usuń aktualną implementację `HeroTechnologyShowcase`, w której fotografia jest prostokątna, a znaczniki technologii nachodzą na zdjęcie lub układają się pod nim w luźnej siatce.

Usuń także pozostałości wcześniejszego, wadliwego `TechnologyOrbit`, jeżeli nadal istnieją.

Zastąp je komponentem:

```text
HeroTechnologyOrbit
```

Najważniejsza zasada:

> W centrum znajduje się okrągła fotografia. Wokół niej działają dwie lekkie orbity z technologiami. Wszystkie etykiety pozostają przez cały czas idealnie poziome i czytelne.

#### Fotografia centralna

- użyj `public/images/profile.webp`,
- nie generuj nowej fotografii,
- przytnij zdjęcie do idealnego koła przez `aspect-ratio: 1 / 1` oraz `border-radius: 9999px`,
- stosuj `object-fit: cover`,
- twarz ma pozostać wyśrodkowana,
- dodaj cienki border Azure, subtelny cień i delikatny glow,
- fotografia nie może być zasłaniana przez etykiety technologii,
- na desktopie średnica zdjęcia powinna wynosić około 210 do 250 px,
- na tablecie około 180 do 220 px,
- na mobile około 135 do 165 px,
- zachowaj tłumaczony opis alternatywny,
- przy braku pliku pokaż okrągły fallback `PJ`.

#### Technologie

Pokaż wszystkie technologie:

- Microsoft Azure,
- Docker,
- CI/CD,
- Terraform,
- Ansible,
- PowerShell,
- Bash,
- Grafana,
- Prometheus,
- Git.

Każdy element technologii zawiera:

- lokalną ikonę SVG albo mały komponent SVG,
- nazwę technologii w jednej poziomej linii,
- lekkie półprzezroczyste tło,
- delikatny border,
- wysokość około 32 do 40 px zależnie od szerokości,
- `white-space: nowrap`,
- czytelny kontrast.

Nie umieszczaj elementów technologii bezpośrednio na twarzy ani na środku fotografii.

#### Układ orbit

Na desktopie i większym tablecie zastosuj dwie współśrodkowe orbity:

- orbita wewnętrzna: pięć technologii,
- orbita zewnętrzna: pięć technologii,
- orbity obracają się bardzo powoli w przeciwnych kierunkach,
- pełny cykl trwa około 30 do 44 sekund,
- obie linie orbit są cienkie i subtelne,
- orbity nie mogą dominować wizualnie nad fotografią.

Nie obracaj samych kafelków ani tekstu. Obliczaj pozycje elementów jako współrzędne `x` i `y` na podstawie kąta i promienia albo użyj rozwiązania gwarantującego `offset-rotate: 0deg`.

Preferowane rozwiązanie:

- wspólny Motion value czasu,
- dla każdego elementu indywidualny kąt początkowy,
- `x = cos(angle) * radius`,
- `y = sin(angle) * radius`,
- element otrzymuje wyłącznie translację,
- `rotate` elementu zawsze wynosi `0`.

Dzięki temu technologia porusza się po okręgu, ale jej napis nie obraca się, nie przechyla i nie zmienia orientacji.

#### Bezwzględne zakazy

Nie używaj:

- pionowych etykiet,
- obróconych napisów,
- `writing-mode`,
- `rotate(...)` na kafelkach technologii,
- kontrrotacji opartej na niedokładnych, rozjeżdżających się animacjach,
- dużych czarnych prostokątów,
- przypadkowych pozycji absolutnych poza kontenerem orbity,
- elementów wychodzących poza viewport,
- technologii nachodzących na twarz,
- ukrywania nazw do momentu hover.

#### Interakcja

- po hover albo focus dana technologia może delikatnie zwiększyć skalę i glow,
- ruch całej orbity może zostać spowolniony albo zatrzymany podczas hover nad jej obszarem,
- nie zatrzymuj całej strony,
- zachowaj `cursor: default` dla elementów dekoracyjnych, chyba że element jest faktycznie klikalny,
- nazwy technologii umieść również w semantycznej lub ukrytej liście dla czytników ekranu.

### 9.3. Responsywność orbity i reduced motion

#### Desktop

- hero pozostaje dwukolumnowe,
- prawa część ma kwadratowy kontener około 500 do 560 px,
- fotografia jest idealnie wyśrodkowana,
- technologie poruszają się po dwóch orbitach,
- orbitujący układ nie może nachodzić na lewą kolumnę.

#### Tablet

- zmniejsz kontener do około 410 do 470 px,
- proporcjonalnie zmniejsz promienie orbit i kafelki,
- nadal używaj dwóch orbit, jeżeli etykiety nie kolidują,
- zachowaj normalny przepływ dokumentu.

#### Mobile

- hero działa jako jedna kolumna,
- najpierw pokaż treść tekstową, CTA i profile,
- następnie pokaż centralnie komponent orbity,
- nie ustawiaj `min-height: 100vh` ani sztywnej wysokości wymuszającej wycięcie treści,
- komponent orbity ma szerokość `clamp(300px, 92vw, 380px)` i proporcję `1 / 1`,
- wszystkie pozycje absolutne muszą być ograniczone do tego kontenera,
- użyj dwóch mniejszych orbit dla szerokości około 390 px i większej,
- przy szerokości około 360 px możesz zastosować jedną zewnętrzną i jedną bardzo kompaktową orbitę albo jedną orbitę z dziesięcioma równomiernie rozmieszczonymi elementami, jeżeli zapobiega to kolizjom,
- etykiety pozostają poziome,
- dopuszczalne jest zmniejszenie fontu do około 9 do 11 px i wysokości kafelka do około 26 do 32 px,
- nie przenoś technologii do przypadkowej, rozciągniętej listy pod zdjęciem,
- nie powoduj poziomego scrolla,
- po zakończeniu orbity kolejna sekcja zaczyna się dopiero poniżej całego komponentu.

#### Reduced motion

Przy `prefers-reduced-motion`:

- zatrzymaj obie orbity,
- pozostaw wszystkie elementy rozmieszczone statycznie na ich okręgach,
- nie usuwaj technologii,
- nie zmieniaj orientacji etykiet,
- nie zmieniaj kolejności treści,
- zachowaj pełną czytelność i dostępność.

## 10. Sekcja „O mnie”

ID:

```text
about
```

### Nagłówek

Polski:

```text
O mnie
Infrastruktura, automatyzacja i odpowiedzialność za środowiska produkcyjne.
```

Angielski:

```text
About me
Infrastructure, automation and ownership of production environments.
```

### Treść polska

```text
Jestem DevOps, Cloud & Systems inżynierem skoncentrowanym na platformie Microsoft Azure. Pracuję przy utrzymaniu środowisk krytycznych biznesowo, projektowaniu infrastruktury chmurowej, automatyzacji wdrożeń oraz poprawie bezpieczeństwa i obserwowalności systemów.

W codziennej pracy łączę Azure Cloud, Terraform, CI/CD, Docker, PowerShell, Bash, systemy operacyjne Windows i Linux, a także bazy danych. Zależy mi nie tylko na tym, aby rozwiązanie działało, ale również aby było powtarzalne, udokumentowane i możliwe do bezpiecznego rozwijania.

Równolegle prowadzę zajęcia akademickie i rozwijam działalność naukową związaną ze sztuczną inteligencją, automatyzacją i transformacją cyfrową.
```

### Treść angielska

```text
I am a DevOps, Cloud & Systems Engineer focused on Microsoft Azure. I work with business-critical environments, cloud infrastructure design, deployment automation, security, and system observability.

My day-to-day work combines Azure Cloud, Terraform, CI/CD, Docker, PowerShell, Bash, Windows and Linux operating systems as well as databases. I care not only about making a solution work, but also about making it repeatable, documented, secure, and easy to evolve.

Alongside engineering, I teach technology-related courses and conduct research focused on artificial intelligence, automation, and digital transformation.
```

### Karty faktów

Utwórz cztery oszczędne karty:

1. PL: `7+ lat w IT`, EN: `7+ years in IT`
2. PL: `Azure Cloud, IaC i CI/CD`, EN: `Azure Cloud, IaC & CI/CD`
3. PL: `Wykładowca akademicki`, EN: `Academic lecturer`
4. PL: `Publikacje naukowe`, EN: `Scientific publications`

Nie pokazuj liczby publikacji w tej karcie. Szczegółowa lista znajduje się w sekcji akademickiej.

Karty nie mogą wyglądać jak sztuczne KPI z dashboardu sprzedażowego. Mają być oszczędne i wiarygodne.

---

## 11. Sekcja „Kompetencje”

ID:

```text
expertise
```

### Nagłówek

Polski:

```text
Kompetencje
Technologie i praktyki, które wykorzystuję w projektowaniu, wdrażaniu i utrzymaniu systemów.
```

Angielski:

```text
Expertise
Technologies and practices I use to design, deploy, and maintain systems.
```

Nie używaj procentowych pasków umiejętności.

Zbuduj cztery duże karty bento.

### 11.1. Cloud & Infrastructure as Code

Opis PL:

```text
Projektowanie i wdrażanie bezpiecznej infrastruktury Azure z wykorzystaniem deklaratywnego podejścia i powtarzalnych modułów.
```

Opis EN:

```text
Designing and provisioning secure Azure infrastructure through declarative configuration and reusable modules.
```

Technologie:

- Microsoft Azure
- Terraform
- Azure Virtual Network
- Network Security Groups
- Private Endpoints
- Private DNS
- Azure Key Vault
- Azure SQL
- Azure Container Apps
- Azure App Service

### 11.2. CI/CD & Containers

Opis PL:

```text
Automatyzacja budowania, testowania, skanowania i wdrażania aplikacji oraz infrastruktury.
```

Opis EN:

```text
Automating application and infrastructure build, testing, security scanning, and deployment.
```

Technologie:

- GitHub Actions
- Azure DevOps
- GitLab CI/CD
- Docker
- Docker Compose
- Kubernetes
- AKS
- OpenID Connect
- GitOps principles

### 11.3. Systems & Operations

Opis PL:

```text
Administracja systemami, obsługa środowisk produkcyjnych, monitoring i reagowanie na incydenty.
```

Opis EN:

```text
Systems administration, production operations, monitoring, and incident response.
```

Technologie:

- Windows Server
- Linux
- Active Directory
- IIS
- Nginx
- Apache
- Azure Monitor
- Application Insights
- Grafana
- Prometheus
- Backup
- Patching

### 11.4. Automation, Security & Data

Opis PL:

```text
Skrypty, automatyzacja procesów, kontrola bezpieczeństwa oraz praca z bazami danych.
```

Opis EN:

```text
Scripting, process automation, security controls, and database engineering.
```

Technologie:

- PowerShell
- Bash
- Ansible
- Power Automate
- n8n
- Zapier
- Microsoft SQL Server
- T-SQL
- PostgreSQL
- Semgrep
- Trivy
- Checkov
- OWASP ZAP
- Wazuh

### Interakcja

- Delikatnie animuj linie łączące karty.
- Na hover pokaż mikroopis kategorii.
- Na mobile wszystkie informacje mają być widoczne bez hover.
- Ikony technologii używaj oszczędnie.
- Nie pobieraj logo z losowych zewnętrznych CDN.
- Dla marek bez dostępnej ikony użyj tekstowej kapsuły.

---

## 12. Sekcja „Certyfikaty i ukończone kursy”

ID:

```text
credentials
```

### Nagłówek

Polski:

```text
Certyfikaty i ukończone kursy
Certyfikaty i kursy z zakresu chmury, automatyzacji, systemów i danych.
```

Angielski:

```text
Certifications and completed courses
Certifications and courses in cloud, automation, systems, and data.
```

### Certyfikaty

Pokaż pięć kompaktowych kart generowanych z `src/data/credentials.ts`:

1. `Cisco Certified Network Associate (CCNA)`
2. `MTA 98-361: Software Development Fundamentals` Link: https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=129&cvid=aujJ/Lpu2aX4Az8ehOXreg==
3. `MTA 98-364: Database Fundamentals` Link: https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=132&cvid=X1nlRBDLjtayF30NuOmZYA==
4. `MTA 98-381: Introduction to Programming Using Python` Link: https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=395&cvid=iy+jbmdCVwrVfc9ijVnZPA==
5. `DevOps Engineer`, provider: `strefakursow.pl` Link: https://platforma.strefakursow.pl/p/path/certificate/v8ia6y3bmwgo8wgocwskggg08sowg0/PL

Nie dodawaj niepotwierdzonych dat uzyskania, dat ważności, numerów poświadczeń.

Nie przedstawiaj certyfikatów jako aktywnych lub aktualnych, jeżeli dane nie zawierają informacji o statusie. Wyświetlaj wyłącznie nazwę i opcjonalnie organizację lub provider.

### Ukończone kursy

Kursy przechowuj w danych i grupuj w trzech dostępnych kategoriach.

#### Cloud, DevOps i systemy

- `AZ-104: Azure Administrator, Network, Monitoring, DR`, Udemy, Link: https://www.udemy.com/certificate/UC-044b039f-1692-4494-a023-98a41333240a/
- `AZ-500: Azure Security Engineer, Platform Security`, Udemy, Link: https://www.udemy.com/certificate/UC-5111da7d-25a9-4228-a05f-b3c5d7f38d29/
- `Comprehensive Azure DevOps course for everyone`, Udemy, Link: https://udemy-certificate.s3.amazonaws.com/pdf/UC-34174603-3fbf-40db-a9c3-878e15afec5c.pdf
- `DevOps Terraform, IaC on Azure`, Udemy, Link: https://www.udemy.com/certificate/UC-953fee97-31d9-411d-8492-b7e6228bda3d/
- `Docker course for advanced users`, strefakursow.pl, Link: https://api.strefakursow.pl/api/v2/public/certificate/pdf/az2s1mxh40wg44og04wc4sckkw0808k/PL
- `Docker for Beginners, Containerization Basics`, strefakursow.pl, Link: https://api.strefakursow.pl/api/v2/public/certificate/pdf/73z0ys54tu884w0888kws8kc8sow4ss/PL
- `Deploying applications to the server`, strefakursow.pl, https://api.strefakursow.pl/api/v2/public/certificate/pdf/qeiyipnul80scgcwgogo8k40000kksc/PL
- `Introduction to Git and GitHub`, Udemy, Link: https://udemy-certificate.s3.amazonaws.com/pdf/UC-128d6b64-3490-4f24-a7cc-26af70adf249.pdf
- `Linux for programmers`, strefakursow.pl, Link: https://platforma.strefakursow.pl/p/certificate/hash/ee6yfmeqcbsok0kok4s44sc0o8okwgo/PL
- `Microsoft Azure Course from Scratch`, sstrefakursow.pl, Link: https://platforma.strefakursow.pl/p/certificate/hash/jpoal2fpv9ws8k4wskg8go88k8o8gss/PL
- `Networking Basics and Network Configuration in Linux`, strefakursow.pl, Link: https://api.strefakursow.pl/api/v2/public/certificate/pdf/lu7c453f1nkgk4coc08gg8w0sskcwc8/PL
- `Bash Course, Scripting and Automation`, strefakursow.pl, Link: https://api.strefakursow.pl/api/v2/public/certificate/pdf/ttt13os483k0k8c0ow8ww8gks4cgg4c/PL

#### Bazy danych i analityka

- `Big Data: Data analysis using SQL and BigQuery`, Udemy, Link: https://udemy-certificate.s3.amazonaws.com/pdf/UC-4db5705f-9903-4934-aecb-fab066a3c3bb.pdf
- `Introduction to databases`, Codenga, Link: https://api.codenga.pl/api/v2/public/certificate/pdf/t0sfk6hee7ks0oogog8s04404ocwcc0
- `Power BI course, advanced data analysis techniques`, strefakursow.pl, Link: https://api.strefakursow.pl/api/v2/public/certificate/pdf/f6rcrjbx1m8s8040sk88gg8okgcw0ok
- `Power BI course, basics of data analysis and visualization`, strefakursow.pl, Link: https://api.strefakursow.pl/api/v2/public/certificate/pdf/sro96vidlyosg0s4kc4g4o0ws0occo
- `SQL, Practical exercises`, Codenga, Link: https://api.codenga.pl/api/v2/public/certificate/pdf/32wav0za60owgsswccogw8o4kk44wws
- `SQL Developer, specialist certificate`, Codenga, Link: https://api.codenga.pl/api/v2/public/path/certificate/nd59xwi8szkw40wo04owkokwk8gckkw/pdf
- `SQL foundations, exercises`, Codenga, Link: https://api.codenga.pl/api/v2/public/certificate/pdf/kdju7ugo5ds4ws8wggokwgcc0wcwocs
- `SQL foundations, level 1`, Codenga, Link: https://api.codenga.pl/api/v2/public/certificate/pdf/o82p18tm2v408co8wks8s880cs8c40c
- `SQL foundations, level 2`, Codenga, Link: https://api.codenga.pl/api/v2/public/certificate/pdf/gg1r701c9lw04cs844s8ww8wswsk4ww
- `SQL foundations, level 3`, Codenga, Link: https://api.codenga.pl/api/v2/public/certificate/pdf/bb3g7nuunhss00gww84og8ckkkwoc0c
- `T-SQL course in Microsoft SQL Server from basics`, strefakursow.pl, Link: https://api.strefakursow.pl/api/v2/public/certificate/pdf/3wyj5i2eq8ys4c04kow4go8kkssskgs

#### Automatyzacja procesów

- `Efficient company management, automation and optimization of tasks`, strefakursow.pl, Link: https://api.strefakursow.pl/api/v2/public/certificate/pdf/56d8va0mlq4gc8kckgcgwco00oosss4/PL
- `Power Automate, Business Process Automation`, videopoint.pl, Link: https://helion.pl/users/dyplom?id=3ee64e8b88c427d4d16ad897c6306b38

### Układ i interakcja

- Certyfikaty pokazuj od razu.
- Kursy pokaż jako trzy dostępne akordeony lub elementy `<details>`.
- Pierwsza kategoria może być domyślnie otwarta na desktopie, ale wszystkie mają być zamknięte na małych ekranach.
- Nagłówek każdego akordeonu pokazuje nazwę kategorii i liczbę pozycji.
- Użyj `aria-expanded` oraz `aria-controls`, jeżeli implementujesz własny akordeon.
- Animuj wyłącznie wysokość, opacity i niewielkie przesunięcie.
- Nie pokazuj ocen, procentów ukończenia ani fikcyjnych poziomów zaawansowania.
- Nie dodawaj logo platform szkoleniowych, jeżeli nie są dostępne lokalnie.
- Na mobile lista musi być czytelna bez hover.

### Model danych

Użyj modelu podobnego do:

```ts
export interface Certification {
  id: string;
  name: string;
  issuer?: string;
}

export interface CompletedCourse {
  id: string;
  category: "cloudDevOps" | "data" | "automation";
  title: string;
  provider: string;
}
```

Oficjalne nazwy mogą być przechowywane jako dane wspólne dla obu języków. Nagłówki, opisy, etykiety akordeonu i teksty dostępności muszą pochodzić z tłumaczeń.

---

## 13. Sekcja „Doświadczenie”

ID:

```text
experience
```

Zastosuj pionową oś czasu na desktopie i prosty układ kart na mobile.

Każda pozycja ma zawierać krótki opis i grupę technologii lub obszarów. Kapsuły mają zawijać się naturalnie i nie mogą nachodzić na tekst.

### 13.1. Academic Lecturer

Firma lub instytucja:

```text
WSB-NLU w Nowym Sączu
```

Daty:

- PL: `od października 2025 (obecnie, część etatu)`
- EN: `since October 2025 (part-time)`

Tytuł:

- PL: `Wykładowca akademicki`
- EN: `Academic Lecturer`

Opis PL:

```text
Prowadzę zajęcia z zakresu generatywnej sztucznej inteligencji, zarządzania infrastrukturą sieciową, systemów operacyjnych i automatyzacji procesów.
```

Opis EN:

```text
I teach courses in generative artificial intelligence, network infrastructure management, operating systems, and process automation.
```

Kapsuły:

- Generative AI
- Network Infrastructure
- Operating Systems
- Process Automation

### 13.2. Systems & DevOps Engineer

Firma:

```text
OPTIDATA Sp. z o.o.
```

Daty:

- PL: `od kwietnia 2025 (obecnie)`
- EN: `since April 2025`

Opis PL:

```text
Utrzymuję środowiska produkcyjne i infrastrukturę Azure, tworzę pipeline’y CI/CD, rozwijam infrastrukturę w Terraformie, automatyzuję wdrożenia i administrację oraz pracuję nad bezpieczeństwem, monitoringiem, dostępnością i wydajnością systemów.
```

Opis EN:

```text
I operate production environments and Azure infrastructure, build CI/CD pipelines, provision infrastructure with Terraform, automate deployments and administration, and improve system security, monitoring, availability, and performance.
```

Kapsuły:

- Azure architecture
- Terraform
- CI/CD
- PowerShell / Bash
- Windows / Linux
- Monitoring
- Incident response
- Security

### 13.3. IT Support and Implementation Engineer

Firma:

```text
OPTIDATA Sp. z o.o.
```

Daty:

- PL: `2018 do marca 2025`
- EN: `2018 to March 2025`

Opis PL:

```text
Wdrażałem i utrzymywałem oprogramowanie, serwery, sieci i bazy danych, automatyzowałem zadania wdrożeniowe, wspierałem klientów oraz przygotowywałem dokumentację i analizy techniczne.
```

Opis EN:

```text
I deployed and maintained software, servers, networks, and databases, automated implementation tasks, supported clients, and prepared technical documentation and system analyses.
```

Kapsuły:

- Software deployment
- Windows Server
- Networking
- Microsoft Azure
- SQL Server / T-SQL
- PowerShell
- UML / BPMN
- OWASP testing

Nie kopiuj do witryny pełnej listy obowiązków z CV. Portfolio ma być czytelne, a kapsuły mają przedstawiać najważniejsze obszary.

---

## 14. Sekcja „Projekty”

ID:

```text
projects
```

Nagłówek sekcji:

- PL: `Projekty`
- EN: `Projects`

Podtytuł:

- PL: `Praktyczne projekty pokazujące IaC, automatyzację, bezpieczeństwo i pracę z Microsoft Azure.`
- EN: `Practical projects demonstrating Infrastructure as Code, automation, security, and hands-on work with Microsoft Azure.`

Komponenty muszą obsługiwać dowolną liczbę projektów. Nie pokazuj pustych kart ani projektów `wkrótce`.

Usuń z sekcji dawną wizualizację pipeline oraz kafelki:

```text
Kod
Jakość
Bezpieczeństwo
Plan Terraform
Akceptacja
Wdrożenie infrastruktury
Budowa obrazu
Wdrożenie aplikacji
Monitoring
```

Po usunięciu usuń też nieużywany komponent, dane, tłumaczenia, style i testy dotyczące `PipelineVisualization`.

### 14.1. Azure Terraform Docker Guestbook

Repozytorium:

```text
https://github.com/goldentalent626/azure-terraform-docker-guestbook
```

Tagline PL:

```text
Kompletny przepływ DevOps dla aplikacji .NET uruchamianej w Microsoft Azure.
```

Tagline EN:

```text
An end-to-end DevOps workflow for a .NET application running in Microsoft Azure.
```

Opis PL:

```text
Projekt pokazuje pełny proces zaprojektowania, utworzenia, zabezpieczenia i wdrożenia aplikacji chmurowej. Infrastruktura jest tworzona w Terraformie, aplikacja działa w kontenerze Docker, a GitHub Actions realizuje planowanie i wdrożenie infrastruktury, testy, skanowanie bezpieczeństwa, budowę obrazu oraz publikację do Azure Container Apps.
```

Opis EN:

```text
This project demonstrates the complete process of designing, provisioning, securing, and deploying a cloud application. Infrastructure is created with Terraform, the application runs in Docker, and GitHub Actions handles infrastructure planning and deployment, testing, security scanning, image build, and release to Azure Container Apps.
```

Technologie:

- .NET 10 / ASP.NET Core
- Docker
- Terraform
- GitHub Actions
- OpenID Connect
- Azure Container Registry
- Azure Container Apps
- Azure SQL
- Azure Key Vault
- Private Endpoint
- Private DNS
- Log Analytics
- Semgrep
- Trivy
- Checkov
- OWASP ZAP

Najważniejsze cechy PL:

```text
Modułowa infrastruktura jako kod
Uwierzytelnianie pipeline’u do Azure przez OIDC
Sieć prywatna dla Azure SQL
Automatyczne testy i skanowanie bezpieczeństwa
Kontrolowane wdrożenie infrastruktury i aplikacji
Monitoring i centralizacja logów
```

Najważniejsze cechy EN:

```text
Modular Infrastructure as Code
OIDC authentication from GitHub Actions to Azure
Private networking for Azure SQL
Automated testing and security scanning
Controlled infrastructure and application deployment
Monitoring and centralized logs
```

Przyciski:

- PL: `Zobacz repozytorium`
- EN: `View repository`
- PL: `Galeria projektu`
- EN: `Project gallery`

Nie pokazuj przycisku `Live demo`, dopóki nie istnieje pewny publiczny adres demonstracyjny.

### 14.2. Galeria pierwszego projektu

Galeria jest domyślnie zamknięta. Cztery obrazy nie mogą być widoczne podczas pierwszego renderu sekcji.

Przycisk `Galeria projektu`:

- jest elementem `<button>`,
- ma `aria-expanded`,
- ma `aria-controls`,
- po rozwinięciu zmienia etykietę na PL `Ukryj galerię` oraz EN `Hide gallery`,
- nie zmienia pozycji scrolla w gwałtowny sposób.

Po kliknięciu pokaż cztery małe kafelki:

```text
public/projects/guestbook/azure-architecture-overview.webp
public/projects/guestbook/github-actions-pipeline.webp
public/projects/guestbook/guestbook-application.webp
public/projects/guestbook/terraform-guestbook-architecture.svg
```

Układ galerii:

- desktop: cztery równe kafelki w jednym rzędzie, jeżeli szerokość na to pozwala,
- tablet: siatka 2 na 2,
- mobile: jedna lub dwie kolumny zależnie od szerokości,
- kafelki mają proporcje około 16:10 albo spójne `aspect-ratio`,
- użyj `object-fit: cover` lub `contain` zależnie od typu grafiki,
- kafelki mają być zdecydowanie mniejsze niż w pierwszej wersji strony,
- rozwijanie używa subtelnej animacji opacity, wysokości i niewielkiego przesunięcia,
- przy reduced motion galeria pojawia się natychmiast.

Na hover lub focus:

- obraz delikatnie ciemnieje albo przechodzi w częściową skalę szarości,
- pojawia się półprzezroczysta warstwa,
- na środku pojawia się ikona lupy z Lucide,
- nie ukrywaj informacji wyłącznie pod hover.

Kliknięcie kafelka otwiera dostępny modal:

- obraz zajmuje niemal cały ekran,
- maksymalna szerokość około 94vw,
- maksymalna wysokość około 90vh,
- zachowaj proporcje i czytelność diagramów,
- tło ma mocne przyciemnienie,
- modal zamyka się przyciskiem, klawiszem Escape i kliknięciem w backdrop,
- focus zostaje zatrzymany wewnątrz modala,
- po zamknięciu focus wraca do kafelka,
- zablokuj scroll dokumentu podczas otwarcia,
- obraz ma tłumaczony alt oraz opcjonalny podpis,
- przycisk zamknięcia ma minimum 44 na 44 px.

### 14.3. Azure Network Infrastructure Lab

Nazwa projektu:

```text
Azure Network Infrastructure Lab
```

Repozytorium:

```text
https://github.com/goldentalent626/zis-azure-terraform
```

Tagline PL:

```text
Laboratorium Infrastructure as Code przygotowane jako przykład dydaktyczny dla studentów zarządzania infrastrukturą sieciową.
```

Tagline EN:

```text
An Infrastructure as Code lab created as a teaching example for Network Infrastructure Management students.
```

Opis PL:

```text
Projekt wdraża w Microsoft Azure grupę zasobów, sieć wirtualną, trzy segmenty sieci, reguły Network Security Group, maszyny Windows Server oraz maszynę Ubuntu przygotowaną do monitorowania bezpieczeństwa z Wazuh. Pokazuje segmentację sieci, ograniczenie dostępu do warstwy backendowej i powtarzalne tworzenie środowiska przy użyciu Terraform.
```

Opis EN:

```text
The project deploys an Azure Resource Group, a Virtual Network, three network segments, Network Security Groups, Windows Server virtual machines, and an Ubuntu virtual machine prepared for security monitoring with Wazuh. It demonstrates network segmentation, restricted backend access, and repeatable environment provisioning with Terraform.
```

Technologie:

- Microsoft Azure
- Terraform
- Azure Virtual Network
- Network Security Groups
- Windows Server
- Ubuntu Server
- Wazuh
- Git

Cechy PL:

```text
Trzy segmenty sieci: frontend, backend i security
Backend bez bezpośredniego dostępu z Internetu
Maszyny Windows Server dla warstwy frontendowej i backendowej
Ubuntu przygotowane do monitorowania bezpieczeństwa z Wazuh
Projekt dydaktyczny dla studentów
```

Cechy EN:

```text
Three network segments: frontend, backend, and security
Backend without direct Internet exposure
Windows Server virtual machines for frontend and backend layers
Ubuntu prepared for security monitoring with Wazuh
Teaching project created for students
```

Przycisk:

- PL: `Zobacz repozytorium`
- EN: `View repository`

Na ten moment projekt nie ma obowiązkowego obrazu. Ustaw `images: []` i nie pokazuj przycisku galerii, pustego kontenera ani broken image.

Po późniejszym dodaniu pliku:

```text
public/projects/network-lab/project-overview.webp
```

galeria ma pojawić się automatycznie na podstawie danych projektu bez zmiany JSX.

### 14.4. Model danych dla projektów

Użyj interfejsu podobnego do:

```ts
export interface PortfolioProject {
  id: string;
  title: string;
  translationKey: string;
  repoUrl: string;
  demoUrl?: string;
  featured: boolean;
  educational?: boolean;
  technologies: string[];
  images: {
    src: string;
    altKey: string;
    width: number;
    height: number;
  }[];
}
```

`ProjectsSection` ma automatycznie:

- pokazywać wyróżniony projekt jako szersze case study,
- pokazywać pozostałe projekty jako czytelne karty,
- nie pokazywać galerii, jeżeli `images` jest puste,
- obsługiwać kolejne projekty bez zmiany JSX,
- zachować logiczną kolejność tabulatora.

W README opisz proces dodania nowego projektu i obrazów.

---

## 15. Sekcja „Nauka i działalność akademicka”

ID:

```text
academic
```

Ta część ma być jednym z wyróżników witryny.

Zastosuj trzy karty:

1. Edukacja
2. Prowadzone zajęcia
3. Publikacje

### 15.1. Edukacja

Pokaż skróconą listę bez pauz i półpauz.

#### PL

```text
Studia doktoranckie (Zarządzanie i jakość)
Akademia Górnośląska w Katowicach
od 2025 (obecnie)

Studia podyplomowe (DevOps)
WSB-NLU w Nowym Sączu
2025 do 2026

Master of Business Administration
WSB-NLU w Nowym Sączu
2024 do 2025

Magister zarządzania (Zarządzanie projektami)
WSB-NLU w Nowym Sączu
2023 do 2025

Inżynier informatyki i ekonometrii
Uniwersytet DSW Ideis Kraków
2019 do 2023
```

#### EN

```text
PhD Studies (Management and Quality)
Katowice Business University
since 2025

Postgraduate Studies (DevOps)
WSB-NLU in Nowy Sącz
2025 to 2026

Master of Business Administration
WSB-NLU in Nowy Sącz
2024 to 2025

Master of Management (Project Management)
WSB-NLU in Nowy Sącz
2023 to 2025

Engineer's Degree in Computer Science and Econometrics
University DSW Ideis Kraków
2019 to 2023
```

Nie dodawaj niepotwierdzonych tytułów ani certyfikatów.

### 15.2. Prowadzone zajęcia

Polski nagłówek:

```text
Prowadzone zajęcia
```

Angielski:

```text
Courses taught
```

Elementy:

- Generatywna sztuczna inteligencja / Generative AI
- Zarządzanie infrastrukturą sieciową / Network Infrastructure Management
- Systemy operacyjne / Operating Systems
- Automatyzacja procesów / Process Automation

### 15.3. Publikacje

Pokaż trzy publikacje.

#### Publikacja 1

Tytuł:

```text
The Use and Application of Artificial Intelligence in Modern Asset Management Systems
```

Opis bez pauzy:

```text
Management and Quality (Zarządzanie i jakość), 3/2024
```

Link:

```text
https://zij.edu.pl/wp-content/uploads/2024/09/Jablon%CC%81ski.pdf
```

#### Publikacja 2

Tytuł:

```text
Advanced Systems for Managing Volunteer Fire Departments
```

Opis:

```text
MIK-21 International Innovativeness and Competitiveness in the 21st Century, 2024
```

Link:

```text
https://www.fnce.info/wp-content/uploads/2024/09/MIK-21-Aspekty-Spoleczne-%E2%80%93-isbn-978-83-68074-81-9_compressed.pdf
```

#### Publikacja 3

Tytuł:

```text
The Impact of Artificial Intelligence on Optimizing Project Management
```

Opis:

```text
Artificial Intelligence in Theory and Practice (Opportunities, Challenges, Ethics), 2025
```

Link:

```text
https://bc.wydawnictwo-tygiel.pl/public/assets/1084/Sztuczna%20inteligencja%20w%20teorii%20i%20praktyce%20%E2%80%93%20szanse,%20wyzwania,%20etyka.pdf
```

Przyciski:

- PL: `Pełny tekst`
- EN: `Read publication`

ORCID:

```text
https://orcid.org/0009-0000-9122-6862
```

Przycisk:

- PL: `Zobacz profil ORCID`
- EN: `View ORCID profile`

Nie osadzaj pełnych PDF na stronie.

---

## 16. Sekcja „Kontakt”

ID:

```text
contact
```

Ta sekcja ma być prosta i mocna.

### Polski

Nagłówek:

```text
Porozmawiajmy o Chmurze, DevOps, infrastrukturze, automatyzacji, AI, współpracy akademickiej lub projektach technologicznych.
```

Opis:

```text
Najlepszym sposobem kontaktu ze mną jest wiadomość na LinkedIn.
```

Przycisk:

```text
Napisz do mnie na LinkedIn
```

### English

Heading:

```text
Let's talk about Cloud, DevOps, infrastructure, automation, AI, academic cooperation or technology-driven projects.
```

Description:

```text
The best way to contact me is through LinkedIn.
```

Button:

```text
Message me on LinkedIn
```

Link:

```text
https://www.linkedin.com/in/patryk-jablonski
```

Dodatkowo pokaż małe ikony:

- GitHub: `https://github.com/goldentalent626`
- ORCID: `https://orcid.org/0009-0000-9122-6862`

Nie dodawaj:

- numeru telefonu,
- adresu e-mail,
- formularza,
- kalendarza rezerwacji,
- WhatsAppa.

---

## 17. Stopka

Stopka ma być prosta i standardowa dla portfolio.

Główny zapis:

```text
© 2026 Patryk Jabłoński
```

Rok może być generowany programowo, ale w 2026 wynik ma wyglądać dokładnie jak powyżej.

Elementy:

- `Patryk Jabłoński`,
- GitHub,
- LinkedIn,
- ORCID,
- link `Wróć na górę` lub `Back to top`.

Nie zastępuj go innym opisem technologicznym. Nie umieszczaj kontaktowego e-maila ani telefonu.

---

## 18. Ekran startowy, animacje i mikrointerakcje

Wykorzystaj Motion for React i jeden spójny system animacji. Materiał wideo jest wyłącznie referencją zachowania. Nie osadzaj filmu w witrynie, nie kopiuj jego marki i nie dodawaj dźwięku.

### 18.1. Pełnoekranowy ekran startowy

Utwórz komponent:

```text
PortfolioPreloader
```

oraz hook lub niewielki kontroler stanu:

```text
useIntroLoader
```

Ekran startowy ma być pełnoekranową warstwą `fixed` z:

```css
position: fixed;
inset: 0;
z-index: 9999;
background: var(--color-bg);
opacity: 1;
isolation: isolate;
```

Tło musi być całkowicie nieprzezroczyste. Nie używaj:

- `rgba(..., wartość mniejsza niż 1)` jako głównego tła,
- `backdrop-filter`,
- półprzezroczystej nakładki,
- widocznego headera albo hero pod loaderem,
- efektu przyciemnienia, przez który można rozpoznać zawartość strony.

Podczas działania intro użytkownik ma widzieć wyłącznie:

1. jednolite, ciemne tło zgodne z paletą strony,
2. centralne okno ładowania.

Najbezpieczniejsza implementacja:

- renderuj zawartość aplikacji dopiero po zakończeniu intro albo
- podczas intro ustaw główną aplikację jako `inert`, `aria-hidden="true"` i `opacity: 0`,
- przywróć aplikację dopiero podczas końcowego crossfade.

Centralne okno ładowania:

- ma nieprzezroczyste tło `--color-bg-elevated`,
- ma maksymalną szerokość około 600 px,
- na mobile ma szerokość `calc(100vw - 32px)`,
- pozostaje wyśrodkowane w pionie i poziomie,
- może mieć subtelny border, Azure glow i miękki cień,
- nie może być przezroczyste.

Centralna kompozycja powinna zawierać:

1. monogram `PJ` w subtelnym okręgu,
2. niewielką ikonę Microsoft Azure lub neutralną ikonę chmury,
3. animowany, pięcioelementowy wykres aktywności albo prostą falę infrastruktury,
4. tytuł,
5. krótki podtytuł,
6. trzy wiersze etapów,
7. pasek postępu,
8. wartość od `0%` do `100%`.

#### Teksty polskie

Tytuł:

```text
Wdrażam portfolio
```

Podtytuł:

```text
Przygotowuję środowisko chmurowe
```

Etapy:

```text
Inicjalizacja infrastruktury
Uruchamianie pipeline'a CI/CD
Wdrażanie interfejsu portfolio
```

Przycisk pominięcia:

```text
Pomiń intro
```

#### Teksty angielskie

Tytuł:

```text
Deploy portfolio
```

Podtytuł:

```text
Preparing the Cloud environment
```

Etapy:

```text
Initializing infrastracture
Loading pipeline CI/CD
Deploy the portfolio
```

Przycisk pominięcia:

```text
Skip intro
```

Wszystkie teksty pochodzą z i18next. Nie pokazuj AWS, `Amazon Web Services`, fikcyjnych komunikatów o produkcji ani informacji sugerujących prawdziwy stan infrastruktury. Jest to animacja wejściowa, a nie rzeczywisty monitoring zasobów.

#### Przebieg animacji

Cała sekwencja powinna trwać około 4 do 5 sekund:

- etap pierwszy odpowiada zakresowi od 0 do około 33 procent,
- etap drugi odpowiada zakresowi od około 34 do 66 procent,
- etap trzeci odpowiada zakresowi od około 67 do 100 procent,
- aktywny etap ma mocniejszy border, glow i aktywną kropkę,
- ukończony etap może otrzymać subtelny znacznik potwierdzenia,
- pasek postępu ma poruszać się płynnie, bez gwałtownych skoków,
- liczba procentowa ma być zsynchronizowana z paskiem,
- małe dekoracyjne ikony Azure, Terraform albo Workflow mogą delikatnie pojawiać się przy aktywnych etapach,
- przez większość sekwencji aplikacja pod loaderem pozostaje całkowicie niewidoczna,
- dopiero w ostatnich około 200 do 300 ms loader zanika, a hero pojawia się przez kontrolowany crossfade,
- nie dopuszczaj do momentu, w którym półprzezroczysty loader długo pokazuje stronę pod spodem.

Nie twórz wielu niezależnych `setInterval`. Preferuj jedną oś czasu Motion, kontrolowany `requestAnimationFrame` albo pojedynczy stan etapów.

#### Kiedy pokazywać intro

- pokaż intro tylko przy pierwszym twardym otwarciu strony w danej karcie przeglądarki,
- po ukończeniu albo pominięciu zapisz w `sessionStorage` wartość `portfolio.intro.seen`,
- odświeżenie w tej samej sesji może przejść bez intro,
- zmiana języka nie uruchamia intro ponownie,
- kliknięcie linku kotwicowego nie uruchamia intro ponownie,
- nie zapisuj w tym celu danych osobowych,
- zastosuj bezpieczny timeout maksymalnie około 35 sekund, aby błąd animacji nie mógł na stałe zasłonić strony.

`sessionStorage` jest dozwolone wyłącznie dla technicznej flagi wyświetlenia intro.

#### Dostępność ekranu startowego

- nakładka ma `role="status"` i zwięzłe `aria-live="polite"`,
- podczas intro ustaw aplikację jako zajętą przez `aria-busy="true"`,
- zablokuj scroll dokumentu i zawsze przywróć go po zakończeniu,
- dodaj dostępny przycisk `Pomiń intro` lub `Skip intro`,
- klawisz Escape również pomija intro,
- focus nie może trafiać do elementów strony znajdujących się pod nakładką,
- elementy strony pod loaderem nie mogą być dostępne dla klawiatury,
- po zamknięciu ustaw focus na głównym nagłówku hero albo linku pomijania do treści,
- nie odczytuj przez czytnik ekranu każdej zmiany procentowej,
- pasek może używać `role="progressbar"` z aktualizowanym `aria-valuenow`,
- przy `prefers-reduced-motion` pomiń sekwencję i pokaż stronę natychmiast,
- przy błędzie JavaScript zawartość nie może pozostać zasłonięta.

### 18.2. Ujawnianie sekcji podczas przewijania

Rozszerz istniejący `AnimatedSection` albo utwórz wspólny komponent:

```text
SectionReveal
```

Każda główna sekcja po hero ma ujawniać się po wejściu do viewportu. Użyj `IntersectionObserver`, `whileInView` albo równoważnego mechanizmu Motion.

Zasady:

- animacja uruchamia się tylko raz,
- sekcja pozostaje widoczna po opuszczeniu viewportu,
- domyślny próg wynosi około 10 do 18 procent widoczności,
- użyj `rootMargin`, aby animacja rozpoczęła się chwilę przed pełnym wejściem treści,
- tytuł sekcji może pojawić się pierwszy,
- zawartość może zostać ujawniona z krótkim staggerem,
- całkowity czas ujawnienia jednej sekcji nie powinien przekraczać około 0.8 sekundy,
- nie twórz długich opóźnień zmuszających użytkownika do czekania,
- nie ukrywaj zawartości przed wyszukiwarkami ani technologiami asystującymi,
- przejście do sekcji przez link kotwicowy ma natychmiast zapewnić czytelny widok,
- zmiana PL i EN nie odtwarza wszystkich animacji.

Warianty dla sekcji:

- `O mnie`: tekst pojawia się łagodnie z lewej, a karty faktów z niewielkim ruchem w górę,
- `Kompetencje`: karty pojawiają się naprzemiennie z delikatnym staggerem,
- `Certyfikaty`: kompaktowe karty używają fade i skali od około `0.98`,
- `Doświadczenie`: oś czasu odsłania linię, a wpisy pojawiają się kolejno; na mobile użyj tylko ruchu pionowego,
- `Projekty`: case studies pojawiają się przez opacity, niewielki ruch oraz łagodne odsłonięcie obszaru obrazu,
- `Nauka`: trzy kolumny pojawiają się kolejno,
- `Kontakt`: cały panel używa krótkiego fade, skali od około `0.99` i subtelnego glow.

Przy reduced motion wszystkie sekcje są od razu widoczne.

### 18.3. Interakcje wszystkich kart

Każdy wizualny kafelek lub większa karta na stronie ma otrzymać czytelny stan hover i focus. Efekty mają działać wyłącznie na urządzeniach obsługujących precyzyjny hover:

```css
@media (hover: hover) and (pointer: fine);
```

Na urządzeniach dotykowych nie uzależniaj dostępu do informacji od hover.

Wspólne zasady:

- czas reakcji od około 180 do 280 ms,
- brak gwałtownych skoków układu,
- maksymalne uniesienie zwykle od 3 do 6 px,
- border i glow mogą reagować na kursor,
- stan `:focus-visible` ma zapewniać równie czytelny efekt jak hover,
- stan `:active` może używać delikatnej skali około `0.985`,
- nie animuj dużych blurów w każdej klatce,
- nie dodawaj ciągłych animacji po zakończeniu hover,
- nie stosuj identycznego efektu do każdej sekcji,
- zachowaj czytelność tekstu i kontrast.

Zalecane warianty:

#### Karty w sekcji O mnie

- lekkie uniesienie,
- subtelna poświata od dolnej krawędzi,
- delikatne rozjaśnienie krótkiej wartości lub ikony,
- bez przechylania.

#### Karty kompetencji

- uniesienie,
- cienka linia gradientowa przesuwająca się przy górnej krawędzi,
- niewielkie przesunięcie ikony albo nagłówka,
- aktywny border Azure lub cyan,
- kapsuły technologii mogą delikatnie rozjaśnić się z niewielkim staggerem.

#### Karty certyfikatów

- łagodne rozjaśnienie borderu,
- krótki, subtelny refleks przechodzący po powierzchni,
- niewielka zmiana skali ikony certyfikatu,
- bez efektu przypominającego reklamowy neon.

#### Akordeony kursów

- nagłówek przesuwa się maksymalnie o 2 px,
- chevron reaguje na otwarcie,
- lewa albo dolna krawędź otrzymuje kolor aktywnej kategorii,
- elementy listy mogą rozjaśniać tło przy hover,
- nie zamykaj akordeonu przypadkowo przy ruchu kursora.

#### Wpisy doświadczenia

- lekki lift całej karty,
- odpowiadający wpisowi punkt osi czasu otrzymuje glow,
- lewa krawędź albo subtelny gradient wzmacnia hierarchię,
- kapsuły technologii pozostają spokojne i czytelne.

#### Karty projektów

- niewielkie uniesienie,
- delikatny zoom obrazu maksymalnie około `1.03`,
- opcjonalny bardzo subtelny efekt perspektywy do około 1 stopnia tylko dla `pointer: fine`,
- radialny spotlight może podążać za kursorem wewnątrz karty,
- CTA i strzałka mogą przesunąć się o kilka pikseli,
- opis i technologie nie mogą zmieniać położenia.

#### Karty nauki i działalności akademickiej

- uniesienie,
- rozświetlenie pionowej albo górnej linii akcentowej,
- wpisy edukacji, zajęć i publikacji mogą uzyskać subtelne podświetlenie własnego wiersza,
- link publikacji pokazuje niewielki ruch ikony zewnętrznego odnośnika.

#### Karta kontaktowa

- delikatny radialny spotlight reagujący na pozycję kursora,
- subtelny border gradientowy,
- lekkie zwiększenie glow głównego CTA,
- bez agresywnego ruchu całej sekcji.

Możesz utworzyć wspólny komponent `InteractiveCard` z wariantami, ale nie zmuszaj bardzo różnych układów do nieczytelnej abstrakcji.

### 18.4. Interakcje wszystkich przycisków

Przyciski i linki wyglądające jak przyciski mają działać jak jeden spójny system. Możesz wykorzystać komponent:

```text
InteractiveButton
```

Wymagania wspólne:

- każdy aktywny przycisk ma `cursor: pointer`,
- na hover przycisk może unieść się od 1 do 2 px,
- na active może zmniejszyć skalę do około `0.98`,
- focus ring ma być wyraźny i zgodny z WCAG,
- animacja nie może przesuwać sąsiednich elementów,
- etykieta pozostaje czytelna przez cały czas,
- przy reduced motion pozostaw zmianę koloru, borderu i cienia bez przesunięć,
- element disabled nie może sugerować klikalności.

Wariant główny:

- przesuwający się, subtelny gradient Azure i cyan,
- niewielkie wzmocnienie glow,
- ikona albo strzałka przesuwa się maksymalnie o 3 do 4 px,
- refleks może przejść po powierzchni tylko raz podczas hover.

Wariant drugorzędny:

- delikatne wypełnienie tła od lewej albo od środka,
- aktywny border,
- ikona przesuwa się o kilka pikseli,
- bez silnego glow.

Przyciski ikonowe:

- niewielka zmiana skali,
- delikatne tło i border,
- krótki ruch ikony bez chaotycznego obracania.

Przełącznik języka:

- `PL` i `EN` są prawdziwymi elementami `<button>`,
- zawsze używają standardowego `cursor: pointer`,
- hover rozjaśnia tło i border,
- aktywny język nadal ma `aria-pressed="true"`,
- kliknięcie nie może powodować skoku rozmiaru przycisku,
- nie stosuj własnego kursora, animowanej ręki ani obrazu zastępującego systemowy wskaźnik.

Opcjonalny efekt magnetyczny jest dopuszczalny wyłącznie na desktopie z `pointer: fine`, maksymalnie do 3 px i tylko dla głównych CTA. Nie stosuj go do każdego przycisku.

### 18.5. Pozostałe wymagane animacje

1. Delikatny fade i przesunięcie hero po zamknięciu intro.
2. Bardzo subtelne unoszenie wybranych ikon technologii wokół fotografii.
3. Animacja aktywnej pozycji menu.
4. Rozwinięcie i zwinięcie galerii projektu.
5. Subtelny parallax dekoracyjnych gradientów.
6. Pasek postępu przewijania na górze strony.
7. Delikatne rozwinięcie kategorii kursów.
8. Powiększenie obrazu w galerii z krótkim fade modala.

Nie wdrażaj ponownie animowanej wizualizacji pipeline w sekcji projektów.

Nie używaj ciągłego obrotu elementów hero. Technologie nie mogą poruszać się po okręgu, obracać wokół fotografii ani zmieniać orientacji tekstu.

### 18.6. Reguły wydajności

- użyj `LazyMotion`,
- animuj głównie `transform` i `opacity`,
- dla technologii używaj wyłącznie niewielkich przesunięć, bez `rotate`,
- używaj jednego współdzielonego systemu wariantów zamiast dziesiątek przypadkowych timingów,
- nie animuj dużych filtrów blur w każdej klatce,
- zatrzymuj lub ograniczaj animacje poza viewportem,
- nie twórz setek cząsteczek,
- nie używaj ciężkiego canvasu,
- nie blokuj głównego wątku,
- nie twórz wielu timerów JavaScript do animowania ikon i kart,
- nie opóźniaj rzeczywistego ładowania zasobów tylko po to, aby pasek intro trwał dłużej,
- nie importuj dodatkowej ciężkiej biblioteki animacji,
- preferuj Motion albo CSS transform akcelerowany przez GPU,
- `will-change` stosuj oszczędnie, a nie stale do wszystkich kart,
- intro wraz z wyjściem ma zakończyć się maksymalnie w około 3.5 sekundy.

### 18.7. Reduced motion

Obsłuż:

```css
@media (prefers-reduced-motion: reduce);
```

oraz hook Motion.

Przy reduced motion:

- pomiń ekran startowy albo zamknij go natychmiast,
- wyłącz parallax,
- wyłącz zapętlone unoszenie ikon technologii,
- zrezygnuj z ruchu sekcji podczas przewijania,
- pozostaw sekcje natychmiast widoczne,
- wyłącz lift, tilt, magnetic motion i zoom kart,
- pozostaw wyłącznie czytelne zmiany koloru, borderu, cienia i opacity,
- galeria i akordeony otwierają się bez rozbudowanej animacji,
- wszystkie treści są natychmiast dostępne.

Dekoracyjne elementy muszą mieć:

```tsx
aria-hidden="true"
```

---

## 19. Responsive design

Obsłuż co najmniej:

- 360 px,
- 390 px,
- 768 px,
- 1024 px,
- 1440 px,
- 1920 px.

### Mobile

- jedna kolumna,
- ekran startowy ma całkowicie nieprzezroczyste tło i pokazuje wyłącznie centralne okno ładowania,
- centralne okno intro mieści się w 360 px i nie wychodzi poza viewport,
- etapy intro nie wychodzą poza viewport,
- w hero najpierw wyświetla się treść tekstowa, a następnie orbita,
- fotografia w hero jest okrągła i wyśrodkowana w komponencie orbity,
- technologie pozostają na responsywnej orbicie zamiast układać się w rozciągniętej liście,
- wszystkie etykiety technologii pozostają poziome,
- orbita ma własny kwadratowy kontener i nie wychodzi poza jego granice,
- hero nie używa sztywnej wysokości powodującej ucięcie treści,
- sekcje są widoczne natychmiast przy reduced motion,
- efekty kart nie wymagają hover,
- menu otwierane w dostępnym dialogu,
- brak treści dostępnej wyłącznie na hover,
- przyciski minimum 44 px wysokości,
- brak poziomego scrolla,
- galeria projektu jako jedna lub dwie kolumny,
- timeline jako zwykłe karty,
- kursy w zamkniętych akordeonach,
- nagłówki nie mogą wychodzić poza viewport.

### Tablet

- dwukolumnowy hero, jeżeli szerokość na to pozwala,
- fotografia może znajdować się centralnie w prawej kolumnie,
- technologie mogą być rozmieszczone statycznie po bokach fotografii albo w kompaktowej siatce pod nią,
- etykiety pozostają poziome,
- bento może przejść w dwie kolumny,
- galeria projektu ma układ 2 na 2.

### Desktop

- maksymalna szerokość treści około 1240 do 1320 px,
- dużo oddechu,
- hero w dwóch kolumnach,
- fotografia jest większa i stanowi główny element prawej kolumny,
- technologie tworzą lekką, asymetryczną konstelację wokół fotografii,
- brak okrągłego pierścienia, obróconych kart i pionowych napisów,
- prawa kolumna nie może wyglądać jak osobny ciężki dashboard,
- karty kompetencji w interesującym układzie bento,
- wyróżniony projekt jako szerokie case study,
- drugi projekt jako osobna czytelna karta,
- timeline z osią i naprzemiennym układem tylko wtedy, gdy nie pogarsza czytelności.

Po dodaniu ósmej pozycji menu sprawdź szerokości pośrednie. W razie potrzeby przełącz header na menu mobilne wcześniej, zamiast ściskać linki.

---

## 20. Dostępność

Cel: WCAG 2.2 AA.

Wymagania:

- semantyczne `header`, `nav`, `main`, `section`, `footer`,
- jeden główny `h1`,
- logiczna hierarchia nagłówków,
- skip link,
- pełna obsługa klawiatury,
- wyraźny focus,
- brak focus trap poza otwartym modalem lub menu,
- właściwe `aria-expanded`,
- właściwe `aria-current`,
- właściwe etykiety przełącznika języka,
- tekst alternatywny dla obrazów,
- dekoracje bez alt i z `aria-hidden`,
- kontrast co najmniej AA,
- brak informacji przekazywanej wyłącznie kolorem,
- linki zewnętrzne mają czytelne etykiety,
- modal projektu ma dostępne zarządzanie fokusem,
- ekran startowy ma dostępny status, progressbar i możliwość pominięcia,
- focus podczas intro nie trafia pod nakładkę,
- po intro focus wraca do logicznego miejsca w hero,
- stany hover kart mają odpowiedniki `focus-visible`,
- ujawnianie sekcji nie usuwa treści z drzewa dostępności,
- nie używaj migania,
- nie ukrywaj ważnej treści wyłącznie pod hover.

Przyciski i linki mają być prawidłowo rozróżnione:

- nawigacja do URL: `<a>`,
- akcja interfejsu: `<button>`.

---

## 21. SEO i metadane

### 21.1. Tytuły

PL:

```text
Patryk Jabłoński | DevOps, Cloud & Systems Engineer
```

EN:

```text
Patryk Jabłoński | DevOps, Cloud & Systems Engineer
```

### 21.2. Description

PL:

```text
Portfolio Patryka Jabłońskiego: inżyniera DevOps, Cloud i Systems specjalizującego się w Microsoft Azure, Terraform, CI/CD, automatyzacji i środowiskach produkcyjnych.
```

EN:

```text
Portfolio of Patryk Jabłoński: a DevOps, Cloud & Systems Engineer specializing in Microsoft Azure, Terraform, CI/CD, automation, and production environments.
```

### 21.3. Open Graph

Dodaj:

- `og:type=website`,
- `og:url=https://goldentalentfocus.vercel.app/`,
- `og:title`,
- `og:description`,
- `og:image=https://goldentalentfocus.vercel.app/og-cover.png`,
- `twitter:card=summary_large_image`.

`og-cover.png`:

- 1200 × 630 px,
- ciemne tło,
- imię i nazwisko,
- `DevOps, Cloud & Systems Engineer`,
- delikatna topologia Azure,
- bez telefonu i e-maila.

### 21.4. JSON-LD

Dodaj `Person`:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Patryk Jabłoński",
  "url": "https://goldentalentfocus.vercel.app/",
  "jobTitle": "DevOps, Cloud & Systems Engineer",
  "sameAs": [
    "https://github.com/goldentalent626",
    "https://www.linkedin.com/in/patryk-jablonski",
    "https://orcid.org/0009-0000-9122-6862"
  ],
  "knowsAbout": [
    "Microsoft Azure",
    "DevOps",
    "Cloud Engineering",
    "Systems Engineering",
    "Terraform",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "PowerShell",
    "Linux",
    "Windows Server"
  ]
}
```

Nie umieszczaj w JSON-LD telefonu ani e-maila.

### 21.5. Pliki publiczne

`robots.txt`:

```text
User-agent: *
Allow: /

Sitemap: https://goldentalentfocus.vercel.app/sitemap.xml
```

`sitemap.xml` ma zawierać stronę główną.

Dodaj poprawny `canonical`.

---

## 22. PWA i instalowanie

Nie buduj pełnego PWA i nie dodawaj Service Workera w pierwszej wersji.

Dodaj jedynie poprawny `manifest.webmanifest` z nazwą, kolorami i ikoną. Nie komplikuj cache’owania, ponieważ portfolio ma być proste do aktualizacji.

---

## 23. Wydajność

Cele Lighthouse:

- Performance desktop: 95+
- Performance mobile: 90+
- Accessibility: 100 lub jak najbliżej
- Best Practices: 95+
- SEO: 100

Wymagania:

- projektowe obrazy w WebP lub AVIF,
- jawne `width` i `height`,
- `loading="lazy"` dla obrazów poniżej hero,
- fotografia w hero może mieć `fetchpriority="high"`,
- nie ładuj wszystkich dużych obrazów od razu,
- nie importuj całej biblioteki ikon,
- używaj tree-shaking,
- nie dodawaj zewnętrznych skryptów analitycznych,
- nie dodawaj reklam,
- nie dodawaj cookies,
- nie osadzaj filmu referencyjnego,
- nie dodawaj dźwięku ani muzyki do intro,
- intro nie może sztucznie opóźniać pobierania ani renderowania strony,
- nie korzystaj z zewnętrznego API podczas pierwszego renderu,
- nie pobieraj statystyk GitHub na żywo,
- ogranicz JavaScript do rozsądnego minimum,
- unikaj cumulative layout shift.

Nie pokazuj liczby repozytoriów, gwiazdek ani commitów jako danych „live”. Takie dane szybko się dezaktualizują i nie są niezbędne.

---

## 24. Bezpieczeństwo i jakość kodu

- Wszystkie zewnętrzne linki otwierane w nowej karcie mają `rel="noopener noreferrer"`.
- Nie używaj `dangerouslySetInnerHTML`, chyba że dla kontrolowanego JSON-LD.
- Nie renderuj HTML z plików tłumaczeń.
- Nie zapisuj danych osobowych w localStorage; wyłącznie kod języka.
- W `sessionStorage` można zapisać wyłącznie techniczną flagę `portfolio.intro.seen`.
- Nie umieszczaj sekretów w repozytorium.
- Nie dodawaj tokenu GitHub.
- Nie używaj bibliotek z niejasną licencją.
- Dodaj Dependabot dla npm i GitHub Actions.
- Dodaj `npm audit --audit-level=high` do CI.
- Stosuj TypeScript strict.
- Unikaj `any`.
- Komponenty mają być małe i czytelne.
- Usuń console.log z wersji produkcyjnej.

---

## 25. Testy

### 25.1. Testy wymagane

Napisz testy, które sprawdzają:

1. aplikacja renderuje polską wersję,
2. kliknięcie `EN` zmienia treść,
3. kliknięcie `PL` przywraca polską treść,
4. `document.documentElement.lang` jest aktualizowany,
5. parametr `?lang=` jest aktualizowany,
6. wybór języka trafia do localStorage,
7. odświeżenie inicjalizuje język z URL,
8. przycisk LinkedIn ma właściwy URL,
9. na stronie nie ma linków `tel:` ani `mailto:`,
10. dane tłumaczeń nie zawierają tekstu przypominającego numer telefonu,
11. menu mobilne ma poprawne `aria-expanded`,
12. sekcje mają poprawne ID, w tym `credentials`,
13. oba linki repozytoriów są poprawne,
14. nagłówek projektów ma wartość `Projekty` i `Projects`,
15. drugi projekt jest oznaczony jako projekt dydaktyczny,
16. przycisk `Galeria projektu` jest początkowo zwinięty,
17. kliknięcie galerii aktualizuje `aria-expanded` i pokazuje cztery kafelki,
18. zamknięcie galerii ukrywa kafelki,
19. kliknięcie obrazu otwiera modal,
20. Escape zamyka modal,
21. focus wraca do kafelka po zamknięciu modala,
22. drugi projekt bez obrazów nie renderuje pustej galerii,
23. sekcja certyfikatów renderuje pięć certyfikatów,
24. kursy są pogrupowane w trzy kategorie,
25. wpisy doświadczenia mają kapsuły dla wszystkich trzech ról,
26. stopka zawiera `©` oraz imię i nazwisko,
27. stopka nie zawiera opisu o aplikacji React i GitHub Actions,
28. tłumaczenia widoczne na stronie nie zawierają znaków pauzy `-` ani półpauzy `-`,
29. stary komponent pipeline nie jest renderowany,
30. hero zawiera listę dziesięciu technologii,
31. ekran startowy renderuje polskie etapy i nie zawiera AWS,
32. angielska wersja intro używa poprawnych tłumaczeń,
33. progressbar posiada `aria-valuenow` i osiąga zakończenie,
34. ukończenie intro ustawia `portfolio.intro.seen` w `sessionStorage`,
35. istniejąca flaga sesji pomija ponowne intro,
36. Escape albo przycisk pominięcia zamyka intro,
37. przy reduced motion intro nie blokuje strony,
38. sekcje po wejściu do viewportu pozostają widoczne,
39. elementy kart dostępne z klawiatury mają widoczny stan focus,
40. przyciski `PL` i `EN` są elementami button i mają klasę lub styl `cursor: pointer`,
41. wszystkie główne CTA pozostają działające po dodaniu animacji,
42. film referencyjny i dźwięk nie są osadzone w produkcyjnej stronie.

### 25.2. Przykładowe skrypty

W `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "test": "vitest",
    "test:run": "vitest run",
    "check": "npm run format:check && npm run lint && npm run test:run && npm run build"
  }
}
```

Przed zakończeniem pracy uruchom:

```bash
npm run check
npm audit --audit-level=high
```

---

## 26. GitHub Actions: CI

Utwórz `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  pull_request:
    branches:
      - main
  push:
    branches:
      - main

permissions:
  contents: read

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true

jobs:
  quality:
    name: Quality checks
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v7

      - name: Setup Node.js
        uses: actions/setup-node@v6
        with:
          node-version: 24
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Check formatting
        run: npm run format:check

      - name: Lint
        run: npm run lint

      - name: Test
        run: npm run test:run

      - name: Build
        run: npm run build

      - name: Audit production dependencies
        run: npm audit --omit=dev --audit-level=high
```

Jeżeli `npm audit` zgłosi problem zależny od narzędzia developerskiego bez poprawki, nie ignoruj go automatycznie. Opisz problem w podsumowaniu.

---

## 27. GitHub Actions: deployment GitHub Pages

Utwórz `.github/workflows/deploy-pages.yml`:

```yaml
name: Deploy GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: github-pages
  cancel-in-progress: true

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v7

      - name: Setup Node.js
        uses: actions/setup-node@v6
        with:
          node-version: 24
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Run quality checks
        run: |
          npm run format:check
          npm run lint
          npm run test:run

      - name: Build
        run: npm run build

      - name: Configure Pages
        uses: actions/configure-pages@v6

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v5
        with:
          path: ./dist

  deploy:
    name: Deploy
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
```

W ustawieniach repozytorium użytkownik wybierze:

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

---

## 28. README projektu

Utwórz profesjonalny `README.md` po angielsku.

README ma zawierać:

1. nazwę projektu,
2. screenshot hero,
3. adres produkcyjny,
4. opis,
5. funkcje,
6. technologie,
7. strukturę projektu,
8. uruchomienie lokalne,
9. testy,
10. deployment,
11. obsługę i18n,
12. dodawanie projektu,
13. dodawanie obrazu do galerii projektu,
14. podmianę zdjęcia profilowego,
15. zarządzanie certyfikatami i kursami,
16. prywatność,
17. licencję.

Sekcja prywatności:

```text
The public portfolio intentionally does not expose a phone number, email address, contact form, or downloadable full CV. Contact is handled through LinkedIn.
```

Instrukcja dodania projektu:

1. dodaj obiekt do `src/data/projects.ts`,
2. dodaj klucze PL i EN,
3. opcjonalnie dodaj obrazy,
4. uruchom testy i build.

Instrukcja podmiany zdjęcia:

1. przygotuj kwadratowy plik WebP,
2. zapisz go jako `public/images/profile.webp`,
3. nie zmieniaj ścieżki w komponentach,
4. sprawdź kadrowanie na mobile i desktopie.

Instrukcja kursów i certyfikatów ma wskazywać `src/data/credentials.ts`.

---

## 29. Dane stałe

W `src/data/profile.ts` umieść:

```ts
export const profile = {
  name: "Patryk Jabłoński",
  shortName: "PJ",
  location: "Nowy Sącz, Poland",
  githubUrl: "https://github.com/goldentalent626",
  linkedinUrl: "https://www.linkedin.com/in/patryk-jablonski",
  orcidUrl: "https://orcid.org/0009-0000-9122-6862",
  siteUrl: "https://goldentalentfocus.vercel.app/",
} as const;
```

Nie dodawaj pola `phone` ani `email`.

---

## 30. Pliki tłumaczeń

Zorganizuj tłumaczenia w logiczne namespace albo w jednym dobrze uporządkowanym pliku.

Minimalna struktura:

```json
{
  "meta": {},
  "navigation": {},
  "hero": {},
  "about": {},
  "expertise": {},
  "credentials": {},
  "experience": {},
  "projects": {},
  "academic": {},
  "contact": {},
  "footer": {},
  "accessibility": {}
}
```

W namespace `credentials` uwzględnij:

- nagłówek i opis sekcji,
- nagłówki certyfikatów i kursów,
- nazwy kategorii,
- etykiety otwierania i zamykania,
- etykiety dostępności.

W namespace `projects` uwzględnij:

- treści obu projektów,
- `Galeria projektu` i `Project gallery`,
- `Ukryj galerię` i `Hide gallery`,
- opisy alternatywne czterech obrazów,
- etykietę zamknięcia modala.

Nie duplikuj adresów URL w tłumaczeniach. Adresy są w plikach danych.

Daty mają mieć naturalną polską i angielską wersję. Nie używaj pauz ani półpauz jako separatorów.

---

## 31. Stan aktywnej sekcji

Zaimplementuj `useActiveSection` z `IntersectionObserver`.

Wymagania:

- uwzględnij sticky header,
- nie aktualizuj stanu zbyt często,
- aktywna sekcja zaznacza menu,
- link aktywnej sekcji ma `aria-current="location"`,
- nie używaj ciężkiego scroll listenera odpalającego się w każdej klatce.

---

## 32. Obsługa obrazów

### Profil

Oczekiwany plik:

```text
public/images/profile.webp
```

Fallback:

```text
public/images/profile-fallback.svg
```

Fotografii nie generuj automatycznie i nie zastępuj zdjęciem stockowym.

### Ikony technologii

Przechowuj lokalnie w:

```text
public/images/technologies/
```

albo jako małe komponenty SVG w kodzie.

Nie pobieraj ikon z zewnętrznych CDN podczas renderowania strony.

### Projekty

Obrazy pierwszego projektu przechowuj lokalnie w:

```text
public/projects/guestbook/
```

Dla drugiego projektu docelowa ścieżka to:

```text
public/projects/network-lab/project-overview.webp
```

Do czasu dodania pliku projekt ma działać bez obrazu i bez pustej galerii.

Wszystkie obrazy:

- zoptymalizowane,
- z jawnymi wymiarami,
- bez metadanych lokalizacyjnych,
- z poprawnymi altami,
- nie większe niż potrzeba,
- otwierane w modalu bez utraty jakości tekstu na diagramach.

---

## 33. Elementy, których nie należy wdrażać

Nie dodawaj:

- bloga bez treści,
- pustych kart certyfikatów lub kursów,
- sekcji `testimonials` z fikcyjnymi opiniami,
- ocen umiejętności w procentach,
- fikcyjnych KPI,
- dawnej topologii z prostokątnymi węzłami w hero,
- dawnej wizualizacji pipeline w projektach,
- pustej galerii dla drugiego projektu,
- fikcyjnej fotografii profilowej,
- live chatu,
- WhatsAppa,
- telefonu,
- e-maila,
- formularza kontaktowego,
- animowanego kursora na mobile,
- niestandardowego kursora zastępującego systemową rączkę,
- muzyki,
- dźwięku intro,
- osadzonego filmu referencyjnego,
- autoplay video,
- Three.js,
- ciężkiego modelu 3D,
- zewnętrznych trackerów,
- Google Analytics,
- reklam,
- banera cookies,
- pobierania pełnego CV zawierającego dane prywatne,
- automatycznego pobierania danych z GitHub API na każdym wejściu.

---

## 34. Kryteria akceptacyjne

Projekt jest ukończony tylko wtedy, gdy wszystkie punkty są spełnione.

### Funkcjonalność

- [ ] Strona działa lokalnie przez `npm run dev`.
- [ ] Build działa przez `npm run build`.
- [ ] `dist` zawiera kompletną statyczną witrynę.
- [ ] Intro pojawia się przy pierwszym otwarciu w danej sesji.
- [ ] Intro kończy się automatycznie, można je pominąć i nie blokuje strony.
- [ ] Intro używa trzech etapów Azure Cloud oraz paska postępu.
- [ ] Intro nie uruchamia się ponownie po zmianie języka.
- [ ] Wszystkie sekcje są dostępne z menu.
- [ ] Istnieje sekcja `credentials`.
- [ ] Linki kotwic działają.
- [ ] Przełącznik PL/EN działa bez przeładowania.
- [ ] Język jest zapisywany w localStorage.
- [ ] Język jest odczytywany z `?lang=`.
- [ ] `html[lang]` jest aktualizowany.
- [ ] Metadata są aktualizowane.
- [ ] LinkedIn otwiera się poprawnie.
- [ ] Oba projekty otwierają poprawne repozytoria.
- [ ] Galeria pierwszego projektu jest domyślnie ukryta.
- [ ] Galeria rozwija cztery małe kafelki.
- [ ] Modal obrazu działa z klawiaturą.
- [ ] Drugi projekt bez obrazu nie pokazuje broken image.
- [ ] GitHub Pages workflow jest poprawny.

### Treść i prywatność

- [ ] Na stronie nie ma numeru telefonu.
- [ ] Na stronie nie ma adresu e-mail.
- [ ] Nie istnieje link `tel:`.
- [ ] Nie istnieje link `mailto:`.
- [ ] Nie istnieje formularz kontaktowy.
- [ ] Kontakt prowadzi wyłącznie do LinkedIn.
- [ ] Nie jest publikowane pełne obecne CV.
- [ ] Nie ma fikcyjnych statystyk.
- [ ] Nie ma pustych kart przyszłych projektów.
- [ ] Certyfikaty i kursy odpowiadają danym ze specyfikacji.
- [ ] W tekstach widocznych na stronie nie ma znaków `-` ani `-`.
- [ ] Wszystkie zmiany są dostępne po polsku i angielsku.

### Design

- [ ] Witryna jest ciemna z akcentami Azure, cyan i lime.
- [ ] Hero zawiera fotografię albo fallback `PJ`.
- [ ] Fotografia w hero jest okrągła i znajduje się w centrum responsywnej orbity.
- [ ] Wokół fotografii widoczne są wszystkie wymagane technologie.
- [ ] Technologie poruszają się po jednej lub dwóch responsywnych orbitach.
- [ ] Wszystkie etykiety technologii są przez cały czas poziome i czytelne.
- [ ] Kafelki technologii nie obracają się razem z orbitą.
- [ ] Orbity zatrzymują się i pozostają czytelne przy reduced motion.
- [ ] Stara topologia została usunięta.
- [ ] Stara wizualizacja pipeline została usunięta.
- [ ] Galeria używa małych kafelków.
- [ ] Hover galerii pokazuje ikonę lupy.
- [ ] Powiększony obraz zajmuje niemal cały ekran.
- [ ] Karty bento są spójne.
- [ ] Każdy typ karty ma czytelny hover oraz focus.
- [ ] Karty w różnych sekcjach nie używają jednej identycznej animacji.
- [ ] Karty nie przesuwają układu i nie ukrywają treści pod hover.
- [ ] Wszystkie przyciski mają spójne stany hover, focus i active.
- [ ] Przełącznik PL i EN pokazuje standardowy kursor pointer.
- [ ] Sekcje ujawniają się kolejno podczas przewijania i animują się tylko raz.
- [ ] Ekran startowy pasuje do palety Azure, nie zawiera AWS i całkowicie zasłania stronę nieprzezroczystym tłem.
- [ ] Mobile nie ma poziomego scrolla.
- [ ] Nie ma problemów z kontrastem.
- [ ] Animacje są subtelne i płynne.
- [ ] Reduced motion działa.

### Kod

- [ ] TypeScript strict.
- [ ] Brak nieuzasadnionego `any`.
- [ ] Brak widocznych tekstów hardcoded w komponentach.
- [ ] Dane projektów są w osobnym pliku.
- [ ] Dane certyfikatów i kursów są w osobnym pliku.
- [ ] Doświadczenie jest generowane z danych.
- [ ] Tłumaczenia są kompletne.
- [ ] Brak nieużywanego `CloudTopology`.
- [ ] Brak starego, wadliwego `TechnologyOrbit`, `HeroTechnologyShowcase` i ich nieużywanych stylów.
- [ ] Istnieje komponent `HeroTechnologyOrbit`.
- [ ] Istnieje komponent lub równoważna implementacja `PortfolioPreloader`.
- [ ] Istnieje wspólny mechanizm ujawniania sekcji.
- [ ] Istnieje wspólny system wariantów kart i przycisków bez nadmiernej duplikacji.
- [ ] `sessionStorage` używa wyłącznie technicznej flagi intro.
- [ ] Brak nieużywanego `PipelineVisualization`.
- [ ] ESLint przechodzi.
- [ ] Prettier przechodzi.
- [ ] Testy przechodzą.
- [ ] Build przechodzi.
- [ ] Audit produkcyjnych zależności nie wykazuje podatności high lub critical.

---

## 35. Kolejność realizacji

Realizuj zmiany w tej kolejności.

### Etap 1: analiza istniejącej aplikacji

- przeczytaj `.github/copilot-instructions.md`,
- przeczytaj `docs/portfolio-spec.md`,
- przeanalizuj istniejące komponenty, dane, tłumaczenia, style i testy,
- nie inicjalizuj projektu ponownie,
- ustal, które stare komponenty można usunąć po refaktoryzacji,
- porównaj obecną implementację z wymaganiami z poprzedniego i bieżącego zakresu.

### Etap 2: ekran startowy i globalny system ruchu

- dodaj `PortfolioPreloader`,
- dodaj trzy etapy Azure Cloud, progressbar i tłumaczenia PL oraz EN,
- dodaj pomijanie przez przycisk i Escape,
- dodaj flagę `portfolio.intro.seen` w `sessionStorage`,
- dodaj fail safe i obsługę reduced motion,
- dodaj albo rozszerz `SectionReveal`,
- przygotuj wspólne warianty `InteractiveCard` i `InteractiveButton`,
- zapewnij standardowy `cursor: pointer` dla PL, EN i wszystkich przycisków.

### Etap 3: hero i nawigacja

- zmień markę na `PJ | DEVOPS`,
- dodaj `AZURE CLOUD` w etykiecie hero,
- usuń obecną implementację `HeroTechnologyShowcase` oraz pozostałości wadliwego `TechnologyOrbit`,
- dodaj komponent `HeroTechnologyOrbit`,
- przytnij fotografię do koła i umieść ją w centrum jednej lub dwóch responsywnych orbit,
- animuj pozycje technologii po okręgu bez obracania kafelków,
- zachowaj wszystkie etykiety w poziomie,
- zachowaj fallback bez broken image,
- połącz wyjście intro z ujawnieniem hero,
- zweryfikuj mobile i reduced motion.

### Etap 4: treści, doświadczenie i interakcje kart

- zmień kartę publikacji,
- dodaj kapsuły dla wykładowcy,
- dodaj kapsuły dla IT Support,
- usuń pauzy i półpauzy z treści,
- zaktualizuj oba języki,
- dodaj wariant hover i focus dla kart O mnie, kompetencji oraz doświadczenia.

### Etap 5: certyfikaty i kursy

- dodaj dane,
- dodaj tłumaczenia,
- dodaj sekcję i nawigację,
- dodaj dostępne akordeony,
- dodaj osobne interakcje certyfikatów i kursów,
- sprawdź responsywność headera.

### Etap 6: projekty

- zmień nagłówek sekcji na `Projekty` i `Projects`,
- dodaj drugi projekt,
- usuń pipeline i jego kafelki,
- przebuduj galerię pierwszego projektu,
- dodaj modal obrazu,
- nie pokazuj pustej galerii drugiego projektu,
- dodaj interakcje kart projektów oraz wszystkich CTA.

### Etap 7: nauka, kontakt i stopka

- użyj nawiasów w nazwach kierunków,
- zmień `Prowadzone obszary` na `Prowadzone zajęcia`,
- usuń pauzy z opisów publikacji,
- dodaj różne interakcje kart akademickich,
- dodaj spotlight i focus dla karty kontaktowej,
- uprość stopkę do `© rok Patryk Jabłoński` i linków.

### Etap 8: reveal sekcji i końcowa jakość

- zastosuj ujawnianie tylko raz do wszystkich sekcji po hero,
- sprawdź, czy hover i focus nie powodują layout shift,
- sprawdź klawiaturę, focus, Escape i pomijanie intro,
- sprawdź 360, 390, 768, 1024, 1440 i 1920 px,
- sprawdź `hover: none`, `pointer: coarse` i reduced motion,
- uzupełnij testy,
- uruchom lint,
- uruchom formatowanie,
- uruchom testy,
- uruchom build,
- uruchom audit.

Nie zatrzymuj się po przygotowaniu planu. Po analizie przejdź bezpośrednio do implementacji.

---

## 36. Inspiracje wizualne

Traktuj je wyłącznie jako inspiracje. Nie kopiuj kodu ani layoutu 1:1.

```text
https://yeshwanthlm.in/
https://jeanphi-baconnais.gitlab.io/
https://adityaseth.in/
https://neokit.app/
https://aradhyapuneeth.github.io/
https://ashik.ie/
https://atanu-portfolio-devsecops-production.up.railway.app/
https://atharvakote.netlify.app/home
https://cameldjoulako.com/#home
https://hasan-ashab.vercel.app/
https://hezy.netlify.app/
https://poorvajhinge.vercel.app/
```

Najważniejszy kierunek:

- nowoczesny charakter portfolio DevOps i Azure Cloud,
- czytelność oraz ludzki charakter klasycznej strony osobistej,
- duża fotografia i lekka prezentacja technologii zamiast ciężkiego diagramu,
- krótki ekran startowy Azure Cloud i spójny system mikrointerakcji,
- własna tożsamość wizualna `PJ | DEVOPS`.

---

## 37. Oczekiwany rezultat

Po wdrożeniu odwiedzający ma w ciągu kilku sekund zrozumieć:

1. kim jest Patryk,
2. że specjalizuje się w Azure Cloud, DevOps, chmurze i systemach,
3. że ma doświadczenie produkcyjne,
4. że pracuje z Terraform, CI/CD, Docker, Ansible, PowerShell, Bash, Grafana, Prometheus i Git,
5. że posiada certyfikaty i stale rozwija kompetencje przez ukończone kursy,
6. że prowadzi działalność akademicką,
7. że posiada dwa rzeczywiste projekty, w tym projekt dydaktyczny dla studentów,
8. że można skontaktować się z nim przez LinkedIn.

Końcowy efekt ma być nowoczesny, szybki, wiarygodny i łatwy do rozbudowy o kolejne projekty, certyfikaty i kursy.

Pierwsze wejście ma rozpoczynać się krótkim, profesjonalnym intro Azure Cloud. Podczas dalszego korzystania sekcje, karty i przyciski mają reagować na użytkownika w sposób zauważalny, ale spokojny, dostępny i wydajny.

---
