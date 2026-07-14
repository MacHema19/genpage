/**
 * ApiClient
 * Fetch wrapper with timeout, cancellation and centralised HTTP errors.
 */
export class ApiClient {
  /** @param {{timeoutMs?: number}} options Request defaults. */
  constructor({ timeoutMs = 8000 } = {}) { this.timeoutMs = timeoutMs; }

  /** Retrieves and parses a JSON resource. */
  async getJson(url, externalSignal) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), this.timeoutMs);
    const abort = () => controller.abort();
    externalSignal?.addEventListener("abort", abort, { once: true });
    try {
      const response = await fetch(url, { headers: { Accept: "application/vnd.github+json" }, signal: controller.signal });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}.`);
      return await response.json();
    } finally {
      clearTimeout(timeout);
      externalSignal?.removeEventListener("abort", abort);
    }
  }
}
