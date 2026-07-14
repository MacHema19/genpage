/**
 * ScrollReveal
 * Adds progressive entrance states while respecting reduced-motion preferences.
 */
export class ScrollReveal {
  /** Activates reveal elements on the current page. */
  initialize() {
    const elements = [...document.querySelectorAll("[data-reveal]")];
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible")); return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    elements.forEach((element) => observer.observe(element));
  }
}
