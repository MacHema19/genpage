/**
 * Application bootstrap
 * Initialises shared navigation, reveal, repository and form components.
 */
import { ApiClient } from "./core/ApiClient.js";
import { MobileMenu } from "./components/MobileMenu.js";
import { ScrollReveal } from "./components/ScrollReveal.js";
import { RepositoryCard } from "./components/RepositoryCard.js";
import { ContactForm } from "./components/ContactForm.js";
import { GitHubService } from "./services/GitHubService.js";
import { FormService } from "./services/FormService.js";
import { githubConfig } from "./config/github-config.js";
import { siteConfig } from "./config/site-config.js";

const header = document.querySelector("[data-header]");
if (header) new MobileMenu(header).initialize();
new ScrollReveal().initialize();

const repositoryContainers = [...document.querySelectorAll("[data-repository-list]")];
if (repositoryContainers.length) {
  const controller = new AbortController();
  const service = new GitHubService(new ApiClient(), githubConfig);
  service.getRepositories(controller.signal).then(({ repositories, fallback }) => {
    repositoryContainers.forEach((container) => {
      const limit = Number(container.dataset.limit) || repositories.length;
      const ordered = [...repositories].sort((a, b) => Number(githubConfig.featuredRepositories.includes(b.name)) - Number(githubConfig.featuredRepositories.includes(a.name)));
      container.replaceChildren(...ordered.slice(0, limit).map((repository) => RepositoryCard.create(repository)));
    });
    document.querySelectorAll("[data-repository-status]").forEach((status) => { status.textContent = fallback ? "Repository information is temporarily unavailable. Cached public information is shown." : "Repository information refreshed from GitHub."; });
  });
  addEventListener("pagehide", () => controller.abort(), { once: true });
}

const form = document.querySelector("[data-contact-form]");
if (form instanceof HTMLFormElement) new ContactForm(form, new FormService(siteConfig.email)).initialize();

document.querySelectorAll(".resume-link").forEach((link) => link.addEventListener("click", async (event) => {
  try { const response = await fetch(siteConfig.resumeUrl, { method: "HEAD" }); if (!response.ok) throw new Error(); }
  catch { event.preventDefault(); alert("The executive résumé is being updated. Please request the latest copy by email."); }
}));
