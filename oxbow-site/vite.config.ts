import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static build for GitHub Pages: every route is prerendered to plain HTML.
export default defineConfig({
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
