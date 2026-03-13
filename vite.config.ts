import { defineConfig } from "vite-plus";
import react from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  fmt: {
    sortTailwindcss: {
      stylesheet: "./src/style.css",
    },
  },
  lint: {
    options: { typeAware: true, typeCheck: true },
  },
});
