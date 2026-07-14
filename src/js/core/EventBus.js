/**
 * EventBus
 * Small event target wrapper for decoupled page-level communication.
 */
export class EventBus {
  constructor() { this.target = new EventTarget(); }
  /** Publishes a named application event. */
  emit(name, detail = {}) { this.target.dispatchEvent(new CustomEvent(name, { detail })); }
  /** Subscribes to a named application event. */
  on(name, handler) { this.target.addEventListener(name, handler); return () => this.target.removeEventListener(name, handler); }
}
