import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Components: '/src/Components',
      Pages: '/src/Pages',
      assets: '/src/assets',
      Configs: '/src/Configs',
      Helpers: '/src/Helpers',
      Layouts: '/src/Layouts',
      Redux: '/src/Redux',
      Routes: '/src/Routes'
    }
  }
})
