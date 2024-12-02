#!/bin/bash

# Variables
PROJECT_DIR="/home/shorouk/DevOps/Client/DevOps_MVN_Client" # Replace with the path to your Angular project directory
BUILD_OUTPUT_DIR="dist"                     # Build output directory (default for Angular CLI is 'dist/')
LOG_FILE="build.log"                        # Log file location

# Check if Node.js and npm are installed
if ! command -v node &> /dev/null || ! command -v npm &> /dev/null; then
  echo "Error: Node.js and npm must be installed to build the application."
  exit 1
fi

# Navigate to the project directory
if [ ! -d "$PROJECT_DIR" ]; then
  echo "Error: Project directory $PROJECT_DIR does not exist!"
  exit 1
fi

cd "$PROJECT_DIR" || exit 1

# Install dependencies
echo "Installing dependencies..."
npm install > "$LOG_FILE" 2>&1

if [ $? -ne 0 ]; then
  echo "Error: Failed to install dependencies. Check $LOG_FILE for details."
  exit 1
fi

# Build the application
echo "Building Angular application..."
npm run build > "$LOG_FILE" 2>&1

if [ $? -eq 0 ]; then
  echo "Build successful. Build output is located in the '$BUILD_OUTPUT_DIR' directory."
else
  echo "Error: Build failed. Check $LOG_FILE for details."
  exit 1
fi
