// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://jph-sw.github.io",
  base: "/holzhof-aschendorf",
  i18n: {
    locales: ["de", "en", "fr"],
    defaultLocale: "de",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
