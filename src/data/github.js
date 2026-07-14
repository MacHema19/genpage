/**
 * Build-time GitHub repository data with a committed verified cache fallback.
 */
import cachedRepositories from "./github-cache.json" with { type: "json" };

const username = "MacHema19";
const featuredRepositories = [
  "azure-fastapi-order-app",
  "Hema_EbayDevAPi",
  "blockchain_fastapi_smartcontract_hd",
  "machema19.github.io"
];
const presentation = new Map(cachedRepositories.map((repository) => [repository.name, repository]));

function normaliseRepository(repository) {
  const cached = presentation.get(repository.name) ?? {};
  return {
    name: repository.name,
    description: cached.description || repository.description || "Public technology solution prototype.",
    language: repository.language || cached.language || "",
    technologies: cached.technologies || [repository.language].filter(Boolean),
    stargazers_count: repository.stargazers_count ?? cached.stargazers_count ?? 0,
    forks_count: repository.forks_count ?? cached.forks_count ?? 0,
    updated_at: repository.updated_at || cached.updated_at,
    html_url: repository.html_url || cached.html_url,
    homepage: repository.homepage || cached.homepage || null,
    visibility: repository.visibility || "public",
    icon: cached.icon || "quality"
  };
}

export default async function getGitHubData() {
  let publicRepositories = cachedRepositories;
  let source = "cache";

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "hema-executive-portfolio-build" },
      signal: AbortSignal.timeout(5000)
    });
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
    const repositories = await response.json();
    publicRepositories = repositories.filter((repository) => !repository.private && !repository.fork);
    source = "api";
  } catch {
    // The committed cache keeps local and rate-limited builds deterministic.
  }

  const repositoriesByName = new Map(publicRepositories.map((repository) => [repository.name, repository]));
  const repositories = featuredRepositories
    .map((name) => repositoriesByName.get(name) || presentation.get(name))
    .filter(Boolean)
    .map(normaliseRepository);

  return {
    username,
    profileUrl: `https://github.com/${username}`,
    featuredRepositories,
    repositories,
    source
  };
}
