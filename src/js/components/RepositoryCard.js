/**
 * RepositoryCard
 * Produces safe card markup from normalised public GitHub data.
 */
export class RepositoryCard {
  /** Returns an article element for a public repository record. */
  static create(repository) {
    const article = document.createElement("article");
    article.className = "repository-card";
    const updated = repository.updated_at ? new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(new Date(repository.updated_at)) : "Cached profile data";
    const stats = Number.isFinite(repository.stargazers_count) ? `<span>★ ${repository.stargazers_count}</span><span>⑂ ${repository.forks_count ?? 0}</span>` : "";
    article.innerHTML = `<div class="repository-card__top"><strong>GitHub</strong><span>${RepositoryCard.escape(repository.visibility || "public")}</span></div><h3>${RepositoryCard.escape(repository.name)}</h3><p>${RepositoryCard.escape(repository.description || "Public solution prototype and engineering work.")}</p><div class="tag-list">${[repository.language, ...(repository.topics || [])].filter(Boolean).slice(0, 4).map((tag) => `<span>${RepositoryCard.escape(tag)}</span>`).join("")}</div><div class="repository-card__stats">${stats}</div><div class="repository-card__footer"><span>Updated ${updated}</span><a href="${RepositoryCard.escape(repository.html_url)}" target="_blank" rel="noopener noreferrer">View Repository ↗</a></div>`;
    return article;
  }

  /** Escapes external text before inserting it into card markup. */
  static escape(value) { const node = document.createElement("span"); node.textContent = String(value); return node.innerHTML; }
}
