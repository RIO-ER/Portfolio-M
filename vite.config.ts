import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio-for-freelance/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});