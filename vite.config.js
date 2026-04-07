import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-hotel-index',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/hotel' || req.url === '/hotel/') {
            req.url = '/hotel/index.html';
          }
          next();
        });
      }
    }
  ],
})
