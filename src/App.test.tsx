import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import i18n from "./i18n";

describe("Portfolio app", () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    window.history.replaceState({}, "", "/");
  });

  it("renders the intro and progressbar", () => {
    render(<App />);

    expect(screen.getByText("Deploying portfolio")).toBeInTheDocument();
    expect(
      screen.getByText("Preparing the cloud environment"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("progressbar", {
        name: "Portfolio launch progress",
      }),
    ).toBeInTheDocument();
  });

  it("skips the intro with the button and stores the session flag", async () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Skip intro" }));

    await waitFor(() => {
      expect(screen.queryByText("Deploying portfolio")).not.toBeInTheDocument();
      expect(sessionStorage.getItem("portfolio.intro.seen")).toBe("true");
    });
  });

  it("skips the intro on Escape and stores the session flag", async () => {
    render(<App />);

    fireEvent.keyDown(window, { key: "Escape" });

    await waitFor(() => {
      expect(screen.queryByText("Deploying portfolio")).not.toBeInTheDocument();
      expect(sessionStorage.getItem("portfolio.intro.seen")).toBe("true");
    });
  });

  it("does not render the intro again when the session flag is already set", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");

    render(<App />);

    expect(screen.queryByText("Deploying portfolio")).not.toBeInTheDocument();
  });

  it("renders in English and has required section ids", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Tymir Barr" }),
    ).toBeInTheDocument();
    expect(document.getElementById("home")).toBeInTheDocument();
    expect(document.getElementById("about")).toBeInTheDocument();
    expect(document.getElementById("expertise")).toBeInTheDocument();
    expect(document.getElementById("experience")).toBeInTheDocument();
    expect(document.getElementById("credentials")).toBeInTheDocument();
    expect(document.getElementById("projects")).toBeInTheDocument();
    expect(document.getElementById("education")).toBeInTheDocument();
    expect(document.getElementById("contact")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Projects" }),
    ).toBeInTheDocument();
  });

  it("renders the MBTI quiz engine project", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: "Adaptive MBTI Personality Quiz Engine",
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("Bayesian Inference").length).toBeGreaterThan(0);
  });

  it("renders the hero contact CTA and points it to #contact", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    const heroContact = screen.getByRole("link", { name: "Contact me" });
    expect(heroContact).toHaveAttribute("href", "#contact");
  });

  it("has LinkedIn and repository links, and no tel links", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    const links = screen.getAllByRole("link");
    const hrefs = links.map((link) => link.getAttribute("href"));

    expect(hrefs).toContain(
      "https://github.com/goldentalent626/mbti-quiz-adaptive-engine",
    );

    expect(hrefs).toContain("https://www.linkedin.com/in/tymir-barr/");
    expect(hrefs).toContain(
      "https://github.com/goldentalent626/zis-azure-terraform",
    );
    expect(hrefs.some((href) => href?.startsWith("tel:"))).toBe(false);
  });

  it("renders GitHub and LinkedIn icons in home and footer (no email set)", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    const { container } = render(<App />);

    expect(container.querySelectorAll("#home a.social-link")).toHaveLength(2);
    expect(container.querySelectorAll("footer a.social-link")).toHaveLength(2);
  });

  it("hides the email button and email icons while no email is set", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    expect(
      screen.queryByRole("link", { name: "Send me an email" }),
    ).not.toBeInTheDocument();
    expect(screen.queryAllByRole("link", { name: "Mail" })).toHaveLength(0);
  });

  it("does not contain phone-like text in translations", () => {
    const enBundle = JSON.stringify(
      i18n.getResourceBundle("en", "translation"),
    );
    const phoneRegex = /\+?\d[\d\s().-]{6,}/;

    expect(phoneRegex.test(enBundle)).toBe(false);
  });

  it("toggles mobile menu aria-expanded state", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);
    const menuButton = screen.getByRole("button", { name: "Open menu" });

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");
  });

  it("renders the certifications section with the badge row", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Certifications" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Current Certifications" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: "Microsoft Certified: Azure Fundamentals",
      }),
    ).toBeInTheDocument();
    expect(screen.queryByText("Completed courses")).not.toBeInTheDocument();
  });

  it("keeps the project gallery collapsed by default and toggles aria-expanded", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    const galleryButton = screen.getAllByRole("button", {
      name: "Project gallery",
    })[0];

    expect(galleryButton).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryAllByRole("button", { name: "Open image preview" }),
    ).toHaveLength(0);

    fireEvent.click(galleryButton);

    expect(galleryButton).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getAllByRole("button", { name: "Open image preview" }),
    ).toHaveLength(4);

    fireEvent.click(
      screen.getAllByRole("button", { name: "Hide gallery" })[0],
    );

    expect(
      screen.getAllByRole("button", { name: "Project gallery" })[0],
    ).toHaveAttribute("aria-expanded", "false");
  });

  it("opens modal through portal and closes on Escape with focus return", async () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    fireEvent.click(
      screen.getAllByRole("button", { name: "Project gallery" })[0],
    );
    const imageButtons = screen.getAllByRole("button", {
      name: "Open image preview",
    });

    fireEvent.click(imageButtons[0]);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(dialog.parentElement).toBe(document.body);
    fireEvent.keyDown(window, { key: "Escape" });

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      expect(imageButtons[0]).toHaveFocus();
    });
  });

  it("closes modal by close button, backdrop, and enlarged image click", async () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    fireEvent.click(
      screen.getAllByRole("button", { name: "Project gallery" })[0],
    );
    const imageButtons = screen.getAllByRole("button", {
      name: "Open image preview",
    });

    fireEvent.click(imageButtons[0]);
    const closeButtons = screen.getAllByRole("button", {
      name: "Close preview",
    });
    fireEvent.click(
      closeButtons.find((button) =>
        button.className.includes("fixed right-4 top-4"),
      ) as HTMLElement,
    );
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    fireEvent.click(imageButtons[0]);
    fireEvent.click(
      document.querySelector(
        '[role="dialog"] > button.relative.z-\\[10001\\]',
      ) as HTMLElement,
    );
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    fireEvent.click(imageButtons[0]);
    fireEvent.click(
      document.querySelector(
        '[role="dialog"] > button.absolute.inset-0',
      ) as HTMLElement,
    );
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("renders galleries for the MBTI engine and the network lab", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    expect(
      screen.getAllByRole("button", { name: "Project gallery" }),
    ).toHaveLength(2);

    fireEvent.click(
      screen.getAllByRole("button", { name: "Project gallery" })[1],
    );

    expect(
      screen.getByAltText(
        "Azure Network Infrastructure Lab architecture overview",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(
        "Infrastructure deployment view for Azure Network Infrastructure Lab",
      ),
    ).toBeInTheDocument();
    expect(screen.queryByText("Code")).not.toBeInTheDocument();
  });

  it("renders all experience tag groups and the simplified footer", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    expect(screen.getAllByText("Data Visualization").length).toBeGreaterThan(0);
    expect(
      screen.getAllByText("Healthcare Platforms").length,
    ).toBeGreaterThan(0);
    expect(screen.getByText("© 2026 Tymir Barr")).toBeInTheDocument();
    expect(screen.queryByText(/React/i)).not.toBeInTheDocument();
  });

  it("renders ten hero technologies", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    const technologyNames = [
      "OpenAI",
      "Python",
      "TypeScript",
      "Node.js",
      "Vue.js",
      "Next.js",
      "AWS",
      "Docker",
      "PostgreSQL",
      "Data Visualization",
    ];

    technologyNames.forEach((technology) => {
      expect(screen.getAllByText(technology).length).toBeGreaterThan(0);
    });
  });

  it("renders exactly three hero orbit rings", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    expect(screen.getAllByTestId("hero-orbit-ring")).toHaveLength(3);
  });

  it("uses equal desktop layout for expertise and single-column layout for experience cards", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    const { container } = render(<App />);

    const expertiseGrid = container.querySelector(
      "#expertise .grid.items-stretch",
    );
    const experienceGrid = container.querySelector("#experience .grid.gap-4");

    expect(expertiseGrid?.className).toContain("md:auto-rows-fr");
    expect(experienceGrid?.className).not.toContain("md:grid-cols-3");
    expect(experienceGrid?.className).not.toContain("md:auto-rows-fr");

    const expertiseCards = container.querySelectorAll(
      "#expertise .group\\/card.flex.h-full.flex-col",
    );
    const experienceCards = container.querySelectorAll(
      "#experience .group\\/card.flex.flex-col.h-full",
    );

    expect(expertiseCards.length).toBeGreaterThan(0);
    expect(experienceCards.length).toBeGreaterThan(0);
  });

  it("does not render en dash or em dash characters in visible text", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    const { container } = render(<App />);
    const visibleText = container.textContent ?? "";

    expect(visibleText).not.toMatch(/[—–]/);
  });

  it("marks the hero orbit as reduced motion and skips the intro when the media query requests it", async () => {
    const originalMatchMedia = window.matchMedia;

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query: string) => ({
        matches: query === "(prefers-reduced-motion: reduce)",
        media: query,
        onchange: null,
        addEventListener: () => undefined,
        removeEventListener: () => undefined,
        addListener: () => undefined,
        removeListener: () => undefined,
        dispatchEvent: () => false,
      }),
    });

    render(<App />);

    await waitFor(() => {
      expect(
        document.querySelector('[data-reduced-motion="true"]'),
      ).toBeInTheDocument();
      expect(screen.queryByText("Deploying portfolio")).not.toBeInTheDocument();
    });

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: originalMatchMedia,
    });
  });

  it("does not reference the legacy TechnologyOrbit component in the rendered app", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    expect(screen.queryByText("TechnologyOrbit")).not.toBeInTheDocument();
  });
});
