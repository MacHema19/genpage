/**
 * ContactForm
 * Validates enquiries and delegates delivery to the configured mailto service.
 */
import { BaseComponent } from "../core/BaseComponent.js";

export class ContactForm extends BaseComponent {
  /** @param {HTMLFormElement} rootElement Contact form node. */
  constructor(rootElement, formService) { super(rootElement); this.formService = formService; this.submitting = false; }
  /** Registers form submission behavior. */
  initialize() { this.registerEvent(this.rootElement, "submit", (event) => this.handleSubmit(event)); }
  /** Validates and prepares the visitor's email application. */
  async handleSubmit(event) {
    event.preventDefault(); if (this.submitting) return;
    const values = Object.fromEntries(new FormData(this.rootElement));
    const errors = this.validate(values); this.renderErrors(errors);
    if (Object.keys(errors).length) { this.rootElement.querySelector("[aria-invalid='true']")?.focus(); return; }
    this.submitting = true; const button = this.rootElement.querySelector("[data-submit]"); button.disabled = true; button.textContent = "Preparing…";
    try { await this.formService.submit(values); this.setStatus("Your email application is opening with the enquiry prepared."); }
    catch { this.setStatus("Unable to open your email application. Please use the email link on this page.", true); }
    finally { this.submitting = false; button.disabled = false; button.textContent = "Prepare Email"; }
  }
  /** Returns field-specific validation messages. */
  validate(values) {
    const errors = {};
    if (!values.name?.trim()) errors.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email?.trim() || "")) errors.email = "Enter a valid email address.";
    if (!values.subject?.trim()) errors.subject = "Subject is required.";
    if ((values.message?.trim().length || 0) < 20) errors.message = "Message must contain at least 20 characters.";
    return errors;
  }
  /** Renders accessible field validation state. */
  renderErrors(errors) { ["name", "email", "subject", "message"].forEach((name) => { const field = this.rootElement.elements[name]; field.setAttribute("aria-invalid", String(Boolean(errors[name]))); this.rootElement.querySelector(`[data-error='${name}']`).textContent = errors[name] || ""; }); }
  /** Updates the live form status message. */
  setStatus(message, isError = false) { const status = this.rootElement.querySelector("[data-form-status]"); status.textContent = message; status.style.color = isError ? "var(--color-error)" : "var(--color-success)"; }
}
