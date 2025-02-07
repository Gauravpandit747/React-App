# #  Use the official Node.js image as the base image
# # FROM node:14
# FROM node:lts-alpine AS builder

# # Set the working directory
# WORKDIR /

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code to the working directory
# COPY . .

# # Build the React application
# RUN npm run build

# # Use the official Nginx image to serve the React application
# FROM nginx:alpine

# # Copy the build output to the Nginx html directory
# COPY --from=0 /app/build /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]


# Use the latest LTS version of Node.js (Debian-based)
FROM node:lts AS builder

# Set the working directory
WORKDIR /

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application
COPY . .

# Set Parcel output directory to "build"
ENV PARCEL_WORKERS=0

# Build the React application (corrected command)
RUN npx parcel build index.html --dist-dir build

# Debugging step: Check if build directory exists
RUN ls -la /build

# Use a minimal Nginx image for serving the React app
FROM nginx:alpine

# Copy the build output from the builder stage to Nginx's serving directory
COPY --from=builder /build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]


# # Use the latest LTS version of Node.js
# FROM node:lts AS builder

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json first (better caching)
# COPY package*.json ./

# # Install dependencies
# RUN npm install --force

# # Copy the rest of the application
# COPY . .

# # Disable Parcel workers (fixes "Invalid argument" error in Alpine)
# ENV PARCEL_WORKERS=0

# # Build the React application
# RUN npm run build

# # Use a minimal Nginx image for serving the React app
# FROM nginx:alpine

# # Copy the build output from the builder stage to Nginx's serving directory
# COPY --from=builder /app/build /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Run Nginx
# CMD ["nginx", "-g", "daemon off;"]

