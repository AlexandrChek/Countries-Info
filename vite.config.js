import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const BASE = process.env.VITE_BASE_URL

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'development' ? '/' : BASE
  }
})
