import path from 'path';
import { fileURLToPath } from 'url';

import { cloudflare } from '@cloudflare/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite-plus';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    tailwindcss(),
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    svgr(),
    tanstackStart({
      spa: {
        enabled: true,
      },
    }),
    react(),
  ],

  resolve: {
    alias: {
      '@': `${__dirname}/src`,
    },
  },

  fmt: {
    sortImports: {
      enabled: true,
    },
    sortTailwindcss: {
      functions: ['cn', 'clsx', 'twJoin', 'twMerge'],
      stylesheet: './src/styles/style.css',
    },
    singleQuote: true,
  },

  lint: {
    options: { typeAware: true, typeCheck: true },
  },
});
