# apps/your-api/Dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Copy monorepo files
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx nx build sigma

# Stage 2: Runtime
FROM node:20-alpine
WORKDIR /app

# Copy built files
COPY --from=builder /app/dist/apps/api/sigma ./dist

# Environment variables
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000
CMD ["node", "dist/main.js"]
