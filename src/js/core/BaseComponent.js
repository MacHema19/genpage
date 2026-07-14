/**
 * BaseComponent
 * Provides shared event registration and deterministic cleanup behaviour.
 */
export class BaseComponent {
  /** @param {HTMLElement} rootElement Root node controlled by the component. */
  constructor(rootElement) {
    if (!(rootElement instanceof HTMLElement)) throw new TypeError("A valid root element is required.");
    this.rootElement = rootElement;
    this.eventListeners = [];
  }

  /** Registers an event listener for later cleanup. */
  registerEvent(target, eventName, handler, options) {
    target.addEventListener(eventName, handler, options);
    this.eventListeners.push({ target, eventName, handler, options });
  }

  /** Removes every event listener registered by the component. */
  destroy() {
    this.eventListeners.forEach(({ target, eventName, handler, options }) => target.removeEventListener(eventName, handler, options));
    this.eventListeners = [];
  }
}
