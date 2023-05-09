# ---- Build Stage ----
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /build

# Install pnpm globally
RUN npm install -g pnpm

# Copy the rest of the application files
COPY . .

# Install build dependencies
RUN pnpm install --frozen-lockfile

# Build the application
RUN pnpm build

# ---- Release Stage ----
FROM node:18-alpine

# Set environment variables
ENV NODE_ENV production

# Create app directory
WORKDIR /app

# Copy the built files from the build stage
COPY --from=builder /build/app/server/index.js ./
COPY --from=builder /build/app/server/public ./public

# Expose the application port
EXPOSE 3000

# Start the application using PM2
CMD ["node", "index.js"]
