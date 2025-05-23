import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/3DIntros',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/index.html',
    }
  }
})
