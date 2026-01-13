import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "sdk/index.jsx",
      name: "VetChatbot",
      fileName: "vet-chatbot-sdk",
      formats: ["iife"],
    },
    rollupOptions: {
      external: [],
    },
  },
});
