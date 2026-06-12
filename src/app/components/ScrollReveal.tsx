import { useEffect } from "react";
import { useLocation } from "react-router";

const REVEAL_SELECTOR = [
  "h1",
  "h2",
  "h3",
  "p",
  ".geis-pop-card",
  ".geis-button-hover",
  "article",
].join(",");

function hasMotionUtility(element: Element) {
  return /\b(?:-?translate|rotate|scale|transform)\b/.test(
    element.getAttribute("class") ?? "",
  );
}

function getRevealKind(element: Element) {
  if (element.matches(".geis-pop-card, article")) {
    return "card";
  }

  if (element.matches("h1, h2, h3")) {
    return "heading";
  }

  if (element.matches(".geis-button-hover")) {
    return "action";
  }

  return "copy";
}

export default function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.querySelector<HTMLElement>("[data-page-content='true']");

    if (!root) {
      return;
    }

    const elements = Array.from(
      root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    ).filter((element) => {
      if (element.closest("[data-no-scroll-reveal='true']")) {
        return false;
      }

      const text = element.textContent?.trim() ?? "";
      return text.length > 0 || element.matches(".geis-pop-card, article");
    });

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    elements.forEach((element, index) => {
      element.classList.add("geis-scroll-reveal");
      element.classList.add(`geis-reveal-${getRevealKind(element)}`);

      if (hasMotionUtility(element)) {
        element.classList.add("geis-reveal-fade-only");
      }

      element.style.setProperty("--reveal-delay", `${Math.min(index % 8, 7) * 45}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.08,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
