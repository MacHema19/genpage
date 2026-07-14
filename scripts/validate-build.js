/**
 * Production build validator for required pages, assets and publishing rules.
 */
import { access, readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const output = new URL("../_site/", import.meta.url);
const requiredPages = ["index.html", "experience.html", "case-studies.html", "insights.html", "github.html", "credentials.html", "contact.html", "article.html", "404.html", "sitemap.xml", "robots.txt"];
const failures = [];

for (const page of requiredPages) {
  try { await access(new URL(page, output)); }
  catch { failures.push(`Missing generated file: ${page}`); }
}

const htmlFiles = (await readdir(output, { recursive: true })).filter((file) => file.endsWith(".html"));
for (const file of htmlFiles) {
  const html = await readFile(new URL(file, output), "utf8");
  if (!/<title>.+<\/title>/.test(html)) failures.push(`${file}: missing title`);
  if (!/<meta name="description" content="[^"]+">/.test(html)) failures.push(`${file}: missing description`);
  if (!/<main[^>]*id="main-content"/.test(html)) failures.push(`${file}: missing main landmark`);
  if ((html.match(/<h1\b/g) || []).length !== 1) failures.push(`${file}: expected exactly one h1`);
  if (/<img\b(?![^>]*\balt=)[^>]*>/i.test(html)) failures.push(`${file}: image missing alt attribute`);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!schemas.length) failures.push(`${file}: missing structured data`);
  schemas.forEach((match) => { try { JSON.parse(match[1]); } catch { failures.push(`${file}: invalid JSON-LD`); } });
  if (/hemadarshini\.com/i.test(html)) failures.push(`${file}: contains removed custom domain`);
  if (/Dates to be verified|Coming soon|Lorem ipsum/.test(html)) failures.push(`${file}: contains public placeholder text`);
  const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const reference of references) {
    if (!reference.startsWith("/") || reference.startsWith("//")) continue;
    const clean = reference.split(/[?#]/)[0];
    if (!clean) continue;
    const target = clean.endsWith("/") ? `${clean}index.html` : clean;
    try { await access(new URL(`.${target}`, output)); }
    catch { if (target !== "/assets/Hema-Darshini-Technology-Executive-Resume.pdf") failures.push(`${file}: broken local reference ${reference}`); }
  }
}

const draftSlugPath = join(new URL(output).pathname, "insights", "article-slug", "index.html");
try { await access(draftSlugPath); failures.push("Draft article was published unexpectedly."); } catch { /* Expected. */ }

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${htmlFiles.length} HTML files and ${requiredPages.length} required outputs.`);
}
