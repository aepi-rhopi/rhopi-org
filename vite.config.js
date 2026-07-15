import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site is served at the domain root (rhopi.org), so base stays '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
