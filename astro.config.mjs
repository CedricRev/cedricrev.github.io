// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// The public URL of the site. Defaults to the GitHub Pages address.
// When a custom domain is ready, set SITE_URL (e.g. https://cedricrevestir.com)
// as a repository variable in GitHub; the deploy workflow passes it in here.
const site = process.env.SITE_URL || "https://cedricrev.github.io";

export default defineConfig({
  site,
  // The K-drama page is a personal page, so it is left out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes("/kdramas") })],
  vite: {
    plugins: [tailwindcss()],
  },
});
