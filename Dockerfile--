FROM node:18-alpine AS node

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Set up your application
WORKDIR /app
COPY . .
RUN npm install

# Serve the Angular app using Angular CLI's development server
CMD ["ng", "serve", "--host", "0.0.0.0"]
