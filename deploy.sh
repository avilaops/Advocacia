#!/bin/bash

# Azure Web App deployment script
# This script is executed during deployment to Azure App Service

echo "Starting Azure Web App deployment..."

# Install dependencies
echo "Installing production dependencies..."
npm ci --production

# Build the application
echo "Building Next.js application..."
npm run build

# The application will be started by Azure using the start command in package.json
echo "Deployment preparation complete!"
