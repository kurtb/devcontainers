# Example Applications

This directory contains example applications to demonstrate the dev container setup with different package managers and technologies.

## Examples Overview

- **[Python UV App](./python-uv-app/)** - FastAPI application using UV package manager (ultra-fast Python package installer)
- **[TypeScript NPM App](./typescript-npm-app/)** - TypeScript Express.js application using npm package manager
- **[Node.js Example](.)** - Simple Express.js server (in root examples directory)
- **[Python Example](.)** - Python script with package demos (in root examples directory)

## Python UV App

A modern FastAPI application demonstrating UV, the ultra-fast Python package manager written in Rust.

```bash
cd examples/python-uv-app
# Follow the README.md in that directory for setup instructions
```

**Features**: FastAPI, Pydantic, UV package manager (10-100x faster than pip)

## TypeScript NPM App

A fully-typed TypeScript application with Express.js using npm package manager.

```bash
cd examples/typescript-npm-app
# Follow the README.md in that directory for setup instructions
```

**Features**: TypeScript 5.3+, Express.js, strict type checking, ESLint, Prettier

## Simple Node.js Example

A simple Express.js server that displays environment information (located in the examples root).

```bash
# Install dependencies
npm install

# Run the server
npm start

# For development with hot reload (Node.js 18+)
npm run dev
```

The server will be available at `http://localhost:3000` and should be automatically forwarded by the dev container.

## Simple Python Example

A simple Python script that displays Python environment information and tests installed packages (located in the examples root).

```bash
# Run the Python example
python3 app.py
```

## Quick Start Guide

### Verify Installation

Check that both Node.js and Python are available:

```bash
# Check versions
node --version   # Should show Node.js 22.x
python3 --version # Should show Python 3.12
npm --version
pip3 --version
```

### Try Different Examples

```bash
# From repository root, navigate to examples
cd examples

# Try the simple Node.js example
npm install && npm start

# In another terminal, try the Python example
python3 app.py

# Try the UV Python app
cd python-uv-app && cat README.md

# Try the TypeScript app
cd ../typescript-npm-app && cat README.md
```

Each example directory contains its own detailed README.md with specific setup and usage instructions.