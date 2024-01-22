# React-Express Monorepo Template

## Description

This template provides a streamlined development environment for a full-stack web application using React and TypeScript for the frontend, and an Express server/API for the backend. It is designed to be simple yet efficient, using a minimal set of libraries and tools. Additionally, it includes Docker support for containerization, making it easy to build and run the application in isolated environments.

### Features
- **Frontend**: React with TypeScript
- **Backend**: Express server
- **Package Manager**: PNPM for efficient dependency and monorepo workspaces management
- **Monorepo Structure**: Single repository for easier codebase management
- **Code Style/Quality**: Initially using Rome, transitioning to [Biome](https://biomejs.dev/)
- **VSCode Configuration**: Custom settings for optimal use of Rome
- **Development/Build**: Integrated with ESLint for code analysis
- **Docker Support**: Containerize the application for consistent development and deployment environments
- **Deployment**: Frontend built on-the-fly and served via `express.static` from `app/server/public`

### Important Note
Rome, initially used for code style and quality, is deprecated and will be replaced with Biome. Please refer to the provided link for more information on Biome.

## Getting Started

### Prerequisites
- Node.js 20.10.0
- PNPM 8.6.12 or higher
- Visual Studio Code (recommended for pre-configured settings)
- Docker (for containerization)

### Installation
1. Clone the repository:
   ```
   git clone [repository-url]
   ```
2. Install dependencies:
   ```
   pnpm install
   ```

### Running the Application with Docker
1. Build the Docker image:
   ```
   docker build . -t your-app:name
   ```
2. Run the application:
   ```
   docker run -p 3000:3000 your-app:name
   ```
3. Access the application at `http://localhost:3000`

### Running the Application without Docker
1. To start the backend server:
   ```
   pnpm dev
   ```
2. Access the application at `http://localhost:3000`
