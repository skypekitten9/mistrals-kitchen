import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use a relative base so the built app works after repo renames
  // Alternatively set this to '/your-repo-name/' for a fixed path
  base: './',
  plugins: [react()],
})
