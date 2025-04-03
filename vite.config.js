import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfigPath from "vite-jsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),jsconfigPath()],
  base: "/ticketForm/",
  build: {
    chunkSizeWarningLimit: 1000, // Устанавливаем порог в 1000 кБ
  }
})
