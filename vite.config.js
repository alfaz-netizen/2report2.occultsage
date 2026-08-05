import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import handler from './api/create-order.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    {
      name: 'api-dev-server',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url && req.url.startsWith('/api/create-order')) {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', async () => {
              req.body = body ? JSON.parse(body) : {};
              res.status = (code) => {
                res.statusCode = code;
                return res;
              };
              res.json = (data) => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
                return res;
              };
              try {
                await handler(req, res);
              } catch (e) {
                res.status(500).json({ error: e.message });
              }
            });
            return;
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 5175,
    host: true
  }
})

