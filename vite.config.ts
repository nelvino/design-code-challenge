import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
   // Add server and preview settings
   server: {
    port: 4173, // Use the same port as in your test scripts
    host: '0.0.0.0', // Ensures the server is accessible from any network interface
  },
  preview: {
    port: 4173, // Same port as in your GitHub Action
    host: '0.0.0.0', // Accessible from all network interfaces
  }
})
