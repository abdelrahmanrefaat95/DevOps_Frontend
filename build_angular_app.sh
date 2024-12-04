#!/bin/bash

# Exit on any error
set -e

# Function to display a message
function print_message() {
  echo -e "\n========================================"
  echo "$1"
  echo "========================================"
}

# Check if Node.js and npm are installed, and install them if necessary
function install_node_and_npm() {
  if ! command -v node &> /dev/null; then
    print_message "Node.js not found. Installing Node.js and npm..."
    # Add NodeSource PPA and install Node.js
    curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    sudo apt-get install -y nodejs
  else
    print_message "Node.js is already installed: $(node -v)"
  fi

  if ! command -v npm &> /dev/null; then
    print_message "npm not found. Please check your Node.js installation."
    exit 1
  else
    print_message "npm is already installed: $(npm -v)"
  fi
}

# Path to the Angular project (customize as needed)
PROJECT_PATH="/home/shorouk/DevOps/Client/DevOps_MVN_Client"

# Install Node.js and npm if not installed
install_node_and_npm

# Navigate to the Angular project directory
print_message "Navigating to Angular project directory..."
cd "$PROJECT_PATH"

# Install Node.js dependencies
print_message "Installing Node.js dependencies..."
npm install

# Build the Angular application
print_message "Building Angular application..."
npm run build -- --prod

# Serve the application
print_message "Starting Angular application with 'ng serve'..."
npx ng serve --host 0.0.0.0 --port 4200
