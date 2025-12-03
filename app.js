// Simple Node.js startup file for a Next.js project (production mode)
// Plain JavaScript (CommonJS)

const http = require('http');
const url = require('url');
const next = require('next');

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const dev = false; // Force production mode as requested

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = http.createServer((req, res) => {
      const parsedUrl = url.parse(req.url, true);
      handle(req, res, parsedUrl);
    });

    server.listen(port, (err) => {
      if (err) {
        console.error('Error starting server:', err);
        process.exit(1);
      }
      console.log(`Next.js server is running in production mode on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Error preparing Next.js app:', err);
    process.exit(1);
  });
