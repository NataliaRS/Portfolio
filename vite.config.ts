import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `base` targets a GitHub Pages project site (served at /Portfolio/). Set
// VITE_BASE=/ for a root domain deploy.
export default defineConfig(({ command }) => ({
  base: command === "build" ? process.env.VITE_BASE ?? "/Portfolio/" : "/",
  plugins: [react()],
}));
