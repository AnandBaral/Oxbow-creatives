import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static build for GitHub Pages: every route is prerendered to plain HTML.
export default defineConfig({
  // GitHub Pages serves this project from /Oxbow-creatives/.
  base: "/Oxbow-creatives/",
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
