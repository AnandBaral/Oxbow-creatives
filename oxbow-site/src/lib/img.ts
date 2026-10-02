/**
 * Local image helper.
 * All images live in /public/images/ — replace any file there with
 * your real photo and it will instantly appear everywhere on the site.
 *
 * Seed → filename mapping:
 *   "oxbow-founder"    → /images/oxbow-founder.jpg
 *   "Akera Health"     → /images/akera-health.jpg   (spaces → hyphens, lowercase)
 *   "Azurina × Gouniq" → /images/azurina-x-gouniq.jpg
 */
const toFilename = (seed: string): string =>
  seed
    .toLowerCase()
    .replace(/×/g, "x")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const img = (seed: string, _w = 800, _h = 800): string =>
  `/images/${toFilename(seed)}.jpg`;
