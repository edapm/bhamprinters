// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://bhamprinters.netlify.app",

  vite: {
      plugins: [tailwindcss()],
      optimizeDeps: {
        include: ['astro-leaflet > leaflet'],   // https://pascal-brand38.github.io/astro-dev/packages/astro-leaflet/#Troubleshooting
      }
  },

  output: "server",
  adapter: netlify(),
});