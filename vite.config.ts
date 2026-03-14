import { defineConfig } from 'vite-plus';
import { cloudflare } from '@cloudflare/vite-plugin';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tanstackStart(),
    react(),
  ],

  resolve: {
    alias: {
      '@': `${import.meta.dirname}/src`,
    },
  },

  fmt: {
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
