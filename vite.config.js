import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Use relative paths by default so the app works both at the domain root (Vercel)
// and under a subpath (GitHub Pages).
const base = process.env.VITE_BASE_PATH || './'

export default defineConfig({
  base,
  plugins: [react()],
})
