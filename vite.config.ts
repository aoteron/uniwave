import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      myFrontendAssets: fileURLToPath(new URL('./src/assets/frontend-assets/assets', import.meta.url))
    },
  },
});