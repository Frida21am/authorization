import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Разделение на чанки по страницам
          if (id.includes("src/pages/")) {
            // Имя чанка будет основано на имени папки страницы
            return id.split("src/pages/")[1].split("/")[0];
          }
        },
      },
    },
  },
});
