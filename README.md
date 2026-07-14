# Hema Darshini Selvaraju — Executive Portfolio

A multi-page executive technology portfolio built for senior leadership, enterprise transformation and advisory positioning. The site uses Eleventy to generate accessible static pages for GitHub Pages.

## Technology stack

- Eleventy 3
- Nunjucks templates
- Markdown with front matter
- Mobile-first modular CSS
- Native ES modules and reusable JavaScript classes
- GitHub REST API with local caching and safe fallback data
- GitHub Actions Pages deployment

## Local development

Requirements: Node.js 22 or a compatible current LTS release.

```bash
npm install
npm run dev
```

Eleventy will print the local development address.

## Production build

```bash
npm ci
npm run build
npm run validate
npm run validate:html
```

Generated files are written to `_site/`.

## How to Publish a New Article

1. Copy `content/posts/article-template.md`.
2. Rename the Markdown file using the article slug.
3. Update all front matter fields.
4. Write the article below the front matter.
5. Set `published: true` when it is ready.
6. Commit and push the change.
7. Confirm the GitHub Actions deployment completed.
8. Open the live Insights page.

Drafts with `published: false` or `draft: true` do not appear on the homepage, Insights page, article routes or sitemap.

## Article front matter

```yaml
---
layout: layouts/article.njk
title: "Article title"
slug: "article-slug"
date: "2026-07-14"
category: "Governance"
summary: "A concise search and card summary."
coverImage: "/assets/articles/governance.svg"
tags: ["Technology Governance", "Leadership"]
featured: true
published: true
---
```

Reading time is calculated automatically during the build. Featured published articles appear on the homepage.

## GitHub API configuration

Edit `src/data/github.js` to change the verified username or `featuredRepositories` list. Eleventy requests public repository metadata during the build; no API token or repository request is exposed to the visitor’s browser.

`src/data/github-cache.json` contains the committed public fallback used for offline or rate-limited builds. Refresh this file only with verified public repository names, links and statistics from the GitHub API.

Do not list private repositories in fallback data or public project links.

## Contact form configuration

The contact form uses a transparent `mailto:` fallback through `FormService`. It validates name, email, subject and a minimum 20-character message before opening the visitor’s email application. No form data is sent to a third party.

The professional email is configured in `src/js/config/site-config.js` and `src/data/site.js`.

## Deployment

The workflow at `.github/workflows/deploy.yml` runs after a push to `main`:

1. Check out the repository.
2. Install locked dependencies.
3. Build the Eleventy site.
4. Validate required output and draft exclusion.
5. Upload `_site/`.
6. Deploy to GitHub Pages.

In GitHub, set **Settings → Pages → Source** to **GitHub Actions**. Do not configure a custom domain unless it is intentionally owned and ready.

## Folder structure

```text
content/posts/       Markdown articles
src/data/            Profile and page data
src/templates/       Shared layouts and components
src/css/             Modular theme, components and page styles
src/js/              ES modules, components, services and configuration
assets/              Portrait, favicon and article artwork
scripts/             Build validation
.github/workflows/   GitHub Pages deployment
```

## Troubleshooting

### Build fails after adding an article

Check YAML indentation, quote titles containing punctuation and ensure the permalink ends with `index.html`.

### A draft appears publicly

Confirm `published: false`, rebuild, and run `npm run validate`.

### GitHub repositories do not refresh

Unauthenticated API requests are rate-limited. The page will continue with cached fallback records. Wait for the rate limit to reset or review the browser console for the failed request.

### Résumé link reports that it is unavailable

Add the approved PDF at `assets/Hema-Darshini-Technology-Executive-Resume.pdf` or update the single configured path in both site configuration files.

### GitHub Pages redirects to an old custom domain

Ensure the repository has no `CNAME` file and the Pages custom-domain field is empty. Set the Pages source to GitHub Actions after this migration is merged.
