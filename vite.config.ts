import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: "./src",
    envDir: "../", // Load .env from project root instead of src
    base: "",
    cacheDir: "../node_modules/.vite",
    plugins: [tsconfigPaths(), react()],
  });
};
