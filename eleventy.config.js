/**
 * Eleventy configuration for the multi-page executive portfolio.
 */
import markdownIt from "markdown-it";

export default function configureEleventy(eleventyConfig) {
  const markdown = markdownIt({ html: true, linkify: true, typographer: true });
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

  eleventyConfig.addCollection("publishedPosts", (api) => api.getFilteredByGlob("content/posts/*.md")
    .filter((post) => post.data.published === true)
    .sort((a, b) => b.date - a.date));
  eleventyConfig.addCollection("featuredPosts", (api) => api.getFilteredByGlob("content/posts/*.md")
    .filter((post) => post.data.published === true && post.data.featured === true)
    .sort((a, b) => b.date - a.date)
    .slice(0, 3));

  return {
    dir: { input: ".", includes: "src/templates", data: "src/data", output: "_site" },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
