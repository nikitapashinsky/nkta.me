import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), svelte()],
  vite: {
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
    }
  }
});