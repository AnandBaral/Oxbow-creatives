import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/Oxbow-creatives/",
  },

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
