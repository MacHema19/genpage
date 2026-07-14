/**
 * FormService
 * Implements the transparent mailto fallback used by the contact page.
 */
export class FormService {
  constructor(email) { this.email = email; }
  /** Opens the visitor's email application with a prepared message. */
  async submit(values) {
    const subject = encodeURIComponent(values.subject.trim());
    const body = encodeURIComponent(`Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`);
    window.location.assign(`mailto:${this.email}?subject=${subject}&body=${body}`);
  }
}
