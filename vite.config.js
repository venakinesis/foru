import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/foru', // Должно совпадать с basename
  plugins: [react()],
})