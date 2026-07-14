/** DOM lookup helpers that fail clearly when required markup is absent. */
export class DOMUtils {
  /** Returns a required descendant element. */
  static required(selector, root = document) {
    const element = root.querySelector(selector);
    if (!(element instanceof HTMLElement)) throw new Error(`Required element not found: ${selector}`);
    return element;
  }

  /** Returns all matching elements as a stable array. */
  static all(selector, root = document) { return [...root.querySelectorAll(selector)]; }
}
