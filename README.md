# devcontainers
Base developer containers

This repository contains a base developer container configuration that includes the latest versions of Node.js and Python, along with essential development tools and extensions.

## Features

- **Node.js 22.x LTS** - Latest Long Term Support version with npm, yarn, and pnpm
- **Python 3.12** - Latest stable Python version with common packages
- **Development Tools** - Git, curl, wget, build tools, and utilities
- **VS Code Extensions** - Pre-configured extensions for Python, Node.js, and general development
- **Shell Configuration** - Zsh with Oh My Zsh for better developer experience

## Included Python Packages

- pipenv, poetry, virtualenv - Package and environment management
- requests, flask, fastapi, django - Web frameworks and HTTP libraries
- pytest, black, flake8, pylint, mypy - Testing and code quality tools
- jupyter, numpy, pandas - Data science and notebook tools

## Included Node.js Tools

- npm - Node.js package manager (comes with Node.js)
- yarn - Alternative package manager
- pnpm - Fast, disk space efficient package manager

## Usage

1. Clone this repository
2. Open in VS Code
3. When prompted, click "Reopen in Container" or use Command Palette > "Dev Containers: Reopen in Container"
4. Wait for the container to build (first time may take a few minutes)
5. Start developing!

## Ports

The following ports are automatically forwarded:
- 3000 - Common for React/Next.js development
- 5000 - Common for Flask applications
- 5173 - Vite development server
- 8000 - Common for Django/FastAPI applications
- 8080 - Alternative web server port

## Customization

You can customize this base container by:
- Modifying `.devcontainer/devcontainer.json` for VS Code settings and extensions
- Updating `.devcontainer/Dockerfile` to add additional tools or packages
- Adding your own `docker-compose.yml` for multi-container setups
