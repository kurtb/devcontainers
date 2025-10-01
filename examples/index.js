const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from your Dev Container!',
    nodejs: process.version,
    platform: process.platform,
    arch: process.arch,
    timestamp: new Date().toISOString()
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
  console.log(`📦 Node.js ${process.version}`);
  console.log(`🐍 Check Python with: python3 --version`);
});