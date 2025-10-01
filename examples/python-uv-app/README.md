# Python UV App Example

This example demonstrates a Python application using **UV** as the package manager. UV is an ultra-fast Python package installer and resolver written in Rust, designed as a drop-in replacement for pip.

## What is UV?

UV is a modern Python package manager that offers:
- **10-100x faster** than pip for package installation
- Compatible with pip and requirements.txt
- Built in Rust for maximum performance
- Drop-in replacement for common pip commands

## Installation

First, install UV in the container:

```bash
# Install UV
curl -LsSf https://astral.sh/uv/install.sh | sh

# Or using pip
pip install uv
```

## Setup and Run

```bash
# Navigate to the example directory
cd examples/python-uv-app

# Create a virtual environment using UV
uv venv

# Activate the virtual environment
source .venv/bin/activate  # On Unix/macOS
# or
.venv\Scripts\activate  # On Windows

# Install dependencies using UV (much faster than pip!)
uv pip install -e .

# Install development dependencies
uv pip install -e ".[dev]"

# Run the FastAPI application
python main.py

# Or use uvicorn directly
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## API Endpoints

Once running, the application will be available at `http://localhost:8000`:

- `GET /` - Welcome message
- `GET /health` - Health check with system information
- `GET /info` - Detailed application and UV information
- `GET /docs` - Interactive API documentation (Swagger UI)
- `GET /redoc` - Alternative API documentation

## UV Commands

Common UV commands you can use:

```bash
# Install a package
uv pip install requests

# Install from requirements.txt
uv pip install -r requirements.txt

# Sync dependencies from pyproject.toml
uv pip sync

# List installed packages
uv pip list

# Compile dependencies to a lock file
uv pip compile pyproject.toml -o requirements.txt
```

## Development

```bash
# Run tests
pytest

# Format code with Black
black .

# Lint with Ruff
ruff check .

# Type check (if mypy is installed)
mypy main.py
```

## Why Use UV?

1. **Speed**: UV is 10-100x faster than pip for most operations
2. **Compatibility**: Works with existing pip workflows and requirements.txt
3. **Modern**: Built with modern tooling and best practices
4. **Reliable**: Uses the same dependency resolution as pip but much faster
5. **Easy Migration**: Drop-in replacement for pip commands

## Learn More

- [UV Documentation](https://github.com/astral-sh/uv)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Pydantic Documentation](https://docs.pydantic.dev/)