import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages(https://<user>.github.io/<repo>/) 하위 경로에서도 동작하도록 상대 경로로 빌드
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { host: true },
});
