/**
 * GitHubService
 * Retrieves public repositories and falls back to cached safe records.
 */
export class GitHubService {
  constructor(apiClient, config) { this.apiClient = apiClient; this.config = config; this.cacheKey = `github:${config.username}:repositories`; }
  /** Returns normalised public repositories from cache, API or fallback. */
  async getRepositories(signal) {
    const cached = this.readCache();
    if (cached) return { repositories: cached, fallback: false };
    try {
      const data = await this.apiClient.getJson(`https://api.github.com/users/${this.config.username}/repos?sort=updated&per_page=100`, signal);
      const repositories = data.filter((repository) => repository.visibility === "public" && !repository.fork);
      this.writeCache(repositories); return { repositories, fallback: false };
    } catch { return { repositories: this.config.fallback, fallback: true }; }
  }
  /** Reads an unexpired cache entry. */
  readCache() { try { const cache = JSON.parse(localStorage.getItem(this.cacheKey)); return cache && Date.now() - cache.savedAt < this.config.cacheDurationMs ? cache.data : null; } catch { return null; } }
  /** Stores repository data without blocking page rendering. */
  writeCache(data) { try { localStorage.setItem(this.cacheKey, JSON.stringify({ savedAt: Date.now(), data })); } catch { /* Storage can be disabled without affecting the page. */ } }
}
