import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  define: {
    "process.env.NODE_ENV": '"production"',
    process: {}, 
  },

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

    minify: true,
    sourcemap: false,
  },
});
