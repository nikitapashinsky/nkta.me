// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],

  // TODO: remove once @astrojs/cloudflare includes the fix from
  // https://github.com/withastro/astro/pull/15803
  session: {
    driver: { entrypoint: "unstorage/drivers/null" },
  },

  adapter: cloudflare(),
});
