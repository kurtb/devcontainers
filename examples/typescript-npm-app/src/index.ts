import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import { AppInfo, HealthResponse, WelcomeResponse } from './types';

// Load environment variables
config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Root endpoint
app.get('/', (_req: Request, res: Response<WelcomeResponse>) => {
  res.json({
    message: 'Hello from TypeScript NPM App! 🚀',
    packageManager: 'npm',
    typescript: true,
  });
});

// Health check endpoint
app.get('/health', (_req: Request, res: Response<HealthResponse>) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    platform: process.platform,
    arch: process.arch,
  });
});

// Application info endpoint
app.get('/info', (_req: Request, res: Response<AppInfo>) => {
  res.json({
    name: 'TypeScript NPM Example',
    description: 'Example TypeScript application using npm package manager',
    version: '1.0.0',
    typescript: {
      version: require('typescript').version,
      strictMode: true,
    },
    node: {
      version: process.version,
      platform: process.platform,
      arch: process.arch,
    },
    packageManager: {
      name: 'npm',
      description: 'Node Package Manager - the default package manager for Node.js',
      features: [
        'Largest package registry',
        'Built-in with Node.js',
        'Workspaces support',
        'Security auditing',
        'Package version management',
      ],
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log('🚀 TypeScript NPM App Started');
  console.log(`📦 Server running at http://localhost:${PORT}`);
  console.log(`📘 TypeScript version: ${require('typescript').version}`);
  console.log(`🟢 Node.js version: ${process.version}`);
  console.log(`📋 Package Manager: npm`);
});