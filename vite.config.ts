import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set `base` so the built app uses the repo path on GitHub Pages
  base: '/mistrals-kitchen/',
  plugins: [react()],
})
