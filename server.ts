import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'healthy',
    app: 'IRIS Model 3 Production Server',
    version: '3.2.0',
    timestamp: new Date().toISOString(),
  });
});

// Serve compiled static assets from dist directory
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath, {
  maxAge: '1y',
  immutable: true,
  index: 'index.html',
}));

// SPA fallback: send index.html for all unrecognized GET requests
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[IRIS Model 3] Production server listening on http://0.0.0.0:${PORT}`);
});
