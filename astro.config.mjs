import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://mysite.com",
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
  prefetch: true,
  vite: {
    plugins: [tailwindcss],
    ssr: {
      noExternal: ["smartypants"],
    },
  },
});
