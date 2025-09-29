#!/usr/bin/env python3
"""
Example Python application for the base dev container.
"""

import sys
import platform
from datetime import datetime

def main():
    """Main function that displays Python environment information."""
    print("🐍 Hello from your Dev Container!")
    print(f"Python version: {sys.version}")
    print(f"Platform: {platform.platform()}")
    print(f"Architecture: {platform.machine()}")
    print(f"Timestamp: {datetime.now().isoformat()}")
    
    # Test some common packages
    try:
        import requests
        print(f"✅ requests library: {requests.__version__}")
    except ImportError:
        print("❌ requests library not available")
    
    try:
        import flask
        print(f"✅ Flask: {flask.__version__}")
    except ImportError:
        print("❌ Flask not available")
    
    try:
        import fastapi
        print(f"✅ FastAPI: {fastapi.__version__}")
    except ImportError:
        print("❌ FastAPI not available")

if __name__ == "__main__":
    main()