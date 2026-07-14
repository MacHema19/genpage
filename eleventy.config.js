/**
 * Eleventy configuration for the multi-page executive portfolio.
 */
import markdownIt from "markdown-it";

export default function configureEleventy(eleventyConfig) {
  const markdown = markdownIt({ html: true, linkify: true, typographer: true });
  const defaultHeadingOpen = markdown.renderer.rules.heading_open
    || ((tokens, index, options, _environment, renderer) => renderer.renderToken(tokens, index, options));

  markdown.renderer.rules.heading_open = (tokens, index, options, environment, renderer) => {
    const inlineToken = tokens[index + 1];
    const baseSlug = inlineToken.content.toLowerCase().trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-") || "section";
    environment.headingSlugs ??= new Map();
    const count = environment.headingSlugs.get(baseSlug) ?? 0;
    environment.headingSlugs.set(baseSlug, count + 1);
    tokens[index].attrSet("id", count ? `${baseSlug}-${count + 1}` : baseSlug);
    return defaultHeadingOpen(tokens, index, options, environment, renderer);
  };
  eleventyConfig.setLibrary("md", markdown);

  eleventyConfig.addPassthroughCopy({ assets: "assets" });
  eleventyConfig.addPassthroughCopy({ img: "img" });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/static/robots.txt": "robots.txt" });

  eleventyConfig.addFilter("readableDate", (value) => new Intl.DateTimeFormat("en-GB", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC"
  }).format(new Date(value)));
  eleventyConfig.addFilter("htmlDateString", (value) => new Date(value).toISOString().slice(0, 10));
  eleventyConfig.addFilter("readingTime", (content = "") => `${Math.max(1, Math.ceil(content.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length / 220))} min read`);
  eleventyConfig.addFilter("json", (value) => JSON.stringify(value));
  eleventyConfig.addFilter("urlencode", (value = "") => encodeURIComponent(value));
  eleventyConfig.addFilter("tableOfContents", (content = "") => {
    const headings = [...content.matchAll(/<h([23]) id="([^"]+)">([\s\S]*?)<\/h\1>/g)];
    if (!headings.length) return "";
    const items = headings.map(([, level, id, label]) => {
      const plainLabel = label.replace(/<[^>]+>/g, "");
      return `<li class="toc__level-${level}"><a href="#${id}">${plainLabel}</a></li>`;
    }).join("");
    return `<ul>${items}</ul>`;
  });
  eleventyConfig.addFilter("relatedPosts", (posts = [], currentUrl = "", limit = 2) => posts
    .filter((post) => post.url !== currentUrl)
    .slice(0, limit));

  eleventyConfig.addCollection("publishedPosts", (api) => api.getFilteredByGlob("content/posts/*.md")
    .filter((post) => post.data.published === true && post.data.draft !== true)
    .sort((a, b) => b.date - a.date));
  eleventyConfig.addCollection("featuredPosts", (api) => api.getFilteredByGlob("content/posts/*.md")
    .filter((post) => post.data.published === true && post.data.draft !== true)
    .sort((a, b) => b.date - a.date)
    .slice(0, 3));

  return {
    dir: { input: ".", includes: "src/templates", data: "src/data", output: "_site" },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
