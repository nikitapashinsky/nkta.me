import { defineConfig } from "vite-plus";
import path from "path";
// import react from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const root = path.resolve(__dirname, "src");

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
