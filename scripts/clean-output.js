/** Removes stale generated output before each deterministic production build. */
import { rm } from "node:fs/promises";

await rm(new URL("../_site/", import.meta.url), { recursive: true, force: true });
