import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/project-new-year-card-2025/",
  plugins: [react()],
  build: {
    rollupOptions: {
      cache: true,
      treeshake: true,
      output: {
        compact: true,
        manualChunks: (id) => {
          if (id.includes("node_modules"))
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
        },
      },
    },
    sourcemap: true,
  },
  assetsInclude: ["**/*.md"],
});

