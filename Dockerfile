# Stage 1: Build the Angular application
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Angular application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Stage 2: Serve the application using an Nginx server
FROM nginx:alpine

# Copy the built application from the previous stage to the Nginx html folder
COPY --from=build /app/dist/angularclient /usr/share/nginx/html

# Copy a custom Nginx configuration file, if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port Nginx is running on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
