import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/martin-johnsson-portfolio/',
  plugins: [react()],
  server: {
    port: 3001,
  },
});
