import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    port: 8080,
    host: "::",
    allowedHosts: true,
  },
  build: {
    target: "es2020",
    minify: "esbuild",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core — loaded once and cached forever
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
            return "react-core";
          }
          // TanStack router + query
          if (id.includes("node_modules/@tanstack/")) {
            return "tanstack";
          }
          // Everything else (lucide, radix, etc.)
          if (id.includes("node_modules/")) {
            return "vendor";
          }
        },
      },
    },
  },
});



