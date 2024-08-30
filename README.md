# Finance App

A web-based finance management tool built with React, TypeScript, Vite, Shadcn/UI, and Biome. This app use the api [Finance API](https://github.com/MielAndMoon/finance-api).

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Building for Production](#building-for-production)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive Design**: Seamless experience across all devices using Shadcn/UI.
- **Type Safety**: Built with TypeScript for a robust and maintainable codebase.
- **Fast Development**: Powered by Vite for fast build times and smooth development.
- **Code Quality**: Ensured through Biome for formatting and linting.

## Getting Started

### Prerequisites

- Node.js (>= 16.x)
- pnpm (recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MielAndMoon/finance-app.git
   cd finance-app
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to see the app in action.

### Building for Production

To build the app for production, run:

```bash
pnpm build
```

The optimized and minified output will be in the `dist/` directory.

## API Integration

This app consumes the [Finance API](https://github.com/MielAndMoon/finance-api). Make sure the API is running and accessible. Update the API endpoint in your environment configuration if necessary.
