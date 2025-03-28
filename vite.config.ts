import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
// import fs from "fs";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 4173,
    // https: {
    //   key: fs.readFileSync("/Users/npalday/certs/localhost-key.pem"),
    //   cert: fs.readFileSync("/Users/npalday/certs/localhost.pem"),
    // },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true, // Enable PWA during development for testing
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,jpeg}"], // Customize the caching of assets
      },
      manifest: {
        name: "Budget Tracker",
        short_name: "ReactApp",
        description: "My cool React app with service worker",
        theme_color: "#ffffff",
        icons: [
          {
            src: "icons/icon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "icons/icon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
