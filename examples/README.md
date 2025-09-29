# Example Applications

This directory contains simple example applications to test the dev container setup.

## Node.js Example

A simple Express.js server that displays environment information.

```bash
# Install dependencies
npm install

# Run the server
npm start

# For development with hot reload (Node.js 18+)
npm run dev
```

The server will be available at `http://localhost:3000` and should be automatically forwarded by the dev container.

## Python Example

A simple Python script that displays Python environment information and tests installed packages.

```bash
# Run the Python example
python3 app.py
```

## Testing Both Languages

You can verify both Node.js and Python are working correctly:

```bash
# Check versions
node --version
python3 --version
npm --version
pip3 --version

# Test Node.js
cd examples
npm install
npm start

# In another terminal, test Python
python3 app.py
```