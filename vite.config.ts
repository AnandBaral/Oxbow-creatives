import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages serves this repository as:
// https://anandbaral.github.io/Oxbow-creatives/
export default defineConfig({
  base: "/Oxbow-creatives/",
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      failOnError: true,
    },
  },
});
