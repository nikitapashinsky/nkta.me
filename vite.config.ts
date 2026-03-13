import { defineConfig } from "vite-plus";
import path from "path";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

const root = path.resolve(__dirname, "src");

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": root,
    },
  },
  fmt: {
    sortTailwindcss: {
      stylesheet: "./src/style.css",
    },
  },
  lint: {
    options: { typeAware: true, typeCheck: true },
  },
});
