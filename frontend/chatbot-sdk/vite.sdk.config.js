import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // 🔥 VERY IMPORTANT FOR SDK
  define: {
    "process.env.NODE_ENV": '"production"',
    process: {}, // <-- fixes "process is not defined"
  },

  build: {
    lib: {
      entry: "sdk/index.jsx",
      name: "VetChatbot", // window.VetChatbot
      fileName: "vet-chatbot-sdk",
      formats: ["iife"], // embeddable <script>
    },

    rollupOptions: {
      // ⚠️ DO NOT externalize react for SDK
      external: [],
    },

    minify: true,
    sourcemap: false,
  },
});
