import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

const server = createServer(async (req, res) => {
  try {
    // Default to index.html for root path
    const filePath = req.url === '/' ? '/index.html' : req.url;
    const fullPath = join(__dirname, filePath);
    
    // Get file extension for MIME type
    const ext = filePath.substring(filePath.lastIndexOf('.'));
    const contentType = MIME_TYPES[ext] || 'text/plain';
    
    const content = await readFile(fullPath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.writeHead(404);
      res.end('404 Not Found');
    } else {
      res.writeHead(500);
      res.end('500 Internal Server Error');
    }
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});