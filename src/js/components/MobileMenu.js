/**
 * MobileMenu
 * Controls responsive navigation, keyboard escape and outside-click closure.
 */
import { BaseComponent } from "../core/BaseComponent.js";

export class MobileMenu extends BaseComponent {
  /** @param {HTMLElement} rootElement Header root. */
  constructor(rootElement) {
    super(rootElement);
    this.toggleButton = rootElement.querySelector("[data-menu-toggle]");
    this.navigationPanel = rootElement.querySelector("[data-mobile-nav]");
    this.isOpen = false;
  }

  /** Registers all menu interactions. */
  initialize() {
    if (!this.toggleButton || !this.navigationPanel) return;
    this.registerEvent(this.toggleButton, "click", () => this.isOpen ? this.close() : this.open());
    this.registerEvent(document, "keydown", (event) => this.handleKeyboard(event));
    this.registerEvent(document, "click", (event) => this.handleOutsideClick(event));
    this.registerEvent(this.navigationPanel, "click", (event) => { if (event.target.closest("a")) this.close(); });
  }

  /** Opens the menu and synchronises accessible state. */
  open() { this.isOpen = true; this.navigationPanel.hidden = false; this.toggleButton.setAttribute("aria-expanded", "true"); document.body.classList.add("menu-open"); }
  /** Closes the menu and synchronises accessible state. */
  close() { this.isOpen = false; this.navigationPanel.hidden = true; this.toggleButton.setAttribute("aria-expanded", "false"); document.body.classList.remove("menu-open"); }
  /** Closes the menu when Escape is pressed. */
  handleKeyboard(event) { if (event.key === "Escape" && this.isOpen) { this.close(); this.toggleButton.focus(); } }
  /** Closes the menu when a pointer action occurs outside the header. */
  handleOutsideClick(event) {
    const clickedBackdrop = event.target === this.navigationPanel;
    if (this.isOpen && (clickedBackdrop || !this.rootElement.contains(event.target))) this.close();
  }
}
