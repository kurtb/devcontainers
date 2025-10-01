# TypeScript NPM App Example

This example demonstrates a TypeScript application using **npm** as the package manager. It showcases TypeScript best practices with Express.js, including strict type checking, modern tooling, and development workflows.

## Features

- **TypeScript 5.3+** with strict mode enabled
- **Express.js** for web server functionality
- **Type-safe** API with full TypeScript definitions
- **ESLint** for code linting with TypeScript support
- **Prettier** for code formatting
- **tsx** for fast TypeScript execution during development
- **npm** as the package manager (built-in with Node.js)

## Project Structure

```
typescript-npm-app/
├── src/
│   ├── index.ts       # Main application file
│   └── types.ts       # Type definitions
├── dist/              # Compiled JavaScript (generated)
├── package.json       # npm configuration and dependencies
├── tsconfig.json      # TypeScript compiler configuration
├── .eslintrc.json     # ESLint configuration
├── .prettierrc.json   # Prettier configuration
└── .env.example       # Environment variables example
```

## Setup and Run

```bash
# Navigate to the example directory
cd examples/typescript-npm-app

# Install dependencies using npm
npm install

# Create .env file from example
cp .env.example .env

# Development mode (with hot reload)
npm run dev

# Build TypeScript to JavaScript
npm run build

# Run the compiled JavaScript
npm start
```

## Available Scripts

- `npm run dev` - Start development server with hot reload using tsx
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled JavaScript application
- `npm run type-check` - Check TypeScript types without emitting files
- `npm run lint` - Run ESLint on TypeScript files
- `npm run format` - Format code with Prettier
- `npm test` - Run tests
- `npm run clean` - Remove compiled dist folder

## API Endpoints

Once running, the application will be available at `http://localhost:3000`:

- `GET /` - Welcome message with TypeScript info
- `GET /health` - Health check with system information
- `GET /info` - Detailed application and npm information

Example response from `/info`:

```json
{
  "name": "TypeScript NPM Example",
  "description": "Example TypeScript application using npm package manager",
  "version": "1.0.0",
  "typescript": {
    "version": "5.3.0",
    "strictMode": true
  },
  "node": {
    "version": "v22.x.x",
    "platform": "linux",
    "arch": "x64"
  },
  "packageManager": {
    "name": "npm",
    "description": "Node Package Manager - the default package manager for Node.js",
    "features": [
      "Largest package registry",
      "Built-in with Node.js",
      "Workspaces support",
      "Security auditing",
      "Package version management"
    ]
  }
}
```

## TypeScript Configuration

The project uses strict TypeScript configuration (`tsconfig.json`) with:

- **Strict mode** enabled for maximum type safety
- **ES2022** target for modern JavaScript features
- **NodeNext** module resolution
- **Source maps** for debugging
- **Declaration files** generation
- **No unused variables** or parameters allowed
- **No implicit returns** or unchecked indexed access

## Why Use npm?

1. **Built-in**: Comes pre-installed with Node.js
2. **Largest Registry**: Access to millions of packages on npmjs.com
3. **Workspaces**: Built-in monorepo support
4. **Security**: Built-in security audit with `npm audit`
5. **Version Management**: Sophisticated dependency resolution
6. **Industry Standard**: Most widely used package manager for Node.js

## Development Tips

### Hot Reload Development

```bash
npm run dev
# Uses tsx to watch files and reload on changes
```

### Type Checking

```bash
npm run type-check
# Check types without building
```

### Code Quality

```bash
# Lint your code
npm run lint

# Format your code
npm run format
```

### Security Auditing

```bash
# Check for security vulnerabilities
npm audit

# Fix automatically fixable vulnerabilities
npm audit fix
```

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Update to latest versions (use with caution)
npm install <package>@latest
```

## Learn More

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [npm Documentation](https://docs.npmjs.com/)
- [Express.js Documentation](https://expressjs.com/)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/en/)