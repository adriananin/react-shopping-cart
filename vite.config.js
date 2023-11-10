// vite.config.js
import ViteImagemin from "vite-plugin-imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImagemin({
      plugins: [imageminJpegtran()],
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 5178,
  },
});
