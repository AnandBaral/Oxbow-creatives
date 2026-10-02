import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static build for GitHub Pages: every route is prerendered to plain HTML.
// BASE_PATH is set automatically by the GitHub Actions workflow
// ("/" for custom domains / user sites, "/<repo>/" for project pages).
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  vite: { base },
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      failOnError: false,
    },
  },
});
