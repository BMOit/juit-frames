import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mysite.com",
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
  prefetch: true,
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss],
    ssr: {
      noExternal: ["smartypants"],
    },
  },
});
