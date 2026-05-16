import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/eva-clock-app/', // 👈 이거 꼭 바꿔야 함
})