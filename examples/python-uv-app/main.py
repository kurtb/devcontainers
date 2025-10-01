"""
FastAPI example application demonstrating UV package manager.
"""

from datetime import datetime
from fastapi import FastAPI
from pydantic import BaseModel
import sys
import platform

app = FastAPI(
    title="Python UV Example App",
    description="Example FastAPI application using UV package manager",
    version="0.1.0"
)


class HealthResponse(BaseModel):
    status: str
    timestamp: str
    python_version: str
    platform: str


class MessageResponse(BaseModel):
    message: str
    package_manager: str


@app.get("/")
async def root() -> MessageResponse:
    """Root endpoint returning a welcome message."""
    return MessageResponse(
        message="Hello from Python UV App! 🐍",
        package_manager="UV (ultra-fast Python package manager)"
    )


@app.get("/health")
async def health() -> HealthResponse:
    """Health check endpoint with system information."""
    return HealthResponse(
        status="healthy",
        timestamp=datetime.now().isoformat(),
        python_version=sys.version,
        platform=platform.platform()
    )


@app.get("/info")
async def info() -> dict:
    """Return detailed application information."""
    return {
        "app_name": "Python UV Example",
        "description": "FastAPI app demonstrating UV package manager",
        "python_version": sys.version.split()[0],
        "platform": platform.platform(),
        "architecture": platform.machine(),
        "package_manager": "UV",
        "features": [
            "Ultra-fast package installation",
            "Compatible with pip and requirements.txt",
            "Built in Rust for performance",
            "Drop-in replacement for pip"
        ]
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)