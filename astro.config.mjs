// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import pagefind from "astro-pagefind";

import alpinejs from "@astrojs/alpinejs";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Nunito Sans",
        cssVariable: "--font-nunito-sans",
      },
    ],
  },

  integrations: [alpinejs(), pagefind()],

  vite: {
    plugins: [tailwindcss()],
  },

  devToolbar: {
    enabled: false,
  },

  adapter: vercel(),
});
