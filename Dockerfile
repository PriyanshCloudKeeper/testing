# Stage 1: Build the React/Node app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build the project
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from builder
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
